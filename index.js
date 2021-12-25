// Responsive logic for triggering the mobile menu
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
	'.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
	if (smallMenu.classList.contains('header__sm-menu--active')) {
		smallMenu.classList.remove('header__sm-menu--active')
	} else {
		smallMenu.classList.add('header__sm-menu--active')
	}
	if (headerHamMenuBtn.classList.contains('d-none')) {
		headerHamMenuBtn.classList.remove('d-none')
		headerHamMenuCloseBtn.classList.add('d-none')
	} else {
		headerHamMenuBtn.classList.add('d-none')
		headerHamMenuCloseBtn.classList.remove('d-none')
	}
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
	headerSmallMenuLinks[i].addEventListener('click', () => {
		smallMenu.classList.remove('header__sm-menu--active')
		headerHamMenuBtn.classList.remove('d-none')
		headerHamMenuCloseBtn.classList.add('d-none')
	})
}

//  update logo link href
const headerLogoSub = document.querySelector('.header__logo-sub')
headerLogoSub.addEventListener('click', () => {
	location.href = 'index.html'
})
window.onbeforeunload = function () {
	window.scrollTo(0, 0)
}

// update my age dynamically
let dob = 1998
let els = document.querySelectorAll('.age')
els.forEach((el) => {
	el.textContent = `${+(new Date().getFullYear() - dob)}`
})

// tippyJS: TOOL TIPSSSSS FOR DEM SKILLLzzz BoY !!
tippy('[data-tippy-content]', {
	// trigger: 'mouseenter focusin click',
	trigger: 'click',
	theme: 'light-border',
	allowHTML: true,
})

// Modal Image:
// Images should become bigger in a modal element when they are clicked on
// Source: https://www.w3schools.com/howto/howto_css_modal_images.asp
// Get the modal
var modal = document.getElementById('myModal')

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg')
var modalImg = document.getElementById('modalImg')
var captionText = document.getElementById('caption')
const $imgs = document.querySelectorAll('.trigger-modal-display')
$imgs.forEach(($img) => {
	$img.onclick = function () {
		modalImg.src = $img.src
		modal.style.display = 'block'
		captionText.innerHTML = $img.alt
	}
})

// Get the <span> element that closes the modal
var modalClose = document.getElementsByClassName('close')[0]

// When the user clicks on <span> (x), close the modal
modalClose.onclick = function () {
	modal.style.display = 'none'
}
modal.onclick = function () {
	modal.style.display = 'none'
}
