const axios=require("axios");
const BASE_URL="http://4.224.186.213/evaluation-service/logs";
const STACKS=["backend","frontend"];
const LEVELS=["debug","info","warn","error","fatal"];
const PACKAGES=["cache","controller","cron_job","db","domain","handler","repository","route","service","api","component","hook","page","state","style","auth","config","middleware","utils"];
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtdmlzaGFseWFkZXZpQGdtYWlsLmNvbSIsImV4cCI6MTc4Mjk2OTgzMiwiaWF0IjoxNzgyOTY4OTMyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNWM2NmE2MTAtZDI1ZC00NmJjLWFjZmQtOWY3NTdmZTU2MjYyIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoidmlzaGFseWEgZGV2aSBtIiwic3ViIjoiMTQzMzYyMDctMTFiYS00NjZmLWI4ZTYtOWMxM2Q3YjUwMTA4In0sImVtYWlsIjoibXZpc2hhbHlhZGV2aUBnbWFpbC5jb20iLCJuYW1lIjoidmlzaGFseWEgZGV2aSBtIiwicm9sbE5vIjoiMjMxMjA1NiIsImFjY2Vzc0NvZGUiOiJFUnpVeXgiLCJjbGllbnRJRCI6IjE0MzM2MjA3LTExYmEtNDY2Zi1iOGU2LTljMTNkN2I1MDEwOCIsImNsaWVudFNlY3JldCI6InBKTm5FaHZVY3B3eUhxdUIifQ.-ij0YQTiJJ88Pz_BhJMNzOxyBwN454b5SvvShYnR5Tc";
async function Log(stack,level,packageName,message){
    if(!STACKS.includes(stack))
        throw new Error(("Invalid stack"));
    if(!LEVELS.includes(level))
        throw new Error(("Invalid level"));
    if(!PACKAGES.includes(packageName))
        throw new Error(("Invalid package"));

    try{

        const response=await axios.post(BASE_URL,{
            stack,level,package:packageName,message
        },
     {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    });
    console.log("Success:", response.data);
        return response.data;

    }
    catch(err){
        console.log("Logging failed");
        console.error(err.message);
    }
}
module.exports=Log;
