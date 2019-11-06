// #5. URLify a string

function URLify(string){
  let result = [];
  for (let i = 0; i < string.length; i++){
    if (string[i] == ' '){
      result.push('%20');
    } else {
      result.push(string[i]);
    }
  }

  return result.join('');
}

console.log(URLify('tauhida parveen'));
console.log(URLify('www.thinkful.com /tauh ida parv een'));

// Time complexity: O(n)
// Explanation: Is dependent on the size of the string



// #6. Filtering an Array

function filter(array){

  let results = [];

  for (let i = 0; i < array.length; i++){
    if(array[i] >= 5) {
      results.push(array[i]);
    }
  }

  return results;
}

console.log(filter([5, 4, 6, 2, 7]));

// Time Complexity: O(n)
// Explanation: Depends on the size of the array and has to iterate through each expression


// #7. Max sum in the array

function sum(array){
  let max = 0;
 
  for(let i=0; i < array.length; i++){
    let total =array[i];
    for(let j=i+1; j<array.length; j++){
      total += array[j];
      if (total>max){
        max =total;
      }
          
    }
  
  }
  return max;
}


console.log(sum([4, 6, -3, 5, -2, 1]));

// Time complexity o(n^2)
// Because it has nested arrays


// #8. Merge Arrays

function mergeArray(array1,array2){
  let newarray=[...array1,...array2];
  
  return newarray.sort(function(a,b){return a-b;});

}

console.log(mergeArray([1, 3, 6, 8, 11],[2, 3, 5, 8, 9, 10]));

// Time complexity O(n^2) for cases under 10 >
// Explanation: Haven't gone over O(n log(n))



// #9. Remove Characters

function removeChar(string, remove){
  console.log(remove);
  return string.replace(/[remove]/ig, '');
}

console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

// Time Complexity: O(n)
// Explanation: Directly compares letters


// #10. Products

function product(numbers){

  let total = numbers.reduce((a,b) => a * b);

  let answer = [];

  numbers.forEach(val => answer.push(total/val));

  return answer;

}

console.log(product([1,3,9,4]));

// Time Complexity: O(n)
// Explanation: Depends on the size of the array


// #11. 2D Array

function twoDArray(array){
  const output=[...array];
  let column=[];
  let row=[];
  for(let i=0;i<array.length;i++){
    if(array[i].includes(0)){
      for(let j=0; j<array[i].length;j++){
        if(output[i][j] ===0 && array[i].includes(0)){
          column[j]=true;
          row[i]=true;
        }
      }
    }
    
  }

  for(let i=0; i<output.length;i++){
    for(let j=0;j<output.length;j++){
      if(row[i]|| column[j]){
        output[i][j]=0;
      }
    }
  }
  return output;
}


console.log(twoDArray(
  [[1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]]
));

function stringRotation(str1,str2){
    
}