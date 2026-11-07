// When page is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Circle menu interaction
    let circles = document.querySelectorAll('.circle');

    circles.forEach((circle) => {
        circle.addEventListener('click', () => {
            // Change opacity of clicked and not clicked circles
            circles.forEach((otherCircle) => otherCircle.classList.remove('active'));
            circle.classList.add('active');

            // Change content
            let clickedId = circle.id;
            let p = document.querySelectorAll('p');
            let images = document.querySelectorAll('.img-div img');
            let firstImage = images[0];
            let secondImage = images[1];

            if (clickedId === 'one') {
                let text_one = ["the journey began in fields of interactive pixels. in 2018, i stumbled upon an open world video game that presented a level of digital immersion that i had never encountered before: <em>The Legend of Zelda Breath of the Wild</em>.", "in 2019, i found Breath of the Wild's official art book in a local bookstore, Creating a Champion. within its pages, the concept art and visual development of the game's characters and environments captivated my interest. thus was a dream born: i wanted to become a video game concept artist."];
                p.forEach((p, index) => {
                    p.innerHTML = text_one[index];
                });
                firstImage.src = 'images/beginning-main_1.jpg';
                firstImage.style.objectPosition = '58% 0%';
                secondImage.src = 'images/beginning-main.jpg';
                secondImage.style.objectPosition = '50% 0%';
            }

            if (clickedId === 'two') {
                let text_two = ["2020 came around, a year full of self-discovery. i was taking an Arduino class, being introduced to the world of electronics and code for the first time. there was something fascinating about them.", "afterwards, i sought to learn more about code, so i acquired an introductory Python textbook. but after completing all its assignments, i found myself at a dead end. with none of my family members being in STEM, nor having mentors of any kind, i did not know the proper pathway to embark on. somehow, thus began a long pause to my coding and electronics journey."];
                p.forEach((p, index) => {
                    p.textContent = text_two[index];
                });
                firstImage.src = 'images/beginning-main_3.jpg';
                firstImage.style.objectPosition = '30% 0%';
                secondImage.src = 'images/beginning-main_2.jpg';
                secondImage.style.objectPosition = '50% 0%';
            }
            
            if (clickedId === 'three') {
                let text_three = ["2020 was the first year i gained access to YouTube. i was exposed to various media content, but there was one thing that stuck out to me: <em>Final Fantasy VII Remake</em>. not only was i immersed by the graphics and visual quality of the game, but i was also captivated by the worldbuilding. fascinated by the dystopian qualities of Midgar, i soon incorporated it into my own characters that i had begun to draw.", "sometime along my YouTube phase, one video came to my feed that was about bionic prosthetics. to me, it was like cyborg robotics come to life. until this day, that field stuck with me."]
                p.forEach((p, index) => {
                    p.innerHTML = text_three[index];
                firstImage.src = 'images/beginning-main_4.jpg';
                firstImage.style.objectPosition = '51.5% 0%';
                secondImage.src = 'images/beginning-main_5.jpg';
                secondImage.style.objectPosition = '71% 0%';
                });
            }

            if (clickedId === 'four') {
                let text_four = ["my art journey kicked off during the COVID-19 pandemic. my mom signed me up for online classes at a local art school, DigiPen Institute of Technology. there, i learned drawing fundamentals including perspective, values, graphite, and digital art. but i also took a class in 3D modeling and 3D animation, where I got introduced to Blender. for a short period of time, my trajectory changed and i wanted to be a 3D modeler for video games. but that died off when i couldn't sustain self-studying Blender. this became a prominent theme of my early teen years.", "i continued drawing after those classes ceased in 2022. my style revolved around Japanese anime, as I was exposed to that through YouTube during those years."]
                p.forEach((p, index) => {
                    p.textContent = text_four[index];
                });
                firstImage.src = 'images/beginning-main_6.jpg';
                firstImage.style.objectPosition = '50% 0%';
                secondImage.src = 'images/beginning-main_7.jpg';
                secondImage.style.objectPosition = '48.5% 0%';
            }

            if (clickedId === 'five') {
                let text_five = ["another video game i got obsessed over was Kingdom Hearts. when i was very young, my dad would play the first game in the series on his ps2, but he never got past the first boss. and as life got busy, that game collected dust on the shelf. but when i had a lot of time on my hands because of the pandemic, i picked it up for myself.", "i got so obsessed over the game that i got into complex worldbuilding, even deeper into video games, and fan art. this fueled my Japanese art aesthetic and interest in Japanese media, which heavily influenced my art style."]
                p.forEach((p, index) => {
                    p.textContent = text_five[index];
                });
                firstImage.src = 'images/beginning-main_9.jpg';
                firstImage.style.objectPosition = '45% 0%';
                secondImage.src = 'images/beginning-main_8.jpg';
                secondImage.style.objectPosition = '75% 0%';
            }
        });
    });

    // Need to write a bunch of if conditionals to check each circle id to input correct text and images
    // Need to write up everything; check paragraph amounts, then edit dynamically with p_amount
});

// otherCircle is a variable name for each circle as forEach loops through them
// classList is a browser-provided property on an HTML element that lets JavaScript manage CSS classes