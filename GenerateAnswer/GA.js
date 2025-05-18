function generateAnswer()
{
    let str = ["Yes, definitely!","No, not really","Maybe later."]
    let question = document.getElementById("input").value
    let result = document.getElementById("answers")
 
    if(question.trim() === "")
    {
        result.innerHTML = "You didn't ask a question"
    }
    else
    {
         let randomValue = Math.floor(Math.random() * str.length);
        let ans = str[randomValue]
        result.innerHTML = ans
    
        document.getElementById("input").value = ""
    }
}