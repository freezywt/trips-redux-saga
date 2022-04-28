import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { addReserveRequest } from '../../Store/Modules/reserve/actions';
import { MdFlightTakeoff } from 'react-icons/md';
import './styles.css';

import api from '../../Services/api';

export default function Home() {
  const dispatch = useDispatch();
  const [ trips, setTrips ] = useState([]);

  useEffect(() => {
    async function loadApi(){
      const response = await api.get('trips');
      setTrips(response.data);
    }
    
    loadApi();
  }, [])

  function handleAdd(id){
    dispatch(addReserveRequest(id));
  }

 return (
   <div>
       <div className="box">
         {trips.map(trip => (
           <li key={trip.id}>
             <img src={trip.image} alt={trip.title} />
             <strong>{trip.title}</strong>
             <span>Status : {trip.status ? 'Available' : 'Unavailable' }</span>

             <button type="button" onClick={() => handleAdd(trip.id)}>
               <div>
                 <MdFlightTakeoff size={16} color='#fff' />
               </div>
                <span>Request reservation</span>
             </button>
           </li>
         ))}
       </div>
   </div>
 );
}