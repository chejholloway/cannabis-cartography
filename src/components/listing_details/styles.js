import styled from 'styled-components';
import palette from '../../constants/palette';

export const Wrapper = styled.div`
  padding-top: 20px;
  a {
    text-decoration: none;
  }
`;

export const CardWrapper = styled.div`
  min-height: 70px;
  margin-bottom: 10px;
  padding: 20px;
  background: ${palette.white};
  box-shadow: ${palette.shadow} 0px 0.0625rem 0.1875rem;
  animation: fadein .5s;
`;

export const TopRight = styled.div`
  text-align: right;
  a {
    color: ${palette.gray4};
  }
  a:hover {
    color: ${palette.teal};
  }
`

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const AvatarWrapper = styled.div`
  img {
    width: 20vw;
    height: 20vw;
    max-width: 180px;
    max-height: 180px;
  }
`;

export const TextColumn = styled.div`
  margin-left: 20px;
  div {
    text-align: left;
  }
`

export const LocationRow = styled.div`
  color: ${palette.gray2};
  font-size: 16px;
  text-transform: capitalize;
`

export const TitleRow = styled.div`
  color: ${palette.gray4};
  font-size: 24px;
  font-weight: bold;
`

export const BodyWrapper = styled.div`
  color: ${palette.gray2};
  font-size: 16px;
  width: 100%;
  text-align: left;
  margin-top: 10px;
`

export const BodyBlock = styled.div`
  margin-top: 10px;
  a {
    color: ${palette.gray4};
  }
  a:hover {
    color: ${palette.teal};
  }
`

export const BodySpan = styled.span`
  margin: auto 20px auto 0;
`
