// create array of unordered data
const data=[2,4,67,8,44,6,12,20,10];
// create a function that will search a num from the array of data
function searchNumber(data,num){
    for (let index = 0; index < data.length; index++) {
        var attempt=0;
        // console.log(data[index]);   
        if(data[index]===num){ //check data elements if equal to  num being search
            return `${num} is located at index of ${index} with ${attempt} attempts!`;
        }    
        attempt++; 
    }
    // print attempts even if not found
    return `${num} number is not found with ${attempt +1} attempts...`;

}
console.log(searchNumber(data,8));
console.log(searchNumber(data,10));
// searchNumber(data,0);
// a better version of searching
function searchNumberV2(data,num){
    let length = data.length;
    let left = 0;
    let right = length - 1;
    let index = -1;
    while(left<=right ){
        // check left side
        if(data[left]===num){ 
            index=left;
            return `${num} is found at index ${index} with ${left + 1} attemp/s!`
        }  
        // check right side
        if(data[right]===num){ 
            index=right;
            return `${num} is found at index ${index} with ${length-right} attemp/s!`
        }  
        // do the following after execution of above code
        left++;
        right--;
    }
    // returns the code if note found
    if(index == -1){
        return `${num} is not found with ${left} attempts!`
    }
}

console.log(searchNumberV2(data,8));
console.log(searchNumberV2(data,10));