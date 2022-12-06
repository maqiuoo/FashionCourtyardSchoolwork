//兼容不同浏览器获取行间样式
function getStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}

window.onload = function () {
    var oImg = document.getElementById("img2");
    //添加点击事件
    oImg.onclick = function () {
        //先获取图片自身所在的left值
        var pos = parseFloat(getStyle(oImg, "left"));
        var pos2 = parseFloat(getStyle(oImg, "top"));
        var fin = false;
        var arr = [];
        var arr2 = [];
        var num = 0;
        var timer = null;
        //抖动频率de数组，一正一负[20,-20,18,-18...]
        for (var i = 20; i > 0; i -= 2) {
            arr.push(i, -i)
        }
        for (var i = 1; i < 20; i++) {
            arr2.push(i * i * 2)
        }
        arr.push(0);
        //启用定时器前先关闭定时器
        clearInterval(timer);
        timer = setInterval(function () {
            //让图片的left跟随数组里的值变化就会实现左右移动效果
            oImg.style.left = pos + arr[num] + "px";
            num++;
            if (num === arr.length) {
                fin = true;
                num = 0;
            }

            if (fin == true) {
                oImg.style.top = pos2 + arr2[num] + "px";
                num++;
                if (num === arr.length) {
                    clearInterval(timer);
                }

            }
        }, 50)
        sidobj = document.getElementById('sid');
        sobj = setTimeout(function () {
            location = 'songDynasty.html';
        }, 2500);

    }
}
