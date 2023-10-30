let defaultImagePath = "res/images/"

function showUserInfo(){
    let profile = document.getElementById("user-logo");
    profile.onclick = function (){
        let profileInfoCheck = document.getElementById("profileInfo");
        if (profileInfoCheck == null){
            let profileInfo = document.createElement("div");
            profileInfo.style.backgroundColor = "lightgray";
            profileInfo.style.height = "100px";
            profileInfo.style.borderRadius = "10px";
            profileInfo.style.right = "8px";
            profileInfo.style.width="200px";
            profileInfo.style.position = "absolute";
            profileInfo.id = "profileInfo";

            let userInfo = ["Kaur Veere",
                "kaur.veere@ut.ee","logout"];
            for (let i = 0; i < userInfo.length; i++) {
                let info = document.createElement("div");
                info.innerText=userInfo[i];
                info.style.marginTop = "10px";
                info.style.marginLeft = "20px"
                profileInfo.appendChild(info);
            }
            profileInfo.style.display= "flex";
            profileInfo.style.flexDirection= "column";
            profileInfo.style.fontFamily = "Gill Sans, sans-serif";

            document.getElementsByTagName("header")[0].after(profileInfo);
        }
        else{
            profileInfo.remove();
        }
    }
}

console.log(document.title)

if(document.title === "Index"){
    fetch('res/json/myjson.json')
        .then((response) => response.json())
        .then(json => {
    /*fetch('https://api.npoint.io/11caf0f2f65a77f2e447')
        .then((response) => response.json())
        .then(json => {*/
        console.log(json);

        /// For each post in JSON
        for(let i = 0; i < json.length; i++){
            let newPost = document.createElement("div");
            newPost.className = "post-box";

            ///// Create post header
            let newPostHeader = document.createElement("div");
            newPostHeader.className = "post-header";
            /// Create post date element
            let newPostDate = document.createElement("div");
            newPostDate.innerText = json[i].createTime;
            newPostDate.className = "post-date";
            newPostHeader.appendChild(newPostDate);

            let newPostProfileImage = document.createElement("img");
            //Check if there is profile image for the user
            newPostProfileImage.src = defaultImagePath.concat(json[i].userId).concat(".png");
            newPostProfileImage.addEventListener("error", function (){
                //Default image path if profile image missing for given user
                newPostProfileImage.src = "res/images/img.png"
            })

            newPostHeader.appendChild(newPostProfileImage);
            newPost.appendChild(newPostHeader);

            //Create post body
            /// Check if there is a image
            if(json[i].contentImagePath !== null){
                let newPostContentImage = document.createElement("img");
                newPostContentImage.className = "post-image";
                newPostContentImage.src = defaultImagePath.concat(json[i].contentImagePath);
                newPost.appendChild(newPostContentImage);
            }

            /// Add post paragraph i.e. text
            let newPostParagraph = document.createElement("p");
            newPostParagraph.className = "post-text";
            let newPostParagraphText = document.createTextNode(json[i].body);
            newPostParagraph.appendChild(newPostParagraphText);
            newPost.appendChild(newPostParagraph);

            // Add like icon
            let newPostLikeButton = document.createElement("img");
            newPostLikeButton.className = "likeIcon";
            newPostLikeButton.src = "res/images/like.png";
            newPost.appendChild(newPostLikeButton);
            //Add post to posts-area
            // Poor solution add ID to postArea
            document.getElementsByClassName("posts-area")[0].appendChild(newPost);
        }
        showUserInfo();
    })
    .catch(err => {
        let errDiv = document.createElement("div");
        errDiv.className = 'post';
        errDiv.innerText = err;
        document.body.appendChild(errDiv);
    })
    .finally(() => {
        let footer = document.createElement("footer");
        date = new Date().toLocaleString()
        footer.innerText = date;
        document.body.appendChild(footer);
    })
}
else {
    window.onload = function () {
        showUserInfo();
    }
}



