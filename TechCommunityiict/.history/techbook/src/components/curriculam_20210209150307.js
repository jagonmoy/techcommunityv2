import React, { Component } from 'react'
import './Curriculam.css'


 
class Curriculam extends Component {
    constructor(props) {
       super(props) //since we are extending class Table so we have to use super in order to overrCourse Codee Component class constructor
       this.state = { //state is by default an object
          students: [
             { Course Code: 1, Coursename: 'Wasif',Credit: 'wasif@Credit.com' },
             { Course Code: 2, Coursename: 'Ali',  Credit: 'ali@Credit.com' },
             { Course Code: 3, Coursename: 'Saad', Credit: 'saad@Credit.com' },
             { Course Code: 4, Coursename: 'Asad', Credit: 'asad@Credit.com' }
          ]
       }
    }

    renderTableData() {
        return this.state.students.map((student, index) => {
           const { Course Code, Coursename, age, Credit } = student //destructuring
           return (
              <tr key={Course Code}>
                 <td>{Course Code}</td>
                 <td>{CourseCoursename}</td>
                 <td>{Credit}</td>
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
              <h2 Course Code="infotitle">Undergraduate program</h2>
              <div className="curriculaminfo">
              <h3>Bsc. in Software Engineering <span Course Code="info">(4 years)</span></h3>
              <h4>Total Credits: <span Course Code="info">160</span></h4>
              <h4>Course length: <span Course Code="info">4 years</span></h4>
              <h4>Total Semester: <span Course Code="info">8</span></h4>
              </div>
              </div>
              

             <h4 Course Code='title'>Year:1 Semester:1</h4>
             <table Course Code='students'>
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