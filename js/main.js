// Кнопка мобильного меню сворачивания
document.getElementById('button_mobile__menu').onclick = function () {
    document.getElementById('button_mobile__menu').classList.toggle('active');
    document.getElementById('block_mobile__menu').classList.toggle('active');
};

document.addEventListener("DOMContentLoaded", function line1() {
    setTimeout(() => document.querySelector('.line-1').classList.add('active'), 500);
});

document.addEventListener("DOMContentLoaded", function line2() {
    setTimeout(() => document.querySelector('.line-2').classList.add('active'), 750);
});

document.addEventListener("DOMContentLoaded", function line3() {
    setTimeout(() => document.querySelector('.line-3').classList.add('active'), 1000);
});

document.addEventListener("DOMContentLoaded", function line4() {
    setTimeout(() => document.querySelector('.line-4').classList.add('active'), 1250);
});

document.addEventListener("DOMContentLoaded", function line5() {
    setTimeout(() => document.querySelector('.line-5').classList.add('active'), 1500);
});

// ДЗ Появление блока через 1 минуту и исчезновение через две минуты после появления
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.popup__close').onclick = function () {
        document.querySelector('.contain-popup').style.display = "none";
    };

    if (localStorage.getItem("popUpVision") !== 'none') {
        setTimeout(() => document.querySelector('.contain-popup').style.display = "flex", 1000);
    } else {
        return false;
    }

    localStorage.setItem("popUpVision", "none");

    setTimeout(() => document.querySelector('.contain-popup').style.display = "none", 180000);
});

// Появление кнопки наверх при  скроле на 262 пикселя
window.addEventListener('scroll', function () {
    if (pageYOffset > 262) {
        document.querySelector('.to__top').style.opacity = "1";
    } else {
        document.querySelector('.to__top').style.opacity = "";
    }
});

// Нативный Плавный скролл
let smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        let id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}
;

// Функция валидации
function validate() {
    let userName = document.getElementById("in_name");
    let userMail = document.getElementById("in_email");

    if (!userName.value) {
        userName.style.borderBottom = "1px solid red";
        document.getElementById("in_name_error").style.display = "block";
        return false;
    } else {
        userName.style.borderBottom = "1px solid green";
        document.getElementById("in_name_error").style.display = "none";
    }

    if (!userMail.value) {
        userMail.style.borderBottom = "1px solid red";
        document.getElementById("in_email_error").style.display = "block";
        return false;
    } else {
        userMail.style.borderBottom = "1px solid green";
        document.getElementById("in_email_error").style.display = "none";
        window.location.href = 'success.html';
    }
    return false;
}

// Парс файла XML
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "uploads/works.xml",
        dataType: "xml",
        success: xmlParser
    })
});

function xmlParser(xml) {
    $(xml).find("work").each(function () {
        $(".links").append(
            '<div class="links__info"><div class="links__info_text">' +
            '<a href=" ' + $(this).find("link").text() + ' " target="_blank">' + $(this).find("name").text()+ '</a>' +
            '</div>' +
            '<div class="links__info_year">'+ $(this).find("date").text() +'</div>' +
            '</div>'
        );
    });
}


$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.single-item').slick({
    infinite: true,
    speed: 20,
// определяем скорость перелистывания

    slidesToShow: 1,
//количество слайдов для показа
    centerMode: true,
//текущий слайд по центру
    dots: true,
    nav: true,
    variableWidth: true
//установим переменную ширину
});

// заменим цвет фона на красный,
//document.body.style.background = "red";

// а через 5 секунд вернём как было
//setTimeout(() => document.body.style.background = "", 5000);


// 1. Получить элемент по ID и Изменить его свойство
// document.getElementById('Motion').style.backgroundColor = "#f00";


// 2. Получить элемент по классу и Изменить его свойство
// document.querySelector('.contact__info_text').style.backgroundColor = "#f00";


// 3. Получить элемент по тегу и Изменить его свойство
// document.getElementsByTagName('h1')[2].style.color = "#f00";
// let ggg = document.getElementsByTagName('h1');
// console.log(typeof ggg);


// 4. Получить элемент по принципу ребенок/родитель и Изменить его свойство
// document.querySelector('.links__info_text').parentNode.style.backgroundColor = "#f00";


// Учебные примеры
// let a = 'Vasia';
// let b = "Ivanov";
// console.log(a + ' ' + b);


// let user = {};  // Создаем объект
// console.log(user); // Должно  вывести


// let user = {     // объект
//     name: "Vasia",  // под ключом "name" хранится значение "Vasia"
//     last_name: "Ivanov",  // под ключом "last_name" хранится значение "Ivanov"
//     "User Nickname": "Terminator",  // под ключом "last_name" хранится значение "Terminator"
//     age: 30,     // под ключом "age" хранится значение 30
// };

// console.log(user); // Должно  вывести объект
// console.log(user.name); // Должно  вывести Vasia
// console.log(user.last_name); // Должно  вывести Ivanov
// console.log(user["User Nickname"]); // Должно  вывести Terminator
// console.log(user.age); // Должно  вывести 30

// delete user.age;
// console.log(user.age); // Должно  вывести undefined
// console.log(user); // Должно  вывести объект

// user.city = "Sumy"; // Добавляем свойство город
// console.log(user); // В объект должно добавиться свойство city: "Sumy"

// let new_user = user; // ссылка на объект
// console.log(user);
// console.log(new_user); //

// new_user.cauntry = "Ukraine";
// console.log(new_user);

// console.log(user == new_user);
// console.log(user === new_user);


// let myNewArray = new Array();
// let myNewArray = [];
// console.log(myNewArray);

// let fruits = ["Яблоко", "Апельсин", "Слива"];
//
// console.log( fruits); // Массив
// console.log( fruits[0] ); // Яблоко
// console.log( fruits[1] ); // Апельсин
// console.log( fruits[2] ); // Слива

// fruits[2] = 'Груша'; // теперь ["Яблоко", "Апельсин", "Груша"]
// console.log( fruits[2] ); // Груша
// console.log( fruits ); // Груша

// console.log( fruits.length ); // 3

// for (let i = 0; i < fruits.length; i++) {
//     console.log( fruits[i] );
// }


// for (let keys in fruits) {
//     console.log( fruits[keys] ); // Яблоко, Апельсин, Груша
// }
//
// function message() {
//     console.log( 'Привет Мир!' );
// }
// message();
//
//
// function sum(a, b) {
//     return a + b;
// }
//
// let result = sum(1, 2);
// let result2 = sum(88, 2);
// let result3 = sum(12, 8);
// let result4 = sum(55, 44);
// console.log( result ); // 3
// console.log( result2 ); // 3
// console.log( result3 ); // 3
// console.log( result4 ); // 3


// let user = {
//     first_name: 'Vasia',
//     last_name: 'Ivanov',
//     nick_name: 'Terminator',
//     email: 'VasiaTerminator@gmail.con',
//     password: 'Qq12345*'
// };
//
// let user_admin = {
//     __proto__:user,
//
//     changePassword: true,
//     changeLogin: true,
//     blockUser: true,
//     deleteUser: true,
// };
//
// console.log(user);
// console.log(user_admin);
// console.log(user_admin.nick_name);
// console.log(user_admin.changePassword);


// class User {
//     constructor(first_name, password) {
//         this.first_name = first_name;
//         this.password = password;
//     }
//
//     validatePass() {
//         if (this.password.length <= 7) {
//             console.log('Вы ввели слишком слабый пароль');
//         } else {
//             console.log('Все ок продолжаем дальше');
//         }
//     }
// }
//
// let name1 = 'Vasia1';
// let pass1 = '12345';
//
// let name2 = 'Vasia2';
// let pass2 = '123456';
//
// let name3 = 'Vasia3';
// let pass3 = '1234578';
//
// let name4 = 'Vasia4';
// let pass4 = '1234567890';
//
//
// let registerUser1 = new User(name1, pass1);
// let registerUser2 = new User(name2, pass2);
// let registerUser3 = new User(name3, pass3);
// let registerUser4 = new User(name4, pass4);
//
//
// console.log(registerUser1);
// console.log(registerUser1.validatePass());
//
// console.log(registerUser2);
// console.log(registerUser2.validatePass());
//
// console.log(registerUser3);
// console.log(registerUser3.validatePass());
//
// console.log(registerUser4);
// console.log(registerUser4.validatePass());

// document.querySelector(".works__left").addEventListener("click", function () {
//     console.log('1');
// });
//
// document.querySelector(".works__left").addEventListener("dblclick", function () {
//     console.log('1');
// });
//
// document.querySelector(".works__left").addEventListener("mousemove", function () {
//     console.log('1');
// });
//
// document.querySelector(".ed-vk").addEventListener("mouseover", function () {
//     // console.log('1');
//     document.querySelector(".top__line_center-logo").style.opacity = "0";
// });
//
// document.querySelector(".ed-vk").addEventListener("mouseout", function () {
//     // console.log('1');
//     document.querySelector(".top__line_center-logo").style.opacity = "";
// });

//
// document.querySelector(".project").addEventListener("mouseover", function () {
//     // console.log('1');
//     document.body.style.background = "red";
// });
//
//
// document.querySelector(".project").addEventListener("mouseout", function () {
//     // console.log('1');
//     document.body.style.background = "";
// });


// document.querySelector(".works__left").addEventListener("mouseenter", function () {
//     // console.log('1');
//     document.body.style.background = "red";
// });
//
//
// document.querySelector(".works__left").addEventListener("mouseleave", function () {
//     // console.log('1');
//     document.body.style.background = "";
// });