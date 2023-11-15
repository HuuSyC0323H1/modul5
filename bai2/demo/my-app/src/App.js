import logo from './logo.svg';
import './App.css';

const fruits = [
    "Apple","Banana","Orange","Apricot"
]

function App() {
  return (
    <div>
      <h1>List of fruits</h1>
        <ul>
          {
            fruits.map(item => (
                <li>{item}</li>
            ))
          }
        </ul>
    </div>
  );
}

export default App;
