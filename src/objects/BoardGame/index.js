import "./style.css"
import CardFrontBack from "../../components/CardFrontBack"
import cards from "./data.js"

function BoardGame(NumOfCards) {
    window.boardGame = {};
    window.boardGame.handleClickTwoCards = () => {
        const $boardGame = document.querySelector(".board-game");
        const $cardsActive = $boardGame.querySelectorAll(".card-front-back.-active");
        const $arrowDown = document.querySelector(".arrow-down");
        const hideCards = () => {
            $cardsActive.forEach((card) => {
                card.classList.remove("-active");
            });  
        };

        const swapPlayers = () => {
            const currentPlayer = $arrowDown.getAttribute("data-currentPlayer");
            $arrowDown.setAttribute("data-currentPlayer", currentPlayer == 1 ? 2 : 1);
        };
        
        if($cardsActive.length == 2) {
            setTimeout(() => {
                hideCards();
                swapPlayers();
            }, 1000);
        }
    }

    const htmlCardList = cards.map((card) => 
        CardFrontBack(card.toLowerCase())
    );
    // console.log(htmlCardList);
    const $htmlCards = htmlCardList.join('');
    
    return /*html*/`
        <section class="board-game" onClick="boardGame.handleClickTwoCards()">
            ${$htmlCards}
        </section>
    `;
} 

export default BoardGame;