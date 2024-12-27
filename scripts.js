const http = new XMLHttpRequest()
http.open("GET", "https://jsonplaceholder.typicode.com/users")
http.send() 
http.onreadystatechange = () => { 
    console.log(http.readyState)
    if (http.readyState == 4 && http.status == 200) {
        console.log(http.response)

        const data = JSON.parse(http.responseText)
        console.log(data)
        rows = ``
        data.forEach(item => {
            rows += `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.username}</td>
                <td>${item.email}</td>
            </tr>`
        });
        tb1.innerHTML = rows

    }
}
