// Get the elements
const fileInput = document.querySelector('input[type="file"]');
const fileNameDisplay = document.querySelector('.file-name');
const headerTitle = document.querySelector('header h1');
const aboutLink = document.querySelector('.about');
const clickButton = document.querySelector('.click-button');

// Add event listeners
fileInput.addEventListener('change', displayFileName);
headerTitle.addEventListener('mouseover', changeHeaderColor);
headerTitle.addEventListener('mouseout', resetHeaderColor);
aboutLink.addEventListener('mouseover', animateAboutLink);
aboutLink.addEventListener('mouseout', resetAboutLink);
clickButton.addEventListener('mouseover', animateClickButton);
clickButton.addEventListener('mouseout', resetClickButton);

// Function to display the selected file name
function displayFileName() {
  const fileName = fileInput.value.split('\\').pop();
  fileNameDisplay.textContent = `Selected file: ${fileName}`;
}

// Function to change the header title color on hover
function changeHeaderColor() {
  headerTitle.style.color = '#fff';
}

// Function to reset the header title color
function resetHeaderColor() {
  headerTitle.style.color = '#333';
}

// Function to animate the "About" link on hover
function animateAboutLink() {
  aboutLink.style.textDecoration = 'underline';
}

// Function to reset the "About" link
function resetAboutLink() {
  aboutLink.style.textDecoration = 'none';
}

// Function to animate the click button on hover
function animateClickButton() {
  clickButton.style.boxShadow = '10px 5px 5px #E1D7B7';
  clickButton.style.border = 'none';
}

// Function to reset the click button
function resetClickButton() {
  clickButton.style.boxShadow = 'none';
  clickButton.style.border = '5px dashed #7C93C3';
}