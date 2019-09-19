cSubmit = () =>{

    const data = document.getElementById("message").value;
    const author = document.getElementById("author").value;
    const Octokit = require('@octokit/rest');
    const octokit = new Octokit();

    const axios = require("axios");

    let headSha = "";
    let headURL = "";
    let commitSha = "";
    let treeSha= "";
    let treeURL = "";
    
    axios.post("https://www.plainlaundry.com/wish",{"author":author, "content":data},{headers:{'Content-Type':'application/json'}})
    .then((result) => {
        console.log(result);

        const submit = document.getElementById("submit");
        submit.innerHTML = "Andrew's gonna love this.  Thank you!";
        submit.removeEventListener("click",cSubmit);
        submit.className = "docile";
    })
    
}


//ed3c3fe7d9f7f54b12d6c04ff7b57027e7df346e