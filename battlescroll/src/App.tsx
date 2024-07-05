import discordLogo from "./assets/discord.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>Battlescroll.org Coming Soon!</h1>

        <p>Join the Community and help the Development..</p>
        <a href="https://discord.gg/6Q7UP3cd3u" target="_blank">
          <img src={discordLogo} className="logo" alt="Discord logo" />
        </a>
      </div>
    </>
  );
}

export default App;
