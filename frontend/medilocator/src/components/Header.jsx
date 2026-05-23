import {Link} from 'react-router-dom'
import '../css/header.css'
function Header()
{
    return(
        <>
        {/* <h2> Medilocator</h2> */}
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="#">Navbar</Link> */}
     <img src="/mediloc2.jpg"  style={{width:"50px" ,height:"50px",borderRadius:"50%"  }}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
<li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"><i className="fa-solid fa-house"></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/aboutus">About us</Link>
        </li>
                <li className="nav-item">
          <Link className="nav-link" to="/contactus">Contact us</Link>
        </li>
       


                {/* <li className="nav-item">
          <Link className="nav-link" to="#">Link</Link>
        </li> */}
        
               
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Register
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/userRegistration">User Register</Link></li>
            <li><Link className="dropdown-item" to="/shopOwner">Shop Owner Register </Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/adminLogin">Admin Login</Link></li>
            <li><Link className="dropdown-item" to="/userLogin">User Login</Link></li>
            <li><Link className="dropdown-item" to="/shopLogin">Shop Owner Login</Link></li>
          </ul>
        </li>


        

        {/* <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
        </li> */}

      

      </ul>

      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>  */}

      
     
    </div>
  </div>
</nav>
        </>
    )
}
export default Header