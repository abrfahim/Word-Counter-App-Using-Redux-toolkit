import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from '../../../redux/state/counter/CounterSlice'
const Counter = () => {

    const counter =  useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div className="card">
                <div className='card-header bg-secondary'>
                    <h4 className='text-white'>My Conter App</h4>
                </div>
                <div className='card-body'>
                    <h4>{counter}</h4>
                </div>
                <div className='my-4'>
                    <button onClick={()=>{dispatch(increment())}} className='btn btn-success btn-sm'>Increase</button>
                    <button onClick={()=>{dispatch(decrement())}} className='btn mx-2 btn-danger btn-sm'>Decrease</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;