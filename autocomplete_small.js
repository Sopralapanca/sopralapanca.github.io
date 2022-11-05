/***** INIZIO AUTOCOMPLETE *******/

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}


function set_all_radios(radios, value){

	for(let j = 0; j<radios.length; j++){
		radios[j].scrollIntoView();
		if(radios[j].value===value){
			radios[j].click();

		}
	}
}


async function setSliders(block, value, task){

	let k;
	task = typeof task !== 'undefined' ? task : 'normal';

	let hiddenValue = "0";

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
	const allBlocks = document.getElementsByClassName("evl-slider2");


	for(var i=0; i<allBlocks.length; i++){
		allBlocks[i].scrollIntoView();

		let v = value;

		const allBigTicks = allBlocks[i].getElementsByClassName("evl-slider2-tick-big");
		let elem;
		for (elem of allBigTicks){
			var tmp = elem.getAttribute("data-tick");

			if(tmp === "Too informative"){
				v = "66.6667%";
			}
		}

		setSliders(allBlocks[i],v,task);
	}
}

function CheckTextOnDocument(block, testo){
	return (block.documentElement.textContent || block.documentElement.innerText).indexOf(testo) > -1;
}

let header = document.getElementsByClassName("ewok-task-action-header")[0];
header = header !== undefined ? header.innerText:null;
/* mode restituisce youtube, mobile, local ecc */
let mode = document.getElementsByClassName("ewok-task-action-header")[0].children[0];
if(mode !== undefined) mode = mode.innerText;
/* tipe restituisce sxs o experimental */
const type = document.getElementsByClassName("ewok-task-action-header")[0].children[1].innerText;
const additional = document.getElementsByClassName("ewok-task-action-header")[0].children[2];

let additionalText = null;
if(additional != null){
	additionalText = additional.innerText;
}

let time = document.getElementsByClassName("ewok-estimated-task-weight")[0];
time = time.textContent;

let radios_value;
let text_to_find;
let value;
let task_found = false;
let task;
let radios;

/* GRAMMAR */
if (mode === "Mobile" && type === "Experimental"){
	text_to_find = 'For each query, your job is to evaluate the virtual assistant\'s Response Language Quality (i.e., the quality of language it uses to reply to the user) and its Speech Quality (i.e., the quality of the virtual assistant\'s verbalization of its response).';
	if (CheckTextOnDocument(document, text_to_find)){
		console.log("grammar found");

		task_found = true;
		task = 'grammar';
		value = '100%';

		get_and_set_sliders(value, task);

		radios_value = "1";
		radios = document.querySelectorAll('input[type="radio"]');
		set_all_radios(radios, radios_value);

		console.log("done");
	}
}


/* HEADPHONES */
let clip;
if ((mode === "Headphones" && type === "Side By Side") ||
	(mode === "Web" && type === "Experimental")) {
	if (additionalText != null && additionalText === "Headphones Required") {


		const leftSide = document.getElementById("play0");
		const rightSide = document.getElementById("play1");


		if (leftSide != null && rightSide != null) {
			console.log("audio sxs found");
			task_found = true;

			/* sxs */
			leftSide.scrollIntoView();
			leftSide.click();


			const wait_time = time.split(" ")[2];
			const sec = ((parseInt(wait_time) * 60) / 2) * 1000;
			console.log(wait_time);
			console.log(sec);
			setTimeout(function () {
				rightSide.click()
			}, sec);

			radios_value = "AboutTheSameAs";
			radios = document.querySelectorAll('input[type="radio"]');
			set_all_radios(radios, radios_value);

		} else {
			console.log("audio found");
			task_found = true;
			/* non sxs */
			const row = document.getElementById("ListenCondition-id");
			if (row != null) {

				for (let j = 0; j < radios.length; j++) {
					if (radios[j].value === "Good") {
						tmp = radios[j];
						await sleep(2000 + (Math.round(Math.random() * 3000)));
						tmp.click();
					}
				}

				radios_value = "headphonequiet"
				radios = document.querySelectorAll('input[name=ListenCondition]');
				set_all_radios(radios, radios_value);


				radios_value = "Good"
				radios = document.querySelectorAll('input[name=SpeechQuality]');
				set_all_radios(radios, radios_value);

				const audio = document.getElementById("speech_sample");
				audio.play();
				audio.volume = 0.2;

				setTimeout(function () {
					audio.play()
				}, 30000 + (Math.round(Math.random() * 2000)));
			}
			console.log("done");
		}

	}
	if (additionalText != null && additionalText === "Headphones or Speakers Required") {
		console.log("headphones similar");
		task_found = true;

		var clips = document.querySelectorAll('audio[id*=task_clip_speech]');


		if (clips != null) {
			for (var i = 0; i < clips.length; i++) {
				clips[i].scrollIntoView();
				clip = clips[i];
				clip.play();
				clip.volume = 0.1;
				setTimeout(function () {
					clip.play()
				}, 30000 + (Math.round(Math.random() * 2000)));
			}

			radios_value = "Good";
			radios = document.querySelectorAll('input[type="radio"]');
			set_all_radios(radios, radios_value);


		} else {
			radios_value = "headphonequiet"
			radios = document.querySelectorAll('input[name=ListenCondition]');
			set_all_radios(radios, radios_value);

			var audio_a = document.getElementById("speech_sample_a");
			var audio_b = document.getElementById("speech_sample_b");
			audio_a.play();
			audio_a.volume = 0.1;

			audio_b.play();
			audio_b.volume = 0.1;

			setTimeout(function () {
				audio_a.play()
			}, 30000 + (Math.round(Math.random() * 2000)));
			setTimeout(function () {
				audio_b.play()
			}, 30000 + (Math.round(Math.random() * 2000)));
		}


		value = "90%";
		get_and_set_sliders(value);

	}


}

if (mode === "YouTube" && type === "Experimental"){
	testo = 'In this task, you will be given a list of videos. Your job is to identify porn or racy content';
	if (CheckTextOnDocument(document, testo)){
		console.log("youtube exp adult found");

		/* set sexually safe */
		set_all_radios(document, "0");

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


if(task_found === false){
	let cancelButton = document.getElementById("ewok-task-cancel-button");
	cancelButton.click();
}

/***** FINE AUTOCOMPLETE *****/

