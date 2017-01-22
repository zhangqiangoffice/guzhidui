/**
 * 文件：相册脚本
 * 作者：无名大强
 * 版本：v0.1
 * 版权：张强
 * 日期：2016-7-21
**/

$(function(){

    var photos;

    //获取全部相片的地址信息
    findAllPhotos();

    //点击右侧页
    $('#right_sheet').click(function(){
        var index = $(this).data('i');
        getTwoPhotos(index, 1);
        
    });

    //点击左侧页
    $('#left_sheet').click(function(){
        var index = $(this).data('i');
        getTwoPhotos(index, 0);
        
    });


    /**
     * 函数：获取新的相片
     * 输入：
     * 输出：
    **/
    function getTwoPhotos(index, to) {
        $('.clip').fadeOut();
        var len = photos.length;
        var i1, i2;
        if (to.toString() === '1') {
            i1 = (index - 0 + 1) % len;
            i2 = (index - 0 + 2) % len;
        } else {
            i1 = (index - 2 + len) % len;
            i2 = (index - 1 + len) % len;
        }
        $('#left_sheet').find('img').attr('src',photos[i1].path);
        $('#left_sheet').find('label').text(dateFormat(photos[i1].date));
        $('#left_sheet').data('i', i1);
        $('#right_sheet').find('img').attr('src',photos[i2].path);
        $('#right_sheet').find('label').text(dateFormat(photos[i2].date));
        $('#right_sheet').data('i', i2);
        $('.clip').fadeIn();
    }

    /**
     * 函数：获取全部照片信息
     * 输入：
     * 输出：
    **/
    function findAllPhotos() {
        $.ajax({
            type: "post",
            url: "/ajax/find_all_photos",
            dataType: "json",
            success: function(msg) {
                // console.log(msg);
                if (msg.result.toString() === '1') {
                    photos = msg.list;
                } else {
                    alert(msg.message);
                }
            }
        });
    }

    /**
     * 函数：日期格式化
     * 输入：
     * 输出：
    **/
    function dateFormat(date) {
        var arr = date.split('-');
        var str = arr[0] + '年' + Number(arr[1]) + '月' + Number(arr[2]) + '日';
        return str;
    }
});