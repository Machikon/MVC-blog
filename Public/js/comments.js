const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const blog_id = document.querySelector('#.new-comment-form').dataset.blogid;
    const comment_description = document.querySelector('#comment-description').value.trim();
  
    if (comment_description) {
        await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ blog_id, comment_description }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Try again.');
      }
    }
  };

  document
  .querySelector('.new-comment-form')
  .addEventListener('submit', commentFormHandler);