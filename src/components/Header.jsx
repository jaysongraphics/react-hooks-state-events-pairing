import Comments from "./Comments"
import { useState } from "react"

function Header({title, views, created, upvote, downvotes, comments}){
    // console.log(title)
    const [like, setLike] = useState(upvote)
    const [dislike, setDislike] = useState(downvotes)
    const [hideComments, setHideComments] = useState(true)
    const [showComments, setshowComments] = useState(true)

            function likeButton (){
                setLike(like => like + 1)
                // console.log('I was liked!')
            }

            function dislikeButton (){
                setDislike(dislike => dislike +1)
                // console.log('I was dislike!')
            }

            function hideCommentsButton(e){
                setHideComments(!hideComments)
                setshowComments(!showComments)
                e.target.textContent = showComments ? "Show Comments" : "Hide comments"
                // console.log('I was hide!')
            }

    return(
        <div> 
            <h1>{title}</h1>
            <h5>{views} views | Uploaded {created}</h5> 
                <button onClick={likeButton}>{like}👍</button>
                <button onClick={dislikeButton}>{dislike}👎 </button>

            <div>
               <button onClick={hideCommentsButton}>Hide Comments
               </button>  
                <hr width="90%" color="blue" />
                {hideComments ? <Comments comments= {comments} /> : null} 
            </div>
        </div>
    )
}




export default Header;