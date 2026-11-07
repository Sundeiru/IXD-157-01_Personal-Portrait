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
                let text_one = ["i was a freshman in high school during this year. my sister was a junior in high school, and our family began to discuss college with her since she would begin college applications in the near future. my parents turned to me, asking me what i wanted to do.", "\"i want to do art!\" i said. they wondered aloud how i could do art with no formal training. not that i would know, all i knew was the determination i had to become an artist in the video game industry. there was nothing else i could think of besides art. when i thought of university, i couldn't think of anything that genuinely interested me, for i had forgotten my prior interests of coding and robotics."];
                p.forEach((p, index) => {
                    p.innerHTML = text_one[index];
                });
                image.src = 'images/start-main_1.jpg';
            }

            if (clickedId === 'two') {
                let text_two = ["by a miracle, my parents found an art studio where i could finally take art classes taught by a professional. i began to go for two days a week for a total of four hours a week. my first project was this self-portrait.", ""];
                p.forEach((p, index) => {
                    p.textContent = text_two[index];
                });
                image.src = 'images/start-main_2.jpg';
            }
            
            if (clickedId === 'three') {
                let text_three = ["however, things were not sunshine and rainbows. i was dealing with terrible art block, though i don't know if i was aware of that. being exposed to the massive world of the internet brought inspiration as well as destruction. my self-destructive behavior bled into my art, resulting in constant comparison to other artists who were much more experienced than me. i also saw young artists who could draw at professional levels. i felt that i should be learning and improving faster than i was actually capable of.", "i had set my goal to be a professional artist so confidently in my head that i was repulsed by change. i refused to believe that i would change."]
                p.forEach((p, index) => {
                    p.innerHTML = text_three[index];
                image.src = 'images/start-main_3.png';
                });
            }
        });
    });
});
