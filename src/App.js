import { Route, Routes} from 'react-router-dom';

import Inventroy from "./inventory";
function App() {
  return (
    <div > 
    
    <Routes>
       <Route path="/" element={<Inventroy/>}/>
       
      
      </Routes>
    
 </div>
  );
}

export default App;
