function setSliders(block, percentage, hiddenValue){
	let k;

	const sliderBar = block.getElementsByClassName("evl-slider2-bar-selected");
	const sliderTriangle = block.getElementsByClassName("evl-slider2-thumb evl-slider2-thumb-value goog-slider-thumb");
	const hiddenField = block.getElementsByTagName("input");
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
	var allBlocks = document.querySelectorAll(
		".ewok-buds-card, .ewok-buds-result, .ewok-buds-result-has-dupes, .ewok-buds-result-highlight, .ewok-editor-editable-column");

	if (typeof allBlocks[2] !== 'undefined') {
		if(setPagePosition)
			allBlocks[2].scrollIntoView();
	}

	for(let b of allBlocks){
		/* delete dupes from the set of all block */
		if(String(b.innerText).includes("Same as R")){
			var str = String(b.innerText).split("Same as ")[1];
			var block_name = str.split(" ")[0];

			var dupe_block_name = block_name + " - Same as";

			for(let skip_block of allBlocks){
				if(String(skip_block.innerText).includes(dupe_block_name)){
					var index  = allBlocks.indexOf(skip_block);
					allBlocks.splice(index, 1);
				}
			}

		}

		if(String(b.innerText).includes("No Rating Required")){
			continue;
		}

		var allBigTicks = b.getElementsByClassName("evl-slider2-tick-big")
		let elem;
		for (elem of allBigTicks){
			var tmp = elem.getAttribute("data-tick");

			if(tmp === "Too informative"){
				percentage = "66.6667%";
			}
		}

		var evlBlock = b.getElementsByClassName("evl-slider2");
		for(let eval of evlBlock){
			setSliders(eval,percentage,hiddenValue);
		}

	}

	if(allBlocks.length === 0){
		var evlBlock = document.getElementsByClassName("evl-slider2");
		evlBlock[0].scrollIntoView();
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

	if (task === "ytpquo" || task === "commonpq"){
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
					if (!s.includes("www.google.")) {
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

if (type === "Side By Side"){
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
		open_links_set_sliders_set_radios(document, "80%", "4", "AboutTheSameAs");
	}

	/* ENGANGING YT SXS */
	testo = "In this task, you will be given a query and corresponding result blocks linking to videos. For each result block, you will be asked a series of questions about the engagingness of the video for the query. You may skim through the video if you would like. If a video is of a foreign language, ratings will not be required, but please consider answering any questions that are still applicable.";
	if (CheckTextOnDocument(document, testo)){
		console.log("ENGAGINGNESS VIDEO SXS");
		open_links_set_sliders_set_radios(document, "60%", "3", "-1");
	}

	/* INFORMATIVE YT SXS */
	testo = "MC that feels like a good use of time is informative (example, example), inspirational (example, example), and/or entertaining (example, example). MC that doesn’t feel like a good use of time is meaningless (example, example) or off-putting (example).";
	if (CheckTextOnDocument(document, testo)){
		console.log("INFORMATIVE VIDEO SXS");
		open_links_set_sliders_set_radios(document, "60%", "3", "1");
	}

	set_all_radios(document, "AboutTheSameAs");

	/* IMAGE-SXS  DA FINIRE*/
	testo = 'In this task you will be given a query issued to image search followed by two sets of image search results. Your job is to understand the query and the underlying user task or journey using the research links provided.';
	if (CheckTextOnDocument(document, testo)){
		console.log("IMAGE SXS FOUND");
		set_all_radios(document, "0", true);
		get_and_set_sliders("80%", "4");
		set_all_radios(document, "AboutTheSameAs");
	}

	/* MINI NEWS AND BLOGS */
	testo = "A story is important if it would typically feature prominently on the front page of national or local newspapers, or major publications on the topic.";
	if (CheckTextOnDocument(document, testo)) {
		console.log("MINI NEWS AND BLOGS FOUND");

		radios_value = "AboutTheSameAs"

		testo = "The right side did not generate any results."
		if (CheckTextOnDocument(document, testo)) {
			winnerSide = "left side";
			otherSide = "right side";
			radios_value = "MuchBetterThan";

			list_of_comments = [otherSide + " is empty while " + winnerSide + " provides a list of helpful results that are on topic so " + "is much better."
			];

			var item = list_of_comments[Math.floor(Math.random()*list_of_comments.length)];
			document.getElementById('ewok-buds-validation-comment').value = item;
		}

		testo = "The left side did not generate any results."
		if (CheckTextOnDocument(document, testo)) {
			winnerSide = "right side";
			otherSide = "left side";
			radios_value = "MuchWorseThan";


			list_of_comments = [otherSide + " is empty while " + winnerSide + " provides a list of helpful results that are on topic so " + "is much better."
			];

			var item = list_of_comments[Math.floor(Math.random()*list_of_comments.length)];
			document.getElementById('ewok-buds-validation-comment').value = item;
		}

		var allBlocks = document.getElementsByClassName("evl-slider2");

		for (let k = 0; k < allBlocks.length; k++) {
			var s = allBlocks[k].textContent;

			if(s.includes("How important is this story for the topic?")){
				percentage = '80%';
				hiddenValue = '4';
			}

			if(s.includes("How up-to-date is this article as of the time of the query above?")) {
				percentage = '100%';
				hiddenValue = '5';
			}

			if(s.includes("How informative is the title?")) {
				percentage = '80%';
				hiddenValue = '4';
			}

			if(s.includes("Page Quality Rating")) {
				percentage = '60%';
				hiddenValue = '3';
			}

			setSliders(allBlocks[k],percentage,hiddenValue);

		}
		set_all_radios(document, radios_value, false);
	}

	/* app sxs */
	testo = 'This is an Apps & Games Search evaluation task for a mobile app store. For the purposes of this task, assume the user is using an Android OS device.';
	if (CheckTextOnDocument(document, testo)){
		console.log("APP SXS FOUND");
		get_and_set_sliders("60%", "3",false);
		set_all_radios(document, "AboutTheSameAs", false);
		set_all_radios(document, "navigational", true);
	}

	/* RELATED QUESTION */
	testo = 'In this task, you will be given a user-issued query and a list of computer-generated "related questions". Each related question is accompanied by a computer-selected answer passage taken from the web. Your job is to:';
	if (CheckTextOnDocument(document, testo)){
		console.log("related question found");
		get_and_set_sliders("80%", "4");
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
	}

	/* mobile sxs hm e ats tipo le news */
	testo = 'for instructions on how to rate these results from the perspective of a mobile user, using the Needs Met scale. Keep in mind that users are people from many different backgrounds (including people of all ages, genders, races, religions, political affiliations, etc.), whose experiences and needs may differ from your own';
	if (CheckTextOnDocument(document, testo)){
		console.log("mobile sxs found");
		open_links_set_sliders_set_radios(document, "70%", "3.5", "AboutTheSameAs");
	}

	/* sxs one big block */
	testo = 'This task will ask you to evaluate two search result blocks, arranged side by side. You will not be shown the standard Needs Met slider, Page Quality slider, or flags for either of the result blocks.';
	if (CheckTextOnDocument(document, testo)){
		console.log("mobile sxs one block found");
		set_all_radios(document, "AboutTheSameAs", false);
	}

	/* HIGHLIGHTED DIFFERENCES */
	testo = 'Tell us which side provides more useful additional information. Differences between the results are highlighted. Keep in mind that more information is not necessarily better.';
	if (CheckTextOnDocument(document, testo)){
		console.log("HIGHLIGHTED DIFFERENCES found");
		get_and_set_sliders("80%", "4");
		set_all_radios(document, "0");
		set_all_radios(document, "AboutTheSameAs");

	}
	/* SNIPPET */
	testo="The only difference between the content of the result blocks will be the snippet.";
	if (CheckTextOnDocument(document, testo)){
		console.log("Snippet SXS found");
		/* prendo tutti i blocchi e setta gli sldier */
		var allBlocks = document.getElementsByClassName("evl-slider2");
		for(var i=0; i<allBlocks.length; i++){
			allBlocks[i].scrollIntoView();
			/* setto snippet added value */
			setSliders(allBlocks[i],"60%", "2", "snippet");
			/* setto snippet readability */
			setSliders(allBlocks[i+1],"80% ","3", "snippet");
			i=i+1;
		}
		set_all_radios(document, "AboutTheSameAs");
	}

	/* YOUTUBE SXS RACY o ADULT*/
	if(CheckTextOnDocument(document, "In this task, you may be exposed to queries, webpages, and/or topics that contain potentially pornographic content.") ||
		CheckTextOnDocument(document, "In this task, you will be asked to provide Needs Met and Page Quality ratings for queries that were issued on www.youtube.com. Please be aware of the user intent difference when the query is issued on YouTube rather than a general search engine.")){

		console.log("yt sxs racy found");
		open_links_set_sliders_set_radios(document, "70%", "3.5", "AboutTheSameAs");
		set_all_radios(document, "0");
		set_all_radios(document, "3");

	}

	let hiddenValue="";
	let percentage ="";
	/* SXS LOCAL HOTEL */
	teso="This is a hotel search task. Please assume that the user issuing the query wants to travel and potentially book a hotel from a list of hotels.";
	if (CheckTextOnDocument(document, testo)){
		console.log("local sxs hotel found");
		percentage = "80%";
		hiddenValue = "4";
	}

	/* SXS LOCAL */
	testo="Please refer to the General Guidelines and Side-by-Side Rating Guidelines for instructions on how to rate these results from the perspective of a mobile user";
	if (CheckTextOnDocument(document, testo)){
		console.log("SXS LOCAL FOUND");
		percentage = "70%";
		hiddenValue = "3.5";
	}

	/* SXS LOCAL VIEWPORT*/
	testo="Understand the user's intent by considering the query in the context of the area of interest, which may be determined by the following:\n" +
		"Some location mentioned in the query text itself.";

	if (CheckTextOnDocument(document, testo)){
		console.log("SXS LOCAL VIEWPORT FOUND");
		percentage = "80%";
		hiddenValue = "4";
	}

	if(percentage !== ""){
		open_links_set_sliders_set_radios(document, percentage, hiddenValue, "AboutTheSameAs", false);
	}

	console.log("done");
}

if (type === "Experimental") {
	/* BACKGROUND AND REPUTATION */
	testo = "You will first answer a question about the clarity of user needs based on the information provided by the query, user location, and user intent. Next, you will be asked to rate each result using the Needs Met scale based on your understanding of the needs of the user who issued the query.";
	if (CheckTextOnDocument(document, testo)) {
		console.log("BACKGROUND AND REPUTATION");
		OpenAllLinks(wait_time_sec);
		set_all_radios(document, "clear", true);

		var lastCheckBox = document.querySelector('input[type="checkbox"]');
		setTimeout(function(){lastCheckBox.click()},2000+(Math.round(Math.random()*3000)));
		get_and_set_sliders('80%', "4");
	}

	/* search product sxs */
	if(CheckTextOnDocument(document,"In this task, you will be provided with a particular User Intent as additional context to the query.")){
		console.log("Search product found");
		set_all_radios(document,"clear");
		set_all_radios(document,"1");
		get_and_set_sliders("70%", "3.5");
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
		get_and_set_sliders("90%", "4.5");
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
		get_and_set_sliders("100%", "5");
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
		OpenAllLinks(wait_time_sec);
		get_and_set_sliders("75%", "2");
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
		get_and_set_sliders("20%", "1");

	}

	/*EXP SCRB ACCURACY*/
	testo = "You will be given a query and a Special Content Result Block (SCRB)";
	if (CheckTextOnDocument(document, testo)){
		console.log("exp scrb accuracy found");
		radiosClick(document, "expscrbaccuracy");

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
		get_and_set_sliders("66.6667%", "2");
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
		get_and_set_sliders("75%", "3");
	}

	/* UO */
	if (CheckTextOnDocument(document,"In this task, you will be given the link to an article and a list of categories that may describe the content of the article. Your job is to evaluate whether the article’s content relates to any of the categories shown and if so, to rate the corresponding intensity level of issues related to that category as conveyed in the article.")
		|| CheckTextOnDocument(document,"In this task, you will be shown one or more videos and a list of categories that may describe the nature of the video.")){

		console.log("uo not at all found");
		OpenAllLinks(wait_time_sec);
		get_and_set_sliders("25%", "1");
		set_all_checkboxes(document, "isNoOtherDisturbingOffensive");
	}

	if (CheckTextOnDocument(document,"In this task, you will be given links to landing pages and asked if each landing page corresponds to any of following categories of Lowest Quality content, as defined in")){
		console.log("uo harmful found");
		OpenAllLinks(wait_time_sec);
		set_all_radios(document, 'likely_yes', setPagePosition=false);
	}

	/* LITTLE LOCAL */
	testo = 'In this task, you may see special blocks that are shown at the very top of the search results (e.g., above L1 and/or R1).  They do not contain the Needs Met or E-A-T sliders';
	if (CheckTextOnDocument(document, testo)){
		console.log("little local found");
		get_and_set_sliders("80%", "4");
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
		get_and_set_sliders("80%", "4");
	}
	/* YOUTUBE EXP RACY */
	if (CheckTextOnDocument(document, "In this task, you will be given titles and thumbnails of many videos. For each video, your job is to evaluate: How many users in your locale would find this video racy? When rating, please assume users have not previously watched or searched for similar videos.")) {
		console.log("yt exp racy found");
		get_and_set_sliders("25%", "1");
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
		set_all_radios(document, "0");
		set_all_checkboxes(document, "confirm-watched-all-videos", false);
	}

	/* PAGE QUALITY NORMALI */
	testo="In each task, you will be given a URL and some questions about the landing page. Please use the PQ grid to check Page Quality characteristics and assign an overall rating.";
	if(CheckTextOnDocument(document, testo)){
		console.log("common pq found");
		OpenAllLinks(wait_time_sec);
		var pqShortcut = document.getElementsByClassName("pq-shortcut-question");
		radiosClick(pqShortcut[0], "commonpq");
	}

	/* GRAMMAR */
	testo = 'For each query, your job is to evaluate the virtual assistant\'s Response Language Quality (i.e., the quality of language it uses to reply to the user) and its Speech Quality (i.e., the quality of the virtual assistant\'s verbalization of its response).';
	if (CheckTextOnDocument(document, testo)){
		console.log("grammar found");
		get_and_set_sliders('100%', '3');
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
		get_and_set_sliders("90%", "4.5");
		PlayAudio(document);
		FillTextArea(document, "comment");
	}

	/* NEEDS MET */
	testo="InstructionsPlease refer to the General Guidelines for instructions on how to rate these results from the perspective of a mobile user, using the Needs Met scale. Keep in mind that users are people from many different backgrounds (including people of all ages, genders, races, religions, political affiliations, etc.), whose experiences and needs may differ from your own.Reminder: Your ratings should be based on the instructions and examples given in the General Guidelines (refer to Section 0.2: Raters Must Represent People in their Rating Locale). Ratings should not be based on your personal opinions, preferences, religious beliefs, or political views. Always use your best judgment and represent the cultural standards of your rating locale.The links in this task should be opened on your mobile device by following the Send to Device Instructions. Note that you will not be able to access the landing page links on your computer/desktop.";
	testo2="InstructionsPlease refer to the General Guidelines for instructions on how to rate these results from the perspective of a mobile user, using the Needs Met scale. Keep in mind that users are people from many different backgrounds (including people of all ages, genders, races, religions, political affiliations, etc.), whose experiences and needs may differ from your own.Reminder: Your ratings should be based on the instructions and examples given in the General Guidelines (refer to Section 0.2: Raters Must Represent People in their Rating Locale). Ratings should not be based on your personal opinions, preferences, religious beliefs, or political views. Always use your best judgment and represent the cultural standards of your rating locale.The links in this task should be opened on your mobile device by following the Send to Device Instructions. Note that you will not be able to access the landing page links on your computer/desktop.Special InstructionsIn this task, you may see blocks that are not numbered (e.g., L1, L2, etc.) and cannot be rated on the Needs Met or Page Quality rating scales. For example:These blocks are referred to as \"contextual headings\" (usually appearing near the top of the results) because they typically contain headings or title information, and are meant to provide context for the other results below them on that side. While you will not be asked to rate contextual headings, please treat them as extra information to help you understand what the overall result set is about.";
	testo3="InstructionsIMPORTANT (PLEASE READ): The links in this task should be opened on your mobile device by following the Send to Device Instructions. Note that you will not be able to access the landing page links on your computer/desktop.Please refer to the General Guidelines for instructions on how to rate these results from the perspective of a mobile user, using the Needs Met scale.Special InstructionsIn this task, you may see blocks that are not numbered (e.g., L1, L2, etc.) and cannot be rated on the Needs Met or Page Quality rating scales. For example:These blocks are referred to as \"contextual headings\" (usually appearing near the top of the results) because they typically contain headings or title information, and are meant to provide context for the other results below them on that side. While you will not be asked to rate contextual headings, please treat them as extra information to help you understand what the overall result set is about.";
	testo4="InstructionsIMPORTANT (PLEASE READ): The links in this task should be opened on your mobile device by following the Send to Device Instructions. Note that you will not be able to access the landing page links on your computer/desktop.Please refer to the General Guidelines for instructions on how to rate these results from the perspective of a mobile user, using the Needs Met scale.";
	if(ExactText(document, testo) || ExactText(document, testo2) || ExactText(document, testo3) || ExactText(document, testo4)){
		if(FillTextArea(document, "comment")) {
			console.log("PSYCHO FOUND");
			percentage = "90%";
			hiddenValue = "4.5";
		}else{
			percentage = "70%";
			hiddenValue = "3.5";
			console.log("NEEDS MET FOUND");
		}
		open_links_set_sliders_set_radios(document, percentage, hiddenValue);
	}
	console.log("done");
}


/* OTHER UO */
testo = 'Results are shown beneath the query to help you research the topic. You may also click on the query to do further research.';
if (CheckTextOnDocument(document, testo)){
	console.log("other uo found");
	set_all_checkboxes(document, "Category_None", true);
	set_all_radios(document, "0");
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