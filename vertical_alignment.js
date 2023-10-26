var b = document.getElementsByClassName("ewok-buds-sides")[0];

var textDiv = document.createElement('div');
textDiv.innerText = 'RIGHT SIDE';
textDiv.style.display = 'block';
textDiv.style.textAlign = 'left';
textDiv.style.fontSize = '24px';
textDiv.style.color = 'red';
textDiv.style.marginTop = '10px';
textDiv.style.marginBottom = '10px';
textDiv.style.marginLeft = '20%';

var t = b.getElementsByClassName("ewok-buds-side ewok-buds-column");

for(let block of t){
    block.style.display = 'block';
    block.style.width = '50%';
}

t[0].marginBottom = '10px';
t[1].marginTop = '10px';

var containerDiv = t[1].parentNode;
containerDiv.insertBefore(textDiv,t[1]);