const EX = require("../vdom_es6");
const AppState = require("../data.js");
const FWlist = require("./fwlist.js");
const Graph = require("./graph.js");
const Details = require("./details.js");


const Layout = {
   state: AppState,
   githubHook: (res) => {
      console.log('成龍大哥');
      console.log('responseAholic', res);
      EX.SetState({
         data: res,
         loaded: true,
         frameworks: ['React', 'Angular', 'Vue', 'Inferno', 'Ember']
      });

   },
   render: () => {
      let {
         frameworks,
         data,
         loaded,
         activefw,
         details,
         compDisplay
      } = Layout.state;


      return (
         <div>
        <div class={ loaded ? "hide-elm" : "loader" }>Getting Data...</div>
         <div class={ (loaded &&  compDisplay === "list" ) ? "ok" : "hide-elm"}>
          <FWlist ex_data={data} ex_app={Layout.state} ex_loaded={loaded} />
          </div>
          <div class={ compDisplay === "details" ? "fadeinto" : "hide-elm"}>
            <Details ex_data={details.data}  ex_framework={details.onview} />
          </div>
      </div>
      )
   }
};
EX.rootComponent = Layout;
EX.SetState = (() => {
   return (payload) => {
      Layout.state = Object.assign({}, Layout.state, payload);
      EX.objectChange(Layout.render());
      console.log(Layout.state);
   }
})();



module.exports = Layout;