const nav_modal_back = document.getElementById('nav-modal-back');
const nav_modal = document.getElementById('nav-modal');
let nav_modal_back_animation = null;
let nav_modal_animation = null;

document.getElementById('nav-opener').addEventListener('click', openNav);
document.getElementById('nav-closer').addEventListener('click', closeNav);


function openNav() {
    if (nav_modal_back && nav_modal) {
        nav_modal_back_animation = nav_modal_back.animate({
            left: 0
        }, {
            duration: 300,
            easing: 'ease-out',
            fill: 'forwards'
        });
        nav_modal_animation = nav_modal.animate({
            right: 0
        }, {
            duration: 200,
            easing: 'ease-out',
            fill: 'forwards',
            delay: 200
        });
    }
}

function closeNav() {
    if (nav_modal_back_animation && nav_modal_animation) {
        nav_modal_back_animation.cancel();
        nav_modal_animation.cancel();
    }
}
