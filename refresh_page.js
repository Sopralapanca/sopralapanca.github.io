/*var containerDiv = document.querySelectorAll('.container')[0];
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

        const button = doc.querySelectorAll('.button')[0];
        if (button !== undefined) {
            const audio = new Audio("https://github.com/Sopralapanca/sopralapanca.github.io/blob/master/changes-cut.mp3?raw=true");
            audio.play();
            new Promise(r => setTimeout(r, 6500));
            button.click();
        }


        document.getElementsByTagName('frame')[0].src += ''

    },
    5000);

*/
// Define the function to check if the specific button is present
function isNRTPresent() {
    var container = document.getElementsByClassName('container')[0];
    if (container.innerText.includes('No tasks are currently available')) {
        return true;
    } else {
        return false;
    }
}


// Define the function to refresh the page content and check for the button
function refreshAndCheckButton() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var parser = new DOMParser();
            var responseDoc = parser.parseFromString(this.responseText, 'text/html');
            if(isNRTPresent()) {
                console.log('NRT is present');
                setTimeout(refreshAndCheckButton, 60000);
            } else {
                console.log('task found');
            }
        }
    };
    xhttp.open('GET', window.location.href, true);
    xhttp.send();
}

// Call the function to start refreshing
refreshAndCheckButton();