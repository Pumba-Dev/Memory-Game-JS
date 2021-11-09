import CardGame from "./../CardGame"
import "./style.css"

function CardFrontBack() {
    return /*html*/`
        <article class="card-front-back">
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