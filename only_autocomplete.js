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


	var sliderBar = block.getElementsByClassName("evl-slider2-bar-selected");
	var sliderTriangle = block.getElementsByClassName("evl-slider2-thumb evl-slider2-thumb-value goog-slider-thumb");
	var hiddenField = block.getElementsByTagName("input");
	var SpeakerSimilarityField = block.getElementsByTagName("SpeakerSimilarity");


	for (k = 0; k<sliderBar.length; k++){
		await sleep(2000+(Math.round(Math.random()*3000)));
		sliderBar[k].style.width = value;
		sliderTriangle[k].style.left = value;

	}

	for (k = 0; k<hiddenField.length; k++){
		hiddenField[k].value = hiddenValue;
	}

	for (k = 0; k<SpeakerSimilarityField.length; k++){
		SpeakerSimilarityField[k].value = hiddenValue;
	}
}

/*get all evl-slider2 and set values */
function get_and_set_sliders(value,task,search_string){

	task = typeof task !== 'undefined' ? task : 'normal';
	var allBlocks = document.getElementsByClassName("evl-slider2");

	allBlocks[0].scrollIntoView();
	setTimeout(() => {
		window.scrollBy(0,-400)
	}, 200);
	let v = value;

	for(var i=0; i<allBlocks.length; i++){


		var allBigTicks = allBlocks[i].getElementsByClassName("evl-slider2-tick-big")
		let elem;
		for (elem of allBigTicks){
			var tmp = elem.getAttribute("data-tick");

			if(tmp == "Too informative"){
				v = "66.6667%";
			}
		}

		setSliders(allBlocks[i],v,task);
	}
}

function set_all_radios(block, value, setPagePosition=true){
	const radios = block.querySelectorAll('input[type="radio"]');

	for(let j = 0; j<radios.length; j++){
		if(setPagePosition) {
			radios[j].scrollIntoView();
		}

		if(radios[j].value===value){
			radios[j].click();
		}
	}
}

async function radiosClick(radios, task) {
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

	if (task === "ytsxsracy"){
		for(j = 0; j<radios.length; j++){
			if(radios[j].value === "0"){
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

	if (task === "completions"){
		for(j = 0; j<radios.length; j++){
			if(radios[j].value==="0"){
				tmp = radios[j];
				await sleep(2000+(Math.round(Math.random()*3000)));
				tmp.click();

			}
		}
	}

	if (task === "combined"){
		for(j = 0; j<radios.length; j++){
			if(radios[j].value==="1"){
				tmp = radios[j];
				await sleep(2000+(Math.round(Math.random()*3000)));
				tmp.click();

			}

			if(radios[j].value==="4"){
				tmp = radios[j];
				await sleep(2000+(Math.round(Math.random()*3000)));
				tmp.click();

			}
		}
	}

	if (task === "newsandblogs"){
		for(j = 0; j<radios.length; j++){
			if(radios[j].value==="1"){
				tmp = radios[j];
				await sleep(2000+(Math.round(Math.random()*3000)));
				tmp.click();

			}
		}
	}

	/* if (task === "headphones"){
		for(j = 0; j<radios.length; j++){
			if(radios[j].value==="headphonequiet"){
				tmp = radios[j];
				await sleep(2000+(Math.round(Math.random()*3000)));
				tmp.click();
			}
		}


		for(j = 0; j<radios.length; j++){
			if(radios[j].value==="Good"){
				tmp = radios[j];
				await sleep(2000+(Math.round(Math.random()*3000)));
				tmp.click();
			}
		}
	} */


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


/* open all links */
function OpenAllLinks(wait_time) {
	var buds_html = document.querySelectorAll('[class=ewok-buds-result-html][id^=ewok-buds-display-block]');

	const mySet1 = new Set();
	var opened_pages = [];

	for(var i=0; i< buds_html.length; i++){
		try{
			var a = buds_html[i].querySelector("a");
			var url = a.dataset.oldhref;
			if(typeof url !== "undefined"){
				var s = decodeURIComponent(url).split("q")[1].replace("=", "");
				mySet1.add(s);
			}

		} catch (error){
			console.log("open all links");
			console.log(error);
		}
	}

	const array = Array.from(mySet1);

	for(i=0; i<array.length; i++){
		let openWindow = window.open(array[i], '_blank');
		self.focus();
		opened_pages.push(openWindow);
	}

	setTimeout(()=>{
		for(let win of opened_pages){
			win.close();
		}
	}, wait_time);


}


function GetQuery(){
	let query = document.getElementsByClassName("ewok-buds-query ewok-task-query")[0].innerHTML;
	return String(query);
}

function ExactText(element, testo){
	let blocks = element.getElementsByClassName("ewok-buds-card");
	for(let block of blocks){
		let s = String(block.innerText).trim().replace((/  |\r\n|\n|\r/gm),"");
		if(s===testo){
			console.log("ci sono");
			return true;
		}
	}
	return false;
}

var header = document.getElementsByClassName("ewok-task-action-header")[0];
header = header != undefined ? header.innerText:null;
/* mode restituisce youtube, mobile, local ecc */
var mode = document.getElementsByClassName("ewok-task-action-header")[0].children[0];
if(mode != undefined) mode = mode.innerText;
/* tipe restituisce sxs o experimental */
var type = document.getElementsByClassName("ewok-task-action-header")[0].children[1].innerText;
var additional = document.getElementsByClassName("ewok-task-action-header")[0].children[2];
var additionalText = null;
if(additional != null){
	additionalText = additional.innerText;
}

var editable = document.getElementById("editable-2");
var disclaimer = document.getElementsByClassName("ewok-task-disclaimer")[0];
var editable6 = document.getElementById("editable-6");
var instructionsDiv = document.getElementsByClassName("ewok-buds-card")[0];
var editable3 = document.getElementById("editable-3");
var editable67 = document.getElementById("editable-67");
var editable49 = document.getElementById("editable-49");
var editable138 = document.getElementById("editable-138");
var pqInstruction = document.getElementById("pq-instructions");
var editable166 = document.getElementById("editable-166");
var instructionDescription = document.getElementsByClassName("instructions-description")[1];


var time = document.getElementsByClassName("ewok-estimated-task-weight")[0];
time = time.textContent;
var wait_time = time.split(" ")[2];
var wait_time_sec = ((parseInt(wait_time) * 60)/2)*1000;


var editableText = null;
var disclaimerText = null;
var editable6Text = null;
var editable3Text = null;
var editable49Text = null;
var instructionsDivText = null;
var editable67Text = null;
var pqInstructionText = null;
var editable166Text = null;
var isEditableNull = true;
var idText = null;

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
if (editable6 != null){
	editable6Text = editable6.innerText;
	isEditableNull = false;
}

if (editable67 != null){
	editable67Text = editable67.innerText;
	isEditableNull = false;
}


if (editable166 != null){
	editable166Text = editable166.innerText;
	isEditableNull = false;
}

if (editable138 != null){
	editable138Text = editable138.innerText;
	isEditableNull = false;
}

if (instructionsDiv != null){
	instructionsDivText = instructionsDiv.innerText;
}

if (editable49 != null){
	editable49Text = editable49.innerText;
	isEditableNull = false;
}

if (pqInstruction != null){
	pqInstructionText = pqInstruction.innerText;
}

if (instructionDescription != null){
	idText = instructionDescription.innerText;
}

var istructionsBodyText = null;
var istructionsBody = document.getElementById("instructions-body");
if (istructionsBody != null){
	istructionsBodyText = istructionsBody.innerText;
}

var editable17 = document.getElementById("editable-17");
var editable17Text = null;
if(editable17 != null){
	editable17Text = editable17.innerText;
}

let testo;
let value;
let blocks;

let winnerSide;
let otherSide;



/* QUERY-TOPIC RELEVANT */
if (mode === "Web" && type === "Experimental"){
	testo = 'In this task, you will be given a query and a topic. If the query intent is directly relevant to the topic, you will be asked three questions about the intent of the query with respect to the topic.';
	if (CheckTextOnDocument(document, testo)){
		console.log("query topic relevant");
		/* TODO CON IL QUERY SELECTOR ALL E FAI L'INCLUDE DI PARTE DEL NOME*/
		console.log("done");
	}
}

/* PSYCHO */
if (mode === "Mobile" && type === "Experimental"){
	testo = "InstructionsIMPORTANT (PLEASE READ): The links in this task should be opened on your mobile device by following the Send to Device Instructions. Note that you will not be able to access the landing page links on your computer/desktop.Please refer to the General Guidelines for instructions on how to rate these results from the perspective of a mobile user, using the Needs Met scale."
	if(ExactText(document, testo)){
		console.log("psycho");

		value = "90%";
		get_and_set_sliders(value);
		let query = GetQuery();

		var list_of_srtings =
			["User intent was to search information about " + query + ". The result is very helpful because provides helpful information about " + query+"",
				"user intent was to search information about " + query + ", the result provides correct information",
				"user wanted to search information about " + query + ", the result is a scrb that shows helpful information",
				"this result is very helpful for the query " +query+".",
				"the query is "+query+" this result is very helpful",
				"The result does not have nay problem with the query",
			];



		var item = list_of_srtings[Math.floor(Math.random()*list_of_srtings.length)];
		document.getElementsByName('comment')[0].value = item;


		console.log("done");
	}

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
		value = "80%";
		get_and_set_sliders(value);

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

		var querybox = document.querySelector('h2[role="textbox"]');
		var tmp = querybox.innerText.split(":")[1];
		var strings = tmp.trim().split(" ");
		strings.splice(strings.length - 2, 2);

		var query = strings.join(" ");

		testo = "The right side did not generate any results."
		if (CheckTextOnDocument(document, testo)) {
			winnerSide = "left side";
			otherSide = "right side";
			radios_value = "MuchBetterThan";
		}else{
			winnerSide = "right side";
			otherSide = "left side";
			radios_value = "MuchWorseThan";
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

		var list_of_srtings =
			[otherSide + " is empty while " + winnerSide + " provides a list of helpful results that are on topic so " + "is much better."
		];



		var item = list_of_srtings[Math.floor(Math.random()*list_of_srtings.length)];
		document.getElementById('ewok-buds-validation-comment').value = item;
		set_all_radios(document, radios_value, false);
		console.log("done");
	}
}




/* UO NOT AT ALL */
if (mode === "Web" && type === "Experimental") {
	testo = "In this task, you will be given links to landing pages, and asked to what extent each landing page is";
	if (CheckTextOnDocument(document, testo)) {
		console.log("UO NOT AT ALL FOUND");

		var div_urls = document.getElementsByClassName("wrap-long-url");
		for(let j = 0; j<div_urls.length; j++){
			let url = div_urls[j].getElementsByTagName('a')[0].innerHTML;
			var win = window.open(url, '_blank');
			j++;

		}

		value = '75%';

		get_and_set_sliders(value, "uo_not_at_all");
		console.log("done");
	}
}


/* SHORT DESCRIPTION */
if (mode === "Web" && type === "Experimental"){

	testo = 'In this task, you will be given an entity (e.g., a person, company, place, book, etc.) and a short description of the entity.';
	if (CheckTextOnDocument(document, testo)){
		console.log("short description found");

		radios_value = "best";
		set_all_radios(document, radios_value, true);

		console.log("done");
	}
}


/* RELATED QUESTION */
if (mode === "Mobile" && type === "Side By Side"){
	testo = 'In this task, you will be given a user-issued query and a list of computer-generated "related questions". Each related question is accompanied by a computer-selected answer passage taken from the web. Your job is to:';
	if (CheckTextOnDocument(document, testo)){
		console.log("related question found");

		value = '80%';

		get_and_set_sliders(value);

		radios_value = "no";
		set_all_radios(document, radios_value, false);

		blocks = document.getElementsByClassName('ewok-buds-question ewok-buds-result-question');

		for(let j = 0; j<blocks.length; j++) {
			var hidden = blocks[j].querySelector('input[type="hidden"]');
			if(hidden != null){
				hidden.value = "looks_good";

				var checks = blocks[j].querySelectorAll('input[type="checkbox"]');
				for (let k = 0; k < checks.length; k++) {
					if (String(checks[k].name).includes("looks_good")) {
						checks[k].checked = true;
						checks[k]
					}
				}
			}
		}
		radios_value = "1";
		set_all_radios(document, radios_value, false);


		console.log("done");
	}
}








/* GRAMMAR */
if (mode === "Mobile" && type === "Experimental"){
	testo = 'For each query, your job is to evaluate the virtual assistant\'s Response Language Quality (i.e., the quality of language it uses to reply to the user) and its Speech Quality (i.e., the quality of the virtual assistant\'s verbalization of its response).';
	if (CheckTextOnDocument(document, testo)){
		console.log("grammar found");

		var task = 'grammar';
		value = '100%';

		get_and_set_sliders(value, task);

		radios_value = "1";
		set_all_radios(document, radios_value);


		console.log("done");
	}
}

/* HIGHLIGHTED DIFFERENCES */
if (mode === "Local" && type === "Side By Side"){
	testo = 'Tell us which side provides more useful additional information. Differences between the results are highlighted. Keep in mind that more information is not necessarily better.';
	if (CheckTextOnDocument(document, testo)){
		console.log("HIGHLIGHTED DIFFERENCES found");
		value = "70%";
		get_and_set_sliders(value);

		radios_value = "0";
		set_all_radios(document, radios_value);

		radios_value = "AboutTheSameAs";
		set_all_radios(document, radios_value);

		console.log("done");
	}
}




/* LITTLE LOCAL */

if (mode === "Local" && type === "Experimental"){
	testo = 'In this task, you may see special blocks that are shown at the very top of the search results (e.g., above L1 and/or R1).  They do not contain the Needs Met or E-A-T sliders';
	if (CheckTextOnDocument(document, testo)){
		console.log("little local found");
		value = "80%";
		get_and_set_sliders(value);

		radios_value = "AboutTheSameAs";
		set_all_radios(document, radios_value);

		console.log("done");
	}
}


/* OTHER UO */
testo = 'Results are shown beneath the query to help you research the topic. You may also click on the query to do further research.';
let j;
if (CheckTextOnDocument(document, testo)){
	console.log("other uo found");
	var check = document.querySelectorAll('input[name*="Category_None"]');

	for(j = 0; j<check.length; j++){
		check[j].scrollIntoView();

		if(check[j].value==="1"){
			check[j].click();

		}
	}

	radios_value = "0";
	set_all_radios(document, radios_value);

	console.log("done");
}

/* LODGING INTENT */
if (mode === "Local" && type === "Experimental"){
	if (editable138Text != null && editable138Text.includes("In this task, you will be given a query and asked to decide what lodging intent the user has, if any")){
		console.log("lodging intent found");

		/*
		NON FUNZIONA IL CLOSE AL TIMEOUT, SISTEMARE
		var query = document.getElementById("editable-92");
		var win = null;
		var url = query.getElementsByTagName('a'), hrefs = [];
			for(var j=0; j<url.length; j++){
				win = window.open(url[j].href, '_blank');
				var tmot = setTimeout(function(){win.close();}, 5000);
			}
		*/
		radios_value = "0";
		set_all_radios(document, radios_value);

		console.log("done.");

	}

}


/* mobile sxs hm e ats tipo le news */
if (mode === "Mobile" && type === "Side By Side"){
	testo = 'for instructions on how to rate these results from the perspective of a mobile user, using the Needs Met scale. Keep in mind that users are people from many different backgrounds (including people of all ages, genders, races, religions, political affiliations, etc.), whose experiences and needs may differ from your own';
	if (CheckTextOnDocument(document, testo)){
		console.log("mobile sxs found");
		OpenAllLinks(wait_time_sec);
		value = "70%";
		get_and_set_sliders(value);

		radios_value = "AboutTheSameAs";
		set_all_radios(document, radios_value, false);

		console.log("done");
	}


}



/* YOUTUBE EXP RACY */
if (mode === "YouTube" && type === "Experimental"){
	if (editable17Text != null && editable17Text.includes("How many users in your locale would find this video racy?")){
		console.log("yt exp racy found");
		value = "25%";
		get_and_set_sliders(value);

		console.log("done.");

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

		value = "70%";
		get_and_set_sliders(value, "snippet");


		console.log("done.");
	}
}

/* SNIPPET */

if (type === "Side By Side"){
	if (editable49Text != null){
		if(editable49Text.includes("The only difference between the content of the result blocks will be the snippet.")){
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

			radios_value = "AboutTheSameAs";
			set_all_radios(document, radios_value);

			console.log("done");
		}
	}
}


/* BIG DEF */
if (istructionsBodyText != null){
	if(istructionsBodyText.includes("Consider whether the query likely implies a direct request for information that can be satisfied by a Direct Answer Block.")){
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

		/*
		sistemare, anche se apre la pagina segnala come non aperta
		var url = document.querySelectorAll('a[id*="result.0.landing_page_url"]');
		for(var j=0; j<url.length; j++){
			url[j].click();

		}
		*/

		console.log("done");
	}
}

/*SAFESEARCH 1M PORN */
if (mode === "SafeSearch" && type === "Result Review"){
	if (idText != null && idText.includes("For each task, you will be given a URL. Please click the URL and visit the landing page. Please rate the given URLs using the labels \"Porn\", \"Didn't Load\", \"Foreign Language\" or \"Not Porn\" as follows:")){

		console.log("safesearch");

		var editable4 = document.getElementById("editable-4");
		var editable4Text = null;

		if (editable4 != null){
			editable4Text = editable4.innerText;

			var url = editable4.getElementsByTagName('a'), hrefs = [];
			for(j = 0; j<url.length; j++){
				var win = window.open(url[j].href, '_blank');

			}


			var radios = document.querySelectorAll('input[name=SafeSearch3]');

			for(j = 0; j<radios.length; j++){
				if(radios[j].value==="Not Porn"){
					var tmp = radios[j];
					setTimeout(function(){tmp.click()},5000+(Math.round(Math.random()*3000)));

				}
			}

			setTimeout(function(){win.close()}, 5000);


		}
		console.log("done");

	}
}



/* UO */
/* PROVARE UO 6 MINUTI VIDEO*/
if (mode === "Web" && type === "Experimental"){

	if (editable3Text != null) {
		/* PROVARE UO 6 MINUTI VIDEO NOT AT ALL*/
		if( editable3Text.includes("In this task, you will be given the link to an article and a list of categories that may describe the content of the article. Your job is to evaluate whether the article’s content relates to any of the categories shown and if so, to rate the corresponding intensity level of issues related to that category as conveyed in the article.")
			|| editable3Text.includes("In this task, you will be shown one or more videos and a list of categories that may describe the nature of the video.")){

			console.log("uo not at all found");

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

			value = "25%";
			get_and_set_sliders(value);


			var check = document.querySelectorAll('input[name^=isNoOtherDIsturbingOffensive]');

			for(j = 0; j<check.length; j++){
				if(check[j].value==="1"){
					var tmp = check[j];
					tmp.click();

				}
			}

			console.log("done");
		}

		if(editable3Text.includes("In this task, you will be given links to landing pages and asked if each landing page corresponds to any of following categories of Lowest Quality content, as defined in")){
			console.log("uo harmful found");
			if (editable6 != null){

				var links = document.querySelectorAll('[id$="editable-50"]');

				for(var i = 0; i<links.length; i++){
					var url = links[i].getElementsByTagName('a'), hrefs = [];
					for(j = 0; j<url.length; j++){
						var win = window.open(url[j].href, '_blank');

					}
				}

				radios_value = "likely_yes";
				set_all_radios(document, radios_value, setPagePosition=false);

			}

			console.log("done");

		}

	}
}




/* AUDIO SXS E NON SXS DA 1M */
if ((mode === "Headphones" && type === "Side By Side") ||
	(mode === "Web" && type === "Experimental")){

	if (additionalText != null && additionalText === "Headphones Required"){

		var leftSide = document.getElementById("play0");
		var rightSide = document.getElementById("play1");


		if (leftSide != null && rightSide != null){
			console.log("audio sxs found");

			/* sxs */
			leftSide.scrollIntoView();

			leftSide.click();

			setTimeout(function(){rightSide.click()},wait_time_sec);


			var side = document.getElementById("AboutTheSameAs");
			setTimeout(function(){side.click()},2000+(Math.round(Math.random()*2000)));
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

		console.log("done");
	}
	if (additionalText != null && additionalText === "Headphones or Speakers Required"){
		console.log("headphones similar");


		var clips = null;
		clips = document.querySelectorAll('audio[id*=task_clip_speech]');


		if (clips != null){
			for(var i = 0; i<clips.length; i++){
				clips[i].scrollIntoView();

				clip = clips[i];
				clip.play();
				clip.volume = 0.1;
				setTimeout(function(){clip.play()},30000+(Math.round(Math.random()*2000)));
			}



			var radiobutton = document.querySelectorAll('input[type=radio]');

			for(j = 0; j<radiobutton.length; j++){
				if(radiobutton[j].value==="Good"){
					radiobutton[j].click();
				}
			}

		}else{
			/* provare questo audio */
			var radios = document.querySelectorAll('input[name=ListenCondition]');
			var task = "headphones";
			radiosClick(radios,task);

			var audio_a = document.getElementById("speech_sample_a");
			var audio_b = document.getElementById("speech_sample_b");
			audio_a.play();
			audio_a.volume = 0.1;

			audio_b.play();
			audio_b.volume = 0.1;

			setTimeout(function(){audio_a.play()},30000+(Math.round(Math.random()*2000)));
			setTimeout(function(){audio_b.play()},30000+(Math.round(Math.random()*2000)));
		}


		value = "90%";
		get_and_set_sliders(value);

	}


}




/* NEWS AND BLOGS */
/* PROVATO E FUNZIONA */

if (mode === "News and Blogs" && type === "Experimental"){

	if(editable6Text != null && editable6Text.includes("Review each snapshot and make a note of the Top 3 Prominent News Topics that are common between them.")){

		console.log("news and blogs found");

		var columns = document.getElementsByClassName("ewok-editor-editable-column");

		/* gli screenshot stanno in posizione 3 4 e 5 */
		/* altrimenti prende anche altre colonne che non interessano ma con lo stesso nome della calsse */


		var url1 = columns[3].getElementsByTagName('a');
		var url2 = columns[4].getElementsByTagName('a');
		var url3 = columns[5].getElementsByTagName('a');

		for(var i=0; i<url1.length; i++){
			var win = window.open(url1[i].href, '_blank');
		}

		for(var i=0; i<url2.length; i++){
			var win = window.open(url2[i].href, '_blank');
		}

		for(var i=0; i<url3.length; i++){
			var win = window.open(url3[i].href, '_blank');
		}


		var radios = document.querySelectorAll('input[type=radio]');
		var task = "newsandblogs";
		radiosClick(radios,task);



		console.log("done.");
	}
}

/* COMBINED */

if (mode === "Web" && type === "Experimental"){
	if(editable67Text != null){
		if(editable67Text.includes("Your job is to determine if the First Query and Second Query are related, if they can be combined and how well a given Combined Query represents the user's intent for the Second Query.")){
			console.log("combined found");

			var tableBlocks = document.getElementsByClassName("item_table ewok-editor-editable-columngroup");

			for(j = 0; j<tableBlocks.length; j++){

				var radios = tableBlocks[j].querySelectorAll('input[type=radio]');
				var task = "combined";
				radiosClick(radios,task);
			}

			console.log("done.");
		}

		if(editable67Text.includes("In some questions you will be asked about the intended audience of the content")){
			console.log("pq 4m uofound");

			var editable597 = document.getElementById("editable-597");

			if (editable597 != null){
				var url = editable597.getElementsByTagName('a'), hrefs = [];
				for(j = 0; j<url.length; j++){
					var win = window.open(url[j].href, '_blank');

				}
			}


			var radios = document.querySelectorAll('input[type=checkbox]');
			for(j = 0; j<radios.length; j++){
				if(radios[j].name==="politics" || radios[j].name==="medical" ){
					var tmp = radios[j];
					tmp.click();

				}
			}

			var radios = document.querySelectorAll('input[type=radio]');

			for(j = 0; j<radios.length; j++){
				if(radios[j].value==="likely_yes" || radios[j].value==="persuade"){
					var tmp = radios[j];
					tmp.click();
				}
			}

			value = "75%";
			get_and_set_sliders(value);

		}
	}
}


/* PAGE QUALITY UO */
/* PROVATA E FUNZIONA */

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

/* COMPLETIONS */
/* PROVATA E FUNZIONA */
if (mode === "Web" && type === "Experimental"){
	if (editable166Text != null && editable166Text.includes("In this task, you will be asked to evaluate two sets of possible completions to a partial query. Importantly, the query will contain a ^ symbol to indicate the position of the cursor within the partial query.")){
		console.log("completions found");

		/* prendo tutti i radio e clicco su appropriate for all */

		var radios = document.querySelectorAll('input[type=radio]');
		var task = "completions";
		radiosClick(radios, task);

		console.log("done.");

	}

}


/* PAGE QUALITY NORMALI */

if (mode === "Mobile" && type === "Experimental"){
	/* solo il testo delle pq potrebbe confondersi con altri tipi di pq controllare meglio */
	if(pqInstructionText != null && pqInstructionText.includes("In each task, you will be given a URL and some questions about the landing page. Please use the PQ grid to check Page Quality characteristics and assign an overall rating.")){
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

}


/* PAGE QUALITY YOUTUBE UO */

if (mode === "YouTube" && type === "Experimental"){
	if (disclaimerText != null && disclaimerText.includes("In this task, you may be exposed to queries, webpages, and/or topics that contain potentially upsetting-offensive (U-O) content")){
		if(pqInstructionText != null && pqInstructionText.includes("In this task, you will be asked to evaluate the Page Quality of landing pages for a given Video URL and Content Creator URL.")){
			console.log("yt pq uo found");

			var editable11 = document.getElementById("editable-11");
			var editable11Text = editable11.innerText;
			var strings = editable11Text.split(/[\s,]+/);
			var videoLink = strings[2];
			var contentCreatorLink = strings[6];

			/* apro solo il link del video */
			var win = window.open(videoLink, '_blank');

			/* click sul radio button al punto 2 */
			var editable33 = document.getElementById("editable-33");
			var radios = editable33.querySelectorAll('input[type=radio]');
			var task = "ytpquo";
			radiosClick(radios,task);

			console.log("done.");

		}

	}
}



/* ENTITY SUBTOPIC */
if (mode === "Web" && type === "Experimental"){
	if(editable67Text != null && editable67Text.includes("In this task, you will be given a query and an entity-subtopic pair associated with the query.")){
		console.log("entity subtopic found");
		/* prendo tutti i rado button */
		var radios = document.querySelectorAll('input[type=radio]');
		var task = "entitysubtopic";
		radiosClick(radios,task);

		console.log("done");
	}

}


/* VA DA 1M */
if (mode === "Mobile" && type === "Experimental"){
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

		console.log("done");
	}
}

/* YOUTUBE SXS RACY o ADULT*/
/* DA PROVARE */
if (mode === "YouTube" && type === "Side By Side"){
	if (disclaimerText != null && disclaimerText.includes("In this task, you may be exposed to queries, webpages, and/or topics that contain potentially pornographic content.")){
		if (editableText != null && editableText.includes("In this task, you will be asked to provide Needs Met and Page Quality ratings for queries that were issued on www.youtube.com. Please be aware of the user intent difference when the query is issued on YouTube rather than a general search engine.")){

			console.log("yt sxs racy found");

			/* click su "Does this query seek Porn or Racy content?" */
			var pornButton = document.querySelectorAll('input[name=SexualSeeking]');
			for(var i = 0; i< pornButton.length; i++){
				if(pornButton[i].value === "0"){
					pornButton[i].click();
				}

			}

			/* prendo tutti i blocchi */
			var allBlocks = document.getElementsByClassName("ewok-buds-card ewok-buds-result");

			/*potrebbe non segnare i blocchi dupe in caso levare il commento e fare un altro for
			var allBlocksWithDupes = document.getElementsByClassName("ewok-buds-card ewok-buds-result ewok-buds-result-has-dupes ewok-buds-result-highlight");
			*/

			/* setto mm */
			value = "60%";

			for(var i=0; i<allBlocks.length; i++){
				setSliders(allBlocks[i],value);

				/* clicco su sexuallySafe */
				var sexuallySafe = allBlocks[i].querySelectorAll('input[type=radio]');
				var task = "ytsxsracy";
				radiosClick(sexuallySafe,task);
			}
			/* setto ats */
			radios_value = "AboutTheSameAs";
			set_all_radios(document, radios_value);
			console.log("done.");
		}

	}

}



/*YOUTUBE EXP ADULT*/

if (mode === "YouTube" && type === "Experimental"){
	testo = 'In this task, you will be given a list of videos. Your job is to identify porn or racy content';
	if (CheckTextOnDocument(document, testo)){
		console.log("youtube exp adult found");

		/* set sexually safe */
		set_all_radios(document, "0");

		/* confermo tutti i video aperti */
		var check = document.querySelectorAll('input[name=confirm-watched-all-videos]');
		for(j = 0; j<check.length; j++){
			if(check[j].value==="1"){
				var tmp = check[j];
				setTimeout(function(){tmp.click()},2000+(Math.round(Math.random()*3000)));

			}
		}
		console.log("done.");
	}
}


/*EXP SCRB ACCURACY*/
if (mode === "Web" && type === "Experimental"){
	testo = "You will be given a query and a Special Content Result Block (SCRB)";
	if (CheckTextOnDocument(document, testo)){
		console.log("exp scrb accuracy found");

		/* prendo tutti i bottoni radio */
		var radios = document.querySelectorAll('input[type=radio]');
		var task = "expscrbaccuracy";
		radiosClick(radios, task);

		/* prendo la checkbox finale */
		var lastCheckBox = document.querySelector('input[name=no_lp_issues]');
		lastCheckBox.scrollIntoView();
		setTimeout(function(){lastCheckBox.click()},2000+(Math.round(Math.random()*3000)));


		console.log("done.");
	}
}

/* SXS LOCAL HOTEL */
/* PROVATA E FUNZIONA */

if (mode === "Local" && type === "Side By Side"){
	if (instructionsDivText != null && instructionsDivText.includes("This is a hotel search task. Please assume that the user issuing the query wants to travel and potentially book a hotel from a list of hotels.")){
		console.log("local sxs hotel found");

		value = "80%";
		get_and_set_sliders(value);


		radios_value = "AboutTheSameAs";
		set_all_radios(document, radios_value);

		console.log("done.");
	}
}

/* NEEDS MET */
if (mode === "Mobile" && type === "Experimental") {
	testo="InstructionsPlease refer to the General Guidelines for instructions on how to rate these results from the perspective of a mobile user, using the Needs Met scale. Keep in mind that users are people from many different backgrounds (including people of all ages, genders, races, religions, political affiliations, etc.), whose experiences and needs may differ from your own.Reminder: Your ratings should be based on the instructions and examples given in the General Guidelines (refer to Section 0.2: Raters Must Represent People in their Rating Locale). Ratings should not be based on your personal opinions, preferences, religious beliefs, or political views. Always use your best judgment and represent the cultural standards of your rating locale.The links in this task should be opened on your mobile device by following the Send to Device Instructions. Note that you will not be able to access the landing page links on your computer/desktop.";
	if(ExactText(document, testo)){
		console.log("NEEDS MET FOUND");
		OpenAllLinks(wait_time_sec);

		value = "80%";
		/*get_and_set_sliders(value);*/

		console.log("done");
	}

}
/***** FINE AUTOCOMPLETE *****/

