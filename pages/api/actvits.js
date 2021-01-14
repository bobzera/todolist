import { connectToDatabase }  from "../../util/mongodb"


export default async (req, res) =>{ 

  
  if (req.method === "POST"){

    const { id, task, complete} = req.body;
    
    
    if(!task){
      res.status(400).json({error: "Missing Value"})
      return
    }
    
    const { db } = await connectToDatabase();
    
    const response = await db.collection("actvits").insertOne({
     id,
     task,
     complete
    })
    

    res.status(200).json(response.ops[0])
    
  } 

  if (req.method === "DELETE"){

    const {task} = req.body;
    
    const { db } = await connectToDatabase();
    
    const response = await db.collection('actvits').deleteOne({task});
    
    res.status(200).json({ok: "deu certo"})    
    
  }


}
