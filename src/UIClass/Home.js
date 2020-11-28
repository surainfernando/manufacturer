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




class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            a: "ddud", datalength: 0, data: [{ 'DataSeries-A': 33, 'DataSeries-B': 33, 'DataSeries-C': 33 }], columns: [{
                Header: 'DataSeries-A',
                accessor: 'DataSeries-A'
            }, {
                Header: 'DataSeries-B',
                accessor: 'DataSeries-B'
            }, {
                Header: 'DataSeries-C',
                accessor: 'DataSeries-C'
            }]
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getTableValuesFromServer = this.getTableValuesFromServer.bind(this);
        this.displayPrompt = this.displayPrompt.bind(this);
        this.temp2 = this.temp2.bind(this);

    }




    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    componentDidMount() {
        //console.log("hello==-----------------------------------------------")
        this.getTableValuesFromServer()

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
    displayPrompt() {
        var userName = prompt('Please state you reason for booking an appointment')
        // window.location='/d'

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

        return (
            <body>

                <div class="jumbotron bg-success text-center">
                    <h1 class="text-white"> Outliennr Detection </h1>

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
                    <div class="row" id="r1">
                    <div class="col-sm-7">
                    <h2>Choose time span of analysis</h2>

                    <p></p>
                    <RadioGroup aria-label="gender" name="gender1" value={value}>
                        <FormControlLabel value="female" control={<Radio />} label="Filter by records of entire year" />
                        <FormControlLabel value="male" control={<Radio />} label="Filter each month " />

                    </RadioGroup>


                </div>
                <div class="col-sm-4">
                <h2>Choose Month</h2>
                <InputLabel id="demo-simple-select-label">Month</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          width="40px"
          
        >
          <MenuItem value={10}>January</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
            </div>

                </div>
                <div class="row" id="r1">
                <div class="col-sm-4">
                    <Typography id="discrete-slider-always" gutterBottom>
                        Choose percentage deviation
                      </Typography>
                     <Slider
                        defaultValue={50}
                        min={0}
                       max={100}
                        aria-labelledby="discrete-slider-always"
                        step={0.1}
                        marks={marks}
                        valueLabelDisplay="on"
                    />
                </div>

            </div>
                <div class="row" id="r1">
                <div class="col-sm-4">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name of permit owner</th>
      <th scope="col">Volume produced</th>
      <th scope="col">No of trees</th>
      <th scope="col">Percentage of deviation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Kasun Fernando</td>
      <td>7980</td>
      <td>207</td>
      <td>+6%</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Asela Dasun</td>
      <td>7200</td>
      <td>200</td>
      <td>-3.7%</td>
    </tr>
    <tr>
    <th scope="row">3</th>
    <td>Dineth Zoysa</td>
    <td>15000</td>
    <td>400</td>
    <td>-2.1%</td>
  </tr>
  <tr>
    <th scope="row">3</th>
    <td>Dilum Senanayake</td>
    <td>10125</td>
    <td>250</td>
    <td>-3.2%</td>
  </tr>
    
  </tbody>
</table>
                </div>

                
                </div>

                   

                </div>

            </body>)
    }
}
export default Home;

