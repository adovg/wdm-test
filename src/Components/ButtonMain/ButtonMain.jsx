import React from 'react';
import './ButtonMain.scss';

export default function ButtonMain({text}) {
    return (
        <div className="hero__btn-wrap">
        <button className="hero__btn">{text}</button>
      </div>
    )
}
