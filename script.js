

// const select= document.getElementsByClassName('selector');
const chosen= document.getElementsByClassName('entire-box')[0];

function changecol(event){
    
    const targ= event.target;
    
    if (targ.className=== 'selector'){
        targ.classList.toggle('white');
        console.log(targ.className);
    } else if (targ.className=== 'selector white'){
        targ.className= 'selector';
    }
    
   
}
chosen.addEventListener('click', changecol)

function moveitems(event){
    const targ= event.target;
    const list= document.getElementsByClassName('box');
    const childs= targ.parentElement;
    // console.log(childs.querySelectorAll('.selector'))
    
    if (targ.className==='move-left move' && childs.querySelector('.selector')){
        // console.log(childs.querySelector('.selector'))
        // console.log(childs);
        [...childs.querySelectorAll('.selector')].filter(elem=> elem.className!== 'selector white').forEach(elem=> childs.previousElementSibling.appendChild(elem));
        
        // childs.previousElementSibling.append(childs.querySelectorAll('.selector'));
        
    } else if (targ.className==='move-right move' && childs.querySelector('.selector')){
        [...childs.querySelectorAll('.selector')].filter(elem=> elem.className!== 'selector white').forEach(elem=> childs.nextElementSibling.appendChild(elem));
    }
   
}  
chosen.addEventListener('click', moveitems);




