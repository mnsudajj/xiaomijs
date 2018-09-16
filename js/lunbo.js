



// 6个形参
// 把注释的加到html中的script
// let imgs = document.querySelectorAll("img");
// let dots = document.querySelectorAll("li");
// let banner = document.querySelectorAll(".banner")[0];
// lunbo(imgs,dots,banner);




function lunbo(imgs,dots,banner,activeClass="active",bannerNum=5,second=2000) {
    let num = 0;
    imgs[0].style.zIndex = 2;
    dots[0].classList.add(activeClass);
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
    let t = setInterval(move, second);


    function move() {
        num++;
        if (num == bannerNum) {
            num = 0;
        }
        for (let j = 0; j < dots.length; j++) {
            dots[j].classList.remove(activeClass);
            imgs[j].style.zIndex = 1;
        }
        imgs[num].style.zIndex = 2;
        dots[num].classList.add(activeClass);
    }

    banner.onmouseover = function () {
        clearInterval(t);
    }
    banner.onmouseout = function () {
        t = setInterval(move, second);
    }
}