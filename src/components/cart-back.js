import React, { Component } from 'react';

import CardBtn from './cart-btn';
import CardLinks from './cart-links';
import CardText from './cart-text';
import CardInput from './cart-input';

export default class CardBack extends Component{
    render(){
        return(
            <div className='card-side side-back'>
                <div className='container-fluid'>
                    <h1>Geting in touch</h1>
                    <form formAction='#' className='card-form'>
                        <div className="row">
                            <div className="col-xs-6">
                                <CardInput name='firstName' id='firstName' type='text' placeholder={'Your First Name'}/>
                            </div>
                            <div className="col-xs-6">
                                <CardInput name='secondName' id='lastName' type='text' placeholder={'Your Second Name'}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6">
                                <CardInput name='email' id='email' type='email' placeholder={'Your Email'}/>
                            </div>
                            <div className="col-xs-6">
                                <CardInput name='subject' id='subject' type='text' placeholder={'Your subject'}/>
                            </div>
                        </div>
                        <CardText name='message' id='message' type='text' placeholder={'Your message'}/>

                        <CardBtn className='btn btn-primary' type='submit' value='Send message'/>
                        <CardLinks/>
                    </form>
                </div>
            </div>
        )
    }
}