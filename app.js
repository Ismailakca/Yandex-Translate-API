//ProtoType Ajax Callback

eventListeners();


function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit",translaterWord);
    //change 
    document.getElementById("language").onchange = function(){
        //Arayüz İşlemleri
        ui.changeUI();
    }
}
const translate = new Translate(document.getElementById("word").value,document.getElementById("language").value);
const ui = new UI();
function translaterWord(e){



    translate.changeParametres(document.getElementById("word").value,document.getElementById("language").value);
    translate.traslateWord(function(err,response){
        if(err){
            console.log(err);
        }
        else{
            ui.displayTranslate(response);
        }
    });
    e.preventDefault();
}