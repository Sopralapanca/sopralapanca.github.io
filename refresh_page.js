var iframeElement = document.createElement('iframe');
iframeElement.src = location.href;
iframeElement.style.width = '100%';
iframeElement.style.height = '100%';
iframeElement.style.border = 'none';

document.documentElement.innerHTML = '';
document.documentElement.appendChild(iframeElement);
document.title = 'Rater Hub';

console.log('version 1.0.0');

intervalID  = setInterval( () => {
    console.log('checking for button');

    const doc = window.frames[0].document;
    const button = doc.querySelectorAll('.button')[0];

    if (button !== undefined) {
        const audio = new Audio("https://github.com/Sopralapanca/sopralapanca.github.io/blob/master/changes-cut.mp3?raw=true");
        const href = button.getAttribute('href');

        audio.play()
                .then(() => {
                    console.log('button found');
                })
                .catch((error) => {
                    console.error('Error playing audio:', error);
                });

        audio.addEventListener('ended', function() {
            window.open(href, '_blank');
            // change content of current page and insert "CLOSE THIS PAGE" message
            document.documentElement.innerHTML = '<h1 style="text-align: center; margin-top: 50px;">CLOSE THIS PAGE</h1>';
        });

        clearInterval(intervalID);
    }

    document.documentElement.innerHTML += '';

},62000);
