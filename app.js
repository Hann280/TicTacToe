let cells = document.querySelectorAll(".cell");
let bntReset = document.querySelector('.bntReset');
let turn = 1;

for(let cell of cells){
    cell.addEventListener("click", () => {
        if(!cell.textContent){
            if(turn % 2){
                cell.textContent = 'X';
            }
            else{
                cell.textContent = 'O';
            }
            turn ++;  
        }
    });
}

/*2e façon
for(let cell of cells){
    cell.addEventListener("click", () => {
        if(!cell.textContent){
            cell.textContent = turn % 2 ? 'X' : 'O';
            turn ++;  
        }
    });
}*/


bntReset.addEventListener('click', () => {
    for(let cell of cells){
        cell.textContent = '';
    }
    turn = 1;
})
