document.addEventListener('DOMContentLoaded', function(){
  const titleDisplay = document.querySelector('.titleDisplay')
  const contentDisplay = document.querySelector('.contentDisplay')
  const postList = document.querySelector('.posts')
  const putForm = document.querySelector('.put-form')
  const showForm = document.querySelector('#show-post')
  const editPost = document.querySelector('#edit-post')
  const deletePost = document.querySelector('#delete-post')

  let currentId;

  getAndDisplayPosts()

  const createForm = document.querySelector('form.post-form')
  createForm.addEventListener('submit', event => {
    event.preventDefault()
    const title = event.target.title.value
    const contents = event.target.content.value
    axios.post(`http://localhost:3000/post`, {title, contents})
    .then(response => {
      getAndDisplayPosts()
    })
  })
  createForm.classList.add('hide')

  showForm.addEventListener('click', function(event){
    $(createForm).toggleClass('hide')
    titleDisplay.innerHTML = ''
    contentDisplay.innerHTML = ''
    putForm.classList.add('hide')
    editPost.classList.add('hide')
    deletePost.classList.add('hide')

  })
  editPost.addEventListener('click', function(event){
    $(putForm).toggleClass('hide')
    createForm.classList.add('hide')
    let putTitle = document.querySelector('.put-form').firstChild.value
    putTitle = titleDisplay.innerHTML
  })
  deletePost.addEventListener('click', function(event){
    const currentId = window.location.hash.replace('#/post/','')
    axios.delete(`http://localhost:3000/post/${currentId}`)
    .then(response => {
      getAndDisplayPosts()
    })
  })
  putForm.addEventListener('submit', event => {
    event.preventDefault()
    const currentId = window.location.hash.replace('#/post/','')
    const title = event.target.title.value
    const contents = event.target.content.value
    axios.put(`http://localhost:3000/post/${currentId}`, {title, contents})
    .then(response => {
      getAndDisplayPosts()
    })
  })

function getAndDisplayPosts(){
  postList.innerHTML = ''
  axios.get('http://localhost:3000/post')
  .then(response => {
    const posts = response.data.posts

    for(var post of posts){
      const postTitle = document.createElement('a')
      postTitle.classList.add('list-group-item', 'list-group-item-action')
      postTitle.setAttribute('href', `#/post/${post.id}`)
      currentId = post.id
      const title = post.title
      const contents = post.contents
      postTitle.innerHTML = post.title
      postTitle.addEventListener('click', function(event){
        createForm.classList.add('hide')
        putForm.classList.add('hide')
        axios.get(`http://localhost:3000/post/${currentId}`)
        .then(response => {
          titleDisplay.innerHTML = title
          contentDisplay.innerHTML = contents
          deletePost.classList.remove('hide')
          editPost.classList.remove('hide')
        })
      })
      postList.appendChild(postTitle)
    }
  })
}


})
