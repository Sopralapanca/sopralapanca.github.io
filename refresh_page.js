document.write(`<frameset><frame src="${location.href}"></frameset>`);

setInterval(async () => {
        const doc = window.frames[0].document;
        const button = doc.querySelectorAll('.button')[0];
        if (button !== undefined) {
            const audio = new Audio("https://github.com/Sopralapanca/sopralapanca.github.io/blob/master/changes-cut.mp3?raw=true");
            audio.play();
            await new Promise(r => setTimeout(r, 6500));
            button.click();
        }


        document.getElementsByTagName('frame')[0].src += ''

    },
    60000);