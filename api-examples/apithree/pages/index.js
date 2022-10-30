import useSWR from "swr";

export default function Home() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    "https://ghibliapi.herokuapp.com/films",
    fetcher
  );

  if (error) return <div>failed to load</div>;

  if (!data) return <div>loading...</div>

  console.log(data);

  return (
    <div>
      <h2>{data[0].title}</h2>
      <p>Original Title: {data[0].original_title}</p>

      {
        data.map(
          (movie, index) => (
            <div key={index}>
              <img src={movie.image}/>
              <div>{movie.title}</div>
              <div>{movie.original_title}</div>
            </div>
          )
        )
      }
    </div>
  )
}
