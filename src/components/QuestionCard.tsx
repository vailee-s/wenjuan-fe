import React, { FC } from 'react'
import styles from './QuestionCard.module.css'
const QuestionCard: FC<{ question: string; answer: string }> = ({ question, answer }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{question}</h5>
        <p className="card-text">{answer}</p>
      </div>
    </div>
  )
}
export default QuestionCard
