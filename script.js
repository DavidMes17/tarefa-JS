let botao = document.querySelector('[botao]').addEventListener("click", start)
function start(){

i = 0
i++
	console.log(i++, i++)


}


/**
 * css para demonstração com jQuery
 */
$(document).ready(()=>{
	$('body').css('padding', '0').css('margin', '0').css('background-color', '#8D98A7').css('display', 'flex').css('justify-content', 'center').css('margin', '32px')
	$('input').css('border-radius', '5px').css('border', '2px solid #E5CEDC').css('color', '#1481BA').css('margin', '1.3rem').css('color', '#8F9491')
	$('[botao]').css(':focus', 'box-shadow', '0 0 0 0').css(':focus', 'outline', '0')
	$('.botoes').css('display', 'flex').css('justify-content', 'space-evenly')
})