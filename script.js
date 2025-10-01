// window.onscroll = function () {
//     const btn = document.getElementById("goTopBtn");
//     if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//         btn.style.display = "block";
//     } else {
//         btn.style.display = "none";
//     }
// };

// function openBurger() {

//     const idDiv = document.getElementById('links');
//     // let aTags = idDiv.querySelectorAll('a');

//     // aTags.forEach(a => {
//     //     if (!a.classList.contains('burger-icon')) {
//     //         if (a.style.display === 'none' || a.style.display === '') {
//     //             a.style.display = 'block';
//     //         } else {
//     //             a.style.display = 'none';
//     //         }
//     //     }
//     // });

//     idDiv.classList.toggle('open');

// }


// function scrollToTop() {
//     window.scrollTo(0,0);
// }

window.onscroll = function () {
            const btn = document.getElementById("goTopBtn");
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                btn.style.display = "block";
            } else {
                btn.style.display = "none";
            }
        };

        function openBurger() {
            const idDiv = document.getElementById('links');
            idDiv.classList.toggle('open');
        }

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Close mobile menu when clicking on a link
        document.querySelectorAll('#links a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    document.getElementById('links').classList.remove('open');
                }
            });
        });