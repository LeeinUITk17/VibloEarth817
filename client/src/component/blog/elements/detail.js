import CommentBox from './commentbox';
import CommentList from './commentlist';
const Detail=()=>{
    return (
        <div className="mt-150 mb-150">
		<div className="container">
			<div className="row">
				<div className="col-lg-8">
					<div className="single-article-section">
						<div className="single-article-text">
							<div className="single-artcile-bg"></div>
							<p className="blog-meta">
								<span className="author"><i className="fas fa-user"></i> Admin</span>
								<span className="date"><i className="fas fa-calendar"></i> 27 December, 2019</span>
							</p>
							<h2>Pomegranate can prevent heart disease</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta, similique quidem fuga vel voluptates amet doloremque corrupti. Perferendis totam voluptates eius error fuga cupiditate dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum perferendis, nobis hic adipisci vel inventore facilis rem illo, tenetur ipsa voluptate dolorem, cupiditate temporibus laudantium quidem recusandae expedita dicta cum eum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam!</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, praesentium, dicta. Dolorum inventore molestias velit possimus, dolore labore aliquam aperiam architecto quo reprehenderit excepturi ipsum ipsam accusantium nobis ducimus laudantium.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum est aperiam voluptatum id cupiditate quae corporis ex. Molestias modi mollitia neque magni voluptatum, omnis repudiandae aliquam quae veniam error! Eligendi distinctio, ab eius iure atque ducimus id deleniti, vel alias sint similique perspiciatis saepe necessitatibus non eveniet, quo nisi soluta.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt beatae nemo quaerat, doloribus obcaecati odio!</p>
						</div>

                        <CommentList/>

                        <CommentBox/>
                        
				</div>
			</div>
            <div className="col-lg-4">
					<div className="sidebar-section">
						<div className="recent-posts">
							<h4>Recent Posts</h4>
							<ul>
								<li><a href="single-news.html">You will vainly look for fruit on it in autumn.</a></li>
								<li><a href="single-news.html">A man's worth has its season, like tomato.</a></li>
								<li><a href="single-news.html">Good thoughts bear good fresh juicy fruit.</a></li>
								<li><a href="single-news.html">Fall in love with the fresh orange</a></li>
								<li><a href="single-news.html">Why the berries always look delecious</a></li>
							</ul>
						</div>
						<div className="archive-posts">
							<h4>Archive Posts</h4>
							<ul>
								<li><a href="single-news.html">JAN 2019 (5)</a></li>
								<li><a href="single-news.html">FEB 2019 (3)</a></li>
								<li><a href="single-news.html">MAY 2019 (4)</a></li>
								<li><a href="single-news.html">SEP 2019 (4)</a></li>
								<li><a href="single-news.html">DEC 2019 (3)</a></li>
							</ul>
						</div>
						<div className="tag-section">
							<h4>Tags</h4>
							<ul>
								<li><a href="single-news.html">Apple</a></li>
								<li><a href="single-news.html">Strawberry</a></li>
								<li><a href="single-news.html">BErry</a></li>
								<li><a href="single-news.html">Orange</a></li>
								<li><a href="single-news.html">Lemon</a></li>
								<li><a href="single-news.html">Banana</a></li>
							</ul>
						</div>
					</div>
				</div>
		</div>
	</div>
    </div>
    )
}

export default Detail;