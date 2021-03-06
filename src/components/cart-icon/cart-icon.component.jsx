import React from 'react';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {selectCartItemsCount} from '../../redux/cart/cart.selector.js';

import { ReactComponent as ShoppingIcon } from  '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden , itemCount} ) => 
    {
        //console.log("I am rendering CartIcon component")
    return(
        <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);
    }

const mapStateToProps = (state )=> {
   //console.log("I am in mapstateToProps for cart-icon component")
    return(
    {
      itemCount : selectCartItemsCount(state)
})
}
const mapDispatchToProps = (dispatch) =>{ 
    //console.log("I am in mapdispatchToProps for cart-icon component")
return({
    toggleCartHidden : () => dispatch(toggleCartHidden())
});
}
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
