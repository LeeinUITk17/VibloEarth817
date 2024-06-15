export const Preloader=()=>{
    return (
        <div className="loader">
        <div className="loader-inner">
            <div className="circle"></div>
        </div>
    </div>
    )
}

export const Footer=()=>{
    return (
        <div className="footer-area">
		<div className="container">
			<div className="row">
				<div className="col-lg-3 col-md-6">
					<div className="footer-box about-widget">
						<h2 className="widget-title">About us</h2>
						<p>Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="footer-box get-in-touch">
						<h2 className="widget-title">Get in Touch</h2>
						<ul>
							<li>34/8, East Hukupara, Gifirtok, Sadan.</li>
							<li>support@fruitkha.com</li>
							<li>+00 111 222 3333</li>
						</ul>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="footer-box pages">
						<h2 className="widget-title">Pages</h2>
						<ul>
							<li><a href="/home">Home</a></li>
							<li><a href="/news">News</a></li>
							<li><a href="/contact">Contact</a></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="footer-box subscribe">
						<h2 className="widget-title">Subscribe</h2>
						<p>Subscribe to our mailing list to get the latest updates.</p>
						<form action="index.html">
							<input type="email" placeholder="Email" />
							<button type="submit"><i className="fas fa-paper-plane"></i></button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}

export const Copyright=()=>{
    return (
        <div className="copyright">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-md-12">
					<p>Viblo Earth 817 - <a href="https://imransdesign.com/">Le Thanh Tai</a>See ya!.</p>
				</div>
				<div className="col-lg-6 text-right col-md-12">
					<div className="social-icons">
						<ul>
							<li><a href="https://www.facebook.com/sat.ngu.5/" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
							<li><a href="https://www.instagram.com/lee_in_earth817" target="_blank"><i className="fab fa-instagram"></i></a></li>
							<li><a href="https://www.linkedin.com/in/le-thanh-tai-0aa321254/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}

export const Banner=()=>{
    return (
        <section className="shop-banner">
    	<div className="container">
        	<h3>December sale is on! <br /> with big <span className="orange-text">Discount...</span></h3>
            <div className="sale-percent"><span>Sale! <br />  Upto</span>50% <span>off</span></div>
            <a href="shop.html" className="cart-btn btn-lg">Shop Now</a>
        </div>
    </section>
    )
}

export const Banner2=()=>{
    return (
        <div className="abt-section mb-150">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-md-12">
					<div className="abt-bg">
						<a href="https://www.youtube.com/watch?v=W7v5-FekXbo" className="video-play-btn popup-youtube"><i className="fas fa-play"></i></a>
					</div>
				</div>
				<div className="col-lg-6 col-md-12">
					<div className="abt-text">
						<p className="top-sub">Since Year 1999</p>
						<h2>We are <span className="orange-text">Fruitkha</span></h2>
						<p>Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.</p>
						<a href="/news" className="boxed-btn mt-4">know more</a>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}

export const FeatureList=()=>{
    return (
        <div className="list-section pt-80 pb-80">
		<div className="container">

			<div className="row">
				<div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
					<div className="list-box d-flex align-items-center">
						<div className="list-icon">
							<i className="fas fa-shipping-fast"></i>
						</div>
						<div className="content">
							<h3>Free Shipping</h3>
							<p>When order over $75</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
					<div className="list-box d-flex align-items-center">
						<div className="list-icon">
							<i className="fas fa-phone-volume"></i>
						</div>
						<div className="content">
							<h3>24/7 Support</h3>
							<p>Get support all day</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="list-box d-flex justify-content-start align-items-center">
						<div className="list-icon">
							<i className="fas fa-sync"></i>
						</div>
						<div className="content">
							<h3>Refund</h3>
							<p>Get refund within 3 days!</p>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
    )
}

export const SearchArea=()=>{
    return(
		<div className="search-area">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<span className="close-btn"><i className="fas fa-window-close"></i></span>
					<div className="search-bar">
						<div className="search-bar-tablecell">
							<h3>Search For:</h3>
							<input type="text" placeholder="Keywords"></input>
							<button type="submit">Search <i className="fas fa-search"></i></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	)
}