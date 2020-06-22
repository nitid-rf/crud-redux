// สร้าง Object CommentReducer ประกอบด้วย State รูปแบบ Array , Action
// state เป็นที่เก็บข้อมูล รูปแบบ bucket(array)
const commentReducer = (state = [], action) =>{
    // เขียนรูปแบบ Action
    switch(action.type){
        case 'ADD_COMMENT':
        // โยนข้อความ(data) ให้ State ทำการต่อข้อความ(concat) => push ข้อความ
        return state.concat([action.data]); // state = [] เป็น => [data]
        
        case 'DELETE_COMMENT':
        return state.filter((comment)=>comment.id !== action.id);

        default:
        return state;
    }

}
export default commentReducer;








//reducer ช่วยจัดการข้อมูลจากคลังข้อมูล(Store) --> เก็บข้อมูล/ดึงข้อมูล
//reducer เป็น Event หนึ่ง 
// มีการ Set Case (เหตุการณ์) เช่น ถ้าหากมีการเปลี่ยนแปลงข้อมูลด้านใน
// หรือเปลี่ยนแปลงของ State  โดยให้มอง State เป็นตำแหน่งของการเก็บข้อมูล

//ภายใน Store มีหลายๆ State (มีคลังแล้วมีที่เก็บตำแหน่งเป็นช่องๆ)
// reducer จะ check ว่า Case ที่ส่งมาคืออะไร 
// โดยทำงานเกี่ยวกับตำแหน่งของข้อมูล --> ข้อมูลจะถูกเพิ่ม-ลบ-แก้ไข
// กระบวนการเพิ่ม-ลด-แก้ไข ข้อมูล เรียกว่า dispatch 
// การทำงานของกระบวนการ 
// --> dispatch แล้ว check case ที่ส่งมาว่าตรงกับ Case ใด
// Ex. diapatch รูปแบบเพิ่มข้อมูล - นำไปเพิ่มข้อมูล
//     diapatch รูปแบบลบข้อมูล - นำไปลบข้อมูล
//     diapatch รูปแบบแก้ไขข้อมูล - นำข้อมูลไปแก้ไข 
//     **แก้ไขเสร็จต้อง diapatch อีกทีว่าจะ Update ข้อมูลหรือไม่