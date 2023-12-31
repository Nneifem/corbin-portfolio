import  '../assets/images/styles/Youtube.css';
import thumbnail from '../assets/images/thumbnail.jpg';

export default function Youtube (){
    return(
        <>
            <h1 className='youtube-title'>Youtube</h1>
            <p className='youtube-description'>Corbininthemorning channel is about life and having a good time. <br /> Click <a href='https://www.youtube.com/@corbininthemorning'>here</a> to subscribe and watch the latest video</p>
            
            <h1 className='new-video'><a href='https://www.youtube.com/watch?v=xHbiqYccJds'>୨୧ Newest Video ୨୧</a></h1>
            <section className='video-image'>
                <img src={thumbnail} className='img-fluid' alt='youtube cover' style={{ width: '40em'}}></img>
            </section>

            <p><a href={'/'} className='home-link'>⇒ Back to home ⇐</a></p>
        </>
    )
}