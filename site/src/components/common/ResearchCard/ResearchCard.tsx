import { memo } from 'react'
import cx from 'classnames'
import { string, shape, arrayOf, number, bool, InferProps } from 'prop-types'

import Icon from 'components/Icon'
import Button from 'components/Button'
import TagButton from 'components/TagButton'
import { tag } from 'entities/tag'

import s from './ResearchCard.module.scss'

function ResearchCard({ className, content, withTags }: InferProps<typeof ResearchCard.propTypes>) {
  return (
    <Button href={content.link} className={cx(s.root, className)}>
      <div>
        <div className={s.info}>
          <p className={s.author}>{content.author}</p>
          <p className={s.date}>{content.date}</p>
        </div>
        <h3 className={s.title}>{content.title}</h3>
      </div>
      {withTags && (
        <div className={s.tags}>
          {content.tags?.map((tag) => (
            <TagButton className={s.tag} key={tag?.id} tag={tag?.name} />
          ))}
        </div>
      )}
      <Icon name='arrow-up' className={s.arrow} />
    </Button>
  )
}
;``
ResearchCard.propTypes = {
  className: string,
  withTags: bool,
  content: shape({
    id: number,
    author: string,
    date: string,
    title: string,
    link: string,
    tags: arrayOf(tag),
  }).isRequired,
}

export default memo(ResearchCard)
