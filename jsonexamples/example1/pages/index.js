import records from '../data/records.json';

export default function Home() {
  return (
    <div >
      {
        records.map( record => {
          return(
            <div key={record.id}>
              {record.title} - {record.content}
            </div>
          )
        })
      }
    </div>
  )
}
