$('form').validate();
document.onkeyup =  function(e){
    $('.imfor div input').each(function(){
        if($(this).hasClass('error')){
            var c =$(this).parent().index();
            $('.imfor div input').eq(c).css('border-color','red');
        };
    });
    $('.imfor div input').focus(function(){
        var i =$(this).parent().index();
        $('.imfor div input').eq(i).css('border-color','#b2b2b2');
        console.log($(this).parent().children());
        if($('.imfor div .t_er').length > 1){
            $('.imfor div .t_er').eq(0).remove();
        }
    });
    var t = e.target;
    console.log(t);
    //判断是否同时存在多个标签
    // if($('.imfor div').children().is('label')){
    //     if($('.imfor div label').attr('display') != 'none' && $('.imfor div').children().is('.t_er')){
    //         $('.imfor div .t_er').remove();
    //     }
    // }
    // if(t.parentNode)
    console.log(t.parentNode.children);
}
function recheck(tag,reg,msg){
    $(tag).change(function(){
        if(!reg.test($(tag).val())){
            console.log('校验失败');
           
            if($(this).next().length != 0){
                if($(this).next().prop('style').display != 'none' && $(this).next().prop('tagName') == 'LABEL'){
                    console.log('已经有一个提示啦');
                    return;
                }
            }
            $(this).css('border-color','red');
            $(this).parent().append('<p class="t_er" style ="color:red">'+msg+'</p>');
            
        }else{
            console.log('验证成功');
            $(this).css('border-color','#b2b2b2');
            $('.imfor div .t_er').remove();
        }
    });
}
recheck('.c_code',/^\d{6}$/,'请输入6位数字');
recheck('.u_iphone',/^(1|\+861)[3-8]{1}\d{9}$/,'请输入正确的手机号码');