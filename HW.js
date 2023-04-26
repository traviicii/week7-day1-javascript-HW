//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    // loop dog sting, if name is there return matched to console, otherwise return not matches
    // loops
    // For Loop Syntax-- for keyword(counter; condion; incremntation/deincrimentation)
    // Here the ; matters!
    for(i =0; i < dog_names.length; i++){
        console.log(dog_string.search(dog_names[i])>=0?"Matched dog_name": "No Matches")
    }
    }

//Call method here with parameters


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i=0; i<arr.length; i++){
        if(i % 2 == 0){
            arr.splice(i,1,"even index")
        }
    }return arr
}

console.log(replaceEvens(given_arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// =======================================================================
// My Codewars problems done in Javascript

// Return Strings
// https://www.codewars.com/kata/55a70521798b14d4750000a4/train/javascript

function greet(name){
    return "Hello, " + name + " how are you doing today?"
  }

// Sum of Positive
//https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
function positiveSum(arr) {
    let nums = 0;
    for(i of arr){
      i > 0 ? nums += i : nums += 0
    }
      return nums;
  }