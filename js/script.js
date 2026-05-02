const btns = document.querySelectorAll(".btn");
const main = document.querySelector("main");

// Function that updates UI, Laila struktur
const updateUI = (h2Text, pText, btnsText) => {

    const section = document.createElement("section");   // section
    section.classList.add("stage", "active");

    const h2 = document.createElement("h2");        // h2
    h2.textContent = h2Text;
    section.append(h2);

    const p = document.createElement("p");         // p
    p.textContent = pText;
    section.append(p);

    btnsTextforEach(text => {                       // buttons
        const button = document.createElement("button");
        button.textContent = text;
        button.classList.add("btn");
        button.addEventListener("click", nextStage);
        section.append(button);
    });

    main.replaceChildren(section);
};

// Function that finds next stage

const nextStage = (e) => {

    let h2Text, pText, btnsText;

    switch (e.target.textContent) {         

        // Scene 1 (start-scene)
        case "Opdater nu":
            h2Text = "Login til SU-systemet";
            pText = "Indtast dine oplysninger for at opdatere din SU.";
            btnsText = ["Log ind", "Tilbage", "Luk"];
            break;

        case "Ignorer":                     // ----> Scene 2b (tvivl-scene)
            h2Text = "Er du sikker?";
            pText = "Hvis du ignorerer beskeden, kan din SU blive stoppet."
            btnsText = ["Opdater nu", "Luk"];
            break;

        // Scene 2a (login-scene)
        case "log ind":                         // ----> Scene 3a (phishing ending-scene)
            h2Text = "Du er blevet phishet";
            pText = "Giv aldrig dine oplysninger via links i beskeder - gå altid direkte til officielle hjemmesider";
            btnsText = ["Start forfra"];
            break;

        case "Tilbage":                         // ---> Scene 1 (start-scene)
            h2Text = "Besked fra SU-kontoret";  
            pText = "Din SU er i fare. Opdater dine oplysninger nu for ikke at miste din SU næste måned";
            btnsText = ["Opdater nu", "Ignorer"];
            break;

        case "Luk":    





        // Scene 2b (tvivl)
        case "Opdater nu":                  // går til scene 2a (login-scene)
            h2Text = "Login til SU-systemet";
            pText = "Indtast dine oplysninger for at fortsætte."




    }
};
