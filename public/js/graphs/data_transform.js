const frameWorkPrefs = require("../components/perf_data.js");
console.log('frameWorkPrefs', frameWorkPrefs);
const Metrics = [{
  m: "create rows",
  on: false
}, {
  m: "replace all rows",
  on: true
}, {
  m: "partial update",
  on: true
}, {
  m: "select row",
  on: true
}, {
  m: "swap rows",
  on: false
}, {
  m: "remove row",
  on: false
}, {
  m: "create many rows",
  on: false
}, {
  m: "append rows to large table",
  on: false
}, {
  m: "clear rows",
  on: false
}, {
  m: "clear rows a 2nd time",
  on: false
}];

const perfKeys = ['React', 'Angular1', 'Angular2', 'Vue', 'Inferno', 'Ember'];
const colorKeys = {
  Angular1: "#1976D2",
  Angular2: "#D81159",
  React: "#00d8ff",
  Vue: "#4fc08d",
  Ember: "#dd6a58",
  Inferno: "#3c4859"
}
const bar = (metrics) => {
  return perfKeys.map((keyy, ii) => {
    let p = frameWorkPrefs[keyy];
    return {
      type: "bar",
      showInLegend: true,
      legendText: keyy,
      color: colorKeys[keyy],
      dataPoints: metrics.map((type, ii) => {
        return {
          y: p[type].v,
          label: type
        }
      })
    }
  });
}

module.exports = {
  metrics: Metrics,
  bar: bar
}