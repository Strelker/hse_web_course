/**
 * Глобальный переключатель стилей
 * 
 * @param {String} className Название класса
 */
export const globalToggle = (className) => {
    const defaultElements = Array.from(document.getElementsByClassName(className));
    const activeElements = Array.from(document.getElementsByClassName(`${className}_active`));

    if (defaultElements.length === 0 && activeElements.length === 0) {
        return;
    }

    for (let i = 0; i < defaultElements.length; i++) {
        defaultElements[i].classList.remove(className);
        defaultElements[i].classList.add(`${className}_active`);
    }

    for (let i = 0; i < activeElements.length; i++) {
        activeElements[i].classList.remove(`${className}_active`);
        activeElements[i].classList.add(className);
    }
};