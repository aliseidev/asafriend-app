import React, { useState, useEffect } from "react";
import { useReadersContext } from "../context";

import tw from "tailwind-styled-components";

function Reader({ reader }) {
  const { dispatch } = useReadersContext();

  const [done, setDone] = useState(reader.done);
  const [name, setName] = useState(reader.name);

  // Since the state is managed by the Context API, but we are using controlled inputs (i.e. useState)
  // we need to update them whenever the state changes.
  useEffect(() => {
    setName(reader.name);
    setDone(reader.done);
  }, [reader]);

  // Whenever a name or 'done' status changes, we send an "update" action.
  useEffect(() => {
    dispatch({
      type: "UPDATE_READER",
      reader: {
        name: name,
        done: done,
        id: reader.id,
      },
    });
  }, [done, name, reader.id]);

  return (
    <Tr>
      <Done>
        <Checkbox
          type="checkbox"
          value={done}
          checked={done}
          onChange={e => setDone(e.target.checked)}
        />
      </Done>
      <Hizb>{reader.hizb}</Hizb>
      <Name>
        <span
          contentEditable={true}
          suppressContentEditableWarning={true}
          onBlur={e => setName(e.target.innerText)}
        >
          {name}
        </span>
      </Name>
    </Tr>
  );
}

const Tr = tw.tr`border`;
const Done = tw.td`px-8 py-3 text-center flex justify-center items-center`;
const Checkbox = tw.input`w-5 h-5 text-indigo-600 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50`;
const Hizb = tw.td`px-8 py-3 text-center border`;
const Name = tw.td`px-8 py-3 border`;

export default Reader;
