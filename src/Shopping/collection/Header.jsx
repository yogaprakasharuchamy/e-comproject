import React from 'react'

import './Header.css';

function Header() {
    return (
        <><div className='Header'>

            <div className='left'>
                <div className='flip'>
                    <h3>FLIPKART</h3>
                </div>
            </div>
            <div className='center'>
                <div>
                    Women
                </div>
                <div>
                    Men
                </div>
                <div>
                    Kids
                </div>
                <div>
                    Beauty
                </div>
                <div>
                    Home & Kitchen
                </div>
                <div className='search'>
                    <input type='text' placeholder='search..' />
                </div>
            </div>
            <div className='right'>
                <div className='signin'> SignIn/ SignUp</div>
                <div className='cart'> Cart</div>

            </div>


        </div>
        </>
    );
}

export default Header;