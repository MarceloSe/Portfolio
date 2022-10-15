const effect = document.querySelector('#effect');
const content = document.querySelector('#content');

effect.addEventListener('click', function() {

    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
})