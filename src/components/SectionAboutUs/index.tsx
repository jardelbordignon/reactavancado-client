import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

// import content from './content'
import * as S from './styles'
import { SectionAboutUsType } from 'types/api'

const SectionAboutUs = ({ title, authors }: SectionAboutUsType) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors.data.map(({ attributes }) => {
        const { avatar, description, name, role, socialLinks } = attributes
        return (
          <ProfileCard
            key={name}
            name={name}
            role={role}
            image={avatar.data.attributes.url}
            socialLinks={socialLinks}
            description={description}
          />
        )
      })}
    </S.Content>
  </Container>
)

export default SectionAboutUs
