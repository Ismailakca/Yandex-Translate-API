function Translate(word,language){
    this.apikey = "trnsl.1.1.20200415T125131Z.b1ea90946f920877.186992946ffd966b16361034bdcff59820b0aa55";
    this.word = word;
    this.language = language;

    //XHR Objesi

    this.xhr = new XMLHttpRequest();
}

Translate.prototype.traslateWord = function(callback){
    //Ajax İşlemleri

    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    this.xhr.open("GET",endpoint);


    this.xhr.onload = () => {
        if(this.xhr.status === 200){
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];

            callback(null,text);
        }
        else{
            callback("bir hata oluştu",null)
        }
    }
    this.xhr.send();
};

Translate.prototype.changeParametres = function(newWord,newLangue){
    this.word = newWord;
    this.language = newLangue;
}