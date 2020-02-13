const populationAPI = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population'

function getData() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            const data = response.data
            data.forEach((nation) => {
                return document.getElementsByTagName('body').innerHTML = `
                <h1>In the ${nation.Nation}, in the year ${nation.year}, the population was ${nation.Population}.</h2>
                
                `
            });

        }
    };
    xhr.open('GET', populationAPI);
    xhr.send();
}
getData();
