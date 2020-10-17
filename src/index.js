
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result;
  if (Array.isArray(matrix)){
    result =matrix.map((item,index)=> index%2? item.sort((a,b)=>b-a):item.sort((a,b)=>a-b));
    result = matrix.flat(Infinity);
    return result;
  } 

  return [];

 
}
