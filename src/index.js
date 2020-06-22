import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import redux-store
import { createStore } from 'redux';

// import redux-reducer
import commentReducer from './CommentReducer';

// import provider
import { Provider } from 'react-redux';

// create Store(คลังข้อมูล)
// const store = createStore(); 

// นำ Reducer ใส่ใน Store 
const store = createStore(commentReducer); 

// render App Non-Provider
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );


// render App with Provider
//Provider เป็น Component ที่ครอบ Application ทั้งหมด
//ทำให้ App หรือ Component ทุกตัวรู้จักกัน ทำให้ใช้งาน Store ได้ทั้งหมด
//โดยระบุ store ที่เข้าถึงได้ -> store={store}
//มีเงื่อนไข ถ้าหากต้องการดึงข้อมูลต้องเรียกใช้งานแบบ props
ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);