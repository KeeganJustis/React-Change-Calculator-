import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      amountDue: "",
      amountReceived: "",
      changeDue: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
      postiveornegative: undefined,
      difference: 0,
      output: "The total change due is $0.00",
      alertclass:'alert alert-success text-center'
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculatechange = this.calculatechange.bind(this);
  }
  
  handleChange(event) {
    event.preventDefault();
    let name = event.target.name;
    let value = parseFloat(event.target.value);
    this.setState({
      [name]: value

    });
  }

  calculatechange(event) {
    event.preventDefault();
    let amountDue = this.state.amountDue;
    let amountReceived = this.state.amountReceived;
    // var twenties1;
    // var tens1;
    // var fives1;
    // var ones1;
    // var quarters1;
    // var dimes1;
    // var nickels1;
    // var pennies1;
     var finaloutput;
    // if more recivived than due
    if (amountDue <= amountReceived) {
      let cost = this.state.amountDue;
      let money_received = this.state.amountReceived;
      let difference = money_received - cost;
      let dollars = Math.floor(difference);
      let cents = Math.round((difference - dollars) * 100);
      finaloutput= "The total change due is " + '$' + difference.toFixed(2);
      
      // make all the dollars twenties,dimes,nickels, and ones
      if (dollars > 19) {
        console.log(dollars);
      var twenties1 = Math.floor(dollars / 20);
        dollars = dollars % 20;
      } else{
       var twenties1=0;
      }
      if (dollars > 9) {
        var  tens1 = Math.floor(dollars / 10);
        dollars = dollars % 10;
      } else{
        var tens1=0;
      }
      if (dollars > 4) {
        var fives1 = Math.floor(dollars / 5);
        dollars = dollars % 5;
      } else{
        var fives1=0;
      }
      if (dollars > 0) {
        var ones1 = Math.floor(dollars);
      } else{
        var ones1=0;
      }
      if (cents > 24) {
        var quarters1 = Math.floor(cents / 25);
        cents = cents % 25;
      } else{
        var quarters1=0;
      }
      if (cents > 9) {
        var dimes1 = Math.floor(cents / 10);
        cents = cents % 10;
      } else{
        var dimes1=0;
      }
      if (cents > 4) {
        var nickels1 = Math.floor(cents / 5);
        cents = cents % 5;
      } else {
        var nickels1=0;
      }
      if (cents > 0) {
        var pennies1 = Math.floor(cents);
      } else{
        var pennies1=0;
      }

      console.log(twenties1);

      this.setState({
        difference: difference,
        changeDue: cost,
        amountReceived: money_received,
        twenties: twenties1,
        tens: tens1,
        fives: fives1,
        ones: ones1,
        quarters: quarters1,
        dimes: dimes1,
        nickels: nickels1,
        pennies: pennies1,
        output: finaloutput,
        alertclass:"alert alert-success text-center"
      });     
// if more due than recieved. 
    } else {
      let cost = this.state.amountDue;
      let money_received = this.state.amountReceived;
      let difference = cost- money_received;
      let dollars = Math.floor(difference);
      let cents = Math.round((difference - dollars) * 100);
      finaloutput= "The total change due is " + '$' + difference.toFixed(2);
      // make all the dollars twenties,dimes,nickels, and ones
      if (dollars > 19) {
        var twenties1 = Math.floor(dollars / 20);
        dollars = dollars % 20;
      } else{
        var twenties1=0;
      }
      if (dollars > 9) {
        var tens1 = Math.floor(dollars / 10);
        dollars = dollars % 10;
      } else{
        var tens1=0;
      }
      if (dollars > 4) {
         var fives1 = Math.floor(dollars / 5);
        dollars = dollars % 5;
      } else {
        var fives1=0;
      }
      if (dollars > 0) {
        var ones1 = Math.floor(dollars);
      } else{
      var  ones1=0;
      }
      if (cents > 24) {
        var quarters1 = Math.floor(cents / 25);
        cents = cents % 25;
      } else{
        var quarters1=0;
      }
      if (cents > 9) {
        var  dimes1 = Math.floor(cents / 10);
        cents = cents % 10;
      } else{
        var dimes1=0;
      }
      if (cents > 4) {
         var nickels1 = Math.floor(cents / 5);
        cents = cents % 5;
      }else{
        var nickels1=0;
      }
      if (cents > 0) {
         var pennies1 = Math.floor(cents);
      } else{
        var pennies1=0;
      }
      console.log(dollars);
      this.setState({
        difference: difference,
        changeDue: cost,
        amountReceived: money_received,
        twenties: twenties1,
        tens: tens1,
        fives: fives1,
        ones: ones1,
        quarters: quarters1,
        dimes: dimes1,
        nickels: nickels1,
        pennies: pennies1,
        output: finaloutput,
        alertclass:"alert alert-danger text-center"
      });



    }
  }



    render() {
      const amountDue = this.state.amountDue;
      const amountReceived = this.state.amountReceived;
      const difference = this.state.difference;
      const twenties = this.state.twenties;
      const tens = this.state.tens;
      const fives = this.state.fives;
      const ones =this.state.ones;
      const quarters= this.state.quarters;
      const dimes = this.state.dimes;
      const nickels= this.state.nickels;
      const pennies= this.state.pennies;
      const changeDue= this.state.output;
      console.log(" the diff"+ this.state.difference);
      
      console.log(' this is the twenties' + twenties)

      return (
        <div className='container'>
          <div className='top'>
            <h5 className="tagline"> &#160;<strong>Change Calculator</strong> </h5>
            <hr />
          </div>
          <form >
            <div className="row wide-gutter">

              <div className='col-md-4'>
                <div className='leftside rounded'>
                  <strong className='infotitle'>Enter Information</strong>

                  <div className="panel-body whitebackground extraspace" >
                    <label htmlFor="Amount">How much is due?</label>
                    <input type="float" className="form-control" id="amount-due" name='amountDue' onChange={this.handleChange} placeholder="0" />


                    <label htmlFor="received">How much was received?</label>
                    <input type="float" className="form-control " id="amount-received" name='amountReceived' onChange={this.handleChange} placeholder="0" />
                  </div>

                  <button className='btn btn-info' id='calculate-change' onClick={this.calculatechange}> Calculate </button>
                </div>
              </div>

              <div className='col-md-8 whitebackground rounded rightside col-md-offset-2'>

                <div className={this.state.alertclass} role="alert">{changeDue}</div>
                
                <div className='row'>
                  <div className='money col-3' id='twenties-output'><div className='square rounded'> Twenties <br /><p placeholder='0'>{twenties}</p></div></div>

                  <div className='col-3 money ' id='tens-output'><div className='square rounded'>Tens<br /><p >{this.state.tens}</p></div></div>

                  <div className='col-3 money ' id='fives-output'><div className='square rounded'>Fives<br /><p>{fives}</p></div></div>

                  <div className='col-3 money ' id='ones-output'><div className='square rounded'>Ones<br /><p>{ones}</p></div></div>
                  <br /><br /><br />
                </div>
                <div className='row'>
                  <div className='money col-3 ' id='quarters-output'><div className='square rounded'> Quarters<br /><p>{quarters}</p></div></div>

                  <div className='money col-3  ' id='dimes-output'><div className='square rounded'> Dimes<br /><p>{dimes}</p></div></div>

                  <div className='money col-3 ' id='nickles-output'><div className='square rounded'> Nickles<br /><p>{nickels}</p></div></div>

                  <div className='money col-3 ' id='pennies-output'><div className='square rounded'> Pennies<br /><p>{pennies}</p></div></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    };
  };

  export default App;



// - Header !
// - Tagline !
// - Bootstrap Row
//   - Bootstrap Column (4 columns wide)
//     - Bootstrap Panel
//       - How much is due?!
//       - How much was received?!
//       - Calculate button!
//   - Bootstrap Column (8 columns wide)
//     - Outcome alerts.
//       - Success: Total change due.
//       - Danger: Additional money owed.
//     - Grid for denominations
//       - Twenties
//       - Tens
//       - Fives
//       - Ones
//       - Quarters
//       - Dimes
//       - Nickels
//       - Pennies
