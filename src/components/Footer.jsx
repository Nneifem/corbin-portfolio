import insta from '../assets/images/insta.png';
import twitch from '../assets/images/twitch.png';
import  '../assets/images/styles/Footer.css';

export default function Footer () {
    return (
        <>
            <a href='https://www.instagram.com/korewashere/'><img src={insta} className='social-one' alt='instagram logo'/></a>
            <a href='twitch link'><img src={twitch} className='social-two' alt='twitch logo'></img></a>
        </>
    )
}