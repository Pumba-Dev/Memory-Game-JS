import "./style.css"
import CardFrontBack from "./../../components/CardFrontBack"

function BoardGame(NumOfCards) {
    const $cardFrontBack = CardFrontBack();
    const $CardGroup = $cardFrontBack.repeat(NumOfCards);
    
    return `
        <section class="board-game">
            ${$CardGroup}
        </section>
    `;
} 

export default BoardGame;