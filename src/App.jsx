import tw from "tailwind-styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ReadersTable from "./components/ReadersTable";
import Controls from "./components/Controls";
import Report from "./components/Report";

function App() {
  return (
    <Layout>
      <Header />
      <Report />
      <Controls />
      <ReadersTable />
      <Footer />
    </Layout>
  );
}

const Layout = tw.div`w-screen h-screen max-w-3xl mx-auto text-gray-800 flex flex-col p-4`;

export default App;
