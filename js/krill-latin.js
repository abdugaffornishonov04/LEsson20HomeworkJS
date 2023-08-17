let convertAll = document.querySelector(".apps-krill-wrapper-convert");
let theInput = document.querySelector(".apps-krill-wrapper input");
let theText = document.querySelector(".apps-krill-wrapper p");
let appKrill = document.querySelector(".apple-krill");
let appKrillMainWrapper = document.querySelector(".apps-krill-main-wrapper");
let appKrillLeave = document.querySelector(".apps-krill-wrapper-leave");

appKrill.addEventListener("click", () => {
  appKrillMainWrapper.style.display = "block";
})

appKrillLeave.addEventListener("click", () => {
  appKrillMainWrapper.style.display = "none";
})


const russianAlphabetLowercase = [
  "а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м",
  "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ",
  "ы", "ь", "э", "ю", "я"
];

convertAll.addEventListener( "click", () => {
  const inputVal = theInput.value.toLowerCase();
  let russianVal = '';

  for ( let i = 0; i < inputVal.length; i++ ) {
    const char = inputVal[ i ];
    const index = char.charCodeAt( 0 ) - 97;

    if ( index >= 0 && index <= 32 ) {
      russianVal += russianAlphabetLowercase[ index ];
    } else {
      russianVal += char;
    }
  }

  theText.innerHTML = russianVal;
  
} )



