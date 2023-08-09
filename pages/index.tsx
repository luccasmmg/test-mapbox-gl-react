import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

const DynamicAutoFill = dynamic(() => import("../components/Example"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <DynamicAutoFill />;
}
