let theAlarmApp = document.querySelector(".apps-alarm img");
let alarmSetter = document.querySelector(".alarm-set");
let theAlarmInput = document.querySelector( ".apps-alarm-wrapper input" );
let theMainWrapper = document.querySelector(".apps-alarm-main-wrapper");
let alarmLEave = document.querySelector(".alarm-leave");

theAlarmApp.addEventListener("click", () => {
  theMainWrapper.style.display = "block";
})

alarmLEave.addEventListener("click", () => {
  theMainWrapper.style.display = "none";
})

alarmSetter.addEventListener( "click", () => {
  const alarmTime = new Date();
  const [ hours, minutes ] = theAlarmInput.value.split( ":" );
  alarmTime.setHours( hours );
  alarmTime.setMinutes( minutes );

  const currentTime = new Date();

 console.log(currentTime);
} );
