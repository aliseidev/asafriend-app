import React from "react";
import { useReadersContext } from "../context";

import tw from "tailwind-styled-components";


function Controls() {
  const { dispatch } = useReadersContext();

  return (
    <Container>
      <Button onMouseUp={() => dispatch({ type: "PREV_KHATMA" })}>
        Precedente
        <Icon icon="skip_previous" />
      </Button>
      <Button onMouseUp={() => dispatch({ type: "NEXT_KHATMA" })}>
        Prossima
        <Icon icon="skip_next" />
      </Button>
    </Container>
  );
}

const Icon = ({ icon }) => <span className="material-icons-round">{icon}</span>;

const Container = tw.div`container flex flex-row justify-between items-center w-full py-4 gap-10`;
const Button = tw.button`flex flex-col items-center justify-center w-full px-6 py-2 font-medium text-white bg-green-500 rounded focus:ring-4 ring-green-700`;

export default Controls;
