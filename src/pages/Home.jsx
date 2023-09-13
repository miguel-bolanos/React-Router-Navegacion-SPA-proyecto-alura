import ListPosts from "../components/ListPosts"

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
        <ListPosts url={'/posts'}/>
      </div>
    </main>
  )
}

export default Home
