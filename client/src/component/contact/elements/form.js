const Form=()=>{
    return (
        <div className="contact-form">
        <form method="Post" id="fruitkha-contact" >
            <p>
                <input type="text" placeholder="Name" name="name" id="name" />
                <input type="email" placeholder="Email" name="email" id="email" />
            </p>
            <p>
                <input type="tel" placeholder="Phone" name="phone" id="phone" />
                <input type="text" placeholder="Subject" name="subject" id="subject" />
            </p>
            <p><textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea></p>
            <button type="submit" class="boxed-btn">Submit</button>
        </form>
    </div>
    );
}
export default Form;