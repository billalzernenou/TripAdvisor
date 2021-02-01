const $ = document;
$.addEventListener("DOMContentLoaded", (event) => {
  //   event.defaultPrevented;
  $.querySelector("#contactez-nous").addEventListener("click", (event) => {
    event.defaultPrevented;
    $.querySelector(".contact-form").classList.add("display-form");
  });
  $.querySelector("#hide-form").addEventListener("click", (event) => {
    event.defaultPrevented;
    $.querySelector(".contact-form").classList.remove("display-form");
  });
  // send querie
  $.querySelector("#submit").addEventListener("click", async (event) => {
    event.preventDefault();

    const data = {
      firstName: $.querySelector("#first-name").value,
      lastName: $.querySelector("#last-name").value,
      email: $.querySelector("#email").value,
      subject: $.querySelector("#subject").value,
      message: $.querySelector("#message").value,
    };
    const response = await axios.post(
      "https://contact-form-back.herokuapp.com/form",
      data
    );
    console.log(response.data);

    if (response.status === 200) {
      alert("votre message a bien été envoyé");
    } else {
      alert("erreur");
    }
  });
});
