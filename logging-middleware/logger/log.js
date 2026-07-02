const axios=require("axios");
const BASE_URL="http://4.224.186.213/evaluation-service/logs";
const STACKS=["backend","frontend"];
const LEVELS=["debug","info","warn","error","fatal"];
const PACKAGES=["cache","controller","cron_job","db","domain","handler","repository","route","service","api","component","hook","page","state","style","auth","config","middleware","utils"];
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtdmlzaGFseWFkZXZpQGdtYWlsLmNvbSIsImV4cCI6MTc4Mjk3NzcxMywiaWF0IjoxNzgyOTc2ODEzLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMjA5ZTU5YTYtYmY3Yi00NmEwLThmZDQtZTQ5OGQ4YzQ0ZGVlIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoidmlzaGFseWEgZGV2aSBtIiwic3ViIjoiMTQzMzYyMDctMTFiYS00NjZmLWI4ZTYtOWMxM2Q3YjUwMTA4In0sImVtYWlsIjoibXZpc2hhbHlhZGV2aUBnbWFpbC5jb20iLCJuYW1lIjoidmlzaGFseWEgZGV2aSBtIiwicm9sbE5vIjoiMjMxMjA1NiIsImFjY2Vzc0NvZGUiOiJFUnpVeXgiLCJjbGllbnRJRCI6IjE0MzM2MjA3LTExYmEtNDY2Zi1iOGU2LTljMTNkN2I1MDEwOCIsImNsaWVudFNlY3JldCI6InBKTm5FaHZVY3B3eUhxdUIifQ.YoP4U2rnqDR0OXCLaj_0xGlN4a4GO9bJV0bXFm0ku8o";
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
    
        return response.data;

    }
    catch(err){
    
        console.error(err.message);
    }
}
module.exports=Log;
