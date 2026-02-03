// Fetch data from /api/hello endpoint
async function fetchHelloMessage() {
  const responseDiv = document.getElementById('response');
  
  try {
    // Show loading state
    responseDiv.classList.add('show');
    responseDiv.textContent = 'Loading...';
    responseDiv.classList.remove('error', 'success');

    // Fetch from the API endpoint
    const response = await fetch('/api/hello');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Display the response
    responseDiv.textContent = JSON.stringify(data, null, 2);
    responseDiv.classList.add('success');
    responseDiv.classList.remove('error');
    
  } catch (error) {
    // Handle errors
    responseDiv.textContent = `Error: ${error.message}`;
    responseDiv.classList.add('error');
    responseDiv.classList.remove('success');
    console.error('Fetch error:', error);
  }
}

// Attach event listener when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button');
  if (button) {
    button.addEventListener('click', fetchHelloMessage);
  }
});
