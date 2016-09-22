const CanvasJS = require('../vendor/canvasjs.min.js');

module.exports = () => {
   return (data) => {
      const chart = new CanvasJS.Chart("chartContainer", {
         title: {
            text: "Basic Column Chart"
         },
         data: [{
            type: "column",
            dataPoints: [{
               y: 45,
               label: "Apple"
            }, {
               y: 31,
               label: "Mango"
            }, {
               y: 52,
               label: "Pineapple"
            }, {
               y: 10,
               label: "Grapes"
            }, {
               y: 46,
               label: "Lemon"
            }, {
               y: 30,
               label: "Banana"
            }, {
               y: 50,
               label: "Watermelon"
            }, {
               y: 28,
               label: "Coconut"
            }, {
               y: 45,
               label: "Lychee"
            }, {
               y: 15,
               label: "Palm"
            }, {
               y: 48,
               label: "Orange"
            }, {
               y: 38,
               label: "Muskmelon"
            }, {
               y: 41,
               label: "Strawberry"
            }, {
               y: 25,
               label: "Kiwi"
            }, {
               y: 50,
               label: "Guava"
            }, ]
         }]
      });
      chart.render();

   }
}
}