import axios from '../axios-config';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
} from '../constants/user-constants';

///Action to register users into the database
export const register = (
	customerId,
	customerName,
	email,
	password,
	phone,
	userRole
) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    })

		const config = {
			Headers: {
				'Content-type': 'application/json',
			},
		}

    //Getting the list of products from the database on aws
    await axios.post(
      'https://q4egz4px51.execute-api.ap-southeast-2.amazonaws.com/register',
			{
				customer_id: customerId,
				customer_name: customerName,
				email: email,
				password, password,
				phone: phone,
				user_role: userRole,
			},
			config
    )

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: USER_REGISTER_FAILURE,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

///Action to login users in the website
export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    //Getting the list of products from the database on aws
    const { data } = await axios.get(
      'https://uq9xgt9vpc.execute-api.ap-southeast-2.amazonaws.com/login'
    )

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}