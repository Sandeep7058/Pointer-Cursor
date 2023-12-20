var n = document.querySelector(".main")
var r = document.querySelector(".cursor")

n.addEventListener("mousemove",function(dets){
    r.style.left = dets.x+"px"
    r.style.top = dets.y+"px"
})