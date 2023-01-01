import './App.css';
import Homepage from './pages/homepage.pages';
import { createContext, useState } from 'react';
export const Context = createContext();

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Context.Provider value={{
      menuOpen, setMenuOpen
    }}>
      <div>
        <Homepage />
      </div>
    </Context.Provider>
  );
}

export default App;
