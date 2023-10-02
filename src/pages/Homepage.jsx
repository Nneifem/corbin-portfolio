import Nav from '../components/Nav';
import Footer from '../components/Footer';
import  '../assets/images/styles/Homepage.css';

export default function Homepage(){
    return(
        <>
            <div className='info'>
                <h1 className='corbin'>Corbin</h1>
                <p className='description'>Singer · Songwriter · Artist</p>
                <Nav />
            </div>
            <Footer />
        </>
    )
}