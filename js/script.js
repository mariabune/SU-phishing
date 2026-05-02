const btns = document.querySelectorAll(".btn");
const main = document.querySelector("main");

// Function that updates UI, Laila struktur
const updateUI = (h2Text, pText, btnsText, showLoginForm) => {

    const section = document.createElement("section");   // section
    section.classList.add("stage", "active");

    const h2 = document.createElement("h2");        // h2
    h2.textContent = h2Text;
    section.append(h2);

    const p = document.createElement("p");         // p
    p.textContent = pText;
    section.append(p);

    if (showLoginForm) {                  // Login form scene 2a
        
        const email = document.createElement("input");
        email.type = "email";
        email.placeholder = "Email";
        email.classList.add("input");

        const password = document.createElement("input");
        password.type = "password";
        password.placeholder = "Password";
        password.classList.add("input");

        section.append(email);
        section.append(password);

    }

    btnsText.forEach(text => {                       // buttons
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

    let h2Text, pText, btnsText, showLoginForm = false;

    switch (e.target.textContent) {         

        // Scene 1 (start-scene)
        case "Log ind nu":
            h2Text = "Login til SU-systemet";
            pText = "Indtast dine oplysninger for at opdatere din SU.";
            btnsText = ["Log ind", "Tilbage", "Luk"];
            showLoginForm = true;
            break;

        case "Ignorer":                     // --> Scene 2b (tvivl-scene)
            h2Text = "Er du sikker?";
            pText = "Hvis du ignorerer beskeden, kan din SU blive stoppet."
            btnsText = ["Log ind nu", "Luk"];
            break;

        // Scene 2a (login-scene)
        case "Log ind":                      // --> Scene 3a (phishing ending-scene)
            h2Text = "Du er blevet phishet";
            pText = "Giv aldrig dine oplysninger via links i beskeder - gå altid direkte til officielle hjemmesider";
            btnsText = ["Start forfra"];
            break;

        case "Tilbage":                         // --> Scene 1 (start-scene)
            h2Text = "Besked fra SU-kontoret";  
            pText = "Din SU er i fare. Opdater dine oplysninger nu for ikke at miste din SU næste måned";
            btnsText = ["Log ind nu", "Ignorer"];
            break;

        case "Luk":                       // --> Scene 4a (safe endning-scene) 
            h2Text = "Tillykke";
            pText = "Du undgik phishing ved at lukke siden og ikke give dine oplysninger";
            btnsText = ["Start forfra"];
            break;


        // Scene 2b (tvivl-scene)
        case "Log ind nu":                  // --> scene 2a (login-scene)
            h2Text = "Login til SU-systemet";
            pText = "Indtast dine oplysninger for at fortsætte.";
            btnsText = ["Log ind", "Tilbage", "Luk"];
            break;

        case "Luk":                         // --> Scene 4a (safe endning-scene)
            h2Text = "Tillykke";
            pText = "Du undgik phishing ved at lukke siden og ikke give dine oplysninger" 
            btnsText = ["Start forfra"];
            break;
            
        // Start forfra - reset
        case "Start forfra":
            h2Text = "Besked fra SU-kontoret";
            pText = "Din SU er i fare. Opdater dine oplysninger nu for ikke at miste din SU næste måned";
            btnsText = ["Log ind nu", "Ignorer"];
            break;

            default: console.log("Don't know"); // For debugging

    }

updateUI(h2Text, pText, btnsText, showLoginForm); // Kalder på UI() funktion og opdaterer oplysninger

};

for (const btn of btns) {
    btn.addEventListener("click", nextStage);
}
