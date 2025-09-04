import { Header } from "@/components/Header";
import { SpinsLoader } from "@/components/SpinLoader";

export default async function Home() {

  return (
    <div>
      <SpinsLoader containerClasses="min-h-[500px]"></SpinsLoader>
    </div>
  );
}
