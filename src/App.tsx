import './App.css';
import { Header } from './components/header';
import { MenuList } from './components/menuList';
import { Sidebar } from './components/sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='body'>
      <MenuList />
      <Sidebar />
      </div>
    </div>
  );
}

export default App;
