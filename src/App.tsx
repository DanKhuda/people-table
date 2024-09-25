import { Navbar } from './components/Navbar';

import './App.scss';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div data-cy="app" data-theme="light">
      <Navbar />

      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
