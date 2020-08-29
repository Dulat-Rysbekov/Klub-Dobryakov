import React from 'react';
import s from './components/SideBar.module.css';

const SideBar = () => {
    return (
        <nav className ={s.side_bar}>
            <a href="HelpHub" className={s.heplhub}>
                HelpHub
            </a>
            <div className={s.main}>
                <a href="Home">
                <div className={s.home}>Клуб добряков</div>
                </a>
                <div><button href="NewRequest">Новая заявка</button></div>
                <a href="Requests"><img src='https://image.flaticon.com/icons/svg/2097/2097743.svg' />     Заявки</a>
                <a href="Chat"><img src='https://image.flaticon.com/icons/svg/1380/1380338.svg' />     Чат</a>
                <a href="Volunteers"><img src='https://image.flaticon.com/icons/svg/615/615075.svg' />     Волонтеры</a>
                <a href="Profile"><img src='https://image.flaticon.com/icons/svg/929/929564.svg' />     Профиль</a>
                <a href="Mobile_version"><img src='https://image.flaticon.com/icons/svg/0/488.svg' />     Мобильная версия</a>
            </div>
            <div className={s.footer}>
                <a href="Settings"><img src='https://image.flaticon.com/icons/svg/992/992696.svg' /> Настройки</a>
                <a href="Help"><img src='https://image.flaticon.com/icons/svg/858/858962.svg' /> Помощь</a>
                <a href="Exit"><img src='https://image.flaticon.com/icons/svg/83/83972.svg' /> Выход</a>
            </div>

        </nav>
    )

};

export default SideBar




