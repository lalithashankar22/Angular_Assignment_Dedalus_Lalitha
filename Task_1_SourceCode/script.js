CurrentIndex=3
images=["images/first.jpg","images/second.jpeg","images/third.jpeg","images/fourth.jpeg",
"images/fifth.jpeg",
"images/sixth.jpg"]

setInterval(
    function() {
        CurrentIndex =Math.round(Math.random()*5)
     document.getElementById("img1").src = images[CurrentIndex ]
    },2000
)
//document.getElementById("img1").src = images[CurrentIndex ]
function changeImage(arrowtype){
    if(arrowtype=="right"){
        CurrentIndex = CurrentIndex==5?0:++CurrentIndex
    }
    else if(arrowtype=="left"){
        CurrentIndex = CurrentIndex==0?5:--CurrentIndex
    }
    document.getElementById("img1").src=images[CurrentIndex]
}


function fn_wrap(){
    document.getElementById("slide-area").style.display="none"
    document.getElementById("up-down-icon").src="images/down.jpg"
}
function fn_open(){
    document.getElementById("slide-area").style.display="block"
    document.getElementById("up-down-icon").src="images/up.jpg"
}

function fn_open_wrap(){
 if (document.getElementById("slide-area").style.display != 'none')
 {fn_wrap()}
 else
 {fn_open() }
}