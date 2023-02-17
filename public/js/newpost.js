document
  .querySelector('#post-button')
  .addEventListener('click', async (event) => {
    event.preventDefault();

    console.log(event);

    const newPost = document.querySelector('#new-post').value.trim();
   
    if (newPost) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ post_content: newPost }),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(response)

      if (response.ok) {
        console.log("new post posted!")
      } else {
        alert(response.statusText);
      }
    }
  });