// 选项卡
window.onload=function(){
let lis=document.querySelectorAll(".outer");
	let inn=document.querySelectorAll(".bn-choose");
	// console.log(lis);
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			for(let j=0;j<inn.length;j++){
				inn[j].style.display="none";
			}
		inn[i].style.display="flex";
		}
		lis[i].onmouseleave=function(){
			inn[i].style.display="none";
		}
	}

	// 导航下拉菜单
	let text=document.querySelectorAll(".hd-text");
	let menu=document.querySelectorAll(".navmenu");
	// console.log(menu);
	for(let x=0;x<text.length;x++){
		text[x].onmouseenter=function(){
			for(let y=0;y<menu.length;y++){
				menu[y].style.display="none";
			}
		menu[x].style.display="block";
		}
		text[x].onmouseleave=function(){
			menu[x].style.display="none";
		}
	}



	//轮播图
	//1.获取所需元素
	    let pic=document.querySelectorAll(".pict");
	    let dots=document.querySelectorAll(".item");
	    let banner=document.querySelectorAll(".bn")[0];
	    let leftBtn=document.querySelectorAll(".leftBtn")[0];
	    let rightBtn=document.querySelectorAll(".rightBtn")[0];
	    console.log(pic,dots,banner,leftBtn,rightBtn);
	    let widthes=parseInt(getComputedStyle(pic[0],null).width);
	    // console.log(widths);
	    
	    // 定义初始值
	    pic[0].style.opacity=1;
	    dots[0].classList.add("active");
	    let num=0;
	    let t=setInterval(move,2000);
	    let now=0;
	    let flag=true;

	    //鼠标点击轮播点
	    for(let i=0;i<dots.length;i++){
	    	dots[i].onclick=function(){
	    		for(let j=0;j<pic.length;j++){
	    			dots[j].classList.remove("active");
	    			pic[j].style.opacity=0;
	    		}
	    		dots[i].classList.add("active");
	    		pic[i].style.opacity=1;
	    		num=i;
	    	}
	    }

	    //自动轮播(向左动)
	    function move(){
	    	num++;
	    	if(num==dots.length){
	    		num=0;
	    	}
	    	for(let j=0;j<pic.length;j++){
	    		pic[j].style.opacity=0;
	    		dots[j].classList.remove("active");
	    	}
	    	pic[num].style.opacity=1;
	    	dots[num].classList.add("active");
	    }

	    //自动轮播(向右动)
	    function moveL(){
	    	num--;
	    	if(num<0){
	    		num=pic.length-1;
	    	}
	    	for(let j=0;j<pic.length;j++){
	    		pic[j].style.opacity=0;
	    		dots[j].classList.remove("active");
	    	}
	    	pic[num].style.opacity=1;
	    	dots[num].classList.add("active");
	    }


	    //移入图片停止轮播
	    banner.onmouseenter=function () {
	        clearInterval(t);
	    }
	    banner.onmouseleave=function () {
	        t=setInterval(move,2000);
	    }

	    //点击左箭头
	    leftBtn.onclick=function () {
	        moveL();
	    }
	    //点击右箭头
	    rightBtn.onclick=function () {
	        move();
	    }


	  




	  // 小米闪购轮播
	  
    let button=document.querySelectorAll("button");
    let miList=document.querySelector(".mi_list");
    let w=parseInt(getComputedStyle(miList,null).width)/2;
    let times=0;
    button[0].onclick=function () {
        times--;//次数
        // console.log(times);
        if(times < 0){
            times=0;
        }
        miList.style.transform=`translate(${-w*times}px)`;

    }
    button[1].onclick=function () {
        times++;
        if(times==2){
            times=1;
        }
        miList.style.transform=`translate(${-w*times}px)`;

    }






    let button1=document.querySelectorAll("button1");
    let miList1=document.querySelector(".list");
    let w1=parseInt(getComputedStyle(miList1,null).width)/2;
    let times1=0;
    button1[0].onclick=function () {
        times1--;//次数
        // console.log(times);
        if(times1 < 0){
            times1=0;
        }
        miList1.style.transform=`translate(${-w1*times1}px)`;

    }
    button1[1].onclick=function () {
        times1++;
        if(times1==2){
            times1=1;
        }
        miList1.style.transform=`translate(${-w1*times1}px)`;

    }







    //内容轮播图
	//第一个  图书
    let imgs1=document.querySelectorAll(".con-desc1");
    let point1=document.querySelectorAll(".pin1");
    let leftbtn1=document.querySelector(".con-leftBtn1");
    let rightbtn1=document.querySelector(".con-rightBtn1");
    // console.log(imgs,point,leftbtn,rightbtn);
    let widths1=parseInt(getComputedStyle(imgs1[0],null).width);
    // console.log(widths);
    contentBn(imgs1,point1,leftbtn1,rightbtn1,widths1);


    //第二个  MIUI
    let imgs2=document.querySelectorAll(".con-desc2");
    let point2=document.querySelectorAll(".pin2");
    let leftbtn2=document.querySelector(".con-leftBtn2");
    let rightbtn2=document.querySelector(".con-rightBtn2");
    // console.log(imgs,point,leftbtn,rightbtn);
    let widths2=parseInt(getComputedStyle(imgs2[0],null).width);
    // console.log(widths);
    contentBn(imgs2,point2,leftbtn2,rightbtn2,widths2);


     //第三个  游戏
    let imgs3=document.querySelectorAll(".con-desc3");
    let point3=document.querySelectorAll(".pin3");
    let leftbtn3=document.querySelector(".con-leftBtn3");
    let rightbtn3=document.querySelector(".con-rightBtn3");
    // console.log(imgs,point,leftbtn,rightbtn);
    let widths3=parseInt(getComputedStyle(imgs3[0],null).width);
    // console.log(widths);
    contentBn(imgs3,point3,leftbtn3,rightbtn3,widths3);



     //第四个  应用
    let imgs4=document.querySelectorAll(".con-desc4");
    let point4=document.querySelectorAll(".pin4");
    let leftbtn4=document.querySelector(".con-leftBtn4");
    let rightbtn4=document.querySelector(".con-rightBtn4");
    // console.log(imgs,point,leftbtn,rightbtn);
    let widths4=parseInt(getComputedStyle(imgs4[0],null).width);
    // console.log(widths);
    contentBn(imgs4,point4,leftbtn4,rightbtn4,widths4);


    


}





