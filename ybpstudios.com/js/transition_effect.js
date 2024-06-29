// Script.js


// // Page transition

// document.addEventListener("DOMContentLoaded", () => {
//     const links = document.querySelectorAll("a");

//     links.forEach(link => {
//         link.addEventListener("click", function (e) {
//             e.preventDefault();
//             const href = this.getAttribute("href");

//             document.body.classList.add("fade-out");

//             setTimeout(() => {
//                 window.location.href = href;
//             }, 500);
//         });
//     });

//     window.addEventListener("pageshow", () => {
//         document.body.classList.add("fade-in");
//     });

//     document.body.classList.add("fade-in");
// });


/* tableaux effets */

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".image-grid a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const href = this.getAttribute("href");

            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });

    window.addEventListener("pageshow", () => {
        document.body.classList.add("fade-in");
    });

    document.body.classList.add("fade-in");
});


// Submenus

document.addEventListener('DOMContentLoaded', function () {
    var dropdowns = document.querySelectorAll('.menu_main .dropdown');

    dropdowns.forEach(function (dropdown) {
        var dropdownMenu = dropdown.querySelector('.dropdown-menu');

        // Ensure the dropdown menu is hidden initially
        dropdownMenu.style.display = 'none';

        dropdown.addEventListener('mouseenter', function () {
            dropdownMenu.style.display = 'flex';
        });

        dropdown.addEventListener('mouseleave', function () {
            dropdownMenu.style.display = 'none';
        });

        dropdownMenu.addEventListener('mouseenter', function () {
            dropdownMenu.style.display = 'flex';
        });

        dropdownMenu.addEventListener('mouseleave', function () {
            dropdownMenu.style.display = 'none';
        });
    });
});




// document.addEventListener("DOMContentLoaded", function() {
//     const loadingOverlay = document.getElementById("loading-overlay");
//     const loadingVideo = document.getElementById("loading-video");
//     let endedListener;

//     function showLoading() {
//         loadingOverlay.style.visibility = "visible";
//         loadingVideo.play();
//     }

//     function hideLoading() {
//         loadingOverlay.style.visibility = "hidden";
//         loadingVideo.pause();
//         loadingVideo.currentTime = 0; // Réinitialiser la vidéo
//     }

//     document.querySelectorAll('a').forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//             const href = this.href;
//             showLoading();

//             endedListener = function() {
//                 window.location.href = href;
//                 loadingVideo.removeEventListener('ended', endedListener); // Supprimez l'écouteur d'événements une fois terminé
//             };

//             loadingVideo.addEventListener('ended', endedListener);

//             // Pour le cas où la vidéo ne se joue pas (ex. navigateur bloque la lecture automatique)
//             setTimeout(() => {
//                 window.location.href = href;
//                 loadingVideo.removeEventListener('ended', endedListener);
//             }, loadingVideo.duration * 1000 + 500); // Attendre la durée de la vidéo plus une marge de sécurité de 500ms
//         });
//     });

//     window.addEventListener('load', function() {
//         hideLoading();
//     });
// });


document.addEventListener("DOMContentLoaded", function() {
    const loadingOverlay = document.getElementById("loading-overlay");
    const loadingVideo = document.getElementById("loading-video");
    const links = document.querySelectorAll("a");
    let endedListener;

    function showLoading() {
        loadingOverlay.style.visibility = "visible";
        loadingVideo.play();
    }

    function hideLoading() {
        loadingOverlay.style.visibility = "hidden";
        loadingVideo.pause();
        loadingVideo.currentTime = 0; // Réinitialiser la vidéo
    }

    function handleLinkClick(event) {
        event.preventDefault();
        const href = this.getAttribute("href");

        showLoading();
        document.body.classList.add("fade-out");

        endedListener = function() {
            window.location.href = href;
            loadingVideo.removeEventListener('ended', endedListener);
        };

        loadingVideo.addEventListener('ended', endedListener);

        setTimeout(() => {
            window.location.href = href;
            loadingVideo.removeEventListener('ended', endedListener);
        }, loadingVideo.duration * 1000 + 500); // Attendre la durée de la vidéo plus une marge de sécurité de 500ms
    }

    links.forEach(link => {
        link.addEventListener("click", handleLinkClick);
    });

    window.addEventListener("pageshow", function() {
        hideLoading();
        document.body.classList.remove("fade-out");
        document.body.classList.add("fade-in");

        // Re-attacher les événements de clic après le changement de page
        document.querySelectorAll("a").forEach(link => {
            link.removeEventListener("click", handleLinkClick); // Prévenir la duplication d'événements
            link.addEventListener("click", handleLinkClick);
        });
    });

    document.body.classList.add("fade-in");
});

