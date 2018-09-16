function shuanglun(imgs, dots, banner, activeClass, second, leftBtn, rightBtn, widths) {
    imgs[0].style.left = 0;
    dots[0].classList.add(activeClass);
    let now = 0;
    let next = 0;
//开关：控制快速点击时图片会快速轮播的现象
//
    let flag = true;
    let t = setInterval(move, second);

    function move() {
        next++;
        if (next == imgs.length) {
            next = 0;
        }
        imgs[next].style.left = widths + "px";
        animate(imgs[now], {left: -widths});
        animate(imgs[next], {left: 0}, function () {
            flag = true;
        });
        dots[now].classList.remove(activeClass);
        dots[next].classList.add(activeClass);
        now = next;
    }

    function moveL() {
        next--;
        if (next < 0) {
            next = imgs.length - 1;
        }
        imgs[next].style.left = -widths + "px";
        animate(imgs[now], {left: widths});
        animate(imgs[next], {left: 0}, function () {
            flag = true;
        });
        dots[now].classList.remove(activeClass);
        dots[next].classList.add(activeClass);
        now = next;
    }

//开关是否开启
    leftBtn.onclick = function () {
        // if (next==2) {
        //     return;
        // }
        if (!flag) {
            return;
        }
        flag = false;

        moveL();
    }
    rightBtn.onclick = function () {
        if (!flag) {
            return;
        }
        if (next==imgs.length-1) {
            return;
        }
        flag = false;
        move();
    }
    banner.onmouseenter = function () {
        clearInterval(t)
    }
    banner.onmouseleave = function () {
        t = setInterval(move, second)
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].onmouseover = function () {

            for (let j = 0; j < dots.length; j++) {
                dots[j].classList.remove(activeClass);
                imgs[j].style.left = widths + "px";
            }
            dots[i].classList.add(activeClass);
            imgs[i].style.left = 0;
            now = i;
            next = i;
        }
    }

//窗口失去监视，停止时间间隔函数
    window.onblur = function () {
        clearInterval(t);
    }
// 窗口获得焦点时，继续时间间隔函数
    window.onfocus = function () {
        t = setInterval(move, second);
    }
}