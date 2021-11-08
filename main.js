import "./src/styles/settings/colors.css";
import "./src/styles/elements/base.css";
import "./src/styles/generic/reset.css";
import CardGame from "./src/components/CardGame";
import PlayerScore from "./src/components/PlayerScore";

const $root = document.querySelector("#root");
const $cardGame = CardGame();
const $playerScore = PlayerScore("Player1");


$root.insertAdjacentHTML("beforeend", $cardGame);
$root.insertAdjacentHTML("beforeend", $playerScore);



