/**
 * Возвращает одноразрядное число, полученное в результате итеративного перемножения всех цифр числа
 * 
 * @param {Number} num
 * @returns {Number}
 */
export const solutionFn = (num) => {
    while (num >= 10) {
        let product = 1;
        num.toString().split('').forEach(digit => {
            product *= Number(digit);
        });
        num = product;
    }
    return num;
};