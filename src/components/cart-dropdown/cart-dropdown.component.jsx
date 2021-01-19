import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropDown = () => (
    <div className='cart-dropdown'>
         <div className='cart-items'>
            <CustomButton>Go TO CHECKOUT</CustomButton>
         </div>
    </div>
)

export default CartDropDown;