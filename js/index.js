document.addEventListener("DOMContentLoaded", function(){

    const navbar = document.querySelectorAll(".nav-link");

    navbar.forEach(link => {
        link.addEventListener('click', function(){
            navbar.forEach(item => item.classList.remove('active'));

            this.classList.add('active');
        });
    });
});