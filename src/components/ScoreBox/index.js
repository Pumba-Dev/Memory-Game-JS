import "./style.css"

function ScoreBox(points=0){
    return /*html*/`
        <section class="score-box">
            <div class="point-box -a${points}"></div>
            <div class="point-box -b${points}"></div>
            <div class="point-box -c${points}"></div>
        </section>
    `;

} export default ScoreBox;