var title = document.querySelector('.c-header div h1')
const reserve = document.querySelector('.redbg')
const res_menu = document.querySelector('.sub__menu')

function eventb() {

    if(title.innerHTML !== "Centre de la Danse") {
        title.innerHTML = "Centre de la Danse"  

    } else {
        title.innerHTML = "Basé à Nantes"

    }

}

function dropShow() {
    if(res_menu.style.display !== "flex") {
        res_menu.style.display = "flex";

    } else {
        res_menu.style.display = "none";

    }

}

reserve.onclick = dropShow;
title.onclick = eventb;
title.style.cursor = "pointer";
reserve.style.cursor = "pointer";
