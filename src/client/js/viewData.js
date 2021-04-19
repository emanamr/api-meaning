function viewData(data) {
    console.log(data);
    document.getElementById("text").innerHTML = `${data.status.msg},
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
    viewData
}