import styled from 'styled-components';
import palette from '../../constants/palette';

export const Wrapper = styled.div`
  min-height: 30px;
  display: flex;
  align-items: center;
`;

export const Stars = styled.div`
  margin: auto 0;
  position: relative;
  display: inline-block;
  padding: 0;
  text-shadow: 0px 1px 0 ${palette.shadow};
`

export const FillStars = styled.div`
  color: ${palette.teal};
  padding: 0;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  overflow: hidden;
  width: ${props => props.percent || '0%'}
`
export const EmptyStars = styled.div`
  color: ${palette.gray2};
  padding: 0;
  z-index: 0;
`

export const Rating = styled.span`
  margin: auto 10px;
  color: ${palette.gray2};
`
