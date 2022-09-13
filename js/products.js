class Products {
	data = [];
	filteredData = [];
	productsListContainer;

	constructor(data) {
		this.productsListContainer = document.createElement("ul");
		this.productsListContainer.classList.add("products-container");

		this.data = data;

		ROOT_PRODUCTS.appendChild(this.productsListContainer);
	}

	catalogItem(item) {
		//TODO: может будет лучше сделать отдельную функцию или класс Factory для создания DOM элемента
		const listItem = document.createElement("li");
		listItem.classList.add("products-item");

		const image = document.createElement("img");
		image.classList.add("product-element__img");
		image.setAttribute("src", `${item.img}`);

		const itemName = document.createElement("span");
		itemName.classList.add("product-element__name");
		itemName.innerHTML = item.name;

		const itemPrice = document.createElement("span");
		itemPrice.classList.add("product-element__name");
		itemPrice.innerHTML = `${item.price} ₽`;

		const infoBtn = new Button(
			"Подробнее",
			"product-element__btn",
			item
		).render();

		//TODO: переход на страницу товара
		infoBtn.addEventListener("click", () => {
			console.log("info click", item);
		});

		listItem.appendChild(image);
		listItem.appendChild(itemName);
		listItem.appendChild(itemPrice);
		listItem.appendChild(infoBtn);

		return listItem;
	}

	renderData() {
		this.data.forEach((productItem) => {
			this.productsListContainer.appendChild(this.catalogItem(productItem));
		});
	}

	renderFilteredData() {
		document.querySelectorAll(".products-item").forEach((el) => el.remove());

		this.filteredData = [...this.data].filter((dataElem) => {
			const appliedFilters = [];
			for (const key in filters) {
				if (filters[key].size !== 0) {
					appliedFilters.push([key, [...filters[key]]])
				}
			}
			return appliedFilters.every(([key, data]) => {
				return dataElem[key].some(x => data.some(y => y === x));
			});
		});

		//TODO: отдельный компонент* под не найденные по фильтрам товары
		if(this.filteredData.length === 0) {
			const mockNoSuchProduct = document.createElement('div');
			mockNoSuchProduct.classList.add("products-item");
			mockNoSuchProduct.innerHTML = 'По заданным фильтрам нет товаров';
			this.productsListContainer.appendChild(mockNoSuchProduct)
		}

		this.filteredData.forEach((productItem) => {
			this.productsListContainer.appendChild(this.catalogItem(productItem));
		});
	}
}

document.addEventListener("DOMContentLoaded", () => {

	const buttonsNode = document.getElementById("controlButtons");
	const products = new Products(CATALOG);
	products.renderData();

	CATEGORIES_DATA.forEach((categorySetting) => {
		const categoriesButton = new Button(
			categorySetting.text,
			"catalog-sidebar__item"
		).render();

		//TODO: добавлять стиль выбранной категории (фон #BF7691)
		categoriesButton.addEventListener("click", () => {

			// Что-бы не стакались категории / можно будет убрать для нужной реализации
			for (const key in filters) {
				if (key === "category") {
					filters[key].clear();
				}
			}
			// Чистка категории если нажата кнопка "Все товары"
			if (categorySetting.category === 'allItems') {
				filters.category.clear()
			} else {
				filters = {
					...filters,
					category: filters.category.add(categorySetting.category),
				};
			}
			products.renderFilteredData();
		});
		buttonsNode.appendChild(categoriesButton);
	});

	const inputs = document.getElementsByTagName("input");

	[...inputs].forEach((input) => {
		input.addEventListener("change", (event) => {
			
			const colorCheckBox = event.target.getAttribute("data-f");
			// По атрибуту data-f понимаем что это инпут цвета / можно переделать например через id='color-input'
			if (colorCheckBox) {
				colorCheckboxState = {
					...colorCheckboxState,
					[colorCheckBox]: {
						isChecked: !colorCheckboxState[colorCheckBox].isChecked,
					},
				};

				if (colorCheckboxState[colorCheckBox].isChecked) {
					filters = {
						...filters,
						color: filters.color.add(colorCheckBox),
					};
					products.renderFilteredData();
				}

				if (
					!colorCheckboxState[colorCheckBox].isChecked &&
					filters.color.has(colorCheckBox)
				) {
					filters.color.delete(colorCheckBox);
					products.renderFilteredData();
				}
			}
		});
	});
});