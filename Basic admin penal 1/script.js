let tableArr = [];
let input = document.querySelector('input')
let tableBody = document.querySelector('tbody');
let info_wrapper = document.getElementById('info-wrapper')
let url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';


// filtertable functionality
function filterTable(e) {
    let searchKey = e.target.value;
    tableBody.innerHTML = '';
    if (searchKey.length > 0) {
        tableArr.filter((element) => {
            if (element.firstName.toLowerCase().includes(searchKey.toLowerCase()) || element.lastName.toLowerCase().includes(searchKey.toLowerCase())) {
                const tr = createTableRow(element);
                tableBody.append(tr);
            }
        })
    }
    else if (searchKey.length === 0) {
        tableBody.innerHTML = '';
        renderTableData(tableArr);
    }
}
input.addEventListener('keyup', filterTable)


// create table row
function createTableRow(tableData) {
    let tr = document.createElement('tr');
    tr.classList.add('data-row');
    tr.innerHTML = `<td class="column1">${tableData.id}</td>
                    <td class="column2">${tableData.firstName}</td>
                    <td class="column3">${tableData.lastName}</td>
                    <td class="column4">${tableData.email}</td>
                    <td class="column5">${tableData.phone}</td>`
    return tr;
}


// render the table 
function renderTableData(tableArr) {
    tableArr.map((element) => {
        const tr = createTableRow(element);
        tableBody.append(tr);
    })
}

// onclick for detailed info on right side
function onClickTableHandler(e) {
    info_wrapper.lastChild.innerHTML = '';

    let allRows = e.target.parentNode.parentNode.children             //getting all rows
    Array.from(allRows).map((tr) => tr.classList.remove('highlight'))   //htmlcollection to array to remove highlight

    tableArr.map((element) => {
        if (element.id === +e.target.parentNode.children[0].textContent) {
            e.target.parentNode.classList.add('highlight')            //add highlight
            let div = document.createElement('div');
            div.classList.add('info-content')
            div.innerHTML = `
                        <div><b>User selected:</b> ${element.firstName} ${element.lastName}</div>
                        <div>
                        <b>Description: </b>
                        <textarea cols="50" rows="5" readonly>
                           ${element.description}
                        </textarea>
                        </div>
                        <div><b>Address:</b> ${element.address.streetAddress}</div>
                        <div><b>City:</b>${element.address.city}</div>
                        <div><b>State:</b>${element.address.stacte}</div>
                        <div><b>Zip:</b>${element.address.zip}</div>`

            info_wrapper.append(div);
        }
    })
}
tableBody.addEventListener('click', onClickTableHandler);


// getting data from an api 
fetch(url)
    .then(response => response.json())
    .then((data) => {
        tableArr = data
        // console.log(tableArr)
        renderTableData(tableArr)
    })


