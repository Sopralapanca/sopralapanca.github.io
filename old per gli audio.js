/***** INIZIO AUTOCOMPLETE *******/
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
async function setSliders(block, value, task){

	let k;
	task = typeof task !== 'undefined' ? task : 'normal';

	var hiddenValue = "0";

	if(value === "20%" || value === "25%"){
		hiddenValue = "1";
	}

	if(value === "40%"){
		hiddenValue = "2";
	}

	if(value === "60%"){
		if(task === "normal")
			hiddenValue = "3";
		else
			hiddenValue = "2";
	}

	if(value === "66.6667%"){
		if(task === "normal")
			hiddenValue = "2";
		else if(task === 'grammar'){
			hiddenValue = "2";
		}else
			hiddenValue = "2";
	}

	if(value === "70%"){
		hiddenValue = "3.5";
	}

	if(value === "75%"){
		if(task === "normal")
			hiddenValue = "3";
		else if(task === 'uo_not_at_all'){
			hiddenValue = "2";
		}
	}

	if(value === "80%"){
		if(task === "normal")
			hiddenValue = "4";
		else
			hiddenValue = "3";
	}

	if(value === "90%"){
		hiddenValue = "4.5";
	}

	if(value === "100%"){
		if(task === "normal")
			hiddenValue = "5";
		else if(task === 'grammar'){
			hiddenValue = "3";
		}else
			hiddenValue = "3";

	}

	const sliderBar = block.getElementsByClassName("evl-slider2-bar-selected");
	const sliderTriangle = block.getElementsByClassName("evl-slider2-thumb evl-slider2-thumb-value goog-slider-thumb");
	const hiddenField = block.getElementsByTagName("input");
	const SpeakerSimilarityField = block.getElementsByTagName("SpeakerSimilarity");

	const min = 1500;
	const max = 3000;
	const base = 1000;

	for (k = 0; k<sliderBar.length; k++){
		await sleep(base+(Math.round(Math.random()*(max - min) + min)));
		sliderBar[k].style.width = value;
		sliderTriangle[k].style.left = value;

	}

	for (k = 0; k<hiddenField.length; k++){
		await sleep(base+(Math.round(Math.random()*(max - min) + min)));
		hiddenField[k].value = hiddenValue;
	}

	for (k = 0; k<SpeakerSimilarityField.length; k++){
		await sleep(base+(Math.round(Math.random()*(max - min) + min)));
		SpeakerSimilarityField[k].value = hiddenValue;
	}
}

/*get all evl-slider2 and set values */
function get_and_set_sliders(value,task){

	task = typeof task !== 'undefined' ? task : 'normal';
	var allBlocks = document.querySelectorAll(
		".ewok-buds-card, .ewok-buds-result, .ewok-buds-result-has-dupes, .ewok-buds-result-highlight, .ewok-editor-editable-column");

	if (typeof allBlocks[2] !== 'undefined') {
		allBlocks[2].scrollIntoView();
	}

	let v = value;

	for(var i=0; i<allBlocks.length; i++){
		if(String(allBlocks[i].innerText).includes("No Rating Required")){
			continue;
		}

		var allBigTicks = allBlocks[i].getElementsByClassName("evl-slider2-tick-big")
		let elem;
		for (elem of allBigTicks){
			var tmp = elem.getAttribute("data-tick");

			if(tmp === "Too informative"){
				v = "66.6667%";
			}
		}

		var evlBlock = allBlocks[i].getElementsByClassName("evl-slider2");
		for(let eval of evlBlock){
			setSliders(eval,v,task);
		}

	}

	if(allBlocks.length === 0){
		var evlBlock = document.getElementsByClassName("evl-slider2");
		evlBlock[0].scrollIntoView();
		for(let eval of evlBlock){
			setSliders(eval,v,task);
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
			cboxes[j].checked = true;
		}
	}
}


function open_links_set_sliders_set_radios(block, sliders_value, radios_value="AboutTheSameAs", set_page_position=true){
	OpenAllLinks(wait_time_sec);
	get_and_set_sliders(sliders_value);
	set_all_radios(block, radios_value, set_page_position);
}


async function radiosClick(doc, task) {
	var radios = doc.querySelectorAll('input[type=radio]');
	let j;
	var tmp = null;

	if (task === "entitysubtopic"){
		for(j = 0; j<radios.length; j++){

			if (radios[j].name === "match_meaning" && radios[j].value === "1"){
				tmp = radios[j];
				await sleep(2000+(Math.round(Math.random()*3000)));
				tmp.click();
			}

			if (radios[j].name === "entity_intent_valid" && radios[j].value === "1"){
				tmp = radios[j];
				await sleep(2000+(Math.round(Math.random()*3000)));
				tmp.click();
			}

			if (radios[j].name === "readable" && radios[j].value === "1"){
				tmp = radios[j];
				await sleep(2000+(Math.round(Math.random()*3000)));
				tmp.click();
			}

		}
	}

	if (task === "pquo"){
		for(j = 0; j<radios.length; j++){

			if (radios[j].name === "intolerant_insensitive" && radios[j].value === "no"){
				tmp = radios[j];
				await sleep(2000+(Math.round(Math.random()*3000)));
				tmp.click();
			}

			if (radios[j].name === "deceptive_misleading" && radios[j].value === "no"){
				tmp = radios[j];
				await sleep(2000+(Math.round(Math.random()*3000)));
				tmp.click();
			}

			if (radios[j].name === "harm" && radios[j].value === "no"){
				tmp = radios[j];
				await sleep(2000+(Math.round(Math.random()*3000)));
				tmp.click();
			}

			if (radios[j].name === "sad" && radios[j].value === "no"){
				tmp = radios[j];
				await sleep(2000+(Math.round(Math.random()*3000)));
				tmp.click();
			}

			if (radios[j].name === "inappropriate" && radios[j].value === "no"){
				tmp = radios[j];
				await sleep(2000+(Math.round(Math.random()*3000)));
				tmp.click();
			}

			if (radios[j].name === "sensational" && radios[j].value === "no"){
				tmp = radios[j];
				await sleep(2000+(Math.round(Math.random()*3000)));
				tmp.click();
			}

			if (radios[j].name === "inflammatory" && radios[j].value === "no"){
				tmp = radios[j];
				await sleep(2000+(Math.round(Math.random()*3000)));
				tmp.click();
			}

			if (radios[j].name === "commercial" && radios[j].value === "no"){
				tmp = radios[j];
				await sleep(2000+(Math.round(Math.random()*3000)));
				tmp.click();
			}

			if (radios[j].name === "gossip" && radios[j].value === "no"){
				tmp = radios[j];
				await sleep(2000+(Math.round(Math.random()*3000)));
				tmp.click();
			}
		}
	}

	if (task === "ytexpadult"){
		/* forse si può semplificare con solo i value 0  */
		for(j = 0; j<radios.length; j++){
			if(radios[j].name.includes("IsTitleRacy") && radios[j].value === "0"){
				tmp = radios[j];
				await sleep(2000+(Math.round(Math.random()*3000)));
				tmp.click();
			}

			if(radios[j].name.includes("IsThumbnailRacy") && radios[j].value === "0"){
				tmp = radios[j];
				await sleep(2000+(Math.round(Math.random()*3000)));
				tmp.click();
			}

			if(radios[j].name.includes("IsVideoRacy") && radios[j].value === "0"){
				tmp = radios[j];
				await sleep(2000+(Math.round(Math.random()*3000)));
				tmp.click();
			}
		}

	}

	if (task === "expscrbaccuracy"){
		/* forse si può semplificare con solo i value 0  */
		for(j = 0; j<radios.length; j++){
			if(radios[j].name==="accuracy" &&  radios[j].value==="1"){
				tmp = radios[j];
				await sleep(2000+(Math.round(Math.random()*3000)));
				tmp.click();
			}

			if(radios[j].name==="YMYL" &&  radios[j].value==="0"){
				tmp = radios[j];
				await sleep(2000+(Math.round(Math.random()*3000)));
				tmp.click();
			}

			if(radios[j].name==="inflammatory" &&  radios[j].value==="0"){
				tmp = radios[j];
				await sleep(2000+(Math.round(Math.random()*3000)));
				tmp.click();
			}

			if(radios[j].name==="disputed_topic" &&  radios[j].value==="0"){
				tmp = radios[j];
				await sleep(2000+(Math.round(Math.random()*3000)));
				tmp.click();
			}
		}
	}

	if (task === "ytpquo" || task === "commonpq"){
		for(j = 0; j<radios.length; j++){
			if(radios[j].name==="badpage" &&  radios[j].value==="no"){
				tmp = radios[j];
				await sleep(2000+(Math.round(Math.random()*3000)));
				tmp.click();

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
	var allBlocks = doc.querySelectorAll(".ewok-buds-card, .ewok-buds-result, .ewok-buds-result-has-dupes, .ewok-buds-result-highlight, .ewok-editor-editable-column");

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
					var s = DecodeStringUrl(url);
					mySet1.add(s);
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
				var s = DecodeStringUrl(search_link);
				if (s!== "") mySet1.add(s);
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
	}, wait_time-2000);
}

/* opens one link */
function OpenLink(block) {
	var search_link = block.getElementsByTagName('a')[0].href;
	var openWindow = window.open(search_link, '_blank');
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
		console.log(error)
		return false;
	}
	return true;
}

function PlayAudio(element, field_name, play_twice=false){
	let audio_clips = element.querySelectorAll('audio[id*=' + field_name + ']');
	audio_clips[0].scrollIntoView();

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


var header = document.getElementsByClassName("ewok-task-action-header")[0];
header = header !== undefined ? header.innerText:null;
/* mode restituisce youtube, mobile, local ecc */
var mode = document.getElementsByClassName("ewok-task-action-header")[0].children[0];
if(mode !== undefined) mode = mode.innerText;
/* tipe restituisce sxs o experimental */
var type = document.getElementsByClassName("ewok-task-action-header")[0].children[1].innerText;
var additional = document.getElementsByClassName("ewok-task-action-header")[0].children[2];
var additionalText = null;
if(additional != null){
	additionalText = additional.innerText;
}

var editable = document.getElementById("editable-2");
var disclaimer = document.getElementsByClassName("ewok-task-disclaimer")[0];
var instructionsDiv = document.getElementsByClassName("ewok-buds-card")[0];
var editable3 = document.getElementById("editable-3");
var editable67 = document.getElementById("editable-67");
var pqInstruction = document.getElementById("pq-instructions");

var time = document.getElementsByClassName("ewok-estimated-task-weight")[0];
time = time.textContent;
var wait_time = time.split(" ")[2];
var wait_time_sec = ((parseInt(wait_time) * 60)/2)*1000;

var editableText = null;
var disclaimerText = null;
var editable3Text = null;
var instructionsDivText = null;
var editable67Text = null;
var pqInstructionText = null;
var isEditableNull = true;

let radios_value;

if (editable != null){
	editableText = editable.innerText;
	isEditableNull = false;
}
if (disclaimer != null){
	disclaimerText = disclaimer.innerText;
	isEditableNull = false;
}

if (editable3 != null){
	editable3Text = editable3.innerText;
	isEditableNull = false;
}

if (editable67 != null){
	editable67Text = editable67.innerText;
	isEditableNull = false;
}

if (instructionsDiv != null){
	instructionsDivText = instructionsDiv.innerText;
}

if (pqInstruction != null){
	pqInstructionText = pqInstruction.innerText;
}

var istructionsBodyText = null;
var istructionsBody = document.getElementById("instructions-body");
if (istructionsBody != null){
	istructionsBodyText = istructionsBody.innerText;
}

var list_of_comments =
	["The result is very helpful because provides helpful information about the query", "the result provides correct information",
		"the result is a scrb that shows helpful information", "this result is very helpful for the query", "this result is very helpful", "The result does not have any problem with the query", "the result is a scrb that shows helpful information", "the result is good", "the result is ok",
		"this result does not have any problem", "the result is very good for the query", "the result is very good", "the scrb is good", "this scrb provides helpful information", "scrb is ok", "the special block looks very good and accurate", "this scrb is accurate", "the scrb looks good"];

let testo;
let value;
let blocks;
let winnerSide;
let otherSide;

/* AUDIO */
if (mode === "Web" && type === "Experimental" && additionalText === "Headphones or Speakers Required"){
	testo = "In this task, you will be given one or more audio clips. For each clip, please listen to the speech very carefully and then select a rating for each audio clip. The rating should be based on how natural or unnatural the sentence sounded. Please do not judge the grammar or the content of the sentence. Instead, just focus on how natural the speech sounds.";
	if(CheckTextOnDocument(document, testo)){
		console.log('audio natural sentences found');
		PlayAudio(document, "task_clip_speech");
		set_all_radios(document, "Good");
	}else{
		console.log("headphones similar");
		var task = "headphones";
		radiosClick(document, task);
		PlayAudio(document, "speech_sample", play_twice=true);
		get_and_set_sliders("90%");
	}
}

if (mode === "Web" && type === "Side By Side"){
	/* SXS NO NEEDS MET */
	testo = 'In this task, you will be asked to compare two Search result pages, arranged side by side.\n' +
		'You will not be shown the standard Needs Met slider, Page Quality slider, or flags for either of the result pages.';
	if (CheckTextOnDocument(document, testo)){
		console.log("SXS NO NEEDS MET");
	}

	/* WEB SXS */
	testo = 'Instructions\n' +
		'\n' +
		'IMPORTANT (PLEASE READ): For the purposes of this task, please assume the query was issued on a desktop computer.\n' +
		'\n' +
		'Please refer to the General Guidelines and Side-by-Side Rating Guidelines for instructions on how to rate these results.';
	if (CheckTextOnDocument(document, testo)){
		console.log("WEB SXS");
		open_links_set_sliders_set_radios(document, "80%", "AboutTheSameAs");
	}

	/* ENGANGING YT SXS */
	testo = "In this task, you will be given a query and corresponding result blocks linking to videos. For each result block, you will be asked a series of questions about the engagingness of the video for the query. You may skim through the video if you would like. If a video is of a foreign language, ratings will not be required, but please consider answering any questions that are still applicable.";
	if (CheckTextOnDocument(document, testo)){
		console.log("ENGAGINGNESS VIDEO SXS");
		open_links_set_sliders_set_radios(document, "60%", "-1");
	}

	/* INFORMATIVE YT SXS */
	testo = "MC that feels like a good use of time is informative (example, example), inspirational (example, example), and/or entertaining (example, example). MC that doesn’t feel like a good use of time is meaningless (example, example) or off-putting (example).";
	if (CheckTextOnDocument(document, testo)){
		console.log("INFORMATIVE VIDEO SXS");
		open_links_set_sliders_set_radios(document, "60%", "1");
	}

	set_all_radios(document, "AboutTheSameAs");
	console.log("done");
}

/* IMAGE-SXS  DA FINIRE*/
if (mode === "Image" && type === "Side By Side"){
	testo = 'In this task you will be given a query issued to image search followed by two sets of image search results. Your job is to understand the query and the underlying user task or journey using the research links provided.';
	if (CheckTextOnDocument(document, testo)){
		console.log("IMAGE SXS FOUND");
		set_all_radios(document, "0", true);
		get_and_set_sliders("80%");
		set_all_radios(document, "AboutTheSameAs");
	}
	console.log("done");
}

/* BACKGROUND AND REPUTATION */
if (mode === "Search Product" && type === "Experimental") {
	testo = "You will first answer a question about the clarity of user needs based on the information provided by the query, user location, and user intent. Next, you will be asked to rate each result using the Needs Met scale based on your understanding of the needs of the user who issued the query.";
	if (CheckTextOnDocument(document, testo)) {
		console.log("BACKGROUND AND REPUTATION");
		OpenAllLinks(wait_time_sec);
		set_all_radios(document, "clear", true);

		var lastCheckBox = document.querySelector('input[type="checkbox"]');
		setTimeout(function(){lastCheckBox.click()},2000+(Math.round(Math.random()*3000)));
		get_and_set_sliders('80%');

		console.log("done");
	}
}

/* ROSETTA */
if (mode === "Rosetta" && type === "Experimental") {
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
		console.log("done");
	}
}

/* MINI NEWS AND BLOGS */
if (mode === "News and Blogs" && type === "Side By Side") {
	testo = "A story is important if it would typically feature prominently on the front page of national or local newspapers, or major publications on the topic.";
	if (CheckTextOnDocument(document, testo)) {
		console.log("MINI NEWS AND BLOGS FOUND");

		radios_value = "AboutTheSameAs"

		testo = "The right side did not generate any results."
		if (CheckTextOnDocument(document, testo)) {
			winnerSide = "left side";
			otherSide = "right side";
			radios_value = "MuchBetterThan";

			var list_of_comments =
				[otherSide + " is empty while " + winnerSide + " provides a list of helpful results that are on topic so " + "is much better."
				];

			var item = list_of_comments[Math.floor(Math.random()*list_of_comments.length)];
			document.getElementById('ewok-buds-validation-comment').value = item;
		}
		testo = "The left side did not generate any results."
		if (CheckTextOnDocument(document, testo)) {
			winnerSide = "right side";
			otherSide = "left side";
			radios_value = "MuchWorseThan";


			var list_of_comments =
				[otherSide + " is empty while " + winnerSide + " provides a list of helpful results that are on topic so " + "is much better."
				];

			var item = list_of_comments[Math.floor(Math.random()*list_of_comments.length)];
			document.getElementById('ewok-buds-validation-comment').value = item;
		}

		var allBlocks = document.getElementsByClassName("evl-slider2");

		for (let k = 0; k < allBlocks.length; k++) {
			var s = allBlocks[k].textContent;

			if(s.includes("How important is this story for the topic?")){
				value = '80%';
			}

			if(s.includes("How up-to-date is this article as of the time of the query above?")) {
				value = '100%';
			}

			if(s.includes("How informative is the title?")) {
				value = '80%';
			}

			if(s.includes("Page Quality Rating")) {
				value = '60%';
			}

			setSliders(allBlocks[k],value);

		}

		set_all_radios(document, radios_value, false);
		console.log("done");
	}
}

if (mode === "Web" && type === "Experimental") {
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
		get_and_set_sliders("100%");
		FillTextArea(document, "result_question");
	}

	/* QUERY-TOPIC RELEVANT */
	testo = 'In this task, you will be given a query and a topic. If the query intent is directly relevant to the topic, you will be asked three questions about the intent of the query with respect to the topic.';
	if (CheckTextOnDocument(document, testo)){
		console.log("query topic relevant");
		/* TODO CON IL QUERY SELECTOR ALL E FAI L'INCLUDE DI PARTE DEL NOME*/
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

		var div_urls = document.getElementsByClassName("wrap-long-url");
		for(let j = 0; j<div_urls.length; j++){
			let url = div_urls[j].getElementsByTagName('a')[0].innerHTML;
			var win = window.open(url, '_blank');
			j++;
		}
		get_and_set_sliders("75%", "uo_not_at_all");
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
		get_and_set_sliders("20%");

	}

	/*EXP SCRB ACCURACY*/
	testo = "You will be given a query and a Special Content Result Block (SCRB)";
	if (CheckTextOnDocument(document, testo)){
		console.log("exp scrb accuracy found");
		var task = "expscrbaccuracy";
		radiosClick(document, task);

		/* prendo la checkbox finale */
		var lastCheckBox = document.querySelector('input[name=no_lp_issues]');
		setTimeout(function(){lastCheckBox.click()},2000+(Math.round(Math.random()*3000)));
		FillTextArea(document, "comment");

	}

	/* COMPLETIONS */
	testo="In this task, you will be asked to evaluate two sets of possible completions to a partial query. Importantly, the query will contain a ^ symbol to indicate the position of the cursor within the partial query.";
	if(CheckTextOnDocument(document, testo)){
		console.log("completions found");
		set_all_radios(document, "0");
		get_and_set_sliders("66.6667%");
		set_all_radios(document, "AboutTheSameAs", false);
	}

	testo="In this task, you will be given a query and an entity-subtopic pair associated with the query.";
	if(CheckTextOnDocument(document, testo)){
		console.log("entity subtopic found");
		var task = "entitysubtopic";
		radiosClick(document, task);
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
		var editable597 = document.getElementById("editable-597");

		if (editable597 != null){
			var url = editable597.getElementsByTagName('a'), hrefs = [];
			for(j = 0; j<url.length; j++){
				var win = window.open(url[j].href, '_blank');

			}
		}

		set_all_checkboxes(document, "politics", false);
		set_all_checkboxes(document, "medical", false);
		set_all_radios(document, "likely_yes", false);
		set_all_radios(document, "persuade", false);
		get_and_set_sliders("75%");
	}

	/* UO */
	if (CheckTextOnDocument(document,"In this task, you will be given the link to an article and a list of categories that may describe the content of the article. Your job is to evaluate whether the article’s content relates to any of the categories shown and if so, to rate the corresponding intensity level of issues related to that category as conveyed in the article.")
		|| CheckTextOnDocument(document,"In this task, you will be shown one or more videos and a list of categories that may describe the nature of the video.")){

		console.log("uo not at all found");
		var j = 0;
		var editable14 = document.getElementById("editable-14");
		var editable14Text = null;

		if (editable14 != null){
			editable14Text = editable14.innerText;

			var url = editable14.getElementsByTagName('a'), hrefs = [];
			for(j = 0; j<url.length; j++){
				var win = window.open(url[j].href, '_blank');
				/* non funziona il close
				setTimeout(function() { win.close();}, 10); */

			}
		}

		/* uo video da 6 minuti */
		const elements = document.querySelectorAll(`[href^="https://www.google.com/evaluation/url"]`);
		if (elements.length > 0){
			for(j = 0; j<elements.length; j++){
				var win = window.open(elements[j].href, '_blank');

			}
		}
		get_and_set_sliders("25%");
		check = document.querySelectorAll('input[name^=isNoOtherDIsturbingOffensive]');
		for(j = 0; j<check.length; j++){
			if(check[j].value==="1"){
				var tmp = check[j];
				tmp.click();
			}
		}
	}

	if (CheckTextOnDocument(document,"In this task, you will be given links to landing pages and asked if each landing page corresponds to any of following categories of Lowest Quality content, as defined in")){
		console.log("uo harmful found");
		OpenAllLinks(wait_time_sec);
		set_all_radios(document, 'likely_yes', setPagePosition=false);
	}
	console.log("done");
}

if (mode === "Mobile" && type === "Side By Side"){
	/* RELATED QUESTION */
	testo = 'In this task, you will be given a user-issued query and a list of computer-generated "related questions". Each related question is accompanied by a computer-selected answer passage taken from the web. Your job is to:';
	if (CheckTextOnDocument(document, testo)){
		console.log("related question found");
		get_and_set_sliders("80%");
		set_all_radios(document, "no", false);

		blocks = document.getElementsByClassName('ewok-buds-question ewok-buds-result-question');
		for(let j = 0; j<blocks.length; j++) {
			var hidden = blocks[j].querySelector('input[type="hidden"]');
			if(hidden != null){
				hidden.value = "looks_good";
				set_all_checkboxes(blocks[j], "looks_good", false);
			}
		}

		set_all_radios(document, "1", false);
		console.log("done");
	}

	/* mobile sxs hm e ats tipo le news */
	testo = 'for instructions on how to rate these results from the perspective of a mobile user, using the Needs Met scale. Keep in mind that users are people from many different backgrounds (including people of all ages, genders, races, religions, political affiliations, etc.), whose experiences and needs may differ from your own';
	if (CheckTextOnDocument(document, testo)){
		console.log("mobile sxs found");
		open_links_set_sliders_set_radios(document, "70%", "AboutTheSameAs");
		console.log("done");
	}

	testo = 'This task will ask you to evaluate two search result blocks, arranged side by side. You will not be shown the standard Needs Met slider, Page Quality slider, or flags for either of the result blocks.';
	if (CheckTextOnDocument(document, testo)){
		console.log("mobile sxs one block found");
		set_all_radios(document, "AboutTheSameAs", false);
		console.log("done");
	}
}

/* HIGHLIGHTED DIFFERENCES */
if (mode === "Local" && type === "Side By Side"){
	testo = 'Tell us which side provides more useful additional information. Differences between the results are highlighted. Keep in mind that more information is not necessarily better.';
	if (CheckTextOnDocument(document, testo)){
		console.log("HIGHLIGHTED DIFFERENCES found");
		get_and_set_sliders("80%");
		set_all_radios(document, "0");
		set_all_radios(document, "AboutTheSameAs");
		console.log("done");
	}
}

/* LITTLE LOCAL */
if (mode === "Local" && type === "Experimental"){
	testo = 'In this task, you may see special blocks that are shown at the very top of the search results (e.g., above L1 and/or R1).  They do not contain the Needs Met or E-A-T sliders';
	if (CheckTextOnDocument(document, testo)){
		console.log("little local found");
		get_and_set_sliders("80%");
		set_all_radios(document, "AboutTheSameAs");
		console.log("done");
	}

	testo="In this task, you will be given a query and asked to decide what lodging intent the user has, if any";
	if (CheckTextOnDocument(document, testo)){
		console.log("lodging intent found");
		set_all_radios(document, "0");
		console.log("done.");
	}

	testo = 'In this task, you may see special blocks that are shown at the very top of the search results (e.g., above L1 and/or R1).  They do not contain the Needs Met or Page Quality sliders.  Please see the screenshot example below.';
	if (CheckTextOnDocument(document, testo)){
		console.log("local exp found");
		get_and_set_sliders("80%");
		console.log("done");
	}
}


/* OTHER UO */
testo = 'Results are shown beneath the query to help you research the topic. You may also click on the query to do further research.';
var j;
let check;
if (CheckTextOnDocument(document, testo)){
	console.log("other uo found");
	check = document.querySelectorAll('input[name*="Category_None"]');
	check[0].scrollIntoView();
	for(j = 0; j<check.length; j++){
		if(check[j].value==="1"){
			check[j].click();

		}
	}
	set_all_radios(document, "0");
	console.log("done");
}

/* YOUTUBE EXP RACY */
if (mode === "YouTube" && type === "Experimental"){
	if (CheckTextOnDocument(document, "In this task, you will be given titles and thumbnails of many videos. For each video, your job is to evaluate: How many users in your locale would find this video racy? When rating, please assume users have not previously watched or searched for similar videos.")){
		console.log("yt exp racy found");
		get_and_set_sliders("25%");
		console.log("done");
	}
}

/* search product sxs */
if (mode === "Search Product" && type === "Experimental"){
	instructionsDiv2 = document.getElementsByClassName("ewok-buds-card");
	var instructionsDivText2 = instructionsDiv2[3].innerText;
	if (instructionsDivText2 != null && instructionsDivText2.includes("In this task, you will be provided with a particular User Intent as additional context to the query.")){
		console.log("Search product found");

		const clarity = document.querySelectorAll('input[name="clear_need"]');

		for(j = 0; j<clarity.length; j++){
			if(clarity[j].value==="clear"){
				var tmp = clarity[j];
				tmp.click();
			}
		}

		const confirm_button = document.querySelectorAll('input[name="acknowledgement"]');

		for(j = 0; j<confirm_button.length; j++){
			if(confirm_button[j].value==="1"){
				var tmp = confirm_button[j];
				tmp.click();

			}
		}

		get_and_set_sliders("70%", "snippet");
		console.log("done");
	}
}

/* SNIPPET */
if (type === "Side By Side"){
	testo="The only difference between the content of the result blocks will be the snippet.";
	if (CheckTextOnDocument(document, testo)){
		console.log("Snippet SXS found");

		/* prendo tutti i blocchi e setta gli sldier */
		var allBlocks = document.getElementsByClassName("evl-slider2");

		for(var i=0; i<allBlocks.length; i++){
			allBlocks[i].scrollIntoView();
			/* setto snippet added value */
			value = "60%";
			setSliders(allBlocks[i],value, "snippet");
			/* setto snippet readability */
			value = "80%";
			setSliders(allBlocks[i+1],value, "snippet");
			i=i+1;
		}

		set_all_radios(document, "AboutTheSameAs");

		console.log("done");
	}
}

/* BIG DEF */
testo="Consider whether the query likely implies a direct request for information that can be satisfied by a Direct Answer Block.";
if (CheckTextOnDocument(document, testo)){
	console.log("big def found");

	var dupes1 = document.getElementsByClassName("ewok-buds-result-dupes")[0];

	var dupesText = dupes1.innerText;
	var skip=false;
	if(dupesText.includes("Same as")){
		skip=true;
	}
	value = "90%";
	get_and_set_sliders(value);

	const check = document.querySelectorAll('input[name*="landing_page.N"]');

	for(j = 0; j<check.length; j++){
		if(check[j].value==="1"){
			check[j].click();
		}
		if(skip){
			break;
		}
	}

	console.log("done");
}

/*SAFESEARCH 1M PORN */
if (mode === "SafeSearch" && type === "Result Review"){
	testo="For each task, you will be given a URL. Please click the URL and visit the landing page. Please rate the given URLs using the labels \"Porn\", \"Didn't Load\", \"Foreign Language\" or \"Not Porn\" as follows:";
	if (CheckTextOnDocument(document, testo)){
		console.log("safesearch");
		OpenAllLinks(wait_time_sec);
		set_all_radios(document, "Not Porn");
		console.log("done");
	}
}

/* AUDIO SXS E NON SXS DA 1M */
if ((mode === "Headphones" && type === "Side By Side") ||
	(mode === "Web" && type === "Experimental")){

	if (additionalText != null) {
		additionalText = additionalText.toLowerCase();

		if(additionalText === "headphones required"){

			var leftSide = document.getElementById("play0");
			var rightSide = document.getElementById("play1");

			if (leftSide != null && rightSide != null){
				console.log("audio sxs found");
				/* sxs */
				leftSide.scrollIntoView();
				leftSide.click();

				setTimeout(function(){rightSide.click()},wait_time_sec);
			}else{
				console.log("audio found");
				/* non sxs */
				var row = document.getElementById("ListenCondition-id");
				if (row != null){
					var radios = document.querySelectorAll('input[name=ListenCondition]');

					var task = "headphones";
					radiosClick(radios,task);

					var radios = document.querySelectorAll('input[name=SpeechQuality]');
					radiosClick(radios,task);

					var audio = document.getElementById("speech_sample");
					audio.play();
					audio.volume = 0.2;

					setTimeout(function(){audio.play()},30000+(Math.round(Math.random()*2000)));
				}
			}
			set_all_radios(document, "AboutTheSameAs");
			console.log("done");
		}
	}
}

/* NEWS AND BLOGS */
if (mode === "News and Blogs" && type === "Experimental"){
	testo="Review each snapshot and make a note of the Top 3 Prominent News Topics that are common between them.";
	if(CheckTextOnDocument(document, testo)){
		console.log("news and blogs found");
		OpenAllLinks(wait_time_sec);
		set_all_radios(document, "1", false);
		console.log("done.");
	}
}


/* PAGE QUALITY UO */
if (mode === "Web" && type === "Experimental"){
	if (disclaimerText != null && disclaimerText.includes("In this task, you may be exposed to queries, webpages, and/or topics that contain potentially upsetting-offensive (U-O) content")){

		if(editable67Text != null && editable67Text.includes("In this task, you will be given a link to a landing page and asked a few questions about it.")){
			console.log("page quality uo found");
			var radios = document.querySelectorAll('input[type=radio]');
			var task = "pquo";
			radiosClick(radios,task);

			var editable387 = document.getElementById("editable-387");
			var url = editable387.getElementsByTagName('a'), hrefs = [];
			for(j = 0; j<url.length; j++){
				var win = window.open(url[j].href, '_blank');

			}
			console.log("done.");
		}
	}
}


/* PAGE QUALITY YOUTUBE UO */
if (mode === "YouTube" && type === "Experimental"){
	if (disclaimerText != null && disclaimerText.includes("In this task, you may be exposed to queries, webpages, and/or topics that contain potentially upsetting-offensive (U-O) content")){
		if(pqInstructionText != null && pqInstructionText.includes("In this task, you will be asked to evaluate the Page Quality of landing pages for a given Video URL and Content Creator URL.")){
			console.log("yt pq uo found");
			OpenAllLinks(wait_time_sec);

			/* click sul radio button al punto 2 */
			var editable33 = document.getElementById("editable-33");
			var radios = editable33.querySelectorAll('input[type=radio]');
			var task = "ytpquo";
			radiosClick(radios,task);

			console.log("done.");
		}
	}
}

/* YOUTUBE SXS RACY o ADULT*/
if (mode === "YouTube" && type === "Side By Side"){
	if(CheckTextOnDocument(document, "In this task, you may be exposed to queries, webpages, and/or topics that contain potentially pornographic content.") ||
		CheckTextOnDocument(document, "In this task, you will be asked to provide Needs Met and Page Quality ratings for queries that were issued on www.youtube.com. Please be aware of the user intent difference when the query is issued on YouTube rather than a general search engine.")){

		console.log("yt sxs racy found");
		open_links_set_sliders_set_radios(document, "70%", "AboutTheSameAs");

		set_all_radios(document, "0");
		set_all_radios(document, "3");

		console.log("done.");
	}

}

/*YOUTUBE EXP ADULT*/
if (mode === "YouTube" && type === "Experimental"){
	testo = 'In this task, you will be given a list of videos. Your job is to identify porn or racy content';
	if (CheckTextOnDocument(document, testo)){
		console.log("youtube exp adult found");
		set_all_radios(document, "0");
		set_all_checkboxes(document, "confirm-watched-all-videos", false);
		console.log("done.");
	}
}

if (mode === "Local" && type === "Side By Side"){
	let value="";
	/* SXS LOCAL HOTEL */
	teso="This is a hotel search task. Please assume that the user issuing the query wants to travel and potentially book a hotel from a list of hotels.";
	if (CheckTextOnDocument(document, testo)){
		console.log("local sxs hotel found");
		value = "80%";
	}

	/* SXS LOCAL */
	testo="Please refer to the General Guidelines and Side-by-Side Rating Guidelines for instructions on how to rate these results from the perspective of a mobile user";
	if (CheckTextOnDocument(document, testo)){
		console.log("SXS LOCAL FOUND");
		value = "70%";
	}

	/* SXS LOCAL VIEWPORT*/
	testo="Understand the user's intent by considering the query in the context of the area of interest, which may be determined by the following:\n" +
		"Some location mentioned in the query text itself.";

	if (CheckTextOnDocument(document, testo)){
		console.log("SXS LOCAL VIEWPORT FOUND");
		value = "80%";
	}

	if(value !== ""){
		open_links_set_sliders_set_radios(document, value, "AboutTheSameAs", false);
		console.log("done");
	}

}

if (mode === "Mobile" && type === "Experimental") {
	/* PAGE QUALITY NORMALI */
	testo="In each task, you will be given a URL and some questions about the landing page. Please use the PQ grid to check Page Quality characteristics and assign an overall rating.";
	if(CheckTextOnDocument(document, testo)){
		console.log("common pq found");

		var pqMain = document.getElementsByClassName("pq-task-main-info");
		var pqMainText = pqMain[0].innerText;
		var strings = pqMainText.split(/[\s,]+/);
		var pageLink = strings[2];

		var win = window.open(pageLink, '_blank');

		/* click sul radio button al punto 3 */
		var pqShortcut = document.getElementsByClassName("pq-shortcut-question");
		var radios = pqShortcut[0].querySelectorAll('input[type=radio]');
		var task = "commonpq";
		radiosClick(radios,task);

		console.log("done.");

	}

	/* GRAMMAR */
	testo = 'For each query, your job is to evaluate the virtual assistant\'s Response Language Quality (i.e., the quality of language it uses to reply to the user) and its Speech Quality (i.e., the quality of the virtual assistant\'s verbalization of its response).';
	if (CheckTextOnDocument(document, testo)){
		console.log("grammar found");
		get_and_set_sliders('100%', 'grammar');
		set_all_radios(document, "1");
		console.log("done");
	}

	/* VA */
	testo = 'A Virtual Assistant is a service or mobile app that can understand queries from a user, and give visual results, audio responses, or take actions on the user\'s behalf';
	let testo1 = "The Direct Answer Block is intended to provide a direct answer to a user's need in a natural way. Here are some examples on how to use the Needs Met Rating Scale to provide ratings for these kinds of results.";
	let testo2 = "An Assistant on TV is a virtual voice assistant built in or paired with a TV that can understand voice queries from a user, and give visual results, audio responses, or take actions on the user's behalf.";
	let testo3 = "In this task, you will be given a query a driver might issue to the voice assistant in their car. In most cases, you will see a corresponding audio response from the car, indicating what action the car would take in response to the voice query. In some cases, you will also see a visual response, like a directions or navigation card.";
	let found = false;

	if (CheckTextOnDocument(document, testo)) {
		console.log("va found");
		found = true;
	}else if(CheckTextOnDocument(document, testo1)) {
		console.log("def found");
		found = true;
	}else if(CheckTextOnDocument(document, testo2)) {
		console.log("tv found");
		found = true;
	}else if(CheckTextOnDocument(document, testo3)) {
		console.log("va car found");
		found = true;
	}

	if (found === true){
		/* setto hm+ */
		value = "90%";
		get_and_set_sliders(value);
		FillTextArea(document, "comment");

		console.log("done");
	}

	/* NEEDS MET */
	testo="InstructionsPlease refer to the General Guidelines for instructions on how to rate these results from the perspective of a mobile user, using the Needs Met scale. Keep in mind that users are people from many different backgrounds (including people of all ages, genders, races, religions, political affiliations, etc.), whose experiences and needs may differ from your own.Reminder: Your ratings should be based on the instructions and examples given in the General Guidelines (refer to Section 0.2: Raters Must Represent People in their Rating Locale). Ratings should not be based on your personal opinions, preferences, religious beliefs, or political views. Always use your best judgment and represent the cultural standards of your rating locale.The links in this task should be opened on your mobile device by following the Send to Device Instructions. Note that you will not be able to access the landing page links on your computer/desktop.";
	testo2="InstructionsPlease refer to the General Guidelines for instructions on how to rate these results from the perspective of a mobile user, using the Needs Met scale. Keep in mind that users are people from many different backgrounds (including people of all ages, genders, races, religions, political affiliations, etc.), whose experiences and needs may differ from your own.Reminder: Your ratings should be based on the instructions and examples given in the General Guidelines (refer to Section 0.2: Raters Must Represent People in their Rating Locale). Ratings should not be based on your personal opinions, preferences, religious beliefs, or political views. Always use your best judgment and represent the cultural standards of your rating locale.The links in this task should be opened on your mobile device by following the Send to Device Instructions. Note that you will not be able to access the landing page links on your computer/desktop.Special InstructionsIn this task, you may see blocks that are not numbered (e.g., L1, L2, etc.) and cannot be rated on the Needs Met or Page Quality rating scales. For example:These blocks are referred to as \"contextual headings\" (usually appearing near the top of the results) because they typically contain headings or title information, and are meant to provide context for the other results below them on that side. While you will not be asked to rate contextual headings, please treat them as extra information to help you understand what the overall result set is about.";
	testo3="InstructionsIMPORTANT (PLEASE READ): The links in this task should be opened on your mobile device by following the Send to Device Instructions. Note that you will not be able to access the landing page links on your computer/desktop.Please refer to the General Guidelines for instructions on how to rate these results from the perspective of a mobile user, using the Needs Met scale.Special InstructionsIn this task, you may see blocks that are not numbered (e.g., L1, L2, etc.) and cannot be rated on the Needs Met or Page Quality rating scales. For example:These blocks are referred to as \"contextual headings\" (usually appearing near the top of the results) because they typically contain headings or title information, and are meant to provide context for the other results below them on that side. While you will not be asked to rate contextual headings, please treat them as extra information to help you understand what the overall result set is about.";
	testo4="InstructionsIMPORTANT (PLEASE READ): The links in this task should be opened on your mobile device by following the Send to Device Instructions. Note that you will not be able to access the landing page links on your computer/desktop.Please refer to the General Guidelines for instructions on how to rate these results from the perspective of a mobile user, using the Needs Met scale.";
	if(ExactText(document, testo) || ExactText(document, testo2) || ExactText(document, testo3) || ExactText(document, testo4)){
		if(FillTextArea(document, "comment")) {
			console.log("PSYCHO FOUND");
			value = "90%";
		}else{
			value = "70%";
			console.log("NEEDS MET FOUND");
		}
		open_links_set_sliders_set_radios(document, value);
		console.log("done");
	}
}
/***** FINE AUTOCOMPLETE *****/