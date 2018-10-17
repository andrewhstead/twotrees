function contentSwitcher(page) {

	var sections = document.getElementsByClassName("page-section");

	if (page === undefined) {
		sections[0].classList.add("active");

	} else {

		for (var i = 0; i < sections.length; i++) {
			sections[i].classList.remove("active");
		}
		document.getElementById(page).classList.add("active");
	}

}

contentSwitcher();