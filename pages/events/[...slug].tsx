import { useRouter } from "next/router"
import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import { getFilteredEvents } from "../../dummy-data";

const FilteredEventsPage = () => {
  const router = useRouter() as any
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>
  }
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth

  if (isNaN(numYear) || isNaN(numMonth)
    || numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 || numMonth > 12) {
    return (
      <Fragment>
         <div className="center">
        <p>Invalid filter.. Please Adjust your values!</p>
        <Button link={`/events`}>Show All Events</Button>
         </div>
      </Fragment>
    )
  }

  const filterEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  })

  if (!filterEvents || filterEvents.length === 0) {
    return <Fragment><p>No events found for the chosen filter</p></Fragment>
    
  }

  const date=new Date(numYear,numMonth-1);

  return (
    <Fragment>
      <ResultsTitle date={date}/>
      <EventList item={filterEvents} />
      
    </Fragment>

  )
}
export default FilteredEventsPage 