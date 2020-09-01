const electron = require('electron').remote.getCurrentWindow();
function loaded() {
    document.querySelector('#addressbar-input').addEventListener('keypress', e => {
        if(e.which == 13) {
            document.querySelector('#addressbar').style.display= 'none';
            document.querySelector('#webview').src = document.querySelector('#addressbar-input').value;
        }
    });

    document.querySelector('webview').addEventListener('DOMContentLoaded', function() {
       webview.insertRule('html,body{ background-color: #FF0000 !important;}',1)
     });
}

function toggleAddressBar() {
    if(document.querySelector('#addressbar').style.display != 'flex') document.querySelector('#addressbar').style.display= 'flex';
    else document.querySelector('#addressbar').style.display= 'none';
    document.querySelector('#addressbar-input').focus();
}