fetchData();
async function fetchData() {
    try {
        const response = await fetch("https://api.ieiplc.com.ng/api/insurance/AllowedMotorCycleMakes");

        if (!response.ok) {
            throw new Error('Could not fetch resource')
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}