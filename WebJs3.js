window.onload = function () {
    //临时id存储正在拖拽的元素的编号，每次拖拽都改变临时id，如果目标元素的编号和临时id所存储的值一样，则改变透明度，并移除拖拽的元素
    var s3 = document.getElementById('3');
    var s4 = document.getElementById('4');
    var s1 = document.getElementById('1');
    var tid='0';

    s3.ondragstart = function(event){
        tid='3';
    }

    var target3 = document.getElementById('a33');
    target3.ondragover = function(event){
        var event = event || window.event;
        event.preventDefault()
    }

    target3.ondrop = function(event){
        if(tid=='3'){
        a3.style.opacity='1';
        s3.remove();
        if(!(document.getElementById('4')||document.getElementById('1'))){
            location='nowadays.html';
        }
        }
    }

    s4.ondragstart = function(event){
        tid='4';
    }

    var target4 = document.getElementById('a44');
    target4.ondragover = function(event){
        var event = event || window.event;
        event.preventDefault()
    }

    target4.ondrop = function(event){
        if(tid=='4'){
        a4.style.opacity='1';
        s4.remove();
        if(!(document.getElementById('3')||document.getElementById('1'))){
            location='nowadays.html';
        }
        }
    }
    s1.ondragstart = function(event){
        tid='1';
    }

    var target1 = document.getElementById('a11');
    target1.ondragover = function(event){
        var event = event || window.event;
        event.preventDefault()
    }

    target1.ondrop = function(event){
        if(tid=='1'){
        a1.style.opacity='1';
        s1.remove();
        if(!(document.getElementById('3')||document.getElementById('4'))){
            location='nowadays.html';
        }
        }
    }
}