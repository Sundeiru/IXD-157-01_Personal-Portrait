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
                let text_one = ["preparing for and submitting college applications spanned from June 2023 to February 2024. i developed a broad portfolio which included fine art, illustration, mixed media, and animation works. throughout the process, i connected with alumni of the art studio i attended. one of them stood out to me - he was a third or fourth term Product Design student at ArtCenter. his work ethic was quite admirable, and i respected how passionate he was about his work.", "because of that student, i got interested in ArtCenter and wanted to go. so when i received my acceptance letter, i was more than enthusiastic to head southward to California. while still in Pasadena touring the school in April, i submitted my enrollment deposit."];
                p.forEach((p, index) => {
                    p.textContent = text_one[index];
                });
                firstImage.src = 'images/change-main_1.jpg';
                firstImage.style.objectPosition = '58% 0%';
                secondImage.src = 'images/change-main_2.jpg';
                secondImage.style.objectPosition = '50% 0%';
            }

            if (clickedId === 'two') {
                let text_two = ["but life took a crazy turn. i had received an acceptance letter and financial aid letter from Rhode Island School of Design (RISD), though i had ignored it because i was set on ArtCenter. my mom sent those to my art teacher, and my teacher told me to do something crazy: go to RISD for a year. she suggested the idea because i was graduating high school at the age of 16; i had a couple extra years on my plate, and it would be good to gain life experience even though RISD was not the right school for what i was interested in.","my teacher and my parents strongly pushed me to go with that plan. i felt emotionally conflicted; i had just seen ArtCenter, and i was about to postpone going there to go to a school i did not want to go to. but i could foresee that this was a valuable opportunity that would never come by again."];
                p.forEach((p, index) => {
                    p.textContent = text_two[index];
                });
                firstImage.src = 'images/change-main_3.jpg';
                firstImage.style.objectPosition = '30% 0%';
                secondImage.src = 'images/change-main_4.jpg';
                secondImage.style.objectPosition = '20% 0%';
            }
            
            if (clickedId === 'three') {
                let text_three = ["so that was how i found myself in the smallest state of the U.S. for my first year of college. i hated it at first, actually. i hated that little island, that little city called Providence. my peers were so academically and artistically intimidating, and my art skills were nonexistent in their presence. i befriended none of my classmates, because why would i make friends if i was going to leave so soon?","my first month there was depressing and frustrating. i realized that i could not continue living like this. so i went to a joint student club between Brown University and RISD where i connected with Christian students on campus. the rest was history."];
                p.forEach((p, index) => {
                    p.textContent = text_three[index];
                });
                firstImage.src = 'images/change-main_5.jpg';
                firstImage.style.objectPosition = '30% 0%';
                secondImage.src = 'images/change-main_6.jpg';
                secondImage.style.objectPosition = '40% 0%';
            }
        });
    });
});