
/*
 * Exemplo extraído do site:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
 */
var Person = function () {
    this.canTalk = true;
    this.greet = function () {
        if (this.canTalk) {
            console.log('Hi, I\'m ' + this.name);
        }
    };
};