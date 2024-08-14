document.getElementById('addTaskButton').addEventListener('click', function() {
    var NouvTache = document.createElement("li");

    NouvTache.textContent= 'Nouvelle tâche';

    document.getElementById('myList').appendChild(NouvTache);


});


document.getElementById('removeTaskButton').addEventListener('click', function() {

    var liste = document.getElementById('myList');
    if(liste.lastElementChild){
        liste.removeChild(liste.lastElementChild);
    }else{
        console.log('La liste est vide');
    }

});


document.getElementById('highlightTaskButton').addEventListener('click', function() {
    const Tache1 = document.querySelector('#myList li:first-child');
    if (Tache1) {
        Tache1.style.backgroundColor = 'yellow';
    }else{
        console.log('La liste est vide');
    }

});
