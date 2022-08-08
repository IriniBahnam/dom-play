

const spans = document.querySelectorAll("#play span");

console.log(spans);

function myAlert(){
    alert("Im clicked");
}


for(const mySpan of spans){
mySpan.addEventListener("click", function(ev){
    highlightActor(mySpan.dataset.actor);
});

}

function highlightActor(actor){
    
    for(const mySpan of spans){
        if(actor == mySpan.dataset.actor){
            mySpan.style.backgroundColor='yellow';
        }else{
            mySpan.style.backgroundColor='white';
        }
    }
}



function highlight(el){

    if(el.style.backgroundColor=='yellow'){
        el.style.backgroundColor='white';  
    }else{
    el.style.backgroundColor='yellow';

    }
}
