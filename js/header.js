fetch('../html/header.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Помилка в обробці');
    }
    return response.text();
  })
  .then(htmlContent => {
    // Find the element where you want to insert the fetched content
    const targetElement = document.getElementById('header');

    // Set the fetched HTML content to the target element
    targetElement.innerHTML = htmlContent;
  })
  .catch(error => {
    console.error('Проблема отримання HTML даних з додаткових файлів:', error);
  });