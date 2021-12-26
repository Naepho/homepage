import React, { useEffect } from 'react';
import ColumnLinks from '../../components/ColumnLinks/ColumnLinks';
import Introduction from '../../components/Introduction/Introduction';
import RowLinks from '../../components/RowLinks/RowLinks'
import "./Github.css";

export default function Github() {
    useEffect(() => {
        document.title = "Github";
    }, []);

    let introText = "Se trouvent ici les meilleurs liens que j'ai pu trouver sur Github. Il doit sûrement y avoir une tonne de listes. Vous trouverez ci-dessous mon profil et mes repos les plus importants."

    let myStuff = [
        {
            name: "Mon profil",
            url: "https://github.com/Naepho",
            desc: "Mon profil Github.",
        },
        {
            name: "Dotfiles",
            url: "https://github.com/Naepho/dotfiles",
            desc: "Mes dotfiles. Vous pouvez juger mes goûts, je m'en fous."
        },
        {
            name: "Wallpapers",
            url: "https://github.com/Naepho/wallpapers",
            desc: "Les fonds d'écran que j'ai trouvé au fil de mes aventures sur internet. Aucun n'est ma création."
        },
        {
            name: "Homepage",
            url: "https://github.com/Naepho/homepage",
            desc: "Le code de la page sur laquelle vous vous trouvez. Fait avec React."
        }
    ]

    let allTheLinks = [
        {
            name: "Awesome Images",
            url: "https://github.com/heyalexej/awesome-images",
            desc: "Websites with free stock images."
        },
        {
            name: "Awesome Piracy",
            url: "https://github.com/Igglybuff/awesome-piracy",
            desc: "List of tools and websites helful to piracy."
        },
        {
            name: "Games",
            url: "https://github.com/leereilly/games",
            desc: "List of games hosted on Github."
        },
        {
            name: "Awesome Pentest",
            url: "https://github.com/enaqx/awesome-pentest",
            desc: "List of pentesting tools."
        },
        {
            name: "Payload All The Things",
            url: "https://github.com/swisskyrepo/PayloadsAllTheThings",
            desc: "List of payloads and techniques."
        },
        {
            name: "Awesome Security",
            url: "https://github.com/sbilly/awesome-security",
            desc: "List of security tools."
        },
        {
            name: "Ideas",
            url: "https://github.com/samsquire/ideas",
            desc: "List of ideas."
        },
        {
            name: "Personal Security Checklist",
            url: "https://github.com/Lissy93/personal-security-checklist",
            desc: "Recommendations to improve your personal security."
        },
        {
            name: "SecList",
            url: "https://github.com/danielmiessler/SecLists",
            desc: "Lists used during security assessments."
        }
    ]

    return (
        <div id="github">
            <div id="github-first-column">
                <Introduction name="Les meilleurs liens Github" text={introText} />
                <ColumnLinks name="Mes liens" list={myStuff} />
            </div>
            <div id="github-second-column" >
                <RowLinks name="Liens" list={allTheLinks} />
            </div>
        </div>
    )
}
