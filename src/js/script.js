let defaultImagePath = "res/images/"

function showUserInfo(){
    let profile = document.getElementById("user-logo");
    profile.onclick = function (){
        //Check if profileInfo element already exists
        let profileInfo = document.getElementById("profileInfo");
        //If not create one
        if (profileInfo == null){
            profileInfo = document.createElement("div");
            profileInfo.id = "profileInfo";
            let userInfo = ["Kaur Veere",
                "kaur.veere@ut.ee","logout"];
            for (let i = 0; i < userInfo.length; i++) {
                let info = document.createElement("div");
                info.innerText=userInfo[i];
                profileInfo.appendChild(info);
            }
            document.getElementsByTagName("header")[0].after(profileInfo);
        }
        //If already exists remove on click
        else{
            profileInfo.remove();
        }
    }
}

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

            // Add like button

            let newPostLikeButton = document.createElement("button");
            newPostLikeButton.type = "button";
            newPostLikeButton.className = "likeButton";
            //newPostLikeButton.img = "res/images/like.png";
            let newPostLikeButtonImage =  document.createElement("img");
            newPostLikeButtonImage.src = "res/images/like.png";
            newPostLikeButtonImage.className = "likeIcon";
            newPostLikeButton.appendChild(newPostLikeButtonImage);
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



