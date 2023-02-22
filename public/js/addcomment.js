document
  .querySelector('#add-comment')
  .addEventListener('click', async (event) => {
    event.preventDefault();

    console.log(event);

    const newComment = document.querySelector('#new-comment').value.trim();
   
    if (newComment) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ comment_content: newComment }),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(response)

      if (response.ok) {
        console.log("new comment posted!")
      } else {
        alert(response.statusText);
      }
    }
  });