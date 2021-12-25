import React, { useEffect } from "react";
import "./Home.css";
import Search from "../../components/Search/Search";
import FiveLinks from "../../components/FiveLinks/FiveLinks";
import picrew from "./picrew.png";

function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  const linksFun = [
    { url: "https://www.youtube.com/", text: "Youtube" },
    { url: "https://www.twitch.tv/", text: "Twitch" },
    { url: "https://neko-sama.fr/anime", text: "Neko-sama" },
    { url: "https://www.facebook.com/", text: "Facebook" },
    { url: "https://tweetdeck.twitter.com/", text: "Twitter" },
  ];

  const linksUseful = [
    { url: "https://mail.protonmail.com/u/0/inbox", text: "ProtonMail" },
    { url: "https://www.office.com/?auth=1", text: "Office 365 Personal" },
    { url: "https://coolors.co/", text: "Coolors" },
    { url: "https://www.notion.so/7270d691fb2540888cac9f70738c9995?v=2575365248b2412396a50ce77f957e99", text: "Notion" },
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
    { url: "https://www.hackthebox.com/", text: "Hack The Box" },
    {
      url: "https://academy.hackthebox.com/dashboard",
      text: "HTB Academy",
    },
    { url: "https://github.com/enaqx/awesome-pentest", text: "Awesome Pentest" },
    {
      url: "https://github.com/jnv/lists",
      text: "Everything",
    },
  ];

  return (
    <div id="home">
      <div id="search">
        <img src={picrew} alt="Picrew" id="picrew" />
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
