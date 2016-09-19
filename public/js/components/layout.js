const EX = require("../vdom_es6");
function alertIt(){
  alert("a function that does stuff")
}
const Layout = EX.component({
  componentName: 'list1',
  state: {},
  componentRender: (props) => {
  	return (
	  	<ul class="nice-list boxed-list">
		<li data-stuff="88" data-what="http://www.imdb.com/title/tt0078748/?ref_=nv_sr_2">Hey<span class="float-right">大姐</span></li>
		<li data-stuff={ props.u} onClick={alertIt}>{props.say}</li>
		<li>Hey3</li>
	</ul>

  	)
  }
});

module.exports = Layout;