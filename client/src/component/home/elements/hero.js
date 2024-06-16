const Hero = () => {
  return (
    <div className="hero-area hero-bg">
    <div className="container">
        <div className="row">
            <div className="col-lg-9 offset-lg-2 text-center">
                <div className="hero-text">
                    <div className="hero-text-tablecell">
                        <p className="subtitle">Viblo Earth.817</p>
                        <h1>Welcome home!</h1>
                        <div className="hero-btns">
                            <a href="/news" className="boxed-btn">News</a>
                            <a href="/contact" className="bordered-btn">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
export default Hero;