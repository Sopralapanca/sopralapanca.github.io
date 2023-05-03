javascript:(function(){
	var el=document.createElement("div"),b=document.getElementsByTagName("body")[0],otherlib=!1,msg="";el.style.position="fixed",el.style.height="32px",el.style.width="220px",el.style.marginLeft="500px",el.style.top="0",el.style.left="50%25",el.style.padding="5px 10px",el.style.zIndex=1001,el.style.fontSize="12px",el.style.color="#222",el.style.backgroundColor="#f99";function showMsg(){var txt=document.createTextNode(msg);el.appendChild(txt),b.appendChild(el),window.setTimeout(function(){txt=null,typeof jQuery=="undefined"?b.removeChild(el):(jQuery(el).fadeOut("slow",function(){jQuery(this).remove()}),otherlib&&(window.$jq=jQuery.noConflict()))},2500)}if(typeof jQuery!="undefined")return msg="This page already using jQuery v"+jQuery.fn.jquery,showMsg();typeof $=="function"&&(otherlib=!0);function getScript(url,success){var script=document.createElement("script");script.src=url;var head=document.getElementsByTagName("head")[0],done=!1;script.onload=script.onreadystatechange=function(){!done&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")&&(done=!0,success(),script.onload=script.onreadystatechange=null,head.removeChild(script))},head.appendChild(script)}getScript("//code.jquery.com/jquery.min.js",function(){return typeof jQuery=="undefined"?msg="Sorry, but jQuery was not able to load":(msg="This page is now jQuerified with v"+jQuery.fn.jquery,otherlib&&(msg+=" and noConflict(). Use $jq(), not $().")),showMsg()})})();
	
javascript: (function() {
	/* link to incluce in the bookmarklet creation for the sound */
	/* https://cdn.jsdelivr.net/npm/easytimer@1.1.1/src/easytimer.min.js  */
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
	
    console.log(o[0] + " " + o[1]);
    var desc1 = o[0];
    var desc2 = o[1];
    var time = null;

	if (o[1].includes('Average') == true) {
		console.log('STAGE ONE: This is a 2 descriptor task. Proceed to Scrape test');
		time = o[1].replace(/[^0-9\.]+/g,"*");
	}else {
		console.log('STAGE ONE: This is a 3 Descriptor task. Likely a VA or Audio. Proceed to Scrape test');
		time = o[1].replace(/[^0-9\.]+/g,"*");
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
		xhr.open('GET', url);
		xhr.send(null);
		
		$('input[name=nomoredupes]').trigger('click');
		$('input[name=nomoreporn]').trigger('click');
		
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
	
	var addScript=function(filename){
        var e=document.createElement('script');
        e.type='text/javascript';
        e.src=filename;
        if(typeof(e)!=='undefined'){
            document.getElementsByTagName('head')[0].appendChild(e);
        }
    };
    addScript('https://sopralapanca.github.io/only_autocomplete.js');
	
	
	console.log('FINAL STAGE: Task Scraping is now Complete! Now to wait... thanks for playing, kids!');
	
})();

