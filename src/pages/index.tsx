import Image from "next/image";
import { Inter } from "next/font/google";
import Feature from "@/components/Feature";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div>
        <h1 className="scroll-text w-full">
          Welcome to EqualDecks! Where we're all equals in the name of art and
          skateboarding. Feel free to visit our "About Us" section to learn
          more! Visit our "Gallery" section to see some rad pics featuring our
          handmade boards.
        </h1>
        <img className="w-full h-full crop" src="sunShiningFeetCloseUp.jpg" />
      </div>
      <div className="flex flex-row justify-center space-x-48 p-10">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </main>
  );
}
