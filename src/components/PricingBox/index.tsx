import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'
import { PricingBoxType } from 'types/api'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({
  benefits,
  button,
  installmentPrice,
  installmentsQuantity,
  totalPrice
}: PricingBoxType) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>R$ {totalPrice}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{installmentsQuantity}x de</span> R$ {installmentPrice}
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList dangerouslySetInnerHTML={{ __html: benefits }} />

    <Button href={button.url} onClick={onClick} withPrice>
      <p>{button.label}</p>
      <div>
        <S.ButtonFullPrice>R$ {totalPrice}</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>
          R$ {installmentsQuantity * installmentPrice}
        </S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
