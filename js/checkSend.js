
const checkAvailability = document.getElementById("checkAvailabilitybtn");
checkAvailability.addEventListener("click", () => {
  const hotelName = document.title;
  
    const senderName = document.querySelector("#name").value;
    const senderEmail = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
  const modeOfCommunication = document.getElementById("modeOfCommunication").value;
  const checkin = document.getElementById("checkin_date").value;
  
    const successMsg = document.getElementById("success-message");
    const subject = `Hotel Inquiry for ${hotelName}`;

    var body = `
    <div style="border: solid 1px; border-color: black;background-color: rgba(37, 106, 235, 0.479);  color: white">
      <h3 style="text-align: center; font-size:2.5rem; ;">🏠 ${hotelName}</h3>
      <h3 style="text-align: center; color: grey"> 🎉You Just received a new Inquiry.🎊</h3>
      <div style="margin: 25px 10%; padding: 25px 10%;  line-height: 2rem; background-color: rgba(0, 81, 255, 0.185);">
          <p><span style="margin: 0 50px 0 0;">Name : </span><span style="font-size: 1.05rem; color: rgb(80, 80, 80);font-weight: 600;">${senderName}</span></p>
          <p><span style="margin: 0 49px 0 0;">Email : </span><span style="font-size: 1.05rem; color: rgb(80, 80, 80);font-weight: 600;"><a style="color: rgb(80, 80, 80);font-weight: 600;" href="mailto:${senderEmail}">${senderEmail}</a></span></p>
          <p><span style="margin: 0 49px 0 0;">Phone : </span><span style="font-size: 1.05rem; color: rgb(80, 80, 80);font-weight: 600;">+91 ${phone}</span></p>

          <p><span style="margin: 0 25px 0 0;">Planning Date : </span><span style="font-size: 1.05rem; color: rgb(80, 80, 80);font-weight: 600;">${checkin}</span></p>
          
          <p><span style="margin: 0 45px 0 0;"> Mode Of Comm : </span><span style="font-size: 1.05rem; color: rgb(80, 80, 80);font-weight: 600;">${modeOfCommunication}</span></p>
          
      </div>
   </div>`;
    if (!senderName || !phone) {
      alert("Enter All Filed");
      return;
    } else {
      Email.send({
        Host: "smtp.gmail.com",
        Username: "magnovaholidays@gmail.com",
        Password: "xpozvwokfzjtgijg",
        To: "mukesh@magnovaholidays.com",
        From: senderEmail,
        Subject: subject,
        Body: body,
      }).then(function (message) {
        successMsg.innerHTML =
          "Your Inquiry is sent! Stay Calm We will be in touch with you with best rates and great service";
        alert("We Just Received Your Enquiry😍, we will contact you soon💌");
      });
    }
});
