// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Retrieve stored links on extension load
  chrome.storage.sync.get(['LinkedInLink', 'GithubLink','WebsiteLink'], function(result) {
      document.getElementById('LinkedInLink').value = result.LinkedInLink || '';
      document.getElementById('GithubLink').value = result.GithubLink || '';
      document.getElementById('WebsiteLink').value = result.WebsiteLink || '';
  });

  // Add event listeners for copy buttons
  document.getElementById('copyLinkedIn').addEventListener('click', function() {
      copyToClipboard('LinkedInLink');
  });

  document.getElementById('copyGithub').addEventListener('click', function() {
      copyToClipboard('GithubLink');
  });

  document.getElementById('copyWebsite').addEventListener('click', function() {
    copyToClipboard('WebsiteLink');
});
});

function copyToClipboard(inputId) {
  var inputElement = document.getElementById(inputId);

  inputElement.select();
  inputElement.setSelectionRange(0, 99999);

  document.execCommand('copy');

  alert("Link copied to clipboard: " + inputElement.value);

  // Save the link to Chrome's storage
  var data = {};
  data[inputId] = inputElement.value;
  chrome.storage.sync.set(data);
}
