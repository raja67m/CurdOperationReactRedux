

import Inventroy from "./inventory";
import Additem from "./additem";
import { Provider } from 'react-redux';
import store from "./reducer";
 import { Route, Routes} from 'react-router-dom';
function App() {
  return (
   
<Provider store={store}>

  
<div>


          <Routes>
          <Route path="/" element={<Inventroy/>}/>
          <Route path="Add" element={<Additem/>}/>
          </Routes>
</div>
</Provider> 
   

  

 

  );
}

export default App;
