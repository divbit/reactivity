import React, { Component } from 'react';
import Contacts from './components/contact';



// function App() {
//   return (
//     <div class="card">
//       <div className="card-body">
//         <h5 className="card-title">Steve Jobs</h5>
//         <h6 className="card-subtitle mb-2 text-muted">steave@gmail.com</h6>
//         <p className="card-text">Stay foolish, stay hungry</p>
//       </div>
//     </div>
//   );
// }

class App extends Component {

  render() {
    return (
      <Contacts contacts={this.state.contacts} />
    )
  }

  state = {
    contacts: []
  };

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }

}



export default App;
