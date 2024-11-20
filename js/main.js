let embedIsLoad = false;

$(document).ready(() => {
    let year = new Date();

    $('#year').html("© " + year.getFullYear() + " Copyright: All rights reserved.");

    setTimeout(function () {
        $('body').addClass('loaded');
    }, 3000);
});


$('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
});


$(document).on('click', '#cv-btn', function (e) {
    e.preventDefault();

    let path = 'https://drive.google.com/drive/folders/1ToUoWToqsUVoGj7CRcbUsMxIT5RhuYUC?usp=sharing';

    window.open(path, '_blank');
});

// Ambil tombol
const backToTopButton = document.getElementById("backToTop");

// Tampilkan tombol jika halaman di-scroll ke bawah
window.addEventListener("scroll", () => {
    if (window.scrollY > 120) { // Jika scroll lebih dari 120px
        backToTopButton.style.display = "flex";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Scroll ke atas ketika tombol diklik
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Efek scroll halus
    });
});