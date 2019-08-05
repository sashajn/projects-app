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
                projectname: 'Pluto app',
                type: 'UX/UI',
            },{
                id: 2,
                projectname: 'Shoes website',
                type: 'UI',
            },{
                id: 3,
                projectname: 'Oil Paints',
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
