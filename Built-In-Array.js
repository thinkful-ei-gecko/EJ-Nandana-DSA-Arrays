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
// because it has nested arrays

function mergeArray(array1,array2){
  let newarray=[...array1,...array2];
  
 return newarray.sort(function(a,b){return a-b})

}

console.log(mergeArray([1, 3, 6, 8, 11],[2, 3, 5, 8, 9, 10]));

//Time complexity O(n^2)