

function setHtmlElementContent(htmlElementId, content) {
    if (!htmlElementId) {
        console.error('htmlElementId is not given in function setHtmlElementContent');
        return;
    } else if (!content){
        console.error('content is not given in function setHtmlElementContent');
        return;
    }
    if (Array.isArray(htmlElementId)) {
        htmlElementId.forEach(id => {
            document.getElementById(id).innerHTML = content;
        });
    } else {
        document.getElementById(htmlElementId).innerHTML = content;
    }
}
function classListAddHidden(htmlElementId , className) {
    let htmlElement = document.getElementById(htmlElementId);
    if (htmlElement || className){
        htmlElement.classList.add('invisible');
    } else{
        console.error('There is a error in function classListAddhidden  htmlElementId =', htmlElementId, className)
    }
    
}
function classListAddShow(htmlElementId) {
    let htmlElement = document.getElementById(htmlElementId);
    if (htmlElement){
        htmlElement.classList.contains('invisible') ? htmlElement.classList.remove('invisible') : htmlElement.classList.remove('hidden');
        
    } else{
        console.error('There is a error in function classListAddShow htmlElementId =', htmlElementId)
    }
}

export { setHtmlElementContent, classListAddHidden, classListAddShow };