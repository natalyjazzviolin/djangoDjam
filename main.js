const btn = document.querySelector("#djam");
const tune = document.querySelector("#tune");

const easy = document.querySelector("#easy");
const spicy = document.querySelector("#spicy");
const fire = document.querySelector("#fire");

let tunes = [
  "Avalon",
  "Anniversary Song",
  "Ain't Misbehavin'",
  "Artillerie Lourde",
  "Bei mir bist du schön",
  "Belleville",
  "Blue drag",
  "Blue skies",
  "Bossa Dorado",
  "Caravan",
  "Coquette",
  "Danse Norvégienne",
  "Dark eyes",
  "Djangology",
  "Daphné",
  "Django’s tiger",
  "Douce ambiance",
  "Exactly like you",
  "For Sephora",
  "Honeysuckle rose",
  "Hungaria",
  "I can’t give you anything but love",
  "I got rhythm",
  "I’ll see you in my dreams",
  "It don’t mean a thing if it ain’t got swing",
  "It had to be you",
  "Joseph, Joseph",
  "Lady, be good",
  "Les feuilles mortes",
  "Limehouse blues",
  "Midnight in Moscow",
  "Minor Swing",
  "Nuages",
  "Pennies from heaven",
  "Rosetta",
  "Seul ce soir",
  "Sheik of Araby ",
  "Sweet Georgia Brown",
  "Sweet Sue",
  "Swing 39",
  "Swing 42",
  "Swing 48",
  "Swing Gitan",
  "Swing guitars",
  "Tears",
  "Them there eyes",
];

let tunes2 = [
  "After You've Gone",
  "All the things you are",
  "Bei dir war immer so schön",
  "Blues for Ike",
  "Brazil",
  "Between the Devil and the Deep Blue Sea",
  "C’est si bon",
  "China boy",
  "Clair de lune",
  "Confessin’",
  "Crazy rhythm",
  "Dinah",
  "Dinette",
  "Embraceable you",
  "Festival 48",
  "Georgia on my mind",
  "If I had you",
  "Ultrafox",
  "Manoir de mes rêves",
  "My Melancholy Baby",
  "Ma première guitare",
  "I saw stars",
  "I surrender, dear",
  "It’s only a paper moon",
  "I’ve found a new baby",
  "J’attendrai",
  "Just one of those things",
  "La mer",
  "La vie en rose",
  "Ménilmontant",
  "Micro",
  "My blue heaven",
  "Night and day",
  "Noto swing",
  "Out of nowhere",
  "Place de Brouckère",
  "Rose room",
  "Russian lullaby",
  "R vingt-six",
  "September song",
  "Si tu savais",
  "Somewhere over the rainbow",
  "Stardust",
  "Songe d’Automne",
  "Stompin' at the Savoy",
  "Swing de Paris",
  "Swingtime in springtime",
  "Sweet chorus",
  "Tchavolo swing",
  "There will never be another you",
  "Tico tico",
  "Topsy",
  "Troublant boléro",
  "Two guitars",
  "The world is waiting for the sunrise",
  "What a difference a day made",
];

let tunes3 = [
  "Body and soul",
  "Chez Jacquet",
  "Crépuscule",
  "Diminishing",
  "Fleur d’Ennui",
  "I’ll never be the same",
  "Indifférence",
  "The man I love",
  "Lambert Walk",
  "Mélodie au Crépuscule",
  "Montagne Ste-Geneviève",
  "Nuits de Ste-Germain des Prés",
  "Pèche a la mouche",
  "Smile",
  "Spivy",
  "Stompin’ at Decca",
  "Tea for two",
  "When Day Is Done",
  "Undecided",
  "Une historie simple",
  "Vendredi 13",
  "Viper’s dream",
  "Vous et moi",
];

let spicyTunes = tunes.concat(tunes2);
let fireTunes = spicyTunes.concat(tunes3);

btn.addEventListener("click", function () {
  if (easy.checked) {
    let newTune = tunes[Math.floor(Math.random() * tunes.length)];
    tune.innerHTML = newTune;
  }
  if (spicy.checked) {
    let newTune = spicyTunes[Math.floor(Math.random() * spicyTunes.length)];
    tune.innerHTML = newTune;
  }
  if (fire.checked) {
    let newTune = fireTunes[Math.floor(Math.random() * fireTunes.length)];
    tune.innerHTML = newTune;
  }
});
