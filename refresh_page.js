document.write(`<frameset><frame src="${location.href}"></frameset>`);

setInterval(() => {
        const doc = window.frames[0].document;
        console.log(doc.getElementsByClassName("container")[0].innerText);
        /*var acquire_buttons=document.getElementsByClassName("button");
        for(let button of acquire_buttons){
            console.log(button);
        }
        */
        document.getElementsByTagName('frame')[0].src += ''

    },
    2000);