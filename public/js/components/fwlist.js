const EX = require("../vdom_es6");
const GitRepo = require("./gitlist.js");

const getAvatar = (data, loaded) => {
  if (!loaded)  return [];

  return Object.keys(data).map((itm) => {
          let w = data[itm]
         return <GitRepo ex_data={w} ex_framework={itm} />
  }) ; 
}

const FWlist = EX.component({
  componentName: 'fwlist',
  state: {},
  componentRender: (props) => {
      let {ex_data, ex_loaded} =  props;
      ex_data = ex_data ? ex_data : {};
      let gitRepos =  getAvatar(ex_data, ex_loaded);
      console.log('gitRepos', gitRepos)
  	return (
      <div class="col-xs-12">
         <div class="top-headline" >
         Frameworks
         </div>
	       <ul class="nice-list boxed-list" >
           {gitRepos}
        </ul>
     </div>
  	)
  }
});

module.exports = FWlist;