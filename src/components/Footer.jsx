import tw from "tailwind-styled-components";

function Footer() {
  return (
    <Container>
      © Copyright 2021 - MIT Licence | Made by alisei with
      {Icon}
    </Container>
  );
}

const Container = tw.footer`container flex justify-center px-3 py-4 text-sm text-center text-gray-300`;

const Icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="inline w-5 h-5 pl-1"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
      clipRule="evenodd"
    />
  </svg>
);

export default Footer;
