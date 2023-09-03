import styled from 'styled-components';
import palette from '../../constants/palette';

export const Wrapper = styled.div`
  a {
    text-decoration: none;
  }
  a > div {
    border: 1px solid transparent;
  }
  a:hover > div {
    transition: all .2s ease-in-out;
    &:hover {
      transform: scale(1.025);
      border: 1px solid ${palette.teal};
    }
  }
`;

export const CardWrapper = styled.div`
  min-height: 70px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 20px;
  background: ${palette.white};
  box-shadow: ${palette.shadow} 0px 0.0625rem 0.1875rem;
`;

export const TextColumn = styled.div`
  margin-left: 20px;
  div {
    text-align: left;
  }
`

export const LocationRow = styled.div`
  color: ${palette.gray2};
  font-size: 12px;
`

export const TitleRow = styled.div`
  color: ${palette.gray4};
  font-size: 18px;
  font-weight: bold;
`
