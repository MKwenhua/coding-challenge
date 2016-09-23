const frameWorkPrefs = require("../components/perf_data.js");
console.log('frameWorkPrefs', frameWorkPrefs);

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
  bar: bar
}