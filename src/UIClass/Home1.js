import React from 'react';
import ReactTable from 'react-table-6'
import "bootstrap/dist/css/bootstrap.min.css"
import 'react-table-6/react-table.css'
import '../CSS/index.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel'
import { Table } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useState } from 'react';




class Home1 extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {
            // a: "ddud", datalength: 0, data: [{ 'DataSeries-A': 33, 'DataSeries-B': 33, 'DataSeries-C': 33 }], columns: [{
            //     Header: 'DataSeries-A',
            //     accessor: 'DataSeries-A'
            // }, {
            //     Header: 'DataSeries-B',
            //     accessor: 'DataSeries-B'
            // }, {
            //     Header: 'DataSeries-C',
            //     accessor: 'DataSeries-C'
            // }]

            data1:[],a:'hellowooekd',datalength:5  //pagesize
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getTableValuesFromServer = this.getTableValuesFromServer.bind(this);
        this.getTableValuesFromServer2 = this.getTableValuesFromServer2.bind(this);
        this.displayPrompt = this.displayPrompt.bind(this);
        this.temp2 = this.temp2.bind(this);
        this.changeState1 = this.changeState1.bind(this);
        this.changeState2 = this.changeState2.bind(this);

    }
    getObject()
    {
        var x=[
            {fruit: 'Apple', cost: 100},
            {fruit: 'Orange', 'cost': 50},
           
            ];
            return x;
    }




    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    componentDidMount() {
        //console.log("hello==-----------------------------------------------")
     //   this.getTableValuesFromServer()

    }
    getTableValuesFromServer() {
        axios.get(`http://localhost:5000/getCSVForDemonstration`)
            .then((response) => {

                this.setState({
                    data: response.data, datalength: response.data.length
                })
            }


            );
    }


    getTableValuesFromServer2()  {
       var x=this.getObject()
       console.log(x)
        axios.post(`http://localhost:5000/manufacturer/getbusinessmen`)
            .then((response) => {
                console.log('dfdfddfdfdffdfdf');
                console.log(response.data)
               this.setState({data1:response.data,datalength:response.data.length})

                var z=x.a
                //var userName = prompt('Please state you reason for booking an appointment'+z)

               
            }


            );
    }
    displayPrompt() {
        var userName = prompt('Please state you reason for booking an appointment')
        // window.location='/d'

    }
    changeState1()
    {
        this.setState({a: "rock"})
    }
    changeState2()
    {
        this.setState({datalength: 10})
    }
    temp2() {
        this.setState({
            a: "rock"
        });

    }
    
      
    
       


    getTemp1() {
        // axios.get(`http://localhost:5000/temp1`)
        //   .then( 
        //     (response)=>{this.setState({
        //       a: "Email Already Exists"
        //     })
        //   });
        // return 'x';
        // searchFunction1(this.state.search, this.state.packaging, this.state.originlocation, this.state.value.min, this.state.value.max).then((products) => {
        // 	// console.log(products1)
        // 	this.setState({ products });
        // });
    }





    render() {
        var value;
        const useStyles = makeStyles((theme) => ({
            root: {
                width: 200,
            },
            margin: {
                height: theme.spacing(3),
            },
        }));
        const marks = [
            {
                value: 0,
                label: '0  %',
            },
           
           
            {
                value: 100,
                label: '100  %',
            },
        ];
        const mdata = [{  
            name: 'Ayaan',  
            age: 26  
            },{  
             name: 'Ahana',  
             age: 22  
             },{  
             name: 'Peter',  
             age: 40      
             },{  
             name: 'Virat',  
             age: 30  
             },{  
             name: 'Rohit',  
             age: 32  
             },{  
             name: 'Dhoni',  
             age: 37  
             }]  
             const a='rpck'
         const columns2 = [{  
           Header: 'Name',  
           accessor: 'name'  
           },{  
           Header: 'Permit Number',  
           accessor: 'permit_number'  
           }]  
           const columns = [{  
            Header: 'Name',  
            accessor: 'name'  
            },{  
            Header: 'Ageii',  
            accessor: 'permit_number'  
            },{Header: 'Location',  
                    accessor: 'location'  
                    },{  
                        Header: 'Email',  
                        accessor: 'email'  
                        },{  
                            Header: 'Business Type',  
                            accessor: 'business_type'  
                            },{  
                                Header: 'Number of Trees',  
                                accessor: 'no_of_trees'  
                                },{  
                                    Header: 'Volume',  
                                    accessor: 'volume'  
                                    }]  
            

         
        

        return (
            <body>

                <div class="jumbotron bg-success text-center">
                    <h1 class="text-white"> 11Outliennr Detection </h1>

                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-7">
                            <h2>Choose Type of Analysis</h2>

                            <p></p>
                            <RadioGroup aria-label="gender" name="gender1" value={value}>
                                <FormControlLabel value="female" control={<Radio />} label="Filter by comparing to  Mean" />
                                <FormControlLabel value="male" control={<Radio />} label="Filter by comparing to the Median " />

                            </RadioGroup>


                        </div>
                        <div class="col-sm-4">
                            <h2>Description</h2>
                            <p>In this case you will be able to filter the toddy producers by the  mean of the production volumes data.</p>

                        </div>



                    </div>
                    <div class="row">
                    <div class="col-sm-12">
                    <button onClick={this.getTableValuesFromServer2}>name</button>
                    <button onClick={this.changeState1}>name</button>
                    <button onClick={this.changeState2}>name</button>
                    <div>
                    <h1>hh{this.state.datalength}</h1>
                    <ReactTable
                    data={this.state.data1}  
                    columns={columns} 
                    showPagination={false} 
                    resolveData={data => data.map(row => row)} 
                    pageSize={parseInt(this.state.datalength)}
                    sortable={false}
                    resizable={false}
        />
              
                    </div>
                    </div>
                    
                    </div>
                    

                   

                </div>

            </body>)
    }
    
}

export default Home1;

