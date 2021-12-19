import tw from "tailwind-styled-components";

function Header() {
  return (
    <Container>
      <Title>!السلام عليكم</Title>
      <Welcome> Benvenuta/o! </Welcome>
      <Text1>
        Questa è una piccola app per facilitare la gestione del gruppo di
        lettura delle khatmat.
      </Text1>
      <Text2>
        Che Allah عَزَّ وَجَلَّ accetti i tuoi sforzi e accresca le tue buone
        azioni.
      </Text2>
    </Container>
  );
}

const Container = tw.header`container px-8 py-6 mx-auto`;
const Title = tw.h1`mb-6 text-4xl font-semibold text-center text-green-600`;
const Welcome = tw.h2`text-2xl text-center text-green-400`;
const Text1 = tw.p`mb-2 text-center`;
const Text2 = tw.p`text-sm text-center text-gray-500`;

export default Header;
