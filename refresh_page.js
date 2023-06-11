console.log('loading script');
var iframeElement = document.createElement('iframe');
iframeElement.src = location.href;
iframeElement.style.width = '100%';
iframeElement.style.height = '100%';
iframeElement.style.border = 'none';

document.documentElement.innerHTML = '';
document.documentElement.appendChild(iframeElement);

console.log('starting setInterval');
intervalID  = setInterval( () => {
    console.log('checking for button');
    const doc = window.frames[0].document;

    const button = doc.querySelectorAll('.button')[0];
    if (button !== undefined) {
        const audio = new Audio("https://github.com/Sopralapanca/sopralapanca.github.io/blob/master/changes-cut.mp3?raw=true");
        audio.play();
        setTimeout(() => {
            const href = button.getAttribute('href');
            window.open(href, '_blank');

        }, 6500);
        clearInterval(intervalID);
    }

    document.documentElement.innerHTML += '';

},5000);
