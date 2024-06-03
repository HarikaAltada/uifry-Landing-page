import Image from "next/image";
import { Inter } from "next/font/google";
import Customizable from "@/Components/Customizable";
const inter = Inter({ subsets: ["latin"] });
import Nav from "@/Components/Nav";
import Main from "@/Components/Main";
import Permium from "@/Components/Permium";
import Notification from "@/Components/Notification";
import Testimonial from "@/Components/Testimonial";
import FAQ from "@/Components/Faq";
export default function Home() {
  return (
    <div>
      <Nav />
      <Main />
      <Permium />
      <Notification />
      <Customizable />
      <Testimonial />
      <FAQ />
    </div>
  );
}
