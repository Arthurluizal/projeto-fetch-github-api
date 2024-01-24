document.getElementById('btn-search').addEventListener('click', () =>{
    const userName = document.getElementById('input-search').value
    getUserProfile(userName)
})

async function user(userName) {
    const response = await fetch(`https://api.github.com/users/${userName}`)
    return await response.json()

}

function getUserProfile(userName){
    user(userName).then(userData =>{
        let userInfo = `<img src="${userData.avatar_url}" alt="Foto do perdil do usuario" />
                        <div class="data".>
                            <h1>${userData.name ?? 'nao possui o nome cadastrado' }</h1>
                            <p>${userData.bio ?? 'nao possui bio cadastrada'}</p>   
                        </div>`
        document.querySelector('.profile-data').innerHTML = userInfo

    })
}