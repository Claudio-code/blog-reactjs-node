import styled from 'styled-components';
import typography from '@material-ui/core/Typography';

export const Typography = styled(typography).attrs({
  variant: "h6"
})`
  font-weight: bold;
  font-size: 24px;
  margin-right: 20%;
  cursor: pointer;
`;

export const ContainerHeader = styled.div`
  padding: 2%;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  
`;

export const HeaderMenus = styled.div`
  display: flex;
  flex-direction: row;
`;
