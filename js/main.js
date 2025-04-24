document.querySelectorAll(".faq-list__item").forEach((item) => {
  item.addEventListener("click", () => {
    // Если элемент уже активен, убрать активный класс
    if (item.classList.contains("faq-list__item--active")) {
      item.classList.remove("faq-list__item--active");
    } else {
      // Убираем класс у всех элементов
      document
        .querySelectorAll(".faq-list__item")
        .forEach((el) => el.classList.remove("faq-list__item--active"));
      // Добавляем класс текущему элементу
      item.classList.add("faq-list__item--active");
    }
  });
});

$(".tubs--documents .tub").on("click", function () {
  const $clicked = $(this);

  // Удаляем активный класс у всех .tub
  $(".tubs--documents .tub").removeClass("tub--active");

  // Добавляем активный класс к нажатому
  $clicked.addClass("tub--active");

  // Получаем индекс нажатой вкладки
  const index = $(".tubs--documents .tub").index($clicked);

  // Удаляем активные классы у всех списков документов
  $(".documents-list").removeClass("documents-list--active");

  // Добавляем активный класс к списку с тем же индексом
  $(".documents-list").eq(index).addClass("documents-list--active");
});

$(function () {
  // Функция для проверки на мобильные устройства
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  // Если устройство мобильное, то используем событие клика
  if (isMobileDevice()) {
    $(document).on("click", function (event) {
      // Проверяем, является ли цель клика элементом с классом '.lang'
      if (!$(event.target).closest(".lang").length) {
        // Если нет, убираем класс 'lang--active' у всех элементов с этим классом
        $(".lang").removeClass("lang--active");
      } else {
        // Иначе добавляем/убираем класс 'lang--active' для элемента с классом '.lang'
        $(event.target).closest(".lang").toggleClass("lang--active");
      }
    });
  } else {
    // Иначе используем событие ховера
    $(".lang").on("mouseover", function () {
      $(this).addClass("lang--active");
    });

    $(".lang").on("mouseout", function () {
      $(this).removeClass("lang--active");
    });
  }
});

$(function () {
  $(".burger").on("click", function (event) {
    $("body").toggleClass("body--active");
  });

  $(".menu__link").on("click", function (event) {
    $("body").toggleClass("body--active");
  });

  // Делаем попап и скрываем по клику вне его
  $(document).ready(function () {
    var $popup = $(".popup");
    var $popups = {
      contact: $(".popup--contact"),
      apply: $(".popup--apply"),
      cookie: $(".popup--cookie"),
      information: $(".popup--information"),
    };

    // Функция для показа попапа
    function showPopup($popupToShow) {
      $popupToShow.addClass("popup--active").fadeIn(250, function () {
        $(this).animate({ opacity: 1 }, 250);
      });
      $("body").addClass("body--popup");
    }

    // Функция для скрытия попапа
    function hidePopup($popupToHide) {
      $popupToHide.removeClass("popup--active").fadeOut(250, function () {
        $(this).animate({ opacity: 1 }, 250);
      });
      $("body").removeClass("body--popup");
    }

    // Обработчики кликов для показа попапов
    $(".partnership-links__link--partner").click(function (event) {
      event.stopPropagation();
      event.preventDefault();
      showPopup($popups.contact);
    });

    // if ($popups.cookie.length > 0) {
    //   showPopup($popups.cookie);
    // }

    $(".calculator-end__btn").click(function (event) {
      event.stopPropagation();
      event.preventDefault();
      showPopup($popups.apply);
    });

    $(".calculator-column__link").click(function (event) {
      event.stopPropagation();
      event.preventDefault();
      showPopup($popups.information);
    });

    // Обработчик кликов для скрытия попапов
    $(".cls").click(function (event) {
      event.stopPropagation();
      event.preventDefault();
      hidePopup($popup);
    });

    // Скрываем попап при клике вне его области
    $(document).click(function (event) {
      $.each($popups, function (key, $popupToCheck) {
        if ($popupToCheck.hasClass("popup--active")) {
          var $popupInner = $popupToCheck.find(".popup__inner");
          if (
            !$popupInner.is(event.target) &&
            $popupInner.has(event.target).length === 0
          ) {
            hidePopup($popupToCheck);
          }
        }
      });
    });
  });
  //
});

new Swiper(".heading-swiper", {
  slidesPerView: 1,
  loop: true,
  speed: 750,
  spaceBetween: 30,
  navigation: {
    prevEl: ".arrow--prev",
    nextEl: ".arrow--next",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  var x, i, j, l, ll, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /* For each option in the original select element,
        create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        /* When an item is clicked, update the original select box,
            and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  /* If the user clicks anywhere outside the select box,
then close all select boxes: */
  document.addEventListener("click", closeAllSelect);
});

// document.addEventListener("DOMContentLoaded", () => {
//   if (document.querySelector(".calculator")) {
//     // 1) настройки лимитов (изменяемые)
//     let MIN_TERM = 1;
//     let MAX_TERM = 60;
//     let MIN_SUM = 100000;
//     let MAX_SUM = 10000000;

//     // 2) ставки/комиссии
//     const CONFIG = {
//       annuity: {
//         newAuto: {
//           annualRate: 0.37026,
//           commissionRate: 0.055,
//           insuranceRate: 0.08,
//         },
//         usedAuto: { annualRate: 0.2399, commissionRate: 0, insuranceRate: 0 },
//       },
//       equal: {
//         newAuto: {
//           annualRate: 0.28,
//           commissionRate: 0.055,
//           insuranceRate: 0.08,
//         },
//         usedAuto: { annualRate: 0.2399, commissionRate: 0, insuranceRate: 0 },
//       },
//     };

//     // 3) DOM-узлы
//     const termInput = document.querySelector(".form-box__input--time");
//     const sumInput = document.querySelector(".form-box__input--sum");
//     const selectType = document.querySelector(".custom-select select");
//     const radios = Array.from(
//       document.querySelectorAll(".calculator-radio__input")
//     );
//     const periodDisp = document.querySelector(".dashboard-info__text--period");
//     const sumDisp = document.querySelector(".dashboard-info__text--sum");
//     const paymentDisp = document.querySelector(
//       ".calculator-column__text--payment"
//     );
//     const overpayDisp = document.querySelector(
//       ".calculator-column__text--overpayment"
//     );
//     const dialTerm = document.querySelector(
//       ".dashboard--first .dashboard__line"
//     );
//     const dialSum = document.querySelector(
//       ".dashboard--second .dashboard__line"
//     );
//     const featureNew = document.querySelector(".features-item--new");
//     const featureUsed = document.querySelector(".features-item--used");
//     const featureIns = document.querySelector(".features-item--insurance");
//     const infoSum = document.querySelector(".calculator-info__suptext");
//     const infoMonths = document.querySelector(".calculator-info__text");
//     const calculator = document.querySelector(".calculator");

//     // режимы лимитов
//     const typeFirst = document.querySelector(".type--first");
//     const typeSecond = document.querySelector(".type--second");
//     const typeThird = document.querySelector(".type--third");

//     // 4) состояние
//     let term = MIN_TERM;
//     let sum = MIN_SUM;
//     let repayment = selectType.value;
//     let autoStatus = "newAuto";
//     let lifeIns = "lifeInsuranced";

//     // 5) утилиты
//     function fmtNum(n) {
//       return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
//     }
//     function clamp(v, min, max) {
//       return Math.max(min, Math.min(max, v));
//     }

//     // дуги
//     const TERM_SPAN = 243,
//       SUM_SPAN = 243;
//     function rotateTerm(el, value) {
//       const ratio = clamp((value - MIN_TERM) / (MAX_TERM - MIN_TERM), 0, 1);
//       const angle = ratio * TERM_SPAN - TERM_SPAN / 2;
//       el.style.transform = `rotate(${angle}deg)`;
//     }
//     function rotateSum(el, value) {
//       const ratio = clamp((value - MIN_SUM) / (MAX_SUM - MIN_SUM), 0, 1);
//       const angle = ratio * SUM_SPAN - SUM_SPAN / 2;
//       el.style.transform = `rotate(${angle}deg)`;
//     }
//     function formatDashboardSum(val) {
//       if (val >= 1_000_000) {
//         let m = (val / 1_000_000).toFixed(1);
//         if (m.endsWith(".0")) m = m.slice(0, -2);
//         return `${m} млн`;
//       }
//       if (val >= 1000) return `${Math.round(val / 1000)} тыс`;
//       return fmtNum(val);
//     }

//     // 6) обновление Dashboard
//     function updateDashboard() {
//       if (infoMonths) infoMonths.textContent = term + " мес";
//       if (infoSum) infoSum.textContent = fmtNum(sum) + " ₸";
//       periodDisp.textContent = term + " мес";
//       sumDisp.textContent = formatDashboardSum(sum);
//       rotateTerm(dialTerm, term);
//       rotateSum(dialSum, sum);
//     }

//     // 7) расчёт
//     function recalc() {
//       const mode = repayment === "2" ? "equal" : "annuity";
//       const cfg = CONFIG[mode][autoStatus];
//       const comm = sum * cfg.commissionRate;
//       const ins = lifeIns === "lifeInsuranced" ? sum * cfg.insuranceRate : 0;
//       const financed = sum + comm + ins;
//       const i = cfg.annualRate / 12,
//         n = term;
//       let monthly, totalPay;
//       if (mode === "annuity") {
//         monthly = (financed * i) / (1 - Math.pow(1 + i, -n));
//         totalPay = monthly * n;
//       } else {
//         const principalPay = financed / n;
//         monthly = principalPay + financed * i;
//         const interestSum =
//           i * (n * financed - principalPay * ((n * (n - 1)) / 2));
//         totalPay = financed + interestSum;
//       }
//       paymentDisp.textContent = fmtNum(Math.round(monthly)) + " ₸";
//       overpayDisp.textContent = fmtNum(Math.round(totalPay - sum)) + " ₸";
//     }

//     // 8-9) handlers для term & sum
//     termInput.addEventListener("focus", () => (termInput.value = term));
//     termInput.addEventListener("input", () => {
//       term = clamp(+termInput.value || MIN_TERM, MIN_TERM, MAX_TERM);
//       updateDashboard();
//       recalc();
//     });
//     termInput.addEventListener("blur", () => {
//       if (!termInput.value) term = MIN_TERM;
//       termInput.value = term + " мес";
//       updateDashboard();
//       recalc();
//     });
//     sumInput.addEventListener("focus", () => (sumInput.value = sum));
//     sumInput.addEventListener("input", () => {
//       sum = clamp(+sumInput.value || MIN_SUM, MIN_SUM, MAX_SUM);
//       updateDashboard();
//       recalc();
//     });
//     sumInput.addEventListener("blur", () => {
//       if (!sumInput.value) sum = MIN_SUM;
//       sumInput.value = fmtNum(sum) + " ₸";
//       updateDashboard();
//       recalc();
//     });

//     // 10) select change
//     selectType.addEventListener("change", () => {
//       repayment = selectType.value;
//       document.querySelector(".calculator-info__subtext").textContent =
//         repayment === "2" ? "Равными долями" : "Аннуитет";
//       recalc();
//     });

//     // 11) radio change
//     radios.forEach((r) =>
//       r.addEventListener("change", () => {
//         document
//           .querySelectorAll(`input[name="${r.name}"]`)
//           .forEach((o) =>
//             o
//               .closest(".calculator-radios__radio")
//               .classList.remove("calculator-radio--active")
//           );
//         const box = r.closest(".calculator-radios__radio");
//         box.classList.add("calculator-radio--active");
//         if (r.name === "autoStatus") {
//           autoStatus = r.id;
//           featureNew.classList.toggle(
//             "features-item--active",
//             autoStatus === "newAuto"
//           );
//           featureUsed.classList.toggle(
//             "features-item--active",
//             autoStatus === "usedAuto"
//           );
//         } else {
//           lifeIns = r.id;
//           featureIns.classList.toggle(
//             "features-item--active",
//             lifeIns === "lifeInsuranced"
//           );
//         }
//         recalc();
//       })
//     );

//     // 12) custom select dispatch
//     document.querySelectorAll(".custom-select").forEach((x) => {
//       const sel = x.querySelector("select");
//       x.querySelectorAll(".select-items div").forEach((i) =>
//         i.addEventListener("click", () =>
//           sel.dispatchEvent(new Event("change"))
//         )
//       );
//     });

//     // 13) режимы лимитов переключатель
//     function applyMode(mode) {
//       // сброс классов
//       calculator.classList.remove(
//         "calculator--first",
//         "calculator--second",
//         "calculator--third"
//       );
//       calculator.classList.add(`calculator--${mode}`);
//       if (mode === "first") {
//         MIN_TERM = 1;
//         MAX_TERM = 84;
//         MIN_SUM = 100000;
//         MAX_SUM = 50000000;
//       }
//       if (mode === "second") {
//         MIN_TERM = 1;
//         MAX_TERM = 60;
//         MIN_SUM = 100000;
//         MAX_SUM = 10000000;
//       }
//       if (mode === "third") {
//         MIN_TERM = 1;
//         MAX_TERM = 60;
//         MIN_SUM = 100000;
//         MAX_SUM = 10000000;
//       }
//       // скорректировать текущее значение
//       term = clamp(term, MIN_TERM, MAX_TERM);
//       sum = clamp(sum, MIN_SUM, MAX_SUM);
//       termInput.blur();
//       sumInput.blur();
//       termInput.value = term + " мес";
//       sumInput.value = fmtNum(sum) + " ₸";
//       updateDashboard();
//       recalc();
//     }
//     typeFirst.addEventListener("click", () => applyMode("first"));
//     typeSecond.addEventListener("click", () => applyMode("second"));
//     typeThird.addEventListener("click", () => applyMode("third"));

//     // init
//     termInput.value = term + " мес";
//     sumInput.value = fmtNum(sum) + " ₸";
//     updateDashboard();
//     recalc();
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  // keep track of current mode (desktop vs mobile)
  let prevIsDesktop = window.innerWidth > 768;

  function initCalculator() {
    // determine which wrapper to use
    const containerClass = window.innerWidth > 768 ? "calculator--desk" : "calculator--mobile";
    // сразу ищем элемент с классом calculator и одновременно с нужным modifier-классом
    const calculator = document.querySelector(`.calculator.${containerClass}`);
    if (!calculator) return;

    // 1) настройки лимитов (изменяемые)
    let MIN_TERM = 1;
    let MAX_TERM = 60;
    let MIN_SUM = 100000;
    let MAX_SUM = 10000000;

    // 2) ставки/комиссии
    const CONFIG = {
      annuity: {
        newAuto: {
          annualRate: 0.37026,
          commissionRate: 0.055,
          insuranceRate: 0.08,
        },
        usedAuto: { annualRate: 0.2399, commissionRate: 0, insuranceRate: 0 },
      },
      equal: {
        newAuto: {
          annualRate: 0.28,
          commissionRate: 0.055,
          insuranceRate: 0.08,
        },
        usedAuto: { annualRate: 0.2399, commissionRate: 0, insuranceRate: 0 },
      },
    };

    // 3) DOM-узлы (все ищем внутри wrapper)
    const termInput       = calculator.querySelector(".form-box__input--time");
    const sumInput        = calculator.querySelector(".form-box__input--sum");
    const selectType      = calculator.querySelector(".custom-select select");
    const radios          = Array.from(calculator.querySelectorAll(".calculator-radio__input"));
    const periodDisp      = calculator.querySelector(".dashboard-info__text--period");
    const sumDisp         = calculator.querySelector(".dashboard-info__text--sum");
    const paymentDisp     = calculator.querySelector(".calculator-column__text--payment");
    const overpayDisp     = calculator.querySelector(".calculator-column__text--overpayment");
    const dialTerm        = calculator.querySelector(".dashboard--first .dashboard__line");
    const dialSum         = calculator.querySelector(".dashboard--second .dashboard__line");
    const featureNew      = calculator.querySelector(".features-item--new");
    const featureUsed     = calculator.querySelector(".features-item--used");
    const featureIns      = calculator.querySelector(".features-item--insurance");
    const infoSum         = calculator.querySelector(".calculator-info__suptext");
    const infoMonths      = calculator.querySelector(".calculator-info__text");

    const typeFirst       = document.querySelector(".type--first");
    const typeSecond      = document.querySelector(".type--second");
    const typeThird       = document.querySelector(".type--third");

    // 4) состояние
    let term       = MIN_TERM;
    let sum        = MIN_SUM;
    let repayment  = selectType.value;
    let autoStatus = "newAuto";
    let lifeIns    = "lifeInsuranced";

    // 5) утилиты
    function fmtNum(n) {
      return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    function clamp(v, min, max) {
      return Math.max(min, Math.min(max, v));
    }

    // дуги
    const TERM_SPAN = 243,
          SUM_SPAN  = 243;
    function rotateTerm(el, value) {
      const ratio = clamp((value - MIN_TERM) / (MAX_TERM - MIN_TERM), 0, 1);
      const angle = ratio * TERM_SPAN - TERM_SPAN / 2;
      el.style.transform = `rotate(${angle}deg)`;
    }
    function rotateSum(el, value) {
      const ratio = clamp((value - MIN_SUM) / (MAX_SUM - MIN_SUM), 0, 1);
      const angle = ratio * SUM_SPAN - SUM_SPAN / 2;
      el.style.transform = `rotate(${angle}deg)`;
    }
    function formatDashboardSum(val) {
      if (val >= 1_000_000) {
        let m = (val / 1_000_000).toFixed(1);
        if (m.endsWith(".0")) m = m.slice(0, -2);
        return `${m} млн`;
      }
      if (val >= 1000) return `${Math.round(val / 1000)} тыс`;
      return fmtNum(val);
    }

    // 6) обновление Dashboard
    function updateDashboard() {
      if (infoMonths) infoMonths.textContent = term + " мес";
      if (infoSum)    infoSum.textContent    = fmtNum(sum) + " ₸";
      periodDisp.textContent = term + " мес";
      sumDisp.textContent    = formatDashboardSum(sum);
      rotateTerm(dialTerm, term);
      rotateSum(dialSum, sum);
    }

    // 7) расчёт
    function recalc() {
      const mode = repayment === "2" ? "equal" : "annuity";
      const cfg  = CONFIG[mode][autoStatus];
      const comm = sum * cfg.commissionRate;
      const ins  = lifeIns === "lifeInsuranced" ? sum * cfg.insuranceRate : 0;
      const financed = sum + comm + ins;
      const i = cfg.annualRate / 12, n = term;
      let monthly, totalPay;
      if (mode === "annuity") {
        monthly  = (financed * i) / (1 - Math.pow(1 + i, -n));
        totalPay = monthly * n;
      } else {
        const principalPay = financed / n;
        monthly = principalPay + financed * i;
        const interestSum =
          i * (n * financed - principalPay * ((n * (n - 1)) / 2));
        totalPay = financed + interestSum;
      }
      paymentDisp.textContent   = fmtNum(Math.round(monthly)) + " ₸";
      overpayDisp.textContent   = fmtNum(Math.round(totalPay - sum)) + " ₸";
    }

    // 8-9) handlers для term & sum
    termInput.addEventListener("focus", () => (termInput.value = term));
    termInput.addEventListener("input", () => {
      term = clamp(+termInput.value || MIN_TERM, MIN_TERM, MAX_TERM);
      updateDashboard(); recalc();
    });
    termInput.addEventListener("blur", () => {
      if (!termInput.value) term = MIN_TERM;
      termInput.value = term + " мес";
      updateDashboard(); recalc();
    });

    sumInput.addEventListener("focus", () => (sumInput.value = sum));
    sumInput.addEventListener("input", () => {
      sum = clamp(+sumInput.value || MIN_SUM, MIN_SUM, MAX_SUM);
      updateDashboard(); recalc();
    });
    sumInput.addEventListener("blur", () => {
      if (!sumInput.value) sum = MIN_SUM;
      sumInput.value = fmtNum(sum) + " ₸";
      updateDashboard(); recalc();
    });

    // 10) select change
    selectType.addEventListener("change", () => {
      repayment = selectType.value;
      calculator.querySelector(".calculator-info__subtext").textContent =
        repayment === "2" ? "Равными долями" : "Аннуитет";
      recalc();
    });

    // 11) radio change
    radios.forEach((r) =>
      r.addEventListener("change", () => {
        calculator
          .querySelectorAll(`input[name="${r.name}"]`)
          .forEach((o) =>
            o
              .closest(".calculator-radios__radio")
              .classList.remove("calculator-radio--active")
          );
        const box = r.closest(".calculator-radios__radio");
        box.classList.add("calculator-radio--active");

        if (r.name === "autoStatus") {
          autoStatus = r.id;
          featureNew.classList.toggle(
            "features-item--active",
            autoStatus === "newAuto"
          );
          featureUsed.classList.toggle(
            "features-item--active",
            autoStatus === "usedAuto"
          );
        } else {
          lifeIns = r.id;
          featureIns.classList.toggle(
            "features-item--active",
            lifeIns === "lifeInsuranced"
          );
        }
        recalc();
      })
    );

    // 12) custom select dispatch
    calculator.querySelectorAll(".custom-select").forEach((x) => {
      const sel = x.querySelector("select");
      x.querySelectorAll(".select-items div").forEach((i) =>
        i.addEventListener("click", () => sel.dispatchEvent(new Event("change")))
      );
    });

    // 13) режимы лимитов переключатель
    function applyMode(mode) {
      calculator.classList.remove(
        "calculator--first",
        "calculator--second",
        "calculator--third"
      );
      calculator.classList.add(`calculator--${mode}`);
      if (mode === "first") {
        MIN_TERM = 1; MAX_TERM = 84;
        MIN_SUM = 100000; MAX_SUM = 50000000;
      }
      if (mode === "second" || mode === "third") {
        MIN_TERM = 1; MAX_TERM = 60;
        MIN_SUM = 100000; MAX_SUM = 10000000;
      }
      term = clamp(term, MIN_TERM, MAX_TERM);
      sum  = clamp(sum, MIN_SUM, MAX_SUM);
      termInput.blur();
      sumInput.blur();
      termInput.value = term + " мес";
      sumInput.value  = fmtNum(sum) + " ₸";
      updateDashboard(); recalc();
    }
    typeFirst.addEventListener("click", () => applyMode("first"));
    typeSecond.addEventListener("click", () => applyMode("second"));
    typeThird.addEventListener("click", () => applyMode("third"));

    // initial draw
    termInput.value = term + " мес";
    sumInput.value  = fmtNum(sum) + " ₸";
    updateDashboard(); recalc();
  }

  // first initialization
  initCalculator();

  // on resize, if we cross the 768px boundary, re-init (restart) the calculator
  window.addEventListener("resize", () => {
    const isDesktop = window.innerWidth > 768;
    if (isDesktop !== prevIsDesktop) {
      prevIsDesktop = isDesktop;
      initCalculator();
    }
  });
});

// Aos - the right initialisation
jQuery(document).ready(function () {
  (function () {
    // your page initialization code here
    // the DOM will be available here
    AOS.init({
      duration: 750,
      once: true,
      offset: 0, // offset (in px) from the original trigger point
      anchorPlacement: "top-bottom", // define where the AOS animations will be triggered
    });
  })();
});
// //
