import Header from '../header/Header';
import Sushi from '../sushi/Sushi';
import './types.scss';
import data from '../../data';

const Types = () => {
    return(
        <>
            <Header />
            <div className='types'>
                <span className='typesTitle' >Types of Sushi</span>
                <span className='typesSubtitle'>Try the best sushi in the world</span>
                <div className="content">
                    {
                        data.map((item,i)=> {
                            return <Sushi item={item} index={i}/>
                        })
                    }
                </div>
            </div>
        </>
        
    )
}

export default Types;