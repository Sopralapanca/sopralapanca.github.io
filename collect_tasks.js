let url = 'https://script.google.com/macros/s/AKfycbyxB43FUk9FFP6ptvDoaJUUTxyLpet9BgMSf9Eba6j8GK1izTz8pcB5l4txsz9Inybl/exec?';

function sendDataToGoogleSheet() {
    let query = document.getElementsByClassName('ewok-buds-query ewok-task-query')[0].innerText;
    if (query === undefined) {
        query = '';
    }

    /* SAVE THE TIME TO LOCAL STORAGE AND SEND IT TO GOOGLE SHEET */
    const matches = /taskIds=([^&#=]*)/.exec(document.URL);
    const taskID = matches[1];

    let doc = document.querySelectorAll(".ewok-buds-sides-container")[0];
    let allBlocks = doc.querySelectorAll(".ewok-buds-card, .ewok-buds-result, .ewok-buds-result-has-dupes, .ewok-buds-result-highlight, .ewok-editor-editable-column, .ewok-buds-question,  .ewok-buds-result-question");
    const mySet1 = new Set();
    let array = [];

    for(let block of allBlocks) {
        let row = [];
        if (String(block.innerText).includes("No Rating Required")) {
            continue;
        }

        /* get all a tag inside block which have data-oldhref attribute se metto anche a alla fine non funziona più */
        let html_block = block.querySelector(".ewok-buds-result-html a, .wrap-long-url a");

        if (!html_block) {
            continue;
        }

        let url = getUrlFromTag(html_block);

        if (url && url!== ""){
            let s = DecodeStringUrl(url);
            if(!s.includes("www.google.") && !s.includes("support.google.com/websearch?p=featured_snippets&hl=it-IT") && s !== ""){
                row.push(s);
            }
        }

        array.push(row);
    }



    const xhr = new XMLHttpRequest();

    let data = {
        taskID: taskID,
        query: query,
        results: array
    };


    // send the collected data as JSON
    xhr.open('POST', url + 'action=saveData', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Request was successful
            console.log("Request successful. Response:", xhr.responseText);
        } else {
            // Request failed
            console.error("Request failed. Status:", xhr.status);
        }
    };
    xhr.send(JSON.stringify(data));




}


document.getElementById('ewok-task-submit-button').addEventListener('click', function() {
    sendDataToGoogleSheet();
});