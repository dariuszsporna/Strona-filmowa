Obiekt = { 
	metoda : function(){ 
		jQuery('body > header .linebottom nav').toggleClass('active');
	},
	slider : function(){ 
		jQuery('body > section .slider').owlCarousel({
			loop:true,
			items:1,
			nav:true,
			loop:false
		});
		
		var splitme = jQuery('ul.split li a').text();
		var splitarr = splitme.split(" ");
		jQuery('ul.split li a').html(splitarr[0] + "<strong></strong>");
	},
	bestten : function(){
		jQuery('#besttenbox .item .top').click(function(){
			if(jQuery(this).parent().hasClass('active')){
				jQuery('#besttenbox .item').removeClass('active');
			}else{
				jQuery(this).parent().addClass('active');
			}
		})
	}
}

/*

>> na start strony (1 sposob)
<script type="text/javascript">
	Obiekt.metoda();
</script>

>> po zdarzeniu -> onClick (2 sposób)
<a href="#" onClick="Obiekt.metoda(); return false"> uruchom metode po kliknięciu  </a>


body > header nav ul{
	display:none;
}
body > header nav.active ul{
	display:block;
}


*/