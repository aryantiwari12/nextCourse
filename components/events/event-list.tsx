import EventItem from "./event-item";
import classes from './event-list.module.css'
const EventList=(props:any)=>{

    const {items}=props

    return(<>
       <ul className={classes.list}>
         {items.map((event:any)=>(
            <EventItem 
            id={event.id} 
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
   
            />
         ))}
       </ul>
       <div>
         
       </div>
       </>
    )
}
export default EventList;