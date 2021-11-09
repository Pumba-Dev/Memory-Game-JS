import "./style.css"

function VersusSymbol(content = "vs") {
    return /*html*/`
        <span class="versus-symbol">
            ${content}
        </span>
    `;
}   

export default VersusSymbol;