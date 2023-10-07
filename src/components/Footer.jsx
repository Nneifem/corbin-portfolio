import insta from '../assets/images/insta.png';
import twitch from '../assets/images/twitch.png';
import cart from '../assets/images/cart.png';
import youtube from '../assets/images/youtube.png';
import '../assets/images/styles/Footer.css';

export default function Footer () {
    return (
        <>
            <a href='https://www.instagram.com/corbininthemorning/'><img src={insta} className='social-one' alt='instagram logo'/></a>
            <a href='https://www.twitch.tv/corbunnie/schedule'><img src={twitch} className='social-two' alt='twitch logo'></img></a>
            <a href='https://www.etsy.com/shop/biaswrecked/?etsrc=sdt'><img src={cart} className='social-three' alt='cart icon'></img></a>
            <a href='https://www.youtube.com/@corbininthemorning'><img src={youtube} className='social-four' alt='youtube icon'></img></a>
        </>
    )
}