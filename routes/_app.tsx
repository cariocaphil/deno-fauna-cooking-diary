import { AppProps } from "$fresh/server.ts";
import Navbar from "../components/Navbar.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Navbar />
      <Component />
    </>
  );
}
