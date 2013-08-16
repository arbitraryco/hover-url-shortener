var domainIdEl = document.getElementById("domain-id");
domainIdEl.addEventListener("keyup",function(evt) {
	var value = domainIdEl.value;
	Model.getInstance().saveOption("domain-id",value);
},false);

domainIdEl.value = Model.getInstance().loadOption("domain-id") || "";

//

var domainEl = document.getElementById("domain");
domainEl.addEventListener("keyup",function(evt) {
	var value = domainEl.value;
	Model.getInstance().saveOption("domain",value);
},false);

domainEl.value = Model.getInstance().loadOption("domain") || "";