import styled from 'styled-components';

export default styled.div`
  border-width: ${(props) => props.width || 'thin'};
  border-color: ${(props) => props.color || '#c2c2c2'};
  border-radius: ${(props) => props.radius || '5px'};
  border-style: ${(props) => props.style || 'solid'};
  padding: ${(props) => props.padding || '0'};
`;
