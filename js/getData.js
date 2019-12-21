//area para os layouts
var area_links = document.getElementById("area_link");
//ajax

fetch('./json/database.json').then(function(response){
    response.text().then(function(text){
        const data = JSON.parse(text);
        renderDivLayouts(data);
    });
});
//renderiza a div com todos os layouts
function renderDivLayouts(data){
    var div_links = "";
    div_links += "<div class='row'>";
    for(let indexItem = 0; indexItem < data.length ; indexItem++){
        div_links += renderDivLink(data,indexItem);
    }
    div_links += "</div>";
    area_links.insertAdjacentHTML('beforeend',div_links);
}
//renderiza uma div para layout
function renderDivLink(data,indexItem){
    let divLayout = "";
    divLayout += "<div class='col-sm-12 layoutSite'>";
    divLayout += "<h3>" + data[indexItem].nome + "</h3>";
    divLayout += renderTags(data,indexItem);
    divLayout += "<div class='btn-group col-sm-12'>";
    divLayout += renderButtonAcess(data,indexItem);
    divLayout += "</div>";
    divLayout += "</div>";
    return divLayout;
}
//render tags
function renderTags(data,indexItem){
    let divTags = "<div class='tags'>";
    divTags += renderTagTipeMidia(data,indexItem);
    divTags += renderTagCategoria(data,indexItem);
    divTags += renderTagIdioma(data,indexItem);
    divTags += "</div>";
    return divTags; 
}
//renderiza renderTagTipeMidia
function renderTagTipeMidia(data,indexItem){
    let tagTipeMidia = "";
    tagTipeMidia += "<span class='tag badge badge-secondary'>" + data[indexItem].tipo_midia + "</span>";
    return tagTipeMidia;
}
//renderiza tag categoria
function renderTagCategoria(data,indexItem){
    let tagCategoria = "";
    tagCategoria += "<span class='tag badge badge-secondary'>" + data[indexItem].categoria + "</span>";
    return tagCategoria;
}
//renderiza tag idioma
function renderTagIdioma(data,indexItem){
    let tagIdioma = "";
    tagIdioma += "<span class='tag badge badge-secondary'>" + data[indexItem].idioma + "</span>";
    return tagIdioma;
}
//renderiza botao para acessar o site
function renderButtonAcess(data,indexItem){
    let btn_acess = "";
    btn_acess += "<a href='"+ data[indexItem].link + "' class='btn btn-lg btn_custom btn-outline-dark btn-group-item botaoAcessar'>acessar</a>";
    return btn_acess;
}

