// arrow fns
const buildList = (data) => {
    const list = document.getElementById('list');

    for (const item of data) {
        const div = document.createElement('div');
        div.className = 'item';

        const h2 = document.createElement('h2')
        h2.innerText = item.name;

        const p = document.createElement('p')
        p.innerText = item.comment; 
        
        div.appendChild(h2);
        div.appendChild(p);

        list.appendChild(div);
    }

    return;
}

// clears the existing list
const clearList = () => {
    const list = document.getElementById('list');
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    return;
}

const doSearch = () => {

    const searchTerm = document.getElementById('sVar').value;
    fetch(`http://localhost:8080/?q=${searchTerm}`)
        .then(res => res.json())
        .then(data => {
            buildList(data);
        })
        .catch(e => {
            console.error(e)
        });
}

// search
const searchInput = document.getElementById('sVar');
searchInput.addEventListener('keyup', () => {
    clearList();
    doSearch();
})

window.onload = () => {
    doSearch();
}
