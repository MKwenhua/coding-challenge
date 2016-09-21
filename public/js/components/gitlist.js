const EX = require("../vdom_es6");

const GitRepo = EX.component({
  componentName: 'list2',
  state: {},
  componentRender: (props) => {
    let { ex_framework, ex_data } = props;
    let g = ex_data.general;
    let theFunc = () =>{
       alert(ex_framework)
    }
  	return (
	  <li class="yikes" onClick={theFunc} >
    <img class="li-img" src={g.owner.avatar_url}   />
    
    <strong>{ex_framework}</strong>
    <span class="float-right"><i class="fa fa-star" aria-hidden="true"></i></span>
    <span class="float-right">{g.stargazers_count}</i></span>
    </li>

  	)
  }
});

module.exports = GitRepo;