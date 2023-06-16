import React from 'react';
import './sushi.scss';
import { Link } from "react-router-dom";
import plus from "../../assets/images/plus.png";

const Sushi = ({item,index}) => {
  const savetoLocal = () => {
    const prepareToSend = JSON.stringify(item);
    localStorage.setItem('item',prepareToSend);
  }
  return (
    <Link to={`${item.id}`} onClick={savetoLocal} key={index}>
      <div className="sushi">
        <div className='sushiImage' style={{backgroundImage: `url("${item.image}"`}}></div>
        <span className="sushiName">{item.title}</span>
        <div className="priceBox">
          <span className="price">{item.price}</span>
          <div className="add"><img src={plus} alt='plus' /></div>
        </div>
      </div>
    </Link>
  );
};

export default Sushi;