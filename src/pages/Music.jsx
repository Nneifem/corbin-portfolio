import singleOne from '../assets/images/summer.jpeg';
import singleTwo from '../assets/images/caffeine.jpeg';
import singleThree from '../assets/images/chess.jpeg';
import  '../assets/images/styles/Music.css';

export default function Music(){
    const musics = [
        {
            song: "Summer Nostalgia",
            link: "https://open.spotify.com/track/3mD6XEBkk3GzJarZOBQ59U?si=26395088ea2a4780",
            image: singleOne,
            released: 'September 4, 2022'
        },
        {
            song: "Caffeine",
            link: "https://open.spotify.com/track/0cKdzjEU0yZIWHYukc00dN?si=0706017a25004db6",
            image: singleTwo,
            released: 'September 26, 2022'
        },
        {
            song: "CHESS",
            link: "https://open.spotify.com/track/3QrYHHcxQgLjAZu4o6AO28?si=20ab6ba70a48472e",
            image: singleThree,
            released: 'December 17, 2022'
        },
    ]


    return(
        <>
            <h1 className='music-title'>Music</h1>
            <p className='music-description'>"Aspiring LBGT singer/songwriter who hopes to give others a safe<br />place, and someone to relate to through their music."</p>
            <ul className='musics'>
            {
                musics.map((music, i) => (
                    <li key ={i}>
                        <div className='card text-center'>
                            <a href={music.link}><h4 className='card-header'>{music.song}</h4></a>
                            <div className='card-body'>
                            <img src={music.image} className='img-fluid' alt='album cover' style={{ width: '20em'}}></img>
                            </div>
                            <div className='card-footer'>Released: {music.released}</div>
                        </div>
                    </li>
                ))
            }
            </ul>
            <p><a href={'/'} className='home-link'>⇒ Back to home ⇐</a></p>

        </>
    )
}