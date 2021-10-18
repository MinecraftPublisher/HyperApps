function validateApp(app) {
    return app[0].startsWith('name=') && app[1].startsWith('description=') && app[2].startsWith('text=') && app[3].startsWith('version=') && app[4].startsWith('auth=') && app[5].startsWith('api=') && app[6].startsWith('css=') && app[7].startsWith('type=') && app.length >= 9;
}

fetch('/apps/data/list.txt').then((response) => {
    response.text().then((data) => {
        data.split('\n').forEach((line) => {
            fetch('/apps/data/' + line + '.app').then((response2) => {
                response2.text().then((raw) => {
                    let app = raw.split('\n')
                    if(validateApp(app)) {
                    let contents = `
<div class="container" onclick="window.location.href = '/apps/loader/?name=${line}';">
    <div class="banner">
        <div class="title">${app[0].substring(5)}</div>
        <div class="description">${app[1].substring(12)}</div>
        <div class="text">${app[2].substring(5)}</div>
    </div>
</div>
`;
                    document.querySelector('apps').innerHTML += contents + "<br>";
                    }
                })
            }).catch((err) => {
                document.querySelector('apps').innerHTML = "<span style='color: red;'>ERROR: Unable to fetch an application from the index database, Double check your internet connection. If this problem continues, Please contact the support team.</span>";
            })
        })
    })
}).catch((err) => {
    document.querySelector('apps').innerHTML = "<span style='color: red;'>ERROR: Unable to fetch the app index database, Double check your internet connection. If this problem continues, Please contact the support team.</span>";
})