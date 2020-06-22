import React, { Component } from 'react';

//import connection component -> redux-store
import {connect} from 'react-redux';
import Comment from './Comment';

class ShowComment extends Component {
    render(){
        return(
            <div>
                <h1>Show All Comment</h1>
                {this.props.comments.map((comment) =>
                <Comment key={comment.id}
                comment={comment} /> )}
            </div>
        );
    }
}

// Object ChangeState-->Props
// ค่า State จาก commentReducer (CommentReducer.js) ไปเก็บใน comment
const mapStateToProps = (state) => {
    return {
        comments: state
        //props comments ไปใช้งานได้
    }
}

// before export
//export default ShowComment;

//connect react-redux
export default connect(mapStateToProps)(ShowComment);