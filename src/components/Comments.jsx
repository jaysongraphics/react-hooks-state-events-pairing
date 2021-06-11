

function Comments({comments}){
// console.log(comments)
const commentsArr = comments.map(commentObj => {
    return(
        <div>
            <h3>{commentObj.user}</h3>
            <p>{commentObj.comment}</p>
            </div>)
    })

return(
    <div>
        <h2>{comments.length} Comments</h2>
            {commentsArr}
    </div>
)
}



export default Comments;







// const commentsArr = comments.map(commentObj => 
//     <comments key={commentObj.id} 
//     user={commentObj.user} 
//     comment={commentObj.comment} />)
    
    