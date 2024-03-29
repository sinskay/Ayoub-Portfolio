import styles from './Feedback.module.scss'
import { InfiniteMovingCardsDemo } from "./FeedbackClients"

export default function Feedback() {

  return (
    <div className="mt-32" id='feedback'>
      <h1 className={`${styles.sectionTitle} text-center text-4xl font-extrabold`}>
        FEEDBACK
      </h1>
      <InfiniteMovingCardsDemo />

    </div>
  )
}