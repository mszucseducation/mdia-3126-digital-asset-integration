export default function PageNum({
  num=1,
  total=4
}){

  return <div>
    {num}/{total}
  </div>
}