export const getStaticProps = async () => {
  const API_URL = "https://ghibliapi.herokuapp.com/films"
  const request = await fetch(API_URL)
  const posts = await request.json()
  return { props : {posts}}
}

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div >
      <main>
        {posts.map(post => (
          <div href={`${post.locations[0]}`} key={post.id}>
            <h3>{post.title}</h3>
            <img src={post.image}/>
          </div>
        ))}
      </main>
    </div>
  )
}
