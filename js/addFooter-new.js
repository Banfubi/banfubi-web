$(function () {
  let footerHtml = `<section id="website__footer" class="website__section section5">
      <div class="section__inner">
        <!-- pc footer logo  -->
        <div class="footer__logo pc">
          <img src="${logoData.footerPC}" alt="${logoData.title}">
        </div>
        <!-- mb icon -->
        <div class="footer__social mb">
          ${socialMediaData
            .map((item, index) => {
              if (index === 1)
                return `<a href="javascript:;" onclick="window.open('https://line.me/R/msg/text/?'+ (encodeURIComponent(document.title)) + '%0D%0A'+ (encodeURIComponent(location.href)), '_blank');"><img src="${item.img}" alt="${item.title}"></a>`;
              return `<a href="${item.link}"><img src="${item.img}" alt="${item.title}"></a>`;
            })
            .join("")}
        </div>

        <div class="footer__collapse footer__aboutus">
          <p class="footer__title" data-toggle="collapse" href="#footer-1">ABOUT US <span class="mb footer__title--arrow"></span></p>
          <div class="collapse show" id="footer-1">
            <ul class=" footer__list">
              ${aboutUsData.map((item) => `<li><a href="${item.link}">${item.title}</a></li>`).join("")}
            </ul>
          </div>
        </div>

        <div class="footer__collapse footer__qa">
          <p class="footer__title" data-toggle="collapse" href="#footer-2">Q&A <span class="mb footer__title--arrow"></span></p>
          <div class="collapse show" id="footer-2">
            <ul class="footer__list">
              ${qaData.map((item) => `<li><a href="${item.link}">${item.title}</a></li>`).join("")}
            </ul>
          </div>
        </div>

        <div class="footer__collapse footer__contactus">
          <p class="footer__title" data-toggle="collapse" href="#footer-3">CONTACT US <span class="mb footer__title--arrow"></span></p>
          <div class="collapse show" id="footer-3">
            <ul class="footer__list">
              ${contactUsData
                .map((item, index) => {
                  if (index === 0) return `<li><a href="${logoData.link}">${item.title}</a></li>`;
                  return `<li>${item.title}</li>`;
                })
                .join("")}
            </ul>
          </div>
        </div>

        <div class="footer__pay mb">
          <a href=""><img src="https://banfubi.github.io/banfubi-web/img/visa.svg"></a>
          <a href=""><img src="https://banfubi.github.io/banfubi-web/img/mastercard.svg"></a>
          <a href=""><img src="https://banfubi.github.io/banfubi-web/img/seven11.png"></a>
          <a href=""><img src="https://banfubi.github.io/banfubi-web/img/jcb.png"></a>
        </div>

        <div class="footer__copyright mb">
          <img src="${logoData.footerMb}">
          <p>${logoData.copyRight}</p>
        </div>

      </div>
    </section>`;
  $(".page-single").after(footerHtml);
  $(".page-archive").after(footerHtml);
  $(".page-sale").after(footerHtml);

  if ($(window).width() < 768) {
    $("#website__footer .collapse").removeClass("show");
  }
  $("#website__footer .collapse").on("show.bs.collapse", function () {
    $(this).prev().find(".footer__title--arrow").addClass("rotate");
  });
  $("#website__footer .collapse").on("hide.bs.collapse", function () {
    $(this).prev().find(".footer__title--arrow").removeClass("rotate");
  });

  let checkPrivacy = `<p class="check-privacy">* 按下送出後等同於接受「 <a href="${privacyData.privacyPolicyUrl}" target="_blank">隱私權政策</a> 」及「<a href="${privacyData.userTermsUrl}" target="_blank">使用者條款</a> 」。</p>`;
  let isStep3Hidden = true;

  // add privacy text
  setTimeout(() => addPrivacyText(), 500);

  function addPrivacyText() {
    // 一般單頁式
    $(".order-submit").before(checkPrivacy);

    // 燈箱式先加入
    $("#checkout .checkout-extra-help").after(checkPrivacy);
    $("#checkout .check-privacy").css("display", "none");

    $("#checkout").on("shown.bs.modal", checkStep3);
    $("#checkout [onclick^=checkout], #checkout button").on("click", checkStep3);

    function checkStep3() {
      isStep3Hidden = $("form.step3").is(":hidden");
      if (isStep3Hidden) {
        $("#checkout .check-privacy").css("display", "none");
      } else {
        $("#checkout .check-privacy").css("display", "block");
      }
    }
  }
});
