import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeReserve, updateAmountReserveRequest } from '../../Store/Modules/reserve/actions';
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md';

export default function Reservations() {
  const dispatch = useDispatch();
  const reserves = useSelector(state => state.reserve);

  function handleRemove(id){
    dispatch(removeReserve(id));
  }

  function decrementAmount(trip){
    dispatch(updateAmountReserveRequest(trip.id, trip.amount - 1 ));
  }

  function incrementAmount(trip){
    dispatch(updateAmountReserveRequest(trip.id, trip.amount + 1 ));
  }

 return (
   <div>
       <h1 className='title'>You requested {reserves.length} servants</h1>

       {reserves.map(reserve => (
       <div className='reservations-' key={reserve.id}>
          <img src={reserve.image} alt={reserve.title}/>
          <strong>{reserve.title}</strong>
          <div className='amount'>
            <button type='button' onClick={() => incrementAmount(reserve)}><MdAddCircle size={25} color='#191919'/></button>
            <input type='text' readOnly value={reserve.amount} />
            <button type='button' onClick={() => decrementAmount(reserve)}><MdRemoveCircle size={25} color='#191919'/></button>  
          </div>
          <button type='button' onClick={() => handleRemove(reserve.id)}><MdDelete size={20} color='#191919'/></button>
       </div>
       ))}
       <footer>
         <button type='button'>Request reservations</button>
       </footer>
   </div>
 );
}