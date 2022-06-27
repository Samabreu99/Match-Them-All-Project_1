//Grab a couple things
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;

//link text
playerLivesCount.textContent = playerLives;

//Generate the data
const getData = [
{ imgSrc: "./images/cherry-Berry.png", name: "cherry-Berry", imgback: "./Extra/icon.png" },
{ imgSrc: "./images/deepSeaScale.png", name: "deepSeaScale", imgback: "./Extra/icon.png" },
{ imgSrc: "./images/duskStone.png", name: "duskStone", imgback: "./Extra/icon.png" },
{ imgSrc: "./images/Eviolite.png", name: "Eviolite", imgback: "./Extra/icon.png" },
{ imgSrc: "./images/fireStone.png", name: "fireStone", imgback: "./Extra/icon.png" },
{ imgSrc: "./images/Nugget.png", name: "Nugget.png", imgback: "./Extra/icon.png" },
{ imgSrc: "./images/rare-Candy.png", name: "rare-Candy.png", imgback: "./Extra/icon.png" },
{ imgSrc: "./images/Revive.png", name: "Revive", imgback: "./Extra/icon.png" },
{ imgSrc: "./images/deepSeaScale.png", name: "deepSeaScale", imgback: "./Extra/icon.png" },
{ imgSrc: "./images/fireStone.png", name: "fireStone", imgback: "./Extra/icon.png" },
{ imgSrc: "./images/Eviolite.png", name: "Eviolite", imgback: "./Extra/icon.png" },
{ imgSrc: "./images/rare-Candy.png", name: "rare-Candy", imgback: "./Extra/icon.png" },
{ imgSrc: "./images/Revive.png", name: "Revive", imgback: "./Extra/icon.png" },
{ imgSrc: "./images/Nugget.png", name: "Nugget", imgback: "./Extra/icon.png" },
{ imgSrc: "./images/cherry-Berry.png", name: "cherry-Berry", imgback: "./Extra/icon.png"},
{ imgSrc: "./images/duskStone.png", name: "duskStone", imgback: "./Extra/icon.png" },


];

// Randomize
const Randomize = () => {
    //const cardData = getData();
    //console.log(cardData);
cardData.sort(() => Math.random() - 0.5);
return cardData;
};

// Card Generator Function
const cardGenerator = () => {
    //const cardData = Randomize();
    //const cardData = getData();
    //console.log(cardData);
//Generate the HTML
//cardData.forEach((item) => {
    for (let i = 0; i < 16; i++) {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        back.setAttribute("src", getData[i].imgback);
        back.setAttribute('data-id', [i])
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
     //Attach the cards to the section 
     face.src = item.imgSrc;
     card.setAttribute("name", getData.name);
     //Attach the cards to the section
     card.appendChild(face);
     card.appendChild(back);
     section.appendChild(card);
 card.addEventListener("click", (e) => {
    card.classList.toggle("toggleCard");
 checkedCards(e);
  });
};
    };
//Check Cards
const checkedCards = (e) => {
    console.log(e);
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll(".toggleCard");
    console.log(flippedCards);
    //logic
    if(flippedCards.length === 2) {
       if (
       flippedCards[0].getAttribute("name") ===
       flippedCards[1].getAttribute("name")
       ){
       console.log("match");
       flippedCards.forEach(card => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
       })
       } else {
       console.log("wrong");
       flippedCards.forEach(card => {
        card.classList.remove('flipped');
       setTimeout(() => card.classList.remove("toggleCard"), 1000)
    });
    playerLives--;
    playerLivesCount.textContent = playerLives;
    if(playerLives === 0) {
        restart("Try Again");
    }
       }
    }
    //Run a check to see if we won the game
    if(toggleCard.length === 16) {
        restart("Try Again");
    }
};

//Restart
const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item,index) => {
        cards[index].classList.remove("toggleCard");
        //randomize
        setTimeout(() => {
            cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute('name', item.name);
            section.style.pointerEvents = "all";
        }, 1000);
        
    
    });
    playerLives = 6;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text), 100);
};
cardGenerator();