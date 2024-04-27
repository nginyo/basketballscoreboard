let homepointsEL=document.getElementById("homepoints-el")
let guestpointsEl=document.getElementById("guestpoints-el")
let homepoints=0
let guestpoints=0

function home1(){
    homepoints+=1
    homepointsEL.textContent=homepoints
}
function home2(){
    homepoints+=2
    homepointsEL.textContent=homepoints
}
function home3(){
    homepoints+=3
    homepointsEL.textContent=homepoints
}

function guest1(){
    guestpoints+=1
    guestpointsEl.textContent=guestpoints
}
function guest2(){
    guestpoints+=2  
    guestpointsEl.textContent=guestpoints
}
function guest3(){
    guestpoints+=3
    guestpointsEl.textContent=guestpoints
}
