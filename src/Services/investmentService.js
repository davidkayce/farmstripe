import Axios from 'axios';
 
export default {
  getInvestments() {
    return Axios.get('/farms');
  },
 
  createFarm(data) {
    return Axios.post(RESOURCE_NAME, data);
  },
 
  update(id, data) {
    return Axios.put(`${RESOURCE_NAME}/${id}`, data);
  },
 
  delete(id) {
    return Axios.delete(`${RESOURCE_NAME}/${id}`);
  }
};