import "./style.css"
import CardFrontBack from "../../components/CardFrontBack"
import cards from "./data.js"

function BoardGame(NumOfCards) {
    const htmlCardList = cards.map((card) => 
        CardFrontBack(card.toLowerCase())
    );
    console.log(htmlCardList);
    const $htmlCards = htmlCardList.join('');
    
    return `
        <section class="board-game">
            ${$htmlCards}
        </section>
    `;
} 

export default BoardGame;