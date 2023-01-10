var containerDiv = document.querySelectorAll('.container')[0];
var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "refresh-checkbox";
checkbox.value = "value";
checkbox.id = "id";

var label = document.createElement('label');
label.htmlFor = "id";

label.appendChild(document.createTextNode('Autorefresh'));

containerDiv.appendChild(checkbox);
containerDiv.appendChild(label);

document.write(`<frameset><frame src="${location.href}"></frameset>`);
setInterval( () => {
        const doc = window.frames[0].document;


        /*const button = doc.querySelectorAll('.button')[0];
        if (button !== undefined) {
            const audio = new Audio("https://github.com/Sopralapanca/sopralapanca.github.io/blob/master/changes-cut.mp3?raw=true");
            audio.play();
            new Promise(r => setTimeout(r, 6500));
            button.click();
        }*/


        document.getElementsByTagName('frame')[0].src += ''

    },
    5000);