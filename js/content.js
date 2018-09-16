function contentBn(imgs,point,leftbtn,rightbtn,widths){
    //2.定义初始值
    imgs[0].style.left=0;
    point[0].classList.add("hot1");
    let now=0;
    let next=0;
    //开关:控制快速点击时图片会快速轮播的现象
    //默认开关是打开的，flag=true，可以点击左右箭头
    let flag=true;
    // let t=setInterval(move,2000);
    //图片向左滑动
    function move(){
        next++;
        if(next==imgs.length){
            next=0;
        }
        //确保下一张图永远在最右侧
        imgs[next].style.left=widths+"px";
        animate(imgs[now],{left:-widths});
        animate(imgs[next],{left:0},function () {
            flag=true;
        });
        point[now].classList.remove("hot1");
        point[next].classList.add("hot1");
        now=next;
    }
    //图片向右滑动
    function moveL() {
        next--;
        if(next<0){
            next=imgs.length-1;
        }
        //确保下一张图片永远在最左侧
        imgs[next].style.left=-widths+"px";
        animate(imgs[now],{left:widths});
        animate(imgs[next],{left:0},function () {
            flag=true;
        });
        point[now].classList.remove("hot1");
        point[next].classList.add("hot1");
        now=next;
    }
    //点击左箭头
    leftbtn.onclick=function () {
        if(now==0){
            return;
        }
        if(!flag){
            return;
        }
        flag=false;
        moveL();
    }
    //点击右箭头
    rightbtn.onclick=function () {
        if(now==point.length-1){
            return;
        }
        if(!flag){
            return;
        }
        flag=false;
        move();
    }


    //鼠标点击轮播点
    for (let i=0;i<point.length;i++){
        point[i].onclick=function () {
            if(now==i){
                return;
            }else if(now<i){
                imgs[i].style.left=`${widths}px`;
                animate(imgs[now],{left:-widths});
                animate(imgs[i],{left:0},function () {
                    flag=true;
                });
                point[now].classList.remove("hot1");
                point[i].classList.add("hot1");
                now=i;
            }else{
                imgs[i].style.left=`$-{widths}px`;
                animate(imgs[now],{left:widths});
                animate(imgs[i],{left:0},function () {
                    flag=true;
                });
                point[now].classList.remove("hot1");
                point[i].classList.add("hot1");
                now=i;
            }
        }
    }
}