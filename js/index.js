/**
 * Created by Administrator on 2017/1/4 0004.
 */
window.onload=function() {
    var oBox1 = document.getElementById('box1');
    var oBox2 = document.getElementById('box2');
    var oBox3 = document.getElementById('box3');
    var oUl = document.getElementById('ul');
    var oUl2 = document.getElementById('ul2');
    var oUl3 = document.getElementById('ul3');
    var oLi = document.getElementsByTagName('li');
    var oYi = document.getElementById('yi');
    var oEr = document.getElementById('er');
    var oSan = document.getElementById('san');
    var arr = ['上衣', '裤子', '衬衣', '内衣'];
    var brr = ['上衣', '裤子', '衬衣', '内衣'];
    var crr = ['上衣', '裤子', '衬衣', '内衣'];
    var num=1;
    oYi.onclick=function(){
        if(num==1){
            oUl.style.display='block';
            oUl2.style.display="none";
            oUl3.style.display="none";
            num++;
        }else if(num>=2){
            num=1;
            oUl.style.display='none';
        }

    };
    oEr.onclick=function(){
        if(num==1){
            oUl2.style.display='block';
            oUl.style.display="none";
            oUl3.style.display="none";
            num++;
        }else if(num>=2){
            num=1;
            oUl2.style.display='none';
        }

    };
    oSan.onclick=function(){
        if(num==1){
            oUl3.style.display='block';
            oUl.style.display="none";
            oUl2.style.display="none";
            num++;
        }else if(num>=2){
            num=1;
            oUl3.style.display='none';
        }

    };
//

    for(var i=0;i<arr.length;i++){

        oUl.innerHTML+='<li>'+arr[i]+'</li>';
    }
    for(var i=0;i<arr.length;i++){

        oUl2.innerHTML+='<li>'+brr[i]+'</li>';
    }
    for(var i=0;i<arr.length;i++){

        oUl3.innerHTML+='<li>'+crr[i]+'</li>';
    }
    //for(var i=0;i<oLi.length;i++){
    //    oLi[i].onmouseover=function(){
    //        this.style.background='#eee';
    //    };
    //    oLi[i].onmouseout=function(){
    //        this.style.background='';
    //    }
    //}
}