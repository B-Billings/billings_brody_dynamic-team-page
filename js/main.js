(()=>{


	const TheList = document.querySelector("#personlist"),
			pictures = document.querySelector(".personpictures"),
			person = document.querySelector(".about h2"),
			bio = document.querySelector("#biotext");

	const introContent = [
    [`The Brands`, `The two brands I was given for this assignment are Gold Bond and Molson. The logo/label to the left is the two brand combined. The main brand ofor the style/design is Molson
			with the new name being Gold Bond.`],
		[`Brody`, `Hello, my name is Brody. I'am currently enrolled at fanshawe college for Interactive Media Design. I have enjoyed both of my semester thus far in IDP. I'am also excited to push my current abiities and learn more`],
		[`Fake Twin`, `Like Brody but with a better moustache. My involvment in this project is nothing ive just got a really poorly photoshoped moustache`],
		[`Elon`, `The founder of Tesla, Space X and The Boring Company, was added to the project because whats cooler than someone standing infront of a rocket ship`]
	];


	function slideBanner(event) {
		if (event.target.className.includes("person")) {
			let multiplier = event.target.dataset.offset, offsetWidth = 503;

			pictures.style.right = `${multiplier * offsetWidth}px`;

			console.log("Image Changed");
		}
	}

	function personbio(name, text) {
		person.textContent = name;
		bio.textContent = text;
	}

	function changeText(event) {
		personbio(introContent[event.target.dataset.offset][0],
						introContent[event.target.dataset.offset][1]);
						console.log("Text Changed");
	}


	TheList.addEventListener("click", slideBanner);
	TheList.addEventListener("click", changeText);



})();
