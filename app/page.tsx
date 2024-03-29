import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
   <div className="flex justify-center items-center">
    <section className="flex  items-center justify-center min-h-screen w-1/2">
    <div>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <p>Hello</p>
    </div>
    {/* <UserButton/> */}
    </section>
  
   </div>
  );
}
