//根据className获取元素
function byClass(cla) {
    var arr = [];
    var tags = document.all ? document.all : document.getElementsByTagName('*');//解决兼容
    for (var i = 0, len = tags.length; i < len; i++) {
        var str = tags[i].className;
        var y = str.split(' ');
            if (str && y.indexOf(cla) != -1) {
                arr.push(tags[i]);
            }
    }
    return arr;
}
//获取元素样式的函数（注意兼容问题）
function byStyle(obj, sty) {
    var oSty;
    if (obj.currentStyle) {
        oSty = obj.currentStyle[sty];
    } else {
        oSty = getComputedStyle(obj, null)[sty];
    }
    // var oSty = obj.currentStyle ? obj.currentStyle[sty] : getComputedStyle(obj,null)[sty];
    console.log(oSty);
    return oSty;
}
 // 写一个函数 randomInt(min,max) 随机生成[min,max]区间的整数。
 function randomInt(min,max){
    return Math.round(Math.random()*(Math.abs(max-min))+min);
}
//颜色随机

function colorRan() {
    var arrcolor = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += arrcolor[randomInt(0, 15)];
    }
    if(color == '#ffffff' ||color == '#cccccc') colorRan() ;
    return color;
}
//敏感词过滤
function sensitive(str) {
    var reg = /日本|韩国/g;
    var str0 = str.replace(reg, function (str1) {
        var tem = '';
        for (var i = 0, len = str1.length; i < len; i++) {
            tem += '*';
        }
        return tem;
    });
    return str0;
}
//编写函数norepeat(arr) 将数组的重复元素去掉，并返回新的数组
//方法一：
function norepeat(arr){
    for(var i =0 ,len =arr.length;i<len;i++){
        for(var j =1 ;j<len;j++){
            if(arr[i] == arr[j] && i != j){
                arr.splice(j,1);
            }
        }
    }
    console.log(arr);
}
//方法二：
function norepeat(arr){
    // return Array.from(new Set(arr));
    return [...new Set(arr)]
}
//xy方向缓冲运动
function move(dom,target,callback){
    dom.timer = null;
    clearInterval(dom.timer);
    dom.timer = setInterval(function(){
        //x方向
        var speed = (target.x - dom.offsetLeft)/10;
        speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);//对速度取整避免数据丢失
        if(Math.abs(target.x - dom.offsetLeft) <= Math.abs(speed)){
            dom.style.left = target.x +'px';
            // clearInterval(dom.timer);
            // callback();//执行相应的回调函数
        }else{
            dom.style.left = dom.offsetLeft + speed +'px';
        }
        var  speedY = (target.y - dom.offsetTop)/10;
        speedY = speedY >0 ? Math.ceil(speedY) : Math.floor(speedY);
        if(Math.abs(target.y - dom.offsetTop) <= Math.abs(speedY)){
            clearInterval(dom.timer);
            dom.style.top = target.y + 'px';
            callback();
        }else{
            dom.style.top = dom.offsetTop +speedY +'px';
        }
    },20);
}
//获取元素到最外层的offsetLeft/offsetTop值
function offset(obj){
    var l = 0,t = 0;
    while(obj){
        l += obj.offsetLeft;
        t += obj.offsetTop;
        obj = obj.parentNode;
        if(obj = document.body){
            return {left:l,top:t};
        }
    }
} 
//设置cookie
function setCookie(key,value,day){
    if(day){
        var d = new Date();
        d.setDate(d.getDate()+day);
        document.cookie = `${key}=${escape(value)}; expires = ${d}`;
    }else{
        document.cookie = `${key}=${escape(value)};`
    }
}
//获取cookie对应key的value
function getCookieV(key){
    var cooikes = document.cookie;
    var arr = cooikes.split('; ');
    for(var i =0 ;i<arr.length;i++){
       var n = arr[i].split('=');
       if(n[0] == key){
           return unescape(n[1]);
       }
    }
    return false;
}
//删除key对应的cookie
function delCookie(key){
    setCookie(key,'',-1);
}
