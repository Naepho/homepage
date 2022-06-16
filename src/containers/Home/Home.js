import React, { useEffect } from "react";
import "./Home.css";
import Search from "../../components/Search/Search";
import FiveLinks from "../../components/FiveLinks/FiveLinks";
import picrew from "./picrew.png";
import padoru from "./padoru.png";

function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  const linksFun = [
    { url: "https://www.youtube.com/", text: "Youtube" },
    { url: "https://www.twitch.tv/", text: "Twitch" },
    { url: "https://play.pokemonshowdown.com/", text: "Showdown !" },
    { url: "https://www.facebook.com/", text: "Facebook" },
    { url: "https://tweetdeck.twitter.com/", text: "Twitter" },
  ];

  const linksUseful = [
    { url: "https://fr.overleaf.com/project", text: "Overleaf" },
    { url: "https://monkeytype.com/", text: "MonkeyType" },
    { url: "https://github.com/jnv/lists/", text: "Everything" },
    { url: "https://www.notion.so/naepho/", text: "Notion" },
    {
      url: "https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal",
      text: "Wikipédia",
    },
  ];

  const linksDown = [
    { url: "https://z-lib.org/", text: "Z Lib" },
    { url: "https://forum.dirtywarez.com/", text: "Dirty Warez" },
    { url: "https://cs.rin.ru/forum/index.php", text: "cs.rin.ru" },
    { url: "https://rentry.org/Piracy-BG", text: "Piracy Guide" },
    { url: "https://github.com/Igglybuff/awesome-piracy", text: "Awesome Piracy" },
  ];

  const linksCode = [
    { url: "https://github.com/Naepho", text: "Github" },
    { url: "https://www.tradingview.com/", text: "Trading View" },
    {
      url: "https://www.oanda.com/lang/fr/demo-account/",
      text: "Oanda",
    },
    { url: "https://www.cnbc.com/world/?region=world", text: "CNBC" },
    {
      url: "https://feedly.com/i/my",
      text: "Feedly",
    },
  ];

  return (
    <div id="home">
      <div id="search">
        <img src={padoru} alt="image" id="image" />
        <Search id="search" />
      </div>
      <div className="separator"></div>
      <div id="links">
        <FiveLinks links={linksFun} />
        <FiveLinks links={linksUseful} />
        <FiveLinks links={linksDown} />
        <FiveLinks links={linksCode} />
      </div>
      <div className="separator"></div>
    </div>
  );
}

export default Home;
