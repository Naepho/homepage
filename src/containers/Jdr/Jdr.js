import React from "react";
import "./Jdr.css";
import Introduction from "../../components/Introduction/Introduction";
import ColumnLinks from "../../components/ColumnLinks/ColumnLinks";
import RowLinks from "../../components/RowLinks/RowLinks";

function Jdr() {
  let introText =
    "Se trouvent ici énormément de liens sur le jeu de rôle. Que vous soyez joueur ou maître, vous trouverez votre bonheur.";

  let gmStuffList = [
    {
      name: "Behind The Screen",
      url: "https://www.reddit.com/r/DnDBehindTheScreen/ ",
      desc: "Une communauté de maîtres sur reddit",
    },
    {
      name: "RPG : GM resources",
      url: "https://www.reddit.com/r/rpg/wiki/gmresources ",
      desc: "Des ressources en tout genre",
    },
    {
      name: "RPG: GM software",
      url: "https://www.reddit.com/r/rpg/wiki/gmsoftware ",
      desc: "Des logiciels et sites web pour aider lors des scéances mais aussi à les préparer",
    },
    {
      name: "Music For RPG",
      url: "https://www.reddit.com/r/MusicForRPG/ ",
      desc: "De la musique pour les scéances",
    },
  ];

  let generalList = [
    {
      name: "The Trove",
      url: "https://thetrove.is/",
      desc: "Archive de livres de jeu de rôle en tout genre. Momentanément down",
    },
    {
      name: "The Eye",
      url: "https://the-eye.eu/public/Books/rpg.rem.uz/",
      desc: "Grande collection de livres en tout genres, ici de jeu de rôle",
    },
    {
      name: "Thyamath",
      url: "http://www.thyamath.fr/index2.html",
      desc: "Quelques livres d'anciennes versions",
    },
    {
      name: "Le Bazar",
      url: "http://kildjan.free.fr/Bazar/Utilitaires.htm",
      desc: "Livres et utilitaires généraux",
    },
    {
      name: "Critrole",
      url: "https://critrole.com/",
      desc: "Site officiel de Critical Role",
    },
    {
      name: "DnD",
      url: "https://www.reddit.com/r/DnD/",
      desc: "Communauté reddit de Donjons et Dragons",
    },
    {
      name: "Unearthed Arcana",
      url: "https://www.reddit.com/r/UnearthedArcana/",
      desc: "Communauté reddit dédiée au homebrew",
    },
    {
      name: "RPG",
      url: "https://www.reddit.com/r/rpg/",
      desc: "Communauté reddit des jeux de rôle",
    },
    {
      name: "One Page RPGs",
      url: "https://www.reddit.com/r/onepagerpgs/",
      desc: "Communauté reddit pour les jeux de rôle tenant sur une page",
    },
    {
      name: "DnD Homebrew",
      url: "https://www.reddit.com/r/DnDHomebrew/",
      desc: "Communauté reddit de l'homebrew Donjons et Dragons",
    },
  ];

  let worldBuildingList = [
    {
      name: "World Building",
      url: "https://www.reddit.com/r/worldbuilding/",
      desc: "Communauté reddit dédiée au world building",
    },
    {
      name: "Map Making",
      url: "https://www.reddit.com/r/mapmaking/",
      desc: "Communauté reddit pour la création de cartes",
    },
    {
      name: "Ressources de world build",
      url: "https://docs.google.com/document/d/1TKoyrApuKeynNIh_hYUPXMXgFUaS3LJ3USLS0s9HrB0/edit",
      desc: "Une tonne de ressources en tout genre pour aider au world build",
    },
    {
      name: "Outils d'organisation",
      url: "https://www.reddit.com/r/worldbuilding/wiki/organizational_tools",
      desc: "Des guides et outils pour organiser son world build",
    },
    {
      name: "Logiciels d'art",
      url: "https://www.reddit.com/r/worldbuilding/wiki/art_resources",
      desc: "Logiciels pour représenter son monde",
    },
    {
      name: "Cartes",
      url: "https://www.reddit.com/r/rpg/wiki/maps",
      desc: "Guides et outils pour créer des cartes",
    },
    {
      name: "Générateurs",
      url: "https://www.reddit.com/r/rpg/wiki/generators",
      desc: "Générateurs en tout genre",
    },
    {
      name: "Azgaar's fantasy map generator",
      url: "https://azgaar.github.io/Fantasy-Map-Generator/",
      desc: "Générateur de carte que j'aime bien",
    },
  ];

  return (
    <div id="jdr">
      <div id="jdr-first-column">
        <Introduction name="Jeu de rôle" text={introText} />
        <ColumnLinks name="Trucs de maître" list={gmStuffList} />
      </div>

      <div id="jdr-second-column">
        <RowLinks name="Ressources générales" list={generalList} />
        <RowLinks name="World Building" list={worldBuildingList} />
      </div>
    </div>
  );
}

export default Jdr;
