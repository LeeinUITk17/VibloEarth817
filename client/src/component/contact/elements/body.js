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
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ratione! Laboriosam est, assumenda. Perferendis, quo alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore, esse natus!</p>
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