//左右轮播函数
//imgs:需要轮播的图片集合
//dots:轮播点的集合
//banner：放轮播图的盒子
//leftbtn:左箭头
//right:右箭头
//width:轮播图的宽度，整数
//second:轮播的时间间隔
//调用样式
// let imgs=document.querySelectorAll("img");
// let dots=document.querySelectorAll("li");
// let banner=document.querySelectorAll(".banner")[0];
// let leftbtn=document.querySelectorAll(".leftbtn")[0];
// let rightbtn=document.querySelectorAll(".rightbtn")[0];
// let widths=parseInt(getComputedStyle(imgs[0],null).width);
// banner_lr(imgs,dots,banner,leftbtn,rightbtn,widths,"active",2000)
function banner_lr(imgs,dots,banner,leftbtn,rightbtn,widths,activeClass,second){
    let flag=true;
// console.log(imgs);
//2.初始值
    imgs[0].style.left=0;
    dots[0].classList.add(activeClass);
    let now=0;
    let next=0;
    let t=setInterval(move,second);
    function move() {
        next++;
        if (next==imgs.length){
            next=0;
        }
        //确保下一张图永远在最右侧
        imgs[next].style.left=widths+"px";
        animate(imgs[now],{left:-widths});
        animate(imgs[next],{left:0});
        dots[now].classList.remove(activeClass);
        dots[next].classList.add(activeClass);
        now=next;
    }
    clearInterval(t);
    function moveL() {
        next--;
        if(next<0){
            next=imgs.length-1;
        }
        imgs[next].style.left=-widths+"px";
        animate(imgs[now],{left:widths});
        animate(imgs[next],{left:0},function () {
            flag=true
        });
        dots[now].classList.remove(activeClass);
        dots[next].classList.add(activeClass);
        now=next;
    }
    leftbtn.onclick=function () {
        //开关关闭的时候，不让点击
        //判断开关是否开启
        // 开关开启,则!flag=false,不执行return,执行flag=false和move,
        //move执行完flag=true
        if (next==0){
            return;
        }
        if (!flag){
            return;
        }
        flag=false;
        moveL();
    }
    rightbtn.onclick=function () {
        if (next==imgs.length-1){
            return;
        }
        if (!flag){
            return;
        }
        flag=false;
        move();
    }
//鼠标移入banner图 停止播放  移除去 继续播放
    banner.onmouseover = function () {
        clearInterval(t);
    }
    banner.onmouseout = function () {
        t = setInterval(move, second);
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].onmouseover = function () {
            for (let j = 0; j < dots.length; j++) {
                dots[j].classList.remove(activeClass);
                imgs[j].style.left=widths+"px";

            }
            dots[i].classList.add(activeClass);
            imgs[i].style.left=0;
            now=i;
            next=i;

        }
    }
//窗口失去焦点时，停止时间间隔函数
    window.onblur=function () {
        clearInterval(t);
    }
//窗口获得焦点时，继续时间间隔函数
    window.onfocus=function () {
        t=setInterval(move,second);
    }
}
//透明度轮播图的函数



//imgs要轮播的所有图片集合
//dots轮播图集合
//banner:放banner图的大盒子元素
//activeClass：轮播点选中效果的类名
//bannerNum：轮播插图的数量



// 如何调用：
// let imgs = document.querySelectorAll("img");
// let dots = document.querySelectorAll("li");
// let banner = document.querySelectorAll(".banner")[0];
// Olunbo(imgs,dots,banner,activeClass="action",bannerNum=5);
// Olunbo(imgs,dots,banner);

function Olunbo(imgs,dots,banner,activeClass,bannerNum) {
    dots[0].classList.add("action");
    imgs[0].style.zIndex = 2;
    let num = 0;
//鼠标移入某个点  点和图都变
    for (let i = 0; i < dots.length; i++) {
        dots[i].onmouseover = function () {
            for (let j = 0; j < dots.length; j++) {
                dots[j].classList.remove(activeClass);
                imgs[j].style.zIndex = 1;

            }
            dots[i].classList.add(activeClass);
            imgs[i].style.zIndex = 2;
            num = i;

        }
    }


//自动轮播
    let t = setInterval(move, 2000);

    function move() {
        num++;
        if (num == bannerNum) {
            num = 0;
        }
        for (let j = 0; j < dots.length; j++) {
            dots[j].classList.remove(activeClass);
            imgs[j].style.zIndex = 1;
        }
        dots[num].classList.add(activeClass);
        imgs[num].style.zIndex = 2;


    }

//鼠标移入banner图 停止播放  移除去 继续播放
    banner.onmouseover = function () {
        clearInterval(t);
    }
    banner.onmouseout = function () {
        t = setInterval(move, 2000);
    }
}