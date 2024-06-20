import Infor from "./inf";
import Form from "./form";
const Formcontact=()=>{
    return (
      <>
        <div className="contact-from-section mt-150 mb-150">
		<div className="container">
			<div className="row">
				<div className="col-lg-8 mb-5 mb-lg-0">
					<div className="form-title">
						<h2>Have you any question?</h2>
						<p>Send an email to me and I will reply to you soon</p>
					</div>
				 	<div id="form_status"></div>
					{/* form */}
                    <Form/>
				</div>
				{/* inf */}
                <Infor/>
                </div>
		</div>
	</div>
      </>
    )
}
export default Formcontact;