import React from 'react';
import s from './components/Header.module.css';

const Header = () => {
    return (
        <div className = {s.header}>
            <div>otkritie zayavki</div>
            <div>
                <button href="NewRequest">Новая заявка</button>
            </div>
            <div>
                <div>poisk</div>
                <img src='https://image.flaticon.com/icons/svg/2097/2097743.svg' />
            </div>
        </div>

    )

};
export default Header