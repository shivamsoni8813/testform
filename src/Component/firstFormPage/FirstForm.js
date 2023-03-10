import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddessDetails from '../AddressDetails/AddessDetails'
import './FirstForm.css'
const FirstForm = () => {

    let [userData, setUserData] = useState({
        name: "",
        lastName: "",
        middleName: "",
        mobile: "",
        email: "",
        birthDay: "",
        age: "",
        bloodGroup: "",
        height: "",
        weight: "",
        gender: "",
        maritalStatus: ""
    })
    let [showAddress, setShowAddress] = useState(false)
    
        
    let goToAddress = (e) => {        
        e.preventDefault()
        setShowAddress(true)
    }

    return (
        <div>
            <div className="firstFormContainer">
               
                   {!showAddress && <div className="userForm">

                        <form className="row g-3 needs-validation" onSubmit={(e)=>goToAddress(e)}>
                            <div className="col-md-6">
                                <input type="text" className="form-control" id='validationCustom01' value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} placeholder="First name" aria-label="First name" required />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" value={userData.lastName} onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} placeholder="Last name" aria-label="Last name" required />
                            </div>

                            <div className="col-md-6">
                                <input type="text" className="form-control" value={userData.middleName} onChange={(e) => setUserData({ ...userData, middleName: e.target.value })} id="inputEmail4" placeholder='middle Name' required />
                            </div>
                            <div className="col-md-6">
                                <input type="phone" className="form-control" value={userData.mobile} onChange={(e) => setUserData({ ...userData, mobile: e.target.value })} id="inputEmail4" placeholder='Enter Mobile No.' required />
                            </div>
                            <div className="col-md-6">
                                <input type="email" className="form-control" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} id="inputEmail4" placeholder='Enter Email' required />
                            </div>
                            <div className="col-md-6">
                                <input type="date" className="form-control" value={userData.birthDay} onChange={(e) => setUserData({ ...userData, birthDay: e.target.value })} id="inputPassword4" placeholder='Enter BirthDay' required />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" value={userData.age} onChange={(e) => setUserData({ ...userData, age: e.target.value })} id="inputAddress" placeholder="Enter Your Age" required />
                            </div>
                            <div className="col-md-6">
                                <select id="inputState" className="form-select" placeholder='Enter Blood Group' required
                                    value={userData.bloodGroup} onChange={(e) => setUserData({ ...userData, bloodGroup: e.target.value })}>
                                    <option>A+</option>
                                    <option>B+</option>
                                    <option>AB+</option>
                                    <option>O-</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <input type="text" className="form-control" value={userData.height} onChange={(e) => setUserData({ ...userData, height: e.target.value })} id="inputZip" placeholder='Enter Heigth' required />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" value={userData.weight} onChange={(e) => setUserData({ ...userData, weight: e.target.value })} id="inputZip" placeholder='Enter Weight' required />
                            </div>
                            <div className="checks d-flex">

                                <div className="form-check">
                                    <input className="form-check-input" type="radio" value={userData.gender} onChange={(e) => setUserData({ ...userData, gender: "Male" })} name="flexRadioDefault" id="flexRadioDefault1" required />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check mx-3">
                                    <input className="form-check-input" type="radio" value={userData.gender} onChange={(e) => setUserData({ ...userData, gender: "Female" })} name="flexRadioDefault" id="flexRadioDefault2" defaultChecked required />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        Female
                                    </label>
                                </div>
                            </div>
                            <div className="maritalStatusChecks d-flex ">

                                <div className="form-check">
                                    <input className="form-check-input" value={userData.maritalStatus} onChange={(e) => setUserData({ ...userData, maritalStatus: "Single" })} type="radio" name="flexRadioDefault1" id="flexRadioDefault2" defaultChecked required />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        Single
                                    </label>
                                </div>
                                <div className="form-check mx-3">
                                    <input className="form-check-input" type="radio" value={userData.maritalStatus} onChange={(e) => setUserData({ ...userData, maritalStatus: "Married" })} name="flexRadioDefault1" id="flexRadioDefault2" required />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        Married
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" value={userData.maritalStatus} onChange={(e) => setUserData({ ...userData, maritalStatus: "Divorced" })} name="flexRadioDefault1" id="flexRadioDefault1" required />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Divorced
                                    </label>
                                </div>
                                <div className="form-check mx-3">
                                    <input className="form-check-input" type="radio" value={userData.maritalStatus} onChange={() => setUserData({ ...userData, maritalStatus: "Widowed" })} name="flexRadioDefault1" id="flexRadioDefault2" required />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        Widowed
                                    </label>
                                </div>
                            </div>

                        <button type="submit" className="btn btn-primary" >Next</button>
                        </form>
                    </div>
                }

                {showAddress && <AddessDetails userData={userData} />}

            </div>

        </div>

    )
}

export default FirstForm
