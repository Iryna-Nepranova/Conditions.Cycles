1.
let x = +prompt ("Введите число","Число");

if (  x < 0 ) {
    alert ("Отрицательное число");
} else if ( x == 0 ) {
    alert ("Ноль");
} else if ( x > 0 ) {
    alert ("Положительное");
}

2.
let myMoney = +prompt ("How much money do you have?","Amount");
let friendMoney = +prompt ("How much money do you have?","Amount");
if ( (myMoney + friendMoney) < 300000 ) {
    alert("Stay at home and drink beer");
} else {
    alert ("Go to Majorca")
}

3.
let age = +prompt ("How old are you?","Enter your age here");

if ( age>=20 && age<27 ){
    alert ("Выслать повестку");
} else {
    alert ( "Вам повезло");
}

4.
let busNumber = +prompt ( "Please,enter bus number","Bus number");
 
if ( busNumber === 7 || busNumber === 225 || busNumber === 255) {
    alert ( "Congratulations! You go home");
} else {
    alert ( "Please wait other bus");
}


5.
let day = prompt ("Please, enter a current day of the week","Current day");

if ( day !== "Saturday" && day !== "Sunday") {
    alert ("You must go to work");
} else {
    alert (" It is weekend")
}

6.
let x = +prompt ("Введите значения от -20 до 20", "Значение");
let y = +prompt ("Введите значения от -20 до 20", "Значение");


if ( x <= 1 && y >= 3 || y <0 ) {
    alert ( x + y );
} else {
    alert ("Неверно!")
}

7.
let x = +prompt ("Введите значения для переменной х", "Значение");
let y = +prompt ("Введите значения для переменной у", "Значение");

if ((x > 2 && x < 11) || (y >= 6 && y < 14)) {
    alert ( x = x * 2 );
} else {
    alert ( x = x + 5 );
}

8.
let userName = prompt ("Введите Ваше имя",""); 

if ( userName != "" && userName != null ) {        
    alert (`Добрый день, ${userName}` ); 
} else  {
    alert ( "Пожалуйста, введите Ваше имя.")
} 

9.
let greeting = "";
let lang = prompt ( "Введите значение","ru,en,de");

if ( lang == "ru" ) {
    alert ( greeting = "Приветствую Вас!");
} else if ( lang == "en" ) {
    alert ( greeting = "Hello!")
} else if ( lang == "de") {
    alert (greeting = "Guten Tag")
}

let greeting = "";
let lang = prompt ( "Введите значение","ru,en,de");
switch (lang) {
    case "ru":
        alert ( greeting = "Приветствую Вас!");
        break;
    case "en":
        alert ( greeting = "Hello!");
        break; 
    case "de":
        alert ( greeting = "Guten Tag");
        break;        
}

10.
let month = new Date();
let season = (month.getMonth() );

if (season == 11 || season == 0 || season == 1) {
    alert( "Зима" );
} else if (season == 2 || season == 3 || season == 4) {
    alert( "Весна" );
} else if(season == 5 || season == 6 || season == 7) {
    alert( "Лето" );
} else if (season == 8 || season == 9 || season == 10) {
    alert( "Осень" );
}

11.
let lang = prompt ("Выберите, пожалуйста, значение","ru/en");
let date = new Date();
let day = date.getDay();

if (lang == "ru" ) {
   if ( day === 0 ) {
       alert ( result = "Воскресенье");
   } else if ( day === 1 ) {
    alert ( result = "Понедельник");
   } else if ( day === 2 ) {
    alert ( result = "Вторник");
   } else if ( day === 3 ) {
    alert ( result = "Среда");
   }  else if ( day === 4 ) {
    alert ( result = "Четверг");
   }  else if ( day === 5 ) {
    alert ( result = "Пятница");
   }  else if ( day === 6 ) {
    alert ( result = "Суббота");
   } 
   
}else if (lang == "en" ) {
    if ( day === 0 ) {
        alert ( result = "Sunday");
    } else if ( day === 1 ) {
     alert ( result = "Monday");
    } else if ( day === 2 ) {
     alert ( result = "Tuesday");
    } else if ( day === 3 ) {
     alert ( result = "Wednesday");
    }  else if ( day === 4 ) {
     alert ( result = "Thusday");
    }  else if ( day === 5 ) {
     alert ( result = "Friday");
    }  else if ( day === 6 ) {
     alert ( result = "Saturday");
    } 
}


12.1
let userName = prompt ("Как Вас зовут?","Имя");
let age = +prompt("Сколько Вам лет?","Возраст");

// 12.2
switch ( userName, age) {
    case  "John" && 29:
    case  "Kate" && 15:
        alert ( `Привет, ${userName} ${age}`);
   break;
   default:
    alert ( "Пока");
} 

12.3
let userName = prompt ("Как Вас зовут?","Имя");
let age = +prompt("Сколько Вам лет?","Возраст");
(userName === "John" && age === 29) || (userName === "Kate" && age === 15) ? alert ( `Привет, ${userName} ${age}`) : alert ( "Пока");



ЦИКЛЫ

1.
let i;
let n = ".#";
for ( i = 1; i < 5; i++) {
  n = n + n;
}
console.log ( n );

2.
let i;
for ( i = 1; i < 10; i++) {
if ( i % 2 === 0) {
    console.log ( i**2 );
 } else {
    console.log ( i )
 }
}

3.
let i;
let userName = prompt ("Name","Name");
for ( i = 0; i < 4; i++) {
if ( i % 2 !== 0 || i == 0) {
   console.log ("Happy birthday to you" );
 } else {
     console.log (`Happy birthday dear ${userName}`);
 }
}

4.
let i = confirm ("Are you Ok?");
while ( i == false ) {
  console.log ("Continue");
  break
}

5.
let ourNumber = +prompt ("Enter any number","Number");
let i = 0;
let sum = 0;

for ( i = 0; i <= ourNumber; i++){
    if ( i % 2 != 0) {
        sum = sum + i;
    }
}
alert ( sum );

6.
let iter = 0;
while ( true) {
    let num = Math.random();
    iter++;
   if ( num > 0.9 ){
    alert ( `number:${num},quantity iteration ${iter}`);
    break;
   }
}

7.
let a;
let b;

for ( a = 1; a <= 10; a++){
    let row = "";
    for ( b = 1; b <= 10; b++){
    row = row + a*b + "\t";
    }
    console.log (row);
}

//второй вариант вывода в консоль
let a;
let b;

for ( a = 1; a <= 10; a++){
    for ( b = 1; b <= 10; b++){
    console.log (a,"x",b,"=",(a*b) );
    }
}

8.
/* let a = 0;
let b = 1;
let i = 1;
let n;

for (i = 1; i < 20; i++) {
    n = a + b;
    a = b;
    b = n;
    console.log ( n );
}
обычный цикл
*/

let a = 0;
let b = 1;
let i = 1;
let n;

for (i = 1; i < 20; n = a + b, a = b,b = n, console.log (n),i++) {   
    //пустое тело
}

9.
let sum = 0;
let quantity = 0;
let average; 
let x;
   for (x; ; ++quantity){
    x = + prompt ( "Введите число", "Число");
    sum = sum + x;
    average = sum / quantity;
    if ( !x) break;
}
console.log(`quantity:${quantity}, sum:${sum}, average:${average} `);


10.
let pass = "abc";

More: while (true) {
   newPass = prompt ("Введите пароль","Пароль");
   if ( newPass === " " ) {
      continue More;
   } else if ( newPass === null ) {
    close = confirm ("Вы уверены, что хотите отменить авторизацию");
    if ( close === true ) {
        alert ("Вы отменили авторизацию");
       break
    } else  if  (close === false) {
        continue More;
    }
   }else if ( newPass !== pass ) {
        continue More;
   } else if ( newPass === pass  ) {
    alert (" Вы успешно авторизованы");
    break;
   }
}

11. 
let n;
for ( n = 1; n <= 50; n++){
    if ( n % 3 == 0 && n % 5 == 0) {
       console.log("FizzBuzz");
    }  else if ( n % 3 == 0){
        console.log("Fizz");
    }else if (n % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log (n);
    }
}


/*Условия
Условные и логические операторы

1.	В переменную x записывается число, введенное пользователем в диалоговое окно. Проверить и вывести на экран, x – отрицательное число, положительное или ноль.
2.	У вас и у вашего друга в кармане столько денег, сколько было указано в окнах prompt. В зависимости от общей суммы ваших сбережений вы можете полететь на Майорку или выпить пива. С помощью условного оператора определите ваши возможности и отобразите на экране в alert.
3.	В переменную age запишите возраст человека. Если значение больше или равно 20 и меньше 27, в alert выводится “Выслать повестку”.
4.	Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255. Какая маршрутка приехала – определяется в prompt. Если ваша, то вы едете домой, в противном случае – ожидаете.
5.	В переменную day записан текущий день недели. Если это не суббота и не воскресенье, выведите в alert сообщение о необходимости идти на работу.
6.	Запросите из promptпеременные xи yзначения от -20 до 20. Если переменная x равна или меньше 1, а переменная y больше или равна 3 или меньше 0, то выведите сумму этих переменных, иначе выведите 'Неверно!'.
7.	Если переменная x больше 2 и меньше 11, или переменная y больше или равна 6 и меньше 14, то увеличьте x на 2, иначе прибавьте к x число 5. Выведите новое значение переменной на экран.
8.	Получите из prompt значение для имени пользователя. Выведите на экран приветствие. Учтите вариант, что пользователь может не ввести ничего или нажать на Отмена.
9.	Создайте две переменные: greeting и lang. Переменная greeting – пустая строка. Переменная lang может принимать три значения: 'ru', 'en', 'de' (например, из prompt). Если она имеет значение 'ru', то в переменную greeting запишите приветствие на русском языке, если имеет значение 'en' – то на английском, если 'de' – на немецком. Выведите на экран приветствие в зависимости от значения переменной lang. Решите задачу через if-else и через switch-case.
10.	В переменной month хранится текущий месяц (newDate()). Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
11.	Переменная lang может принимать два значения: 'ru' и 'en'. Переменная day принимает значение от 0 до 6-ти. Если lang имеет значение 'ru', то в переменную result запишите название дня недели на русском языке в соответствии со значением переменной day (0 – воскресенье, 1 – понедельник, 2 – вторник и т.д.). Если же lang имеет значение 'en' – то аналогично, но день недели будет на английском.
12.	1. Получить от пользователя имя и возраст. Записать это в разные переменные.
2. Написать конструкцию switch, которая проверяет 2 случая
	    - Если имя === "John" и возраст === 29 вывести в консоль "Привет (имя) (возраст)"
	    - Если имя === "Kate" и возраст === 15 вывести в консоль "Привет (имя) (возраст)"
- Если не совпадает ни одно условие вывести в консоль "Пока" 
(Написать решение задачи ещеи через оператор ?)

Циклы

1.	Сформируйте строку вида ".#.#.#.#.#." с помощью цикла for.

2.	Напишите цикл с шагом 1, в теле которого распечатываются квадраты каждого четного значения счетчика.

3.	Используя любой цикл, напишите программу, которая в консоли выводит текстовое поздравление. Программа поздравляет того, чье имя определяется в переменной username:
Happy birthday to you
Happy birthday to you
Happy birthday dear {{username}}
Happy birthday to you
4.	Напишите цикл с confirm, который продолжается при нажатии на Отмена и прерывается при нажатии на Ok.

5.	В окно prompt вводится число. Напишите цикл, в котором суммируются все нечетные числа до диапазона, введенного пользователем. Результат отобразите в окне alert.

6.	Напишите бесконечный цикл, который прерывается при помощи команды break, когда Math.random() > 0.9. Выведите в окно alert случайное число, прервавшее цикл, и количество итераций цикла.

7.	Используя вложенные циклы, распечатайте в консоли значения таблицы умножения: 1х1=1, 1x2=2 ... 2x1=2, 2x2=4... 



8.	С помощью цикла forс пустым телом сформируйте строку, представляющую из себя ряд Фибоначчи: 0 1 1 2 3 5 8 13... 

9.	Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до тех пор, пока не будет нажата Отмена. После выхода из цикла распечатайте количество введенных чисел, их общую сумму и среднее арифметическое.

10.	Напишите проверку пароля, введенного пользователем (заведомо определите пароль). Если введенный пароль правильный, то программа выдает сообщение “Вы успешно авторизованы”. Если пароль неправильный, программа снова выдает запрос пароля – до тех пор, пока пользователь не введет правильный пароль или не нажмет Отмена. В случае отмены авторизации, выдать окно подтверждения с текстом: “Вы уверены, что хотите отменить авторизацию?”. Если ответ утвердительный, тогда выдать сообщение “Вы отменили авторизацию”, если ответ отрицательный, тогда снова выдать запрос пароля
11.	Напишите цикл от 1 до 50, в котором будет выводиться поочередно числа от 1 до 50, но есть условия:

- если число делится на 3 без остатка, то выводить не это число, а слово «Fizz»;
- если число делится на 5 без остатка, то выводить не это число, а слово «Buzz»;
- если число делится и на 3 и на 5 без остатка, то выводить не это число, а слово «FizzBuzz»;
*/