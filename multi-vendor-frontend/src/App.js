// import React from 'react';
// // import CrudApp from './Components/ReactTasks/CrudApplication/CrudApp';
// import CrudTask from './Components/ReactTasks/CrudApplication/CrudTask';
// // import Timer from './Components/ReactTasks/Timer/Timer';
// // import Caleculator from './Components/ReactTasks/Calculator/Caleculator';
// // import Dynamic from './Components/ReactTasks/DynamicChangingNumbers/Dynamic';

// function App() {
//   return (
//     <div className="App">
//       {/* <Caleculator /> */}
//       {/* <Dynamic /> */}
//       {/* <Timer /> */}
//       {/* <CrudApp /> */}
//       <CrudTask />
//     </div>
//   );
// }

// export default App;


//multivendor......................
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Components/pages/Home/Home';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
