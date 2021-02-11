import React, { Component } from 'react'
import './Curriculam.css'
import Header from './Header'


 
class Resources extends Component {
    constructor(props) {
       super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
       this.state = { //state is by default an object
          students: [
             { Book: 'SWE 121'},
             { Book: 'SWE 122'},
             { Book: 'SWE 123'},
             { Book: 'EEE 101'},
             { Book: 'EEE 102'},
             { Book: 'MAT 105W'},
             { Book: 'PHY 103W'},
             { Book: 'BNG 105W'}
          ],
          
          studentsofsecond: [
            { Book: 'SWE 150'},
            { Book: 'SWE 127'},
            { Book: 'SWE 128'},
            { Book: 'SWE 125'},
            { Book: 'PHY 102W'},
            { Book: 'MAT 107W'},
            { Book: 'STA 101W'},
            { Book: 'ENG 101W'},
            { Book: 'ENG 102W'}
         ]
       }
    }

    

    renderTableData() {
        return this.state.students.map((student, index) => {
           const { Book, Coursename, age, Credit } = student //destructuring
           return (
              <tr key={Book}>
                 <td>{Book}</td>
              </tr>
           )
        })
     }

     rendersecTableData() {
        return this.state.studentsofsecond.map((student, index) => {
           const { Book, Coursename, age, Credit } = student //destructuring
           return (
              <tr key={Book}>
                 <td>{Book}</td>
              </tr>
           )
        })
     }

     renderTableHeader() {
        let header = Object.keys(this.state.students[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
 
    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
       return (
          <div className="curriculam">
              <div className="academic_information">
              <h2 id="infotitle">Undergraduate program</h2>
              <div className="curriculaminfo">
              <h3>Bsc. in Software Engineering <span id="info">(4 years)</span></h3>
              <h4>Total Credits: <span id="info">160</span></h4>
              <h4>Course length: <span id="info">4 years</span></h4>
              <h4>Total Semester: <span id="info">8</span></h4>
              </div>
              </div>
              
            <div className="yr1sms1">
             <h4 id='title'>Year:1 Semester:1</h4>
             <table id='students'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
            </div>

            <div className="yr1sms2">
             <h4 id='title'>Year:1 Semester:2</h4>
             <table id='students'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.rendersecTableData()}
               </tbody>
            </table>
            </div>
          </div>
       )
    }
 }
 
 export default 