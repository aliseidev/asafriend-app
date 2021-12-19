import { useContext } from "react";

import { useReadersContext } from "../context";

import Reader from "./Reader";
import tw from "tailwind-styled-components";

function ReadersTable() {
  const { readers, loading, error } = useReadersContext();
  return (
    <>
      {loading ? (
        <span>"Caricamento..."</span>
      ) : (
        <Table>
          <thead>
            <tr>
              <Th>Letto?</Th>
              <Th>Hizb</Th>
              <Th>Nome</Th>
            </tr>
          </thead>
          <tbody>
            {[...readers]
              .sort((r1, r2) => r1.hizb - r2.hizb)
              .map(reader => (
                <Reader key={reader.id} reader={reader} />
              ))}
          </tbody>
        </Table>
      )}
    </>
  );
}

const Table = tw.table`w-full h-full border border-collapse table-auto`;
const Th = tw.th`px-8 py-4 text-left bg-purple-100 border`;

export default ReadersTable;
