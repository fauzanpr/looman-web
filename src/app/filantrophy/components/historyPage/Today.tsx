import { FilantrophyTransactionModel } from "../../../../model/filantrophy/FilantrophyTransactionModel";

interface IProps {
  isLoading: boolean;
  data: FilantrophyTransactionModel
}

function Today({ isLoading, data }: IProps) {
  if (isLoading) {
    return (
      <div>
        <p className="text-gray-400 text-center">Hai! Kamu belum memiliki riwayat donasi.</p>
      </div>
    )
  }
  return (
    <div>
      {data?.data.map(item => {
        return <p>{item.transaction_date} - {item.nominal}</p>
      })}
    </div>
  )
}

export default Today