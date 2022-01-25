import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

//import content from './content'
import * as S from './styles'
import { SectionConceptsType } from 'types/api'

const SectionConcepts = ({ title, concepts }: SectionConceptsType) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{title}</Heading>
      <S.List>
        {concepts.map(({ title }) => (
          <S.Item key={title}>{title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
