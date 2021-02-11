import React, { Component } from 'react'
import './Curriculam.css'


 
class Curriculam extends Component {
    constructor(props) {
       super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
       this.state = { //state is by default an object
          students: [
             { id: 1, Coursename: 'Wasif',email: 'wasif@email.com' },
             { id: 2, Coursename: 'Ali',  email: 'ali@email.com' },
             { id: 3, Coursename: 'Saad', email: 'saad@email.com' },
             { id: 4, Coursename: 'Asad', email: 'asad@email.com' }
          ]
       }
    }

    renderTableData() {
        return this.state.students.map((student, index) => {
           const { id, CourseCoursename, age, email } = student //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{CourseCoursename}</td>
                 <td>{email}</td>
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
          <div>
              <div className="academic_information">
              <h2 id="infotitle">Undergraduate program</h2>
              <h4>Bsc. in Software Engineering</h4>
              </div>
              

             <h4 id='title'>React Dynamic Table</h4>
             <table id='students'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
          </div>
       )
    }
 }
 
 export default Curriculam