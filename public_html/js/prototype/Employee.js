
/*
 * Exemplo extraído do site:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
 */
var Employee = function (name, title) {
    this.name = name;
    this.title = title;
    this.greet = function () {
        if (this.canTalk) {
            console.log("Hi, I'm " + this.name + ", the " + this.title);
        }
    };
};