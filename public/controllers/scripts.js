document.addEventListener('DOMContentLoaded', () => {
    updatePosts()
})

const updatePosts = () => {

    fetch('http://localhost:3333/api/all').then(response => {
        return response.json()
    }).then(json => {
        let postsElement = ''

        let posts = JSON.parse(json)
        posts.forEach((post) => {
            let postElement = `
            <div id='${post.id}' class="card mb-4">
                <div class="card-header">
                    <h5 class="card-title">${post.title}</h5>
                </div>
                <div class="card-body">
                    <div class="card-text">
                        ${post.description}
                    </div>
                </div>
            </div>`

            postsElement += postElement
        });
        document.getElementById('posts').innerHTML = postsElement
    })
}

const newPost = () => {
    let title = document.getElementById('titel').value
    let description = document.getElementById('description').value

    console.log(title, description)
}