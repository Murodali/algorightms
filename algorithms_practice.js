const arr = [3,1,2,4,8,12,9,0,-1]
/// sorting array
function sort(arr){
    let tmp, done = false;
    while(!done){
        done = true
        for( let i = 1; i < arr.length; i++){
            if(arr[i] < arr[i-1]){
                tmp = arr[i]
                arr[i] = arr[i-1]
                arr[i-1] = tmp
                done = false
            }
        }
    }

    return arr
}
// console.log(sort(arr))

///longest String in array
function longestString(arr){
    let longest =""
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > longest.length){
            longest = arr[i]
        }
    }
    return longest
}

// console.log(longestString(["aaa","bbbbb","weqwdadasda","dss"]))

function mostChar(str){
    
}