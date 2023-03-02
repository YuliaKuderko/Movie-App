import * as React from 'react';
import PageHeader from '../../page-header/PageHeader';
import './about.scss'
import gif1 from '../../../assets/gif5.gif'

export default function FAQ() {
    return (
        <>
            <PageHeader>
                About
            </PageHeader>
            <div className='container'>
                <div className='mb-3'>
                    <div className='about-content'>
                        <div>
                            <h1>Get to know me</h1>
                            <p className='about-paragraph'>I'm a fan at heart.
                                Of movies, TV shows and well, all things entertainment. So much so that I built an app that brings it all together—Trailes, lists of the top rated and trending movies and series, ratings and search option. As beautiful as it is easy-to-use, Movie App gives users everywhere a way to discover and enjoy the entertainment they love the most.</p>
                        </div>
                        <img src={gif1} height="350px" />
                    </div>
                </div>
            </div>
        </>
    );
}