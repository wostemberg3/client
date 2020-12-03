import * as S from './styles'

export default function Main({
  title = 'Testando by Jest',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) {
  return (
    <S.Wrapper>
      <S.Logo
        src="/assets/img/logo.png"
        alt="Átomo que representa o logotipo do ReactJS"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/assets/img/programming.png"
        alt="Um pessoa sentada em frente de um PC e bandeiras dos países em volta"
      />
    </S.Wrapper>
  )
}
