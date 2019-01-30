import React , { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class orderSummary extends Component {
    //this could be a functional component. I changed it for testing to see check efficiency. Modal component handled the checks. 
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate')
    } 
    render () {

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li> );
        })

        return (
            <Aux>
            <h3>Your Order</h3>
            <p>A Delicious burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price} </strong></p>
            <p>Continue to Checkout</p>
            <Button 
                btnType="Danger"
                clicked={this.props.purchaseCancelled}>
                CANCEL
            </Button>
            <Button 
                btnType="Success"
                clicked={this.props.purchaseContinued}>
                CONTINUE
            </Button>
        </Aux> 
        )
    }

};

export default orderSummary;