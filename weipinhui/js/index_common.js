// 头部tip地址选择
var obj = $('.addres_box').get(0);
var tar = $('.hs_address div:first').get(0);
var pervious = 0;
var preIndex = -1;//上一次点击的是那个
//改变类名和display属性的函数
function changeStyle(obj,tar,clasName,dis){
    obj.style.display = dis;
    tar.className = clasName;
}
$(document).click(function(e){
    if(e.target.className == 'one_address' || e.target.className == 'addres_box'){
        changeStyle(obj,tar,'one_address dhover','block');
    }else{
        changeStyle(obj,tar,'one_address','none');
    }
    var target = e.target || window.event;
    if(e.target.nodeName == 'P' && e.target.parentNode.className == 'addres_box'){
        $('.addres_box p').eq(pervious).attr('class','');
        pervious = $(target).index();
        $('.one_address').html($('.addres_box p').eq(pervious).html());
        $('.addres_box p').eq(pervious).attr('class','pHover');
        alert('哟哟，成功切换城市');
    }
    // 点击了返回顶部
    if(e.target.className.indexOf('icon-fanhuidingbu01') != -1 || e.target.className == 'toTop'){
        console.log('返回顶部');
        document.body.scrollTop = 0+'px';
        document.documentElement.scrollTop = 0 + 'px';
    }
    console.log(e.target.nodeName);
    //用户还没有登陆点击侧边栏
    var t_index = $(e.target.parentNode.parentNode).index();
    if(e.target.nodeName == 'I' && e.target.parentNode.parentNode.parentNode.className == 'nav_cen'){
        if( e.target.parentNode.className == 'T_my'){
            console.log('账号不需要点击事件');
            return;
        }
        console.log(t_index,preIndex);
        if(t_index != preIndex){
            $('.nav_cen li').eq(preIndex).children().eq(1).css('display','none');
        }
            $('.nav_cen li').eq(t_index).children().eq(1).css('display','block');
            preIndex = t_index;
    }else{
        $('.nav_cen li').eq(preIndex).children().eq(1).css('display','none');
    }
});
// 右侧栏hover事件
var timer;
$('.T_my').mouseover(function(){
    $('.zyy_box').addClass('sidebarcom-pop-show');  
});
$('.T_my').mouseout(function(){
    $('.zyy_box').removeClass('sidebarcom-pop-show');
});