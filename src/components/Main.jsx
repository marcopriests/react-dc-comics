import React from 'react'
import ListComics from './ListComics'

const Main = () => {
    return (
        <main>
            <ListComics />

            <div className='cta'>
                <div className='container'>
                    <ul>
                        <li>
                            <a href="">
                                <div className='cta-img'>
                                    <img src="./public/img/buy-comics-digital-comics.png" alt="" />
                                </div>
                                DIGITAL COMICS
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className='cta-img'>
                                    <img src="./public/img/buy-comics-merchandise.png" alt="" />
                                </div>
                                DC MERCHANDISES
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className='cta-img'>
                                    <img src="./public/img/buy-comics-subscriptions.png" alt="" />
                                </div>
                                SUBSCRIPTION
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className='cta-img'>
                                    <img src="./public/img/buy-comics-shop-locator.png" alt="" />
                                </div>
                                COMIC SHOP LOCATOR
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className='cta-img'>
                                    <img src="./public/img/buy-dc-power-visa.svg" alt="img" />
                                </div>
                                DC POWER VISA
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Main
