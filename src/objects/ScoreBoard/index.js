import "./style.css"
import PlayerName from "./../../components/PlayerName"
import VersusSymbol from "../../components/VersusSymbol";
import ScoreBox from "../../components/ScoreBox";
import ArrowDown from "../../components/ArrowDown";

function ScoreBoard() {
    return /*html*/`
        <header class="score-board">
            ${ArrowDown()}
            ${PlayerName("Player1")}
            ${ScoreBox()}
            ${VersusSymbol()}
            ${ScoreBox()}
            ${PlayerName("Player2")}
        </header>
    `;
}

export default ScoreBoard;