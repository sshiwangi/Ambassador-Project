import React from 'react'

const Card = ({items}) => {
  return (
    <div className="card-container">
        {items.map((item) => (
            <div className='card-item'>
            <div className="icon-bg">
                <img height="32px" src={item.image} alt="" />
            </div>
            <h2 style={{marginBottom: '0.8rem'}}>{item.title}</h2>
            <p>{item.desc}</p>
            </div>
            
        ))}
    </div>
  )
}

export default Card