import { Container, ContainerTitle, ContainerText } from './welcome.styled';

export default function Welcome() {
  return (
    <Container>
      <ContainerTitle>Welcome to our service!</ContainerTitle>
      <ContainerText>
        The safety of your contacts is our concern.
        <br />
        To use the service, please register or log in
      </ContainerText>
    </Container>
  );
}
