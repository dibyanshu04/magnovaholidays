function sendContactForm() {
  const senderName = document.querySelector("#name").value;
  const senderEmail = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  const successMsg = document.getElementById("success-message");
  var body = `
  <div style="border: solid 1px; border-color: black;background-color: rgba(37, 106, 235, 0.479);  color: white">
    <h1 style="text-align: center; font-size:4rem; ;">🥳Congratulations</h1>
    <p style="text-align: center; color: grey"> 🎉You Just received a new Inquiry.🎊</p>
    <div style="margin: 25px 10%; padding: 25px 10%;  line-height: 2rem; background-color: rgba(0, 81, 255, 0.185);">
        <p><span style="margin: 0 50px 0 0;">Name : </span><span style="font-size: 1.05rem; color: rgb(80, 80, 80);font-weight: 600;">${senderName}</span></p>
        <p><span style="margin: 0 49px 0 0;">Email : </span><span style="font-size: 1.05rem; color: rgb(80, 80, 80);font-weight: 600;"><a style="color: rgb(80, 80, 80);font-weight: 600;" href="mailto:${senderEmail}">${senderEmail}</a></span></p>
        <p><span style="margin: 0 49px 0 0;">Phone : </span><span style="font-size: 1.05rem; color: rgb(80, 80, 80);font-weight: 600;">+91 ${phone}</span></p>
        <p><span style="margin: 0 39px 0 0;">Message : </span><span style="font-size: 1.05rem; color: rgb(80, 80, 80);font-weight: 600;">${message}</span></p>
    </div>
 </div>`;
  console.log(body);
  Email.send({
    Host: "smtp.gmail.com",
    Username: "magnovaholidays@gmail.com",
    Password: "xpozvwokfzjtgijg",
    To: "chandra.p@magnovatech.com",
    From: senderEmail,
    Subject: subject,
    Body: body,
  }).then((message) => (successMsg.innerHTML = "Mail Successfully Sent To US"));
}
