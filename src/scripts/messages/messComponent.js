const messComponent = (singleMessageObj) => {
    console.log(singleMessageObj);
    return`
    <div>
    <p id=edit-${singleMessageObj.id} class=edit>${singleMessageObj.id}: ${singleMessageObj.message} </p>
    </div>
    `
}


export default messComponent;