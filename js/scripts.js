cSubmit = () =>{

    const data = document.getElementById("message").value;
    const author = document.getElementById("author").value;

    if(document.getElementById("upfile").value !== ""){
        const input = document.createElement("input");

        input.setAttribute("type", "hidden");
        input.setAttribute("name", "author");
        input.setAttribute("value", author);

        document.getElementById("fileupload").appendChild(input);
        document.forms['fileupload'].submit();
    }

    const Octokit = require('@octokit/rest');
    const octokit = new Octokit();

    const axios = require("axios");

    let headSha = "";
    let headURL = "";
    let commitSha = "";
    let treeSha= "";
    let treeURL = "";
    
    axios.post("https://www.plainlaundry.com/wish",{"author":author, "content":data},{headers:{'Content-Type':'application/json'}})
    .then(
        (result) => {
            console.log(result);
            if(result.data.message == "duplicate"){
                alert("Someone by that name has already posted.  Please try another name!");
            }else{
                const submit = document.getElementById("submit");
                submit.innerHTML = "Awesome! See your submission <a href='https://brymo.github.io/TwentySeconds/'>here!</a> ";
                submit.removeEventListener("click",cSubmit);
                submit.className = "docile";
            }
        },(error) => {
            const submit = document.getElementById("submit");
            submit.innerHTML = "Oh noes something went wrong!  Please let Bryan know.";
            submit.removeEventListener("click",cSubmit);
            submit.className = "docile";
        }
    )
    
}


//ed3c3fe7d9f7f54b12d6c04ff7b57027e7df346e