const router=require("express").Router()
const mcq=require("../modals/mcq")
const doubt=require("../modals/doubt")
router.get("/save",async (req,res)=>{
    console.log(req.query.question)
    let Q = await mcq.find({_id:req.query.question})
    
})
router.get("/edit",async (req,res)=>{
    let Q=await mcq.find({_id:req.query.question})
    console.log(Q)
    let htm=`<form action="/api/question" method="POST">
    <table>
                <tr>
                    <td>Question:- </td>
                    <td><input type="text" name="question" value="${Q[0].question}"> </td>
                </tr>
                <tr>
                    <td>Option A:- </td>
                    <td><input type="text" name="optionA" value="${Q[0].optionA}"></td>
                </tr>
                <tr>
                    <td>Option B:- </td>
                    <td><input type="text" name="optionB" value="${Q[0].optionB}"></td>
                </tr>
                <tr>
                    <td>Option C:- </td>
                    <td><input type="text" name="optionC" value="${Q[0].optionC}"></td>
                </tr>
                <tr>
                    <td>Option D:- </td>
                <td><input type="text" name="optionD" value="${Q[0].optionD}"></td>
                </tr>
                <tr>
                    <td>Answer:- </td>
                    <td><input type="text" name="answer" value="${Q[0].answer}"></td>
                </tr>
                <tr>
                    <td>Explaination:- </td>
                    <td><input type="text" name="explain" value="${Q[0].explain}"></td>
                </tr>
                <tr>
                    <td><input type="submit" value="Save"> </td>
                    <td><input type="reset" value="Reset"></td>
                </tr>
            </table></form>`
res.send(htm)
})
router.get("/questions",async (req,res)=>{
    let Q=await mcq.find()
   
    res.json({data:Q})
})
router.post("/question",async (req,res)=>{
    if(req.body.question==""||req.body.optionC==""||req.body.optionD==""||req.body.optionB==""||req.body.optionA==""){
        res.send("Send Data Properly")
    }else{
        let Q=new mcq({
            question:req.body.question,
            optionA:req.body.optionA,
            optionB:req.body.optionB,
            optionC:req.body.optionC,
            optionD:req.body.optionD,
            answer:req.body.answer,
            explain:req.body.explain
        })
        let saveStatus=await Q.save()
        res.send(saveStatus) 
    }
    

  
})
 module.exports=router