import styled from "styled-components";
import palette from '../../constants/palette';

export const ListingGroups = styled.div`
  margin-top: 30px;
  width: 100%;
  animation: fadein .5s, growY .7s;
  h2 {
    text-align: left;
    color: ${palette.gray4};
  }
`;
