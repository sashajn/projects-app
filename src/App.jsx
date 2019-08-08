import React,{Component} from 'react';
import NewProjectForm from './NewProjectForm';
import Project from './Project';
import './App.css';

class App extends Component {
 
  constructor(props){
    super(props);
    this.state = {
        projects:[
            {
                id: 1,
                projectName: 'Pluto app',
                type: 'UX/UI',
            },{
                id: 2,
                projectName: 'Shoes website',
                type: 'UI',
            },{
                id: 3,
                projectName: 'Oil Paints',
                type: 'Branding & package design',
            }
        ]
    }
        
  }

  addProject = (data) => {
      
    console.log(data);
        var newProject ={
        
        id:Date.now(),
        ...data
      };

      var projects = [newProject,...this.state.projects];
      this.setState({
          projects: projects
      });
  }

  removeProject = (id) => {
      var projects = this.state.projects;
      var filtered = projects.filter((project) => {
        return project.id !== id;
      });

      this.setState({
        projects: filtered
      });

  }

  updateProject = (id,data) => {
      var projects = this.state.projects;
      var index = projects.findIndex(function(project){
          return project.id == id;
      });

      var updatedProject = {...projects[index],...data};
      projects[index] = updatedProject;

      this.setState({projects:projects});
  }

 render(){
  return (
    <div className="App">
     <div className="wrap">
      <div className="container">
          <div className="projects">

            {
                this.state.projects.map((project) =>{

                    var projectProps = {
                        ...project,
                        key: project.id,
                        removeProject: this.removeProject,
                        updateProject: this.updateProject,
                    };
                    console.log(project)
                    return(
                        <Project {...projectProps}/>
                    )
                })
            }

            <NewProjectForm addProject={this.addProject}/>
          </div>
      </div>
  </div>
    </div>
  );
 }
  
}

export default App;
