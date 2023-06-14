import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Outlet,
} from 'react-router-dom';

import Home from './components/Homes.js';
import Calculator from './components/calculator.js';
import QuoteDisplay from './components/QuoteDisplay.js';
import calculate from './logic/calculate.js';
import RootLayout from './layouts/RootLayout.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="quotes" element={<QuoteDisplay />} />
    </Route>,
  ),
);

function App() {
  return (
    <main className="App">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
