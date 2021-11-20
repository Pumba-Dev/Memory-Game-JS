import "./style.css"

function ScoreBox(player, points=0){
    return /*html*/`
        <section class="score-box -player${player}" data-points=0>
            <div class="point-box -a${points}"></div>
            <div class="point-box -b${points}"></div>
            <div class="point-box -c${points}"></div>
        </section>
    `;

} export default ScoreBox;