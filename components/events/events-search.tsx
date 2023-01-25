import { useRef } from "react";
import Button from "../ui/button";
import classes from './events-search.module.css';

const EventsSearch=(props:any)=>{

    const yearInputRef:any=useRef(null)
    const monthInputRef:any=useRef(null)
    const submitHandler=(e:any)=>{
        e.preventDefault()

        const selectedYear=yearInputRef.current.value;
        const selectedMonth=monthInputRef.current.value;
         
        props.onSearch(selectedYear,selectedMonth);
    }

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}> 
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={yearInputRef}>
                        <option value="2021">2021</option>
                         <option value="2022">2022</option>
                    </select>
                </div>
            </div>
            <div className={classes.control}>
            <label htmlFor="month">Month</label>
            <select id="month" ref={monthInputRef}> 
                 <option id="month">select</option>
                 <option value="1"> Jan</option>
                 <option value="2"> fab</option>
                 <option value="3"> Mar</option>
                 <option value="4"> Apri</option>
                 <option value="5">  May</option>
                 <option value="6">  Jun</option>
                 <option value="7"> Jul</option>
                 <option value="8"> Aug</option>
                 <option value="9"> Sep</option>
                 <option value="10"> Oct</option>
                 <option value="11"> Nov</option>
                 <option value="12"> Dec</option>
                 
            </select>
            <button>find</button>
            </div>
        </form>
    )
}
export default EventsSearch;