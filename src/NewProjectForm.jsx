import React,{Component} from 'react';
import './App.css';


class NewProjectForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            projectnameInput:'',
            typeInput:'',
        }
    }

    handleProjectNameInputChange = (e) =>{
        this.setState({
            projectnameInput:e.target.value
        });
    }
    handleTypeInputChange = (e) =>{
        this.setState({
            typeInput:e.target.value
        });
    }
    handleProjectAddClick = (e) => {
        e.preventDefault();

        var data = {
            projectname: this.state.projectnameInput,
            type:this.state.typeInput
        };
        this.props.addProject(data);
    }

    render(){
        return(
            <div className="project new-project">
            <form className="project-body">
                <div className="form-group">
                        <label htmlFor="content-input">Project name</label>
                        <input onChange={this.handleProjectNameInputChange} type="text" className="form-control" id="projectname-input"/>
                </div>

                <div className="form-group">
                        <label htmlFor="priority-input">Type</label>
                        <input onChange={this.handleTypeInputChange} type="text" className="form-control" id="type-input"/>
                      </div>
            
                <button onClick={this.handleProjectAddClick} type="submit" className="btn btn-primary">Add</button>
                
            </form>
        </div>
        );
    }
}

export default NewProjectForm;