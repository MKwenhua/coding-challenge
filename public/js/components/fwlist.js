const EX = require("../vdom_es6");
const GitRepo = require("./gitlist.js");
const sortBy = require('sort-by');

const getAvatar = (data, loaded, app, sortwith) => {
  if (!loaded) return [];

  return Object.keys(app.fwList).map((itm) => {
    let w = app.fwList[itm];
    w.framework = itm;
    return w;

  }).sort(sortBy(sortwith)).map((ob, i) => {
    let w = data[ob.framework];
    w.stats = ob;
    let ani = 'animation: scaleBig ' + String(0.1 * i) + 's ease-out 0.6s 1 forwards';
    return <GitRepo ex_data={w} ex_app={app} ex_ani={ani} ex_stars={w.general.stargazers_count} ex_framework={ob.framework} />
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
      <div class="list-box">
         <div class="col-xs-12">
         <div class="top-headline" >
         Frameworks
         </div>
         <div class="btn-group list-by-w">
         <div onClick={sortList('created')} class={ ex_app.list.order === 'created' ? "btn btn-info-o tab-sets active" : "btn btn-info-o tab-sets"}>
          Oldest
         </div>
         <div onClick={sortList('-created')} class={ ex_app.list.order === '-created' ? "btn btn-info-o tab-sets active" : "btn btn-info-o tab-sets"}>
          Newest
         </div>
         <div onClick={sortList('-stars')}  class={ ex_app.list.order === '-stars' ? "btn btn-info-o tab-sets active" : "btn btn-info-o tab-sets"}>
          Stars
         </div>
         <div  onClick={sortList('-size')} class={ ex_app.list.order === '-size' ? "btn btn-info-o tab-sets active" : "btn btn-info-o tab-sets"}>
          Largest First
         </div>
          <div  onClick={sortList('size')} class={ ex_app.list.order === 'size' ? "btn btn-info-o tab-sets active" : "btn btn-info-o tab-sets"}>
          Smallest First
         </div>
          <div  onClick={sortList('perf')} class={ ex_app.list.order === 'perf' ? "btn btn-info-o tab-sets active" : "btn btn-info-o tab-sets"}>
          Performance 
         </div>
         </div>
         <ul class="nice-list boxed-list" >
           {gitRepos}
        </ul>
     </div>
        </div>
    )
  }
});

module.exports = FWlist;