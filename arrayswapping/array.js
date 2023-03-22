const initial_array=[1,2,3,4,5,6,7,8,9]

function swap(array,row,column){
    const r= array[row]
    array[row]=array[column]
    array[column]=r

    return array;
}
console.log(swap(initial_array,2,5));