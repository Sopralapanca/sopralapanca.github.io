javascript: (function() {
    var addScript=function(filename){
        var e=document.createElement('script');
        e.type='text/javascript';
        e.src=filename;
        if(typeof(e)!=='undefined'){
            document.getElementsByTagName('head')[0].appendChild(e);
        }
    };
    addScript('https://sopralapanca.github.io/vertical_alignment.js');
})();