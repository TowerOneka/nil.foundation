import React from 'react'
import cx from 'classnames'

import WhiteRectangle from 'components/WhiteRectangle'
import LinkCard from 'components/LinkCard'
import ListItem from 'components/ListItem'

import s from './JoinUs.module.scss'
import { careersPageData } from 'stubs/careersPageData'

type JoinUsProps = {
  className?: string
  data: typeof careersPageData.joinUs
}

const JoinUs = ({ className, data: { title, cards } }: JoinUsProps) => {
  return (
    <div className={cx(s.wrapper, className)}>
      <div className={s.content}>
        <h2 className={s.title}>{title}</h2>
        <div>
          {cards.map((card) => (
            <div className={s.cardsWrapper} key={card.title}>
              <LinkCard linkTo={card.linkTo} title={card.title} description={card.description} />
              <ListItem className={s.text} title={card.text} />
            </div>
          ))}
        </div>
        <WhiteRectangle />
      </div>
    </div>
  )
}

export default JoinUs