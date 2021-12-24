import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getServicesRequest } from '../actions/actionCreators';
import { Facebook } from 'react-spinners-css';
import { useNavigate } from 'react-router-dom';

export default function ServiceList() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(getServicesRequest());
  }, []);

  const { items, loading, error } = useSelector(state => state.services);

  const handleWatch = (id) => {
    navigate(`${id}/details`);
  }

  if (loading === true) return <div style={{textAlign: 'center'}}><Facebook color={'black'}/></div>

  if (error) return (
    <div style={{textAlign: 'center', margin: 20, fontSize: 20}}>
      Something went wrong...
      <button onClick={() => dispatch(getServicesRequest())}>Try again</button>
    </div>
  )

  return (
    <ul className='list'>
      {items && 
        items.map(item => (
          <li key={item.id} style={{marginTop: 10, listStyleType: 'none', cursor: 'pointer'}} onClick={() => handleWatch(item.id)}>
            <div style={{display: 'inline-block', width: 200}}>
              {item.name}
            </div>
            <div style={{display: 'inline-block', width: 100}}>
              {item.price}
            </div>
          </li>
        ))}
    </ul>
  )
}