import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux';
import Header from './components/Header';
import store from './utils/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div>
          <Header />
          <Routes>
            <Route path='/' Component={Body} />
            <Route path='/watch' Component={WatchPage} />
            <Route path='*' Component={NotFound} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

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
