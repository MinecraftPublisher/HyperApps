// Hot reload the application if there are any new updates.

function Toast(text, duration = 2) {
    Toastify({
        text: text,
        duration: duration * 1000,
        stopOnFocus: true,
        gravity: 'bottom',
        position: 'left'
    }).showToast()
}

function reloadStylesheets() {
    let banner = document.createElement('div')
    banner.style = 'position: fixed; width: 100vw; height: 100vh; background-color: #333; z-index: 5000;'
    document.body.appendChild(banner)
    var queryString = '?reload=' + new Date().getTime();
    document.querySelectorAll('link[rel="stylesheet"]').forEach(function (thiss) {
        thiss.href = thiss.href.replace(/\?.*|$/, queryString);
    });
    document.body.removeChild(banner)
}

let hot_reload = setInterval(function () {
    fetch(window.location.href).then((response) => {
        response.text().then((data) => {
            let dataBody = data.substring(data.indexOf('<body>') + 6, data.indexOf('</body>'))
            let innerBody = document.body.innerHTML.substring(1, document.body.innerHTML.length - 1)
            console.log(innerBody + "E\n\n\nE" + dataBody.substring(1, dataBody.length - 1))
            if(innerBody !== dataBody) {
                document.body.innerHTML = dataBody
            }
        })
    })
}, 100)
Toast("Hot reload enabled.")