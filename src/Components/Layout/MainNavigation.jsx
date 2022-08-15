import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import "./MainNavigation.css"
import { AuthContext } from '../../Context/AuthContext'


const MainNavigation = () => {
    const { isLoggedIn } = useContext(AuthContext);
    return (
        <header className= "header">
            <Link to="/">
                <div className="logo">React Authentication</div>
            </Link>
            <nav>
                <ul>{
                    isLoggedIn && <li>
                        <Link to = "/">Logout</Link>
                    </li>
                }
                    {!isLoggedIn&&<li>
                        <Link to="/auth">Login</Link>
                    </li>
                    }
                </ul>
            </nav>
       </header>
  )
}

export default MainNavigation