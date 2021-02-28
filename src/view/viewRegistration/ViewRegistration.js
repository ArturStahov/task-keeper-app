import RegistrationForm from 'components/Auth/RegistrationForm';
import Section from 'components/Section';
import { Wrapper, Title, SelectElem } from './StyledComponent';

export default function ViewRegistration() {
  return (
    <Wrapper>
      <Title>
        <SelectElem>Task-keeper</SelectElem>- do not forget -
      </Title>
      <Section>
        <RegistrationForm />
      </Section>
    </Wrapper>
  );
}
