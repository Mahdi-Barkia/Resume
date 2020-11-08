import React from 'react'
import Title from './Title'
import Timeline from './ExperiencesTimelineItem'

export default class Experiences extends React.Component {
    render() {
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="Experiences" color='#2c3e50'/>
                <div className="container">
                    <Timeline side="left" time="Aug - Sep 2020" color="#e67e22">
                        <h4 style={{'color': '#e67e22'}}>Altran Telnet Corporaion</h4>
                        <p>
                            <i className="position">Devops engineer intern</i><br/>
                            Developing and implementing a CI/CD <br/>Devops pipeline for toolsbox management application<br/>
                            using <b>Jenkins</b>, <b>Docker</b>, <b>Ansible</b>, <b>AWS</b>, <b>Grafana</b>, <b>Prometheus</b>
                        </p>
                    </Timeline> 
                    <Timeline side="right" time="Jun - Aug 2019" color="#3498db">
                        <h4 style={{'color': '#3498db'}}>Volta PV</h4>
                        <p>
                            <i className="position">Software Developer intern</i><br/>
                            Implementing and depoloying Odoo ERP system with custom modules developed<br/>
                            using <b>Python</b>, <b>Odoo 12 Community Edition</b> and <b>Nginx</b>
                        </p>
                    </Timeline> 
                    <Timeline side="left" time="Feb-Jun 2018" color="#9b59b6">
                        <h4 style={{'color': '#9b59b6'}}>Ooredoo Tunisia</h4>
                        <p>
                            <i className="position">Software Developer intern </i><br/>
                            Development and desgin of an API<br/> that can backup and restore files in the cloud<br/>
			    using <b>Python</b>, <b>Tornado</b>, <b>Saltstack</b> and <b>MongoDB</b>	
                        </p>
                    </Timeline> 
                </div>
                
                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #bdc3c7;
                        color: #333333;
                        font-size: 1.3em;
                    }
                    h4 {
                        font-size: 1.2em;
                        font-weight: bold;
                    }
                    p {
                        font-size: 0.8em;
                    }
                    i.position {
                        color: #c0392b;
                    }
                `}</style>
            </section>
        )
    }
}
