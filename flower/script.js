document.addEventListener('DOMContentLoaded', function() {
    const heart = document.querySelector('.heart');
    const messageBox = document.querySelector('.message-box');
    const button = document.getElementById('surprise-button');
    const audio = document.getElementById('audio');

    button.addEventListener('click', function() {
        heart.classList.add('heart-animation');
        messageBox.style.display = 'block';
        audio.play();
        alert('I love you!');

        setTimeout(() => {
            heart.classList.remove('heart-animation');
        }, 2000);
    });

    // Add CSS for heart animation dynamically
    const style = document.createElement('style');
    style.innerHTML = `
        .heart-animation {
            animation: beat 1s infinite;
        }
    `;
    document.head.appendChild(style);
});
