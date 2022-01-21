import Palette from './Palette';
import seedsColors from './seedsColors';
import { generatePalette } from "./colorHelpers";
import { BrowserRouter as Router, Route, Routes, NavLink, useParams } from 'react-router-dom';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PaletteList palettes={seedsColors}/>}/>
        <Route exact path="/palette/:id" element={<Palette/>} />
        <Route path="/palette/:paletteId/:colorId" element={<SingleColorPalette/>} />
      </Routes>
      {/* <div className="App">
        <Palette palette={generatePalette(seedsColors[4])} />
      </div> */}
    </Router>
    
  );
}

export default App;
