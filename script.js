



const personalMovieDB = {
  count: 0 ,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start: function () {
    personalMovieDB.count = +prompt("Скільки фільмів ви вже подивились?" , "");
    while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) ) {
      personalMovieDB.count = +prompt("Скільки фільмів ви вже подивились?" , "");
     }
  },
 
   rememberMyFilms: function (){
  for (let i =0 ; i < 1; i++){
    const a = prompt("Один із останіх переглянутих фільмів?", "").trim() ,
          b = prompt("Яку оцінку йому дасте?" , "").trim() ;
  
        if(a != null && b != null && a != "" && b !="" && a.length < 50){
          personalMovieDB.movies[a] = b;
          console.log("done");
        } else{
          console.log("error");
          i--;
        }
   };
},
  detektPersonalLevl: function (){
  if(personalMovieDB.count < 10){
    console.log("Дуже мало фільмів переглягуто");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Ви переглянули достатньо фільмів");
  } else if (personalMovieDB.count >=30){
    console.log("Ви  кіноман");
  }else {
    console.log("Помилка");
  }
},
   showMyDB: function(hidden){
  if (!hidden){
    console.log(personalMovieDB);
  }
},
toggleVisibleMyDB: function(){
  if(personalMovieDB.privat){
    personalMovieDB.privat = false;
  }else{
    personalMovieDB.privat = true;
  }
},
  writeYourGenres: function(){
  for (i = 1; i < 4 ; i++) {
    
  const genre = prompt(`Який ваш улюблений жанр під номером ${i}`);

  if(genre === '' || genre === null ){
    console.log("Вии ввели не вірні данні!");
    i--;
  }else{
    personalMovieDB.genres[i - 1] = genre;
     }
    };

    personalMovieDB.genres.forEach((item, i) =>{
      console.log(`Ваш улюблений жанр ${i + 1} - це ${item}`)
    });
  }
};




// function calculateVolumeAndArea (length){

//   if(typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)){
//     return "При розрахунках трапилась помилка!";
//   }

// let volume = 0,
//     area = 0;

//     volume = length * length * length; 
    
//     area = 6 * (length * length) ;

//     return `Обєм куба ${volume}, площа всієї поверхні ${area} `;
// };

// console.log(calculateVolumeAndArea(7));

// ____________________________________

// function placeInTrain(place){
//   if(typeof(place) !== 'number' || place < 0 || !Number.isInteger(place)){
//     return "Значення введено не коректно";
//   }
// if(place === 0 || place > 36){
//   return "Таких місць не існує у вагоні";
// }

// for ( i = 4; i <= 36; i = i + 4){
//   if(place <= i){
// return Math.ceil(i / 4);
//   }
// }

// };

// console.log(placeInTrain(40));

// _________________________________________________

// function howTime (minutTotal){
//   if(typeof(minutTotal) !== 'number' || !Number.isInteger(minutTotal)){
//     return "Числа введені не вірно"
//   }
//   if(minutTotal >= 600){
//     return "Більше 10 годин"
//   }

//   const hours = Math.floor(minutTotal / 60);
//   const minut = minutTotal % 60;

//   let strHour = '';

//   switch(hours){
//      case 0:
//       strHour = "годин";
//       break;
//     case 1:
//       strHour = "година";
//       break;
//     case 2:
//     case 3:
//     case 4:
//       strHour = "години";
//       break;
//     default:
//       strHour = "годин";
//   }
      
//  return `Це ${hours} ${strHour} та  ${minut} хвилин`;
// }

// console.log(howTime(260));

// ____________________________________________________

// function getFindMaxNumber(a, b, c, d){
//   if(typeof(a) !== 'number' ||
//      typeof(b) !== 'number' ||
//      typeof(c) !== 'number' ||
//      typeof(d) !== 'number'   ){
//       return 0;
//      }else{
//       return Math.max(a, b, c, d);
//      }
// }
// console.log(getFindMaxNumber(1, 4, 33, 20));

// _________________________________________________

// const personalPlanPetter = {
//   name: "Petter",
//   age: 29,
//   skills: {
//     languages: ["ua", "en"],
//     programingLeng: {
//       js: "10%",
//       php: "20%"
//     },
//     exp: "1 mounth"
//   }
// }

// function showExpiriens (obg){
//   const exp = obg;
//   return `Pettet heve exspirience ${exp}`
// }


// _________________________________________________________

// const family = ["Kete", "Alex", "Lera", "Vlad"];

// function showFamily (arr){
//   while(arr.length <= 0 ){
//     return "Не правильно введені данні"
//   };
//  for(i=0; i <= arr.length; i++){
//   return `Члени сім'ї: ${arr}`;
//  }
// }

// console.log(showFamily(family));

// _____________________________________

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//   arr.forEach(city => {
//   console.log(city.toLowerCase());
// });
// }


// console.log(standardizeStrings(favoriteCities));

// _________________________________________________________

// const shoppingMallData = {
//   shops: [
//       {
//           width: 10,
//           length: 5
//       },
//       {
//           width: 15,
//           length: 7
//       },
//       {
//           width: 20,
//           length: 5
//       },
//       {
//           width: 8,
//           length: 10
//       }
//   ],
//   height: 5,
//   moneyPer1m3: 30,
//   budget: 1000000000
// };


// function isBudgetEnough(data){
  
//   let squart = 0;
//   let volume = 0;

//   data.shops.forEach(shops => {
//     squart += shops.width * shops.length; 
//     console.log(squart);
//   });

//   volume = data.height * squart;
//   console.log(volume);

//   if(data.budget - (volume * data.moneyPer1m3) >= 0){
//     return "Бюджету достатньо!";
//   }else{
//     return "Недостатньо коштів!";
//   }
// };

// console.log(isBudgetEnough(shoppingMallData));

// ______________________________________________

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr){
//   arr.sort ();
  
//   const  a =[], b = [], c = [], rest =[];
  
//   for(i = 0; i <= arr.length; i++){
//     if(i < 3){
//       a.push(arr[i]);
//     }else if(i < 6){
//       b.push(arr[i]);
//     }else if(i < 9){
//       c.push(arr[i]);
//     } else {
//       rest.push(arr[i]);
//     }
//   }
//   return [a, b, c, `Студенти які залишились: ${rest.length === 0 ? '-' : rest.join(',')}`];0
// }

// console.log(sortStudentsByGroups(students));

// _________________________________________________________

// const restorantData = {
//   menu: [
//       {
//           name: 'Salad Caesar',
//           price: '14$'
//       },
//       {
//           name: 'Pizza Diavola',
//           price: '9$'
//       },
//       {
//           name: 'Beefsteak',
//           price: '17$'
//       },
//       {
//           name: 'Napoleon',
//           price: '7$'
//       }
//   ],
//   waitors: [
//       {name: 'Alice', age: 22}, {name: 'John', age: 24}
//   ],
//   averageLunchPrice: '20$',
//   openNow: true
// };

// function isOpen(prop) {
//   let answer = ''; 
//   prop ? answer = 'Закрыто' : answer = 'Открыто';

//   return answer;
// }

// console.log(isOpen(restorantData.openNow))

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//   if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < (+average.slice(0, -1))) {
//       return 'Цена ниже средней';
//   } else {
//       return 'Цена выше средней';
//   }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//   const copy = Object.assign({}, data);

//   copy.waitors[0] = [{name: 'Mike', age: 32}];
//   return copy;
// }

// transferWaitors(restorantData);