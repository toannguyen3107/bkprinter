import React, {useEffect} from 'react'
import { Box } from '@mui/material'
import Header from '../../component/Header'

const PageExample = () => {
 
  useEffect(()=>{
    document.title = 'View History | BKPRINTER'
  });
  
  const Main = (
    <h1>Hello world</h1>
  ); 
  
  return (
    
        <Box sx={{bgcolor: '#F8F4FC', height: '100vh'}}>
            <Header />
            <style dangerouslySetInnerHTML={{__html: "\n\n* {\n    user-select: none;\n    -webkit-tap-highlight-color: transparent;\n  }\n  \n  *:focus {\n    outline: none;\n  }\n  \n  body {\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n    height: 100%;\n    background-color: #ffffff;\n    position: relative;\n  }\n  \n  #app-cover {\n    display: table;\n    width: 600px;\n    margin: 80px auto;\n    counter-reset: button-counter;\n  }\n  \n  .row {\n    display: table-row;\n  }\n  \n  .toggle-button-cover {\n    display: table-cell;\n    position: relative;\n    width: 60px;\n    height: 60px;\n    box-sizing: border-box;\n  }\n  \n  /* .button-cover {\n    height: 100px;\n    margin: 20px;\n    background-color: #fff;\n    box-shadow: 0 10px 20px -8px #c5d6d6;\n    border-radius: 4px;\n  }\n  \n  .button-cover:before {\n    counter-increment: button-counter;\n    content: counter(button-counter);\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    color: #d7e3e3;\n    font-size: 12px;\n    line-height: 1;\n    padding: 5px;\n  } */\n  \n  .button-cover,\n  .knobs,\n  .layer {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n  \n  .button {\n    position: relative;\n    top: 50%;\n    width: 74px;\n    height: 36px;\n    margin: -20px auto 0 auto;\n    overflow: hidden;\n  }\n  \n  .button.r,\n  .button.r .layer {\n    border-radius: 100px;\n  }\n  \n  .button.b2 {\n    border-radius: 2px;\n  }\n  \n  .checkbox {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    margin: 0;\n    opacity: 0;\n    cursor: pointer;\n    z-index: 3;\n  }\n  .button:hover{\n    opacity: 0.8;\n  }\n  .knobs {\n    z-index: 2;\n  }\n  \n  .layer {\n    width: 100%;\n    background-color: #c6ffc7;\n    transition: 0.3s ease all;\n    z-index: 1;\n  }\n  \n  /* Button 1 */\n  #button-1 .knobs:before {\n    content: \"ON\";\n    position: absolute;\n    top: 4px;\n    left: 4px;\n    width: 20px;\n    height: 10px;\n    color: #fff;\n    font-size: 10px;\n    font-weight: bold;\n    text-align: center;\n    line-height: 1;\n    padding: 9px 4px;\n    background-color: #32fc5b;\n    border-radius: 50%;\n    transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;\n  }\n  \n  #button-1 .checkbox:checked + .knobs:before {\n    content: \"OFF\";\n    left: 42px;\n    background-color: #f44336;\n  }\n  \n  #button-1 .checkbox:checked ~ .layer {\n    background-color: #fbd3d3;\n  }\n  \n  #button-1 .knobs,\n  #button-1 .knobs:before,\n  #button-1 .layer {\n    transition: 0.3s ease all;\n  }\n\ntd{\n  height: 40px;\n}\n.body-main{\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(189, 189, 189, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top:0px;\n}\n.main{\n  background-color: #96c5ff;\n  height:360px;\n  width: 600px;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #949494;\n  position: relative;\n  padding: 10px;\n}\ntable{\n  width:400px;\n  /* position: absolute; */\n  margin-bottom: 30px;\n  margin-left: 20px;\n}\n.mysubmit{\n  /* position: absolute; */\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n  margin-right: 20px;\n}\n.input-change{\n  width:100%;\n}\n.btn-submit {\n  height: 36px;\n  width: 86px;\n  border-radius: 10px;\n  margin-right: 20px;\n  border: none;\n  font-size: 16px;\n}\n.btn-submit-change{\n  background-color: #5670ff;\n}\n.btn-submit:hover{\n  opacity: 0.6;\n  cursor: pointer;\n}\n.btn-info{\n  height: 40px;\n  width: 130px;\n  border-radius: 10px;\n  border: none;\n  background-color: #8ea7ff;\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.info-icon{\n  font-size: 26px;\n  padding-right: 10px;\n}\n.info-text{\n  font-size: 20px;\n}\n.close-icon{\n  position: absolute;\n  right:10px;\n  font-size: 18px;\n}\n.close-icon:hover{\n  opacity: 0.6;\n  cursor: pointer;\n}\n  \n" }} />
        {/* <link rel="stylesheet" href="button.css"> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
        <div className="body-main">
          <form className="main" name="myForm">
            <i className="fa-solid fa-xmark close-icon" onClick={closeMain} />
            <div className="btn-info">
              <i className="fa-solid fa-print info-icon" />
              <span className="info-text"> May in 1</span>
            </div>
            <span className="info">THONG TIN MAY IN</span>
            <table cellSpacing={2} cellPadding={2}> 
              {/* border="1" */}
              <tbody><tr>
              <td id="id-may-in">ID: </td>
                  <td><input className="input-change" type="text" name="id" placeholder="ID mới" style={{height: '30px'}} /></td>
                </tr> 
                <tr>
                <td id="ten-may-in">Tên máy: </td>
                  <td><input className="input-change" type="text" name="name" placeholder="Tên mới" style={{height: '30px'}} /></td>
                </tr>
                <tr>
                <td id="vi-tri-may-in">Vị trí: </td>
                  <td><input className="input-change" type="text" name="location" placeholder="Vị trí mới" style={{height: '30px'}} /></td>
                </tr>
                <tr>
                  <td>Trạng thái: </td>
                  <td>
                    <div className="toggle-button-cover">
                      <div className="button-cover">
                        <div className="button r" id="button-1">
                        <input type="checkbox" className="checkbox" id="toggleButton"  />
                          <div className="knobs" />
                          <div className="layer" />
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody></table>
            <div className="mysubmit">
              <input className="btn-submit" type="submit" value="Hủy" onClick={comfirmCancel} />
              <input className="btn-submit btn-submit-change" type="submit" value="Thay đổi" onClick={confirmExchange} />
            </div>
          </form>
        </div>
        </Box>
        
  )

}
  var mayin_1 = new Proxy({
    id: "",
    name: "",
    location: "",
    option: "on",
    storedStatus: "ON"
}, {
    set: function(target, property, value) {
        if (property !== 'option') {
            target[property] = value;
        }
        updateDisplay();
        saveState();
        return true;
    }
});

// Lưu trạng thái ban đầu
var originalState = JSON.stringify(mayin_1);

// Hàm để lưu trạng thái vào Local Storage
function saveState() {
    localStorage.setItem('mayin_1', JSON.stringify(mayin_1));
}

// Hàm để khôi phục trạng thái từ Local Storage
function restoreState() {
    var savedState = localStorage.getItem('mayin_1');
    if (savedState) {
        mayin_1 = JSON.parse(savedState);
        updateDisplay();
    }
}

function confirmExchange() {
    var confirmed = confirm("Bạn có chắc chắn muốn thay đổi?");
    if (confirmed) {
        var propertyKey = Object.keys(mayin_1);
        for (var i = 0; i < propertyKey.length - 2; i++) {
            var key = propertyKey[i];
            if (document.myForm[key].value !== "")
                {mayin_1[key] = document.myForm[key].value;}
        }
        mayin_1.storedStatus = localStorage.getItem('toggleStatus');
        
        updateDisplay();
        saveState();
        alert("Thay đổi đã được thực hiện!");
        
    } else {
        alert("Thay đổi không được thực hiện.");
        // Khôi phục trạng thái ban đầu nếu người dùng nhấn "Hủy"
        mayin_1 = JSON.parse(originalState);
        updateDisplay();
    }
}

function updateDisplay() {
    var id_may_in = document.getElementById("id-may-in");
    var ten_may_in = document.getElementById("ten-may-in");
    var vi_tri_may_in = document.getElementById("vi-tri-may-in");
    var toggleButton = document.getElementById('toggleButton');

    var button1Elements = document.querySelectorAll('#button-1 .knobs,  #button-1 .layer ');
  // Tắt hiệu ứng chuyển đổi cho các phần tử liên quan đến #button-1
    button1Elements.forEach(function(element) {
    element.style.transition = '0s ease all';
    })
    

    if (mayin_1.storedStatus === 'OFF') {
    toggleButton.checked = true;
    }

    toggleButton.addEventListener('change', function() {
    if (toggleButton.checked) {
        localStorage.setItem('toggleStatus', 'OFF');
    } else {
        localStorage.setItem('toggleStatus', 'ON');
    }
    });

    id_may_in.textContent = "ID: " + mayin_1.id;
    ten_may_in.textContent = "Tên: " + mayin_1.name;
    vi_tri_may_in.textContent = "Vị trí: " + mayin_1.location;
}

// Gọi hàm restoreState() để khôi phục trạng thái đã lưu khi trang được tải
window.onload = function () {
    restoreState();
};

function comfirmCancel() {
    // Thực hiện hành động hủy ở đây
    alert("Hủy đã được thực hiện!");
}
function closeMain() {
    var mainElement = document.querySelector('.body-main');
    if (mainElement) {
        mainElement.style.display = 'none';
    }
}
export default PageExample