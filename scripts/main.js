const character_data = [ // All character data
    {
        name: 'Azula', //Aries
        image: 'media/azula.jpeg',
        sound: 'media/sounds/azula.mp3',
        description: 'Brilliant, ambitious, intense. Azula is calculating and always in control. She is a master strategist with a sharp mind and high expectations for herself. Though she appears unshakable, her need for perfection can be her greatest weakness.'
    },
    {
        name: 'Toph', //Taurus
        image: 'media/toph.jpeg',
        sound: 'media/sounds/toph.mp3',
        description: 'Confident, stubborn, independent. Toph is strong-willed and refuses to let others define her. She embraces challenges head-on and thrives in adversity. Though tough on the outside, she has a deep loyalty to those she cares about.'
    },
    {
        name: 'Ty Lee', //Gemini
        image: 'media/ty_lee.avif',
        sound: 'media/sounds/ty_lee.mp3',
        description: 'Energetic, free-spirited, charming. Ty Lee is social and adaptable, effortlessly making friends wherever she goes. She loves excitement and is always looking for new experiences.'
    },
    {
        name: 'Katara', //Cancer
        image: 'media/katara.avif',
        sound: 'media/sounds/katara.mp3',
        description: 'Caring, strong-willed, protective. Katara is deeply empathetic and fiercely protective of those she loves. Her nurturing nature makes her a natural leader and healer.'
    },
    {
        name: 'Zuko', //Leo
        image: 'media/zuko.webp',
        sound: 'media/sounds/zuko.mp3',
        description: 'Zuko is driven by an intense need for purpose and recognition. Though he struggles with his inner conflicts, he ultimately finds strength in his own values.'
    }, 
    {
        name: 'Mai', //Virgo
        image: 'media/mai.webp',
        sound: 'media/sounds/mai.mp3',
        description: 'Calm, reserved, sharp-witted. Mai is analytical, observant, and rarely lets emotions cloud her judgment. She’s practical and precise, always calculating her next move.'
    },
    {
        name: 'Aang', // Libra
        image: 'media/aang.jpeg',
        sound: 'media/sounds/aang.mp3',
        description: 'Adventurous, free-spirited, optimistic. Aang is playful and curious, always seeking new experiences. He has a deep sense of responsibility but struggles with the weight of his destiny. Despite hardships, he remains hopeful and believes in peace over violence.'
    },
    {
        name: 'Suki', //Scorpio
        image: 'media/suki.webp',
        sound: 'media/sounds/suki.mp3',
        description: ' Brave, disciplined, confident. Suki is intensely loyal and determined, unafraid to stand up for herself and others. She is both strategic and fearless in battle.'
    },
    {
        name: 'Momo', //Sagittarius
        image: 'media/momo.webp',
        sound: 'media/sounds/momo.mp3',
        description: 'Curious, mischievous, quick. Momo is adventurous and always looking for excitement. His playful energy keeps things lively, and he’s always up for a new discovery.'
    },
    {
        name: 'Iroh', //Capricorn
        image: 'media/iroh.webp',
        sound: 'media/sounds/iroh.mp3',
        description: 'Wise, warm-hearted, patient. Iroh embodies wisdom and patience. He values hard work and discipline, but also understands the importance of relaxation and joy.'
    },
    {
        name: 'Sokka', //Aquarius
        image: 'media/sokka.webp',
        sound: 'media/sounds/sokka.mp3',
        description: 'Clever, resourceful, witty. Sokka is a forward-thinker with a creative mind. He approaches problems with logic and humor, always finding unique solutions.'
    },
    {
        name: 'Appa', //Pisces
        image: 'media/appa.webp',
        sound: 'media/sounds/appa.mp3',
        description: 'Loyal, dependable, protective. Appa is deeply connected to his loved ones and always puts them first. His gentle nature and unwavering loyalty make him an invaluable companion.'
    },

]

const form = document.querySelector('form');

function log_birthday(birthday) {
    const date = {
        year: birthday[0],
        month: birthday[1],
        day: birthday [2]
    }
    return date;
}

function handle_submit(event) {
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

let all_sounds = [];


function stop_all_sounds() { // Make all sounds stop
    all_sounds.forEach((sound) => {
        sound.pause();
        sound.currentTime = 0;
    })

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