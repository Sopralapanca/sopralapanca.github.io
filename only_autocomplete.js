function setSliders(block, percentage, hiddenValue){
	return new Promise( resolve => {
		let k;

		const sliderBar = block.getElementsByClassName("evl-slider2-bar-selected");
		const sliderTriangle = block.getElementsByClassName("evl-slider2-thumb evl-slider2-thumb-value goog-slider-thumb");
		const hiddenField = block.querySelectorAll('input[type="hidden"].evl-slider2-value-field');
		const SpeakerSimilarityField = block.getElementsByTagName("SpeakerSimilarity");


		for (k = 0; k < sliderBar.length; k++) {
			sliderBar[k].style.width = percentage;
			sliderTriangle[k].style.left = percentage
		}
		for (k = 0; k < hiddenField.length; k++) {
			hiddenField[k].value = hiddenValue;
		}

		for (k = 0; k < SpeakerSimilarityField.length; k++) {
			SpeakerSimilarityField[k].value = hiddenValue;
		}

		resolve();
	});
}

async function get_and_set_sliders(list, setPagePosition=false){
	let ewok_buds_cards = document.querySelectorAll(".ewok-buds-result-controls, .ewok-buds-summary-row, .ewok-editor-editable-column");

	if(setPagePosition){
		ewok_buds_cards[0].scrollIntoView();
		window.scrollBy(0, -350);
	}

	for(let j=0; j<ewok_buds_cards.length; j++){
		if(ewok_buds_cards[j].innerText.includes("No Rating Required")){
			continue;
		}

		let sliders = ewok_buds_cards[j].getElementsByClassName("evl-slider2");
		for(let s = 0; s<sliders.length; s++){
			await setSliders(sliders[s], list[s][0], list[s][1]);
			await new Promise(resolve => setTimeout(resolve, 1000));
		}
	}
}

function set_all_radios(block, value, setPagePosition=false){
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


async function open_links_set_sliders_set_radios(block, list, radios_value="AboutTheSameAs", set_page_position=true){
	OpenAllLinks(wait_time_sec, block);
	await get_and_set_sliders(list, set_page_position);
	set_all_radios(block, radios_value);
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
function OpenAllLinks(wait_time=10000, doc) {
	if(doc === undefined){
		doc = document.querySelectorAll(".ewok-buds-sides-container")[0];
	}

	let s;
	var allBlocks = doc.querySelectorAll(".ewok-buds-card, .ewok-buds-result, .ewok-buds-result-has-dupes, .ewok-buds-result-highlight, .ewok-editor-editable-column, .ewok-buds-question,  .ewok-buds-result-question");
	const mySet1 = new Set();

	for(let block of allBlocks) {
		if (String(block.innerText).includes("No Rating Required")) {
			continue;
		}
		let html_block = block.querySelector(".ewok-buds-result-html a, .wrap-long-url a");
		if (!html_block) {
			continue;
		}
		var url = getUrlFromTag(html_block);

		if (url && url!== ""){
			s = DecodeStringUrl(url);
			if(!s.includes("www.google.") && !s.includes("support.google.com/websearch?p=featured_snippets&hl=it-IT") && s !== ""){
				mySet1.add(s);
			}
		}
	}
	const array = Array.from(mySet1);
	var opened_pages = [];
	for (let j = 0; j < array.length; j++) {
		let openWindow = window.open(array[j], '_blank');
		opened_pages.push(openWindow);
	}

	setTimeout(() => {
		for (let win of opened_pages) {
			if(win !== null)  win.close();
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

let list_of_comments = ["The result is very helpful because provides helpful information about the query", "the result provides correct information",
	"the result is a scrb that shows helpful information", "this result is very helpful for the query", "this result is very helpful", "The result does not have any problem with the query", "the result is a scrb that shows helpful information", "the result is good", "the result is ok",
	"this result does not have any problem", "the result is very good for the query", "the result is very good", "the scrb is good", "this scrb provides helpful information", "scrb is ok", "the special block looks very good and accurate", "this scrb is accurate", "the scrb looks good"];


function FillTextArea(element, field_name, comments=list_of_comments){
	let elements;
	if(field_name === null){
		elements = element.getElementsByTagName('textarea');
	}else if(field_name==="comment"){
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
				elements[i].value = comments[Math.floor(Math.random() * comments.length)];
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


var ewokBudsQuery = document.getElementById("ewok-buds-query");
if(ewokBudsQuery != null) {
	var newDiv = document.createElement("div");
	var clickableText = document.createElement("span");
	clickableText.textContent = "Open All Links in web browser";
	clickableText.style.cursor = "pointer";
	clickableText.onclick = function () {
		OpenAllLinks(wait_time_sec);
	};
	newDiv.appendChild(clickableText);
	ewokBudsQuery.appendChild(newDiv);
}


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
		let list = [["90%", "4.5"]];
		get_and_set_sliders(list);
	}
	console.log("done")
}

if (type === "Side By Side") {
	/* SXS VIEWPORT */
	testo = "The viewport, that is the map that the user was viewing prior to issuing the query (represented by a red rectangle on the Map).";
	if (CheckTextOnDocument(document, testo)) {
		console.log("SXS VIEWPORT");
		let list = [["80%", "4"], ["80%", "4"]];
		get_and_set_sliders(list);

		set_all_radios(document, "categorical");
		let side = LeftOrRightSideMB();
		if (!side) {
			set_all_radios(document, "AboutTheSameAs");
		}else{
			set_all_radios(document, side);
		}
	}

	/* SEARCH PRODUCT SXS */
	testo = "In this task, you will be given a query and up to 10 product search results for this query. A product search result will include an image, title, price, and the name of a specific merchant selling the product or the phrase \"from many merchants\". Some parts, like the title and merchant name, might be truncated.";
	if (CheckTextOnDocument(document, testo)) {
		console.log("SEARCH PRODUCT SXS");
		let side = LeftOrRightSideMB();
		let list = [["70%", "3.5"], ["70%", "3.5"]];
		get_and_set_sliders(list);
		set_all_radios(document, side);
	}

	/* SXS NO NEEDS MET */
	testo = 'In this task, you will be asked to compare two Search result pages, arranged side by side.\n' +
		'You will not be shown the standard Needs Met slider, Page Quality slider, or flags for either of the result pages.';
	if (CheckTextOnDocument(document, testo)) {
		console.log("SXS NO NEEDS MET");
		set_all_radios(document, "AboutTheSameAs");
	}

	/* ENGANGING YT SXS */
	testo = "In this task, you will be given a query and corresponding result blocks linking to videos. For each result block, you will be asked a series of questions about the engagingness of the video for the query. You may skim through the video if you would like. If a video is of a foreign language, ratings will not be required, but please consider answering any questions that are still applicable.";
	if (CheckTextOnDocument(document, testo)) {
		console.log("ENGAGINGNESS VIDEO SXS");
		let list = [["60%", "3"]];
		open_links_set_sliders_set_radios(document, list, "-1");
	}

	/* INFORMATIVE YT SXS */
	testo = "MC that feels like a good use of time is informative (example, example), inspirational (example, example), and/or entertaining (example, example). MC that doesn’t feel like a good use of time is meaningless (example, example) or off-putting (example).";
	if (CheckTextOnDocument(document, testo)) {
		console.log("INFORMATIVE VIDEO SXS");
		let list = [["60%", "3"]];
		open_links_set_sliders_set_radios(document, list, "1");
	}


	/* IMAGE-SXS*/
	testo = 'In this task, you will be given a query issued to image search, followed by two sets of image search results';
	if (CheckTextOnDocument(document, testo)) {
		console.log("IMAGE SXS FOUND")
		let list = [["80%", "4"], ["75%", "3"], ["62.5%", "2.5"], ["70%", "3.5"]];
		open_links_set_sliders_set_radios(document, list, "AboutTheSameAs");


	}

	/* MINI NEWS AND BLOGS */
	testo = "A story is important if it would typically feature prominently on the front page of national or local newspapers, or major publications on the topic.";
	if (CheckTextOnDocument(document, testo)) {
		console.log("MINI NEWS AND BLOGS FOUND");
		let radios_value = LeftOrRightSideMB();
		if(!radios_value){
			radios_value = "AboutTheSameAs";
		}

		let list = [["80%", "4"], ["100%", "5"], ["80%", "4"], ["60%", "3"]];
		get_and_set_sliders(list);
		set_all_radios(document, radios_value, false);
	}

	/* app sxs */
	testo = 'This is an Apps & Games Search evaluation task for a mobile app store. For the purposes of this task, assume the user is using an Android OS device.';
	if (CheckTextOnDocument(document, testo)) {
		console.log("APP SXS FOUND");
		let list = [["70%", "3.5"],["70%", "3.5"]];
		get_and_set_sliders(list, false);

		set_all_radios(document, "AboutTheSameAs", false);
		set_all_radios(document, "navigational", true);
	}

	/* RELATED QUESTION */
	testo = 'In this task, you will be given a user-issued query and a list of computer-generated "related questions". Each related question is accompanied by a computer-selected answer passage taken from the web. Your job is to:';
	if (CheckTextOnDocument(document, testo)) {
		console.log("related question found");
		let list = [["80%", "4"],["80%", "4"]];
		get_and_set_sliders(list);
		set_all_radios(document, "no", false);

		blocks = document.getElementsByClassName('ewok-buds-question ewok-buds-result-question');
		for (let j = 0; j < blocks.length; j++) {
			var hidden = blocks[j].querySelector('input[type="hidden"]');
			if (hidden != null) {
				hidden.value = "looks_good";
				set_all_checkboxes(blocks[j], "looks_good", false);
			}
		}
		set_all_radios(document, "1", false);
	}

	/* GENERAL SXS */
	testo = 'Please refer to the General Guidelines and Side-by-Side Rating Guidelines for instructions on how to rate these results from the perspective of a mobile user, using the Needs Met scale. Keep in mind that users are people from many different backgrounds (including people of all ages, genders, races, religions, political affiliations, etc.), whose experiences and needs may differ from your own';
	testo2 = "In this task, you will be given a query and up to 10 search results which are products for this query. A product result will include an image, title, and optionally a review star rating. Some parts, like the title, might be truncated. Clicking on such a product result will lead to a new search results page for that specific product.";
	if (CheckTextOnDocument(document, testo) || CheckTextOnDocument(document, testo2)) {
		console.log("GENERAL SXS FOUND");
		let radios_value = LeftOrRightSideMB();
		if(!radios_value){
			radios_value = "AboutTheSameAs";
		}
		let list = [["70%", "3.5"],["70%", "3.5"]];
		open_links_set_sliders_set_radios(document, list, radios_value, true);
	}

	/* sxs one big block */
	testo = 'This task will ask you to evaluate two search result blocks, arranged side by side. You will not be shown the standard Needs Met slider, Page Quality slider, or flags for either of the result blocks.';
	if (CheckTextOnDocument(document, testo)) {
		console.log("mobile sxs one block found");
		set_all_radios(document, "AboutTheSameAs", false);
	}

	/* HIGHLIGHTED DIFFERENCES */
	testo = 'Tell us which side provides more useful additional information. Differences between the results are highlighted. Keep in mind that more information is not necessarily better.';
	if (CheckTextOnDocument(document, testo)) {
		console.log("HIGHLIGHTED DIFFERENCES found");
		let list = [["80%", "4"],["80%", "4"]];
		get_and_set_sliders(list);
		set_all_radios(document, "0");
		set_all_radios(document, "AboutTheSameAs");

	}
	/* SNIPPET */
	testo = "The only difference between the content of the result blocks will be the snippet.";
	if (CheckTextOnDocument(document, testo)) {
		console.log("Snippet SXS found");
		let list = [["60%", "2"],["80%", "3"]];
		get_and_set_sliders(list, true);
		set_all_radios(document, "AboutTheSameAs");
	}

	/* YOUTUBE SXS RACY o ADULT*/
	if (CheckTextOnDocument(document, "In this task, you may be exposed to queries, webpages, and/or topics that contain potentially pornographic content.") ||
		CheckTextOnDocument(document, "In this task, you will be asked to provide Needs Met and Page Quality ratings for queries that were issued on www.youtube.com. Please be aware of the user intent difference when the query is issued on YouTube rather than a general search engine.")) {

		console.log("yt sxs racy found");
		let list = [["70%", "3.5"],["70%", "3.5"]];
		open_links_set_sliders_set_radios(document, list, "AboutTheSameAs");
		set_all_radios(document, "0");
		set_all_radios(document, "3");

	}

	/* SXS LOCAL HOTEL */
	teso = "This is a hotel search task. Please assume that the user issuing the query wants to travel and potentially book a hotel from a list of hotels.";
	/* SXS LOCAL VIEWPORT*/
	testo1 = "Understand the user's intent by considering the query in the context of the area of interest, which may be determined by the following:\n" +
		"Some location mentioned in the query text itself.";

	/* WEB SXS */
	testo2 = 'Instructions\n' +
		'\n' +
		'IMPORTANT (PLEASE READ): For the purposes of this task, please assume the query was issued on a desktop computer.\n' +
		'\n' +
		'Please refer to the General Guidelines and Side-by-Side Rating Guidelines for instructions on how to rate these results.';
	if (CheckTextOnDocument(document, testo) || CheckTextOnDocument(document, testo1) || CheckTextOnDocument(document, testo2)) {
		console.log("local sxs hotel, web sxs or local viewport found");
		let list = [["80%", "4"],["80%", "4"]];
		open_links_set_sliders_set_radios(document, list, "AboutTheSameAs", true);
	}

	console.log("done");
}

let lastCheckBox;
if (type === "Experimental") {
	/* labeled virtual assistant response */
	if(CheckTextOnDocument(document,"In this task, you will see part or all of a conversation between a user and a Virtual Assistant. Your job is to evaluate the last response shown from the assistant, labeled Virtual Assistant's Response")){
		console.log("labeled virtual assistant response found");
		PlayAudio(document);
		let list = [["100%", "2"],["80%", "4"], ["33.3333%", "0"], ["33.3333%", "0"], ["33.3333%", "0"], ["33.3333%", "0"], ["33.3333%", "0"], ["33.3333%", "0"], ["33.3333%", "0"], ["33.3333%", "0"], ["90%", "4.5"]];
		let sliders = document.getElementsByClassName("evl-slider2");
		for(let s = 0; s<sliders.length; s++){
			setSliders(sliders[s], list[s][0], list[s][1]);
			new Promise(resolve => setTimeout(resolve, 1000));
		}
		let comments_list = ["No issues has been found", "Response is ok", "Response is good",
										"The response is ok", "No problems found", "No issues found",
										"Everything looks fine","No errors detected","Response is satisfactory",
										"No irregularities found","Response is within acceptable parameters"]

		FillTextArea(document,null, comments_list);
	}

	/* search product or background and reputation*/
	if(CheckTextOnDocument(document,"In this task, you will be provided with a particular User Intent as additional context to the query.")){
		console.log("Search product experimental or background and reputation found");
		set_all_radios(document, "clear", true);
		set_all_radios(document,"1");
		let list = [["80%", "4"],["80%", "4"]];
		get_and_set_sliders(list);
		OpenAllLinks(wait_time_sec);
		set_all_checkboxes(document, "acknowledgement", false);
	}


	testo = "In this task, you will be asked to rate the quality of two different translations of the source text, using the rating scale below";
	if (CheckTextOnDocument(document, testo)) {
		console.log("ROSETTA FOUND");
		let min = 4;
		let max = 7;
		var evaluation = Array.from({length: 2}, () => Math.floor(Math.random()*(max - min) + min));

		var r = document.querySelectorAll('input[type="radio"]');

		for(let j = 0; j<r.length; j++){
			r[j].scrollIntoView();

			if(r[j].name==="sys0" && r[j].value===String(evaluation[1])){
				r[j].click();
			}

			if(r[j].name==="sys1" && r[j].value===String(evaluation[0])){
				r[j].click();
			}
		}
	}

    /*  subtopic query */
    testo="In this task, you will be given a series of query pairs indicated as Q1 and Q2. For each query pair, your job is to determine whether Q2 is a subintent of Q1. You can click on each query and view top search results to better understand Q1 and Q2";
    if(CheckTextOnDocument(document, testo)){
        console.log("subtopic query found");
        set_all_radios(document, "1");
    }


	/* BIG DEF */
	testo="Consider whether the query likely implies a direct request for information that can be satisfied by a Direct Answer Block.";
	if (CheckTextOnDocument(document, testo)){
		console.log("big def found");
		let list = [["90%", "4.5"],["90%", "4.5"]];
		get_and_set_sliders(list, true);
		/* per forza in questo modo, non funziona con checked=true */
		var dupes1 = document.getElementsByClassName("ewok-buds-result-dupes")[0];
		var dupesText = dupes1.innerText;
		var skip=false;
		if(dupesText.includes("Same as")){
			skip=true;
		}
		const check = document.querySelectorAll('input[name*="landing_page.N"]');
		for(j = 0; j<check.length; j++){
            if(check[j].value==="1"){
                check[j].click();
            }
            if(skip){
                break;
            }
        }
		let  hiddenElements = document.querySelectorAll('input[type="hidden"][name*="landing_page_clicked"]');
		for (let hf of hiddenElements){
			hf.value = true;
		}
		/*let d = document.getElementsByClassName("ewok-buds-sides")[0];
		OpenAllLinks(wait_time_sec, d);*/
	}

	/* MACHINE GENERATED RESPONSES */
	testo = "In this task, you will be provided with a long Machine-Generated Response to a user’s question(s) along with several Target Sentences and their cited Evidence. The Target Sentences should be based on information found within the cited Evidence, however it will often either misrepresent the information or will provide additional information not found in the Evidence.";
	if (CheckTextOnDocument(document, testo)){
		console.log("MACHINE GENERATED RESPONSES");
		set_all_radios(document, "fully", true);
		set_all_checkboxes(document, "none_sentence_html", false);
	}

	/* STALE URL */
	testo = "In this task, you will be given a list of URLs of articles. Your job is to rate the extent to which each article would be considered stale, if it were read after a specific amount of time had passed since it was first published. The specific amount of time (hours or days) will be provided in the task.";
	if (CheckTextOnDocument(document, testo)){
		console.log("STALE URL");
		let block = document.getElementById("editable-289");
		OpenAllLinks(wait_time_sec, doc=block);
		set_all_radios(document, "OK", true);
		set_all_radios(document, "evergreen", false);
	}

	/* SHORT ANSWER */
	testo = 'In this task, you will be given a query and user location, followed by a Short Answer to evaluate. One (or more) Long Answers from the relevant webpages are provided for the background information to infer the accuracy of the Short Answer.';
	if (CheckTextOnDocument(document, testo)){
		console.log("short answer found");
		let list = [["100%", "5"],["80%", "4"]];
		get_and_set_sliders(list);
		FillTextArea(document, "result_question");
	}

	/* youtube automatic test */
	testo = 'In this task, you will be provided some Machine-Generated Text (e.g., constructed by an artificial intelligence algorithm), some Source Material which the Machine-Generated Text is primarily based on (along with a link with additional context in some cases), and a short explanation of the Purpose of the Machine-Generated Text to provide additional context on what the Machine-Generated Text is meant to represent.';
	if (CheckTextOnDocument(document, testo)){
		console.log("youtube automatic text found");
		set_all_radios(document, "minor_inconsistencies", true);
		set_all_checkboxes(document, "language_issues_generated_text", false);
	}

	/* UO NOT AT ALL */
	testo = "In this task, you will be given links to landing pages, and asked to what extent each landing page is";
	if (CheckTextOnDocument(document, testo)) {
		console.log("UO NOT AT ALL FOUND");
		let el = document.getElementsByClassName("with-first-row-headers ewok-editor-editable-columngroup")[0];
		OpenAllLinks(wait_time_sec, el);
		let list = [["75%", "2"], ["75%", "2"], ["75%", "2"], ["75%", "2"], ["75%", "2"], ["75%", "2"],];
		get_and_set_sliders(list);
	}

	/* SHORT DESCRIPTION */
	testo = 'In this task, you will be given an entity (e.g., a person, company, place, book, etc.) and a short description of the entity.';
	if (CheckTextOnDocument(document, testo)){
		console.log("short description found");
		set_all_radios(document, "best", true);
	}

	/* TOXIC COMMENTS */
	testo = 'In this task, you will be given a list of online comments. For each comment, your job is to:\n' +
		'\n' +
		'\n' +
		'Read the comment.\n' +
		'If the comment is in a foreign language or not comprehensible for another reason (e.g. gibberish, different dialect, etc.), please indicate that by selecting the checkbox. \n' +
		'Answer a set of questions about the comment.\n' +
		'Choose the level of toxicity in the comment.\n' +
		'If you are in doubt, err on the side of Yes or I\'m not sure.';
	if (CheckTextOnDocument(document, testo)){
		console.log("TOXIC COMMENTS FOUND");
		set_all_radios(document, "0", true);
	}

	/* YMYL */
	testo = 'This task is an extension to the Your Money, Your Life (YMYL) assessment described in the General Guidelines (Section 2.3). Your task is to determine to what extent a page may significantly harm a person’s happiness, health, financial stability, or safety.';
	if (CheckTextOnDocument(document, testo)){
		console.log("YMYL");
		let checkboxes = document.querySelectorAll('input[type="checkbox"]');
		for(let j = 0; j<checkboxes.length; j++){
			if(checkboxes[j].value==="1" && checkboxes[j].name==="not_url1" ){
				checkboxes[j].checked = true;
			}
		}
	}

	/* PERSON NAME */
	testo = 'In this task, you will be given a person\'s name and a reference URL to a page that mentions this name. Your job is to:';
	if (CheckTextOnDocument(document, testo)){
		console.log("PERSON NAME FOUND");
		set_all_radios(document, "yes", true);
		var div = document.getElementById("editable-92");
		OpenLink(div);
		div = document.getElementById("editable-117");
		OpenLink(div);

		var divs = document.querySelectorAll('[id^=editable-214]');
		for(let d of divs){
			OpenLink(d);
		}
		let list = [["20%", "1"]];
		get_and_set_sliders(list);

	}

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

	/* COMPLETIONS */
	testo="In this task, you will be asked to evaluate two sets of possible completions to a partial query. Importantly, the query will contain a ^ symbol to indicate the position of the cursor within the partial query.";
	if(CheckTextOnDocument(document, testo)){
		console.log("completions found");
		set_all_radios(document, "0");
		let list = [["66.6667%", "2"]];
		get_and_set_sliders(list);
		set_all_radios(document, "AboutTheSameAs", false);
	}

	testo="In this task, you will be given a query and an entity-subtopic pair associated with the query.";
	if(CheckTextOnDocument(document, testo)){
		console.log("entity subtopic found");
		radiosClick(document, "entitysubtopic");
	}

	/* COMBINED */
	testo="Your job is to determine if the First Query and Second Query are related, if they can be combined and how well a given Combined Query represents the user's intent for the Second Query.";
	if(CheckTextOnDocument(document, testo)){
		console.log("combined found");
		set_all_radios(document, "1", false);
		set_all_radios(document, "4", false);
	}

	/* PQ 4M UO */
	testo="In some questions you will be asked about the intended audience of the content";
	if(CheckTextOnDocument(document, testo)){
		console.log("pq 4m uofound");
		OpenAllLinks(wait_time_sec);

		set_all_checkboxes(document, "politics", false);
		set_all_checkboxes(document, "medical", false);
		set_all_radios(document, "likely_yes", false);
		set_all_radios(document, "persuade", false);

		let list = [["75%", "3"]];
		get_and_set_sliders(list);

	}

	/* UO */
	if (CheckTextOnDocument(document,"In this task, you will be given the link to an article and a list of categories that may describe the content of the article. Your job is to evaluate whether the article’s content relates to any of the categories shown and if so, to rate the corresponding intensity level of issues related to that category as conveyed in the article.")
		|| CheckTextOnDocument(document,"In this task, you will be shown one or more videos and a list of categories that may describe the nature of the video.")){

		console.log("uo not at all found");
		OpenAllLinks(wait_time_sec);

		let list = [["25%", "1"]];
		get_and_set_sliders(list);

		set_all_checkboxes(document, "isNoOtherDisturbingOffensive");
	}

	if (CheckTextOnDocument(document,"In this task, you will be given links to landing pages and asked if each landing page corresponds to any of following categories of Lowest Quality content, as defined in")){
		console.log("uo harmful found");
		let d = document.getElementById("editable-6");
		OpenAllLinks(wait_time_sec, doc=d);
		set_all_radios(document, 'likely_yes', setPagePosition=false);
	}

	/* LITTLE LOCAL */
	testo = 'In this task, you may see special blocks that are shown at the very top of the search results (e.g., above L1 and/or R1).  They do not contain the Needs Met or E-A-T sliders';
	if (CheckTextOnDocument(document, testo)){
		console.log("little local found");

		let list = [["80%", "4"], ["80%", "4"]];
		get_and_set_sliders(list);

		set_all_radios(document, "AboutTheSameAs");
	}

	testo="In this task, you will be given a query and asked to decide what lodging intent the user has, if any";
	if (CheckTextOnDocument(document, testo)){
		console.log("lodging intent found");
		set_all_radios(document, "0");
	}

	testo = 'In this task, you may see special blocks that are shown at the very top of the search results (e.g., above L1 and/or R1).  They do not contain the Needs Met or Page Quality sliders.  Please see the screenshot example below.';
	if (CheckTextOnDocument(document, testo)){
		console.log("local exp found");
		let list = [["80%", "4"], ["80%", "4"]];
		get_and_set_sliders(list);
	}
	/* YOUTUBE EXP RACY */
	if (CheckTextOnDocument(document, "In this task, you will be given titles and thumbnails of many videos. For each video, your job is to evaluate: How many users in your locale would find this video racy? When rating, please assume users have not previously watched or searched for similar videos.")) {
		console.log("yt exp racy found");
		let list = [["25%", "1"]];
		get_and_set_sliders(list);
	}

	/* NEWS AND BLOGS */
	testo="Review each snapshot and make a note of the Top 3 Prominent News Topics that are common between them.";
	if(CheckTextOnDocument(document, testo)){
		console.log("news and blogs found");
		OpenAllLinks(wait_time_sec);
		set_all_radios(document, "1", false);
	}

	/* PAGE QUALITY UO */
	if (CheckTextOnDocument(document, "In this task, you may be exposed to queries, webpages, and/or topics that contain potentially upsetting-offensive (U-O) content")){
		if(CheckTextOnDocument(document, "In this task, you will be given a link to a landing page and asked a few questions about it.")){
			console.log("page quality uo found");
			radiosClick(document, "pquo");
			OpenAllLinks(wait_time_sec);
		}
	}
	/* PAGE QUALITY YOUTUBE UO */
	if (CheckTextOnDocument(document,"In this task, you may be exposed to queries, webpages, and/or topics that contain potentially upsetting-offensive (U-O) content")){
		if(CheckTextOnDocument(document,"In this task, you will be asked to evaluate the Page Quality of landing pages for a given Video URL and Content Creator URL.")){
			console.log("yt pq uo found");
			OpenAllLinks(wait_time_sec);
			radiosClick(document, "ytpquo");
		}
	}

	/*YOUTUBE EXP ADULT*/
	testo = 'In this task, you will be given a list of videos. Your job is to identify porn or racy content';
	if (CheckTextOnDocument(document, testo)){
		console.log("youtube exp adult found");
		set_all_radios(document, "0", true);
		set_all_checkboxes(document, "confirm-watched-all-videos", false);
	}

	/* PAGE QUALITY NORMALI */
	testo="In each task, you will be given a URL and some questions about the landing page. Please use the PQ grid to check Page Quality characteristics and assign an overall rating.";
	if(CheckTextOnDocument(document, testo)){
		console.log("common pq found");
		let url_div = document.getElementsByClassName("pq-task-main-info")[0];
		OpenLink(url_div, wait_time_sec);
		document.getElementsByName('purposeComment')[0].value = "The purpose of this landing page is to ";
		set_all_radios(document, "no", false);
		set_all_radios(document, "not-ymyl", false);
		set_all_radios(document, "website-responsible", false);
	}

	/* GRAMMAR */
	testo = 'For each query, your job is to evaluate the virtual assistant\'s Response Language Quality (i.e., the quality of language it uses to reply to the user) and its Speech Quality (i.e., the quality of the virtual assistant\'s verbalization of its response).';
	if (CheckTextOnDocument(document, testo)){
		console.log("grammar found");
		let list = [["100%", "3"], ["100%", "3"], ["66.6667%", "2"], ["100%", "3"]];
		get_and_set_sliders(list);
		set_all_radios(document, "1");
	}

	/* VA */
	testo = 'A Virtual Assistant is a service or mobile app that can understand queries from a user, and give visual results, audio responses, or take actions on the user\'s behalf';
	let testo1 = "The Direct Answer Block is intended to provide a direct answer to a user's need in a natural way. Here are some examples on how to use the Needs Met Rating Scale to provide ratings for these kinds of results.";
	let testo2 = "An Assistant on TV is a virtual voice assistant built in or paired with a TV that can understand voice queries from a user, and give visual results, audio responses, or take actions on the user's behalf.";
	let testo3 = "In this task, you will be given a query a driver might issue to the voice assistant in their car. In most cases, you will see a corresponding audio response from the car, indicating what action the car would take in response to the voice query. In some cases, you will also see a visual response, like a directions or navigation card.";
	let testo4 = "An eyes-free voice assistant is an electronic device that can understand voice queries from a user, and give audio responses or take actions on the user's behalf.";
	let testo5 = "A Smart Display is an electronic device that can understand voice queries from a user and give both visual and audio responses or take actions on the user's behalf.";
	let found = false;

	if (CheckTextOnDocument(document, testo) || CheckTextOnDocument(document, testo2) || CheckTextOnDocument(document, testo3) || CheckTextOnDocument(document, testo4) || CheckTextOnDocument(document, testo5)) {
		console.log("va found");
		found = true;
	}
	if(CheckTextOnDocument(document, testo1)) {
		console.log("def found");
		found = true;
	}

	if (found === true){
		let list = [["90%", "4.5"]];
		get_and_set_sliders(list);

		PlayAudio(document);
		FillTextArea(document, "comment");
	}

	/* NEEDS MET */
	testo="InstructionsPlease refer to the General Guidelines for instructions on how to rate these results from the perspective of a mobile user, using the Needs Met scale. Keep in mind that users are people from many different backgrounds (including people of all ages, genders, races, religions, political affiliations, etc.), whose experiences and needs may differ from your own.Reminder: Your ratings should be based on the instructions and examples given in the General Guidelines (refer to Section 0.2: Raters Must Represent People in their Rating Locale). Ratings should not be based on your personal opinions, preferences, religious beliefs, or political views. Always use your best judgment and represent the cultural standards of your rating locale.The links in this task should be opened on your mobile device by following the Send to Device Instructions. Note that you will not be able to access the landing page links on your computer/desktop.";
	testo2="InstructionsPlease refer to the General Guidelines for instructions on how to rate these results from the perspective of a mobile user, using the Needs Met scale. Keep in mind that users are people from many different backgrounds (including people of all ages, genders, races, religions, political affiliations, etc.), whose experiences and needs may differ from your own.Reminder: Your ratings should be based on the instructions and examples given in the General Guidelines (refer to Section 0.2: Raters Must Represent People in their Rating Locale). Ratings should not be based on your personal opinions, preferences, religious beliefs, or political views. Always use your best judgment and represent the cultural standards of your rating locale.The links in this task should be opened on your mobile device by following the Send to Device Instructions. Note that you will not be able to access the landing page links on your computer/desktop.Special InstructionsIn this task, you may see blocks that are not numbered (e.g., L1, L2, etc.) and cannot be rated on the Needs Met or Page Quality rating scales. For example:These blocks are referred to as \"contextual headings\" (usually appearing near the top of the results) because they typically contain headings or title information, and are meant to provide context for the other results below them on that side. While you will not be asked to rate contextual headings, please treat them as extra information to help you understand what the overall result set is about.";
	testo3="InstructionsIMPORTANT (PLEASE READ): The links in this task should be opened on your mobile device by following the Send to Device Instructions. Note that you will not be able to access the landing page links on your computer/desktop.Please refer to the General Guidelines for instructions on how to rate these results from the perspective of a mobile user, using the Needs Met scale.Special InstructionsIn this task, you may see blocks that are not numbered (e.g., L1, L2, etc.) and cannot be rated on the Needs Met or Page Quality rating scales. For example:These blocks are referred to as \"contextual headings\" (usually appearing near the top of the results) because they typically contain headings or title information, and are meant to provide context for the other results below them on that side. While you will not be asked to rate contextual headings, please treat them as extra information to help you understand what the overall result set is about.";
	testo4="InstructionsIMPORTANT (PLEASE READ): The links in this task should be opened on your mobile device by following the Send to Device Instructions. Note that you will not be able to access the landing page links on your computer/desktop.Please refer to the General Guidelines for instructions on how to rate these results from the perspective of a mobile user, using the Needs Met scale.";
	let list = [[],[]];
	if(ExactText(document, testo) || ExactText(document, testo2) || ExactText(document, testo3) || ExactText(document, testo4)){
		if(FillTextArea(document, "comment")) {
			console.log("PSYCHO FOUND");
			list = [["90%", "4.5"],["80%", "4"]];
		}else{
			list = [["70%", "3.5"], ["70%", "3.5"]];
			console.log("NEEDS MET FOUND");
		}
		let d = document.getElementsByClassName("ewok-buds-sides")[0];
		open_links_set_sliders_set_radios(d, list);
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




/*SAFESEARCH 1M PORN */
if (type === "Result Review"){
	testo="For each task, you will be given a URL. Please click the URL and visit the landing page. Please rate the given URLs using the labels \"Porn\", \"Didn't Load\", \"Foreign Language\" or \"Not Porn\" as follows:";
	if (CheckTextOnDocument(document, testo)){
		console.log("safesearch");
		OpenAllLinks(wait_time_sec);
		set_all_radios(document, "Not Porn");
		console.log("done");
	}
}