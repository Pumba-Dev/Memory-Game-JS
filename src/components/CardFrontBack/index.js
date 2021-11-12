import CardGame from "./../CardGame"
import "./style.css"

function CardFrontBack() {
    window.cardFrontBack = {};
    // Function to catch two clicks => flip cards and change turn.
    window.cardFrontBack.handleClick = (event) => { 
        // catch event
        const $origin = event.target;
        // Return to CardFrontBack and Add Flip Class.
        const $cardFrontBack = $origin.closest('.card-front-back');
        $cardFrontBack.classList.toggle("-active");

        // catch cards with tag "-active"
        var elementsFlaggeds = document.getElementsByClassName('-active');
        var articleCardTags = Array.prototype.filter.call(elementsFlaggeds, function(elementsFlaggeds) {
            return elementsFlaggeds.nodeName === 'article';
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