$(function () {
  let headerHtml = `
    <section id="website-nav__container">
    <div class="website-nav">
      <a href="javascript:;" class="nav__btn mb">
        <span></span>
        <span></span>
        <span></span>
      </a>
      <div class="nav__section">
        <a class="nav__section--logo" href="${logoData.link}"><img src="${logoData.headerPC}" alt="${logoData.title}"></a>
        <ul class="nav__section--list">
          <li class="nav__section--logomb"><a href="${logoData.link}"><img src="${logoData.headerMb}" alt="${logoData.title}"></a></li>
          ${headerData.map((item) => `<li class="ani-list"><a href="${item.link}">${item.title}</a></li>`).join("")}
        </ul>
        <a href="javascript:;" class="nav__section--close"></a>
      </div>
    </div>
  </section>
  `;

  $(".page-sale").before(headerHtml);

  $(".nav__btn").on("click", function (e) {
    e.preventDefault();
    $(".nav__section").addClass("nav__section--show");
    $(".nav__section--close").fadeIn(200);
    $("body").addClass("nav--open");
    $(".nav__section--list .ani-list").each((index, item) => {
      setTimeout(() => {
        $(item).addClass("show");
      }, (index + 1) * 150);
    });
  });

  $(".nav__section--close").on("click", function (e) {
    e.preventDefault();
    $(".nav__section--close").fadeOut(200);
    $(".nav__section").removeClass("nav__section--show");
    $("body").removeClass("nav--open");
    $(".nav__section--list .ani-list").removeClass("show");
  });
});
