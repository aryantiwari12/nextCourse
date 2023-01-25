import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data";
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";

const AllEventsPage = () => {

    const events = getAllEvents();
    const Router=useRouter()     
    const findEventsHandler=(year:any,month:any)=>{ 
        const fullpath=`/events/${year}/${month}`
        Router.push(fullpath)     
    }


    return (
        <>
            <EventsSearch onSearch={findEventsHandler}/>
            <EventList items={events}>
                <h1>All Events</h1>
            </EventList>
        </>
    )
}
export default AllEventsPage;