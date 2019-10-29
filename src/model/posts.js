module.exports = {
    posts: [
        {
            id: 'asudjaisd',
            title: 'teste',
            description: 'sduifiaisjdjfjasdjfjasduf'
        },
    ],
    getAll() {
        return this.posts
    },
    newPost(title, description) {
        this.posts.push({ id: generateId(), title, description })

    },
    // deletePost(id) {
    //     this.posts.splice

    // }
}
const generateId = () => {
    return Math.random().toString(36).substring(2, 9)
}