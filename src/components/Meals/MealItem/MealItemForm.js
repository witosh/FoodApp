import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [isValidAmount, setIsValidAmount] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmontNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmontNumber < 1 ||
      enteredAmontNumber > 5
    ) {
      setIsValidAmount(false);
      return;
    }

    props.onAddToCart(enteredAmontNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isValidAmount && <p>Please ener a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
