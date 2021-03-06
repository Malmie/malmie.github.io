$(document).ready(function(){
  //hero text animation
  function changeText(cont1,cont2,speed,delay) {
    delay = delay / 100;
    var appendTextForDelay = "";
    while (delay > 0) {
      appendTextForDelay += " ";
      delay--;
    }
    var Otext = cont1.text();
    Otext = appendTextForDelay.concat(Otext);

    var Ocontent = Otext.split("");
    var i = 0;
    function show() {
      if(i < Ocontent.length) {  
        cont2.append(Ocontent[i]);
        i = i + 1;
      }
    }
    var Otimer = setInterval(show,speed);
  }
  changeText($(".hero h2"),$(".text-animation"),100,2000);   

  //smooth scrolling
	$("a").on('click', function(event){
    if (this.hash !== "") {
  		event.preventDefault();
  		var hash = this.hash;
  		$('html, body').animate({
    	scrollTop: $(hash).offset().top
  		},800,function() {
    	window.location.hash = hash;
  		});
  	}
  });

  $(window).scroll(function(event){
    var scroll = $(window).scrollTop(); 
    //arrow-up
   	function goTop() {
    	if (scroll > 400) {
        $(".arrow-up").fadeIn("slow").addClass("show");
      } else {
        $(".arrow-up").fadeOut("slow").removeClass("show");
      }
  	}
    goTop();

    // footer
    function footer() {
      if (scroll > 400) { 
        $(".footer").fadeIn("slow").addClass("show");
      } else {
        $(".footer").fadeOut("slow").removeClass("show");
      }
    }
    footer();

    var $window = $(window);
    $window.on('scroll', function(){
      el = $('.parallax');
      el.each(function(){
        var parallax = scroll * $(this).data('speed');
        $(this).css({
            'bottom': parallax
        });
      });
    });
  });  
}); 

  

