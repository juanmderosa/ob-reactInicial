import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactContainer from './components/container/contact_container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
{/*         <Greeting name="Juan"/>
        <GreetingF name="Juan"/> */}
        <TaskListComponent/>
        <ContactContainer/>
      </header>
    </div>
  );
}

export default App;
