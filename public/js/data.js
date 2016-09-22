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
   graph: {
      type: "bar",
      metrics:[
      {m:"create rows",m2:"create rows",  on: false},
      {m: "replace all rows", m2: "replace all",on: true},
      {m: "partial update",m2: "partial update", on: false},
      {m: "select row",m2: "select row", on: true},
      {m: "swap rows",m2: "swap rows",on: false},
      {m: "remove row", m2: "remove row", on: false},
      {m: "create many rows", m2: "create 1000 rows", on: false},
      {m: "append rows to large table",m2: "append to table",on: false},
      {m: "clear rows", m2:"clear rows", on: true},
      {m:"clear rows a 2nd time", m2:"repeat clear rows", on: false}]
   },
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