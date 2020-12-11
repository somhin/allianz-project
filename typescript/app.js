// lab1
console.log('////////// LAB1 //////////');
console.log('microsoft excel'.toUpperCase());
console.log('GOOGLE AND APPLE'.toLocaleLowerCase());
var str = 'hello world';
str = "H" + str.slice(1, 6) + " W" + str.slice(7, 11);
console.log(str);
// lab2
console.log('////////// LAB2 //////////');
console.log('Hello World'.startsWith('Hello'));
console.log('Hello World'.startsWith('World'));
console.log('Hello World'.endsWith('Hello'));
console.log('Hello World'.endsWith('World'));
console.log('Computer'.slice(3, 6));
console.log('Death Race'.slice(0, 5));
console.log('Republican'.slice(2, 8));
// lab3
console.log('////////// LAB3.1 //////////');
var billion;
console.log((billion = 1e6));
console.log((billion = 1e7));
console.log((billion = 43e9));
console.log((billion = 12e-5));
console.log((billion = 1234e-7));
console.log('////////// LAB3.2 //////////');
console.log((billion = 1e19));
console.log((billion = 2e5));
console.log((billion = 122e8));
console.log((billion = 1e-8));
console.log((billion = 12e-5));
// lab4
console.log('////////// LAB4 //////////');
var num;
console.log((num = 64));
console.log((num = 73));
console.log((num = 45));
console.log((num = 17));
// console.log((num = 0o99));
console.log((num = 0x100));
console.log((num = 0x111));
console.log((num = 0x55));
console.log((num = 0x21));
console.log((num = 0x99));
console.log((num = 64).toString());
console.log((num = 73).toString());
console.log((num = 45).toString());
console.log((num = 17).toString());
// console.log((num = 0o99).toString());
console.log((num = 0x100).toString());
console.log((num = 0x111).toString());
console.log((num = 0x55).toString());
console.log((num = 0x21).toString());
console.log((num = 0x99).toString());
console.log('////////// LAB4.1 //////////');
console.log(Math.round(12.423));
console.log(Math.round(31313.135));
console.log(Math.round(42.809));
console.log('////////// LAB5 //////////');
function random(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}
console.log('min - max test');
console.log(random(1, 10));
console.log(random(10, 1));
console.log(Math.random());
console.log('////////// LAB6 //////////');
var a = false;
var b = true;
var c = false;
console.log(a || (b && c));
console.log(b || a || c);
console.log(b && (a || c));
console.log('////////// LAB7 //////////');
console.log(typeof a);
console.log(typeof 'ABD');
console.log(typeof 113113);
console.log(typeof null);
console.log(typeof '');
// console.log(typeof 13qed)
console.log('////////// LAB8 //////////');
var human1 = {
    name: 'somfuckinghin',
    age: 22,
    isSleepy: true,
    favoriteBand: {
        artist: 'The fin.',
        country: 'Japan'
    }
};
var human2 = {};
for (var key in human1) {
    human2[key] = human1[key];
    console.log(human2[key]);
}
// let human3: object = Object.assign({}, human1);
// alternative alone without for loop
human1['isActive'] = true;
console.log(human1);
delete human1['isActive'];
console.log(human1);
console.log('////////// LAB9 //////////');
var fruits = ['Apple', 'Pear', 'Orange'];
var ShoppingCarts = fruits;
ShoppingCarts.push('Banana');
console.log(ShoppingCarts.length);
console.log('////////// LAB10 //////////'); //slide 219
var setString = 'Apple, Cat, Zoo, Bird, Dog';
var arr1 = setString.split(', ');
console.log(arr1.sort());
var arr2 = [123, 132, 423, 12345, 5343, 52, 10904, 64];
// let arr3 = arr2.filter(item => (item + "").startsWith("1"));
console.log(arr2.filter(function (item) { return (item + "").startsWith("1"); }));
// arrow function lab slide 328
// interface lab slide 336
