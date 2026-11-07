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
            let image = document.querySelector('.img-div img');

            if (clickedId === 'one') {
                let text_one = ["i had certain expectations about RISD before i enrolled. there was only one unexpected thing that happened to me during my time there: meeting some of the best people in my life. i formed many great friendships at the Christian student club, both RISD and Brown students. during my second semester, i spent much more time on Brown's campus.", "the environment of an Ivy League university lit up something inside me. my academic spark got triggered, and i began to be fascinated by the things my friends were learning. before i left, i went on several adventures sneaking into different Brown classes spanning applied computer science, mathematics, chemistry, Christian literature, and Japanese. i found myself so excited to visit the types of classes that art students would run away from."];
                p.forEach((p, index) => {
                    p.textContent = text_one[index];
                });
                image.src = 'images/execution-main_1.jpg';
                image.style.objectPosition = '58% 0%';
            }

            if (clickedId === 'two') {
                let text_two = ["that academic fascination lingered during the following summer. i couldn't shake the sensation off, realizing that i felt a passion growing for academics and my existing passion for art dwindling day by day. back home in Seattle, i took an online computer science course. while i didn't complete it, it uncovered that long lost interest i had for coding when i was in middle school.","this caused somewhat of a crisis: i was no longer passionate about drawing. no matter how much i wanted to deny it, my interests were changing. i formulated a plan: i would submit transfer applications to universities while at ArtCenter; if ArtCenter did not revive my passion for drawing, then i would leave and embark on an entirely different journey."];
                p.forEach((p, index) => {
                    p.textContent = text_two[index];
                });
                image.src = 'images/execution-main_2.jpg';
                image.style.objectPosition = '30% 0%';
            }
            
            if (clickedId === 'three') {
                let text_three = ["i entered ArtCenter as a First Year Immersion student. FYI connected students with nearly every other department at the school. the third week of school, i met the Interaction Design department. i didn't know anything about them, didn't know what they did. but talking with the chairs was quite insightful and piqued my interest.","throughout fall term, i talked more with the chairs, faculty members, and students. i learned that IxD was a field that intersected some of my interests; research, technology, and design. design was also different from art; it felt like something i could actually pursue as a career without getting burnt out in the same way i felt about art."];
                p.forEach((p, index) => {
                    p.textContent = text_three[index];
                });
                image.src = 'images/execution-main_3.jpg';
                image.style.objectPosition = '51.5% 0%';
            }
        });
    });
});