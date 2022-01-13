function footer(query) {
  query.innerHTML = `
	${query.innerHTML}
    <footer id="footer-main">
  <section class="footer-address-contacts">
    <p class="algoritmo-address">Rua Amarelinha, nº123
      - Little Yellow - SP</p>
      <div class="contacts">
        <p class="telephone">(11) 95248-4545</p>
        <p class="email">contato@algoritmo.com.br</p>
      </div>
    <img class="slogan" src="../../assets/img/slogan.png">
  </section>
  <section class="footer-logo-medias">
    <img class="footer-logo" src="../../assets/img/algoritmo horizontal.png">
    <div class="social-midias">
      <a class="facebook-icon"> <img class="facebook-icon-img" src="../../assets/img/fb_icon-icons.com_65434.svg"></a>
      <a class="twitter-icon"> <img class="twitter-icon-img" src="../../assets/img/twitter_icon-icons.com_65436.svg"></a>
      <a class="instagram-icon"> <img class="instagram-icon-img"
          src="../../assets/img/Instagram_Rounded_icon-icons.com_61576.svg"></a>
    </div>
  </section>
</footer>
    `
}
export default footer;