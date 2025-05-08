fetch('https://localhost:7063/api/MenuMyResto')
.then(res => res.json())
.then(data => {
    document.getElementById('data').innerText = JSON.stringify(data, null, 2);
})
.catch(err => {
    document.getElementById('data').innerText = 'Gagal fetch API: ' + err;
});