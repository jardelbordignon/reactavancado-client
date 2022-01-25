import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionAboutProjectType } from 'types/api'
import { getMediaUrl } from 'utils'

const SectionAboutProject = ({
  title,
  description,
  media
}: SectionAboutProjectType) => {
  const { url, alternativeText } = media.data.attributes
  return (
    <S.Wrapper>
      <Container>
        <S.Container>
          <S.Image
            src={getMediaUrl(url)}
            alt={alternativeText}
            loading="lazy"
          />
          <div>
            <Heading>{title}</Heading>
            <S.Text dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </S.Container>
      </Container>
    </S.Wrapper>
  )
}

export default SectionAboutProject
