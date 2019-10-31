document.addEventListener('DOMContentLoaded', () => {
    updatePosts()
})

const updatePosts = () => {

    fetch('http://192.168.137.1:3333/api/all').then(response => {
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
    let title = document.getElementById('title').value
    let description = document.getElementById('description').value

    const post = { title, description }
    const options = {
        method: "POST",
        headers: new Headers({
            'content-type': 'application/json'
        }),
        body: JSON.stringify(post)
    }

    fetch('http://192.168.137.1:3333/api/new', options)
        .then(response => {
            updatePosts()
            document.getElementById('title').value = ''
            document.getElementById('description').value = ''
        })
}