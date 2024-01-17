function checkButtons(){
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

        let allButtons = [...adultButtons, ...audioButtons, ...restButtons];
        const href = allButtons[0].getAttribute('href');
        document.documentElement.innerHTML = '<h1 style="text-align: center; margin-top: 50px;">CLOSE THIS PAGE</h1>';

        window.open(href, '_blank');            
        audio.addEventListener('ended', function() {
            console.log("closing");
            close();
            window.close();
        });
        
        clearInterval(intervalID);
        
    }
}


function addText() {
    var iframeContent = iframeElement.contentDocument || iframeElement.contentWindow.document;

    var containerDiv = iframeContent.querySelector('.container');
    console.log(containerDiv);

    if (containerDiv) {
        var helloDiv = iframeContent.createElement('div');
        helloDiv.textContent = 'Page Checked, no buttons found this time :(';
        helloDiv.style.fontSize = '24px';

        containerDiv.appendChild(helloDiv);
    } else {
        console.log('Container div not found in iframe content');
    }
}



document.documentElement.innerHTML = '';
document.title = 'Rater Hub';

console.log('version 1.0.0');

var iframeElement = document.createElement('iframe');
iframeElement.src = location.href;
iframeElement.style.width = '100%';
iframeElement.style.height = '100%';
iframeElement.style.border = 'none';

document.documentElement.appendChild(iframeElement);
iframeElement.onload = function() {
    addText();
};
var intervalID = setInterval(function() {    
    console.log("Checking buttons");
    iframeElement.contentWindow.location.reload(true); 
    iframeElement.onload = function() {
        checkButtons();
        addText();
    };
}, 62000);
