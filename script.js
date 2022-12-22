//121.1 Инструкция break
// let arr = [1, 2, 3, 0, 4, 5];

// for (let elem of arr) {
// 	if (elem == 0) {
// 		break;
// 	}
// 	console.log(elem);
// }

//121.2
// let arr = [1, 2, 3, 5, -4, 5];
// let count = 0;

// for (let i = 1; i < arr.length; i++) {
// 	count += arr[i];
// 	if (i < 0) {
// 		break;
// 	}
// }
// console.log(count);

//121.3
// let arr = [1, 2, 3, 0, 4, 5];

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] == 3) {
// 		console.log(i);
// 		break;
// 	}
// }

//121.4
// let count = 1;

// for (let i = 1; i <= 100; i++) {
// 	count += i;
// 	if (count > 100) {
// 		console.log(i);
// 		break;
// 	}
// }

//122.1 ИНтсрукция continue

//123.1 Вложенные циклы
// for (let i = 1; i <= 9; i++) {
// 	for (let j = 1; j <= 3; j++) {
// 		document.write(i);
// 	}
// }

//123.2
// for (let i = 1; i <= 3; i++) {
// 	for (let j = 1; j <= 3; j++) {
// 		let str = String(j);
// 		document.write(i + str + ' ');
// 	}
// }

//124.1 Область видимости в циклах

//125.1 Вложенные циклы и область видимости

//126.1 Заполнение массива
// let arr = [];

// for (let i = 1; i <= 10; i++) {
// 	arr.push(i);
// }
// document.write(arr);

//126.2
// let arr = [];

// for (let i = 1; i <= 10; i++) {
// 	arr.push('x');
// }
// console.log(arr);

//126.3
// let arr1 = [1, 2, -23, 12, -2, -51, 777, -213, 1];
// let arr2 = [];

// for (let i = 0; i < arr1.length; i++) {
// 	if (arr1[i] > 0) {
// 		arr2.push(arr1[i]);
// 	}
// }
// console.log(arr2);

//127.1 Изменение массива в цикле
// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
// 	arr[i] = arr[i] ** 2;
// }
// console.log(arr);

//127.2
// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
// 	arr[i]--;
// }
// console.log(arr);

//127.3
// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
// 	arr[i] += 10;
// }
// console.log(arr);

//128.1 Заполнение объектов через цикл
// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let obj = [];

// for (let i = 0; i <= 6; i++) {
// 	obj[arr1[i]] = arr2[i];
// }
// console.log(obj);

//128.2 Переберите этот объектло цикм и запишите в новый объект те элементы, которые являются четными числами.
// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// let newObj = {};

// for (let key in obj) {
// 	if (obj[key] % 2 === 0) {
// 		newObj[key] = obj[key];
// 	}
// }
// console.log(newObj);

//128.3
// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// let newObj = {};

// for (let key in obj) {
// 	newObj[obj[key]] = key;
// }
// console.log(newObj);

// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// let arr1 = [];
// let arr2 = [];

// for (let key in obj) {
// 	arr1.push(key);
// 	arr2.push(obj[key]);
// }
// console.log(arr1);
// console.log(arr2);

//129.1 Изменение объектов через цикл
// let obj = { x: 1, y: 2, z: 3 };

// for (let key in obj) {
// 	obj[key] = obj[key] * obj[key];
// }
// console.log(obj);

//129.2
// let obj = { x: 1, y: 2, z: 3 };

// for (let key in obj) {
// 	obj[key] = obj[key] + 1;
// }
// console.log(obj);

//130.1 Работа с флагами
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let flag = false;

// for (let elem of arr) {
// 	if (elem == 'c') {
// 		flag = true;
// 		break;
// 	}
// }

// if (flag == true) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// //130.2  Не решено Напишите код, который будет проверять число на то, простое оно или нет. Простое число делится только на единицу и на само себя, и не делится на другие числа.

// let arr = [1, 23, 462, 24, 231, 777];
// let flag = false;

// for (let i = 1; i < arr.length; i++) {
// 	for (let j = 1; j < i; j++) {
// 		if (arr[i] / 1 || arr[i] / arr[j]) {
// 			flag = true;
// 		}
// 	}
// }
// if (flag == true) {
// 	console.log('Простое число');
// } else {
// 	console.log('Непростое число');
// }

//131.1 Подсчет количества элементов в массиве
// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3, 3];
// let counter = 0;
// for (let elem of arr) {
// 	if (elem == 3) {
// 		counter++;
// 	}
// }
// console.log(counter);

//131.2
// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3, 3];
// let counter1 = 0;
// let counter2 = 0;

// for (let elem of arr) {
// 	if (elem == 3) {
// 		counter1++;
// 	} else if (elem == 2) {
// 		counter2++;
// 	}
// }
// console.log('Троек: ' + counter1 + ' Двоек: ' + counter2);

//132.1 Объект с количеством элементов в массиве Дана строка. Подсчитайте сколько раз в ней встречается каждый из ее символов.
// let str = 'ааабсссбаа';
// let count = {};

// for (let elem of str) {
// 	if (count[elem] === undefined) {
// 		count[elem] = 1;
// 	} else {
// 		count[elem]++;
// 	}
// }
// console.log(count);

//Квадртаное уровнение
// var x1, x2, x;

// let a = 1;
// let b = 6;
// let c = 9;

// let D = b * b - 4 * a * c;

// if (D > 0) {
// 	x1 = -b - Math.sqrt(D) / (2 * a);
// 	x2 = -b + Math.sqrt(D) / (2 * a);

// 	console.log('ДВа корня' + x1, x2);
// } else if (D == 0) {
// 	x = b / (2 * a);
// 	console.log('Один корень ' + x);
// } else if (D < 0) {
// 	console.log('Корней нет');
// }

//133.1 Получение соседей элементов в массиве
// let arr = [1, 2, 3, 4, 5];

// for (let i = 1; i < arr.length; i++) {
// 	console.log(arr[i + 1]); // 2 3 4 5
// }

//133.2
// let arr = [1, 2, 3, 4, 5];

// for (let i = 1; i < arr.length; i++) {
// 	let res = arr[i] + arr[i + 1];
// 	console.log(res);
// 	console.log(arr[i] + arr[i + 1]); //5 7 9
// }

//133.3
// let arr = [1, 2, 3, 4, 5];

// for (let i = 1; i < arr.length; i++) {
// 	console.log(arr[i - 1], arr[i - 2]);
// }

//133.4
// let arr = [1, 2, 3, 4, 5];

// for (let i = 1; i < arr.length; i++) {
// 	let res = arr[i - 1] + arr[i - 1] + arr[i];
// 	console.log(res); // 4 7 10 13
// }

//133.5
// let arr = [1, 2, 3, 4, 5];
// for (let i = 1; i < arr.length; i++) {
// 	console.log(arr[i - 1] + arr[i] + arr[i + 1]); //6 9 12
// }

//134.1 Советы по написанию кода циклоv
// let sum = 0;

// let arr = [10, 20, 30, 40, 21, 32, 51]; // 10 20 21
// for (let elem of arr) {
// 	let str = String(elem);
// 	if (str[0] == 1 || str[0] == 2) {
// 		sum += elem;
// 	}
// }
// console.log(sum);

//135.1 Советы по отладке кода на примере циклов. Исправьте ошибки, допущенные в следующем коде:
// let obj = { a: 10, b: 20, c: 30, d: 40, e: 50 };
// var sum = 0;

// for (let elem in obj) {
// 	let str = String(obj[elem]);
// 	if (str[0] == 1 || str[0] == 2) {
// 		sum += +str;
// 	}
// }

// console.log(sum);

//136.1 Поиск ошибок в коде с циклами
// for (let i = 0; i <= 10; i++) {
// 	console.log(i);
// }

//136.2
// for (let i = 10; i > 0; i--) {
// 	console.log(i);
// }

//136.3
// for (let i = 10; i > 0; i--) {
// 	console.log(i);
// }

//136.4
// let i = 0;

// while (i <= 10) {
// 	console.log(i);
// 	i++;
// }

//136.5
// let res = 0;

// for (let i = 1; i <= 10; i++) {
// 	res += i;
// }

// console.log(res);

//136.6
// let res = 1;

// for (let i = 1; i <= 10; i++) {
// 	res *= i;
// }

// console.log(res);

//136.7
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let elem of arr) {
// 	sum += +elem;
// }

// console.log(sum); // должно вывести 15

//136.8
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let elem of arr) {
// 	sum += +elem;
// }

// console.log(sum); // должно вывести 15

//136.9
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let elem of arr) {
// 	sum += +elem;
// }

// console.log(sum); // должно вывести 15

//136.10
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let i = 0; i <= arr.length; i++) {
// 	sum += i;
// }

// console.log(sum); //15

//136.11
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let i = 0; i <= arr.length - 1; i++) {
// 	sum += +arr[i];
// }

// console.log(sum); // почему-то выводит не 15

//136.12
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let i = 0; i <= arr.length; i++) {
// 	sum += +i;
// }

// console.log(sum); // почему-то выводит не 15

//136.13
// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i <= arr.length; i++) {
// 	arr[i] = arr[i] ** 2;
// }
// console.log(arr);

//136.14
// let arr = [];

// for (let i = 1; i <= 5; i++) {
// 	arr.push(i);
// }

// console.log(arr);

//136.15
// let obj = { a: 1, b: 2, c: 3 };
// let sum = 0;

// for (let elem in obj) {
// 	sum += obj[elem];
// }

// console.log(sum);

//136.16
// let obj = { a: 1, b: 2, c: 3 };
// let sum = 0;

// for (let key in obj) {
// 	sum += obj[key];
// }

// console.log(sum);

//136.17 Код должен проверить, есть ли в массиве число 3 или нет:
// let arr = [1, 2, 3, 4, 5];
// let res;

// for (let elem of arr) {
// 	if (elem == 3) {
// 		res = '+++';
// 		break;
// 	} else {
// 		res = '---';
// 	}
// }

// console.log(res);

//136.18
// let arr = [];
// for (let i = 1; i <= 5; i++) {
// 	arr.push(i);
// }

// console.log(arr);

//136,19
// let arr = [1, 2, 3, 4, 5];
// let res = false;

// for (let elem of arr) {
// 	if (elem === 3) {
// 		res = true;
// 		break;
// 	}
// }
// console.log(res);

//136.20
// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
// 	if (elem % 2 === 0) {
// 		console.log(elem);
// 	}
// }

//136.21
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = [];

// for (let elem of arr) {
// 	if (elem % 2 != 0) {
// 		res.push(elem);
// 	}
// }

// console.log(res);

//137.1 Отработка циклов JavaScript
// for (let i = 1; i <= 100; i++) {
// 	document.write(i + '<br/>');
// }

//137.2
// for (let i = 100; i > 0; i--) {
// 	document.write(i + '<br/>');
// }

//137.3
// for (let i = 1; i <= 100; i++) {
// 	if (i % 2 === 0) {
// 		document.write(i + '<br/>');
// 	}
// }

//137.4
// for (let i = 1; i <= 10; i++) {
// 	console.log('x');
// }

//137.5
// let arr = [];

// for (let i = 1; i <= 10; i++) {
// 	arr.push(i);
// }
// console.log(arr);

//137.6
// let arr = [-11, 1, 2, 123, 4, 125, 5, 2];

// for (let i = 1; i <= arr.length; i++) {
// 	if (arr[i] > 0 && arr[i] < 10) {
// 		console.log(arr[i]);
// 	}
// }

//137.7
// let arr = [1, 2, 3, 4, 5];
// let flag = false;

// for (let elem of arr) {
// 	if (elem == 5) {
// 		flag = true;
// 	}
// }
// if (flag == true) {
// 	console.log('Есть');
// } else {
// 	console.log('Нет');
// }

//137.8
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let elem of arr) {
// 	sum += elem;
// }
// console.log(sum);

//137.9
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i <= arr.length; i++) {
// 	sum += i * i;
// }
// console.log(sum);

//137.10 Дан массив с числами. Найдите среднее арифметическое его элементов.
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let elem of arr) {
// 	sum += elem;
// 	sum = sum / arr.length;
// }
// console.log(sum);

//137.11 Напишите скрипт, который будет находить факториал числа. Факториал - это произведение всех целых чисел от единицы до заданного числа.
// let arr = [1, 2, 3, 4, 5, 12];
// let sum = 1;

// for (let elem of arr) {
// 	sum *= elem--;
// }
// console.log(sum);

//137.12
// let arr = [];

// for (let i = 10; i >= 1; i--) {
// 	arr.push(i);
// }
// console.log(arr);

//137.13
// let arr = [12, -1, 3, -53, 777];
// let sum = 0;

// for (let elem of arr) {
// 	if (elem > 0) {
// 		sum += elem;
// 	}
// }
// console.log(sum);

//137.14
// let arr = [10, 20, 30, 50, 235, 3000];

// for (let elem of arr) {
// 	let str = String(elem);
// 	if (str[0] == 1 || str[0] == 2 || str[0] == 5) {
// 		console.log(str);
// 	}
// }

//137.15
// let arr = [1, 2, 3, 4, 5];

// console.log(arr.reverse(arr));

//137.16   Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.
// let arr = [1, 1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
// 	if (arr.indexOf(i) === i) {
// 		console.log(i);
// 	}
// }

//137.17
// let arr = [1, 2, 3, 4, 5];

// for (let i = 1; i <= arr.length; i++) {
// 	document.write('<br>' + i + '<br/>');
// }

//137.18
// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
// 	document.write('<p>' + elem + '</p>');
// }

//137.19
// let arr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

// for (let elem of arr) {
// 	if (elem == 'Сб' || elem == 'Вс') {
// 		document.write('<br>' + '<b>' + elem);
// 	} else {
// 		document.write('<br>' + elem);
// 	}
// }

//137.20
// let arr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
// let day = 'Ср';

// for (let elem of arr) {
// 	if (elem == day) {
// 		document.write('<br>' + '<em>' + elem);
// 	} else {
// 		document.write('<br>' + elem);
// 	}
// }

//137.21
// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
// for (let key in obj) {
// 	console.log(obj[key] * 10);
// }

//137.22
// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
// var res;

// for (let key in obj) {
// 	if (obj[key] <= 400) {
// 		res = obj[key] * 10;
// 	}
// }
// console.log(res);

//137.23
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let newObj = {};

// for (let i = 0; i <= 6; i++) {
// 	newObj[arr1[i]] = arr2[i];
// }

// console.log(newObj);

//137.24
// let obj = { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10 };
// let sumKeys = 0;
// let sumValues = 0;
// let res;

// for (let key in obj) {
// 	sumValues += obj[key];

// 	sumKeys += +key;
// 	res = sumKeys / sumValues;
// }
// console.log(res);

//137.25 ++++
// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// let arr1 = [];
// let arr2 = [];

// for (let key in obj) {
// 	arr1.push(key);
// 	arr2.push(obj[key]);
// }
// console.log(arr1);
// console.log(arr2);

//137.26
// Ответ должен быть таким
//[
// 	125,
// 	225,
// 	128,
// 	145,
// 	281,
// ];

// let obj = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452,
// };
// let newObj = {};

// for (let key in obj) {
// 	let str = String(obj[key]);
// 	if (str[0] == 1 || str[0] == 2) {
// 		newObj = obj[key];
// 	}
// 	console.log(newObj);
// }

//137.27
// {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};  Ответ

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {};

// for (let i = 1; i <= 5; i++) {
// 	obj[i] = arr[i - 1];
// }
// console.log(obj);

//137.28
//{'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {};

// for (let i = 1; i <= 5; i++) {
// 	obj[arr[i - 1]] = i;
// }
// console.log(obj);
