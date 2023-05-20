import './App.css';
import Body from './component/Body';
import Header from './component/Header'
import Footer from "./component/Footer"

const ChildComp = () => {
  return <div>child component</div>;
}

function App() {
  
  return (
    <div className="App">
      <Header />
      <Body>
        <ChildComp />
      </Body>
      <Footer />
    </div>
  );
}

export default App;
