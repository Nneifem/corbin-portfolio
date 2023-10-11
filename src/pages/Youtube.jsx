import  '../assets/images/styles/Youtube.css';
import youtube from '../assets/images/youtube.png';

export default function Youtube (){
    return(
        <>
            <h1 className='youtube-title'>Corbininthemorning</h1>
            <p className='youtube-description'>Posting about life and just having a good time. Click <a href='https://www.youtube.com/@corbininthemorning'>here</a> to subscribe and watch the latest video</p>

            <p><a href={'/homepage'} className='home-link'>↪ Back to home</a></p>
        </>
    )
}