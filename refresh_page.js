console.log('loading script');
document.write(`<frameset><frame src="${location.href}"></frameset>`);
intervalID  = setInterval( () => {
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

        document.getElementsByTagName('frame')[0].src += ''

    },60000);
