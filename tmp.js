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
    document.documentElement.innerHTML += '';
    setTimeout(function () {
        const doc = window.frames[0].document;
        const buttons = doc.querySelectorAll('.button');
        let adultButtons = [];
        let audioButtons = [];
        let restButtons = [];

        if(buttons.length !== 0) {
            const audio = new Audio("https://github.com/Sopralapanca/sopralapanca.github.io/blob/master/changes-cut.mp3?raw=true");

            audio.play()
                .then(() => {
                    console.log('button found');
                })
                .catch((error) => {
                    console.error('Error playing audio:', error);
                });

           
            for(let button of buttons) {
                if(button.innerText.toLowerCase().includes("audio")) {
                    audioButtons.push(button);
                }else if(button.innerText.toLowerCase().includes("adult") || button.innerText.toLowerCase().includes("offensive")) {
                    adultButtons.push(button);
                }else{
                    restButtons.push(button);
                }
            }
            let allButtons = [...audioButtons, ...adultButtons, ...restButtons];
            const href = allButtons[0].getAttribute('href');
            window.open(href, '_blank');

            audio.addEventListener('ended', function() {
                close();
            });
            
        
            clearInterval(intervalID);
        }
    }, 3000);
},62000);