import React from "react";
import copy from "copy-to-clipboard";
import { useReadersContext } from "../context";

import tw from "tailwind-styled-components";

function Report() {
  const { readers, dispatch } = useReadersContext();

  function genReport() {
    let report = [];
    readers.forEach((reader, index) => {
      report.push(
        `${reader.done ? "✅" : ""} *${index + 1}* ${reader.name} \n`
      );
    });

    copy(report.join(""), {
      message: undefined,
    });

    return window.alert("Testo copiato! Ora puoi incollarlo su Whatsapp.");
  }
  
  return (
    <Layout>
      <ReportBtn onMouseUp={() => genReport()}>
        Report
        <Icon icon="print" />
      </ReportBtn>
      <ResetBtn onMouseUp={() => dispatch({ type: "RESET_DONE" })}>
        <Icon icon="restart_alt" />
      </ResetBtn>
    </Layout>
  );
}

const Icon = ({ icon }) => <span className="material-icons-round">{icon}</span>;

const Layout = tw.div`flex justify-center gap-x-1.5`;
const ReportBtn = tw.button`px-6 py-2 flex flex-row justify-start items-center gap-3 font-medium text-white bg-purple-500 rounded`;
const ResetBtn = tw.button`px-2 py-2 flex flex-row justify-start items-center gap-3 font-medium text-white bg-red-500 rounded-full`;

export default Report;
