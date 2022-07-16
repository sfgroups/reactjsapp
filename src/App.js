import './App.css';
import Container from 'react-bootstrap/Container';
import ExampleToast from './components/ExampleToast'
import AppList from './components/AppList';


function App() {
  return (
    <div className="App">
     <Container className="p-3">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header">Application List</h1>     
    </Container>
    <AppList/>
  </Container>
    </div>
  );
}

export default App;
