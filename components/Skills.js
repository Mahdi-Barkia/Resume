import React from 'react'
import Title from './Title'
import Group from './SkillItemGroup'
import circle from './../static/css/circle.css'

export default class Skills extends React.Component {
    render() {
        const skillImgs = [
            {
                name: 'Front-ends',
                list: [
                    { name: 'html5', color: '#f16529', value: '75' },
                    { name: 'css3', color: '#29a9df', value: '70' },

                    { name: 'bootstrap', color: '#8b57d9', value: '80' },                
                    { name: 'javascript', color: '#f7df1e', value: '70' },
                    { name: 'jquery', color: '#288cc4', value: '60' },
                    { name: 'angularjs', color: '#dd0330', value: '60' },
                    
                ]
            },
            {
                name: 'Back-ends',
                list: [
                    { name: 'php', color: '#8993be', value: '50' },           
                    { name: 'python', color: '#FFD343', value: '80' },
                    { name: 'java', color: '#1e77b7', value: '70' },
                    { name: 'spring', color: '#68BD45', value: '80' }
                ]
            },
            {
                name: 'Databases',
                list: [
                    { name: 'mysql', color: '#4479A1', value: '65' },
                    { name: 'mongodb', color: '#449A44', value: '55' },
                    { name: 'oracle', color: '#D02023', value: '55'}
                ]
            },
            {
                name: 'Tools',
                list: [
                    { name: 'git', color: '#F05032', value: '60' },
                    { name: 'npm', color: '#cb3736', value: '55' },
                    { name: 'maven', color: '#CD2137', value: '55' },
                    { name: 'jenkins', color: '#E8CFB1', value: '85' },
                    { name: 'ansible', color: '#5BBDBF', value: '85' },
                    { name: 'docker', color: '#2391E6', value: '90' },
                    { name: 'saltstack', color: '#00EACE', value: '70' },
                    { name: 'jinja', color: '#AE1919', value: '70'},
                    { name: 'heroku', color: '#410093', value: '70' },
                    { name: 'bacula', color: '#D10a0a', value: '70' },
                ]
            } ,
            {
                name: 'Cloud',
                list: [
                    { name: 'aws', color: '#FF9900', value: '50' },

              
                ]
            } ,
             {
                name: 'ERP',
                list: [
                    { name: 'odoo', color: '#a4468a', value: '80' },

              
                ]
            } ,
             {
                name: 'OS',
                list: [
                    { name: 'windows', color: '#01A4EF', value: '90 '},
                    { name: 'ubuntu', color: '#D64513', value: '80' }

              
                ]
            } ,
            {
                name: 'Languages',
                list: [
                    { name: 'english', color: '#010063', value: '95' },
                    { name: 'french', color: '#EE2436', value: '70' }

            
                ]
            } 
        ]

        return (
            <section className="hero wrapper has-text-centered">
                <style dangerouslySetInnerHTML={{ __html: circle }} />
                <Title title="Skills" color='#ffffff'/>
                <div className="container">
                    {
                        skillImgs.map((item, key) => (
                            <Group key={key} name={item.name} items={item.list} />    
                        ))
                    }
                </div>
                
                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #2f353f;
                        background-size: cover;
                        color: #333333;
                        font-size: 1.3em;
                    }
                `}</style>
            </section>
        )
    }
}
