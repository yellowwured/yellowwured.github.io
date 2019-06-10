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