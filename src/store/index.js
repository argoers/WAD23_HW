import { createStore } from 'vuex'

export default createStore({
    strict: true,
    state: {
        postList:[
            {
                id: 1,
                userId: 1,
                createTime: "29 Aug, 2023",
                contentImagePath: "tartu-old-city.jpg",
                body: "What a lovely city!"
            },
            {
                id: 2,
                userId: 2,
                createTime: "Sep 6, 2023",
                contentImagePath: null,
                body: "When is the deadline for homework?"
            },
            {
                id: 3,
                userId: 3,
                createTime: "Sep 6, 2023",
                contentImagePath: null,
                body: "I think it was sometime in October???"
            },
            {

                id: 4,
                userId: 1,
                createTime: "Sep 20, 2023",
                contentImagePath: "pancakes.png",
                body: "Is someone going to the Pancake Morning?"
            },
            {

                id: 5,
                userId: 2,
                createTime: "Sep 21, 2023",
                contentImagePath: null,
                body: "Sorry! I can't make it. But what about BarBingo on Saturday?"
            },
            {

                id: 6,
                userId: 1,
                createTime: "Sep 22, 2023",
                contentImagePath: null,
                body: "Yes! I will definetly go there!"
            },
            {
                id: 7,
                userId: 3,
                createTime: "Oct 1, 2023",
                contentImagePath: "tartu2024.jpg",
                body: "I think the Tartu 2024 logo looks borking:///"
            },
            {
                id: 8,
                userId: 1,
                createTime: "Oct 2, 2023",
                contentImagePath: null,
                body: "It has some interesting variations for different occasions online."
            },
            {
                id: 9,
                userId: 2,
                createTime: "Oct 2, 2023",
                contentImagePath: null,
                body: "I find it nice and minimalistic"
            },
            {
                id: 10,
                userId: 1,
                createTime: "Oct 29, 2023",
                contentImagePath: null,
                body: "When do the exams start??? I haven't learned anything yet:((("
            }
        ]
    },
    getters: {},
    mutations: {},
    actions: {}
})