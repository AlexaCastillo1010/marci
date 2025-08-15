import Navbar from './components/Navbar.jsx';
import MarciMetzger from './components/MarciMetzger.jsx';
import Looking from './components/Looking.jsx';
import Explore from './components/Explore.jsx';
import './App.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <MarciMetzger />
      <Looking />
      <Explore />
      {/* Add other components as needed */}
    
    </div>
  );
}