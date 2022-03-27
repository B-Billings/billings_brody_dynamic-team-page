(()=>{


	const TheList = document.querySelector("#personlist"),
			pictures = document.querySelector("#personpictures"),
			person = document.querySelector("#about h2"),
			bio = document.querySelector("#biotext");

	const introContent = [
    [`Elon`, `The founder of Tesla, Space X and The Boring Company`],
		[`Brody`, `Hello, my name is Brody. I'am currently enrolled at fanshawe college for Interactive Media Design. This is my
    second program at Fanshawe and have enjoyed both of my semester thus far. I'am also excited to push my current abiities and learn more`],
		[`Fake Twin`, `Like Brody but with a moustache`],
		[`Elon`, `The founder of Tesla, Space X and The Boring Company`]
	];


	function slideBanner(e) {
		if (event.target.className.includes("person")) {
			let multiplier = event.target.dataset.offset,
				offsetWidth = 503;

			pictures.style.right = `${multiplier * offsetWidth}px`;
		}
	}

	function personbio(name, text) {
		person.textContent = name;
		bio.textContent = text;
		document.querySelector("#profileTitle").style.backgroundColor = color;
	}

	function changeText(e) {
		personbio(introContent[event.target.dataset.offset][0],
						introContent[event.target.dataset.offset][1]);

	}


	TheList.addEventListener("click", slideBanner);
	TheList.addEventListener("click", changeText);



})();
