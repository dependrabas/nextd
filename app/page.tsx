import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Next.js App</h1>
      
      <p className="text-lg mt-4">This is a simple home page with an image.</p>
    </div>
  );
}