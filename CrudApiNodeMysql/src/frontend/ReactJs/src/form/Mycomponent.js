import React from 'react';
import axios from 'axios';

const App2 = () => <div>Mycomponente asdasd</div>;

function Helloworld() {
  return(
    <div>asd</div>
  )
};

class Mycomponente extends React.Component {

  constructor() {
    super();
    this.state = {
      show: true,
      title: '',
      description: '',
      _id: '',
      tasks: []
    };
  }

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks2() {
    fetch('http://localhost:4000/backendnode/')
      .then(res => res.json())
      .then(data => {
        this.setState({tasks: data.nodejs});
      });
  }  

  fetchTasks() {
    axios.get('http://localhost:4000/backendnode/').then(response => {
        this.setState({tasks: response.data.nodejs});
    });
  }

  render() {
	  return(
            	<table class="table table-borderless">
				  <thead>
				    <tr>
	                    <th>{this.props.title}</th>
	                    <th>Url</th>
	                    <th>Id</th>
				    </tr>
				  </thead>
				  <tbody>
                  { 
                    this.state.tasks.map(task => {
                      return (
                        <tr key={task.id}>
                          <td>{task.title}</td>
                          <td><a href={task.url} target='_blank'>{task.url}</a></td>
                          <td>{task.id}</td>
                        </tr>
                        )
                    })
                  }
                  </tbody>
              	</table>
	  )
  }
}

export default Mycomponente;