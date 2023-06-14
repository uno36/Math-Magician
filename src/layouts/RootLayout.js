import { NavLink, Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className="root-layout">
        <header>
            <h1 className='layout-heading'>Math Magicians</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="calculator">Calculator</NavLink>
                <NavLink to="quotes">Quotes</NavLink>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  );
}
