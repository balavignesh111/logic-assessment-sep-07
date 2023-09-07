'use script';

// 21.You are given a number. Write a program that checks if the number is a prime number (i.e., only divisible by 1 and itself) and displays the result on a web page.

const checkPrimeNo = (num)=>{
  let count=0;
  if(num === 1){
    return `${num} is neither a prime nor composite number`
  }
  for(let i=2;i<10;i++){
    if(i === num){
      continue;
    }else if(num % i === 0){
      count += 1;
      if(count > 2){
        break;
      }
    }
  }
  if(count === 0){
    num % 1 === 0 ? count++ : '';
    num % num === 0 ? count++ : '';
  }
  return (count === 2) ? `${num} is a Prime number` : `${num} is not a Prime number`;
}

console.log(`The answer for 1st problem is -->\n${checkPrimeNo(61)}`);

/* 22.You are given a list of numbers. Write a program that finds the second smallest number
in the list and displays the result on a web page. */
const findSmallNo = (arr)=>{
  let small = arr[0];
  arr.forEach(element => {
    if(small > element){
      small = element;
    }
  });
  return small;
}

const findSecondSmallNo = (arr)=>{
  const smallestNo = findSmallNo(arr);
  let secondSmallNo = arr[0];
  arr.forEach(element => {
    if(secondSmallNo > element && element !== smallestNo){
      secondSmallNo = element;
    }
  });
  return secondSmallNo;
}

console.log(`The answer for 2nd problem is -->\n${findSecondSmallNo([10,5,20,3,8,15])}`);

/* 23.You are given a list of words. Write a program that sorts the words in alphabetical
order and displays the result on a web page. */

const sortWord = (arr) =>{
  return arr.sort();
}

console.log(`The answer for 3rd problem is -->\n${sortWord(['g','h','r','n','d','d'])}`);

/* 24.You are given two arrays of numbers. Write a program that finds the common elements
between the two arrays and displays the result on a web page. */

const commonElement = (arrOne,arrTwo)=>{
  let arr =[];
  if(arrOne.length === arrTwo.length){
    arr = arrOne.filter((ele)=>{
      if(arrTwo.includes(ele)){
        return ele;
      }
    })
  }else if(arrOne.length > arrTwo.length){
    arr = arrOne.filter((ele)=>{
      if(arrTwo.includes(ele)){
        return ele;
      }
    })
  }else{
    arr = arrTwo.filter((ele)=>{
      if(arrOne.includes(ele)){
        return ele;
      }
    })
  }
  return arr;
}

console.log(`The answer for 4th problem is -->\n${commonElement([1,2,3,4,5],[3,4,5,6,7])}`);


/* 25.Write a program to add a new row to the table when a user fills out a form and clicks on
the submit button. */
// select elements
const username = document.getElementById('name');
const age = document.getElementById('age');
const city = document.getElementById('city');

const errorName = document.getElementById('err-name');
const errorAge = document.getElementById('err-age');
const errorCity = document.getElementById('err-city');

const tableContainer = document.getElementById('table-box');
const formEle = document.getElementById("form");

// gv
let isValidated = true;

// validate function
const validate = ()=>{
  if(!username.value){
    console.log(username.value)
    isValidated = false;
    errorName.style.display = "block";
  }else{
    errorName.style.display = "none";
  }
  if(!age.value){
    isValidated = false;
    errorAge.style.display = "block";
  }else{
    errorAge.style.display = "none";
  }
  if(!city.value){
    isValidated = false;
    errorCity.style.display = "block";
  }else{
    errorCity.style.display = "none";
  }
  if(isValidated){
    addData(username.value,age.value,city.value);
  }
}

const addData = (name,age,city)=>{
  console.log(tableContainer)
  const tableData = document.createElement('tr');
  tableData.innerHTML = `<td>${name}</td>
  <td>${age}</td>
  <td>${city}</td>`
  tableContainer.appendChild(tableData);
  emptyValue();
}

const emptyValue = ()=>{
  username.value = "";
  age.value = "";
  city.value = "";
}

formEle.addEventListener('submit',(event)=>{
  event.preventDefault();
  isValidated = true;
  validate();
})

/* 26.You are given a string. Write a program that replaces all occurrences of a particular
character with another character and displays the result on a web page. */

const replaceCharacter = (str,oldChar,newChar)=>{
return str.replaceAll(oldChar,newChar);
}

console.log(`The answer for 6th problem is -->\n${replaceCharacter("Skill sufuri","u","a")}`);

/* 27.You are given a list of integers representing weights of items and their corresponding
values. Write a program to find the maximum value that can be obtained by selecting a subset of
items with a total weight not exceeding a given limit, and display the result on a web page. */


/* 28.You are given a string. Write a program that converts every letter to its corresponding
ASCII value and displays the result on a web page. */

const asciiList = (str) =>{
  let strList = str.split('');
  strList = strList.map((ele)=>{
    return ele.charCodeAt(0);
  })
  return strList;
}

console.log(`The answer for 8th problem is -->\n${asciiList("Kovai")}`);

/* 29.You are given an array of numbers. Write a program that finds the difference between
the largest and smallest numbers in the array and displays the result on a web page. */

const arrDifference = (arr)=>{
  return (Math.max(...arr) - Math.min(...arr));
}

console.log(`The answer for 9th problem is -->\n${arrDifference([2,5,1,8,3,9])}`);

/* 30.You are given a 2D array of integers. Write a program to find the longest increasing
subsequence in the array and display the result on a web page. */