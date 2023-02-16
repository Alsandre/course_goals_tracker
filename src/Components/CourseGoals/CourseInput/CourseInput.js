import { useState } from "react";

import classes from "./CourseInput.module.css";

import Button from "../../UI/Button/Button";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const inputChangeHandler = (e) => {
    if (e.target.value.trim() !== 0) {
      setIsValid(true);
    }
    setEnteredValue(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    props.onAddGoal(enteredValue);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${classes["form-control"]} ${
          isValid ? "" : classes["invalid"]
        }`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={inputChangeHandler}></input>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
