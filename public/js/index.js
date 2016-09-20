const theXHRstuff = require('./xhrRequests.js');

const EX = require("./vdom_es6");
const Yo = require("./components/list.js");
var whenItArrives = (res) => {
   console.log('成龍大哥');
   console.log('responseAholic', res);
}

let appSet = {
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
      bool: 1
   },
   render: () => {
      let {
         anArray,
         something,
         bool
      } = appSet.state;
      let theclass = bool ? "ok-cool" : "bold-yikes";
      let heyaRARY = anArray.map((itm) => {
         return <Yo u={itm.u} say={itm.say} />
      });
      return (
         <div>
      <h2 class={theclass}>yo yo yo</h2>
    {heyaRARY}
     {something}
  </div>
      )
   }
};


EX.createComponent(
   appSet.render(), document.getElementById('container'));


EX.viewObjects();
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
   bool: 0
};
appSet.state = Object.assign({}, appSet.state, ok);

setTimeout(function() {
   EX.objectChange(appSet.render());
}, 3000);
theXHRstuff(whenItArrives);
