import React, {useEffect} from 'react'
import { Box } from '@mui/material'
import data from './data.json'
import PrintIcon from '@mui/icons-material/Print';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import HomeHeader from './homeHeader';
const EditInfoPrinter = ({mayin_1}) => {
  console.log( mayin_1);
  
  useEffect(()=>{
    // stateButtonChange();
    document.title = ` Edit Information Printer | BKPRINTER `  ;
    
  },[]);

    function confirmExchange() {
        var confirmed = confirm("Bạn có chắc chắn muốn thay đổi?");
        
        if (confirmed) {
            // thưcj hiện việc thay đổi
            // Gọi hàm updatePrinter để cập nhật thông tin máy in và truyền tham số từ form
            // updatePrinter(getFormData()); 
            axios({
              method: 'patch',
              url: `http://localhost:5001/api/printers/${mayin_1.printerId}`,
              data: getFormData(),
              responseType: 'json',
            })

            console.log(mayin_1 + '-----------');
            alert("Thay đổi đã được thực hiện!");
        } else {
            alert("Thay đổi không được thực hiện.");
        }
    }
    // Hàm lấy dữ liệu từ form
    function getFormData() {
      // Lấy giá trị từ form
      
      var make = document.myForm.make.value;
      var campus = document.myForm.campus.value;
      var building = document.myForm.building.value;
      var room = document.myForm.room.value;
      var pagesRemaining = document.myForm.pagesRemaining.value;

      
      if(!make) make = mayin_1.make;
      if(!campus) campus = mayin_1.location.campus;
      if(!building) building = mayin_1.location.building;
      if(!room) room = mayin_1.location.room;
      if(!pagesRemaining) pagesRemaining = mayin_1.pagesRemaining;

      return {
        printerId: document.myForm.printerId.value,
        make: make,
        location: {
                  campus: campus,
                  building: building,
                  room: room,
                  },
        pagesRemaining: pagesRemaining,
        status: "Sẳn sàng",
      };
    }


    // Gọi hàm restoreState() để khôi phục trạng thái đã lưu khi trang được tải
    window.onload = function () {
        // restoreState();
        // stateButtonChange();
    };

    function confirmCancel() {

       document.myForm.make.value = "";
       document.myForm.campus.value = "";
       document.myForm.building.value = "";
       document.myForm.room.value = "";
       document.myForm.pagesRemaining.value = "";

    }
    function closeMain() {
      // var mainElement = document.querySelector('.body-main');
      // if (mainElement) {
      //     mainElement.style.display = 'none';
      // }
      return (
        <Link to="/app/manage_printer">
            
        </Link>);
    }
    mayin_1.state = "Off";
    function changeButton(){
      if (mayin_1.state == "On") {
        mayin_1.state = "Off";
      } else {
        mayin_1.state = "On";
      }
    }

    return (
    
        <Box sx={{bgcolor: '#F8F4FC', height: '40rem', width: '100%'}}>
            
            <style
      dangerouslySetInnerHTML={{
        __html:
          '\n\n* {\n    user-select: none;   -webkit-tap-highlight-color: transparent;\n  }\n  \n  *:focus {\n    outline: none;\n  }\n   \n  body { \n  font-size:0.625rem;  font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n    height: 100%;\n    background-color: #ffffff;\n    position: relative;\n  }\n  \n  #app-cover {\n    display: table;\n    width: 60em;\n    margin: 8em auto;\n    counter-reset: button-counter;\n  }\n  \n  .row {\n    display: table-row;\n  }\n  \n  .toggle-button-cover {\n    display: table-cell;\n    position: relative;\n    width: 20em;\n    height: 2em;\n    box-sizing: border-box;\n  }\n  \n  /* .button-cover {\n    height: 10em;\n    margin: 2em;\n    background-color: #fff;\n    box-shadow: 0 1em 2em -0.8em #c5d6d6;\n    border-radius: 0.4em;\n  }\n  \n  .button-cover:before {\n    counter-incement: button-counter;\n    content: counter(button-counter);\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    color: #d7e3e3;\n    font-size: 1.2em;\n    line-height: 1;\n    padding: 0.5em;\n  } */\n  \n  .button-cover,\n  .knobs,\n  .layer {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n  \n  .button {\n    position: relative;\n \n    width: 7.4em;\n    height: 3.6em;\n    overflow: hidden;\n  }\n  \n  .button.r,\n  .button.r .layer {\n    border-radius: 10em;\n  }\n  \n  .button.b2 {\n    border-radius: 0.2em;\n  }\n  \n  .checkbox {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    margin: 0;\n    opacity: 0;\n    cursor: pointer;\n    z-index: 3;\n  }\n  .button:hover{\n    opacity: 0.8;\n  }\n  .knobs {\n    z-index: 2;\n  }\n  \n  .layer {\n    width: 100%;\n    background-color: #c6ffc7;\n    transition: 0.3s ease all;\n    z-index: 1;\n  }\n  \n  /* Button 1 */\n  #button-1 .knobs:before {\n    content: "On";\n    position: absolute;\n    top: 0.4em;\n    left: 0.4em;\n    width: 3em;\n    \n    color: #fff;\n    font-size: 1em;\n    font-weight: bold;\n    text-align: center;\n    line-height: 1;\n    padding: 0.9em 0.4em;\n    background-color: #32fc5b;\n    border-radius: 50%;\n    transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;\n  }\n  \n  \n  #button-1.Off .checkbox:checked + .knobs:before {\n    content: "On";\n    background-color: #32fc5b;\n    left: 0.4em;\n  }\n  #button-1.On .checkbox:checked + .knobs:before {\n    content: "Off";\n    left: 4.2em;\n    background-color: #f44336;\n  }\n\n  #button-1.On .knobs:before {\n    content: "On";\n    background-color: #32fc5b;\n    left: 0.4em;\n  }\n  #button-1.Off .knobs:before {\n    content: "Off";\n    background-color: #f44336;\n    left: 4.2em;\n    \n  }\n\n  #button-1.Off .layer {\n    background-color: #fbd3d3;\n  }\n  #button-1.On .layer {\n    background-color: #c6ffc7;\n  }\n  \n  #button-1.Off .checkbox:checked ~ .layer {\n    background-color: #c6ffc7;\n  }\n  #button-1.On .checkbox:checked ~ .layer {\n    background-color: #fbd3d3;\n  }\n  #button-1 .knobs,\n  #button-1 .knobs:before,\n  #button-1 .layer {\n    transition: 0.3s ease all;\n  }\n\ntd{\n  height: 3rem; \n min-width:10rem\n}\n.body-main{\n height:100%; \n  background-color: rgba(189, 189, 189, 1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n top:0em;\n}\n.main{ \n font-size: 1em; \n  background-color: #FAFAFA ;\n\n  width: 60em;\n  border: 0.1em solid #949494;\n  position: relative;\n  padding: 1em;\n}\ntable{\n  width:72%;\n height:100px;\n  /* position: absolute; */\n  margin-bottom: 3em;\n  margin-left: 2em;\n}\n.mysubmit{\n  /* position: absolute; */\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 2em;\n}\n.input-change{\n  width:12em;\n}\n .input-change::placeholder{font-size: 0.8em;} \n.btn-submit {\n background-color: #DCDCDC;\n  height: 2.6em;\n  width: 5.6em;\n  border-radius: 1em;\n  margin-right: 2em;\n  border: none;\n  font-size: 1.6em;\n}\n.btn-submit-change{\n  background-color: #5670ff;\n}\n.btn-submit:hover{\n  opacity: 0.6;\n  cursor: pointer;\n} \n .tbflex{display:flex; \n flex-wrap:wrap; \n align-items: center; \n justify-content: space-between;}\n \n.btn-info{\n  height: 4em;\n  width: 16em;\n  border-radius: 1em;\n  border: none;\n  background-color: #8ea7ff;\n  margin-bottom: 1em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.info-icon{\n  font-size: 3em;\n  padding-right: 0.2em;\n}\n.info-text{\n  font-size: 2em;\n}\n.close-icon{\n  position: absolute;\n  right:1em;\n  font-size: 2em;\n}\n.close-icon:hover{\n  opacity: 0.6;\n  cursor: pointer;\n}\n  \n  '
      }}
    />
        {/* <link rel="stylesheet" href="button.css"> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
        <div className="body-main">
          <form className="main" name="myForm">
          <Link to="/app/manage_printer">
          <CloseIcon
              className='close-icon'
              onClick={closeMain}
            />
          </Link>;
            
            <div className="btn-info">
              <PrintIcon
              className="info-icon"
              />
              <span className="info-text"> {mayin_1.printerId}. {mayin_1.make} </span>
            </div>
            <span className="info" style={{fontSize: '1rem'}}>THÔNG TIN MÁY IN</span>
            <table cellSpacing={2} cellPadding={2}> 
              {/* border="1" */}
              <tbody>
                <tr className="tbflex">
              <td id="id-may-in" style={{fontSize: '1rem'}}>ID: {mayin_1.printerId} </td>
                  <td><input readOnly className="input-change" type="text" name="printerId" placeholder="ID mới" style={{height: '2rem', fontSize: '1rem'}} value={`${mayin_1.printerId}`}/></td>
                </tr> 
                <tr className="tbflex">
                <td id="ten-may-in" style={{fontSize: '1rem'}}>Tên máy: {mayin_1.make}</td>
                  <td><input className="input-change" type="text" name="make" placeholder="Tên mới" style={{height: '2rem', fontSize: '1rem'}} /></td>
                </tr>
                <tr className="tbflex">
                <td id="vi-tri-may-in" style={{fontSize: '1rem'}}>Vị trí: {mayin_1.location.campus}</td>
                  <td><input className="input-change" type="text" name="campus" placeholder="Cs mới" style={{height: '2rem', fontSize: '1rem'}} /></td>
                </tr>
                <tr className="tbflex">
                <td id="vi-tri-may-in" style={{fontSize: '1rem'}}>Vị trí: {mayin_1.location.building}</td>
                  <td><input className="input-change" type="text" name="building" placeholder="Tòa mới" style={{height: '2rem', fontSize: '1rem'}} /></td>
                </tr>
                <tr className="tbflex">
                <td id="vi-tri-may-in" style={{fontSize: '1rem'}}>Vị trí: {mayin_1.location.room}</td>
                  <td><input className="input-change" type="text" name="room" placeholder="Phòng mới" style={{height: '2rem', fontSize: '1rem'}} /></td>
                </tr>
                <tr className="tbflex">
                <td id="so-giay" style={{fontSize: '1rem'}}>Số giấy: {mayin_1.pagesRemaining}</td>
                  <td><input className="input-change" type="number" name="pagesRemaining" placeholder="Số giấy mới" style={{height: '2rem', fontSize: '1rem'}} /></td>
                </tr>
                <tr className="tbflex" >
                  <td >
                    <span style={{fontSize: '1rem'}}>Trạng thái:</span> 
                  </td>
                  <td>
                    <div className="toggle-button-cover">
                      <div className="button-cover">
                        <div className = {`button r ${mayin_1.state}`} id="button-1"  >
                        <input type="checkbox" className="checkbox" id="toggleButton" onClick={changeButton} />
                          <div className="knobs" />
                          <div className="layer" />
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody></table>
            <div className="mysubmit">
              <input className="btn-submit" value="Hủy"
              type="button"  
              // type="submit"  
              onClick={confirmCancel} 
              />
              <input className="btn-submit btn-submit-change" value="Thay đổi" 
              type="button"
              // type="submit" 
              onClick={confirmExchange} 
              />
            </div>
          </form>
        </div>
        
        </Box>
        
  )

}

export default EditInfoPrinter