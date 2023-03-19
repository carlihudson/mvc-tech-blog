const postId = document.querySelector('input[name="post-id"]').value;

document
.querySelector('#update-button')
.addEventListener('click', async (event) => {
  event.preventDefault();

  const updatedPostTitle = document.querySelector('#post-title').value.trim();
  const updatedPostContent = document.querySelector('#post-content').value.trim();
  console.log('initiating edit')

  if (updatedPostContent || updatedPostTitle ) {
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({ post_content: updatedPostContent, title: updatedPostTitle }),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(response)

    if (response.ok) {
      console.log("post edited!")
      document.location.assign('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  document.location.replace('/dashboard');
});