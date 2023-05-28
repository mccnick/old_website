// Get the tab elements
const tabs = document.querySelectorAll('.tab');

// Get the content elements
const contents = document.querySelectorAll('.content');

// Add event listeners to each tab
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    // Remove the 'active' class from all tabs
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });

    // Hide all content elements
    contents.forEach((content) => {
      content.style.display = 'none';
    });

    // Add the 'active' class to the clicked tab
    tab.classList.add('active');

    // Get the corresponding content element based on the tab's ID
    const contentId = tab.getAttribute('id').replace('tab', 'content');
    const content = document.getElementById(contentId);

    // Show the corresponding content
    content.style.display = 'block';
  });
});
