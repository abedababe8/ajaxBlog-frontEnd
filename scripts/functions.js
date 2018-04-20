// const getAndDisplayPosts = function(){
//   postList.innerHTML = ''
//   axios.get('http://localhost:3000/post')
//   .then(response => {
//     const posts = response.data.posts
//
//     for(var post of posts){
//       const postTitle = document.createElement('a')
//       postTitle.classList.add('list-group-item', 'list-group-item-action')
//       postTitle.setAttribute('href', `#/post/${post.id}`)
//       currentId = post.id
//       const title = post.title
//       const contents = post.contents
//       postTitle.innerHTML = post.title
//       postTitle.addEventListener('click', function(event){
//         createForm.classList.add('hide')
//         putForm.classList.add('hide')
//         axios.get(`http://localhost:3000/post/${currentId}`)
//         .then(response => {
//           titleDisplay.innerHTML = title
//           contentDisplay.innerHTML = contents
//           deletePost.classList.remove('hide')
//           editPost.classList.remove('hide')
//         })
//       })
//       postList.appendChild(postTitle)
//     }
//   })
// }
//
// module.exports = {
//   getAndDisplayPosts
// }
