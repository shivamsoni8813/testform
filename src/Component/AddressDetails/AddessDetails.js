import React, { useContext, useState } from 'react'
import ResultUserData from '../Result/ResultUserData'
import { StepPercent } from '../context/StepContext'
import './AddressDetails.css'
const AddessDetails = ({userData}) => {
    let {setStepPercent}=useContext(StepPercent)
    let [showResult, setShowResult] = useState(false)
    let [addressDetail, setAddressDetail] = useState({
        address1 : "",
        address2 : "",
        city : "",
        state : "",
        country : "",
        pincode : ""
    })
    let handleCilck = (e)=>{
        e.preventDefault()
        setStepPercent(100)
        setShowResult(true)
    }
   
    return (
        <div>
            <div className="AddressDetailsPage">
                {
                !showResult &&
                <>
                <form className="row g-3 " onSubmit={(e)=>handleCilck(e)}>

                    <div className="col-mb-6">
                        <input type="text" className="form-control" value={addressDetail.address1} onChange={(e)=>setAddressDetail({...addressDetail, address1: e.target.value})} id="inputAddress" placeholder="Address 1" required/>
                    </div>
                    <div className="col-mb-6">
                        <input type="text" className="form-control" value={addressDetail.address2} onChange={(e)=>setAddressDetail({...addressDetail, address2: e.target.value})} id="inputAddress" placeholder="Address 2" required/>
                    </div>
                    <div className="col-mb-6">
                        <input type="text" className="form-control" value={addressDetail.city} onChange={(e)=>setAddressDetail({...addressDetail, city: e.target.value})} id="inputAddress" placeholder="City" required/>
                    </div>
                    <div className="col-md-6">
                        <select id="state" className="form-select" placeholder='Enter State' required
                         value={addressDetail.state} onChange={(e)=>setAddressDetail({...addressDetail, state: e.target.value})}>
                            <option >Choose..</option>
                            <option>Rajasthan</option>
                            <option>Gujrat</option>
                        </select>
                    </div>
                    <div className="col-mb-6">
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Country" value={addressDetail.country} onChange={(e)=>setAddressDetail({...addressDetail, country: e.target.value})} required/>
                    </div>
                    <div className="col-mb-6">
                        <input type="text" className="form-control" id="formGroupExampleInput" value={addressDetail.pincode} onChange={(e)=>setAddressDetail({...addressDetail, pincode: e.target.value})} placeholder="Enter Pincode" required/>
                    </div>

                    <div className="col-mb-6">
                        <button type="submit" className="btn btn-primary" >Next</button>
                    </div>
                </form>
                </>

        }
        {showResult && <ResultUserData userData={userData} address = {addressDetail} />}
        
            </div>

        </div>
    )
}

export default AddessDetails
