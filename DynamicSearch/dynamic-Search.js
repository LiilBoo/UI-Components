const searchInput = document.querySelector('#search');

const searchResult = document.querySelector('.table-results');

let dataArray;

function orderedList(data) {

    const orderedData = data.sort((a,b) => {
        if(a.name.last.toLowerCase() < b.name.last.toLowerCase()){
            return -1
        } 
        if(a.name.last.toLowerCase() > b.name.last.toLowerCase()){
            return 1
        } 
        return 0;
    })

    return orderedData;
    
};

function createUserList(userList) {

    userList.forEach(user => {
        
        const listItem = document.createElement("div");
        listItem.classList.add("table-item");

        listItem.innerHTML = `<div class="container-img">
        <img src=${user.picture.medium} alt="">
           <p class="name">${user.name.last} ${user.name.first}</p>
       </div>
       <p class="email">${user.email}</p>
       <p class="phone">${user.phone}</p>`;

       searchResult.appendChild(listItem);
    })

    
};

async function getNinjas() {

    // const res = await fetch("https://randomuser.me/api/?nat=fr&results=50")
    //!Bad practice, it's CPU intense to call unused parameters
    
    const res = await fetch("https://randomuser.me/api/?inc=name,email,phone,picture&nat=fr&results=50");

    const { results } = await res.json();

    dataArray = orderedList(results);

    createUserList(dataArray)

};

window.addEventListener('load', getNinjas(), {once : true});

/**Filtering results */

function filterData(e) {

    searchResult.innerHTML = "";

    const searchString = e.target.value.toLowerCase().replace(/\s/g, "");
    
    const filteredArray = dataArray.filter(element => 
    element.name.first.toLowerCase().includes(searchString) || 
    element.name.last.toLowerCase().includes(searchString) ||
    `${element.name.last + element.name.first}`.toLowerCase().replace(/\s/g, "").includes(searchString) ||
    `${element.name.first + element.name.last}`.toLowerCase().replace(/\s/g, "").includes(searchString)
    );

    createUserList(filteredArray)


};

searchInput.addEventListener("input", filterData);