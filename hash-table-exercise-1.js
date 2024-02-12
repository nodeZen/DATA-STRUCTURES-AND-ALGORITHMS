// Findint the first recurrence of an array
function recurrenceElement(array){
    const map = {};
    for(let i = 0 ; i< array.length ; i++){
        if(map[array[i]])
            return array[i];
        else
        map[array[i]] = i;
    }
    return null;
}

console.log(recurrenceElement([1,2,3,4,4,2,4,1]));