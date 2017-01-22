var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;


const FAIL = 0;
const SUCCESS = 1;
const PAGE_SIZE = 10;

//返回真
router.post('/true', function(req, res) {
    res.json({result: SUCCESS, message: '成功'});
});

//返回假
router.post('/false', function(req, res) {
    res.json({result: FAIL, message: '失败'});
});

//获取纸条列表
router.post('/getPapers', function(req, res) {
    var datas = {
        word: req.body.word,
        page: req.body.page
    }
    MongoClient.connect(dburl, function(err, db) {
        var collection = db.collection('papers');
        console.log("查询纸条列表--" + datas.word);
        if (datas.word === '') {
          collection.find({}).skip((datas.page - 0) * PAGE_SIZE ).limit(PAGE_SIZE).sort({date: -1}).toArray(function(err, docs) {  
            res.json({result: SUCCESS, message: '获取纸条列表成功', list: docs, word: datas.word});
          })
        } else {
          collection.find({"tags": datas.word}).skip((datas.page - 0) * PAGE_SIZE ).limit(PAGE_SIZE).sort({date: -1}).toArray(function(err, docs) {  
            res.json({result: SUCCESS, message: '获取纸条列表成功', list: docs, word: datas.word});
          })
        }
        db.close();
    });
});

//提交密码，验证登录
router.post('/login', function(req, res) {
    var user={
        username: req.body.username,
        password: req.body.password
    }
    MongoClient.connect(dburl, function(err, db) {
        var collection = db.collection('users');
        collection.find(user).toArray(function(err, docs) {
            if (docs.length === 1) {
                var user_session = {
                    username : docs[0].username,
                    _id : docs[0]._id,
                    name: docs[0].name
                }
                req.session.user = user_session;
                console.log(user.username + "登录成功");
                res.json({result: 1, message: '登录成功', name: docs[0].name, username: docs[0].username});
            } else {
                req.session.error = "用户名或密码不正确";
                res.json({result: 0, message: '用户名或密码不正确'});
            }
            db.close();
        })
    });
});

//验证用户名是否已使用
router.post('/checkUsername', function(req, res) {
    var user={
        username: req.body.username,
    }
    MongoClient.connect(dburl, function(err, db) {
        var collection = db.collection('users');
        collection.find(user).toArray(function(err, docs) {
            console.log(user.username + "用户名验证");
            if (docs.length === 0) {
                res.json({result: 1, message: '用户名可以使用'});
            } else {
                res.json({result: 0, message: user.username + " 用户名已存在", });
            }
            db.close();
        })
    });
});

//提交密码，验证登录
router.post('/register', function(req, res) {
    var user = {
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
    }
    MongoClient.connect(dburl, function(err, db) {
        var collection = db.collection('users');
        collection.find({username: user.username}).toArray(function(err, docs) {
            if (docs.length === 0) {
                collection.insert(user, function(err, result){
                    console.log('插入一个新的用户到users');
                    req.session.user = user;
                    res.json({result: 1, message: '新用户注册成功', name: user.name, username: user.username});
                });
            } else {
                res.json({result: 0, message: user.username + " 用户名已存在", });
            }
            db.close();
        })
    });
});

//退出登录
router.post('/logout', function(req, res) {
    req.session.user = false;
    console.log(req.body.username + "退出登录");
    res.json({result: 1, message: '登出成功'});
});

//验证登录是否有效
router.post('/check', function(req, res) {
    if (!req.session.user) {
        res.json({result: 1, check: false, message: '登录失效'});
    } else {
        res.json({result: 1, check: true, message: '登录有效'});
    }
});

//写新纸条
router.post('/submitPaper', function(req, res) {
    if (!req.session.user) {
        res.json({result: 0, message: '登录失效'});
    } else {
        MongoClient.connect(dburl, function(err, db) {
            var collection = db.collection('papers');
            var reg1 = new RegExp("\r\n","g");
            var reg2 = new RegExp("\n","g");
            var str = (req.body.paperContent).replace(reg1,"<br>");
            str = str.replace(reg2, "<br>")
            var datas = {
                content: str,
                date: new Date(),
                author: {
                    _id: req.session.user._id,
                    name: req.session.user.name
                },
                tags: [req.body.key1, req.body.key2, req.body.key3]
            }
            
            collection.insert(datas, function(err, result){
                console.log(`${req.session.user.username}插入一个新的记录到papers`);
                res.json({result: 1, message: '数据保存成功', key1:req.body.key1});
                db.close();
            });
        });
    }
});

module.exports = router;