import Swal from 'sweetalert2'
import React, { useState, useEffect } from 'react';
import './App.css';
import Profile from './profile/profile';

function App() {
  const [formData, setFormData] = useState({
    idCard: '',
    studentId: '',
    studentName: '',
    studentEmail: ''
  });

  useEffect(() => {
  
    console.log('Form data updated:', formData);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if ( !formData.studentId || !formData.studentName || !formData.studentEmail) {
        Swal.fire({
            icon: "error",
            title: "สมัครสมาชิกไม่สำเร็จ",
            text: "กรุณากรอกข้อมูลให้ครบ",
        });
        return;
    }

    console.log('Data saved:', formData);
    Swal.fire({
        title: "สมัครสมาชิกสำเร็จ",
        icon: "success"
    });
};

  return (
    <div>
      <div className='RegisBox'>
        <p style={{ fontSize: '26px', fontWeight: 'normal', textAlign: 'center', top: '20px', height: '30px' }}>สมัครสมาชิก</p>
        <div className='Boxinside'>
          <div className='centeredSection'>
            <div style={{ marginLeft: '20px'}}>

              <div className='changpo'>
                <div style={{ width: '180px' }}>
                  <label htmlFor="idCard">รหัสบัตร</label>
                  <div style={{ marginTop: '5px' }}>
                    <input className='Boxidcard' type="text" id="idCard" name="idCard" value={formData.idCard} readOnly/>
                  </div>
                </div>
                <div style={{ width: '180px' }}>
                  <label htmlFor="studentId">รหัสนิสิต</label>
                  <div style={{ marginTop: '5px' }}>
                    <input className='Boxidcard' type="text" id="studentId" name="studentId" value={formData.studentId} onChange={handleInputChange} />
                  </div>
                </div>
              </div>


              <div style={{ marginLeft: '42px' }}>
                <div style={{ marginBottom: '10px' }}>
                  <label htmlFor="studentName" style={{ fontSize: '13px' }}>ชื่อ-นามสกุล</label>
                  <div style={{ marginTop: '5px' }}>
                    <input className='BoxName' type="text" id="studentName" name="studentName" value={formData.studentName} onChange={handleInputChange} />
                  </div>
                </div>
                <div>
                  <label htmlFor="studentEmail" style={{ fontSize: '13px' }}>Email</label>
                  <div style={{ marginTop: '5px' }}>
                    <input className='BoxName' type="text" id="studentEmail" name="studentEmail" value={formData.studentEmail} onChange={handleInputChange} />
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
        <div className='ButtonSave'>
          <button onClick={handleSave}>ยืนยัน</button>
        </div>
      </div>
      {/* <Profile></Profile> */}
    </div>
  );
}

export default App;
