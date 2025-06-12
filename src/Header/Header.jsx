import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
    return(
        <>
            <div className="header">
                <Link to = "/">
                <div>
                    <img src="https://res.cloudinary.com/dcisrjaxp/image/upload/v1747727673/download_ku0mgx.png" alt="Logo" className="logo" />
                </div>
                </Link>
                <div>
                    <Link to="/courses"><button className='header-button' >Courses</button></Link>
                    <Link to="/testseries"><button className='header-button' >Test Series</button></Link>
                    <Link to="/studymaterials"><button className='header-button' >Study Materials</button></Link>
                    <Link to="/scholarships"><button className='header-button' >Scholarships</button></Link>
                    <Link to="/more"><button className='header-button' >More</button></Link>
                </div>
                <div className='call-login-flex'>
                    <div className='call-logo-container'>
                        <img src="https://res.cloudinary.com/dcisrjaxp/image/upload/v1747728758/6ec108f2-b03e-40fd-9d51-4f374cb31c77_tmv0gf.png" alt="call" className='call-logo' />
                    </div>    
                    <button className='login-button'>Login</button>
                </div>
            </div>    
        </>
    )
}

export default Header