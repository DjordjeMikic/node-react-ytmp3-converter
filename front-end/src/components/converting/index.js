import { ConverterContainer, Blur, Pc } from './style';
import { X } from '../style';

const Converting = ({ percent, cls }) => (
  <Blur>
    <ConverterContainer className="flex column">
      <h1>Converting</h1>
      <Pc>{percent === 100 ? 'Completed' : `${percent}%`}</Pc>
      <X className="flex" onClick={cls}>&times;</X>
    </ConverterContainer>
  </Blur>
)

export default Converting;
