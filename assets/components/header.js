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
        <button class="menu-item-car" type="button" id="menu-item-car" data-tooltip="Carrinho"><img class= "shopping-cart-logo" 
            src="../../assets/img/shopping-cart-solid.svg"></button>
        <button class="menu-item-orders" type="button" id="menu-item-orders" data-tooltip="Meus pedidos"><img class="clipboard-logo" 
            src="../../assets/img/clipboard-list-solid.svg"></button>
        <button class="menu-item-profile" type="button" id="menu-item-profile" data-tooltip="Meu perfil" ><img class="user-logo" 
            src="../../assets/img/user-solid.svg"></button>
        <a class="menu-item-exit" id="menu-item-exit">Sair</a>
    </section>
</header>
</body>

<style>
body {
  background-image: url(../../assets/textures/brushed-alum-dark-modificado.png);
  margin: 0;
}

header {
  display: flex;
  flex-direction: row;
  background-color: #DD7D0F;
  height: 10%;
  justify-content: space-evenly;
  position: fixed;
  top:0;
  left:0;
}

.header-logo {
  width:20%;
  margin-top: 7px;
}

.algoritmo-logo {
  width: 100%;
}

.search-bar {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-bar-input, .search-btn {
  margin: 0;
  height: 40px;
  border-radius: 50px;
  text-decoration: none;
  border-style: none;
}

.search-bar-input {
  width: 350px;
  outline: none;
  padding: 10px;
  font-family: 'Roboto Mono', monospace;
}

.search-btn {
  cursor: pointer;
  margin-left: 5px;
  width: 50px;
  background-color: rgba(255, 255, 255, 0.658)
}

.btn-container-itens {
  margin-top: 22px;
}

.menu-item-exit {
  color: white;
  margin-left: 25px;
  text-decoration: none;
  font-family: 'Roboto Mono', monospace;
  cursor: pointer
}

[data-tooltip] {
  position: relative;
  cursor: pointer;
  text-decoration: none;
  border-style: none;
  width: 70px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.658);
  border-radius: 10px;
}

[data-tooltip]::after {
  position: absolute;
  width: 100px;
  top: 110%; 
  left: 10%;
  box-sizing: border-box;
  content: attr(data-tooltip);
  color: white;
  background-color: #A0C8F0;
  padding: 8px;
  border-radius: 10px;
  visibility: hidden;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s, transform 0.2s;
}

[data-tooltip]:hover::after {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.shopping-cart-logo {
  width: 27%;
}
.clipboard-logo {
  width: 20%;
}

.user-logo {
  width: 23%;
}

.search-logo {
width: 45%;
}

button {
  width: 20%;
}

</style>
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