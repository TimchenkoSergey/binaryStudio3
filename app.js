//First query

db.students.find({
    scores: {
        $elemMatch : {
            type : "exam",
            score : {
                $gt : 87,
                $lt : 93
            }
        }
    }
});

//Second query

db.students.aggregate([
    {
        $unwind : "$scores"
    },
    {
        $match : {
            "scores.type" : "exam",
            "scores.score" : {
                $gt : 90
            }
        }
    }
]);

//Third query

db.students.update(
    {
        name : "Dusti Lemmond"
    },
    {
        $set : {
            "accepted" : true
        }
    },
    {
        upsert : false,
        multi  : true
    }
);