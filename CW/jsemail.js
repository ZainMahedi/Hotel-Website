function sendMail() {
    var params = {
        name: document.getElementById("Name").value,
        email: document.getElementById("Email").value,
        subject: document.getElementById("Subject").value,
        body: document.getElementById("Message").value,
    };

    const serviceID = "service_0bwh1nn";
    const templateID = "template_hp8ol6b";

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                console.log(res);
                document.getElementById("Name").value = "";
                document.getElementById("Email").value = "";
                document.getElementById("Subject").value = "";
                document.getElementById("Message").value = "";
                alert("Your message has been sent successfully!")
            }
        )
        .catch((err) => console.log(err));
}