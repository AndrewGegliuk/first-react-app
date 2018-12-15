import React, { Component } from 'react';

export default class CardFront extends Component{
    render(){
        return(
            <div className="card-side side-front">
                <div className="container-fluid">
                    <div className="row">
                        <div className="clo-xs-12">
                            <img src="http://www.imgworlds.com/wp-content/uploads/2015/12/generic.jpg"/>
                        </div>
                        <div className="col-xs-12 side-front-content">
                            <h2>Travel and Tourism</h2>
                            <p>
                            Travel and tourism provide services of all types for both inbound and outbound travellers, and have become one of the world's fastest growing industries. International travel and tourism are the world's largest export earner and an important factor in the balance of payments of most nations. The market is increasingly diverse, covering not only traditional sunshine tourism and business trips but also many new types of travel that have developed in recent years. Tourism has become one of the world's most important sources of employment. It covers a wide range of jobs, including all branches of the travel industry, hospitality in hotels and restaurants, entertainment and recreation, as well as the tourist attractions in a particular region. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}