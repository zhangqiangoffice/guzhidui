# 故纸堆网项目设计

## 一、需求分析

故纸堆，以史为镜，可以知兴替 ——唐太宗·李世民  
历史、人文，一张纸条，一个故事  
每个人都可以在故纸堆里读故事、品故事、说故事  
每个纸条会有若干标签  
可以根据标签来分类查找故事  
每个人可以在故纸堆里读故事，加批注，写纸条，贴标签  
创建历史标签（历史人物、历史事件），标签概述（100字以内，接受他人提交新版本）  

## 二、软件设计

### 网站结构
/index，纸条列表  
/createPaper，创建纸条，说故事  
/createTag，创建标签，维护标签概述  

### 页面设计
借鉴知乎的页面，追求简洁  
1. 首页，纸条列表页  
内容：个人头像、个人姓名、标签搜索框、标签（相当于主题）、纸条列表（一个纸条相当于一层楼）、写纸条按钮（相当于发帖按钮）  
每个纸条有：作者信息（头像、姓名、）、正文节选、发表日期、评论条数    



### 接口设计
1. 注册接口  
发送：{name: '姓名', username:'uasdd@163.com', password: '123456'}  
返回：{result: 1, name: '姓名', id: '987', pic: '#' }  

2. 登录接口  
发送：{username: 'uasdd@163.com', password: '123456'}  
返回：{result: 1, name:'姓名', id:'987', pic:'#' }  
      {result: 0, message: '用户名或密码不正确'}  

3. 获取纸条列表数据  
发送: {word: '', page: 0}  
返回：{result: 1, list:[{author:{name: '姓名', id:'987', pic: '#'}, paper: {id:'', content: '秦时明月汉时关，万里长征人未还', tags[]}}]}  

4. 新增纸条  
发送：{content: '秦时明月汉时关，万里长征人未还', date: '2016-11-12', like: 12 tags:['秦', '汉', '明月']}  
返回: {result: 1, tags[{word: '秦', id: '1', isNew: true},{word: '汉', id: '2', isNew: true},{word: '明月', id: '3', isNew: false}]}  

5. 获取批注  
发送：{paperId: '', page: 0}  
返回：{result: 1, list:[{author:{name: '姓名', id:'987', pic: '#'}, comment: '哈哈', date: '2016-11-12'}]}  

6. 发表批注  
发送: {paperId: '', comment: '不哈哈'}  
返回：{result: 1}  

7. 退出登录  
发送：null  
返回: {result: 1}  


### 数据库设计
用户表--users   
字段：{id:'987', username: 'uasdd@163.com', password: '123456', name: '姓名', pic:'#'}  

标签表--tags  
字段：{id: '', word: ''}  

纸条表--papers  
字段：{id:'', content:'', tagIds: ['', '', ''], commentIds: [], authorId: '', date: ''}  

批注表--comments  
字段：{id:'', comment:'', authorId: '', date: ''}  

## 三、代码构建
