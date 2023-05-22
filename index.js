var myarray =[ 
    {
        "id": 1,
        "title": "Two sum",
        "difficulty": "Easy",
        "acceptance": '56%',
        "status": "AC"
    },
    {
        "id": 2,
        "title": "Three Sum",
        "difficulty": "Medium",
        "acceptance": '23%',
        "status": "AC"
    },
    {
        "id": 3,
        "title": "Binary Search",
        "difficulty": "Easy",
        "acceptance": '89%',
        "status": "AC",
    },
    {
        "id": 4,
        "title": "Swap two nodes in tree",
        "difficulty": "Easy",
        "acceptance": '78%',
        "status": "WA"
    },
    {
        "id": 5,
        "title": "Find Peak of a sorted list",
        "difficulty": "Medium",
        "acceptance": '45%',
        "status": "AC"
    },
    {
        "id": 6,
        "title": "DFS",
        "difficulty": "Medium",
        "acceptance": '53%',
        "status": "AC",
    }
]


function buildTable(data) {
    let table = document.getElementById('mytable');

    for (let i = 0; i < data.length; i++) {

        let row = `<tr>
                                        <td>${data[i].status}</td>
                                        <td>${data[i].title}</td>
                                        <td>${data[i].status}</td>
                                        <td>${data[i].acceptance}</td>
                                        <td>${data[i].difficulty}</td>
                                    </tr>`
        table.innerHTML += row;
    }
}