import musicFolder from '../assets/images/musicfolder.png';
import artFolder from '../assets/images/artfolderpng.png';
import { Link, useLocation } from 'react-router-dom';

function Nav(){
    const currentPage = useLocation().pathname;

    return(
        <>
        
            <Link 
                to='/homepage'
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
            </Link>

            <Link
                to='/art'
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >  
                <img src={artFolder} className='art-image-folder' alt='art folder'></img>
            </Link>

            <Link
                to='/music'
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >  
                <img src={musicFolder} className='music-image-folder' alt='music folder'></img>
            </Link>
        </>
    )
}


export default Nav;