
// // App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import { HelmetProvider } from 'react-helmet-async';
// import Home from './pages/Home';

// function App() {
//   return (
//     // <HelmetProvider>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </Router>
//     // </HelmetProvider>
//   );
// }

// export default App;

// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppLayout } from './components/layout/Layout';
import Home from './pages/Home';
// Import other pages as needed
// import Documentation from './pages/Documentation';
// import Playground from './pages/Playground';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout>
              <Home />
            </AppLayout>
          }
        />
        {/* Add other routes here */}
        {/* 
                <Route 
                    path="/docs/*" 
                    element={
                        <DocsLayout>
                            <Documentation />
                        </DocsLayout>
                    } 
                />
                <Route 
                    path="/playground" 
                    element={
                        <AppLayout>
                            <Playground />
                        </AppLayout>
                    } 
                />
                */}
      </Routes>
    </Router>
  );
}

export default App;