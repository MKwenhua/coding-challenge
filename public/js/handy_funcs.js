const flatten = (a, b) => {
   return a.concat(Array.isArray(b) ? b.reduce(flatten, []) : b);
}
function flattenIteration (arr, flatArr) {
	flatArr = flatArr || [];
	
	var length  = arr.length|0;
	
	for (var index = 0; index < length; index = index + 1){
		var item = arr[index];
		item.constructor === Array ? flatten(item, flatArr) : flatArr[flatArr.length] = item;
	}
	
	return flatArr;
}
module.exports = {
   smoothArray: () => {
      return (nested) => {
         return nested.reduce(flatten, []).filter((ne) => ne !== null && ne !== undefined && ne !== '')
      }
   }
}