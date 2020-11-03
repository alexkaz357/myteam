import React from 'react';
import { HomeHeader } from '../cmps/home/HomeHeader';
import { HomeFirstSection } from '../cmps/home/HomeFirstSection';
import { HomeSecoundSection } from '../cmps/home/HomeSecoundSection';
import { GetStarted } from '../cmps/GetStarted';


export function Home() {
    return (
        <section className="home">
            <HomeHeader />
            <HomeFirstSection />
            <HomeSecoundSection />
            <GetStarted />
        </section>
    )
}