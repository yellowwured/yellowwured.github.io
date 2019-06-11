function play(index){
    var p =document.getElementById("player");
    switch(index){
        case 1:
            p.innerHTML='<iframe width="720" height="480" src="https://www.youtube.com/embed/wOV7CtfW944" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        break;
        case 2:
            p.innerHTML='<iframe width="720" height="480" src="https://www.youtube.com/embed/9mT66Rso6RE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        break;
        case 3:
            p.innerHTML='<iframe width="720" height="480" src="https://www.youtube.com/embed/GCzAALQSRHg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        break;
        case 4:
            p.innerHTML='<iframe width="720" height="480" src="https://www.youtube.com/embed/e_LchyD73-s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        break;
        case 5:
            p.innerHTML='<iframe width="720" height="480" src="https://www.youtube.com/embed/0brPJ0tKP6E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        break;
    }
}
document.getElementById('switchlight').addEventListener('click', function () {  /**夜*/
    document.getElementById("switchlight-div").classList.toggle('switchlight');
});

function myFunction() {   /**替換文字to translate*/
    var str = document.getElementById("transtext").innerHTML; 
    var trn = str.replace(str, "潘孟鉉分別於2001年和2003年獲得台灣國立中正大學和國立清華大學的學士和碩士學位，並獲得博士學位。 他於2008年獲得台灣國立交通大學學位。獲得博士學位後，潘博士在台灣新竹HTMM公司工作了三年，致力於設計和實施3GPP R99 / R5 / R6 第2/3層協議棧。 潘博士現任台灣淡江大學計算機科學與信息工程系副教授。 他還擔任國際分佈式傳感器網絡期刊（IJDSN）的副主編。 他的研究興趣包括無線傳感器網絡，移動計算和LTE-A網絡。 潘博士現在是IEEE的成員。");
    document.getElementById("afttrans").innerHTML ="<br><br>" +trn;
  }

function hidemytext(index){
    switch(index){
        case 1:
            var x = document.getElementById("hidingparts3");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }    
        break;
        case 2:
            var x = document.getElementById("hidingparts4");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            } 
        break;
        case 3:
            var x = document.getElementById("hidingparts5");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            } 
        break;
        case 4:
            var x = document.getElementById("hidingparts6");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }     
        break;
        case 5:
            var x = document.getElementById("hidingparts7");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }     
        break;
        case 6:
            var x = document.getElementById("hidingparts8");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }     
        break;
    }
}
function hidemytext1() {
    var x = document.getElementById("hidingparts1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }   
  }

function hidemytext2() {
    var x = document.getElementById("hidingparts2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }   
}