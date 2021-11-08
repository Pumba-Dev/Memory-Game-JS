import "./style.css";

function CardGame(icon="alura-pixel", alt="Alura Pixel Logo") {
    return /*html*/`
        <div class="card-game">
            <img class="image-card-game" src="./src/images/${icon}.png" alt="${alt}" />
        </div>
    `;
} 

export default CardGame;