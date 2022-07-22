// alert("hi there");

const spans = document.querySelectorAll("#play span");

console.log(spans);

function myAlert(){
    alert("Im clicked");
}

for(const mySpan of spans){
//mySpan.addEventListener("click", myAlert);
mySpan.addEventListener("click", function(ev){});
// alert("The current actor is " + mySpan.dataset.actor);
highlightActor();
}

function highlightActor(actor){
    
    for(const mySpan of spans){
        if(actor == mySpan.dataset.actor){//current actor, highlight
            mySpan.style.backgroundColor='yellow';
        }else{//other actor, background white
            mySpan.style.backgroundColor='white';
        }
    }
}

//     if(  el.style.backgroundColor=='yellow'){
//         el.style.backgroundColor='white';  
//     }else{
//     el.style.backgroundColor='yellow';

//     }
// }

function highlight(el){

    if(  el.style.backgroundColor=='yellow'){
        el.style.backgroundColor='white';  
    }else{
    el.style.backgroundColor='yellow';

    }
}
/*
for (let i =0; i <actors.length; i++) {
    actors[i].style.backgroundColor = "yellow";
}
*/