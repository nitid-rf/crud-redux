import React, { Component } from 'react';
//import connection component -> redux-store
import {connect} from 'react-redux';

class CommentForm extends Component {
    handleSubmit = (event) =>{
        event.preventDefault(); // ไม่เปลี่ยนหน้า ไม่มีการรีเฟรซหน้าจอ
        
        // ดึงค่าจากตัวแปร getName ใน textbox (ref={(input)=>this.getName = input})
        const name = this.getName.value;
        // ดึงค่าจากตัวแปร getMessage ใน textbox (ref={(input)=>this.getMessage = input})
        const message = this.getMessage.value;

        // ref เป็นการผูกDataกับUI
        // (ref={(input)=>this.getName = input})
        // (ref={(input)=>this.getMessage = input})
        // getName กับ form input -- getMessage กับ textarea

        // create Object Data สำหรับรวบรวมข้อมูลที่เก็บ
        const data = {
            id: new Date(),
            name,
            message
        }

        // นำข้อมูลที่ได้จากด้านบน (data) ไปเก็บใน state 
        // โดยนำไปทำกระบวนการ dispatch คือ 
        // ทำการตรวจเช็คเหตุการณ์/action ที่เกิดขึ้น
        // this.props.dispatch เป็นคำสั่งในการเปลี่ยนแปลงช้อมูล
        // โดยนำ data ไปทำใน State และนำ Action เช็คว่าอยู่รูปแบบไหน
        // ผ่านการทำ Reducer ใน Store (CommentReducer.js)
        this.props.dispatch({
            type: 'ADD_COMMENT',
            data
        });

        // เมื่อกดปุ่ม Comment เข้า handleSubmit Function จะทำไล่จากบน-ล่าง
        this.getName.value = ""; // เมื่อทำเสร็จสิ้นจะเคลียร์ข้อมูลใน form input Name
        this.getMessage.value = ""; // เมื่อทำเสร็จสิ้นจะเคลียร์ข้อมูล Message ใน textarea
    
        // console.log(data); 
        // แสดงข้อมูลจาก Object Data
    }
    

    render(){
        return(
            <div>
                <h1>Add Comment</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" placeholder="input name" ref={(input)=>this.getName = input}/><br /><br />
                    <textarea required rows="5" cols="28" placeholder="input message" ref={(input)=>this.getMessage = input}/><br /><br />
                    <button>Comment</button>
                </form>
            </div>
        );
    }
}

// before export
// export default CommentForm;

// export connect redux-store
export default connect()(CommentForm);
