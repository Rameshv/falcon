(function(){
    var epochTime = (new Date()).getTime();
    var url = window.location.href;
    var nlparser = new NLParser()
    var docString = document.documentElement.cloneNode(deep=true).outerHTML
    var relText = document.body.innerText
    if(!((window.location.protocol + "//" + window.location.host + "/") === window.location.href)) {
        relText = nlparser.getRelevantText(docString)
    }
    console.log(relText)
    chrome.runtime.sendMessage({
        "msg":'pageContent',
        "time":epochTime,
        "url":url,
        "text":relText,//document.body.innerText,
        "title":document.title,
    });
})();
