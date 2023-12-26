chrome.storage.sync.get(['LinkedInLink', 'GithubLink'], function(result) {
    document.getElementById('LinkedInLink').value = result.LinkedInLink || '';
    document.getElementById('GithubLink').value = result.GithubLink || '';
  });

function copyToClipboard(inputId) {
    // Get the input element
    var inputElement = document.getElementById(inputId);

    // Select the text in the input element
    inputElement.select();
    inputElement.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Notify the user that the text has been copied
    alert("Link copied to clipboard: " + inputElement.value);

    var data = {};
    data[inputId] = inputElement.value;
    chrome.storage.sync.set(data);
}