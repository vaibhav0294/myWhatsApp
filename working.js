let isHidden = true;
function displayMenu() {
    var sideBar = document.getElementById('sideBar')
    if (isHidden) {
        sideBar.style.display = 'block'
        isHidden = false;
    } else if (!isHidden) {
        sideBar.style.display = 'none'
        isHidden = true;
    }
}


function displayChat(rowId) {
    
    var img = document.getElementById('myImage')
    img.style.display = "none";
    var chatPage = document.getElementById('chatPage')
    chatPage.style.display = 'block';
}

function displayProfile() {
    var page1 = document.getElementById('mainPage')
    page1.style.display = 'none'
    var profilePage = document.getElementById('profile')
    profilePage.style.display = 'block'
}

function displayMainPage(){
    var page1 = document.getElementById('mainPage')
    page1.style.display = 'block'
    var profilePage = document.getElementById('profile')
    profilePage.style.display = 'none'
}

function hide() {
    var row = document.getElementById("profile")
    row.hidden = "hidden"
}

function myFunction() {
    var img = document.getElementById('chatPage')
    img.style.display = "none";
    var profilePage = document.getElementById('profile')
    profilePage.style.display = 'none' 
}


function show() {
    var row = document.getElementById("page1")
    var row1 = document.getElementById("profile")
    row.hidden = "hidden";
    row1.style.visibility = "visible";
}

function hideSidebar() {
    alert('hi')
    document.getElementById('sideBar').hidden = 'hidden'
}




/*function toggleSidebar(){
    
    if(isHidden){
        document.getElementById('sideBar').hidden='visible';
        isHidden = flase;
    }esle if(!isHidden){
        document.getElementById('sideBar').hidden='hidden';
        isHidden = true;
    }
    
}*/




