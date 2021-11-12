import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

import GameTable from "./src/objects/GameTable";


const $root = document.querySelector("#root");

$root.insertAdjacentHTML("beforeend", `
    ${GameTable()}
`
);