import './intro.scss';
import sushiIntro from '../../assets/images/sushi-intro.png';
import { Link } from "react-router-dom";

const Intro = () => {
    return(
        <div className='intro'>
            <img src={sushiIntro} alt='sushiIntro' />
            <div className='introDescription'>
                <span className="introTitle">Your Favorite</span>
                <span className="introSushi">Sushi</span>
                <span className="introDesc">We will deliver your favorite sushi in <span id='minutes-30'>30 minutes</span></span>
            </div>
            <Link to='/types'>
                <div className="introButton">
                    Let’s choose
                </div>
            </Link>
            
        </div>
    )
}

export default Intro;