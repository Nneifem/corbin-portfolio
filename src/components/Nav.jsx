import musicFolder from '../assets/images/musicfolder.png';
import artFolder from '../assets/images/artfolderpng.png';
import youtubeFolder from '../assets/images/youtubefolder.png';
import { Link, useLocation } from 'react-router-dom';
import  '../assets/images/styles/Nav.css';

function Nav(){
    const currentPage = useLocation().pathname;

    return(
        <>
            <li className='navigation'>
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

                <Link
                    to='/youtube'
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >  
                    <img src={youtubeFolder} className='youtube-image-folder' alt='youtube folder'></img>
                </Link>
            </li>
        </>
    )
}


export default Nav;