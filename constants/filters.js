//TODO: class Filter мб + отдельный хендлер на изменение фильтров
let filters = {
	category: new Set([]),
	name: new Set([]),
	price: new Set([]),
	color: new Set([]),
	size: new Set([]),
};
// TODO: мб вынести к филтрам
let colorCheckboxState = {
	["розовый"]: {
		isChecked: false,
	},
	["черный"]: {
		isChecked: false,
	},
};