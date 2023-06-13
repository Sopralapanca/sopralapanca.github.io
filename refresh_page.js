var iframeElement = document.createElement('iframe');
iframeElement.src = location.href;
iframeElement.style.width = '100%';
iframeElement.style.height = '100%';
iframeElement.style.border = 'none';

document.documentElement.innerHTML = '';
document.documentElement.appendChild(iframeElement);

console.log('version 1.0.2');

intervalID  = setInterval( () => {
    console.log('checking for button');
    document.documentElement.innerHTML += '';

    let button = undefined;
    setTimeout(() => {
        const doc = window.frames[0].document;
        button = doc.querySelectorAll('.button')[0];
    }, 2000);

    if (button !== undefined) {
        console.log('button found');
        const audio = new Audio("https://github.com/Sopralapanca/sopralapanca.github.io/blob/master/changes-cut.mp3?raw=true");
        let href = button.getAttribute('href');

        audio.play()
            .then(() => {
                console.log('button found');
            })
            .catch((error) => {
                console.error('Error playing audio:', error);
            });

        audio.addEventListener('ended', function() {
            window.open(href, '_blank');
        });

        clearInterval(intervalID);
    }
},61500);
