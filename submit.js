const scriptURL = 'https://script.google.com/macros/s/AKfycbyfWMbz6criFjvYlqgi3s9DC-bMaWQXHPdMvAgv1qdAbXGROQI2QouHo4B2MLsJg4oWHg/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    const sentence = document.getElementById('input-sentence').value;
    const book = document.getElementById('input-book').value;

    // Debugging: Log form data
    console.log('Form Data:', { sentence, book });

    const response = await fetch(scriptURL, { method: 'POST', body: new FormData(form) });
    const data = await response.json();

    // Debugging: Log response data
    console.log('Response Data:', data);

    if (response.ok) {
      displayData(sentence, book);
      // Clear form inputs
      document.getElementById('input-sentence').value = '';
      document.getElementById('input-book').value = '';
    } else {
      console.error('Error!', data.error);
    }
  } catch (error) {
    console.error('Error!', error.message);
  }
});

function displayData(sentence, book) {
  const bookShelf = document.getElementById('bookShelf');

  // Debugging: Log data for debugging
  console.log('Data for Display:', { sentence, book });

  // Create a button for the sentence
  const button = document.createElement('button');
  button.classList.add('book-sentence');
  button.textContent = sentence; // Use the actual input value for sentence
  button.addEventListener('click', () => {
    OpenChild(button);
  });
  bookShelf.appendChild(button);

  // Create a paragraph for the book info
  const paragraph = document.createElement('p');
  paragraph.classList.add('book-info');
  paragraph.textContent = book; // Use the actual input value for book
  bookShelf.appendChild(paragraph);
}
