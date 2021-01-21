import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';

class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd:0
    }


    percentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        } 
    }

    componentDidUpdate(){
        setTimeout(()=> {
            this.percentage()
        },30)
    }


    render() {
        return(
            <div className="center_wrapper_discount">
                <div className="discount_wrapper">

                    <Fade 
                        onReveal={()=> this.percentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 1st APRIL</h3>
                            <p>Filler Text Filler Text Filler Text Filler Text </p>

                            <MyButton
                                text="Purchase tickets"
                                bck="#bde0fe"
                                color="#000000"
                                link="http://google.com"
                            />

                        </div>
                    </Slide>


                
                </div>
            </div>
        );
    }
}

export default Discount;