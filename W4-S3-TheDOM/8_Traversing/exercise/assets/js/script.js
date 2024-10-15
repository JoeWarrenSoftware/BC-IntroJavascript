var listsElements = document.querySelectorAll("li");
if (listsElements)
{
    for(element of listsElements)
        {
            //element.backgroundColor = "#0000ff";
            element.style = "background-color: #0000ff";
        };   
}

var h2Element = document.querySelector(".widget h2");
if(h2Element)
{
    h2Element.textContent = "Reports";
}

var pElements = document.querySelectorAll("p");
if(pElements)
{
    pElements[2].textContent = "Optimise performance metrics here."
}