import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="" />

                <div className="home__row">
                    <Product 
                        id="12321341" 
                        title='AlienWare' price={49.99} 
                        image="https://m.media-amazon.com/images/I/51HzG7dwAHL._AC_SY200_.jpg" 
                        rating={3} />
                    <Product             
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />
                    <Product                      
                        id="3254354345"
                        title="SkyTech Blaze II Gaming Computer PC Desktop – Ryzen 5 2600 6-Core 3.4 GHz, NVIDIA GeForce GTX 1650 4G, 500G SSD, 8GB DDR4, RGB, AC WiFi, Windows 10 Home 64-bit"
                        price={598.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81PeBrTfhnL._AC_UY218_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                     <Product
                        
                        id="3254354345"
                        title="Beexcellent Gaming Headset for PS4 Xbox One PC Mac Controller Gaming Headphone with Crystal Stereo Bass Surround Sound, LED Light & Noise-Isolation Microphone"
                        price={598.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/41R+VaxAEbL._AC_SY200_.jpg"
                    />
                    

                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                    <Product
                        id="90829332"
                        title="iBUYPOWER Gaming PC Computer Desktop Element Mini 9300 (AMD Ryzen 3 3100 3.6GHz, AMD Radeon RX 550 2GB, 8GB DDR4 RAM, 240GB SSD, WiFi Ready, Windows 10 Home)"
                        price={529.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/712irbqWpeL._AC_UY218_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title=" Redragon S107-BA Gaming Keyboard and Mouse Combo Wired Mechanical Feel RGB LED Backlit Keyboard 3200 DPI Gaming Mouse for Windows PC (Keyboard Mouse Combo)
                        4.6 out of 5 stars 409
                        "
                        price={1094.98}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71xcJdhmGgL._AC_UY218_.jpg"
                    />
                    <Product
                        id="90829332"
                        title="Fossil Men's Machine Stainless Steel Chronograph Quartz Watch"
                        price={59.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81zTMhnFZOL._AC_UL320_.jpg"
                    />
                      <Product
                        id="90829332"
                        title=" [Ryzen & GTX 1050 Ti Edition] SkyTech Archangel Gaming Computer Desktop PC Ryzen 1200 3.1GHz Quad-Core, GTX 1050 Ti 4GB, 8GB DDR4 2400, 1TB HDD, 24X DVD, Wi-Fi USB, Windows 10 Home 64-bit "
                        price={649.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81aVtkFWenL._AC_UL320_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
