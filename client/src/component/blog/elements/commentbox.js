const CommentBox=()=>{
    return (
        <div className="comment-template">
        <h4>Leave a comment</h4>
        <p>If you have a comment dont feel hesitate to send us your opinion.</p>
        <form action="index.html">
            <p><textarea name="comment" id="comment" cols="30" rows="10" placeholder="Your Message"></textarea></p>
            <p><input type="submit" value="Submit" /></p>
        </form>
    </div>
    )
}
export default CommentBox;