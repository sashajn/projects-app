import React,{Component} from 'react';
import './App.css';

class Project extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="project">
                  <div className="project-body">
                    <i className="far fa-times-circle todo-remove"></i>
                    <div className="project-name">
                        {this.props.projectname}
                    </div>
                    <div className="project-description">
                        {this.props.type}
                    </div>
                  </div>
            </div>
        );
    }

}

export default Project;