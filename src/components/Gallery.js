//all components rendered have to be in one parent
// have to add  rel="noreferrer" when using  target='_blank' because of a security risk - a message from terminal
import React from 'react';        // import from react because using react component (class Gallery extends React.Component)
import { Card, Col, Row } from 'react-bootstrap';  //ctrl backspace autocomplete from Card component   import from bootstrap  
// import ActorModel from './ActorModel';  //capital letters at the start of the names. file name has to be the same - case sensitive


class Gallery extends React.Component{
    constructor(props){
        super(props)

    this.state = {
        filter: '',
    };
    }  // the event from (event)=>{this.changefilter(event.target.value) is passed as val(arbitrary name)  
    changefilter = (val) =>{
        this.setState(
            {filter: val}  // from value on input element the new state is changed
            )
    }

    render(){
        const filteredActors = this.props.listOfActors.filter((actor) => { //imported array listOfActors from App.js from props 
            return `${actor.Fname} ${actor.Lname}`.toLowerCase().includes(this.state.filter.toLowerCase())  
            //  filteredActors will be the new array filtered. filter is a loop. actor is the item from an array. this.state.filter.toLowerCase() 
            // Fname Lname have capital letters in Gallery.js, unlike in app.js
        });
 
      const newArrayOfActors = filteredActors.map((actor)=> {
          return (// structure below comes from https://react-bootstrap.netlify.app/components/cards/#cards
              <Col sm={6} lg={3} md={4}>  
                 <Card >
                    <Card.Img variant="top" src={actor.ImgSrc} />
                    <Card.Body>
                        <Card.Title>{actor.Fname} {actor.Lname}</Card.Title>
                        <p>age: {actor.age()}</p>
                        <a href={actor.linkImdb} target='_blank' rel="noreferrer">IMDB</a>
                    </Card.Body>
                    </Card>
                </Col>
       
          )
      })
    // onChange={(event)=>{this.changefilter(event.target.value) pass the event to the function to target the value of the state and return 
    return(
            <div>
                <input placeholder="Filter" type='text' value={this.state.filter}  onChange={(event)=>{this.changefilter(event.target.value)}}/>
                      <Row >
                         {newArrayOfActors}
                     </Row >
            </div>
         )
    }
}
//https://react-bootstrap.netlify.app/layout/grid/#row-props   row documentaion from bootstrap
export default Gallery;

