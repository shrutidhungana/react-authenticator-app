import React, {useContext} from 'react'
import { Link } from 'react-router-dom'


const MainNavigation = () => {
    return (
        <header>
            <Link to="/">
                <div className="logo">React Authentication</div>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to = "/auth">Login</Link>
                    </li>
                </ul>
            </nav>
       </header>
  )
}

export default MainNavigation