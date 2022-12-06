window.onload = function () {
    // 对话框
    var sidobj = document.getElementById('sid');

    sobj = setTimeout(function () {
        sidobj.remove();
    }, 2000);

    // 点击更换衣服
    var a0 = document.getElementById('a0');
    var a1 = document.getElementById('a1');
    var a2 = document.getElementById('a2');
    var a3 = document.getElementById('a3');
    var a4 = document.getElementById('a4');
    var a5 = document.getElementById('a5');
    var a6 = document.getElementById('a6');
    var a7 = document.getElementById('a7');
    var a8 = document.getElementById('a8');

    a1.onclick=function(){
        a0.src='n1.png';
    }
    a2.onclick=function(){
        a0.src='n2.png';
    }
    a3.onclick=function(){
        a0.src='n3.png';
    }
    a4.onclick=function(){
        a0.src='n4.png';
    }
    a5.onclick=function(){
        a0.src='n5.png';
    }
    a6.onclick=function(){
        a0.src='n6.png';
    }
    a7.onclick=function(){
        a0.src='n7.png';
    }
    a8.onclick=function(){
        a0.src='n8.png';
    }
}
