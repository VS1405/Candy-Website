import React, { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './MealsItemForm.module.css';

const MealsItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);

   const [amountHandlerButton, setButton2]= useState('1')

    const amountRef = useRef();

    const ButtonHandler1 = (event) => {
        setButton2('1')
    }
    const ButtonHandler2 = (event) => {
        setButton2('2')
    }
    const ButtonHandler3 = (event) => {
        setButton2('3')
    }
    


    const submitHandler = event => {
        // console.log('adding after submit')
        event.preventDefault();

        // const amountInputValue = amountRef.current.value;
        const amountInputValue = amountHandlerButton;
        

        const enteredAmountNumber = +amountInputValue ;

        if (amountInputValue.trim().length === 0 || enteredAmountNumber.length < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false)     // wrong entered input
            return;
        }
     
        console.log(enteredAmountNumber)
        console.log('Counting cart no');

        props.onAddToCart(enteredAmountNumber);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountRef}
                label='Amount'
                input={{
                    id: 'amount' + props.id,
                    type: "number",
                    min: '1',
                    max: '10',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <div>
                <button type='submit' value={amountHandlerButton} onClick={ButtonHandler1}> Add 1</button>
                <button type='submit' value={amountHandlerButton} onClick={ButtonHandler2}> Add 2</button>
                <button type='submit' value={amountHandlerButton} onClick={ButtonHandler3}> Add 3</button>
            </div>

            {/* {!amountIsValid && <p>Enter valid amount (1-5).</p>} */}
        </form>
    );
}

export default MealsItemForm
