const ENDPOINT = 'https://648f688075a96b6644451aa8.mockapi.io/';
const axiosInstance = axios.create({
    baseURL: ENDPOINT,
    timeout: 10000,
  });
const LIMIT = 4;




// validation---------


(() => {
    const forms = document.querySelectorAll(".needs-validation");
  
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
  
          form.classList.add("was-validated");
        },
        false
      );
    });
  })();
  


  // loader--------------------

const loaderEl = document.querySelector(".loader");

const loaderToggle = (info) => {
  if (info) {
    loaderEl.classList.remove("hidden");
  } else {
    loaderEl.classList.add("hidden");
  }
};
