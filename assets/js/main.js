const BASE_URL = 'https://jsonplaceholder.typicode.com'
const contenedorPosts = document.getElementById("post-data")
const buttonPosts = document.getElementById("button-posts")

const getPost = async() =>{
    try {
        const response = await fetch(`${BASE_URL}/posts`)

        if(response === null || response === undefined) throw new Error('La respuesta llegó vacía')

        const data = await response.json()

        return data
    } catch (error) {
        throw new Error('No pudimos obtener la data', error)
    }
}

const createTemplatePosts = async() =>{
    try {

        const posts = await getPost()

        const postCards = posts.map((post) =>{
            return `
            <div>
              <ul>
                <li>
                   <h3>${post.title}</h3>
                   <p>${post.body}</p>
                </li>
              </ul>
            </div>
            `
        })
        return postCards.join(" ")
    } catch (error) {
        throw new Error('No pudimos crear el template', error)
    }
}

const renderPosts = async() =>{
    try{

        const templateCards = await createTemplatePosts()

        contenedorPosts.innerHTML = templateCards

    } catch (error) {
        throw new Error('Falló al renderizar los posts', error)
    }
}

buttonPosts.addEventListener('click', () =>{
    renderPosts()
})