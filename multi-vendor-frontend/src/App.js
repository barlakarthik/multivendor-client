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
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import './App.css';
// import Home from './Components/pages/Home/Home';

// const App = () => {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path='/' element={<Home />} />
//         </Routes>
//       </Router>
//     </>
//   )
// }

// export default App

//form validation........
// import React from 'react'
// import FormValidation from './Components/formValidation/FormValidation'

// const App = () => {
//   return (
//     <div>
//       <FormValidation />
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Navbar from './Layouts/Navbar'
// import About from './Pages/About'
// import Home from './Pages/Home'
// import Pagenotfound from './Pages/Pagenotfound'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import AddUser from './Pages/AddUser'
// import EditUser from './Pages/EditUser'

// const App = () => {
//   return (
//     <Router>
//       <div className='App'>
//         <Navbar>
//           <Routes>
//             <Route exact path='/' element={<Home />} />
//             <Route exact path='/about/:id' element={<About />} />
//             <Route exact path='*' element={<Pagenotfound />} />
//             <Route exact path='/add/user' element={<AddUser />} />
//             <Route exact path='/edit/user/:id' element={<EditUser />} />
//           </Routes>
//         </Navbar>
//       </div>
//     </Router>
//   )
// }

// export default App

import React from 'react'
import About from './Components/Rise/HippoCloud/About'
import Add from './Components/Rise/HippoCloud/Add'
import Edit from './Components/Rise/HippoCloud/Edit'
import Home from './Components/Rise/HippoCloud/Home'
import View from './Components/Rise/HippoCloud/View'
import NavBar from './Components/Rise/layout/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PageNotFound from './Components/Rise/HippoCloud/PageNotFound'
const App = () => {
  return (
    <Router>
      <div className='contaner'>
        <NavBar>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/add/user' element={<Add />} />
            <Route exact path='*' element={<PageNotFound />} />
          </Routes>
        </NavBar>
      </div>
    </Router>
  )
}

export default App



















