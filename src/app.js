

    const mongodb = require ('mongodb')

    const mongoClient = mongodb.MongoClient

    const connectionUrl = 'mongodb://127.0.0.1:27017'

    const dbname = "aous"

    mongoClient.connect(connectionUrl , (error,res1) =>{
        if(error){
            return  console.log('error has occured')
        }
        console.log('All Perf')

        const db = res1.db(dbname)

//----------------------------------------------------------------------------

        db.collection('users').insertOne({
            name : 'aous',
            age : 33
        },(error , data) => {
            if(error){
                console.log('Unable to insert Data')
            }
        })
//----------------------------------------------------------------------------
        db.collection('users').insertOne({
            name : 'islam',
            age : 28
        },(error , data) => {
            if(error){
                console.log('Unable to insert Data')
            }
        })

//----------------------------------------------------------------------------
        db.collection ('users').insertMany(
           [ {
                name: 'lara',
                age: 27
            },
            {
                name: 'maya',
                age: 27
            },
            {
                name: 'dima',
                age: 27
            },
            {
                name: 'eva',
                age: 27
            },
            {
                name: 'mohammad',
                age: 55
            },
            {
                name: 'haifaa',
                age: 69
            },
            {
                name: 'ammar',
                age: 32
            },
            {
                name: 'ali',
                age: 22
            },
            {
                name: 'fouad',
                age: 42
            },
            {
                name: 'reem',
                age: 27
            }
        ] , (error,data)=>{
                if(error){
                    console.log('Unable to insert data')
                }
            } 
        )

//--------------------------------------------------------------------------------------

           // to get data that match filter//
      
      db.collection('users').find({age:27}).toArray((error , users)=>{
        if (error) {
            return console.log('error has occured')
        }
        console.log(users)
      })

//--------------------------------------------------------------------------------------

      // to limit number //
      db.collection('users').find({age:27}).limit(3).toArray((error , users)=>{
        if (error) {
            return console.log('error has occured')
        }
        console.log(users)
      })
//--------------------------------------------------------------------------------------

     db.collection("users").updateOne({_id:mongodb.ObjectId("66afe39d545f70e3fd2ea6f1")},{
        $set:{name: "haya1" },
       
        $inc: {age: 4}
     }).
     then((data1)=>{console.log(data1.modifiedCount)})
     .catch((error)=> {console.log(error)})

//--------------------------------------------------------------------------------------
     db.collection("users").updateOne({_id:mongodb.ObjectId("66afe39d545f70e3fd2ea6f2")},{
        $set:{name: "haya2" },
       
        $inc: {age: 4}
     }).
     then((data1)=>{console.log(data1.modifiedCount)})
     .catch((error)=> {console.log(error)})

//--------------------------------------------------------------------------------------
     db.collection("users").updateOne({_id:mongodb.ObjectId("66afe39d545f70e3fd2ea6f3")},{
        $set:{name: "haya3" },
        
        $inc: {age: 4}
     }).
     then((data1)=>{console.log(data1.modifiedCount)})
     .catch((error)=> {console.log(error)})

//--------------------------------------------------------------------------------------
     db.collection("users").updateOne({_id:mongodb.ObjectId("66afe39d545f70e3fd2ea6f4")},{
        $set:{name: "haya4" },
        
        $inc: {age: 4}
     }).
     then((data1)=>{console.log(data1.modifiedCount)})
     .catch((error)=> {console.log(error)})

//--------------------------------------------------------------------------------------

    db.collection('users').updateMany({},{
        $inc: {age: 10}
    }).
    then((data1)=>{console.log(data1.modifiedCount)})
    .catch((error)=> {console.log(error)})

//--------------------------------------------------------------------------------------

    db.collection('users').deleteMany({age:41})
    .then((data1)=>{console.log(data1.deletedCount)})
   .catch((error)=> {console.log(error)})


})

     


