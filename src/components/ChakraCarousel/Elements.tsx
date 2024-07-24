import styled, { useTheme } from 'styled-components';


export const Flex = styled.div`
  padding: 4em;
  background: papayawhip;
`;

// export const Box = styled.div({
//     // background: 'palevioletred',
//     // height: '50px',
//     // width: '50px'
//     margin: ${props => props.size};
// });
export const Box = styled.div`
   width: ${props => props.w};
   margin-left: ${props => props.ml};
   padding:0px ${props => props.px} 0px ${props => props.px};
`;


export const VStack = styled.div`
  display:flex;
  margin: ${props => props.size};
`;
