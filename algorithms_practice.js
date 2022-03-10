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
    let charsObj = {}
    let maxCHar =""
    let maxCharCount = 0

    for(let i = 0; i < str.length; i++){
        charsObj[str[i]] =++charsObj[str[i]] || 1
    }

    for( let key in charsObj){
        if(charsObj[key] > maxCharCount){
            maxCharCount = charsObj[key]
            maxCHar = key
        }
    }
    return maxCHar
}

// console.log(mostChar("hahhaaaahaa"))

function maximumChar(arr){
    let char
    for(let i = 0; i < arr.length; i++){
        let count = 0;
        for(let j = 0; j < arr.length; j++){
            if(arr[i] === arr[j]){
                count++
            }
        }
        if(count >1){
            char = arr[i]
        }
    }
    return char
}

// console.log(maximumChar("hahhaaaahaa"))

function anagrams(str1, str2){
    if(str1.length != str2.length){
        return false
    }

    const sorted1 = sort(str1.split("")).join("");
    const sorted2 = sort(str2.split("")).join("");

    if(sorted1 === sorted2){
        return true
    }
}

// console.log(anagrams("angel","glean"))