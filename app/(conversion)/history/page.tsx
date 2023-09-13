import NavBar from "@/app/components/NavBar";
import HistoryWrapper from "./HistoryWrapper";

export default function HistoryPage() {
  return (
    <main className="">
      <NavBar />
      <div className="flex justify-center bg-slate-50 pb-60 items-center">
        <HistoryWrapper />
      </div>
    </main>
  );
}
