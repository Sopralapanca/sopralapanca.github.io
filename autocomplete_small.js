function setSliders(block, percentage, hiddenValue){
	let k;

	const sliderBar = block.getElementsByClassName("evl-slider2-bar-selected");
	const sliderTriangle = block.getElementsByClassName("evl-slider2-thumb evl-slider2-thumb-value goog-slider-thumb");
	const hiddenField = block.getElementsByClassName("evl-slider2-value-field");
	const SpeakerSimilarityField = block.getElementsByTagName("SpeakerSimilarity");


	for (k = 0; k<sliderBar.length; k++){
		sliderBar[k].style.width = percentage;
		sliderTriangle[k].style.left = percentage
	}

	for (k = 0; k<hiddenField.length; k++){
		hiddenField[k].value = hiddenValue;
	}

	for (k = 0; k<SpeakerSimilarityField.length; k++){
		SpeakerSimilarityField[k].value = hiddenValue;
	}
}

/*get all evl-slider2 and set values */
function get_and_set_sliders(percentage, hiddenValue, setPagePosition=true){
	let el = document.getElementsByClassName("ewok-buds-sides-container")[0];
	var allBlocks = el.querySelectorAll(
		".ewok-buds-card, .ewok-buds-result, .ewok-buds-result-has-dupes, .ewok-buds-result-highlight, .ewok-editor-editable-column");

	if (typeof allBlocks[2] !== 'undefined') {
		if(setPagePosition)
			allBlocks[2].scrollIntoView();
	}

	for(let b of allBlocks){
		if(String(b.innerText).includes("No Rating Required")){
			continue;
		}

		var evlBlock = b.getElementsByClassName("evl-slider2");
		for(let eval of evlBlock){
			setSliders(eval,percentage,hiddenValue);
		}
	}

	if(allBlocks.length === 0){
		evlBlock = el.getElementsByClassName("evl-slider2");
		if(setPagePosition)
			evlBlock[2].scrollIntoView();
		for(let eval of evlBlock){
			setSliders(eval,percentage,hiddenValue);
		}
	}

}

function set_all_radios(block, value, setPagePosition=true){
	let radios = block.querySelectorAll('input[type="radio"]');
	if(setPagePosition) {
		radios[0].scrollIntoView();
	}
	for(let j = 0; j<radios.length; j++){
		if(radios[j].value===value){
			radios[j].click();
		}
	}
}

function set_all_checkboxes(block, value, setPagePosition=true){
	let cboxes = block.querySelectorAll('input[type="checkbox"]');
	if(setPagePosition) {
		cboxes[0].scrollIntoView();
	}
	for(let j = 0; j<cboxes.length; j++){
		if(cboxes[j].name.includes(value)){
			cboxes[j].click();
			cboxes[j].checked = true;
		}
	}
}


function open_links_set_sliders_set_radios(block, percentage, hiddenValue, radios_value="AboutTheSameAs", set_page_position=true){
	OpenAllLinks(wait_time_sec);
	get_and_set_sliders(percentage, hiddenValue);
	set_all_radios(block, radios_value, set_page_position);
}


function radiosClick(doc, task) {
	var radios = doc.querySelectorAll('input[type=radio]');
	let j;
	if (task === "entitysubtopic"){
		for(j = 0; j<radios.length; j++){
			if (radios[j].name === "match_meaning" && radios[j].value === "1"){
				radios[j].click();
			}

			if (radios[j].name === "entity_intent_valid" && radios[j].value === "1"){
				radios[j].click();
			}

			if (radios[j].name === "readable" && radios[j].value === "1"){
				radios[j].click();
			}

		}
	}

	if (task === "pquo"){
		for(j = 0; j<radios.length; j++){
			if (radios[j].name === "intolerant_insensitive" && radios[j].value === "no"){
				radios[j].click();
			}

			if (radios[j].name === "deceptive_misleading" && radios[j].value === "no"){
				radios[j].click();
			}

			if (radios[j].name === "harm" && radios[j].value === "no"){
				radios[j].click();
			}

			if (radios[j].name === "sad" && radios[j].value === "no"){
				radios[j].click();
			}

			if (radios[j].name === "inappropriate" && radios[j].value === "no"){
				radios[j].click();
			}

			if (radios[j].name === "sensational" && radios[j].value === "no"){
				radios[j].click();
			}

			if (radios[j].name === "inflammatory" && radios[j].value === "no"){
				radios[j].click();
			}

			if (radios[j].name === "commercial" && radios[j].value === "no"){
				radios[j].click();
			}

			if (radios[j].name === "gossip" && radios[j].value === "no"){
				radios[j].click();
			}
		}
	}

	if (task === "ytexpadult"){
		/* forse si può semplificare con solo i value 0  */
		for(j = 0; j<radios.length; j++){
			if(radios[j].name.includes("IsTitleRacy") && radios[j].value === "0"){
				radios[j].click();
			}

			if(radios[j].name.includes("IsThumbnailRacy") && radios[j].value === "0"){
				radios[j].click();
			}

			if(radios[j].name.includes("IsVideoRacy") && radios[j].value === "0"){
				radios[j].click();
			}
		}

	}

	if (task === "expscrbaccuracy"){
		for(j = 0; j<radios.length; j++){
			if(radios[j].name==="accuracy" &&  radios[j].value==="1"){
				radios[j].click();
			}

			if(radios[j].name==="YMYL" &&  radios[j].value==="0"){
				radios[j].click();
			}

			if(radios[j].name==="inflammatory" &&  radios[j].value==="0"){
				radios[j].click();
			}

			if(radios[j].name==="disputed_topic" &&  radios[j].value==="0"){
				radios[j].click();
			}
		}
	}

	if (task === "ytpquo"){
		for(j = 0; j<radios.length; j++){
			if(radios[j].name==="badpage" &&  radios[j].value==="no"){
				radios[j].click();
			}
		}
	}

}

function CheckTextOnDocument(block, string){
	let first = null;

	try {
		first = block.documentElement.textContent;
		if(String(first).includes(string))
			return true;
	} catch (error) {
	}
	try {
		first = block.documentElement.innerText;
		if(String(first).includes(string))
			return true;
	} catch (error) {
	}
	try {
		first = block.documentElement.innerHTML;
		if(String(first).includes(string))
			return true;

	} catch (error) {
	}
	return false;
}

function DecodeStringUrl(url){
	var uri = String(decodeURIComponent(url));
	let [first, ...s] = uri.split("q=");
	s = s.join("q=");
	return s;
}

function getUrlFromTag(a){
	var url = a.dataset.oldhref;
	if (typeof url !== "undefined") {
		return url;
	}

	url = a.href;
	if (typeof url !== "undefined") {
		return url;
	}

	return undefined;
}

/* open all links */
function OpenAllLinks(wait_time, doc=document) {
	let s;
	var allBlocks = doc.querySelectorAll(".ewok-buds-card, .ewok-buds-result, .ewok-buds-result-has-dupes, .ewok-buds-result-highlight, .ewok-editor-editable-column, .ewok-buds-question,  .ewok-buds-result-question");

	const mySet1 = new Set();
	var opened_pages = [];

	for(var i=0; i<allBlocks.length; i++) {
		if (String(allBlocks[i].innerText).includes("No Rating Required")) {
			continue;
		}

		var buds_html = allBlocks[i].querySelectorAll('[class=ewok-buds-result-html][id^=ewok-buds-display-block]');
		for (var j = 0; j < buds_html.length; j++) {
			try {
				var a = buds_html[j].querySelector("a");

				var url = getUrlFromTag(a);

				if (typeof url !== "undefined") {
					s = DecodeStringUrl(url);
					if(!s.includes("www.google.")){
						mySet1.add(s);

					}

				}

			} catch (error) {
				console.log("open all links");
				console.log(error);
			}
		}

		if(buds_html.length === 0){
			var url_block = allBlocks[i].getElementsByTagName('a')[0];
			if (typeof url_block !== "undefined") {
				var search_link = getUrlFromTag(url_block);
				s = DecodeStringUrl(search_link);
				if (s!== "") {
					/* questo deve essere incluso
					https://www.google.com/evaluation/result/static/a/5494654946/it_Repubblica_230503_0615.png
					*/

					if (!s.includes("www.google.it")) {
						mySet1.add(s);
					}
				}
			}
		}
	}
	const array = Array.from(mySet1);

	for (j = 0; j < array.length; j++) {
		let openWindow = window.open(array[j], '_blank');
		opened_pages.push(openWindow);
	}

	setTimeout(() => {
		for (let win of opened_pages) {
			win.close();
		}
	}, wait_time);
}

/* opens one link */
function OpenLink(block, wait_time=wait_time_sec){
	try{
		var search_link = block.getElementsByTagName('a')[0].href;
		var openWindow = window.open(search_link, '_blank');
		setTimeout(function(){openWindow.close();},wait_time);
	}catch (error){
		console.log(error);
	}

}

function ExactText(element, testo){
	let blocks = element.getElementsByClassName("ewok-buds-card");
	for(let block of blocks){
		let s = String(block.innerText).trim().replace((/  |\r\n|\n|\r/gm),"");
		if(s===testo){
			return true;
		}
	}
	return false;
}

function FillTextArea(element, field_name){
	let elements;
	if(field_name==="comment"){
		elements = element.querySelectorAll('[name=' + field_name + ']');
	}else{
		elements = element.querySelectorAll('[name*=' + field_name + ']');
	}
	if(elements.length===0){
		return false;
	}
	try{
		for (let i=0; i<elements.length;i++){
			if (!elements[i].disabled){
				elements[i].value = list_of_comments[Math.floor(Math.random() * list_of_comments.length)];
			}
		}
	}catch(error){
		console.log(error);
		return false;
	}
	return true;
}

function PlayAudio(element, field_name="", play_twice=false){
	let audio_clips
	if(field_name!==""){
		audio_clips = element.querySelectorAll('audio[id*=' + field_name + ']');
	}else{
		audio_clips = element.getElementsByTagName('audio');
	}

	if (typeof audio_clips[0] !== 'undefined') {
		audio_clips[0].scrollIntoView();
	}

	for(var i = 0; i<audio_clips.length; i++){
		audio_clips[i].play();
		audio_clips[i].volume = 0.1;
	}

	if(play_twice){
		setTimeout(function(){
			for(var i = 0; i<audio_clips.length; i++){
				audio_clips[i].play();
				audio_clips[i].volume = 0.1;
			}
		},30000+(Math.round(Math.random()*2000)));
	}
}

function LeftOrRightSideMB(){
	let winnerSide;
	let otherSide;
	let radios_value;
	let list_of_comments = [];
	if (CheckTextOnDocument(document, "The right side did not generate any results.")) {
		winnerSide = "left side";
		otherSide = "right side";
		radios_value = "MuchBetterThan";
	}else if(CheckTextOnDocument(document, "The left side did not generate any results.")) {
		winnerSide = "right side";
		otherSide = "left side";
		radios_value = "MuchWorseThan";
	}else{
		return false;
	}

	/* comments for left or right side */
	list_of_comments = [
		otherSide + " is empty while " + winnerSide + " provides a list of helpful results that are on topic so " + winnerSide + " is much better.",
		winnerSide + " provides a list of helpful results so " + winnerSide + " is much better while " + otherSide + " is empty.",
		otherSide + " is empty while " + winnerSide + " provides a list of helpful results so " + winnerSide + " is much better.",
		"The results on " + winnerSide + " are helpful and on topic while " + otherSide + " is empty so " + winnerSide + " is much better.",
		"The results on " + winnerSide + " are helpful and on topic so " + winnerSide + " is much better while " + otherSide + " is empty.",
		winnerSide + "is helpful because it provides a list of results that are on topic while " + otherSide + " is empty so " + winnerSide + " is much better.",
		winnerSide + " is much better because it provides a list of results that are on topic while " + otherSide + " is empty.",
	];

	document.getElementById('ewok-buds-validation-comment').value = list_of_comments[Math.floor(Math.random() * list_of_comments.length)];
	return radios_value;

}

/* type restituisce sxs o experimental */
const type = document.getElementsByClassName("ewok-task-action-header")[0].children[0].innerText;

/* additional restituisce contenuto aggiuntivo nel titolo come headphone required*/
let additional = document.getElementsByClassName("ewok-task-action-header")[0].children[1];
if(additional !== undefined) additional = additional.innerText;

let time = document.getElementsByClassName("ewok-estimated-task-weight")[0];
time = time.textContent;
const wait_time = time.split(" ")[2];
const wait_time_sec = ((parseInt(wait_time) * 60)/2)*1000;

let list_of_comments = ["The result is very helpful because provides helpful information about the query", "the result provides correct information",
	"the result is a scrb that shows helpful information", "this result is very helpful for the query", "this result is very helpful", "The result does not have any problem with the query", "the result is a scrb that shows helpful information", "the result is good", "the result is ok",
	"this result does not have any problem", "the result is very good for the query", "the result is very good", "the scrb is good", "this scrb provides helpful information", "scrb is ok", "the special block looks very good and accurate", "this scrb is accurate", "the scrb looks good"];


/* AUDIO */
if (type === "Experimental" && (additional === "Headphones or Speakers Required" || additional === "Headphones required")){
	testo = "In this task, you will be given one or more audio clips. For each clip, please listen to the speech very carefully and then select a rating for each audio clip. The rating should be based on how natural or unnatural the sentence sounded. Please do not judge the grammar or the content of the sentence. Instead, just focus on how natural the speech sounds.";
	if(CheckTextOnDocument(document, testo)){
		console.log('audio natural sentences found');
		PlayAudio(document, "task_clip_speech");
		set_all_radios(document, "Good");
	}
	testo2="In this task, your job is to listen to two different audio samples containing speech.The text spoken will be the same for both Speech Samples. Please listen to both samples before selecting a rating.";
	if(CheckTextOnDocument(document, testo2)){
		console.log('audio speech samples sxs found');
		block = document.getElementById("editable-1072");
		PlayAudio(block, "editable-", play_twice=false);
		set_all_radios(document, "AboutTheSameAs");
	}
	else{
		console.log("headphones similar");
		radiosClick(document, "headphones");
		PlayAudio(document, "speech_sample", play_twice=true);
		get_and_set_sliders("90%", "4.5");
	}
	console.log("done")
}

let percentage;
let hiddenValue;
if (type === "Side By Side") {

	console.log("done");
}

let lastCheckBox;
if (type === "Experimental") {
	/*EXP SCRB ACCURACY*/
	testo = "You will be given a query and a Special Content Result Block (SCRB)";
	if (CheckTextOnDocument(document, testo)){
		console.log("exp scrb accuracy found");
		let queryBlock = document.getElementById("editable-173");
		queryBlock.scrollIntoView();
		radiosClick(document, "expscrbaccuracy");

		lastCheckBox = document.querySelector('input[name=no_lp_issues]');
		setTimeout(function(){lastCheckBox.click()},2000+(Math.round(Math.random()*3000)));
		FillTextArea(document, "comment");

	}

	/* YOUTUBE EXP RACY */
	if (CheckTextOnDocument(document, "In this task, you will be given titles and thumbnails of many videos. For each video, your job is to evaluate: How many users in your locale would find this video racy? When rating, please assume users have not previously watched or searched for similar videos.")) {
		console.log("yt exp racy found");
		get_and_set_sliders("25%", "1");
	}

	/* OTHER UO */
	testo = 'Results are shown beneath the query to help you research the topic. You may also click on the query to do further research.';
	if (CheckTextOnDocument(document, testo)){
		console.log("other uo found");
		set_all_checkboxes(document, "Category_None", true);
		set_all_radios(document, "0");
		console.log("done");
	}

	console.log("done");
}
