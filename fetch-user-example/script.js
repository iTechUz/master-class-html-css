let url = 'users.json'

function getUsers(url) {
    let promise = new Promise(function(resolve, reject){
        try {
            fetch(url).then(function(data){
                if(data.status==200){
                        resolve(data.json())
                } else {
                    reject('Xatolik yuz berdi')
                }
            })
        } catch (error) {
            console.log(error)
        }
    })
    return promise
}



function renderUsers() {
    let user = getUsers(url)
    let htmlContent = '';

    user.then(
        function(result){
            result.forEach(user => {
                let htmlSegment = `<div class="user">
                                    <img src="${user.profileURL}" >
                                    <h2>${user.firstName} ${user.lastName}</h2>
                                    <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                                </div>`;
        
                htmlContent += htmlSegment;
            console.log(result)
            }
        )
        let container = document.querySelector('.container');
        container.innerHTML = htmlContent;
    },
        function(error){
            console.log('Error----')
        }
    )
    }

renderUsers();
