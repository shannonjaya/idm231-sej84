const character_data = [ // All character data
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

const form = document.querySelector('form');

function log_birthday(birthday) { //Logs birthday info
    const date = {
        year: birthday[0],
        month: birthday[1],
        day: birthday [2]
    }
    return date;
}
function handle_submit(event) { //Form submission
    event.preventDefault();

    const date_object = log_birthday(form.elements['birthday'].value.split('-'));
    console.log(date_object);
    console.log(date_object.day);
    console.log(date_object.month);
    console.log(date_object.year);
}

if (form) {
    form.addEventListener('submit', handle_submit);
}

let all_sounds = [];  // Catches all playing sounds


function stop_all_sounds() { // Make all sounds stop
    all_sounds.forEach((sound) => {
        sound.pause();
        sound.currentTime = 0;
    })

}

const title = document.querySelector('.title');
const arrow = document.querySelector('.arrow');
const bday_form = document.querySelector('.bday_form');
const character_display = document.getElementById('character_display');
const character_name = document.getElementById('character_name');
const character_image = document.getElementById('character_image');
const character_description = document.getElementById('character_description');

function minimize_title() {
    title.classList.add('minimized');
    bday_form.classList.add('active');
}

function show_character_details(characterName) {
    const character = character_data.find(char => char.name === characterName)

    if (character) {
        character_name.textContent = character.name;
        character_gif.src = character.gif;
        character_gif.alt = character.name;
        character_description.textContent = character.description;

        minimize_title()
        arrow.style.display = 'none';
        character_display.style.display = 'none';

        void character_display.offsetHeight;

        character_display.style.display = 'flex';

        setTimeout(() => {
            character_display.classList.add('show');
        }, false);

    } else {
        console.error("Character not found");
    }
}

function create_button(button_name, button_image, sound_file) { // Make character buttons
    const btn = document.createElement('button');
    btn.classList.add('character');
    btn.id  = button_name.toLowerCase().replace(/\s+/g, '_'); // Sets id lowercase and underscore space
    
    const img= document.createElement('img'); 
    img.src = button_image;
    img.alt= button_name.replace(/([A-Z])/g, ' $1').trim(); 

    const audio = new Audio(sound_file);
    all_sounds.push(audio);

    btn.addEventListener('click', () => {
        stop_all_sounds();
        audio.play();
        show_character_details(button_name);
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

    character_data.forEach((item) => {
        create_button(item.name, item.image, item.sound);
    });
    }

window.addEventListener('load', initialize);

// function getZodiac(month, day) {
//     if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
//       character = 'Iroh';
//     } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
//       character = 'Momo';
//     } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
//       character = 'Suki';
//     } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
//       character = 'Aang';
//     } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
//       character = 'Mai';
//     } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
//       character = 'Zuko';
//     } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
//       character ='Katara';
//     } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
//       character = 'Ty Lee';
//     } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
//       character = 'Toph';
//     } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
//       character = 'Azula';
//     } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
//       character = 'Appa';
//     } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
//       character = 'Sokka';
//     } 
//   }