// query the document to get the elements
const hintOne = document.getElementById('hintOne');
const hintTwo = document.getElementById('hintTwo');
const hintThree = document.getElementById('hintThree');
const enterCombinationButton = document.getElementById('treasureButton');
const lastElement = document.getElementById('lastElement');
const secretCombination = "000";
let combinationGuess;

// add event listeners to the hint buttons
hintOne.addEventListener("click", function() {
    alert("What is -6 + 6?")
})

hintTwo.addEventListener("click", function() {
    alert("What is ♾️ * 0?")
})

hintThree.addEventListener("click", function() {
    alert("What is 0 / 69?")
})

// reduce the code needed to create elements
function createElement(htmlElement, classList, innerHTML, src) {
    let element = document.createElement(htmlElement);

    if (Array.isArray(classList)) classList.forEach(className => element.classList.add(className))
    if (!Array.isArray(classList)) element.classList.add(classList)
    
    if (innerHTML !== undefined) element.innerHTML = innerHTML;

    if (src !== undefined) element.src = src;
    
    return element;
}

function combinationCorrect() {
    // create vault opened h2 element
    let vaultOpenedHeader = createElement('h2', ['text-center'], 'You have opened the vault!');
    lastElement.appendChild(vaultOpenedHeader);

    // create treasure image element
    let goldChestTreasureImage = createElement('img', ['treasureImg'], "", 'treasure.jpeg');
    lastElement.appendChild(goldChestTreasureImage);

    // create stolen treasure image element
    const stolenTreasureImageSrc = "https://cdn.imgbin.com/16/21/12/imgbin-nami-one-piece-treasure-cruise-one-piece-world-seeker-monkey-d-luffy-one-piece-jXVy1d7Nk9hxTQP1135gLGrpS.jpg"
    let stolenTreasureImage = createElement('img', ['treasureImg', 'd-none', 'mt-3'], "", stolenTreasureImageSrc);
    lastElement.appendChild(stolenTreasureImage);

    // create congradutlations header element
    let congradulationsHeader = createElement('h3', ['text-center'], 'Congratulations On Finding My Treasure, You Have Done Well 😁!', "");
    lastElement.appendChild(congradulationsHeader);
    
    // create stolen treasure header element
    let stolenTreasureHeader = createElement('h3', ['text-center', 'd-none'], "Your Treasue Has Just Been Stolen By Nami And The Straw Hats 😁!", "");
    lastElement.appendChild(congradulationsHeader);

    // create the more treasure button element
    let moreTreasureButton = createElement('button', ['btn', 'btn-success', 'mx-auto', 'd-block', 'mb-2', 'buttonColor'], "HURRY CLICK TO GET MORE TREASURE!!!");
    lastElement.appendChild(moreTreasureButton);

    // more treasure button event listener
    moreTreasureButton.addEventListener("click", function() {
        stolenTreasureHeader.classList.remove('d-none');
        stolenTreasureImage.classList.remove('d-none');
        lastElement.replaceChild(stolenTreasureImage, goldChestTreasureImage);
        lastElement.replaceChild(stolenTreasureHeader, congradulationsHeader);
        vaultOpenedHeader.remove();
        moreTreasureButton.remove();

        setTimeout(() => {
            stolenTreasureHeader.remove();
            stolenTreasureImage.remove();
        }, 10000)
    })

    setTimeout(() => {
        vaultOpenedHeader.remove();
        goldChestTreasureImage.remove();
        congradulationsHeader.remove();
        moreTreasureButton.remove();
    }, 6000)
}

function combinationWrong() {
    // create taunting header element
    let tauntingHeader = createElement('h2', ['text-center'], "I knew you couldn't open my vault.");
    lastElement.appendChild(tauntingHeader);

    // create taunting image element
    const tauntingImageSrc = "https://images4.alphacoders.com/117/1171340.jpg"
    let tauntingImage = createElement('img', 'treasureImg', "", tauntingImageSrc);
    lastElement.appendChild(tauntingImage);

    setTimeout(() => {
        tauntingHeader.remove();
        tauntingImage.remove();
    }, 6000)
}

enterCombinationButton.addEventListener("click", function() {
    // clear the last element of any elements previously added on a different click
    lastElement.innerHTML = "";
    combinationGuess = prompt("You have received this message because you have been chosen to open an important vault. Please enter the secret combination to continue.")

    if (combinationGuess === secretCombination) {
        combinationCorrect();
    } else {
        combinationWrong();
    }
})

