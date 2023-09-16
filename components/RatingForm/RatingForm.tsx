import React, { FormEvent } from "react";
import styles from "./RatingForm.module.css";
import iconStar from "../assets/img/icon-star.svg";

type Props = {
  nextPage: React.Dispatch<React.SetStateAction<number>>;
  rate: number;
  setRate: React.Dispatch<React.SetStateAction<number>>;
};

function RatingForm({ nextPage, rate, setRate }: Props) {
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const currentTarget = event.currentTarget;
    const form = new FormData(currentTarget);

    setRate(Number(form.get("rate")));
    nextPage(2);
  };
  return (
    <>
      <div className={styles.container}>
        <figure className={styles.iconFigure}>
          <img src={iconStar} alt="icon" />
        </figure>
        <h3 className={styles.title}>How did we do?</h3>
        <p className={styles.text}>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <form onSubmit={submitHandler}>
          <ul className={styles.inpContainer}>
            <li>
              <input
                className={styles.radio}
                type="radio"
                id="1"
                name="rate"
                value={1}
                defaultChecked={1 === rate}
              />
              <label className={styles.label} htmlFor="1">
                1
              </label>
            </li>
            <li>
              <input
                className={styles.radio}
                type="radio"
                id="2"
                name="rate"
                value={2}
                defaultChecked={2 === rate}
              />
              <label className={styles.label} htmlFor="2">
                2
              </label>
            </li>
            <li>
              <input
                className={styles.radio}
                type="radio"
                id="3"
                name="rate"
                value={3}
                defaultChecked={3 === rate}
              />
              <label className={styles.label} htmlFor="3">
                3
              </label>
            </li>
            <li>
              <input
                className={styles.radio}
                type="radio"
                id="4"
                name="rate"
                value={4}
                defaultChecked={4 === rate}
              />
              <label className={styles.label} htmlFor="4">
                4
              </label>
            </li>
            <li>
              <input
                className={styles.radio}
                type="radio"
                id="5"
                name="rate"
                value={5}
                defaultChecked={5 === rate}
              />
              <label className={styles.label} htmlFor="5">
                5
              </label>
            </li>
          </ul>
          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default RatingForm;
