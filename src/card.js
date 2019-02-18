import React from 'react'
import './card.css'
import puce from './puce.png'
import mastercard from './mastercard.png'


const Card =(props) =>{

    return (
            <div className="card-container">
                <div>
                    <h1 className="card-title">CREDIT CARD</h1>
                </div>
                <div className="puce-container">
                    <img className="puce-size" src={puce} alt=""/>
                </div>
                <div className="info-container">
                    <div className="card-info">
                        <p>{String(props.number).padEnd(16, '*')}</p>
                        <div className="card-valid-container">
                            <div>5422</div>
                            <div>{String(props.date).padEnd(5,'*')}</div>
                        </div>
                        <div className="holder-container">{props.name}</div>
                    </div>
                    <div className="image-container">
                        <img className="master-image" src={mastercard} alt=""/>
                    </div>
                </div>
            </div>
        )
}

export default Card;
