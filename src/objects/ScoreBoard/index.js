import "./style.css"
import PlayerName from "./../../components/PlayerName"
import VersusSymbol from "../../components/VersusSymbol";

function ScoreBoard() {
    return /*html*/`
        <header class="score-board">
            ${PlayerName("Player1")}
            ${VersusSymbol()}
            ${PlayerName("Player2")}
        </header>
    `;
}

export default ScoreBoard;