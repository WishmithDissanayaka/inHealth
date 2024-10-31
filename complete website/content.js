const navLinkEls = document.querySelectorAll('.content-nav-links');
const subTopicEls = document.querySelectorAll('.sub-topic');

let currentSection = 'sub-topic-content-1'
window.addEventListener('scroll', () => {
    subTopicEls.forEach(subTopicEl => {
        if (window.scrollY >= subTopicEl.offsetTop - 200) {
            currentSection = subTopicEl.id;
        }
    });

    navLinkEls.forEach(navLinkEl => {
        if(navLinkEl.classList.contains(currentSection)) {
            document.querySelector('.content-active').classList.remove('content-active');
            navLinkEl.classList.add('content-active');
        }
    });
});

document.querySelector('#sub-topic-1').addEventListener('click', function() {
    let targetSection = document.getElementById('sub-topic-content-1');
    let targetPosition = targetSection.offsetTop - 200;
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
});

document.querySelector('#sub-topic-2').addEventListener('click', function() {
    let targetSection = document.getElementById('sub-topic-content-2');
    let targetPosition = targetSection.offsetTop - 200;
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
});

document.querySelector('#sub-topic-3').addEventListener('click', function() {
    let targetSection = document.getElementById('sub-topic-content-3');
    let targetPosition = targetSection.offsetTop - 200;
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
});

document.querySelector('#sub-topic-4').addEventListener('click', function() {
    let targetSection = document.getElementById('sub-topic-content-4');
    let targetPosition = targetSection.offsetTop - 200;
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
});



