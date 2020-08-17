var index=0;
show();
function show() {
    var i;
    var slides= document.getElementsByClassName("slide");
    for(i=0;i<slides.length;i++){
            slides[i].style.display="none";
    }

    index=index+1;
    if(index>slides.length){
        index=1;
    }
    slides[index-1].style.display="block";
    setTimeout(show,2500);
}

function toggleBar() {
    document.getElementById("specialtybox").classList.toggle('active');
    document.getElementById("button1").classList.toggle('active');
  }

function toggleBar2() {
    document.getElementById("coloringbox").classList.toggle('active');
    document.getElementById("button2").classList.toggle('active');
 }

function toggleBar3() {
    document.getElementById("barberingbox").classList.toggle('active');
    document.getElementById("button3").classList.toggle('active');
    }

function toggleBar4() {
    document.getElementById("otherbox").classList.toggle('active');
    document.getElementById("button4").classList.toggle('active');
    }

    
 