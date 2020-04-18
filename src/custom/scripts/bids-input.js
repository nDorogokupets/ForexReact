document.addEventListener('DOMContentLoaded', function() {
	let buttonUp = document.querySelectorAll(".calc > .up");
	let buttonDown = document.querySelectorAll(".calc > .down");
	buttonUp.forEach( function(button) {
		button.addEventListener("click", function(elem) {
			elem.closest(".summ");
		});
	});
});