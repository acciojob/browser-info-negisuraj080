document.addEventListener('DOMContentLoaded', function() {
  // Get browser information from the navigator object
  var browserName = navigator.appName;
  var browserVersion = navigator.appVersion;

  // Display browser information in the specified format
  var browserInfo = "You are using " + browserName + " version " + browserVersion;

  // Find the div element with id "browser-info"
  var browserInfoDiv = document.getElementById('browser-info');

  // Update the content of the div with the browser information
  browserInfoDiv.textContent = browserInfo;
});
