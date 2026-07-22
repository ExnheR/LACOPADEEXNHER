// =====================================
// LOAD MATCHES
// =====================================

fetch("static/data/matches.json")
    .then(response => response.json())
    .then(data => {

        console.log(data);

    });

    fetch("static/data/matches.json")

    console.log("JS cargado");

fetch("static/data/matches.json")
.then(res => {
    console.log("Status:", res.status);
    return res.json();
})
.then(data => {
    console.log("DATA:", data);
})
.catch(err => console.error("ERROR:", err));

console.log("JS cargado OK");

// ==========================
// INDEX (3 PARTIDOS)
// ==========================

fetch("static/data/matches.json")
.then(res => res.json())
.then(data => {

    console.log("DATA:", data);

    const container = document.getElementById("matches-container");

    if (!container) {
        console.error("No existe matches-container en index.html");
        return;
    }

    container.innerHTML = "";

    data.slice(0, 3).forEach(match => {

        container.innerHTML += `
        <div class="col-md-4 mb-3">
            <div class="card p-3 text-center">

                <h5>${match.team1} vs ${match.team2}</h5>
                <p>${match.date}</p>
                <p>${match.stadium}</p>

            </div>
        </div>
        `;
    });

})
.catch(err => console.error("ERROR FETCH:", err));