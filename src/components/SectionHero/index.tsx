import React from 'react'

import Logo from 'components/Logo'
import Button from 'components/Button'
import * as S from './styles'

import { gaEvent, getMediaUrl } from 'utils'
import Container from 'components/Container'
import { HeaderType, LogoType } from 'types/api'

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' })

type Props = {
  logo: LogoType
  header: HeaderType
}

const SectionHero = ({ logo, header }: Props) => {
  return (
    <S.Wrapper>
      <Container>
        <Logo {...logo} />

        <S.Content>
          <S.TextBlock>
            <S.Title>{header.title}</S.Title>
            <S.Description>{header.description}</S.Description>
            <S.ButtonWrapper>
              <Button href={header.button.url} onClick={onClick} wide>
                {header.button.label}
              </Button>
            </S.ButtonWrapper>
          </S.TextBlock>

          <S.Image
            src={getMediaUrl(header.media.data.attributes.url)}
            alt={header.media.data.attributes.alternativeText}
          />
        </S.Content>
      </Container>
    </S.Wrapper>
  )
}

export default SectionHero
