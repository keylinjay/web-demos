window.onload = function(){
    before();
    after();
    }
     
    var index = 1;
     
    function before(){
         
        var c = document.getElementById('bott1');
        c.onclick = function(){
            if( index == 6){ return;}
             
            var a = document.getElementById('card'+index);
            a.style.transform = "rotateX(-90deg)"
            a.style.webkitTransform = "rotateX(-90deg)"
             
            index++;
             
            var b = document.getElementById('card'+index);
            b.style.transform = "rotateX(0deg)"
            b.style.webkitTransform = "rotateX(0deg)"
            }
        }
             
        function after(){
         
        var c = document.getElementById('bott2');
        c.onclick = function(){
            if( index == 1){ return;}
             
            var a = document.getElementById('card'+index);
            a.style.transform = "rotateX(90deg)"
            a.style.webkitTransform = "rotateX(90deg)"
             
            index--;
             
            var b = document.getElementById('card'+index);
            b.style.transform = "rotateX(0deg)"
            b.style.webkitTransform = "rotateX(0deg)"
            }
        }