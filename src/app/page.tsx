import Header from "./Header";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home of none application",
  description: "Generated by create next app",
};


export default function Home() {
  return (
    <main>
      <Header />
    </main>
  );
}
