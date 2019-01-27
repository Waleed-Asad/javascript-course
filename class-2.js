//difference
var arr1 = ['a','b','c', 'd','f'];
var arr2 = ['e','a','d','r','x','y'];

function findDifference(array1,array2)
{
    var finalArr = [...array1];
    finalArr.map((array1Values,array1i) => {
        array2.map((array2Values,array2i) =>{
            if(array1Values === array2Values)
            {
                finalArr.splice(array1i,1);
                return;
            }
       })
    });
    return finalArr;
}


console.log('Difference: ',findDifference(arr1,arr2));