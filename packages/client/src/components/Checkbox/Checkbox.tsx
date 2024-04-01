import { useTheme } from 'styled-components';

import {
  CheckboxContainer,
  CheckboxInner,
  StyledMusic,
  StyledVideo,
} from './Checkbox.style';

interface CheckboxProps {
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ id, name, onChange, value }) => {
  const theme = useTheme();

  return (
    <CheckboxContainer htmlFor={id}>
      <CheckboxInner video={value ? 'true' : ''}>
        {value ? (
          <StyledVideo fill={theme.bgBlue} />
        ) : (
          <StyledMusic fill={theme.bgBlue} />
        )}
      </CheckboxInner>

      <input
        type="checkbox"
        name={name}
        id={id}
        style={{ display: 'none' }}
        onChange={onChange}
        checked={value}
      />
    </CheckboxContainer>
  );
};
