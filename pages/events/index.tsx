import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data";

const AllEventsPage = () => {

    const events = getAllEvents();



    return (
        <>
            <EventList items={events}>
                <h1>All Events</h1>
            </EventList>
        </>
    )
}
export default AllEventsPage;