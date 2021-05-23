import "../scss/main.scss";

import "../images/Icon_mail.svg";
import "../images/Icon_web.svg";
import "../images/About_image.svg";
import "../images/Hero_bg.png";
import "../images/Hero_image.png";
import "../images/Logo.png";
import "../images/Portfolio_bg.png";
import "../images/slide1.jpg";
import "../images/slide2.jpg";
import "../images/slide3.jpg";
import "../images/slide4.jpg";
import "../images/slide5.jpg";

const showMenu = () => {
	const btnOpen = document.querySelector(".open__bar");
	const btnClose = document.querySelector(".close__bar");
	const link = document.querySelectorAll(".menu__left a");
	const menu = document.querySelector(".menu");

	btnOpen.addEventListener("click", () => {
		menu.classList.add("show__menu");
	});

	btnClose.addEventListener("click", () => {
		menu.classList.remove("show__menu");
	});

	link.forEach(item =>
		item.addEventListener("click", () => {
			menu.classList.remove("show__menu");
		})
	);
	window.addEventListener("click", event => {
		if (event.target == menu) {
			menu.classList.remove("show__menu");
		}
	});
};
showMenu();

$(".gallery").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2500,
	mobileFirst: true,
	responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			},
		},
		{
			breakpoint: 1023,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			},
		},
	],
});

$(".bloglist").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	arrows: false,
	dots: false,
	mobileFirst: true,
	autoplaySpeed: 3000,
	responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 1023,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			},
		},
	],
});
