(() => {
	'use strict'
	const forms = document.querySelectorAll('.needs-validation')
	Array.from(forms).forEach(form => {
		form.addEventListener('submit', event => {
			if (!form.checkValidity()) {
				event.preventDefault()
				event.stopPropagation()
			}
			form.classList.add('was-validated')
		}, false)
	})
})()
//============== accordion========//
let acc = document.getElementsByClassName("accordion-section");
let d;
for (d = 0; d < acc.length; d++) {
	acc[d].addEventListener("click", function() {
		this.classList.toggle("active");
		let panel = this.firstElementChild;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}
// ============== dropdown ==========//
$('select').each(function() {
	let $this = $(this),
		selectOptions = $(this).children('option').length;
	$this.addClass('hide-select');
	$this.wrap('<div class="select"></div>');
	$this.after('<div class="custom-select"></div>');
	let $customSelect = $this.next('div.custom-select');
	$customSelect.text($this.children('option').eq(0).text());
	let $optionlist = $('<ul />', {
		'class': 'select-options'
	}).insertAfter($customSelect);
	for (let i = 0; i < selectOptions; i++) {
		$('<li />', {
			text: $this.children('option').eq(i).text(),
			rel: $this.children('option').eq(i).val()
		}).appendTo($optionlist);
	}
	let $optionlistItems = $optionlist.children('li');
	$customSelect.click(function(e) {
		e.stopPropagation();
		$('div.custom-select.active').not(this).each(function() {
			$(this).removeClass('active').next('ul.select-options').hide();
		});
		$(this).toggleClass('active').next('ul.select-options').slideToggle();
	});
	$optionlistItems.click(function(e) {
		e.stopPropagation();
		$customSelect.text($(this).text()).removeClass('active');
		$this.val($(this).attr('rel'));
		$optionlist.hide();
	});
	$(document).click(function() {
		$customSelect.removeClass('active');
		$optionlist.hide();
	});
});
//=======checkbox==========

document.getElementById('checkbox').addEventListener('click', function(ev) {
	document.getElementById('label').style.color = (this.checked) ? '#DF4E3C' : ''
});
