import React, { Component } from 'react';

export default class CardText extends Component{
    render(){
        const links = ['twitter', 'linkedin', 'dribbble', 'facebook'];
        
        const linklist = links.map((link, index)=> 
            <li key={index}>
                <a href="#">
                    <i className={`fab fa-${link}`}></i>
                </a>
            </li>
        );
        return(
            <div className='card-social-links'>
                <ul className='social-links'>
                    {linklist}
                </ul>
            </div>
        ) 
    }
}