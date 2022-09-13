//TODO: расширить
class Button {
	text;
	className;

	constructor(text, className) {
		this.text = text;
		this.className = className;
	}

	render() {
		const button = document.createElement("button");

		if (this.className !== undefined) {
			button.classList.add(this.className);
		}
		button.textContent = this.text;

		return button;
	}
}