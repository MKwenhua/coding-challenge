const EX = require("../vdom_es6");
const GitRepo = require("./gitlist.js");
const sortBy = require('sort-by');

const getAvatar = (data, loaded, app, sortwith) => {
   if (!loaded) return [];

   return Object.keys(app.fwList).map((itm) => {
      let w = app.fwList[itm];
      w.framework = itm;
      return w;

   }).sort(sortBy(sortwith)).map((ob) => {
      let w = data[ob.framework];
      w.stats = ob;
      return <GitRepo ex_data={w} ex_app={app}  ex_stars={w.general.stargazers_count} ex_framework={ob.framework} />
   });
}
let sortList = (num) => {
   return () => {
      EX.SetState({
         list: {
            order: num
         }
      });
   }
};

const FWlist = EX.component({
   componentName: 'fwlist',
   state: {},
   componentRender: (props) => {
      let {
         ex_data,
         ex_loaded,
         ex_app
      } = props;
      ex_data = ex_data ? ex_data : {};


      let gitRepos = getAvatar(ex_data, ex_loaded, ex_app, ex_app.list.order);
      console.log('gitRepos', gitRepos)
      return (
         <div class="col-xs-12">
         <div class="top-headline" >
         Frameworks
         </div>
         <div class="list-by">
         <div onClick={sortList('created')} class={ ex_app.list.order === 'created' ? "sort-by selected" : "sort-by"}>
          Oldest
         </div>
         <div onClick={sortList('-created')} class={ ex_app.list.order === '-created' ? "sort-by selected" : "sort-by"}>
          Newest
         </div>
         <div onClick={sortList('-stars')}  class={ ex_app.list.order === '-stars' ? "sort-by selected" : "sort-by"}>
          Stars
         </div>
         <div  onClick={sortList('-size')} class={ ex_app.list.order === '-size' ? "sort-by selected" : "sort-by"}>
          Largest First
         </div>
          <div  onClick={sortList('size')} class={ ex_app.list.order === 'size' ? "sort-by selected" : "sort-by"}>
          Smallest First
         </div>
          <div  onClick={sortList('perf')} class={ ex_app.list.order === 'perf' ? "sort-by selected" : "sort-by"}>
          Performance 
         </div>
         </div>
         <ul class="nice-list boxed-list" >
           {gitRepos}
        </ul>
     </div>
      )
   }
});

module.exports = FWlist;