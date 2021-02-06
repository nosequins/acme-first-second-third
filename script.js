


const chosen= document.getElementsByClassName('entire-box')[0];

function changecol(event){
    
    const targ= event.target;
    
    if (targ.className=== 'selector'){
        targ.classList.toggle('white');
    }
     else if (targ.className=== 'selector white'){
        targ.className= 'selector';
    }
    
   
}
chosen.addEventListener('click', changecol)

function moveitems(event){
    const targ= event.target;
    const childs= targ.parentElement;
    
    if (targ.className==='move-left move' && childs.querySelector('.selector')){
        
        [...childs.querySelectorAll('.selector')].filter(elem=> elem.className!== 'selector white').forEach(elem=> childs.previousElementSibling.appendChild(elem));
        
        
        
    } else if (targ.className==='move-right move' && childs.querySelector('.selector')){
        [...childs.querySelectorAll('.selector')].filter(elem=> elem.className!== 'selector white').forEach(elem=> childs.nextElementSibling.appendChild(elem));
    }
   
}  
chosen.addEventListener('click', moveitems);




