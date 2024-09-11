async function getDataPembibing(search) {
  const response = await fetch(
    `https://simak-ti.htp.my.id/pembimbing?search=${search ? search : ""}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  );
  const pembimbing = await response.json();
  return pembimbing.data;
}

const displaykeun = document.getElementById("displaykeun");

async function main() {
  try {
    const datanya = await getDataPembibing();
    datanya.map((data) => {
      const col = document.createElement("div");
      col.className = "col-6";
      col.innerHTML = `
      <div class="card shadow">
        <div class="card-body">
         <h6>${data.nama}</h6>
         <p>${data.nidn}</p>
        </div>
      </div>
      `;
      displaykeun.appendChild(col);
    });
  } catch (error) {
    document.body.innerHTML = `<h1>Error : ${error.message} </h1>`;
  }
}

main();

// codingan baruu untuk search
const input = document.getElementById("search");
input.addEventListener("input", async () => {
  displaykeun.innerHTML = "";
  const value = input.value;
  const pembimbing = await getDataPembibing(value);
  pembimbing.map((data) => {
    const col = document.createElement("div");
    col.className = "col-6";
    col.innerHTML = `
      <div class="card shadow">
        <div class="card-body">
         <h6>${data.nama}</h6>
         <p>${data.nidn}</p>
        </div>
      </div>
      `;
    displaykeun.appendChild(col);
  });
});
