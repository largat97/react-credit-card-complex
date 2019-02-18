import React from 'react'
import InputMask from 'react-input-mask';
import Card from './card'
import './credit-card.css'
class CreditCard extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
          number:'',
          date:'',
          name:''
          
    }
    }


number_verification = (verified_number) => {

        if(verified_number.value.toString().length !== 16){
            verified_number.style.backgroundColor = 'red';
        }
        else{
            verified_number.style.backgroundColor = '#fff';
        }
}

name_verification = (name) => {
    if (name.value.length >= 20) {
        this.setState( {name: 'Name length must be less than 20 character'} )
    }
}


number_transfer = (num) => {
    this.setState( {number: num.value} )
}
date_transfer = (date) => {
    let dateVerif = date.value.split('/')
        if(Number(dateVerif[0]) < 13)
        { this.setState( {date: date.value} )}
        else {this.setState( {date: '*'} )}
}
name_transfer = (name) => {
    this.setState( {name: name.value} )
}

render () {
return( 
<div className="container">
    <Card 
    number={this.state.number}
    date={this.state.date}
    name={this.state.name.toUpperCase()} />
    <div className="input-container">
   
    <InputMask placeholder="Credit Card Number" mask="9999 9999 9999 9999" maskChar={null} onChange={(event) => {this.number_transfer(event.target)}} className="input-form"/>
    <input placeholder="Name" onSelect={(event) => {this.name_verification(event.target)}} onChange={(event) => {this.name_transfer(event.target)}} type="text" className="input-form"></input>
    <InputMask placeholder="validThru" mask="99/99" maskChar={null} onChange={(event) => {this.date_transfer(event.target)}} className="input-form"/>
    
    </div> 
    
</div>
)
}
} 

export default CreditCard;