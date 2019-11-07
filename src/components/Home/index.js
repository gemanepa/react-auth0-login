import React from 'react';
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";
import RandomCuteAnimal from '../RandomCuteAnimal';
import { dog, cat } from '../../endpoints';
import './index.css';

const checkcodeButton = (
    <a href="https://github.com/gemanepa/react-auth0-login">
        <button className="btn">Check the Code</button>
    </a>
)

function RandomCuteAnimalMock() {
    return (
        <section className="cuteanimal">
            <h3>You are a mock, so here you have a random mock pic from <a href='https://mock.com'>https://mock.com</a></h3>
            <img alt="" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.commondreams.org%2Fsites%2Fdefault%2Ffiles%2Fimce-images%2Fscreen_shot_2012-01-24_at_3.48.15_pm.png&f=1&nofb=1"/>
        </section>
    )
}

export default function Home() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return (
        <>
        {!isAuthenticated && (
        <div className="flex-column">
            {process.env.NODE_ENV !== 'development' ?
            <RandomCuteAnimal cuteAnimal={dog}/>
            :
            <RandomCuteAnimalMock />
            }
            <button
                onClick={() => loginWithRedirect({})}
                className="btn"
            >
                Log in or Sign up for the kitties
            </button>
        </div>)}

        {isAuthenticated && (
        <div className="flex-column">
            {process.env.NODE_ENV !== 'development' ?
            <RandomCuteAnimal cuteAnimal={cat}/>
            :
            <RandomCuteAnimalMock />
            }
            <button className="btn" onClick={() => logout()}>Logout for the doggos</button>
            <Link to="/profile" style={{marginTop: '1%'}}>
                <button className="btn">Check your Profile</button>
            </Link>
        </div>
        )}
        </>
    )
}