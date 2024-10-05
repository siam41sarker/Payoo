function getInputValueById(id)
    {
        const infoId = document.getElementById(id);
        let inputAmountValue = parseFloat(infoId.value);
        return inputAmountValue;
    }
function getInputTextValueById(id)
    {
        const infoId = document.getElementById(id);
        let mainAmountValue = parseFloat(infoId.innerText);
        return mainAmountValue;
    }