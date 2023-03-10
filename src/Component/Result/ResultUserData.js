import React from 'react'
import './ResultUserData.css'

function ResultUserData({userData, address}) {
  return (
    <div>
      <h1 className='text-success'>Data Added Successfully</h1>
      <table className="table d-flex mx-5">
  <thead>
    <tr className='rowDivision'>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">MiddleName</th>
      <th scope="col">MobileNo</th>
      <th scope="col">Email</th>
      <th scope="col">BirthDay</th>
      <th scope="col">Age</th>
      <th scope="col">BloodGroup</th>
      <th scope="col">height</th>
      <th scope="col">weight</th>
      <th scope="col">gender</th>
      <th scope="col">MaritalStatus</th>
      <th scope="col">Address Line 1</th>
      <th scope="col">Address Line 2</th>
      <th scope="col">City</th>
      <th scope="col">State</th>
      <th scope="col">Country</th>
      <th scope="col">Pincode</th>

    </tr>
  </thead>
  <tbody>
    
    <tr className='colDivision'>
      <td>{userData.name}</td>
      <td>{userData.lastName}</td>
      <td>{userData.middleName}</td>
      <td>{userData.mobile}</td>
      <td>{userData.email}</td>
      <td>{userData.birthDay}</td>
      <td>{userData.age}</td>
      <td>{userData.bloodGroup}</td>
      <td>{userData.height}</td>
      <td>{userData.weight}</td>
      <td>{userData.gender}</td>
      <td>{userData.maritalStatus}</td>
      <td>{address.address1}</td>
      <td>{address.address2}</td>
      <td>{address.city}</td>
      <td>{address.state}</td>
      <td>{address.country}</td>
      <td>{address.pincode}</td>

    </tr>
   
  </tbody>
</table>
    </div>
  )
}

export default ResultUserData
