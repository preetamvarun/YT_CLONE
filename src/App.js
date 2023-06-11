import './App.css';
import Body from './components/Body';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Body />
    </div>
    /*
      Head
      Body
        - Sidebar 
            -MenuItems
        - MainBodyContainer
            -ButtonsList
            -VideoContainer
              - VideCard 
    */
  );
}

export default App;
