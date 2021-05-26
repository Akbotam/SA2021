import  React, { Component } from  'react';
import  EmployeesService  from  './EmployeesService';

const  employeesService  =  new  EmployeesService();

class  EmployeeCreateUpdate  extends  Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const { match: { params } } =  this.props;
        if(params  &&  params.pk){
            this.handleUpdate(params.pk);
        }
        else
        {
            this.handleCreate();
        }
        event.preventDefault();
    }

    handleCreate(){
        employeesService.createEmployee(
            {
            "name":  this.refs.name.value,
            "surname":  this.refs.surname.value,
            "email_address":  this.refs.email_address.value,
            "mobile":  this.refs.mobile.value,
            "address":  this.refs.address.value,
            "empl_description":  this.refs.empl_description.value
            }).then((result)=>{
                    alert("Employee created!");
            }).catch(()=>{
                    alert('There was an error! Please re-check your form.');
            });
    }

    handleUpdate(pk){
    employeesService.updateEmployee(
        {
        "pk":  pk,
        "name":  this.refs.name.value,
        "surname":  this.refs.surname.value,
        "email_address":  this.refs.email_address.value,
        "mobile":  this.refs.mobile.value,
        "address":  this.refs.address.value,
        "empl_description":  this.refs.empl_description.value
        }
        ).then((result)=>{

            alert("Employee updated!");
        }).catch(()=>{
            alert('There was an error! Please re-check your form.');
        });
    }

    componentDidMount(){
        const { match: { params } } =  this.props;
        if(params  &&  params.pk)
        {
            employeesService.getEmployee(params.pk).then((c)=>{
                this.refs.name.value  =  c.name;
                this.refs.surname.value  =  c.surname;
                this.refs.email_address.value  =  c.email_address;
                this.refs.mobile.value  =  c.mobile;
                this.refs.address.value  =  c.address;
                this.refs.empl_description.value  =  c.empl_description;
            })
        }
    }

    render() {
            return (
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>
                Name:</label>
                <input className="form-control" type="text" ref='name' />

                <label>
                Surname:</label>
                <input className="form-control" type="text" ref='surname'/>

                <label>
                Mobile:</label>
                <input className="form-control" type="text" ref='mobile' />

                <label>
                Email_address:</label>
                <input className="form-control" type="text" ref='email_address' />

                <label>
                Address:</label>
                <input className="form-control" type="text" ref='address' />

                <label>
                Employee_Description:</label>
                <textarea className="form-control" ref='empl_description' ></textarea>


                <input className="btn btn-primary" type="submit" value="Submit" />
                </div>
            </form>
            );
    }

}

export default EmployeeCreateUpdate;