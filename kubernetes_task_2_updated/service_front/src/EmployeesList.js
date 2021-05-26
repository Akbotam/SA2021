import  React, { Component } from  'react';
import  EmployeesService  from  './EmployeesService';

const  employeesService  =  new  EmployeesService();

class  EmployeesList  extends  Component {

    constructor(props) {
        super(props);
        this.state  = {
            employees: [],
            nextPageURL:  ''
        };
        this.nextPage  =  this.nextPage.bind(this);
        this.handleDelete  =  this.handleDelete.bind(this);
    }

    componentDidMount() {
        var  self  =  this;
        employeesService.getEmployees().then(function (result) {
            self.setState({ employees:  result.data, nextPageURL:  result.nextlink})
        });
    }

    handleDelete(e,pk){
        var  self  =  this;
        employeesService.deleteEmployee({pk :  pk}).then(()=>{
            var  newArr  =  self.state.employees.filter(function(obj) {
                return  obj.pk  !==  pk;
            });
            self.setState({employees:  newArr})
        });
    }

    nextPage(){
        var  self  =  this;
        employeesService.getEmployeesByURL(this.state.nextPageURL).then((result) => {
            self.setState({ employees:  result.data, nextPageURL:  result.nextlink})
        });
    }

    render() {

        return (
        <div  className="employees--list">
            <table  className="table">
                <thead  key="thead">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Mobile</th>
                    <th>Email_address</th>
                    <th>Address</th>
                    <th>Employee_Description</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {this.state.employees.map( c  =>
                    <tr  key={c.pk}>
                        <td>{c.pk}  </td>
                        <td>{c.name}</td>
                        <td>{c.surname}</td>
                        <td>{c.mobile}</td>
                        <td>{c.email_address}</td>
                        <td>{c.address}</td>
                        <td>{c.empl_description}</td>
                        <td>
                        <button  onClick={(e)=>  this.handleDelete(e,c.pk) }> Delete</button>
                        <a  href={"/employee/" + c.pk}> Update</a>
                        </td>
                    </tr>)}
                </tbody>
            </table>
            <button  className="btn btn-primary"  onClick=  {  this.nextPage  }>Next</button>
        </div>
        );
    }

    
}
export  default  EmployeesList;