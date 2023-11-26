import { createStore } from 'vuex'

export default createStore({
    strict: true,
    state: {
        postList:[
            {
                id: 10,
                userId: 1,
                createTime: "Oct 29, 2023",
                contentImagePath: null,
                body: "When do the exams start??? I haven't learned anything yet:(((",
                likes: 1
            },
            {
                id: 9,
                userId: 2,
                createTime: "Oct 2, 2023",
                contentImagePath: null,
                body: "I find it nice and minimalistic",
                likes: 4
            },
            {
                id: 8,
                userId: 1,
                createTime: "Oct 2, 2023",
                contentImagePath: null,
                body: "It has some interesting variations for different occasions online.",
                likes: 9
            },
            {
                id: 7,
                userId: 3,
                createTime: "Oct 1, 2023",
                contentImagePath: "tartu2024.jpg",
                body: "I think the Tartu 2024 logo looks borking:///",
                likes: 2
            },
            {
                id: 6,
                userId: 1,
                createTime: "Sep 22, 2023",
                contentImagePath: null,
                body: "Yes! I will definitely go there!",
                likes: 2
            },
            {
                id: 5,
                userId: 2,
                createTime: "Sep 21, 2023",
                contentImagePath: null,
                body: "Sorry! I can't make it. But what about BarBingo on Saturday?",
                likes: 1
            },
            {
                id: 4,
                userId: 1,
                createTime: "Sep 20, 2023",
                contentImagePath: "pancakes.png",
                body: "Is someone going to the Pancake Morning?",
                likes: 10
            },
            {
                id: 3,
                userId: 3,
                createTime: "Sep 6, 2023",
                contentImagePath: null,
                body: "I think it was sometime in October???",
                likes: 2
            },
            {
                id: 2,
                userId: 2,
                createTime: "Sep 6, 2023",
                contentImagePath: null,
                body: "When is the deadline for homework?",
                likes: 0
            },
            {
                id: 1,
                userId: 1,
                createTime: "29 Aug, 2023",
                contentImagePath: "tartu-old-city.jpg",
                body: "What a lovely city!",
                likes: 6
            }
        ]
    },
    getters: {},
    mutations: {
        //Functions that commit changes to the store
        addLike(state, id) {
            for(let post of state.postList){
                if(post.id === id){
                    post.likes+=1;
                    return
                }
            }
        },
        resetLikes: state => {
            state.postList.forEach(post => {
                post.likes = 0;
            })
        }
            },
    actions: {
        // Actions, which call on an asynchronous operations that performs the synchronous commit

        //Action to call asynchronously the addition of likes
        addLikeAct(act, id){
            setTimeout(function() {
                act.commit("addLike", id)
            }, 100)
        },
        //Action to call asynchronously the reset of likes
        resetLikesAct: act => {
            setTimeout(function() {
                act.commit("resetLikes")
            }, 100)
        }
    }
})