/**
 * 文件：公共函数
 * 作者：无名小强
 * 版本：v0.1
 * 日期：2016-12-02
**/

//获取当前时间字符串
function nowString() {
    var time = new Date();
    var year = time.getFullYear();
    var month = addZero(time.getMonth() + 1);
    var day = addZero(time.getDate());
    var hour = addZero(time.getHours());
    var minute = addZero(time.getMinutes());
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
    // body...
}

//补充时间字符的前导0
function addZero(num) {
    var no = num - 0;
    if (no < 10) {
        no = '0' + no;
    } else {
        no = '' + no;
    }
    return no;
}

//保存某项记录
function saveRecord(datas) {
    $.ajax({
        url: "./add",
        data: datas,
        type: "post",
        dataType: "json",
        success:function(msg){
            if (msg.result === 1) {
                window.location.href = './history/' + datas.type;
            } else {
                alert(msg.message);
            }
        }
    });
}

$(function() {
    
    //日期控件，默认显示当前时间
    $('#date').val(nowString());

    //点击“使用当前时间”按钮
    $('#now').click(function() {
        $('#date').val(nowString());
    });

    //删除某项记录
    $('.delete').click(function(){
        if (confirm('确定删除？')) {
            $(this).text('数据删除中...').attr("disabled", "disabled");
            var datas = {
                id: $(this).data('id'),
                type: $(this).data('type')
            }
            $.ajax({
                url: "../delete",
                data: datas,
                type: "post",
                dataType: "json",
                success:function(msg){
                    $('.delete').attr("disabled", false);
                    if (msg.result === 1) {
                        window.location.reload();
                    } else {
                        alert(msg.message);
                    }
                    
                }
            });
        }
    });
})
