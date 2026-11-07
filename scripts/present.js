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
                let text_one = ["i somewhat followed through with my transfer applications despite me stumbling upon Interaction Design. unfortunately, bad things happened in spring term, which affected the quality of my applications. i was only accepted to one university for engineering technology in Philadephia, PA. an art-to-stem transfer pipeline was extremely difficult, in stark contrast to a stem-to-art trajectory.","despite the results, i felt alright doing Interaction Design. was it the perfect fit for me? no. it wasn't as technical as i wanted, but it led me to avenues i didn't think of."];
                p.forEach((p, index) => {
                    p.textContent = text_one[index];
                });
                firstImage.src = 'images/present-main_1.jpg';
                firstImage.style.objectPosition = '79% 0%';
                secondImage.src = 'images/present-main_2.jpg';
                secondImage.style.objectPosition = '40% 0%';
            }

            if (clickedId === 'two') {
                let text_two = ["this past summer, i took Interaction Design 3, which made me aware of a new interest in research. currently, i want to become a UX researcher/designer in the field of robotics, healthcare, or medical robotics.", "yes, i did uncover my lost interest in robotics as well, along with electronics. while UX design will only take me so far, i am actually quite open to making a career change later on after i graduate."];
                p.forEach((p, index) => {
                    p.textContent = text_two[index];
                });
                firstImage.src = 'images/present-main_3.jpg';
                firstImage.style.objectPosition = '65% 0%';
                secondImage.src = 'images/present-main_4.jpg';
                secondImage.style.objectPosition = '75% 0%';
            }
        });
    });
});