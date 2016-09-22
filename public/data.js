const AppState = {
   data: {},
   loaded: false,
   frameworks: [],
   compDisplay: "list",
   list: {
      order: '-stars'
   },
   details: {
      onview: null,
      data: {}
   },
   activefw: "none",
   fwList: {
      React: {
         created: 1369412154000,
         stars: '49457',
         size: 133,
         perf: 3
      },
      Angular: {
         created: 1262738077000,
         stars: '52264',
         size: 766,
         perf: 4
      },
      Vue: {
         created: 1375068291000,
         stars: '27558',
         size: 78,
         perf: 2
      },
      Inferno: {
         created: 1422828458000,
         stars: '3885',
         size: 4,
         perf: 1
      },
      Ember: {
         created: 1306366780000,
         stars: '16822',
         size: 746,
         perf: 5
      }
   }

}

module.exports = AppState;