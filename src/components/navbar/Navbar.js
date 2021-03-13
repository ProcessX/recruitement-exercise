import React from 'react'
import { Link } from 'react-router-dom'

const LINKS = [
    { to: '/', text: 'Home' },
    { to: '/campaigns', text: 'Campaigns' },
    { to: '/help', text: 'Help' },
]

const Navbar = () => {
    return (
        <div className={'navbar'}>
            <span className='logo logo--navbar'>Logo</span>

            <nav className={'navbar__menu'}>
                <ul className={'tab__li'}>
                    {LINKS.map((link) => (
                        <li key={link.to} className={'tab__el'}>
                            <Link to={link.to} className={'tab'}>
                                <span className='tab__icon'>Icon</span>
                                <span className='tab__text'>{link.text}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <button className='btn btn--reduceNavbar'>Reduce</button>
        </div>
    )
}

export default Navbar
