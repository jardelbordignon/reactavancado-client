import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

//import icons from './content'
import * as S from './styles'
import { SectionTechType } from 'types/api'
import { getMediaUrl } from 'utils'

const SectionTech = ({ title, techIcons }: SectionTechType) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techIcons.map(({ title, icon }) => (
          <S.Icon key={title}>
            <S.Icons
              src={getMediaUrl(icon.data.attributes.url)}
              alt={title}
              loading="lazy"
            />
            <S.IconsName>{title}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
