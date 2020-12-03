import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  height: 100%;
  display: flex;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  max-height: 5rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(20rem, 100%);
`
