import * as actionTypes from './actionType';
import Axios from 'axios';

const apiUrl = 'http://57c64baac1fc8711008f2a82.mockapi.io/book';

export const fatchdashboardDataSuccess =(data)=>{
	return{
		type: actionType.FETCH_DASHDATA_SUCCESS,
		data
	}
};

export const fetchDashData = () => {
  return (dispatch) => {
    return Axios.get(apiUrl)
      .then(response => {
        dispatch(fatchdashboardDataSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};