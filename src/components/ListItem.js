import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getItemRequest } from '../actions/actionCreators';
import { Facebook } from 'react-spinners-css';

export default function PostView() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { item, loading, error } = useSelector(state => state.item);

  useEffect(() => {
    dispatch(getItemRequest(id));
  }, [])


  if (loading === true) return <div style={{textAlign: 'center'}}><Facebook color={'black'}/></div>

  if (error) return (
    <div style={{textAlign: 'center', margin: 20, fontSize: 20}}>
      Something went wrong...
      <button onClick={() => dispatch(getItemRequest(id))}>Try again</button>
    </div>
  )

  return (
    <div>
      {item && <div style={{marginTop: 10}}>
        <div style={{display: 'inline-block', width: 200}}>
          {item.name}
        </div>
        <div style={{display: 'inline-block', width: 100}}>
          {item.price}
        </div>
        <div style={{display: 'inline-block', width: 200}}>
          {item.content}
        </div>
      </div>}
    </div>
  )
}