// Function to change the header title color to purple
export const changeHeaderColor = (elementId) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.style.color = 'white'
  }
}

// This code exports a function named changeHeaderColor that takes an elementId as an argument. The function uses document.getElementById to get the HTML element with the given elementId. If the element exists, it sets the color style property of the element to 'white', effectively changing the color of the header title to white.