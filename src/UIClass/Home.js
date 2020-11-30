import React from 'react';
import ReactTable from 'react-table-6'
import "bootstrap/dist/css/bootstrap.min.css"
import InputRange from 'react-input-range';
import 'react-table-6/react-table.css'
import '../CSS/index.css'
import Calendar from 'react-calendar';
import "react-input-range/lib/css/index.css";
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
            }],arrayWithPerTree:[],
             arrayAverage:[],
             displayData:[],
             dbData:[],median:0,value:0

        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getTableValuesFromServer = this.getTableValuesFromServer.bind(this);
        this.displayPrompt = this.displayPrompt.bind(this);
        this.temp2 = this.temp2.bind(this);
        this.getTableValuesFromServer2=this.getTableValuesFromServer2.bind(this);
        this.average1=this.average1.bind(this);
        this.swap=this.swap.bind(this);
        this.setAverage=this.setAverage.bind(this)
        this.getStateFunction=this.getStateFunction.bind(this)
        this.handleChangeSlider=this.handleChangeSlider.bind(this)
        this.calculateMedian=this.calculateMedian.bind(this)
        this.handleChange1=this.handleChange1.bind(this);

    }




    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    componentDidMount() {
        //console.log("hello==-----------------------------------------------")
        this.getTableValuesFromServer2()

    }
    getTableValuesFromServer() {
        axios.get(`http://localhost:5000/getCSVForDemonstration`)
            .then((response) => {

                this.setState({
                    displayData: response.data,dbData:response.data, datalength: response.data.length
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

    /**Median Funcions Start */
    getTableValuesFromServer2()  {
        //var x=this.getObject()
        //console.log(x)
         axios.post(`http://localhost:5000/Stat/getproducers`)
             .then((response) => {
                // console.log('dfdfddfdfdffdfdf');
                 //console.log(response.data)
                this.average1(response.data)
              //  this.setState({displayData:response.data,datalength:response.data.length})
 
                 //var z=x.a
                 //var userName = prompt('Please state you reason for booking an appointment'+z)
 
                
             }
 
 
             );
     }
    average1(results)
   {
    var arrayWithPerTree=[]
    var arrayAverage=[]
    var i;
    for(i=0;i<results.length;i++)
    {
      var obj=results[i]
      var avg=obj.volume/obj.no_of_trees
      obj.average=avg;
      arrayWithPerTree.push(obj)
      arrayAverage.push(avg)
    }
   // console.log(arrayWithPerTree)
     this.setState({displayData:arrayWithPerTree,datalength:results.length,arrayAverage:arrayAverage})
     this.setAverage(arrayWithPerTree,arrayAverage)
   

     


  }
  swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}


   setAverage(arrayWithPerTree,arrayAverage)
  {
    
    var len = arrayWithPerTree.length,
        i, j, stop;

     for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (arrayAverage[j] >arrayAverage[j+1]){
                this.swap(arrayAverage, j, j+1);
                this.swap(arrayWithPerTree, j, j+1);
            }
        }
        if(i==7)
        {console.log('duddddddddd')}
    }
    var newArray=[]
    for(i=0;i<arrayWithPerTree.length;i++)
    {
      var obj=arrayWithPerTree[i]
      //var avg=obj.volume/obj.no_of_trees
      arrayWithPerTree.goiii='avg';
      newArray.push(obj)
      
    }


    console.log(arrayWithPerTree)
    console.log('bbbbbbbbbbbb')
    var xdd=arrayWithPerTree
    this.setState({displayData:newArray,dbData:newArray,datalength:arrayWithPerTree.length,arrayAverage:arrayAverage,median:98});
    const data1= this.state.displayData;
//const newData = data.map(d=>({...d, name:"Test"}));
this.setState({data: data1})
    
    this.calculateMedian()

  }

  getStateFunction()
  {
      var x=this.state.median
      var d=this.state.displayData
      var value=this.state.value
      console.log(this.state.displayData)
      
      console.log(this.state.value)
      var dep=x*value/100
      console.log(dep+"dep")

      var newArray=[]
       var arrayWithPerTree=this.state.dbData;
       console.log(arrayWithPerTree)
      var i=0;
      var median=this.state.median
      var hmedian=median+dep
      var lmedian=median-dep
      for(i=0;i<arrayWithPerTree.length;i++)
    {
      var obj=arrayWithPerTree[i]
      if(obj.average>hmedian||obj.average<lmedian)
      {  obj.gert='fff'
      newArray.push(obj)


      }
      //var avg=obj.volume/obj.no_of_trees
     
      console.log(newArray)
      
    }
    this.setState({displayData:newArray})


  }
  handleChangeSlider()
  {console.log("------------------------------------------")
  console.log(this.state.value)

}

  calculateMedian()
  {
    var length=this.state.dbData.length;
    var artemp=this.state.arrayAverage
    console.log('0000000000000000')
    console.log("length"+length)
    console.log(artemp[0])
    

    
   var c=length%2
   if(c==1)
   { length=length+1
     var loc=length/2
     var median=artemp[loc-1]
     console.log("median="+median)
     console.log("Position "+loc+"Array val"+loc-1)
     console.log('Median='+median)
     this.setState({median:median})

    
   }
   else{
    
    var loc=length/2
    var median=(artemp[loc-1]+artemp[loc])/2
    console.log('Median='+median)
    console.log("Position "+loc)
    console.log("even")
    this.setState({median:median})
   }
}



handleChange1(value)
{console.log(value)
}

     /**Median Funcions End */

     



    render() {
        var value;
        const columns = [{  
            Header: 'Name',  
            accessor: 'name'  
            },{  
            Header: 'Permit Number',  
            accessor: 'permit_number'  
            },{  
                            Header: 'Business Type',  
                            accessor: 'business_type'  
                            },{  
                                    Header: 'Volume (litre)',  
                                    accessor: 'volume'  
                                    },{  
                                        Header: 'Averge per Tree (litre)',  
                                        accessor: 'average'  
                                        },{  
                                            Header: 'Tree Count',  
                                            accessor: 'no_of_trees'  
                                            }]  
        const tableStyle = {
            
            border: "1px solid gray"
            
             };
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
                    <h1 class="text-white"> Outlier Detection </h1>

                </div>

                <div class="container">
                    <div class="row">
                       
                        <div class="col-sm-12">
                            <h2>Description</h2>
                            <p>You will be able to filter the toddy producers production volume compared to the  median of the production volumes data.</p>

                        </div>


                    </div>
                    
                <div class="row" id="r1">
                <div class="col-sm-4">
                    <Typography id="discrete-slider-always" gutterBottom>
                        Choose percentage deviation
                      </Typography>
                     
                    <InputRange
										draggableTrack
										maxValue={100}
                                        minValue={0}
                                        defaultValue={50}
										formatLabel={value => ` ${value}%`}
										value={this.state.value}
										onChange={value => this.setState({ value: value })}
									/>
                </div>

            </div>
                <div class="row" id="r1">
                <div class="col-sm-12">
                <p></p>
                <h1>Median:{this.state.median}</h1>
                <button class="login" onClick={this.getStateFunction}>Refresh</button>
                <p></p>
                
                <ReactTable class={"ReactTable"}
                data={this.state.displayData}  
                columns={columns} 
                showPagination={false} 
                style={tableStyle}
                resolveData={data => data.map(row => row)} 
                pageSize={parseInt(this.state.datalength)}
                sortable={false}
                resizable={false}
    />
     <p></p>
     <p></p>
     <p></p>
                
                </div>

                
                </div>

                   

                </div>

            </body>)
    }
}
export default Home;

