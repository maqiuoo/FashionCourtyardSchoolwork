window.onload = function () {
    // 对话框
    var sidobj = document.getElementById('sid');

    sobj = setTimeout(function () {
        sidobj.remove();
    }, 2000);

    //临时id存储正在拖拽的元素的编号，每次拖拽都改变临时id，如果目标元素的编号和临时id所存储的值一样，则改变透明度，并移除拖拽的元素
    var s2 = document.getElementById('2');
    var s7 = document.getElementById('7');
    var s8 = document.getElementById('8');
    var tid='0';

    s2.ondragstart = function(event){
        tid='2';
    }

    var target2 = document.getElementById('a22');
    target2.ondragover = function(event){
        var event = event || window.event;
        event.preventDefault()
    }

    target2.ondrop = function(event){
        if(tid=='2'){
        a2.style.opacity='1';
        s2.remove();
        if(!(document.getElementById('7')||document.getElementById('8'))){
            location='Republic.html';
        }
        }
    }

    s7.ondragstart = function(event){
        tid='7';
    }

    var target7 = document.getElementById('a77');
    target7.ondragover = function(event){
        var event = event || window.event;
        event.preventDefault()
    }

    target7.ondrop = function(event){
        if(tid=='7'){
        a7.style.opacity='1';
        s7.remove();
        if(!(document.getElementById('2')||document.getElementById('8'))){
            location='Republic.html';
        }
        }
    }
    s8.ondragstart = function(event){
        tid='8';
    }

    var target8 = document.getElementById('a88');
    target8.ondragover = function(event){
        var event = event || window.event;
        event.preventDefault()
    }

    target8.ondrop = function(event){
        if(tid=='8'){
        a8.style.opacity='1';
        s8.remove();
        if(!(document.getElementById('7')||document.getElementById('2'))){
            location='Republic.html';
        }
        }
    }
}