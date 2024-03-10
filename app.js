async function getPredictedAge() {
    const name = document.getElementById('name').value.trim()
    console.log(name)
    const country = document.getElementById('country').value.trim().toUpperCase()
    console.log(country)

    let apiUrl = `https://api.agify.io?name=${name}`

    if (country) {
        apiUrl += `&country_id=${country}`;
    }

    try {
        const response = await fetch(apiUrl)
        if (!response.ok) {
            throw new Error('Network error')
        }
        const data = await response.json()
        console.log(data)
        const resultDiv = document.getElementById('result')
        if (data.age) {
            resultDiv.innerText = `Predicted Age for ${data.name}${country ? ` from ${country}` :''}: ${data.age}`;
        } else {
            resultDiv.innerText = 'Age not available.'
        }
    } catch (error) {
        console.error('Error fetching the age data:', error)
        resultDiv.innerText = 'Failed to retrieve age prediction.'
    }
}