import NewsCard from "../../components/news/NewsCard"
import FilantrophyLayout from "../layout"

function News() {
  return (
    <FilantrophyLayout headerType="titleOnly" headerTitle="Berita">
      <main className="px-4 py-8 flex flex-col gap-4">
        <NewsCard title="Title" description="description is description" />
        <NewsCard title="Title" description="description is description" />
        <NewsCard title="Title" description="description is description" />
        <NewsCard title="Title" description="description is description" />
      </main>
    </FilantrophyLayout>
  )
}

export default News