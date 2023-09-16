import styles from "./RatingContainer.module.css";
import iconThankYou from "../assets/img/illustration-thank-you.svg";
type Props = {
  rate: number;
};

function RatingContainer({ rate }: Props) {
  return (
    <>
      <div className={styles.container}>
        <figure>
          <img src={iconThankYou} alt="ThankYou" />
        </figure>
        <p className={styles.selected}>You selected {rate} out of 5</p>
        <h3 className={styles.title}>Thank you!</h3>
        <p className={styles.text}>
          We appreciate you taking the time to give a rating. If you ever need
          more support. don't hesitate to get in touch
        </p>
      </div>
    </>
  );
}

export default RatingContainer;
