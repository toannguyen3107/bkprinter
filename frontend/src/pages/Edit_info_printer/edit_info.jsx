import React, {useEffect} from 'react'
import { Box } from '@mui/material'
import data from './data.json'
import PrintIcon from '@mui/icons-material/Print';
import CloseIcon from '@mui/icons-material/Close';
// import HomeHeader from './homeHeader';
const EditInfoPrinter_tmp = ({mayin_1}) => {
  //console.log( mayin_1);
  
  // useEffect(()=>{
  //   // stateButtonChange();
  //   document.title = `${mayin_1.name} Edit Information Printer | BKPRINTER `  ;
    
  // },[mayin_1.id]);
  
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
            console.log(mayin_1);
            alert("Thay đổi đã được thực hiện!");
        } else {
            alert("Thay đổi không được thực hiện.");
        }
    }

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
    
        <Box sx={{bgcolor: '#F8F4FC', height: '40rem', width: '100%'}}>
            
            <style
      dangerouslySetInnerHTML={{
        __html:
          '\n\n* {\n    user-select: none;   -webkit-tap-highlight-color: transparent;\n  }\n  \n  *:focus {\n    outline: none;\n  }\n   \n  body { \n  font-size:0.625rem;  font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n    height: 100%;\n    background-color: #ffffff;\n    position: relative;\n  }\n  \n  #app-cover {\n    display: table;\n    width: 60em;\n    margin: 8em auto;\n    counter-reset: button-counter;\n  }\n  \n  .row {\n    display: table-row;\n  }\n  \n  .toggle-button-cover {\n    display: table-cell;\n    position: relative;\n    width: 20em;\n    height: 2em;\n    box-sizing: border-box;\n  }\n  \n  /* .button-cover {\n    height: 10em;\n    margin: 2em;\n    background-color: #fff;\n    box-shadow: 0 1em 2em -0.8em #c5d6d6;\n    border-radius: 0.4em;\n  }\n  \n  .button-cover:before {\n    counter-incement: button-counter;\n    content: counter(button-counter);\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    color: #d7e3e3;\n    font-size: 1.2em;\n    line-height: 1;\n    padding: 0.5em;\n  } */\n  \n  .button-cover,\n  .knobs,\n  .layer {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n  \n  .button {\n    position: relative;\n \n    width: 7.4em;\n    height: 3.6em;\n    overflow: hidden;\n  }\n  \n  .button.r,\n  .button.r .layer {\n    border-radius: 10em;\n  }\n  \n  .button.b2 {\n    border-radius: 0.2em;\n  }\n  \n  .checkbox {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    margin: 0;\n    opacity: 0;\n    cursor: pointer;\n    z-index: 3;\n  }\n  .button:hover{\n    opacity: 0.8;\n  }\n  .knobs {\n    z-index: 2;\n  }\n  \n  .layer {\n    width: 100%;\n    background-color: #c6ffc7;\n    transition: 0.3s ease all;\n    z-index: 1;\n  }\n  \n  /* Button 1 */\n  #button-1 .knobs:before {\n    content: "ON";\n    position: absolute;\n    top: 0.4em;\n    left: 0.4em;\n    width: 3em;\n    \n    color: #fff;\n    font-size: 1em;\n    font-weight: bold;\n    text-align: center;\n    line-height: 1;\n    padding: 0.9em 0.4em;\n    background-color: #32fc5b;\n    border-radius: 50%;\n    transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;\n  }\n  \n  \n  #button-1.OFF .checkbox:checked + .knobs:before {\n    content: "ON";\n    background-color: #32fc5b;\n    left: 0.4em;\n  }\n  #button-1.ON .checkbox:checked + .knobs:before {\n    content: "OFF";\n    left: 4.2em;\n    background-color: #f44336;\n  }\n\n  #button-1.ON .knobs:before {\n    content: "ON";\n    background-color: #32fc5b;\n    left: 0.4em;\n  }\n  #button-1.OFF .knobs:before {\n    content: "OFF";\n    background-color: #f44336;\n    left: 4.2em;\n    \n  }\n\n  #button-1.OFF .layer {\n    background-color: #fbd3d3;\n  }\n  #button-1.ON .layer {\n    background-color: #c6ffc7;\n  }\n  \n  #button-1.OFF .checkbox:checked ~ .layer {\n    background-color: #c6ffc7;\n  }\n  #button-1.ON .checkbox:checked ~ .layer {\n    background-color: #fbd3d3;\n  }\n  #button-1 .knobs,\n  #button-1 .knobs:before,\n  #button-1 .layer {\n    transition: 0.3s ease all;\n  }\n\ntd{\n  height: 3rem; \n min-width:10rem\n}\n.body-main{\n height:100%; \n  background-color: rgba(189, 189, 189, 1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n top:0em;\n}\n.main{ \n font-size: 1em; \n  background-color: #FAFAFA ;\n\n  width: 60em;\n  border: 0.1em solid #949494;\n  position: relative;\n  padding: 1em;\n}\ntable{\n  width:72%;\n height:100px;\n  /* position: absolute; */\n  margin-bottom: 3em;\n  margin-left: 2em;\n}\n.mysubmit{\n  /* position: absolute; */\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 2em;\n}\n.input-change{\n  width:12em;\n}\n .input-change::placeholder{font-size: 0.8em;} \n.btn-submit {\n background-color: #DCDCDC;\n  height: 2.6em;\n  width: 5.6em;\n  border-radius: 1em;\n  margin-right: 2em;\n  border: none;\n  font-size: 1.6em;\n}\n.btn-submit-change{\n  background-color: #5670ff;\n}\n.btn-submit:hover{\n  opacity: 0.6;\n  cursor: pointer;\n} \n .tbflex{display:flex; \n flex-wrap:wrap; \n align-items: center; \n justify-content: space-between;}\n \n.btn-info{\n  height: 4em;\n  width: 16em;\n  border-radius: 1em;\n  border: none;\n  background-color: #8ea7ff;\n  margin-bottom: 1em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.info-icon{\n  font-size: 3em;\n  padding-right: 0.2em;\n}\n.info-text{\n  font-size: 2em;\n}\n.close-icon{\n  position: absolute;\n  right:1em;\n  font-size: 2em;\n}\n.close-icon:hover{\n  opacity: 0.6;\n  cursor: pointer;\n}\n  \n  '
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
            <span className="info" style={{fontSize: '1rem'}}>THÔNG TIN MÁY IN</span>
            <table cellSpacing={2} cellPadding={2}> 
              {/* border="1" */}
              <tbody>
                <tr className="tbflex">
              <td id="id-may-in" style={{fontSize: '1rem'}}>ID: {mayin_1.id} </td>
                  <td><input className="input-change" type="text" name="id" placeholder="ID mới" style={{height: '2rem', fontSize: '1rem'}} /></td>
                </tr> 
                <tr className="tbflex">
                <td id="ten-may-in" style={{fontSize: '1rem'}}>Tên máy: {mayin_1.name}</td>
                  <td><input className="input-change" type="text" name="name" placeholder="Tên mới" style={{height: '2rem', fontSize: '1rem'}} /></td>
                </tr>
                <tr className="tbflex">
                <td id="vi-tri-may-in" style={{fontSize: '1rem'}}>Vị trí: {mayin_1.location}</td>
                  <td><input className="input-change" type="text" name="noPage" placeholder="Vị trí mới" style={{height: '2rem', fontSize: '1rem'}} /></td>
                </tr>
                <tr className="tbflex">
                <td id="so-giay" style={{fontSize: '1rem'}}>Số giấy: {mayin_1.noPage}</td>
                  <td><input className="input-change" type="text" name="location" placeholder="Số giấy mới" style={{height: '2rem', fontSize: '1rem'}} /></td>
                </tr>
                <tr className="tbflex" >
                  <td >
                    <span style={{fontSize: '1rem'}}>Trạng thái:</span> 
                  </td>
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

export default EditInfoPrinter_tmp