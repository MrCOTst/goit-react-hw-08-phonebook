import { Container, ContainerTitle, ContainerText } from './welcome.styled';

export default function Welcome() {
  return (
    <Container>
      <ContainerTitle>
        Welcome to our service! The safety of your contacts is our concern
      </ContainerTitle>
      <ContainerText>
        To use the service, please register or log in
      </ContainerText>
    </Container>
  );
}
