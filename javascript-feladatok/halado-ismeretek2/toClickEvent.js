export function getPostInfos(target, array){
    const postInfo = array.find(elem => elem.id == target.firstElementChild.lastElementChild.innerHTML);
    return `<p><strong>Poszt adatai:</strong></p>
            <p><strong>Post:</strong> ${postInfo.body}</p>
            <p><strong>ID:</strong> ${postInfo.id}</p>
            <p><strong>Title:</strong> ${postInfo.title}</p>
            <p><strong>UserID:</strong> ${postInfo.userId}</p>`;
}


export function getComments(target, array){
    const postId = target.firstElementChild.lastElementChild.innerHTML;
    const postComments =  array.filter(elem => elem.postId == postId);
    const postCommentsTemplate = postComments.map(elem => 
        `<p><strong>${elem.id}. comment</strong></p>
        <p><strong>Comment name: </strong>${elem.name}</p>
        <p><strong>Comment: </strong>${elem.body}</p>`).join('-------------------');

    return `<p><strong>Poszt kommentjei:</strong></p>
            ${postCommentsTemplate}`
}



export function getUserInfos(target, userArray, postArray){
    function countPost(target, userArray, postArray){
        const userInfo = userArray.find(elem => elem.name === target.lastElementChild.lastElementChild.innerHTML);
        const filtered = postArray.filter(elem => elem.userId === userInfo.id);
        return filtered.length;
    }
    
    const userInfo = userArray.find(elem => elem.name === target.lastElementChild.lastElementChild.innerHTML);
    return `<p><strong>User adatai:</strong></p>
            <p><strong>ID:</strong> ${userInfo.id}</p>
            <p><strong>Name:</strong> ${userInfo.name} (${countPost(target, userArray, postArray)} post)</p>
            <p><strong>Email:</strong> ${userInfo.email}</p>
            <p><strong>Username:</strong> ${userInfo.username}</p>
            <p><strong>Phone:</strong> ${userInfo.phone}</p>
            <p><strong>Website:</strong> ${userInfo.website}</p>
            <p><strong>Address:</strong></p> 
            <p><strong>City:</strong> ${userInfo.address.city}</p>
            <p><strong>Street:</strong> ${userInfo.address.street}</p>
            <p><strong>Suite:</strong> ${userInfo.address.suite}</p>
            <p><strong>Zipcode:</strong> ${userInfo.address.zipcode}</p>
            <p><strong>Geolocation:</strong> lat(${userInfo.address.geo.lat}) lng(${userInfo.address.geo.lng})</p>`;
}


