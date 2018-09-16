//双下标轮播函数/左右轮播函数
// imgs:需要轮播的图片
//dots：轮播点的集合
//banner：放轮播图的盒子，元素
//leftBtn：左箭头，元素
//rightBtn：右箭头，元素
//widths：轮播图的宽度，整数
//activeClass:轮播点选中时的类名
//second:轮播图执行的时间
function banner_lr(imgs, dots, banner, leftBtn, rightBtn, widths, activeClass = "active", second = 2000) {
    //2.定义初始值
    imgs[0].style.left = 0;
    dots[0].classList.add(activeClass);
    let now = 0;
    let next = 0;
    //开关:控制快速点击时图片会快速轮播的现象
    //默认开关是打开的，flag=true，可以点击左右箭头
    let flag = true;
    //  now             next
    //  0                0
    //                   ++
    //  left:0         left:1226
    // left:-1226      left:0
    let t = setInterval(move, second);

    //图片向左滑动
    function move() {
        next++;
        if (next == imgs.length) {
            next = 0;
        }
        //确保下一张图永远在最右侧
        imgs[next].style.left = widths + "px";
        animate(imgs[now], {left: -widths});
        animate(imgs[next], {left: 0}, function () {
            flag = true;
        });
        dots[now].classList.remove(activeClass);
        dots[next].classList.add(activeClass);
        now = next;
    }

    //图片向右滑动
    function moveL() {
        next--;
        if (next < 0) {
            next = imgs.length - 1;
        }
        //确保下一张图片永远在最左侧
        imgs[next].style.left = -widths + "px";
        animate(imgs[now], {left: widths});
        animate(imgs[next], {left: 0}, function () {
            flag = true;
        });
        dots[now].classList.remove(activeClass);
        dots[next].classList.add(activeClass);
        now = next;
    }

    //点击左箭头
    leftBtn.onclick = function () {
        //判断开关是否开启
        //如果开关开启，则！flag=false，不执行return，执行flag=false和move（）函数，move执行完flag=true
        //开关关闭的时候，不要点击
        //flag=false   ！flag=true，执行return，结束函数
        if (!flag) {
            return;
        }
        flag = false;
        moveL();
    }
    //点击右箭头
    rightBtn.onclick = function () {
        if (!flag) {
            return;
        }
        flag = false;
        move();
    }
    //鼠标移入轮播图
    banner.onmouseover = function () {
        clearInterval(t);
    }
    //鼠标移出轮播图
    banner.onmouseout = function () {
        t = setInterval(move, second);
    }
    //鼠标移入轮播点
    for (let i = 0; i < dots.length; i++) {
        dots[i].onmouseover = function () {
            if (flag) {
                for (let j = 0; j < imgs.length; j++) {
                    dots[j].classList.remove(activeClass);
                    imgs[j].style.left = widths + "px";
                }
                dots[i].classList.add(activeClass);
                imgs[i].style.left = 0;
                now = i;
                next = i;
            }
        }
    }
    //窗口失去焦点时，停止时间间隔函数
    window.onblur = function () {
        clearInterval(t);
    }
    //窗口获得焦点时，继续获得时间间隔函数
    window.onfocus = function () {
        t = setInterval(move, second);
    }

}