const EX = require("../vdom_es6");
const frameWorkPrefs = require("./perf_data.js");
const GraphINTERFACE = require("../graphs/graphs.js");
console.log('frameWorkPrefs', frameWorkPrefs);

const Graph = EX.component({
   componentName: 'graph',
   state: {},
   componentRender: (props) => {


      return (
         <div class="col-xs-12">
   

     </div>
      )
   }
});

module.exports = Graph;