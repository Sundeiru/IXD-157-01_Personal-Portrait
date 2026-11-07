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
            let thirdImage = images[2];

            if (clickedId === 'one') {
                let text_one = ["my second semester of freshman year was not very unordinary for me. that is, until that march. i went to look at fall course offerings for my sophomore year and realized something quite unusual: i could graduate early if i wanted to.", "i probably had a minor identity crisis that day, knowing i could terminate my childhood prematurely."];
                p.forEach((p, index) => {
                    p.textContent = text_one[index];
                });
                firstImage.src = 'images/discovery-main_1.jpg';
                firstImage.style.objectPosition = '12% 0%';
                secondImage.src = 'images/discovery-main_2.jpg';
                secondImage.style.objectPosition = '40% 0%';
                thirdImage.src = 'images/discovery-main_3.jpg';
                thirdImage.style.objectPostion = '45% 0%';
            }

            if (clickedId === 'two') {
                let text_two = ["there was one problem: i wanted to be an artist. yet how could i imagine going to art school? considering that self-portrait i had drawn, my level of art would surely get me nowhere.", "but graduating early was somewhat of an appealing idea. if i didn't, i would spend two years of high school by myself doing nothing at home, since my sister was going off to college and i would have finished all my necessary schooling. knowing how my home environment was, i knew those two years would not be very productive."];
                p.forEach((p, index) => {
                    p.textContent = text_two[index];
                });
                firstImage.src = 'images/discovery-main_4.png';
                firstImage.style.objectPosition = '19% 0%';
                secondImage.src = 'images/discovery-main_5.jpg';
                secondImage.style.objectPosition = '30% 0%';
                thirdImage.src = 'images/discovery-main_6.jpg';
                thirdImage.style.objectPosition = '20% 0%';
            }
            
            if (clickedId === 'three') {
                let text_three = ["my mom consulted with my art teacher and came back with surprising news - my teacher said it was possible. in fact, one of the teaching assistants at the studio had done the exact same thing. the pieces were falling into place at a scary pace.", "i began to create my entrance portfolio that following June. through the portfolio program, i met other high school juniors and seniors, the first time i really had friends who were artists and who shared similar interests."];
                p.forEach((p, index) => {
                    p.innerHTML = text_three[index];
                firstImage.src = 'images/discovery-main_7.png';
                firstImage.style.objectPosition = '26% 0%';
                secondImage.src = 'images/discovery-main_8.jpg';
                secondImage.style.objectPosition = '53.5% 0%';
                thirdImage.src = 'images/discovery-main_9.jpg';
                thirdImage.style.objectPosition = '54.5% 0%';
                });
            }
        });
    });
});