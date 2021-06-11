var users = [
    {
        id: 0,
        name: "UserName0",
    },
    {
        id: 1,
        name: "UserName1",
    },
    {
        id: 2,
        name: "UserName2",
    },
];

var types = [
    {
        id: 0,
        nameSRB: "Predjelo",
        nameENG: "",
        nameSRBP: "Predjela"
    },
    {
        id: 1,
        nameSRB: "Glavno jelo",
        nameENG: "",
        nameSRBP: "Glavna jela"
    },
    {
        id: 2,
        nameSRB: "Desert",
        nameENG: "",
        nameSRBP: "Deserti"
    },
    {
        id: 3,
        nameSRB: "Uzina",
        nameENG: "",
        nameSRBP: "Uzina"
    }
]

var data = [
    {
        id: 0,
        name: "name0",
        author: 1,
        grade: [{
            userID: 1,
            grade: 5
        },
        {
            userID: 2,
            grade: 5
        }],
        time: "",
        difficulty: 0,
        type: 0,
        recipe: "",
        imageLinks: [],
        videoLinks: "",
        comments: []
    },
    {
        id: 1,
        name: "name1",
        author: 1,
        grade: [{
            userID: 1,
            grade: 5
        },
        {
            userID: 2,
            grade: 4
        }],
        time: "",
        difficulty: 1,
        type: 0,
        recipe: "",
        imageLinks: [],
        videoLinks: "",
        comments: []
    },
    {
        id: 2,
        name: "name2",
        author: 1,
        grade: [{
            userID: 1,
            grade: 5
        },
        {
            userID: 2,
            grade: 3
        }],
        time: "",
        difficulty: 2,
        type: 0,
        recipe: "",
        imageLinks: [],
        videoLinks: "",
        comments: [
            {
                userID: 0,
                text: "Nije za kurac",
                date: "04/06/2020"
            }
        ]
    },
    {
        id: 3,
        name: "name3",
        author: 1,
        grade: [{
            userID: 1,
            grade: 5
        },
        {
            userID: 2,
            grade: 2
        }],
        time: "",
        difficulty: 3,
        type: 1,
        recipe: "",
        imageLinks: [],
        videoLinks: "",
        comments: [
            {
                userID: 2,
                text: "Jeste za kurac",
                date: "04/06/2020"
            }
        ]
    },
    {
        id: 4,
        name: "name4",
        author: 1,
        grade: [{
            userID: 1,
            grade: 5
        },
        {
            userID: 2,
            grade: 1
        }],
        time: "",
        difficulty: 4,
        type: 1,
        recipe: "",
        imageLinks: [],
        videoLinks: "",
        comments: []
    },
    {
        id: 5,
        name: "name5",
        author: 1,
        grade: [{
            userID: 1,
            grade: 5
        },
        {
            userID: 2,
            grade: 5
        }],
        time: "2h",
        difficulty: 5,
        type: 1,
        recipe: "",
        imageLinks: [],
        videoLinks: "",
        comments: [
            {
                userID: 0,
                text: "kurac",
                date: "09/09/2009"
            }
        ]
    },
    {
        id: 6,
        name: "name6",
        author: 1,
        grade: [{
            userID: 1,
            grade: 5
        },
        {
            userID: 2,
            grade: 4
        }],
        time: "",
        difficulty: 0,
        type: 2,
        recipe: "",
        imageLinks: [],
        videoLinks: "",
        comments: []
    },
    {
        id: 7,
        name: "name6",
        author: 1,
        grade: [{
            userID: 1,
            grade: 5
        },
        {
            userID: 2,
            grade: 3
        },
        {
            userID: 0,
            grade: 4
        }],
        time: "",
        difficulty: 1,
        type: 2,
        recipe: "",
        imageLinks: [],
        videoLinks: "",
        comments: []
    },
    {
        id: 8,
        name: "name8",
        author: 1,
        grade: [{
            userID: 1,
            grade: 5
        },
        {
            userID: 2,
            grade: 2
        }],
        time: "",
        difficulty: 2,
        type: 2,
        recipe: "",
        imageLinks: [],
        videoLinks: "",
        comments: []
    },
    {
        id: 9,
        name: "name9",
        author: 1,
        grade: [{
            userID: 1,
            grade: 5
        },
        {
            userID: 2,
            grade: 1
        },
        {
            userID: 0,
            grade: 2
        }
        ],
        time: "",
        difficulty: 3,
        type: 3,
        recipe: "",
        imageLinks: [],
        videoLinks: "",
        comments: []
    },
    {
        id: 10,
        name: "name10",
        author: 1,
        grade: [{
            userID: 1,
            grade: 5
        },
        {
            userID: 2,
            grade: 5
        }],
        time: "",
        difficulty: 4,
        type: 3,
        recipe: "",
        imageLinks: [],
        videoLinks: "",
        comments: []
    },
    {
        id: 11,
        name: "name11",
        author: 1,
        grade: [{
            userID: 1,
            grade: 5
        },
        {
            userID: 2,
            grade: 4
        }],
        time: "",
        difficulty: 5,
        type: 3,
        recipe: "",
        imageLinks: [],
        videoLinks: "",
        comments: []
    },
    {
        id: 12,
        name: "name12",
        author: 0,
        grade: [{
            userID: 1,
            grade: 5
        },
        {
            userID: 2,
            grade: 4
        }],
        time: "",
        difficulty: 5,
        type: 3,
        recipe: "",
        imageLinks: [],
        videoLinks: "",
        comments: []
    },
    {
        id: 13,
        name: "name13",
        author: 0,
        grade: [{
            userID: 1,
            grade: 5
        },
        {
            userID: 2,
            grade: 4
        }],
        time: "",
        difficulty: 5,
        type: 2,
        recipe: "",
        imageLinks: [],
        videoLinks: "",
        comments: []
    },
    {
        id: 14,
        name: "name14",
        author: 0,
        grade: [{
            userID: 1,
            grade: 5
        },
        {
            userID: 2,
            grade: 4
        }],
        time: "",
        difficulty: 5,
        type: 0,
        recipe: "",
        imageLinks: [],
        videoLinks: "",
        comments: []
    },
];