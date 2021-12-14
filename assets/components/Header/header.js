const header = function () {
    document.body.innerHTML = `
    <header id="header">
    <section class="header-logo">
        <a href="../MainPage/MainPage.html"> <img class="algoritmo-logo"
                src="../../assets/img/algoritmo horizontal.png"></a>
    </section>

    <section class="search-bar">
        <input type="text" class="search-bar-input"
    placeholder="Buscar produtos, sabores e muito mais..."><button class="search-btn"><img class= "search-logo" 
        src="../../assets/img/search-solid.svg"></button> 
    </section>

    <section class="btn-container-itens">
        <button class="menu-item-car" type="button" id="menu-item-car" data-toggle="Carrinho"><img class= "shopping-cart-logo" 
            src="../../assets/img/shopping-cart-solid.svg"></button>
        <button class="menu-item-orders" type="button" id="menu-item-orders" data-toggle="Meus pedidos"><img class="clipboard-logo" 
            src="../../assets/img/clipboard-list-solid.svg"></button>
        <button class="menu-item-profile" type="button" id="menu-item-profile" data-toggle="Meu perfil" ><img class="user-logo" 
            src="../../assets/img/user-solid.svg"></button>
        <a class="menu-item-exit" id="menu-item-exit">Sair</a>
    </section>
</header>

${document.body.innerHTML}
`
}
header();

const profileRedirect = document.getElementById('menu-item-profile');
profileRedirect.addEventListener('click', myProfileRedirect);

function myProfileRedirect() {
    location.href = "../UserProfilePage/UserProfilePage.html";
}

const exit = document.getElementById('menu-item-exit');
exit.addEventListener('click', exitAndClean);

function exitAndClean() {
    sessionStorage.clear();
    location.href = "../LoginPage/LoginPage.html";
}