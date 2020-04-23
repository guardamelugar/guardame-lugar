import axios from 'axios';
import { URL } from '../constants/URL';

const POSTSignup = jsonForm => {
  console.log(URL);
  axios.post( (URL) , JSON.stringify(jsonForm), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  } )
    .then(function(res) {
      console.log(res.status);
      if(res.status==200) {
        alert("El usuario fue guardado con éxito.");
      } else {
        alert("El usuario NO fue guardado.");
      }
    })
    .catch(function(err) {
      console.log(err);
    })
}

export default POSTSignup;