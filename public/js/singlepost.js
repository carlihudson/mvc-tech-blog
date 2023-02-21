document
  .querySelector('#view-post')
  .addEventListener('click', async (event) => {
    event.preventDefault();

    console.log(event);


    const viewPost = document.querySelector('#view-post')

    if (viewPost) {
      const response = await fetch('/api/posts/:id', {
        method: 'POST',
        body: JSON.stringify({ viewPost }),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(response)


      if (response.ok) {
        document.location.replace('/posts/:id');
      } else {
        alert(response.statusText);
      }
    }
  });