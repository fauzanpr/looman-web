// import { useState } from "react";
// import Today from "../components/historyPage/Today";
// import Month from "../components/historyPage/Month";
// import Week from "../components/historyPage/Week";
// import Year from "../components/historyPage/Year";
import FilantrophyLayout from "./layout";
import useGetFilantrophyTransaction from "../hooks/useGetFilantrophyTransaction";
import { currency } from "../../../utils/curency";

// type HISTORY_PAGE = "today" | "week" | "month" | "year";

function Filantrophy() {
  // const [historyPage, setHistoryPage] = useState<HISTORY_PAGE>("today");
  const { filantrophyTransaction, isLoading } = useGetFilantrophyTransaction();

  return (
    <>
      <FilantrophyLayout headerType={"profile"}>
        <main className="px-4 py-16 flex flex-col gap-16">
          <div>
            <p className="text-gray-400 text-center text-lg">Jumlah Donasi</p>
            <p className="text-center font-semibold text-4xl">{isLoading ? "" : filantrophyTransaction?.data.data.length}x <span className="font-extralight">Berdonasi</span></p>
          </div>

          <div>
            {/* <div className="flex flex-col gap-4"> */}
            <p className="mb-4">Catatan Berbagi</p>
            {/* <div className="flex justify-between text-gray-400">
              <button className={`py-2 px-6 rounded-full ${historyPage === "today" ? "bg-primarySurface text-primary font-medium" : null}`} onClick={() => setHistoryPage("today")}>Today</button>
              <button className={`py-2 px-6 rounded-full ${historyPage === "week" ? "bg-primarySurface text-primary font-medium" : null}`} onClick={() => setHistoryPage("week")}>Week</button>
              <button className={`py-2 px-6 rounded-full ${historyPage === "month" ? "bg-primarySurface text-primary font-medium" : null}`} onClick={() => setHistoryPage("month")}>Month</button>
              <button className={`py-2 px-6 rounded-full ${historyPage === "year" ? "bg-primarySurface text-primary font-medium" : null}`} onClick={() => setHistoryPage("year")}>Year</button>
            </div> */}
            {/* </div> */}

            <div className="flex flex-col gap-2">
              {isLoading ? <p>Loading...</p> : filantrophyTransaction?.data.data.map(item => <div className="bg-primary p-4 rounded-lg text-white flex flex-col gap-1 " key={item.id}>
                <p className="text-xs font-thin text-gray-100">{item.transaction_number}</p>
                <p className="font-medium">{item.transaction_date}</p>
                <p className="font-light text-gray-200">{currency(item.nominal)}</p>
                <p>{item.note}</p>
              </div>)}
              {!isLoading && filantrophyTransaction?.data.data.length === 0 ? <p className="text-gray-400">Hai! Kamu belum memiliki riwayat donasi.</p> : null}
            </div>
            {/* {historyPage === "today" ? <Today data={filantrophyTransaction} isLoading={isLoading} /> : null}
            {historyPage === "week" ? <Week /> : null}
            {historyPage === "month" ? <Month /> : null}
            {historyPage === "year" ? <Year /> : null} */}
          </div>
        </main>
      </FilantrophyLayout>
    </>
  )
}

export default Filantrophy;