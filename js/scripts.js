cSubmit = (author,data) =>{

    return () =>{

        const Octokit = require('@octokit/rest');
        const octokit = new Octokit();

        const axios = require("axios");

        let headSha = "";
        let headURL = "";
        let commitSha = "";
        let treeSha= "";
        let treeURL = "";
        
        axios.post("http://13.211.193.61:8080/wish",{"author":author, "content":data})
        .then((result) => {
            console.log(result);
        })
    }
}


//ed3c3fe7d9f7f54b12d6c04ff7b57027e7df346e