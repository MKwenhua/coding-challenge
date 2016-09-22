const EX = require("../vdom_es6");
const GraphINTERFACE = require("../graphs/graphs.js");
const GraphOptions = require("../graphs/data_transform.js");

const makeList = (metrics) => {
  return metrics.map((met, i) => {
    return <li class={met.on ? "metric m-select": "metric"} >{met.m2}</li>
  });
}
let goBackList = () => {

  EX.SetState({
    compDisplay: "list"
  });

};
const Graph = EX.component({
  componentName: 'graph',
  state: {},
  componentRender: (props) => {
    let metricList = makeList(props.ex_metrics);

    return (
      <div class="col-xs-12">
         <ul class="metricsList">
           {metricList}
         </ul>
        <div class="block-button">
        <div onClick={goBackList} class="big-butt cool-button">Back to List</div>
     </div>
     </div>
    )
  }
});

module.exports = Graph;