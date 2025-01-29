import {Link, Outlet} from 'react-router';

function Layout() {
    return (
        <div>
            <header>
                <nav>
                    <Link to={`/`}>Home</Link>
                    <Link to={`/books/create`}>Create New Book</Link>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout;