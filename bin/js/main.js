var HOVER_URL = "https://www.hover.com/api/forwards/";

var DOMAIN = Model.getInstance().loadOption("domain");
var DOMAIN_ID = Model.getInstance().loadOption("domain-id");

var spinner = document.getElementById("spinner");
var resultEl = document.getElementById("result");

// http://stackoverflow.com/questions/1497481/javascript-password-generator
function generateHash() {
    var length = 6;
    var charset = "abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var retVal = "";

    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }

    return retVal;
}

function showError() {
  spinner.classList.add("is-error");  
}

function showSuccess(shortUrl) {
  spinner.classList.add("is-success");
  resultEl.textContent = shortUrl;
  // document.execCommand(shortUrl);
}

function createShortURL(url) {
  var data = {};
  data["domain_id"] = DOMAIN_ID;
  data["path"] = generateHash();
  data["url"] = url;

  ajax.post({url:HOVER_URL,params:data,callback:function(success,http) {
    console.log(success);
    console.log(http);
    if(!success) {
      return showError();
    }

    var response = JSON.parse(http.responseText);
    if(!response) {
      return showError();
    }

    if(!response["succeeded"]) {
      return showError();
    }

    var shortUrl = 'http://' + DOMAIN + "/" + data["path"];
    return showSuccess(shortUrl);
  }});
}

chrome.tabs.getSelected(null,function(tab) {
  createShortURL(tab.url);
})