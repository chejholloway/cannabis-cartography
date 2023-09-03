import styled from "styled-components";
import palette from '../../constants/palette';

export const Wrapper = styled.div`
  background-color: ${palette.white};
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  border-bottom: 1px solid ${palette.gray1};
  padding: 0 0 16px;

  h2 {
    font-weight: 300;
    color: ${palette.gray2};
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 16px;
`;

export const LocationSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  height: 80px;
`;

export const LocateButton = styled.a`
  width: 105px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: start;
  border: 1px solid ${props => props.disabled ? palette.gray3 : palette.gray4};
  background: ${props => props.disabled ? palette.gray1 : palette.white};
  color: ${props => props.disabled ? palette.gray3 : palette.gray4};
  border-radius: 3px;
  padding: 5px;
  font-size: 12px;
  font-weight: bold;
  cursor: ${props => props.disabled ? 'wait' : 'pointer'};
  text-transform: uppercase;
  transition: all .1s ease-in-out;
  &:hover {
    background: ${props => props.disabled ? palette.gray1 : palette.teal};
    color: ${props => props.disabled ? palette.gray3 : palette.white};
  }

  svg {
    margin-right: 10px;
  }
`;

export const TextContent = styled.div`
  width: 100%;
  max-width: 1100px;
  height: auto;
  text-align: left;
  color: ${palette.gray2};
  line-height: 25px;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 300;
`;
