window.onload = function () {
    //临时id存储正在拖拽的元素的编号，每次拖拽都改变临时id，如果目标元素的编号和临时id所存储的值一样，则改变透明度，并移除拖拽的元素
    var s5 = document.getElementById('5');
    var s6 = document.getElementById('6');
    var here = document.getElementById('here');
    var tid='0';

    s5.ondragstart = function(event){
        tid='5';
    }

    var target5 = document.getElementById('a55');
    target5.ondragover = function(event){
        var event = event || window.event;
        event.preventDefault()
    }

    target5.ondrop = function(event){
        if(tid=='5'){
        a5.style.opacity='1';
        s5.remove();
        if(!(document.getElementById('6'))){
            here.style.display='inline';
        }
        }
    }

    s6.ondragstart = function(event){
        tid='6';
    }

    var target6 = document.getElementById('a66');
    target6.ondragover = function(event){
        var event = event || window.event;
        event.preventDefault()
    }

    target6.ondrop = function(event){
        if(tid=='6'){
        a6.style.opacity='1';
        s6.remove();
        if(!(document.getElementById('5'))){
            here.style.display='inline';
        }
        }
    }

}