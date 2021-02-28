import AutherizationForm from 'components/Auth/AutherizationForm';
import Section from 'components/Section';
import { Wrapper, Title, TitleLogo } from './StyledComponent';

export default function viewAutherization() {
  return (
    <Wrapper>
      <Title>
        <TitleLogo>Task-keeper</TitleLogo>- do not forget -
      </Title>
      <Section>
        <AutherizationForm />
      </Section>
    </Wrapper>
  );
}
