import Student from "../models/student.js"

export function getStudent(req,res){
        //read and get all the students information from the mongoDB
        Student.find().then(
            (students)=>{
                 res.json(
                    students
                 )
            }
        ).catch(
            ()=>{

            }
        )      
}

export function createStudent(req,res){
   
    console.log("Post request received.")

    const student = new Student(
        {
            name: req.body.name,
            age: req.body.age,
            city: req.body.city
        }
    )

    student.save().then(
        ()=>{
            res.json(
                {
                    message: "Student created successfully."
                }
            )
        }
    ).catch(
        ()=>{
            res.json( 
                {
                    message: "Failed to create student."
                }
            )
        }
    )
 
}

export function deleteStudent(req, res){
    Student.deleteOne({
        name: req.body.name
    }).then(()=>{
        res.json({
            message:"Student deleted successfully."
        })
    }).catch(()=>{
        res.json({
            message: "unsuccessfully."
             
        })
    })
}