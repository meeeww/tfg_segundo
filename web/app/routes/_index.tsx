import type { MetaFunction } from "@remix-run/node";
import Header from "../components/header";
import Footer from "../components/footer";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
