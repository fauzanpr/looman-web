import { useState } from "react";
import Today from "../components/historyPage/Today";
import Month from "../components/historyPage/Month";
import Week from "../components/historyPage/Week";
import Year from "../components/historyPage/Year";
import FilantrophyLayout from "./layout";

type HISTORY_PAGE = "today" | "week" | "month" | "year";

function Filantrophy() {
  const [historyPage, setHistoryPage] = useState<HISTORY_PAGE>("today");
  return (
    <>
      <FilantrophyLayout headerType={"profile"}>
        <main className="px-4 py-16 flex flex-col gap-16">
          <div>
            <p className="text-gray-400 text-center text-lg">Jumlah Donasi</p>
            <p className="text-center font-semibold text-4xl">0x <span className="font-extralight">Berdonasi</span></p>
          </div>

          <div className="flex flex-col gap-4">
            <p>Catatan Berbagi</p>
            <div className="flex justify-between text-gray-400">
              <button className={`py-2 px-6 rounded-full ${historyPage === "today" ? "bg-primarySurface text-primary font-medium" : null}`} onClick={() => setHistoryPage("today")}>Today</button>
              <button className={`py-2 px-6 rounded-full ${historyPage === "week" ? "bg-primarySurface text-primary font-medium" : null}`} onClick={() => setHistoryPage("week")}>Week</button>
              <button className={`py-2 px-6 rounded-full ${historyPage === "month" ? "bg-primarySurface text-primary font-medium" : null}`} onClick={() => setHistoryPage("month")}>Month</button>
              <button className={`py-2 px-6 rounded-full ${historyPage === "year" ? "bg-primarySurface text-primary font-medium" : null}`} onClick={() => setHistoryPage("year")}>Year</button>
            </div>
          </div>

          <div>
            {historyPage === "today" ? <Today /> : null}
            {historyPage === "week" ? <Week /> : null}
            {historyPage === "month" ? <Month /> : null}
            {historyPage === "year" ? <Year /> : null}
          </div>
        </main>
      </FilantrophyLayout>
    </>
  )
}

export default Filantrophy;