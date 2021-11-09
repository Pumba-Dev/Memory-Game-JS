import CardGame from "./../CardGame"
import "./style.css"

function CardFrontBack() {
    window.cardFrontBack = {};
    window.cardFrontBack.handleClick = (event) => { 
        const $origin = event.target;
        const $cardFrontBack = $origin.closest('.card-front-back');
        $cardFrontBack.classList.toggle("-active");
    }

    return /*html*/`
        <article 
            class="card-front-back" 
            onClick="cardFrontBack.handleClick(event)"
        >
            <div class="front">
                ${CardGame()}
            </div>    
            <div class="back">
                ${CardGame("javascript", "JavaScript Pixel Logo")}
            </div>
            
        </article>
    `;
}

export default CardFrontBack;