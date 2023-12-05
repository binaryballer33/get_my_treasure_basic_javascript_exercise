const hintOne = document.getElementById('hintOne');
const hintTwo = document.getElementById('hintTwo');
const hintThree = document.getElementById('hintThree');
const enterCombinationButton = document.getElementById('treasureButton');
const lastElement = document.getElementById('lastElement');
const secretCombination = "000";
let combinationGuess;

hintOne.addEventListener("click", function() {
    alert("What is -6 + 6?")
})

hintTwo.addEventListener("click", function() {
    alert("What is ♾️ * 0?")
})

hintThree.addEventListener("click", function() {
    alert("What is 0 / 69?")
})

enterCombinationButton.addEventListener("click", function() {
    // clear the last element of any elements previously added on a different click
    lastElement.innerHTML = "";

    combinationGuess = prompt("You have received this message because you have been chosen to open an important vault. Please enter the secret combination to continue.")

    if (combinationGuess === secretCombination) {
        // create h2 element
        let vaultOpenedHeader = document.createElement('h2');
        vaultOpenedHeader.innerHTML = "You have opened the vault!";
        vaultOpenedHeader.classList.add('text-center', 'text-success');
        lastElement.appendChild(vaultOpenedHeader);

        // create treasure image element
        let goldChestTreasureImage = document.createElement('img');
        goldChestTreasureImage.src = "treasure.jpeg";
        goldChestTreasureImage.classList.add('mx-auto', 'd-block', 'w-75', 'treasureImg', 'mb-2');
        lastElement.appendChild(goldChestTreasureImage);

        // create stolen treasure image element
        let stolenTreasureImage = document.createElement('img');
        stolenTreasureImage.src = "https://cdn.imgbin.com/16/21/12/imgbin-nami-one-piece-treasure-cruise-one-piece-world-seeker-monkey-d-luffy-one-piece-jXVy1d7Nk9hxTQP1135gLGrpS.jpg";
        stolenTreasureImage.classList.add('mx-auto', 'd-block', 'w-75', 'treasureImg', 'mb-2', 'd-none');
        lastElement.appendChild(stolenTreasureImage);

        // create congradutlations header element
        let congradulationsHeader = document.createElement('h3');
        congradulationsHeader.innerHTML = "Congratulations On Finding My Treasure, You Have Done Well 😁!";
        congradulationsHeader.classList.add('text-center', 'text-success');
        lastElement.appendChild(congradulationsHeader);
        
        // create stolen treasure header element
        let stolenTreasureHeader = document.createElement('h3');
        stolenTreasureHeader.innerHTML = "Your Treasue Has Just Been Stolen By Nami And The Straw Hats 😁!";
        stolenTreasureHeader.classList.add('text-center', 'text-success', 'd-none');
        lastElement.appendChild(congradulationsHeader);

        // create button element
        let moreTreasureButton = document.createElement('button');
        moreTreasureButton.innerHTML = "Click To Get More Treasure";
        moreTreasureButton.classList.add('btn', 'btn-success', 'mx-auto', 'd-block', 'mb-2', 'buttonColor');
        lastElement.appendChild(moreTreasureButton);

        moreTreasureButton.addEventListener("click", function() {
            stolenTreasureHeader.classList.remove('d-none');
            stolenTreasureImage.classList.remove('d-none');
            lastElement.replaceChild(stolenTreasureImage, goldChestTreasureImage);
            lastElement.replaceChild(stolenTreasureHeader, congradulationsHeader);
        })

    } else {
        // create taunting header element
        let tauntingHeader = document.createElement('h2');
        tauntingHeader.innerHTML = "I knew you couldn't open my vault.";
        tauntingHeader.classList.add('text-center', 'text-danger');
        lastElement.appendChild(tauntingHeader);

        // create taunting image element
        let tauntingImage = document.createElement('img');
        tauntingImage.src = "https://images4.alphacoders.com/117/1171340.jpg";
        tauntingImage.classList.add('mx-auto', 'd-block', 'w-75', 'treasureImg', 'mb-2');
        lastElement.appendChild(tauntingImage);
    }
})

