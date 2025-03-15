const characterData = [ // All character data
    {
        name: 'Azula', //Aries
        image: 'media/azula.jpeg',
        gif: 'media/azula.gif',
        sound: 'media/sounds/azula.mp3',
        description: 'Brilliant, ambitious, intense. Azula is calculating and always in control. She is a master strategist with a sharp mind and high expectations for herself. Her need for perfection can be her greatest weakness.'
    },
    {
        name: 'Toph', //Taurus
        image: 'media/toph.jpeg',
        gif: 'media/toph.gif',
        sound: 'media/sounds/toph.mp3',
        description: 'Confident, stubborn, independent. Toph refuses to let others define her. She embraces challenges head-on and thrives in adversity. Though tough on the outside, she has a deep loyalty to those she cares about.'
    },
    {
        name: 'Ty Lee', //Gemini
        image: 'media/ty_lee.avif',
        gif: 'media/ty_lee.gif',
        sound: 'media/sounds/ty_lee.mp3',
        description: 'Energetic, free-spirited, charming. Ty Lee is social and adaptable, effortlessly making friends wherever she goes. She loves excitement and is always looking for new experiences.'
    },
    {
        name: 'Katara', //Cancer
        image: 'media/katara.avif',
        gif: 'media/katara.gif',
        sound: 'media/sounds/katara.mp3',
        description: 'Caring, strong-willed, and protective. Katara is a natural leader and healer, using her waterbending skills to protect and help others. Her growth in confidence and strength makes her a central figure in Team Avatar.'
    },
    {
        name: 'Zuko', //Leo
        image: 'media/zuko.webp',
        gif: 'media/zuko.gif',
        sound: 'media/sounds/zuko.mp3',
        description: 'Determined, conflicted, passionate. Driven by a need for purpose and recognition, Zuko is fiercely driven and always pushing himself to be better. Once he sets his mind to something, he won’t stop until he succeeds.'
    }, 
    {
        name: 'Mai', //Virgo
        image: 'media/mai.webp',
        gif: 'media/mai.gif',
        sound: 'media/sounds/mai.mp3',
        description: 'Calm, reserved, and sharp-witted. Mai is practical, observant, and rarely shows emotion. While often perceived as indifferent, her loyalty to her friends is unwavering, and she’s an excellent strategist with a dry sense of humor.'
    },
    {
        name: 'Aang', // Libra
        image: 'media/aang.jpeg',
        gif: 'media/aang.gif',
        sound: 'media/sounds/aang.mp3',
        description: 'Adventurous, free-spirited, optimistic. Aang has a deep sense of responsibility but struggles with the weight of his destiny. Despite hardships, he remains hopeful and believes in peace over violence.'
    },
    {
        name: 'Suki', //Scorpio
        image: 'media/suki.webp',
        gif: 'media/suki.gif',
        sound: 'media/sounds/suki.mp3',
        description: ' Brave, disciplined, and confident. As the leader of the Kyoshi Warriors, Suki is a fierce and strategic fighter. She’s loyal, protective, and always stands up for what she believes in, proving herself as a strong ally and friend.'
    },
    {
        name: 'Momo', //Sagittarius
        image: 'media/momo.webp',
        gif: 'media/momo.gif',
        sound: 'media/sounds/momo.mp3',
        description: 'Curious, mischievous, and quick. Momo is always up for adventure and brings playful energy to Team Avatar. Despite his small size, he’s brave and loyal, making him a fun and important companion.'
    },
    {
        name: 'Iroh', //Capricorn
        image: 'media/iroh.webp',
        gif: 'media/iroh.gif',
        sound: 'media/sounds/iroh.mp3',
        description: 'Wise, warm-hearted, and patient. Iroh is a former general and a mentor to Zuko. His deep wisdom and understanding of life’s balance make him a beloved figure, offering guidance with kindness, humor, and grace.'
    },
    {
        name: 'Sokka', //Aquarius
        image: 'media/sokka.webp',
        gif: 'media/sokka.gif',
        sound: 'media/sounds/sokka.mp3',
        description: 'Clever, resourceful, and quick-witted. Though often the comic relief, Sokka’s creativity and strategic thinking make him a valuable member of the team. He’s always ready with a plan, even if it’s unconventional.'
    },
    {
        name: 'Appa', //Pisces
        image: 'media/appa.webp',
        gif: 'media/appa.gif',
        sound: 'media/sounds/appa.mp3',
        description: 'Loyal, dependable, protective. Appa is deeply connected to his loved ones and always puts them first. His gentle nature and unwavering loyalty make him an invaluable companion. Though quiet, his presence alone is reassuring.'
    },
]

const title = document.querySelector('.title');
const arrow = document.querySelector('.arrow');
const bdayForm = document.querySelector('.bday_form');
const characterDisplay = document.getElementById('character_display');
const characterName = document.getElementById('character_name');
const characterGif = document.getElementById('character_gif');
const characterDescription = document.getElementById('character_description');

function minimizeTitle() {  //Minimizes site header to corner
    title.classList.add('minimized');
    bdayForm.classList.add('active');
    arrow.style.display = 'none';
    characterDisplay.style.display = 'none';
    void characterDisplay.offsetHeight;
    characterDisplay.style.display = 'flex';
}

let allSounds = [];  // Catches all playing sounds

function stopSounds() { // Make all sounds stop 
    allSounds.forEach((sound) => {
        sound.pause();
        sound.currentTime = 0;
    })
}

function playSound(sound) {
    if (sound) {
        allSounds.push(sound);
        sound.play(); 
    }
}

function displayCharacter(activeCharacter) { 
    let character = characterData.find(char => char.name === activeCharacter)

    if (character) {
        characterName.textContent = character.name;
        characterGif.src = character.gif;
        characterGif.alt = character.name;
        characterDescription.textContent = character.description;

        minimizeTitle()

        setTimeout(() => {
            characterDisplay.classList.add('show');
        }, false);

        stopSounds();
        const characterAudio = new Audio(character.sound);
        playSound(characterAudio);

    } else {
        console.error("Character not found");
    }
}

const helpButton = document.getElementById('help_button');

if (helpButton) {
    helpButton.addEventListener('click', () => {
        characterName.textContent = 'Need help?';
        characterGif.src = 'media/atla.webp';
        characterGif.alt = 'Help';
        characterDescription.textContent = "Enter your birthday, hit submit, and we'll tell you what character you are from Avatar: The Last Airbender! You'll get to see their name, image, a little about them, and even hear their voice. Click on buttons to check out more characters!";

        minimizeTitle()

        setTimeout(() => {
            characterDisplay.classList.add('show');
        }, false);

        stopSounds();
    }, false);
}

function getZodiac(month, day) { //Zodiac algorithm
    let character;
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      character = 'Iroh';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      character = 'Momo';
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
      character = 'Suki';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
      character = 'Aang';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      character = 'Mai';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      character = 'Zuko';
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
      character ='Katara';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
      character = 'Ty Lee';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      character = 'Toph';
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      character = 'Azula';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      character = 'Appa';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      character = 'Sokka';
    } 
    displayCharacter(character);
}

const form = document.querySelector('form');

function logBirthday(birthday) { //Logs birthday info
    const date = {
        year: birthday[0],
        month: birthday[1],
        day: birthday [2]
    }
    
    return date;
}

function handleSubmit(event) { //Form submission
    event.preventDefault();
  
    const dateObject = logBirthday(form.elements['birthday'].value.split('-'));
    const month = parseInt(dateObject.month, 10);
    const day = parseInt(dateObject.day, 10);
    console.log(dateObject);
    console.log(dateObject.day);
    console.log(dateObject.month);
    console.log(dateObject.year);
  
    getZodiac(month, day);  // Pass month & day to getZodiac()
}  
  
if (form) {
    form.addEventListener('submit', handleSubmit);
}


  function createButton({name, image}) { // Make character buttons
    const btn = document.createElement('button');
    btn.classList.add('character');
    btn.id  = name.toLowerCase().replace(/\s+/g, '_'); // Sets id lowercase and underscore space
    
    const img= document.createElement('img'); 
    img.src = image;
    img.alt= name.replace(/([A-Z])/g, ' $1').trim(); 

    btn.addEventListener('click', () => {
        displayCharacter(name);
    });

    btn.appendChild(img);

    document.getElementById('characters_container').appendChild(btn);
}

function initialize() {

    const container = document.getElementById('characters_container');
    if(!container) {
        console.error("Error: #characters_container not found!");
        return;
    }

    characterData.forEach((character) => {
        createButton(character);
    });
    }

window.addEventListener('load', initialize);

