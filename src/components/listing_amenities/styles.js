import styled from 'styled-components';
import palette from '../../constants/palette';

export const LocationRow = styled.div`
  color: ${palette.gray2};
  font-size: 16px;
  text-transform: capitalize;
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
