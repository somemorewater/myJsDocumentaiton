fetch("https://api.ieiplc.com.ng/api/insurance/AllowedMotorCycleMakes")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
  