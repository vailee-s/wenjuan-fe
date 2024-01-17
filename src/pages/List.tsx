import React, { FC, useState } from 'react'
import styles from './List.module.scss'
const rowQuestiontList = [
  {
    id: 1,
    title: '问卷1',
    isPublish: false,
    isStart: false,
    answerCount: 1,
    createAt: '2024-01-12',
  },
  {
    id: 2,
    title: '问卷2',
    isPublish: true,
    isStart: true,
    answerCount: 1,
    createAt: '2024-01-15',
  },
  {
    id: 3,
    title: '问卷3',
    isPublish: false,
    isStart: false,
    answerCount: 1,
    createAt: '2024-01-17',
  },
]
const List: FC = () => {
  const [questionList, setQuestionList] = useState(rowQuestiontList)
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <h3>我的问卷列表</h3>
        </div>
        <div className={styles.right}>搜索</div>
      </div>
    </>
  )
}

export default List
