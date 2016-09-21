const EX = require("../vdom_es6");
const FWlist = require("./fwlist.js");



const Layout = {
   state: {
      data: {},
      loaded: false,
      frameworks: []
      
   },
   githubHook:  (res) => {
      console.log('成龍大哥');
      console.log('responseAholic', res);
      Layout.state = Object.assign({}, Layout.state, {data: res,  loaded: true,  frameworks: ['React', 'Angular','Vue', 'Inferno', 'Ember']});
      console.log(Layout)
      console.log(Layout.state)
      EX.objectChange(Layout.render());
   },
   render: () => {
      let {frameworks, data, loaded} =  Layout.state;
 
   
      return (
        <div>
        <div class={ loaded ? "hide-elm" : "loader" }>Getting Data...</div>
         <div class={ loaded ? "ok" : "hide-elm"}>
          <FWlist ex_data={data} ex_loaded={loaded} />
          </div>
      </div>
      )
   }
};




module.exports = Layout;