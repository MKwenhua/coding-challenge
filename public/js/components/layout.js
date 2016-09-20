const EX = require("../vdom_es6");
const Yo = require("./list.js");


const Layout = {
   state: {
      anArray: [{
         u: '爆拉肚子',
         say: "Angular"
      }, {
         u: 344,
         say: "React"
      }, {
         u: 555,
         say: "Vue"
      }],
      something: "A sentence something",
      bool: 1,
      loaded: false
   },
   render: () => {
      let {
         anArray,
         something,
         bool,
         loaded
      } = Layout.state;
      let theclass = bool ? "ok-cool" : "bold-yikes";
      let heyaRARY = anArray.map((itm) => {
         return <Yo u={itm.u} say={itm.say} />
      });
      return (
        <div>
        <div class={ loaded ? "hide-elm" : "loader" }>Getting Data...</div>
         <div class={loaded ? "ok" : "hide-elm"}>
          <h2 class={theclass}>yo yo yo</h2>
            {heyaRARY}
             {something}
          </div>
      </div>
      )
   }
};

var ok = {
   something: "A sentence state changed",
   anArray: [{
      u: 'Angular',
      say: "爆拉肚子"
   }, {
      u: 344,
      say: "React Something"
   }, {
      u: 8292,
      say: 'Vue Something 2'
   }],
   loaded: true,
   bool: 0
};


setTimeout(function() {
   Layout.state = Object.assign({}, Layout.state, ok);
   EX.objectChange(Layout.render());
}, 3000);
module.exports = Layout;