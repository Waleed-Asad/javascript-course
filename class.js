//Comparision
var arr1 = ['a','b','c'];
var arr2 = ['e','a','d'];

function compare(array1,array2)
{
    var count = 0;
    array1.forEach(array1Values => {
        array2.forEach(array2Values =>{
            if(array1Values === array2Values)
            {
                count++;
            }
        })
    });
    return count;
}

console.log('Compare: ',compare(arr1,arr2));