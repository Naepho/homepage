import React from "react";
import "./Home.css";
import Search from "../../../components/Search/Search";
import FiveLinks from "../../../components/FiveLinks/FiveLinks";
import picrew from "./picrew.png";

function Home() {
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
    { url: "https://trello.com/naepho/boards", text: "Trello" },
    {
      url: "https://fr.khanacademy.org/profile/Naepho/courses?learn=1",
      text: "Khan Academy",
    },
  ];

  const linksDown = [
    { url: "https://igg-games.com/", text: "IGG Games" },
    { url: "https://fitgirl-repacks.site/", text: "FitGirl Repacks" },
    { url: "https://gog-games.com/", text: "GOG Games" },
    { url: "https://www.1377x.to/", text: "1377x" },
    { url: "https://m.thepiratebay10.org/", text: "The Pirate Bay" },
  ];

  const linksCode = [
    { url: "https://github.com/Naepho", text: "Github" },
    { url: "https://www.freecodecamp.org/news/", text: "FreeCodeCamp" },
    {
      url: "https://reactjs.org/docs/getting-started.html",
      text: "React docs",
    },
    { url: "https://en.cppreference.com/w/", text: "C++ docs" },
    {
      url: "https://docs.python.org/3.7/library/index.html",
      text: "Python docs",
    },
  ];

  return (
    <div id="home">
      <div id="search">
        <img src={picrew} alt="Picrew" id="picrew" />
        <Search />
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
