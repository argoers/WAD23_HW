window.onload = function() {



    fetch('https://api.npoint.io/11caf0f2f65a77f2e447')
        .then((response) => response.json())
        .then(json => {
            console.log(json);

            /// For each post in JSON
            for(let i = 0; i < json.length; i++){
                let newPost = document.createElement("div");
                newPost.className = "post-box";

                ///// Create post header
                let newPostHeader = document.createElement("div");
                newPostHeader.className = "post-header";
                let newPostDate = document.createTextNode(json[i].createTime);
                newPostHeader.appendChild(newPostDate);
                let newPostProfileImage = document.createElement("img");
                //Check if there is profile image for the user
                if (json[i].profileImagePath === null){
                    newPostProfileImage.src = "res/images/img.png" //Default image path
                }
                else{

                    newPostProfileImage.src = json[i].profileImagePath;
                }

                newPostHeader.appendChild(newPostProfileImage);
                newPost.appendChild(newPostHeader);

                //Create post body
                /// Check if there is a image
                if(json[i].contentImagePath !== null){
                    let newPostContentImage = document.createElement("img");
                    newPostContentImage.className = "post-image";
                    newPostContentImage.src = json[i].contentImagePath;
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
