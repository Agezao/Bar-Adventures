var checkHomescreen = function(){
	if(!window.navigator.standalone){
		var disclaimer = document.createElement('div');
		$(disclaimer).attr('class', "disclaimer");

		$(disclaimer).html('<p>Veja <a target="_blank" href="http://www.howtogeek.com/196087/how-to-add-websites-to-the-home-screen-on-any-smartphone-or-tablet/">aqui</a> <br> como instalar este jogo!</p><span>x</span');

		$('body').append(disclaimer);
		$('.disclaimer span').click(function(){
			$(this).parent().remove();
		});
	}
}();

var checkOrientation = function(){
	if(window.innerHeight > window.innerWidth){
		var disclaimer = document.createElement('div');
		$(disclaimer).attr('class', "disclaimer");

		$(disclaimer).html('<p>Este game foi pensado para ser jogado <br> com o dispositivo na <b>horizontal</b> <br>recomendamos que vire o aparelho para uma melhor experiência</p><span>x</span');

		$('body').append(disclaimer);
		$('.disclaimer span').click(function(){
			$(this).parent().remove();
		});
	}
}();