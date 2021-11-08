import "./style.css"

function PlayerScore(playerName) {
    return `
        <p class="player-name">
            ` + playerName + `
        </p>
    `;
} export default PlayerScore;