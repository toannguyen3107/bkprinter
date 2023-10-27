import React, {useEffect} from 'react'
import { Box } from '@mui/material'
import data from './data.json'
import PrintIcon from '@mui/icons-material/Print';
import CloseIcon from '@mui/icons-material/Close';
// import HomeHeader from './homeHeader';
const EditInfoPrinter_tmp = (mayin_1) => {
  console.log(mayin_1);
  
  useEffect(()=>{
    // stateButtonChange();
    document.title = `${mayin_1.name} Edit Information Printer | BKPRINTER `  ;
    
  },[mayin_1.id]);
  
  // Lưu trạng thái ban đầu
// var originalState = JSON.stringify(mayin_1);

// // Hàm để lưu trạng thái vào Local Storage
// function saveState() {
//     localStorage.setItem('mayin_1', JSON.stringify(mayin_1));
// }

// // Hàm để khôi phục trạng thái từ Local Storage
// function restoreState() {
//     var savedState = localStorage.getItem('mayin_1');
//     if (savedState) {
//         mayin_1 = JSON.parse(savedState);
//         updateDisplay();
//     }
// }

function confirmExchange() {
    var confirmed = confirm("Bạn có chắc chắn muốn thay đổi?");
    
    if (confirmed) {
        var propertyKey = Object.keys(mayin_1);
        for (var i = 0; i < propertyKey.length - 1; i++) {
            var key = propertyKey[i];
            if (document.myForm[key].value !== "")
                {mayin_1[key] = document.myForm[key].value;}
        }
        
        // updateDisplay();
        // saveState();
        console.log(mayin_1);
        alert("Thay đổi đã được thực hiện!");
        
        
    } else {
        alert("Thay đổi không được thực hiện.");
        // Khôi phục trạng thái ban đầu nếu người dùng nhấn "Hủy"
        // mayin_1 = JSON.parse(originalState);
        // updateDisplay();
    }
}
  // function stateButtonChange(){
  //   var toggleButton = document.getElementById('toggleButton');

  //   var button1Elements = document.querySelectorAll('#button-1 .knobs,  #button-1 .layer ');
  // // Tắt hiệu ứng chuyển đổi cho các phần tử liên quan đến #button-1
  //   button1Elements.forEach(function(element) {
  //   element.style.transition = '0s ease all';
  //   })
    

  //   if (mayin_1.storedStatus === 'OFF') {
  //   toggleButton.checked = true;
  //   }

  //   toggleButton.addEventListener('change', function() {
  //   if (toggleButton.checked) {
  //       localStorage.setItem('toggleStatus', 'OFF');
  //   } else {
  //       localStorage.setItem('toggleStatus', 'ON');
  //   }
  //   });
  // }
// function updateDisplay() {
//   // console.log(mayin_1.name);
//     var id_may_in = document.getElementById("id-may-in");
//     var ten_may_in = document.getElementById("ten-may-in");
//     var vi_tri_may_in = document.getElementById("vi-tri-may-in");
//     var toggleButton = document.getElementById('toggleButton');

//     var button1Elements = document.querySelectorAll('#button-1 .knobs,  #button-1 .layer ');
//   // Tắt hiệu ứng chuyển đổi cho các phần tử liên quan đến #button-1
//     button1Elements.forEach(function(element) {
//     element.style.transition = '0s ease all';
//     })
    

//     if (mayin_1.storedStatus === 'OFF') {
//     toggleButton.checked = true;
//     }

//     toggleButton.addEventListener('change', function() {
//     if (toggleButton.checked) {
//         localStorage.setItem('toggleStatus', 'OFF');
//     } else {
//         localStorage.setItem('toggleStatus', 'ON');
//     }
//     });
//     id_may_in.textContent = "ID: " + mayin_1.id;
//     ten_may_in.textContent = "Tên: " + mayin_1.name;
//     vi_tri_may_in.textContent = "Vị trí: " + mayin_1.location;
// }

// Gọi hàm restoreState() để khôi phục trạng thái đã lưu khi trang được tải
window.onload = function () {
    // restoreState();
    // stateButtonChange();
};

function confirmCancel() {
    // Thực hiện hành động hủy ở đây
    alert("Hủy đã được thực hiện!");
}
function closeMain() {
  var mainElement = document.querySelector('.body-main');
  if (mainElement) {
      mainElement.style.display = 'none';
  }
}
function changeButton(){
  if (mayin_1.storedStatus === "ON") {
    mayin_1.storedStatus = "OFF";
  } else {
    mayin_1.storedStatus = "ON";
  }
  
  }

  return (
    
        <Box sx={{bgcolor: '#F8F4FC', height: '100vh'}}>
            
            <style
      dangerouslySetInnerHTML={{
        __html:
          '\n\n* {\n    user-select: none;   -webkit-tap-highlight-color: transparent;\n  }\n  \n  *:focus {\n    outline: none;\n  }\n html {font-size:6px} \n @media only screen and (min-width:506px){html {font-size:10px}}  \n  body { \n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n    height: 100%;\n    background-color: #ffffff;\n    position: relative;\n  }\n  \n  #app-cover {\n    display: table;\n    width: 60rem;\n    margin: 8rem auto;\n    counter-reset: button-counter;\n  }\n  \n  .row {\n    display: table-row;\n  }\n  \n  .toggle-button-cover {\n    display: table-cell;\n    position: relative;\n    width: 20rem;\n    height: 2rem;\n    box-sizing: border-box;\n  }\n  \n  /* .button-cover {\n    height: 10rem;\n    margin: 2rem;\n    background-color: #fff;\n    box-shadow: 0 1rem 2rem -0.8rem #c5d6d6;\n    border-radius: 0.4rem;\n  }\n  \n  .button-cover:before {\n    counter-increment: button-counter;\n    content: counter(button-counter);\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    color: #d7e3e3;\n    font-size: 1.2rem;\n    line-height: 1;\n    padding: 0.5rem;\n  } */\n  \n  .button-cover,\n  .knobs,\n  .layer {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n  \n  .button {\n    position: relative;\n \n    width: 7.4rem;\n    height: 3.6rem;\n    overflow: hidden;\n  }\n  \n  .button.r,\n  .button.r .layer {\n    border-radius: 10rem;\n  }\n  \n  .button.b2 {\n    border-radius: 0.2rem;\n  }\n  \n  .checkbox {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    margin: 0;\n    opacity: 0;\n    cursor: pointer;\n    z-index: 3;\n  }\n  .button:hover{\n    opacity: 0.8;\n  }\n  .knobs {\n    z-index: 2;\n  }\n  \n  .layer {\n    width: 100%;\n    background-color: #c6ffc7;\n    transition: 0.3s ease all;\n    z-index: 1;\n  }\n  \n  /* Button 1 */\n  #button-1 .knobs:before {\n    content: "ON";\n    position: absolute;\n    top: 0.4rem;\n    left: 0.4rem;\n    width: 2rem;\n    height: 1rem;\n    color: #fff;\n    font-size: 1rem;\n    font-weight: bold;\n    text-align: center;\n    line-height: 1;\n    padding: 0.9rem 0.4rem;\n    background-color: #32fc5b;\n    border-radius: 50%;\n    transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;\n  }\n  \n  \n  #button-1.OFF .checkbox:checked + .knobs:before {\n    content: "ON";\n    background-color: #32fc5b;\n    left: 0.4rem;\n  }\n  #button-1.ON .checkbox:checked + .knobs:before {\n    content: "OFF";\n    left: 4.2rem;\n    background-color: #f44336;\n  }\n\n  #button-1.ON .knobs:before {\n    content: "ON";\n    background-color: #32fc5b;\n    left: 0.4rem;\n  }\n  #button-1.OFF .knobs:before {\n    content: "OFF";\n    background-color: #f44336;\n    left: 4.2rem;\n    \n  }\n\n  #button-1.OFF .layer {\n    background-color: #fbd3d3;\n  }\n  #button-1.ON .layer {\n    background-color: #c6ffc7;\n  }\n  \n  #button-1.OFF .checkbox:checked ~ .layer {\n    background-color: #c6ffc7;\n  }\n  #button-1.ON .checkbox:checked ~ .layer {\n    background-color: #fbd3d3;\n  }\n  #button-1 .knobs,\n  #button-1 .knobs:before,\n  #button-1 .layer {\n    transition: 0.3s ease all;\n  }\n\ntd{\n  height: 4.4rem; \n min-width:14rem\n}\n.body-main{\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(189, 189, 189, 1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top:0rem;\n}\n.main{ \n font-size: 1.6rem; \n  background-color: #FAFAFA ;\n  height:40rem;\n  width: 60rem;\n  border: 0.1rem solid #949494;\n  position: relative;\n  padding: 1rem;\n}\ntable{\n  width:72%;\n height:100px;\n  /* position: absolute; */\n  margin-bottom: 3rem;\n  margin-left: 2rem;\n}\n.mysubmit{\n  /* position: absolute; */\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 2rem;\n}\n.input-change{\n  width:20rem;\n}\n .input-change::placeholder{font-size: 1.4rem;} \n.btn-submit {\n background-color: #DCDCDC;\n  height: 3.6rem;\n  width: 8.6rem;\n  border-radius: 1rem;\n  margin-right: 2rem;\n  border: none;\n  font-size: 1.6rem;\n}\n.btn-submit-change{\n  background-color: #5670ff;\n}\n.btn-submit:hover{\n  opacity: 0.6;\n  cursor: pointer;\n} \n .tbflex{display:flex; \n flex-wrap:wrap; \n align-items: center; \n justify-content: space-between;}\n \n.btn-info{\n  height: 4rem;\n  width: 16rem;\n  border-radius: 1rem;\n  border: none;\n  background-color: #8ea7ff;\n  margin-bottom: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.info-icon{\n  font-size: 4rem;\n  padding-right: 1rem;\n}\n.info-text{\n  font-size: 2rem;\n}\n.close-icon{\n  position: absolute;\n  right:1rem;\n  font-size: 2rem;\n}\n.close-icon:hover{\n  opacity: 0.6;\n  cursor: pointer;\n}\n  \n  '
      }}
    />
        {/* <link rel="stylesheet" href="button.css"> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
        <div className="body-main">
          <form className="main" name="myForm">
            <CloseIcon
              className='close-icon'
              onClick={closeMain}
            />
            <div className="btn-info">
              <PrintIcon
              className="info-icon"
              />
              <span className="info-text"> {mayin_1.id}. {mayin_1.name} </span>
            </div>
            <span className="info">THÔNG TIN MÁY IN</span>
            <table cellSpacing={2} cellPadding={2}> 
              {/* border="1" */}
              <tbody>
                <tr className="tbflex">
              <td id="id-may-in">ID: {mayin_1.id} </td>
                  <td><input className="input-change" type="text" name="id" placeholder="ID mới" style={{height: '3rem'}} /></td>
                </tr> 
                <tr className="tbflex">
                <td id="ten-may-in">Tên máy: {mayin_1.name}</td>
                  <td><input className="input-change" type="text" name="name" placeholder="Tên mới" style={{height: '3rem'}} /></td>
                </tr>
                <tr className="tbflex">
                <td id="vi-tri-may-in">Vị trí: {mayin_1.location}</td>
                  <td><input className="input-change" type="text" name="noPage" placeholder="Vị trí mới" style={{height: '3rem'}} /></td>
                </tr>
                <tr className="tbflex">
                <td id="so-giay">Số giấy: {mayin_1.noPage}</td>
                  <td><input className="input-change" type="text" name="location" placeholder="Số giấy mới" style={{height: '3rem'}} /></td>
                </tr>
                <tr className="tbflex" >
                  <td >
                    <span>Trạng thái:</span> </td>
                  <td>
                    <div className="toggle-button-cover">
                      <div className="button-cover">
                        <div className = {`button r ${mayin_1.storedStatus}`} id="button-1"  >
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
              <input className="btn-submit" type="submit" value="Hủy" onClick={confirmCancel} />
              <input className="btn-submit btn-submit-change" type="submit" value="Thay đổi" onClick={confirmExchange} />
            </div>
          </form>
        </div>
        
        </Box>
        
  )

}
const EditInfoPrinter = () => {
  
  return (
    <div > {EditInfoPrinter_tmp (data[1])} </div>
    // <EditInfoPrinter_tmp mayin_1 = {data[0]} /> 
  )
}
export default EditInfoPrinter