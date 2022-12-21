import { useRouter } from "next/router"

const FilteredEventsPage=()=>{
  const router=useRouter() as any
  console.log(router.query.slug[1])
    return(
        <>
          <h1>Filtered Events</h1>
        </>
    )
}
export default FilteredEventsPage