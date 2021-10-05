const render = data => {
    document.getElementById('list')
        .innerHTML += `<li>${data}</li>`
}

export default render;