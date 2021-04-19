
  
import "regenerator-runtime/runtime";

const analysis = async (event) => {
    event.preventDefault();
    let test = require('valid-url');
    let url = document.getElementById('url').value;
    
    if (test.isUri(url)) {
        post("http://localhost:8081/apiurl", { userUrl: url }).then((data) => {
            return viewData(data)
        })

    } else {
        alert('please enter a valid URL and try again');
    }

}


const post = async (url = '', data = {}) => {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        const data = await res.json();
        return data;
    } catch (err) {
        
    }


}

function viewData(data) {
    console.log(data);
    document.getElementById("text").innerHTML = `${data.sentence_list[0].text},
    text : ${data.text}`;
    document.getElementById("agreement").innerHTML = `${data.sentence_list[1].text},
    agreement: ${data.agreement}`;
    document.getElementById("subjectivity").innerHTML = ` ${data.sentence_list[2].text},
    subjectivity: ${data.subjectivity}`;
    document.getElementById("confidence").innerHTML = ` ${data.sentence_list[3].text},
    confidence: ${data.confidence}`;
    document.getElementById("irony").innerHTML = ` ${data.sentence_list[4].text},
    irony: ${data.irony}`;
    document.getElementById("score_tag").innerHTML = `${data.sentence_list[5].text},
    score_tag: ${data.score_tag}`;
}
export{
    analysis,
    viewData
}










