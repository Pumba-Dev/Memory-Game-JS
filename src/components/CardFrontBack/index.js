import CardGame from "./../CardGame"
import "./style.css"

function CardFrontBack(icon) {
   
    return /*html*/`
        <article 
            class="card-front-back" 
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