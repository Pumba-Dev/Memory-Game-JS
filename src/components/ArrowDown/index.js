import "./style.css"

function ArrowDown(turn=1){
    
    return /*html*/`
        <img 
            class="arrow-down" 
            data-currentPlayer = ${turn}
            src="./src/images/ArrowDown.png" 
            alt="Arrow Down"
        />
    `;

} export default ArrowDown;