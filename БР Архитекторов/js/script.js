$(document).ready(function () {
	$('.burger').click(function(event){
		$('.burger,.header__menu').toggleClass('active');
	});
	$('.header__link').click(function(event){
		$('.burger,.header__menu').removeClass('active');
	});
});