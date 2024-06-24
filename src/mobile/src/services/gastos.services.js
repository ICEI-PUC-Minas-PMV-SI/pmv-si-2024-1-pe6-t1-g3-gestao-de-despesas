import API from './webapi.services';
import {BASE_URL} from './urls';

export const getGastos = async () => {
  try{
      return await API.get(`${BASE_URL}/Expenses`).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const insertGasto = async (param) => {
    try {
    console.log('Parameters being sent:', param);  // Log os parâmetros antes de enviar a requisição
    const response = await API.post(`${BASE_URL}/Expenses`, param);
    console.log('Response data:', response.data);  // Log a resposta da API
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error response data:', error.response.data);  // Log os detalhes da resposta de erro
      console.error('Error response status:', error.response.status);  // Log o status do erro
    } else {
      console.error('Error message:', error.message);  // Log a mensagem de erro
    }
    return null;
  }
}

export const updateGasto = async (param) => {
  try{
      return await API.put(`${BASE_URL}/Expenses/${param.id}`, param).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const deleteGasto = async (id) => {
  try{
      return await API.delete(`${BASE_URL}/Expenses/${id}`).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

// export const getGrupos = async () => {
//   try{
//       return await API.get(`${BASE_URL}/Groups`).then( 
//       response => {
//         return response.data;
//       },
//       error =>{
//         console.log(error);
//         return  null;
//       }
//     );
//   }catch(error){
//     console.log(error);
//     return null;
//   }
// }

export const getGrupos = async () => {
  try {
    return await API.get(`${BASE_URL}/Groups`).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};