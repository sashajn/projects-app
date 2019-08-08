import React,{Component} from 'react';
import './App.css';

class Project extends Component{
    constructor(props){
        super(props);
        this.state = {
            updatingProjectName:false,
            updatingType:false,
            projectNameInput: props.projectName,
            typeInput: props.type,
        };
    }

    handleProjectRemoveClick = () =>{
        var id = this.props.id;
        this.props.removeProject(id);
    }
    
    handleProjectNameDoubleClick = (e) =>{
        this.setState({updatingProjectName:true})
    }

    handleProjectNameChange = (e) => {
        this.setState({projectNameInput:e.target.value})
    }

    handleProjectInputBlur = () => {
        var id = this.props.id;
        var data = { 
            projectName: this.state.projectNameInput
        };

        this.props.updateProject(id,data);
        this.setState({updatingProjectName:false});
    }

    handleTypeDoubleClick = (e) => {
        this.setState({updatingType:true})
    }

    handleTypeInputBlur = () => {
        var id = this.props.id;
        var data = {
            type: this.state.typeInput
        };

        this.props.updateProject(id,data);
        this.setState({updatingType:false});
    }

    handleTypeInputChange = (e) => {
        this.setState({typeInput:e.target.value})
    }

    render(){
        return(
            <div className="project">
                  <div className="project-body">
                    <i onClick={this.handleProjectRemoveClick} className="far fa-times-circle todo-remove"></i>
                    <div className="project-name" onDoubleClick={this.handleProjectNameDoubleClick}>
                        
                        {this.state.updatingProjectName ? (<input autoFocus value ={this.state.projectNameInput} onChange = {this.handleProjectNameChange} onBlur={this.handleProjectInputBlur}/>) : this.props.projectName} 
                            
                    </div>
                    <div className="project-description" onDoubleClick={this.handleTypeDoubleClick}>
                        {this.state.updatingType ? (<input autoFocus value ={this.state.typeInput} onChange={this.handleTypeInputChange} onBlur={this.handleTypeInputBlur}/>) :this.props.type}
                    </div>
                  </div>
            </div>
        );
    }

}

export default Project;