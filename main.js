const aquariusBtn = document.getElementById('Aquarius');
const piscesBtn = document.getElementById('Pisces');
const ariesBtn = document.getElementById('Aries');
const taurusBtn = document.getElementById('Taurus');
const geminiBtn = document.getElementById('Gemini');
const cancerBtn = document.getElementById('Cancer');
const leoBtn = document.getElementById('Leo');
const virgoBtn = document.getElementById('Virgo');
const libraBtn = document.getElementById('Libra');
const scorpioBtn = document.getElementById('Scorpio');
const sagittariusBtn = document.getElementById('Sagittarius');
const capricornBtn = document.getElementById('Capricorn');
const userSubmitBtn = document.getElementById('userSubmit');
const helpBtn = document.getElementById('helpBtn');

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
    const zDescription = document.getElementById('zDescription');
    const zDescriptionHelp = document.getElementById('zDescription-help');

    switch (buttonName) {
      case 'Aquarius':
          console.log('Aquarius was clicked');
          speakers.src =`paul.mp3`;
          speakers.play();
          zImage.src = 'images/paul.png';
          zZodiac.innerHTML = "You are Paul!";
          zDescription.innerHTML = "Quirky and unconventional, Paul’s persona aligns perfectly with your Aquarian nature. You are not afraid to be your authentic self, and those around you cherish you for that. You love connecting with people who share similar thoughts and opinions as you.";
          console.log('hello');
          modal.hidden = !modal.hidden;
      break;
      case 'Pisces':
          console.log('Pisces was clicked');
          // speakers.src =`jess.mp3`;
          // speakers.play();
          zImage.src = 'images/jess.png';
          zZodiac.innerHTML = "You are Jess!";
          zDescription.innerHTML = "As the sensitive and intuitive sign, your characteristics align perfectly with Jess. She is kindhearted and wants the best for everyone around her, even if she at times is taken for granted. Your sole mission in life is to help those who are less fortunate and your warmhearted nature makes you stand out. Your ability to place yourself in anyone’s shoes is one of the things people cherish the most about you.";
          modal.hidden = !modal.hidden;
      break;
      case 'Aries':
          console.log('Aries was clicked');
          // speakers.src =`schmidt.mp3`;
          // speakers.play();
          zImage.src = 'images/schmidt.png';
          zZodiac.innerHTML = "You are Schmidt!";
          zDescription.innerHTML = "Schmidt’s assertive and outgoing nature aligns him perfectly with the Aries sign. Like Schmidt, you inspire those around you with your enthusiasm and energy. You love your friends and family deeply and will do whatever it takes to ensure the well-being of your crew.";
          modal.hidden = !modal.hidden;
      break;
      case 'Taurus':
          console.log('Taurus was clicked');
          // speakers.src =`cece.mp3`;
          // speakers.play();
          zImage.src = 'images/cece.png';
          zZodiac.innerHTML = "You are Cece!";
          zDescription.innerHTML = "Cece is trustworthy and loyal making her the best friend anyone could ask for. She is the ost reliable character out of the gang. You prefer a calm environment but you are sure to stick up for yourself or your friends when necessary. Your creative side makes it seem like you are not quick to anger, but you know when to put your foot down.";
          modal.hidden = !modal.hidden;
      break;
      case 'Gemini':
          console.log('Gemini was clicked');
          speakers.src =`winston.mp3`;
          speakers.play();
          zImage.src = 'images/winston.png';
          zZodiac.innerHTML = "You are Winston!";
          zDescription.innerHTML = "As a Gemini you can talk your way out of anything. Your wit and charm wins people over and you do not struggle to make friends. When Winston was getting readjusted to the U.S. after being overseas, he managed to talk his friends into letting him have the biggest room in the loft. Winston’s great with words and learned how to use his mind to his benefit.";
          modal.hidden = !modal.hidden;
      break;
      case 'Cancer':
          console.log('Cancer was clicked');
          // speakers.src =`sam.mp3`;
          // speakers.play();
          zImage.src = 'images/sam.png';
          zZodiac.innerHTML = "You are Sam!";
          zDescription.innerHTML = "As the nurturing caregiver of the zodiac, you are sometimes more sensitive than you like to let on. Like Sam, you protect your heart, especially if it has been broken before. Like Cancer’s sign, the crab, your soft side is hidden under your tough shell and you prefer to open up to others cautiously.";
          modal.hidden = !modal.hidden;
      break;
      case 'Leo':
          console.log('Leo was clicked');
          //speakers.src =`ferguson.mp3`;
          //speakers.play();
          zImage.src = 'images/ferguson.png';
          zZodiac.innerHTML = "You are Ferguson!";
          zDescription.innerHTML = "As the feline of the zodiac, your personality is bold and unapologetic. You capture the attention of everyone you meet, like Ferguson. You shine your bright light on everyone you come in contact with, and your warmth is infectious. Honoring your heart is important and you are happiest when you do things your own way.";
          modal.hidden = !modal.hidden;
      break;
      case 'Virgo':
          console.log('Virgo was clicked');
          speakers.src =`nick.mp3`;
          speakers.play();
          zImage.src = 'images/nick.png';
          zZodiac.innerHTML = "You are Nick!";
          zDescription.innerHTML = " Nick loves to help his friends solve problems (when he feels like it) and will often put his own problems on hold to be there for the people he cares about. As a Virgo you have a good head on your shoulders, and can offer a voice of reason in any situation. Although you can be hard on yourself, you soften when seeing the people you care about in difficult situations.";
          modal.hidden = !modal.hidden;
      break;
      case 'Libra':
          console.log('Libra was clicked');
          // speakers.src =`reagan.mp3`;
          // speakers.play();
          zImage.src = 'images/reagan.png';
          zZodiac.innerHTML = "You are Reagan!";
          zDescription.innerHTML = "Social and relatable, you prioritize your social life and relationships over all else. Your connections are a top priority in your life, just like Reagan’s. When you allow yourself to open up to love, you flourish and build incredible bonds with everyone around you.";
          modal.hidden = !modal.hidden;
      break;
      case 'Scorpio':
          console.log('Scorpio was clicked');
          // speakers.src =`aly.mp3`;
          // speakers.play();
          zImage.src = 'images/aly.png';
          zZodiac.innerHTML = "You are Aly!";
          zDescription.innerHTML = "Determined to succeed, you don’t let anyone distract you from your main objective. Like Aly, you keep your cards close to your chest and it can take some time for you to open up. Once you’ve tested the water, you will share your heard as long as you feel it’s safe enough to do so. You like to use your ambitions nature to figure things out and you are not afraid to get your hands dirty, making you braver than the rest.";
          modal.hidden = !modal.hidden;
      break;
      case 'Sagittarius':
          console.log('Sagittarius was clicked');
          // speakers.src =`abby.mp3`;
          // speakers.play();
          zImage.src = 'images/abby.png';
          zZodiac.innerHTML = "You are Abby!";
          zDescription.innerHTML = "You are someone who likes to journey through life with no destination, because the journey is more exciting after all. Like Abby, you enjoy going with the flow and your optimistic attitude shields you from disappointment when plans change. You have an adaptable nature that keeps you on the go, and you get bored when feeling limited. This freedom-loving nature makes you a wonderful companion and you have so much to teach and share with others.";
          modal.hidden = !modal.hidden;
      break;
      case 'Capricorn':
          console.log('Capricorn was clicked');
          // speakers.src =`coach.mp3`;
          // speakers.play();
          zImage.src = 'images/coach.png';
          zZodiac.innerHTML = "You are Coach!";
          zDescription.innerHTML = "As the firm roommate, Coach prioritizes work and resourcefulness over everything. Like you, he is motivated by success and he is at his best when working towards a goal. Since you are always striving for greatness, it is important to remember to let loose and have some fun every once in a while. Work hard, play hard.";
          modal.hidden = !modal.hidden;
      break;
      case 'helpBtn':
        console.log('Help button was clicked');
        zDescriptionHelp.innerHTML = "Enter your birth date and click SUBMIT to find out which character from the TV series New Girl you are most like. You may also click on any character's face to read their description.";
        modalHelp.hidden = !modalHelp.hidden;
      break;
  }
}


// Modal Functionality

const modalCloseBtn = document.getElementById('btn-modal-close');
const modal = document.getElementById('modal');

modalCloseBtn.addEventListener('click', function() {
  console.log('modal close clicked');
  modal.hidden = !modal.hidden;
},
false
);

// Help Modal Functionality

helpBtn.addEventListener('click', function() {
  userPicked('helpBtn');
  console.log('Help button was clicked.');
});

const modalCloseBtnHelp = document.getElementById('btn-modal-close-help');
const modalHelp = document.getElementById('modal-help');

modalCloseBtnHelp.addEventListener('click', function() {
  console.log('Help close clicked');
  modalHelp.hidden = !modalHelp.hidden;
},
false
);

// function userPicked(helpBtn) {
//   console.log('User picked ' + helpBtn);
//   const zDescriptionHelp = document.getElementById('zDescription-help');

//   switch (helpBtn) {
//     case 'helpBtn':
//         console.log('Help button was clicked');
//         zDescriptionHelp.innerHTML = "Enter your birthday to find out which character from the TV series New Girl you are most like. You may also click on any character to read their description.";
//         modalHelp.hidden = !modalHelp.hidden;
//     break; }
//   }


// const btnModal = document.querySelectorAll('.toggle-modal');
// btnModal.modal.forEach(button => {
//   button.addEventListener
// });

userSubmitBtn.addEventListener('click', function() {
    console.log('Submit button clicked!');


    const userBday = new Date(document.getElementById('birthdayInput').value);
    //console.log(userBday);

    const whichMonth = userBday.getUTCMonth() + 1;
    //console.log(`Users month is: ${whichMonth}`);

    const whichDayOfMonth = userBday.getUTCDate();
    //console.log(`Users birth day is: ${whichDayOfMonth}`);


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


