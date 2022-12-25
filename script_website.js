var all_ewok_card = document.getElementsByClassName("ewok-buds-card");

for(let card of all_ewok_card){
    if(String(card.innerHTML).includes("No Rating Required")){
        console.log("ho trovato no rating required");
        continue;
    }
    var sliderBar = card.getElementsByClassName("evl-slider2-bar-selected");
    var sliderTriangle = card.getElementsByClassName("evl-slider2-thumb evl-slider2-thumb-value goog-slider-thumb");
    var hiddenField = card.getElementsByTagName("input");
    var SpeakerSimilarityField = card.getElementsByTagName("SpeakerSimilarity");


    for (k = 0; k<sliderBar.length; k++){
        console.log("ci sono");

    }

}