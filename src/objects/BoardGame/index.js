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
        const $scoreBoard = document.querySelector(".score-board");
        const $arrowDown = $scoreBoard.querySelector(".arrow-down");
        
        const removeFlipEvent = () => {
            const $cards = $boardGame.querySelectorAll(".card-front-back");
            $cards.forEach((card) => {
                card.removeEventListener("click", flipCard);
            });
        };
        
        function swapPlayer(){
            const hideCards = () => {
                $cardsActive.forEach((card) => {
                    card.classList.remove("-active");
                });  
            };
    
            const swapArrowDown = () => {
                const currentPlayer = $arrowDown.getAttribute("data-currentPlayer");
                $arrowDown.setAttribute("data-currentPlayer", currentPlayer == 1 ? 2 : 1);
            };

            hideCards();
            swapArrowDown();
        }

        function cardMatch() {
            const srcCardOne = $cardsActive[0].children[1].children[0].children[0].getAttribute("src");
            const srcCardTwo = $cardsActive[1].children[1].children[0].children[0].getAttribute("src");
            if(srcCardOne == srcCardTwo)
                return true;
            else
                return false;
        }

        function addPoint(){
            const currentPlayer = $arrowDown.getAttribute("data-currentPlayer");
            const stringPlayer = currentPlayer == 1 ? "one" : "two";
            const $currentScorePlayer = $scoreBoard.querySelector(".score-box.-player" + stringPlayer);
            // Atualizando Atributo de Pontos
            $currentScorePlayer.setAttribute(
                "data-points", parseInt($currentScorePlayer.getAttribute("data-points")) + 1
            );
            const $scoreBox = $currentScorePlayer.querySelectorAll(".point-box");
            let i = 0;
            $scoreBox.forEach((box) => {
                const currentPoint = $currentScorePlayer.getAttribute("data-points");
                if(box.classList.item(1) == "-a" + parseInt(currentPoint - 1)){
                    box.classList.remove("-a" + parseInt(currentPoint - 1));
                } else if(box.classList.item(1) == "-b" + parseInt(currentPoint - 1)) {
                    box.classList.remove("-b" + parseInt(currentPoint - 1));
                } else {
                    box.classList.remove("-c" + parseInt(currentPoint - 1));
                }
                if(i == 0)
                    box.classList.add("-a" + currentPoint);
                else if(i == 1)
                    box.classList.add("-b" + currentPoint);
                else if(i == 2)
                    box.classList.add("-c" + currentPoint);
                i++;
            });
        };
        
        if($cardsActive.length == 2) {
            removeFlipEvent();
            setTimeout(() => {
                if(cardMatch()){
                    addPoint();
                } else {
                    swapPlayer();
                }
                addFlipEvent();
            }, 1000);
        }
    }   

    function shuffle(o) {
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    }

    const randomCards = shuffle(cards);
    const htmlCardList = randomCards.map((card) => CardFrontBack(card)); 
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