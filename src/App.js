import './App.css';
import ButtonComponent from './ButtonComponent';
import ImageComponent from './ImageComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ImageComponent changeImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpiwt21OgXt1Lpnqgj7RWKZ_WeK2NhG43reuUSLEnI42C1aWEcWLthAGNEA-quOF1mFs&usqp=CAU" />
          <ButtonComponent nameToShow="FirstButton" />
        </div>
        <ButtonComponent nameToShow="SecondButton" />
        <ImageComponent changeImg="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/640px-Naruto_logo.svg.png" />
      </header>
    </div>
  );
}

export default App;
