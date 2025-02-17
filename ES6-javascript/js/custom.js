document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor= 'lightblue'
    }
})

document.getElementById('center-third').addEventListener('click', function(){
    const third = document.getElementById('third-friend');
    third.style.textAlign = 'center';
})

document.getElementById('add-friend').addEventListener('click', function(){
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.innerHTML = `
    <h3 class = "friend-name">New Friend</h3>
    <p>Something new added</p>
    `
    friend.classList.add('friend');
    friendContainer.appendChild(friend);
})
