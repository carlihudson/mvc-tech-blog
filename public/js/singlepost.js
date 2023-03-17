document
  .querySelector('#view-post')
  .addEventListener('click', async (event) => {
    event.preventDefault();

    console.log(event);

    if (viewPost) {
      const response = await fetch('/api/posts/:id', {
        method: 'POST',
        body: JSON.stringify({ viewPost }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/posts/:id');
      } else {
        alert(response.statusText);
      }
    }
  });