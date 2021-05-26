var a = '1';
var hello = 'world';
var getFullName = function (name, surname) {
    return name + ' ' + surname;
};
console.log(getFullName('Nikki', 'Sato'));
var user = {
    name: 'Monster',
    age: 23
};
var user2 = {
    name: 'Jack',
    age: 21,
    getMessage: function () {
        return 'Hello' + user2.name;
    }
};
console.log(user2.getMessage());
var username = 'alex';
var pageNumber = '1';
var errorMessage = null;
var users = null;
var someProp;
var popularTags = ['dragon', 'coffee'];
var dragonsTag = 'dragon';
var doSomething = function () {
    console.log('doSomething');
};
var foo = 'foo';
console.log(foo);
var page = '1';
var pageNumber2 = page;
//DOM
var someElement = document.querySelector('.foo');
console.log('someElement', someElement.value);
someElement.addEventListener('blur', function (event) {
    var target = event.target;
    console.log('event', target.value);
});
//Classes
var User2 = /** @class */ (function () {
    function User2(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    User2.prototype.getFullName2 = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return User2;
}());
var user3 = new User2('Nikki', 'Sato');
console.log(user3);
