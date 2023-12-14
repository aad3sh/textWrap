function toggleTextWrap() {
    var textWrapContainer = document.getElementById("textWrapContainer");
    var textWrapStatus = document.getElementById("textWrapStatus");
    if (textWrapContainer.classList.contains('text-wrap-balance')) {
        textWrapContainer.classList.remove('text-wrap-balance');
        textWrapStatus.textContent = "Text Wrap: Normal";
    } else {
        textWrapContainer.classList.add('text-wrap-balance');
        textWrapStatus.textContent = "Text Wrap: Balance";
    }
}
