import React from 'react'
import Title from './Title'
import Item from './EducationItem'

export default class Education extends React.Component {
    render() {
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="Education" color='#ffffff'/>
                <div className="container">
                    <Item 
                        time="2018 - 2021 (B.eng)"
                        name="Higher Institute of Computer Science (ISI)"
                        major="Software Development"

                        color="#2ecc71"
                    />
                    <Item 
                        time="2015 - 2018 (Bachelor degree)"
                        name="Faculty of Science of Tunis El Manar"
                        major="Computer Science"
                        color="#3498db"
                    />
                    <Item 
                        time="2015 (High School)"
                        major= "Mathematics"
                        name="Mourouj 1 High School"
                        color="#ef6713"
                    />
                </div>
                
                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #c0392b url('/static/images/bg-edu.jpg');
                        background-size: cover;
                        color: #333333;
                        font-size: 1.3em;
                    }
                `}</style>
            </section>
        )
    }
}
