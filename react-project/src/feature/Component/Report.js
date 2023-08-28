import React, { useState } from "react";
import Popup from "../SubComponent/Popup";
import CheckBoxCircle from "../SubComponent/CheckBoxCircle";
import Input from "../SubComponent/Input";
import UploadFile from "../SubComponent/UploadFile";
import Button from "../SubComponent/Button";
import Text from "../SubComponent/Text";
import styled from "styled-components";

const Report = ({ isOpen,className }) => {
  const [popupOpen, setPopupOpen] = useState(isOpen);

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  const handleReportSubmit = () => {
    togglePopup(); // ปิด Popup เมื่อกดปุ่มส่งรายงาน
  };

  return (
    <div className={className}>
    <div className="report-popup">
      {popupOpen && (
        <Popup
          handleClose={togglePopup}
          content={
            <div className="details">
              <div className="details-box">
                <div className="name-report">
                  <Text size={40} family={"Anuphan"} weight="500">
                    แจ้งปัญหาที่พบ
                  </Text>
                </div>

                <div className="check-box">
                  <div className="text-name">
                    <Text size={20} family={"Anuphan"} weight="600">
                      หนังสือเล่มนี้มีปัญหาอะไร{" "}
                      <span className="red-asterisk">*</span>
                    </Text>
                  </div>
                  <CheckBoxCircle value={"มีปัญหาไม่สามารถอ่านได้"} />
                  <CheckBoxCircle value={"มีเนื้อหาไม่เหมาะสม"} />
                  <CheckBoxCircle value={"มีปัญหาเรื่องการละเมิดสิทธิ์"} />
                  <CheckBoxCircle value={"อื่นๆ"} />
                </div>
              </div>

              <div className="input-details">
                <div className="details-box">
                  <div className="text-name">
                    <Text size={20} family={"Anuphan"} weight="600">
                      รายละเอียด (บอกด้วยว่า หน้าไหน บทไหน){" "}
                      <span className="red-asterisk">*</span>
                    </Text>
                  </div>

                  <Input
                    type="text"
                    placeholder="กรอกรายละเอียดปัญหาตรงนี้เลยจ้า"
                    value={inputValue}
                    onChange={handleInputChange}
                    size={"560px"}
                  />
                </div>
                <div className="details-box">
                  <div className="text-name">
                    <Text size={20} family={"Anuphan"} weight="600">
                      แนปรูปภาพ เพื่อให้เราเข้าใจปัญหาได้มากขึ้น{" "}
                      <span className="red-asterisk">*</span>
                    </Text>
                  </div>

                  <UploadFile />
                </div>
                <div className="details-box">
                  <div className="text-name">
                    <Text size={20} family={"Anuphan"} weight="600">
                      เบอร์โทรของคุณ สำหรับสอบถามเพิ่มเติม{" "}
                      <span className="red-asterisk">*</span>
                    </Text>
                  </div>
                  <Input
                    type="text"
                    placeholder="กรอกเบอร์โทรตรงนี้เลยจ้า"
                    value={inputValue1}
                    onChange={handleInputChange1}
                    size={"560px"}
                  />
                </div>
              </div>

              <div className="button-center">
                <Button
                  value={"ส่งรายงาน"}
                  functionBtn={handleReportSubmit}
                  handleClose={togglePopup}
                />
              </div>
            </div>
          }
        />
      )}
    </div>
    </div>
  );
};

export default styled(Report)`
.popup-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .box {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    width: 600px;
    max-height: 90%; /* กำหนดสูงสุดของ Popup */
    overflow: auto;
    position: relative;
  }
  
  .icon-buttonPopup {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  
  .popup-content {
    margin-top: 20px;
  }
  
  .button-center {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .button-center .ButtonNormal {
    appearance: none;
    background-color: transparent;
    border-radius: 30px;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: flex;
    font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 15px;
    font-family: 'Anuphan';
    font-weight: 600;
    line-height: normal;
    margin: 0;
    min-height: 40px;
    min-width: 120px;
    outline: none;
    padding: 1em 2.3em;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    will-change: transform;
    align-items: center;
   }
   
   .button-center .ButtonNormal:disabled {
    pointer-events: none;
   }
   
   .button-center .ButtonNormal:hover {
    color: #fff;
    background-color: #3ff213;
    border-color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
   }
   
   .button-center .ButtonNormal:active {
    box-shadow: none;
    transform: translateY(0);
   }
  .name-report{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .name-report p{
    margin-bottom: 20px;
    margin-top: 0px;
    text-decoration: underline;
  }
  .red-asterisk {
    color: red;
  }
  .border{
    height: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;
    border-color: white;
    margin-bottom: 10px;
  }
  .container{
    font-family: 'Anuphan';
    font-size: 15px;
    font-weight: 500;
  }
  .checkmark {
    width: 20px;
    height: 20px;
  }
  .details-box{
    margin-bottom: 40px;
  }
  .input-details .input-component{
    padding: 8px;
  }
`;

/*
Kanokwan Mahakham
วิธีกรใช้
<Report isOpen={true} />
*/
