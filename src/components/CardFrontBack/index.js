import CardGame from "./../CardGame"
import "./style.css"

function CardFrontBack(icon) {
    window.cardFrontBack = {};
    
    window.cardFrontBack.handleClick_CardFlip = (event) => { 
        const $origin = event.target;
        const $cardFrontBack = $origin.closest('.card-front-back');
        $cardFrontBack.classList.add("-active");
    }

    return /*html*/`
        <article 
            class="card-front-back" 
            onClick="cardFrontBack.handleClick_CardFlip(event)"
        >
            <div class="front">
                ${CardGame()}
            </div>    
            <div class="back">
                ${CardGame(icon, icon + " Pixel Logo")}
            </div>
            
        </article>
    `;
}

export default CardFrontBack;