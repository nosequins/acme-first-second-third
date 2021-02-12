const chosen = document.getElementsByClassName('entire-box')[0];

/*remember that javascript uses camelCase as a naming convention
so this should be changeCol */
function changecol(event){

    const targ= event.target;
    /* you're repeating some of the logic that is included in the toggle function
    if the element doesnt have the class name, it will add it, if the element does have the class name,
    it removes it.
    if you want to be sure you're targeting the right class you could also use targ.matches('.selector')
    which works similary to querySelector in that it takes any valid CSS, but will return true or false if the
    element matches the css. so the code you wrote below actually works the same as
        if (targ.matches('.selector')) targ.classList.toggle('white')
    */
    if (targ.className === 'selector') {
        targ.classList.toggle('white');
    }
     else if (targ.className=== 'selector white'){
        targ.className= 'selector';
    }


}
chosen.addEventListener('click', changecol)

//moveItems
function moveitems(event){
    const targ = event.target;
    /*
    you want your code to be "self-documented" so that when someone else is working on it,
    it's clear what the variable names are.
    renaming 'childs' to something like 'parent' makes more sense.
    */
    const childs= targ.parentElement;

    if (targ.className==='move-left move' && childs.querySelector('.selector')){
        [...childs.querySelectorAll('.selector')]
            .filter(elem => elem.className !== 'selector white')
            .forEach(elem => childs.previousElementSibling.appendChild(elem));
    } else if (targ.className==='move-right move' && childs.querySelector('.selector')){
        [...childs.querySelectorAll('.selector')]
            .filter(elem => elem.className !== 'selector white')
            .forEach(elem => childs.nextElementSibling.appendChild(elem));
    }

}
chosen.addEventListener('click', moveitems);




