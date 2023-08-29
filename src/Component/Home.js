import React from 'react';
import Nav from './Nav';
import { Profile,  Projects } from '../Section/index';

const Home = () => {
    return (
        <main className='box-border h-600 w-600 p-4 border-4'>
            <section className='padding'>
                <Profile />
            </section>
            <section className='padding'>
                <Projects />
            </section>
            <Nav />
        </main>
    )
}

export default Home;
