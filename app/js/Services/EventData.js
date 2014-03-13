"use strict";
/* 
 * Created by Jawad Rashid
 */
eventsApp.factory("eventData", function() {
    return {
        event: {
            name: "Learning with Jawad",
            date: "12/2/2014",
            time: "3 PM",
            location: {
                address: "S-Block",
                city: "Lahore",
                province: "Punjab"
            },
            imageUrl: "img/angularjs-logo.png",
            sessions: [
                {
                    name: "Learning Angular Fundamentals",
                    creatorName: "Jawad Rashid",
                    duration: 4,
                    level: "Noob",
                    abstract: "This is the main angular learning fundamentals course",
                    upVoteCount: 0
                },
                {
                    name: "Angular with MEAN stack",
                    creatorName: "Asad Aijaz",
                    duration: 6,
                    level: "Intermediate",
                    abstract: "A interesting course with MongoDB, Angular, Express, Node, and express.js",
                    upVoteCount: 0
                },
                {
                    name: "Learn CodeIgnitor",
                    creatorName: "Jawad Rashid",
                    duration: 1,
                    level: "Expert",
                    abstract: "Learning everything about the codeigniter.",
                    upVoteCount: 0
                }
            ]
        }
    };
});

