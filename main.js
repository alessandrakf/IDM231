const aquariusBtn = document.getElementById('Aquarius')
const piscesBtn = document.getElementById('Pisces')
const ariesBtn = document.getElementById('Aries')
const taurusBtn = document.getElementById('Taurus')
const geminiBtn = document.getElementById('Gemini')
const cancerBtn = document.getElementById('Cancer')
const leoBtn = document.getElementById('Leo')
const virgoBtn = document.getElementById('Virgo')
const libraBtn = document.getElementById('Libra')
const scorpioBtn = document.getElementById('Scorpio')
const sagittariusBtn = document.getElementById('Sagittarius')
const capricornBtn = document.getElementById('Capricorn')
const userSubmitBtn = document.getElementById('userSubmitBtn')

console.log('hello world');

aquariusBtn.addEventListener('click', function() {
    userPicked('Aquarius');
    console.log('You are an Aquarius.');
});

piscesBtn.addEventListener('click', function() {
    userPicked('Pisces');
    console.log('You are an Pisces.');
});

ariesBtn.addEventListener('click', function() {
    userPicked('Aries');
    console.log('You are an Aries.');
});

taurusBtn.addEventListener('click', function() {
    userPicked('Taurus');
    console.log('You are an Taurus.');
});

geminiBtn.addEventListener('click', function() {
    userPicked('Gemini');
    console.log('You are an Gemini.');
});

cancerBtn.addEventListener('click', function() {
    userPicked('Cancer');
    console.log('You are an Cancer.');
});

leoBtn.addEventListener('click', function() {
    userPicked('Leo');
    console.log('You are an Leo.');
});

virgoBtn.addEventListener('click', function() {
    userPicked('Virgo');
    console.log('You are an Virgo.');
});

libraBtn.addEventListener('click', function() {
    userPicked('Libra');
    console.log('You are an Libra.');
});

scorpioBtn.addEventListener('click', function() {
    userPicked('Scorpio');
    console.log('You are an Scorpio.');
});

sagittariusBtn.addEventListener('click', function() {
    userPicked('Sagittarius');
    console.log('You are an Sagittarius.');
});

capricornBtn.addEventListener('click', function() {
    userPicked('Capricorn');
    console.log('You are an Capricorn.');
});

function userPicked(buttonName) {
    console.log('User picked ' + buttonName);
    const zZodiac = document.getElementById('zZodiac');
    const zImage = document.getElementById('zImage');
    const zDescription = document.getElementById('zDescription')

    switch (buttonName) {
      case 'Aquarius':
          console.log('Aquarius was clicked');
          // speakers.src =`sounds/paul.mp3`;
          // speakers.play();
          zImage.src = 'images/paul.png';
          zZodiac.innerHTML = "You are an Aquarius";
          zDescription.innerHTML = "Description";
          modal.hidden = !modal.hidden;
      break;
      case 'Pisces':
          console.log('Pisces was clicked');
      break;
      case 'Aries':
          console.log('Aries was clicked');
      break;
      case 'Taurus':
          console.log('Taurus was clicked');
      break;
      case 'Gemini':
          console.log('Gemini was clicked');
      break;
      case 'Cancer':
          console.log('Cancer was clicked');
      break;
      case 'Leo':
          console.log('Leo was clicked');
      break;
      case 'Virgo':
          console.log('Virgo was clicked');
      break;
      case 'Libra':
          console.log('Libra was clicked');
      break;
      case 'Scorpio':
          console.log('Scorpio was clicked');
      break;
      case 'Sagittarius':
          console.log('Sagittarius was clicked');
      break;
      case 'Capricorn':
          console.log('Capricorn was clicked');
      break;
  }
}

// add Event Listener
userSubmitBtn.addEventListener('click', function(){
    //console.log('Submit button clicked!')
    const userBday = new Date(document.getElementById('birthdayInput')).ariaValueMax;
    //console.log(userBday);

    const whichMonth = userBday.getUTCMonth();
    whichMonth++;
    console.log(`Users month is: ${whichMonth}`);

    const whichDayOfMonth = userBday.getUTCDate();
    console.log(`Users birth day is: ${whichDayOfMonth}`);


    // Zodiac Algorithm
    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        AstroSign = "Capricorn";
      } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        AstroSign = "Sagittarius";
      } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
        AstroSign = "Scorpio";
      } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        AstroSign = "Libra";
      } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
        AstroSign = "Virgo";
      } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
        AstroSign = "Leo";
      } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
        AstroSign = "Cancer";
      } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
        AstroSign = "Gemini";
      } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
        AstroSign = "Taurus";
      } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
        AstroSign = "Aries";
      } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
        AstroSign = "Pisces";
      } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
        AstroSign = "Aquarius";
      }

      console.log(AstroSign);
      userPicked(AstroSign);
  });

// Modal Functionality

const modalCloseBtn = document.getElementById('btn-modal-close');
const modal = document.getElementById('modal');

modalCloseBtn.addEventListener('click', function() {
  console.log('modal close clicked');
  modal.hidden = !modal.hidden;
},
false
);

//const btnModal = document.querySelectorAll('.toggle-modal');
//btnModal.modal.forEach(button => {
//  button.addEventListener
//});