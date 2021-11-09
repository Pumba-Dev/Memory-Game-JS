import "./style.css"

function ArrowDown(linkImage="ArrowDown", alt="Arrow Down", turn="two"){
    
    return /*html*/`
        <img class="arrow-down -player-${turn}" src="./src/images/${linkImage}.png" alt="${alt}"/>
    `;

} export default ArrowDown;