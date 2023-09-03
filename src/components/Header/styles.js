import styled from 'styled-components';
import palette from '../../constants/palette';
import pixels from '../../constants/pixels';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
  height: ${pixels.headerHeight}px;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  background-color: ${palette.black};
  color: ${palette.white};

  img {
    width: 110px;
    height: 25px;
  }
`;
