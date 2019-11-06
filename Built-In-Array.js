// #5. URLify a string

function URLify(string){
    let result = [];
    for (let i = 0; i < string.length; i++){
        if (string[i] == ' '){
            result.push('%20')
        } else {
            result.push(string[i])
        }
    }

    return result.join('')
}

console.log(URLify('tauhida parveen'))
console.log(URLify('www.thinkful.com /tauh ida parv een'))

// Time complexity: O(n)
// Explanation: Is dependent on the size of the string



// #6. Filtering an Array

function filter(array){

    let results = [];

    for (let i = 0; i < array.length; i++){
        if(array[i] >= 5) {
            results.push(array[i])
        }
    }

    return results;
}

console.log(filter([5, 4, 6, 2, 7]))

// Time Complexity: O(n)
// Explanation: Depends on the size of the array and has to iterate through each expression