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
                img src={artFolder} alt='art folder'
            >  
                Art
            </Link>

            <Link
                to='/music'
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                img src={musicFolder} alt='art folder'
            >  
                Music
            </Link>
        </>
    )
}


export default Nav;