import React from 'react';
//import "../CSS/CreateBottle.scss"
import ReactTable from 'react-table-6'
import "bootstrap/dist/css/bootstrap.min.css"
import 'react-table-6/react-table.css'
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
//import "../CSS/CreateBottle.css"





class Bottle extends React.Component {
    

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
        this.displayPrompt=this.displayPrompt.bind(this)
        //this.getTableValuesFromServer2=this.getTableValuesFromServer2.bind(this)
        this.putFirstBatch=this.putFirstBatch.bind(this)
        this.getTableValuesFromServer1=this.getTableValuesFromServer1.bind(this)
    }
    




    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    componentDidMount() {
        this.getTableValuesFromServer1()
        //console.log("hello==-----------------------------------------------")
     //   this.getTableValuesFromServer()

    }

    putFirstBatch()  {
        
       var x={productName:'John Bottled toddy Mini',productID:'P01',creatorName:'Star Bottling',creatorPermit:'PO4567',volume:0.5,description:'Purest Toddy. Small bottle'}
         axios.post(`http://localhost:5000/manufacturer/putBatch`,x)
             .then((response) => {
                 console.log('dfdfddfdfdffdfdf');
                 console.log(response.data)
               // this.setState({data1:response.data,datalength:response.data.length})
 
                 //var z=x.a
                 //var userName = prompt('Please state you reason for booking an appointment'+z)
 
                
             }
 
 
             );
     }
  


    getTableValuesFromServer1()  {
       
        axios.post(`http://localhost:5000/manufacturer/getBottle`)
            .then((response) => {
                console.log('dfdfddfdfdffdfdf');
                console.log(response.data)
               this.setState({data1:response.data,datalength:response.data.length})

               // var z=x.a
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
        const tableStyle = {
            
         border: "1px solid gray"
         
          };
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
         const columns = [{  
           Header: 'Bottle ID',  
           accessor: 'bottle_id'  
           },{  
           Header: 'Batch Id',  
           accessor: 'batch_id' 
           }
           ]  
          
            

         
        

        return (
            <body>

                <div class="jumbotron bg-success text-center">
                    <h1 class="text-white"> Bottles </h1>

                </div>

                <div class="container">
                    <div class="row">
                     
                        <div class="col-sm-12">
                          

                        </div>



                    </div>
                    <div class="row"><div class="col-sm-12">
                   
                    
                    </div></div>
                    <div class="row">
                    <div class="col-sm-12">
                    <button class="login" onClick={this.getTableValuesFromServer1}>Refresh</button>
                    <p></p>
                    <p></p>
                    <p></p>
                    <ReactTable class={"ReactTable"}
                    data={this.state.data1}  
                    columns={columns} 
                    showPagination={false} 
                    style={tableStyle}
                    resolveData={data => data.map(row => row)} 
                    pageSize={parseInt(this.state.datalength)}
                    sortable={false}
                    resizable={false}
                    />
                    </div>
                    
                    
                    
                    </div>
                    
                   
                    

                   

                </div>

            </body>)
    }
    
}

export default Bottle;

