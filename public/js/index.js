const theXHRstuff = require('./xhrRequests.js');

const EX = require("./vdom_es6");
const Yo = require("./components/list.js");
var whenItArrives = (res) => {
	console.log('成龍大哥');
	 console.log('api responose',res);
}

let appSet = {
  state: {
  	yoArray: [{u:'爆拉肚子', say:"say thing 1"} ,{u: 344, say:"say thing 2"} ],
  	bool: 1
  },
  render: () => {
  	let {yoArray,  bool} = appSet.state;
  	let theclass = bool ? "ok-cool" : "bold-yikes";
   /* let heyaRARY = (arr) => {arr.map((itm) => {
  		return <Yo u={itm.u} say={itm.say} />
  		})
	};*/
  	//console.log('heyaRARY', heyaRARY)
  	return (
  	<div>
    	<h2 class={theclass}>Headline something</h2>
		<Yo u={333} say="ok" />
		
	</div>
  		)
  }
};


EX.createComponent( 
    appSet.render()
	, document.getElementById('container'));


EX.viewObjects();
var ok = {yoArray: [{u:'爆拉肚子', say:"say thing 1"} ,{u: '1999', say:"say thing 2"}, {u: 'stuff', say: 'theThird'}], bool: 0};
appSet.state =  Object.assign({}, appSet.state, ok);
EX.objectChange(appSet.render());
theXHRstuff(whenItArrives);
console.log('event list', EX.events)