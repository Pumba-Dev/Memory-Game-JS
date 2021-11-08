import "./style.css"
import CardGame from "./../../components/CardGame"

function BoardGame(NumOfCards) {
    const $cardGame = CardGame();
    const $CardGroup = $cardGame.repeat(NumOfCards);
    
    return `
        <section class="board-game">
            ${$CardGroup}
        </section>
    `;
} 

export default BoardGame;