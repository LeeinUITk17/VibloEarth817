const CommentList=()=>{
    return (
        <div className="comments-list-wrap">
        <h3 className="comment-count-title">3 Comments</h3>
        <div className="comment-list">
            <div className="single-comment-body">
                <div className="comment-user-avater">
                    <img src="assets/img/avaters/avatar1.png" alt=""></img>
                </div>
                <div className="comment-text-body">
                    <h4>Jenny Joe <span className="comment-date">Aprl 26, 2020</span> <a href="#">reply</a></h4>
                    <p>Nunc risus ex, tempus quis purus ac, tempor consequat ex. Vivamus sem magna, maximus at est id, maximus aliquet nunc. Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus.</p>
                </div>
                <div className="single-comment-body child">
                    <div className="comment-user-avater">
                        <img src="assets/img/avaters/avatar3.png" alt=""></img>
                    </div>
                    <div className="comment-text-body">
                        <h4>Simon Soe <span className="comment-date">Aprl 27, 2020</span> <a href="#">reply</a></h4>
                        <p>Nunc risus ex, tempus quis purus ac, tempor consequat ex. Vivamus sem magna, maximus at est id, maximus aliquet nunc. Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus.</p>
                    </div>
                </div>
            </div>
            <div className="single-comment-body">
                <div className="comment-user-avater">
                    <img src="assets/img/avaters/avatar2.png" alt=""></img>
                </div>
                <div className="comment-text-body">
                    <h4>Addy Aoe <span className="comment-date">May 12, 2020</span> <a href="#">reply</a></h4>
                    <p>Nunc risus ex, tempus quis purus ac, tempor consequat ex. Vivamus sem magna, maximus at est id, maximus aliquet nunc. Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus.</p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default CommentList;