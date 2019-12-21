//area para os layouts
var area_layouts = document.getElementById("area_link");
//ajax

fetch('./json/database.json').then(function(response){
    response.text().then(function(text){
        const data = JSON.parse(text);
        renderDivLayouts(data);
    });
});
//renderiza a div com todos os layouts
function renderDivLayouts(data){
    var div_layouts = "";
    div_layouts += "<div class='row'>";
    for(let indexItem = 0; indexItem < data.length ; indexItem++){
        div_layouts += renderDivLayout(data,indexItem);
    }
    div_layouts += "</div>";
    area_layouts.insertAdjacentHTML('beforeend',div_layouts);
}
//renderiza uma div para layout
function renderDivLayout(data,indexItem){
    let divLayout = "";
    divLayout += "<div class='col-sm-12 col-md-6 layoutSite'>";
    divLayout += "<h2>" + data[indexItem].nome + "</h2>";
    divLayout += "<p class='layoutSite__descricao'>" + data[indexItem].descricao + "</p>";
    divLayout += "<div class='btn-group'>";
    divLayout += renderButtonAcess(data,indexItem);
    divLayout += renderButtonSourceCode(data,indexItem);
    divLayout += "</div>";
    divLayout += "</div>";
    return divLayout;
}
//renderiza botao para acessar o site
function renderButtonAcess(data,indexItem){
    let btn_acess = "";
    btn_acess += "<a href='"+ data[indexItem].link.url + "' alt='" + data[indexItem].link.alt + "' class='btn btn-sm btn_custom btn-outline-dark btn-group-item'>acessar</a>";
    return btn_acess;
}
//renderiza botao para ver codigo fonte
function renderButtonSourceCode(data,indexItem){
    let btn_sourceCode  = "";
    btn_sourceCode += "<a href='"+ data[indexItem].sourceCode.url + "' alt='" + data[indexItem].sourceCode.alt + "' class='btn btn-sm btn_custom btn-outline-dark btn-group-item'>código fonte</a>";
    return btn_sourceCode;
}