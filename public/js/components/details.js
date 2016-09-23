const EX = require("../vdom_es6");
const moment = require('moment');
let goBackList = () => {

  EX.SetState({
    compDisplay: "list"
  });

};

const Details = EX.component({
  componentName: 'details',
  state: {},
  componentRender: (props) => {
    let ex_framework = props.ex_framework;
    if (!ex_framework) {
      return (<div class="col-xs-12">No Data</div>);
    }
    let g = props.ex_data.general;

    return (
      <div class="col-xs-12 margin-t">
         
          <div class="row">
          <div class="col-xs-3 col-sm-2">
              <img class="details-img" src={g.owner.avatar_url}   />
          </div>
           <div class="col-xs-3 col-sm-3">
             <h2 class="fw-name" >
                {ex_framework}
              </h2>
              <strong>First Commit</strong>
              <p>{moment(g.created_at).format('LL')}</p>
          </div>
            <div class="col-xs-7">
              <table class="table">
                 <thead>    
              <tr>
                <th>Subscribers</th>
                <th>Forks</th>
                <th>Watching</th>
                <th>Open Issues</th>
              </tr>
            </thead>
                <tbody>
                  <tr>
                    <td class="bold-green"> { g.subscribers_count}</td>
                     <td class="bold-green">{ g.forks}</td>
                      <td class="bold-green">{ g.watchers}</td>
                      <td class="bold-red">{g.open_issues}</td>   
                  </tr>
                 
                </tbody>
              </table>
      
          </div>
      </div>
      
     
     <div class="row hide-elm">
     
     <div class="col-xs-4 center-text"> Current Issue Count: {g.open_issues}</div>
     </div>
     <div class="block-button">
        <div onClick={goBackList} class="big-butt cool-button">Back to List</div>
     </div>
     </div>
    )
  }
});

module.exports = Details;