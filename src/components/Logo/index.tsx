import React from 'react'

import { getMediaUrl } from 'utils/getMediaUrl'
import { LogoType } from 'types/api'

import * as S from './styles'

const Logo = (logo: LogoType) => {
  const { url, alternativeText } = logo.data.attributes

  return <S.LogoWrapper src={getMediaUrl(url)} alt={alternativeText} />
}

export default Logo
