import BoardGame from "../BoardGame";
import ScoreBoard from "../ScoreBoard";
import "./style.css";

function GameTable( ) {
    return /*html*/`
    <main class="game-table">
        ${ScoreBoard()}
        ${BoardGame(6)}
    </main>
    `;
}

export default GameTable;