function UI(){
    this.outputImage = document.getElementById("outputImage");
    this.outputLangue = document.getElementById("outputLanguage");
    this.outputWord = document.getElementById("outputWord");

    this.languageList = document.getElementById("language");
}

UI.prototype.changeUI = function(){
    //Arayüzü Değiştirme 

    this.outputImage.src = `images/${this.languageList.value}.png`;
    this.outputLangue.innerHTML = this.languageList.options[this.languageList.selectedIndex].textContent;
    
}
UI.prototype.displayTranslate = function(word){
    this.outputWord.textContent = word;
}