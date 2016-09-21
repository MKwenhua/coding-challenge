const flatten = (a, b) => {
   return a.concat(Array.isArray(b) ? b.reduce(flatten, []) : b);
}


module.exports = {
   smoothArray: () => {
      return (nested) => {
         return nested.reduce(flatten, []).filter((ne) => ne !== null && ne !== undefined && ne !== '')
      }
   }
}