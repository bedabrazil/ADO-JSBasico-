window.onload = function(){
	document.getElementById("button").addEventListener("click", function(){
		var caixa = document.getElementById("caixa");
		var paragrafo = document.createElement("p");
		paragrafo.innerHTML = document.getElementsByTagName("input")[0].value;
		caixa.appendChild(paragrafo);
	});	

}