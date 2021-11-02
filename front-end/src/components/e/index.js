import { EContainer } from './style';

const E = ({ error, ...rest }) => (
  <EContainer className="flex">
    <p>{error}</p>
    <span {...rest}>&times;</span>
  </EContainer>
)

export default E;
