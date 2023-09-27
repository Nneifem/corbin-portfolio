import Nav from '../components/Nav';
import  '../assets/images/styles/Homepage.css';

export default function Homepage(){
    return(
        <>
            <div className='info'>
                <h1 className='corbin'>Corbin</h1>
                <p className='description'>Welcome to My Portfolio!</p>
            </div>
            <Nav />
        </>
    )
}