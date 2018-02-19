//hero text animation
$(document).ready(function(){
	function changeText(cont1,cont2,speed){
		var Otext=cont1.text();
		var Ocontent=Otext.split("");
		var i=0;
		function show(){
			if (i<Ocontent.length) {  
  				cont2.append(Ocontent[i]);
  				i=i+1;
			};
		};
		var Otimer=setInterval(show,speed);
	};
  	changeText($("h2"),$(".text-animation"),90); 
});

//smooth scrolling
$(document).ready(function(){
	$("a").on('click', function(event) {
    	if (this.hash !== "") {
      		event.preventDefault();
      		var hash = this.hash;
      		$('html, body').animate({
        	scrollTop: $(hash).offset().top
      		}, 800, function(){
        	window.location.hash = hash;
      		});
    	}
  	});
});

//icon "goTop"
window.onscroll = function() {scrollFunction()};
 	function scrollFunction() {
    	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        	document.getElementById("goTop").style.display = "block";
    	} else {
        	document.getElementById("goTop").style.display = "none";
    	}
  	}
