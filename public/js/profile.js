const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#game-title').value.trim();
  
    if (title) {
      const response = await fetch(`/api/games`, {
        method: 'POST',
        body: JSON.stringify({ title }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create game');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/games/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete game');
      }
    }
  };
  
  document
    .querySelector('.new-game-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.game-list')
    .addEventListener('click', delButtonHandler);
  