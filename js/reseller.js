/**
 * populate the select with the avilable options (Object.keys(resellers))
 */

/**
 * listen to the selected wilaya
 * 
 * update the resellers list depending on the selected wilaya
 */

const constructReseller = (localisation, instagram) => {
    const reseller = document.createElement("div");

    reseller.classList.add("reseller");

    reseller.innerHTML = `
            <div class="reseller-left">
                <div><img class="icon-temp" src="./assets/icons/Solid/Navigation/Location.svg" alt="location-icon"></div>
                <div>${localisation}</div>
            </div>
            <div class="reseller-right">
                <div><img class="icon-temp" src="./assets/icons/Solid/Brands/Instagram.svg" alt="instagram-icon"></div>
                <div>${instagram}</div>
            </div>
        `
    return reseller;
}

const resellers = {
    'oran': [{ instagram: "@Azj", localisation: "Centre Commercial Oran" }, { instagram: "@Mohamedia", localisation: "Sadikia En Face Rond Point" }],
    'alger': [{ instagram: "@AlimentationMorad", localisation: "3acour zone sud" }, { instagram: "@BaBaK Food", localisation: "El Alma Morad" }],
};

const htmlSelect = document.getElementById("resellers-header-wilaya-select");

const htmlResellers = document.getElementById("resellers-list");

htmlSelect.addEventListener("change", (event) => {

    const selectedWilaya = event.target.value;
    const availableResellers = resellers[selectedWilaya];

    htmlResellers.innerHTML = "";

    availableResellers.forEach((reseller => {
        const htmlReseller = constructReseller(reseller.localisation, reseller.instagram);
        htmlResellers.appendChild(htmlReseller);
    }));
});

export default "reseller";