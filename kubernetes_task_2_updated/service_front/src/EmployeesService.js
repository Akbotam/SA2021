import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class EmployeesService{

    constructor(){}


    getEmployees() {
        const url = `${API_URL}/api/employees/`;
        return axios.get(url).then(response => response.data);
    }
    getEmployeesByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getEmployee(pk) {
        const url = `${API_URL}/api/employees/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    deleteEmployee(employee){
        const url = `${API_URL}/api/employees/${employee.pk}`;
        return axios.delete(url);
    }
    createEmployee(employee){
        const url = `${API_URL}/api/employees/`;
        return axios.post(url,employee);
    }
    updateEmployee(employee){
        const url = `${API_URL}/api/employees/${employee.pk}`;
        return axios.put(url, employee);
    }
}