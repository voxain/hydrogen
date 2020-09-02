const electron = require('electron').remote.getCurrentWindow();

let generateTab = url => {
    let parser = new DOMParser();

    let view = document.createElement('webview');
    let tab = parser.parseFromString(`
        <div class="sidebar-entry">
            <div class="entry-icon">
                ::ICON::
            </div>
            <div class="entry-tooltip">
                ::NAME::
            </div>
        </div>
    `.replace(/::NAME::/g, url)
    .replace(/::ICON::/g, '<div class="lds-ripple"><div></div><div></div></div>')
    , 'text/html');

    return {
        tab,
        view
    };
}

class tab{
    constructor(initURL, id){
        this.id = id || Math.round( Math.random() * 0x10000 );
        this.DOM = generateTab(initURL);
        
        console.log(this.DOM.tab.body.childNodes)
        document.querySelector('#tablist').append(this.DOM.tab.body);
    }

    loadURL(url){
        // Set Tab DOM to display name and icon correctly
        // Set webview to load the tab (also catch loading event)
    }
}

let hydrogen = {
    tabs: {
        list: [],
        current: '1'
    }
}



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