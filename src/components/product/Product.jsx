import { useEffect, useState } from 'react';
import './product.scss';
import { Link } from 'react-router-dom';
import back from '../../assets/images/back.png';

const Product = () => {
    const [item,setItem] = useState('');
    const [count, setCount] =useState(1);
    const [isMore, setIsMore] =useState(true);

    useEffect(()=>{
        setItem(JSON.parse(localStorage.getItem('item')));
    },[])

    const changeCount = (val, action) => {
        if(action == "-"){
            setCount(prev=>prev-1);
        }
        if(action == "+"){
            setCount(prev=>prev+1);
        }
        if(action == "set"){
            setCount(+val);
        }
        if(val>100){
            setCount(100);
        }
        if(val<1){
            setCount(1);
        }
    }

    return (
        <div className="product">
            <Link to="/types">
                <div className='back'>
                    <img src={back} alt='back' />
                </div>
            </Link>
            {item ?
            <>
            <div className='productImage' style={{backgroundImage: `url("${item.image}")`}}></div>
            <div className='productInfo'>
                <h1>{item.title}</h1>
                <div className='productDescription'>
                    {isMore ? item.description.slice(0, 250) : item.description}
                    {item.description.length > 250 ? 
                        <span onClick={()=>setIsMore(prev=>!prev)}>
                            {isMore ? '...see more' : '...see less'}
                        </span> 
                    : ''}
                </div>
                <div className='productIngridients'>
                    <h3>Ingridients</h3>
                    {item.ingridients && item.ingridients.map((ing,i)=>{
                        return <span key={i}>{ing}</span>
                    })}
                </div>
            </div>
            </>
            :
            ''}
            <div className='count'>
                <div className='countButton countButtonLeft' onClick={()=>changeCount(count,"-")}>-</div>
                <input type="number" value={count} onChange={(e)=>changeCount(e.target.value,"set")} />
                <div className='countButton countButtonRight' onClick={()=>changeCount(count,"+")}>+</div>
            </div>
            <button>Add to cart ${count * Math.ceil(item.price)}</button>
        </div>
    )
}

export default Product;