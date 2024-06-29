import HistoryCard from "../components/HistoryCard"
import MerchantLayout from "../components/MerchantLayout"

function MerchantHistory() {
    return (
        <MerchantLayout headerType="profile">
            <main className="px-4 py-8 flex flex-col gap-4">
                <HistoryCard title="Title gan" description="lorem ipsijshfsalkfjssjlfdsd" />
                <HistoryCard title="Title gan" description="lorem ipsijshfsalkfjssjlfdsd" />
                <HistoryCard title="Title gan" description="lorem ipsijshfsalkfjssjlfdsd" />
                <HistoryCard title="Title gan" description="lorem ipsijshfsalkfjssjlfdsd" />
                <HistoryCard title="Title gan" description="lorem ipsijshfsalkfjssjlfdsd" />
            </main>
        </MerchantLayout>
    )
}

export default MerchantHistory