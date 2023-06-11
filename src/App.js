import './App.css';
import Body from './components/Body';
import Head from './components/Head';

function App() {
  return (
    <div>
      <Head />
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
