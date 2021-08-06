import './css/app.css';
import AddBoxForm from './components/AddBoxForm';
import AddBoxHeader from './components/AddBoxHeader';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddBoxHeader title="Boxinator" />
        <AddBoxForm />
      </header>
    </div>
  );
}

export default App;
