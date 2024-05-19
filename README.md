<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Happy Valentine's Day!</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap">
</head>
<body>
    <div class="container">
        <h1>FOR MY GIRL LADYLYN ROYO!</h1>
        <div class="heart"></div>
        <div class="message-box">
            <p class="message">To my dearest love,</p>
            <p class="message">Every moment with you is a treasure. I love you more than words can say.</p>
            <p class="signature">Yours forever, [ladylyn]</p>
        </div>
        <button id="surprise-button">Click for a surprise</button>
        <audio id="audio" src="your-audio-file.mp3" preload="auto"></audio>
    </div>
    <script src="script.js"></script>
</body>
</html>





/////////////////////////////
body {
    background: linear-gradient(to right, #ffafbd, #ffc3a0);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: 'Dancing Script', cursive;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.container {
    text-align: center;
    background: rgba(255, 182, 193, 0.8);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}

h1 {
    font-size: 3em;
    margin-bottom: 20px;
}

.message-box {
    display: none;
}

.message {
    font-size: 1.5em;
    margin: 10px 0;
}

.signature {
    font-size: 1.2em;
    margin-top: 20px;
    font-style: italic;
}

button {
    background-color: #ff69b4;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}

button:hover {
    background-color: #ff1493;
}

.heart {
    width: 100px;
    height: 100px;
    background-color: red;
    position: relative;
    display: inline-block;
    transform: rotate(-45deg);
    margin-bottom: 20px;
}

.heart::before, .heart::after {
    content: "";
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
}

.heart::before {
    top: -50px;
    left: 0;
}

.heart::after {
    left: 50px;
    top: 0;
}

@keyframes beat {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
}



//////////////////////////

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
