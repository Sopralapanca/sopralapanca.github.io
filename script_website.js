


typeof $ == "function" && (otherlib = !0);
function getScript(url) {
	var script = document.createElement("script");
	script.src = url;
	var head = document.getElementsByTagName("head")[0],
		done = !1;

	script.onload = script.onreadystatechange = function() {
		!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") && (done = !0, script.onload = script.onreadystatechange = null, head.removeChild(script))
	}, head.appendChild(script)
}

getScript("//code.jquery.com/jquery.min.js");



/***** INIZIO AUTOCOMPLETE ******/

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function setAts(){
	/* setto ats */
	var side = document.querySelectorAll('input[name=score]');
	for(var j = 0; j<side.length; j++){
		if(side[j].value==="AboutTheSameAs"){
			side[j].checked=true;
		}

	}
}

function setPagePosition(block){
	/* setta la posizione della pagina alla posizione del risultato */
	var rect = block.getBoundingClientRect();

	document.documentElement.scrollTop = document.body.scrollTop = rect.top;
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

	if(value === "70%"){
		hiddenValue = "3.5";
	}

	if(value === "75%"){
		hiddenValue = "3";
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
		hiddenValue = "5";
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
function get_and_set_sliders(value,task){

	task = typeof task !== 'undefined' ? task : 'normal';
	var allBlocks = document.getElementsByClassName("evl-slider2");

	for(var i=0; i<allBlocks.length; i++){
		setPagePosition(allBlocks[i]);
		setSliders(allBlocks[i],value,task);
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

	if (task === "headphones"){
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
	}


}

function CheckTextOnDocument(block, testo){
	if ((block.documentElement.textContent || block.documentElement.innerText).indexOf(testo) > -1) {
		console.log("true");
		return true;
	}else{
		return false;
	}
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
let instructionsDiv = document.getElementsByClassName("ewok-buds-card")[0];
var editable3 = document.getElementById("editable-3");
var editable67 = document.getElementById("editable-67");
var editable49 = document.getElementById("editable-49");
var editable138 = document.getElementById("editable-138");
var pqInstruction = document.getElementById("pq-instructions");
var editable166 = document.getElementById("editable-166");
var instructionDescription = document.getElementsByClassName("instructions-description")[1];


var time = document.getElementsByClassName("ewok-estimated-task-weight")[0];
time = time.textContent;

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
var istructionsBody = null;
var istructionsBody = document.getElementById("instructions-body");
if (istructionsBody != null){
	istructionsBodyText = istructionsBody.innerText;
}

var editable17 = document.getElementById("editable-17");
var editable17Text = null;
if(editable17 != null){
	editable17Text = editable17.innerText;
}

/* open all links */
var buds_html = document.querySelectorAll('[class=ewok-buds-result-html][id^=ewok-buds-display-block]');
const mySet1 = new Set();

for(var i=0; i< buds_html.length; i++){
	try{
		var a = buds_html[i].querySelector("a");
		var url = a.dataset.oldhref;
		if(typeof url !== "undefined"){
			mySet1.add(url);
		}

	} catch (error){
		console.log("open all links");
		console.log(error);
	}
}

const array = Array.from(mySet1);

for(var i=0; i< array.length; i++){
	var win = window.open(array[i], '_blank');
}

/* LITTLE LOCAL */

if (mode === "Local" && type === "Experimental"){
	var testo = 'In this task, you may see special blocks that are shown at the very top of the search results (e.g., above L1 and/or R1).  They do not contain the Needs Met or E-A-T sliders';
	if (CheckTextOnDocument(document, testo)){
		console.log("little locale found");
		var value = "80%";
		get_and_set_sliders(value);
		setAts();
		console.log("done");
	}

}


/* OTHER UO */
var testo = 'Results are shown beneath the query to help you research the topic. You may also click on the query to do further research.';
if (CheckTextOnDocument(document, testo)){
	console.log("other uo found");
	var check = document.querySelectorAll('input[name*="Category_None"]');

	for(var j = 0; j<check.length; j++){
		setPagePosition(check[j]);
		if(check[j].value==="1"){
			check[j].click();

		}
	}

	var radios = document.querySelectorAll('input[type="radio"]');

	for(var j = 0; j<radios.length; j++){
		setPagePosition(radios[j]);
		if(radios[j].value==="0"){
			radios[j].click();

		}
	}
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
		var radios = document.querySelectorAll('input[type="radio"]');

		for(var j = 0; j<radios.length; j++){
			if(radios[j].value==="0"){
				var tmp = radios[j];
				tmp.click();

			}
		}

		console.log("done.");

	}

}


/* mobile sxs hm e ats tipo le news */
if (mode === "Mobile" && type === "Side By Side"){
	console.log("mobile sxs found");

	var value = "80%";
	get_and_set_sliders(value);
	setAts();
	console.log("done");
}



/* YOUTUBE EXP RACY */
if (mode === "YouTube" && type === "Experimental"){
	if (editable17Text != null && editable17Text.includes("How many users in your locale would find this video racy?")){
		console.log("yt exp racy found");
		var value="25%";
		get_and_set_sliders(value);

		console.log("done.");

	}

}


/* search product sxs */
if (mode === "Search Product" && type === "Experimental"){
	instructionsDiv = document.getElementsByClassName("ewok-buds-card");
	var instructionsDivText = instructionsDiv[3].innerText;
	if (instructionsDivText != null && instructionsDivText.includes("In this task, you will be provided with a particular User Intent as additional context to the query.")){
		console.log("Search product found");

		const clarity = document.querySelectorAll('input[name="clear_need"]');

		for(var j = 0; j<clarity.length; j++){
			if(clarity[j].value==="clear"){
				var tmp = clarity[j];
				tmp.click();

			}
		}

		const confirm_button = document.querySelectorAll('input[name="acknowledgement"]');

		for(var j = 0; j<confirm_button.length; j++){
			if(confirm_button[j].value==="1"){
				var tmp = confirm_button[j];
				tmp.click();

			}
		}

		var value="70%";
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
				setPagePosition(allBlocks[i]);
				/* setto snippet added value */
				var value = "60%";
				setSliders(allBlocks[i],value, "snippet");
				/* setto snippet readability */
				value = "80%";
				setSliders(allBlocks[i+1],value, "snippet");
				i=i+1;
			}
			setAts();
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
		var value="90%";
		get_and_set_sliders(value);

		const check = document.querySelectorAll('input[name*="landing_page.N"]');

		for(var j = 0; j<check.length; j++){
			setPagePosition(check[j]);
			if(check[j].value==="1"){
				check[j].click();

			}
			if(skip){
				console.log("ci sono");
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
			for(var j=0; j<url.length; j++){
				var win = window.open(url[j].href, '_blank');

			}


			var radios = document.querySelectorAll('input[name=SafeSearch3]');

			for(var j = 0; j<radios.length; j++){
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
				for(var j=0; j<url.length; j++){
					var win = window.open(url[j].href, '_blank');
					/* non funziona il close
					setTimeout(function() { win.close();}, 10); */

				}
			}

			/* uo video da 6 minuti */
			const elements = document.querySelectorAll(`[href^="https://www.google.com/evaluation/url"]`);
			if (elements.length > 0){
				for(var j=0; j<elements.length; j++){
					var win = window.open(elements[j].href, '_blank');

				}
			}

			var value="25%";
			get_and_set_sliders(value);


			var check = document.querySelectorAll('input[name^=isNoOtherDIsturbingOffensive]');

			for(var j = 0; j<check.length; j++){
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
					for(var j=0; j<url.length; j++){
						setPagePosition(url[j]);
						var win = window.open(url[j].href, '_blank');

					}
				}


				var radiobutton = document.querySelectorAll('input[type=radio]');

				for(var j = 0; j<radiobutton.length; j++){
					if(radiobutton[j].value==="likely_yes"){
						radiobutton[j].click();


					}
				}
			}

			console.log("done");

		}

	}
}





/* PQ DA 4 */
/* PROVATA E FUNZIONA */
if (time === "4 minutes"){
	if (mode === "Mobile" && type === "Experimental"){

		if (editable3Text != null && editable3Text.includes("Please visit each landing page in this task and assign a Page Quality rating for each landing page. Page Quality ratings should be determined based on instructions in the")){

			console.log("pq da 4 found");

			var blocks = document.getElementsByClassName("ewok-send-to-device");

			for(var i=0; i<blocks.length;i++){

				var win = window.open(blocks[i].innerText, '_blank');
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
			setPagePosition(leftSide);
			leftSide.click();

			var time = document.getElementsByClassName("ewok-estimated-task-weight")[0];
			time = time.textContent;


			var wait_time = time.split(" ")[2];
			var sec = ((parseInt(wait_time) * 60)/2)*1000;
			console.log(wait_time);
			console.log(sec);
			setTimeout(function(){rightSide.click()},sec);


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
				setPagePosition(clips[i]);
				clip = clips[i];
				clip.play();
				clip.volume = 0.1;
				setTimeout(function(){clip.play()},30000+(Math.round(Math.random()*2000)));
			}



			var radiobutton = document.querySelectorAll('input[type=radio]');

			for(var j = 0; j<radiobutton.length; j++){
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


		var value="90%";
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

			for(var j=0; j<tableBlocks.length; j++){

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
				for(var j=0; j<url.length; j++){
					var win = window.open(url[j].href, '_blank');

				}
			}


			var radios = document.querySelectorAll('input[type=checkbox]');
			for(var j = 0; j<radios.length; j++){
				if(radios[j].name==="politics" || radios[j].name==="medical" ){
					var tmp = radios[j];
					tmp.click();

				}
			}

			var radios = document.querySelectorAll('input[type=radio]');

			for(var j = 0; j<radios.length; j++){
				if(radios[j].value==="likely_yes" || radios[j].value==="persuade"){
					var tmp = radios[j];
					tmp.click();
				}
			}

			var value="75%";
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
			for(var j=0; j<url.length; j++){
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
/* PROVATA E FUNZIONA */

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
if (time === "1 minute" || time === "1.5 minutes"){
	var instruction = document.getElementById("general-instructions");

	if (instruction == null){
		instruction = document.getElementById("wa-instructions");
	}

	if (instruction != null){

		var tmp = instruction.innerText;

		if (tmp != null) {

			var found = null;

			if (tmp.includes("eyes-free voice assistant")) {
				console.log("va found");
				found = true;
			}

			if (tmp.includes("A Virtual Assistant is a service or mobile app that can understand queries from a user, and give visual results, audio responses, or take actions on the user's behalf")){
				console.log("va found");
				found = true;
			}

			if(tmp.includes("The Direct Answer Block is intended to provide a direct answer to a user's need in a natural way. Here are some examples on how to use the Needs Met Rating Scale to provide ratings for these kinds of results.")){
				console.log("def found");
				found = true;
			}


			if(tmp.includes("An Assistant on TV is a virtual voice assistant built in or paired with a TV that can understand voice queries from a user, and give visual results, audio responses, or take actions on the user's behalf.")){
				console.log("tv found");
				found = true;
			}

			if(tmp.includes("In this task, you will be given a query a driver might issue to the voice assistant in their car. In most cases, you will see a corresponding audio response from the car, indicating what action the car would take in response to the voice query. In some cases, you will also see a visual response, like a directions or navigation card.")){
				console.log("va car found");
				found = true;
			}

			if (found === true){
				var blocks = document.getElementsByClassName("ewok-buds-card ewok-buds-result");
				setPagePosition(blocks[0]);

				for(var i=0; i<blocks.length;i++){
					if(!(blocks[i].innerText.includes("did not generate any results."))){

						/* aggiungi regola css che mette i blocchi uno sotto l'altro */

						var audio = document.querySelector("#ewok-buds-display-block-left-0 audio");


						if (audio != null){
							audio.play();
							audio.volume = 0.4;
						}

						var mediaBlocks = blocks[i].getElementsByClassName("opa-preview-metadata-row opa-debug");

						/* setto hm */
						var value = "80%";

						if (mediaBlocks != null && mediaBlocks.length > 1){
							var url = mediaBlocks[1].getElementsByTagName('a');

							for(var j=0; j<url.length; j++){
								var win = window.open(url[j].href, '_blank');
							}

							/* setto fully */
							value = "100%";
						}

						setSliders(blocks[i],value);
					}
				}
				console.log("done");
			}


		}
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
			var value = "60%";

			for(var i=0; i<allBlocks.length; i++){
				setSliders(allBlocks[i],value);

				/* clicco su sexuallySafe */
				var sexuallySafe = allBlocks[i].querySelectorAll('input[type=radio]');
				var task = "ytsxsracy";
				radiosClick(sexuallySafe,task);
			}
			/* setto ats */
			setAts();
			console.log("done.");
		}

	}

}



/*YOUTUBE EXP ADULT*/
/* manca apri ogni video in una pagina separata  da finire*/
/* forse si confondono con le yt racy */

if (mode === "YouTube" && type === "Experimental"){

	if (editableText != null && editableText.includes("In this task, you will be given a list of videos. Your job is to identify porn or racy content")){
		console.log("youtube exp adult found");

		/* prendo tutti i blocchi */
		var allBlocks = document.getElementsByClassName("ewok-buds-card ewok-buds-result");

		for(var i=0; i<allBlocks.length; i++){

			/*apro il video in un altra pagina
			worka ma non mantiene il focus sulla pagina corrente */
			var videoLinks = allBlocks[i].getElementsByTagName('a'), hrefs = [];
			for(var j=0; j<videoLinks.length; j++){
				var win = window.open(videoLinks[j].href, '_blank');

			}

			/* clicco su sexuallySafe */
			var sexuallySafe = allBlocks[i].querySelectorAll('input[type=radio]');
			var task = "ytexpadult";

			radiosClick(sexuallySafe, task);

		}

		/* confermo tutti i video aperti */
		var check = document.querySelectorAll('input[name=confirm-watched-all-videos]');
		for(var j = 0; j<check.length; j++){
			if(check[j].value==="1"){
				var tmp = check[j];
				setTimeout(function(){tmp.click()},2000+(Math.round(Math.random()*3000)));

			}
		}
		console.log("done.");
	}
}


/*EXP SCRB ACCURACY*/
/* PROVATA E FUNZIONA */

if (mode === "Web" && type === "Experimental"){
	if (editable6Text != null && editable6Text.includes("You will be given a query and a Special Content Result Block (SCRB)")){
		console.log("exp scrb accuracy found");

		/* prendo tutti i bottoni radio */
		var radios = document.querySelectorAll('input[type=radio]');
		var task = "expscrbaccuracy";
		radiosClick(radios, task);

		/* prendo la checkbox finale */
		var lastCheckBox = document.querySelector('input[name=no_lp_issues]');
		setTimeout(function(){lastCheckBox.click()},2000+(Math.round(Math.random()*3000)));


		console.log("done.");
	}
}

/* SXS LOCAL HOTEL */
/* PROVATA E FUNZIONA */

if (mode === "Local" && type === "Side By Side"){
	if (instructionsDivText != null && instructionsDivText.includes("This is a hotel search task. Please assume that the user issuing the query wants to travel and potentially book a hotel from a list of hotels.")){
		console.log("local sxs hotel found");

		var value="80%";
		get_and_set_sliders(value);


		setAts();
		console.log("done.");
	}
}


/***** FINE AUTOCOMPLETE *****/


console.log("dopo autocomplete");

/* URL DEL FOGLIO GOOGLE */

var url = 'https://script.google.com/macros/s/AKfycbyzcTlvOXwikNx5f2P31MrXsuuNOTkGbQ5kAcmGsmkGpLVoIsqCWtM65GWdZEqB6niHAw/exec?';
var delaySubmit = parseInt("2000");
var delayTimer = parseInt("2");
var q = "ul.ewok-task-action-header > li";
var e = document.querySelectorAll(q);
var o = [];
for (var i in e) {
	var t = e[i].textContent;
	if (t) {
		o.push(t);
	}
}

console.log(o[0] + " " + o[1] + " " + o[2]);
var desc1 = o[0];
var desc2 = o[1];
var time = null;

if (o[2].includes('Average') === true) {
	console.log('STAGE ONE: This is a 2 descriptor task. Proceed to Scrape test');
	time = o[2].replace(/[^0-9\.]+/g,"*");
}else {
	console.log('STAGE ONE: This is a 3 Descriptor task. Likely a VA or Audio. Proceed to Scrape test');
	time = o[3].replace(/[^0-9\.]+/g,"*");
}
time = time.split("*");

time = time[time.length -2];

var matches = /taskIds=([^&#=]*)/.exec(document.URL);
var taskID = matches[1];
var AETsec = time * 60;
var AETcount = parseInt(localStorage.AETsec);
if (localStorage.getItem('taskID') !== taskID) {

	localStorage.setItem('taskID', taskID);
	localStorage.setItem('AET', time);
	localStorage.setItem('AETsec', AETsec);

	var xhr = new XMLHttpRequest();
	url += "&AET=" + AETsec;
	console.log(url);
	xhr.open('GET', url);
	xhr.send(null);

	$('input[name=nomoredupes]').trigger('click');
	$('input[name=nomoreporn]').trigger('click');
	console.log("dopo click");
	var soundalert = new Audio("data:audio/ogg;base64,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lFIpxpxzTkqpFGPOOSelZIwx55yTUjLGmHPOSSkdc84556SUjDnnnHNSSuecc845KaWUzjnnnJRSSgidc05KKaVzzjknAACowAEAIMBGkc0JRoIKDVkJAKQCABgcx7I0TdM8TxQ1SdI0z/M8UTRNTbI0zfM8TxRNk+d5niiKommqKs/zPFEURdNUVa4riqZpmqqqqmRZFEXRNFVVdWGapqmqquq6ME1RVFXVdV3IsmmqquvKMmzbNFXVdWUZqKqqyq4sA9dVVdeVZQEA4AkOAEAFNqyOcFI0FlhoyEoAIAMAgCAEIaUUQkophJRSCCmlEBIAADDgAAAQYEIZKDRkRQAQJwAAICSlgk5KJaGUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimlk1JKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllJJSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSSmllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUCgDQjXAA0H0woQwUGrISAEgFAACMUYoxCKnFViHEmHMSWmutQogx5yS0lGLPmHMQSmkttp4xxyCUklqLvZTOSUmttRh7Kh2jklJLMfbeSyklpdhi7L2nkEKOLcbYe88xpRZbq7H3XmNKsdUYY++99xhjq7HW3nvvMbZWa44FAGA2OABAJNiwOsJJ0VhgoSErAYCQAADCGKUYY8w555xzTkrJGHPOQQghhBBKKRljzDkIIYQQQiklY845ByGEUEIopWTMOegghFBCKKWUzjkHHYQQQgmllJIx5yCEEEIJpZRSOucghBBCKKWEVEopnYMQQighhFJKSSmE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");

	console.log('STAGE TWO: Task Information sent to spreadsheet.');

} else {

	if (confirm('It looks like you may have already sent this task information to the spreadsheet. Would you like to resend? Click OK, otherwise CANCEL')) {

		var AETsec = time * 60;
		var xhr = new XMLHttpRequest();
		url += "&AET=" + AETsec;
		console.log(url);
		xhr.open('GET', url);
		xhr.send(null);

		console.log('STAGE TWO: Task Information has been resent');

	} else {
		console.log('STAGE TWO: Task information has been resent if you selected OK. Otherwise, FIN!');
	}

}

if ($("#countdown").length) {
	console.log('Timer in Place, ABORT');
} else {

	var AETcount = parseInt(localStorage.AETsec);

	$('#task_action-show').append('<style type="text/css">#countdown{-webkit-box-sizing:border-box;line-height:normal;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;border:1px solid#ccc;border-bottom-color:#aaa;margin:12px;margin-bottom:0;max-width:1476px;padding:8px;background-color:#fff;clear:both}</style><div class="button-group" id="countdown" style="font-weight:bold; font-size:13px; color:#333">Time Until Autosubmit: <div class="values"></div>    <div><button class="startButton">Start</button><button class="stopButton">Stop</button><button class="ToIndex">Option: Autosubmit & Return to Index</button><button class="NextTask">Option: Autosubmit & Continue</button></div><div class="statusofautosubmit"</div>');

	var timer = new Timer();
	localStorage.setItem('AutosubmitNextTask',1);
	localStorage.setItem('SubmitToIndex',0);

	timer.start({countdown: true, startValues: {seconds: AETcount - delayTimer}});

	$('#countdown .values').html(timer.getTimeValues().toString());
	timer.addEventListener('secondsUpdated', function (e) {
		$('#countdown .values').html(timer.getTimeValues().toString());
		$('title').html(timer.getTimeValues().toString());
	});


	timer.addEventListener('targetAchieved', function (e) {
		$('#countdown .values').html('Off we go...!!');
		soundalert.play();
		setTimeout(function(){
			$('#ewok-task-submit-button').trigger('click');
		}, delaySubmit);
	});

	$('#countdown .startButton').click(function () {
		timer.start({countdown:true, startValues: {seconds: AETcount - delayTimer}});
	});

	$('#countdown .stopButton').click(function () {
		timer.stop();
	});

	$('#countdown .ToIndex').click(function () {
		$('#countdown .statusofautosubmit').html('Submit and Return to Index set.');
		timer.removeEventListener('targetAchieved', function(e){});
		timer.addEventListener('targetAchieved', function (e) {
			$('#countdown .values').html('Off we go...!!');
			soundalert.play();
			setTimeout(function(){
				$('#ewok-task-submit-done-button').trigger('click');
			}, delaySubmit);

			localStorage.setItem('SubmitToIndex',1);
			localStorage.setItem('AutosubmitNextTask',0);
		});
	});



	$('#countdown .NextTask').click(function () {
		$('#countdown .statusofautosubmit').html('Submit and Acquire Next Task set.');
		timer.removeEventListener('targetAchieved', function(e){});
		timer.addEventListener('targetAchieved', function (e) {
			$('#countdown .values').html('Off we go...!!');
			soundalert.play();
			setTimeout(function(){ $('#ewok-task-submit-button').trigger('click'); }, delaySubmit);
			localStorage.setItem('SubmitToIndex',0);
			localStorage.setItem('AutosubmitNextTask',1);
		});
	});
}

console.log('FINAL STAGE: Task Scraping is now Complete! Now to wait... thanks for playing, kids!');


