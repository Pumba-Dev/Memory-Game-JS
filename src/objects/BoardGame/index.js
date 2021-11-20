import "./style.css"
import CardFrontBack from "../../components/CardFrontBack"
import cards from "./data.js"

function BoardGame() {

    function flipCard(event){
        const $origin = event.target;
        const $cardFrontBack = $origin.closest(".card-front-back");
        $cardFrontBack.classList.add("-active");
    }

    function addFlipEvent() {
        const $boardGame = document.querySelector(".board-game");
        const $cardsGame = $boardGame.querySelectorAll(".card-front-back");
        $cardsGame.forEach((card) => {
            card.addEventListener("click", flipCard);
        });
    }
    window.onload = addFlipEvent;

    window.boardGame = {};
    window.boardGame.handleClick = () => {
        const $boardGame = document.querySelector(".board-game");
        const $cardsActive = $boardGame.querySelectorAll(".card-front-back.-active");
        const $arrowDown = document.querySelector(".arrow-down");

        const disableFlip = () => {
            const $cards = $boardGame.querySelectorAll(".card-front-back");
            $cards.forEach((card) => {
                card.removeEventListener("click", flipCard);
            });
        };

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
            disableFlip();
            setTimeout(() => {
                hideCards();
                swapPlayers();
                addFlipEvent();
            }, 1000);
        }
    }   

    const htmlCardList = cards.map((card) => CardFrontBack(card)); 
    const $htmlCards = htmlCardList.join('');

    return /*html*/`
        <section 
            class="board-game" 
            onClick="boardGame.handleClick()"
            >
            ${$htmlCards}
        </section>
    `;
} 

export default BoardGame;