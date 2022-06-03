import './App.css';
import ContainerComponent from './components/ContainerComponent';
import Counter from './components/UseEffect/Counter';
import UseEffectExample1 from './components/UseEffect/UseEffectExample1';
import UseEffectExample2 from './components/UseEffect/UseEffectExample2';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/* <UseEffectExample1 age='20'/> */}
          {/* <UseEffectExample3/> */}
          {/* <ContainerComponent /> */}
          <Counter/>
          <hr width="500"/>
          <UseEffectExample2/>
      </header>
    </div>
  );
}

export default App;
