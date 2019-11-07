var android = $("#fa-android");
var apple = $("#fa-apple");
var desktop = $("#fa-desktop");
var cameras = $("#fa-cameras");
var ras = $("#fa-ras");
var geo = $("#fa-geo");
var acel = $("#fa-acelerometro");
var maps = $("#fa-maps");
var chatYes = $("#fa-yes-chat");
var chatNo = $("#fa-no-chat");
var streamingYes = $("#fa-yes-streaming");
var streamingNo = $("#fa-no-streaming");
var circle = $(".circle");
var painelYes = $("#fa-yes-painel");
var painelNo = $("#fa-no-painel");
var painelDadosYes = $("#fa-yes-painelDados");
var painelDadosNo = $("#fa-no-painelDados");
var bancoDados = $("#bancoDados");

var currentTab = 0; // Current tab is set to be the first tab (0)
var count = 0;
showTab(currentTab); // Display the current tab
const submitElement = document.getElementById("nextBtn");
function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Enviar";
    submitElement.setAttribute("onclick", "resultado()");
  } else {
    document.getElementById("nextBtn").innerHTML = "Próximo";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n);
}

const btnAnterior = document.querySelector(".anterior");
btnAnterior.addEventListener("click", function() {
  submitElement.setAttribute("onclick", "Prev(1)");
});

const resultadoValue = document.querySelector(".resultados");
resultadoValue.style.display = "none";

function nextPrev(n) {
  //console.log("nextPrev", n);
  count = count + n;
  //console.log(count);
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;

  showTab(currentTab);
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

/***************************************************** */

/** Values for aplication */
var androidValue = 0;
var iosValue = 0;
var desktopValue = 0;
var chatValue = 0;
var geoValue = 0;
var raValue = 0;
var acelerometroValue = 0;
var cameraValue = 0;
var mapsValue = 0;
var streamingValue = 0;
var page5 = 0;
var page10 = 0;
var page15 = 0;
var pageMore15 = 0;
var painelValue = 0;
var painelAnalitico = 0;
var bancoIntegracao = 0;

$(".fa-android").click(function() {
  if (android.hasClass("green-fix")) {
    android.removeClass("green-fix");
    androidValue = 0;
  } else {
    android.addClass("green-fix");
    androidValue = 3;
  }
});

$(".fa-apple").click(function() {
  if (apple.hasClass("fa-apple-fix")) {
    apple.removeClass("fa-apple-fix");
    iosValue = 0;
  } else {
    apple.addClass("fa-apple-fix");
    iosValue = 3;
  }
});

$(".fa-desktop").click(function() {
  if (desktop.hasClass("fa-desktop-fix")) {
    desktop.removeClass("fa-desktop-fix");
    desktopValue = 0;
  } else {
    desktop.addClass("fa-desktop-fix");
    desktopValue = 3;
  }
});

$(".fa-cameras").click(function() {
  if (cameras.hasClass("fa-cameras-fix")) {
    cameras.removeClass("fa-cameras-fix");
    cameraValue = 1;
  } else {
    cameras.addClass("fa-cameras-fix");
    cameraValue = 0;
  }
});

$(".fa-ras").click(function() {
  if (ras.hasClass("fa-ras-fix")) {
    ras.removeClass("fa-ras-fix");
    raValue = 1;
    console.log(raValue);
  } else {
    ras.addClass("fa-ras-fix");
    raValue = 0;
    console.log(raValue);
  }
});

$(".fa-geo").click(function() {
  if (geo.hasClass("fa-geo-fix")) {
    geo.removeClass("fa-geo-fix");
    geoValue = 1;
  } else {
    geo.addClass("fa-geo-fix");
    geoValue = 0;
  }
});

$(".fa-acelerometro").click(function() {
  if (acel.hasClass("fa-acelerometro-fix")) {
    acel.removeClass("fa-acelerometro-fix");
    acelerometroValue = 1;
  } else {
    acel.addClass("fa-acelerometro-fix");
    acelerometroValue = 0;
  }
});

$(".fa-maps").click(function() {
  if (maps.hasClass("fa-maps-fix")) {
    maps.removeClass("fa-maps-fix");
    mapsValue = 1;
  } else {
    maps.addClass("fa-maps-fix");
    mapsValue = 0;
  }
});

$(".fa-yes-chat").click(function() {
  if (chatYes.hasClass("fa-yes-chat-fix")) {
    chatYes.removeClass("fa-yes-chat-fix");
    chatNo.addClass("fa-no-chat-fix");
    chatValue = 1;
  } else {
    chatYes.addClass("fa-yes-chat-fix");
    chatNo.removeClass("fa-no-chat-fix");
    chatValue = 0;
  }
});

$(".fa-no-chat").click(function() {
  if (chatNo.hasClass("fa-no-chat-fix")) {
    chatNo.removeClass("fa-no-chat-fix");
    chatYes.addClass("fa-yes-chat-fix");
    chatValue = 0;
  } else {
    chatNo.addClass("fa-no-chat-fix");
    chatYes.removeClass("fa-yes-chat-fix");
    chatValue = 1;
  }
});

$(".fa-yes-streaming").click(function() {
  if (streamingYes.hasClass("fa-yes-streaming-fix")) {
    streamingYes.removeClass("fa-yes-streaming-fix");
    streamingNo.addClass("fa-no-streaming-fix");
    streamingValue = 1;
  } else {
    streamingYes.addClass("fa-yes-streaming-fix");
    streamingNo.removeClass("fa-no-streaming-fix");
    streamingValue = 0;
  }
});

$(".fa-no-streaming").click(function() {
  if (streamingNo.hasClass("fa-no-streaming-fix")) {
    streamingNo.removeClass("fa-no-streaming-fix");
    streamingYes.addClass("fa-yes-streaming-fix");
    streamingValue = 0;
  } else {
    streamingNo.addClass("fa-no-streaming-fix");
    streamingYes.removeClass("fa-yes-streaming-fix");
    streamingValue = 1;
  }
});

$("div#circle div p").click(function() {
  $(this)
    .parent()
    .addClass("active-1")
    .siblings()
    .removeClass("active-1");
  var teste2 = $("div#circle .circle.active-1");
  if (teste2.hasClass("1")) {
    page5 = 1;
    page15 = 0;
    page10 = 0;
    pageMore15 = 0;
  } else if (teste2.hasClass("3")) {
    page10 = 3;
    page15 = 0;
    page5 = 0;
    pageMore15 = 0;
  } else if (teste2.hasClass("6")) {
    page15 = 6;
    page10 = 0;
    page5 = 0;
    pageMore15 = 0;
  } else if (teste2.hasClass("9")) {
    pageMore15 = 9;
    page15 = 0;
    page5 = 0;
    page10 = 0;
  }
});

$(".fa-yes-painel").click(function() {
  if (painelYes.hasClass("fa-yes-painel-fix")) {
    painelYes.removeClass("fa-yes-painel-fix");
    painelNo.addClass("fa-no-painel-fix");
    painelValue = 8;
  } else {
    painelYes.addClass("fa-yes-painel-fix");
    painelNo.removeClass("fa-no-painel-fix");
    painelValue = 0;
  }
});

$(".fa-no-painel").click(function() {
  if (painelNo.hasClass("fa-no-painel-fix")) {
    painelNo.removeClass("fa-no-painel-fix");
    painelYes.addClass("fa-yes-painel-fix");
    painelValue = 0;
  } else {
    painelNo.addClass("fa-no-painel-fix");
    painelYes.removeClass("fa-yes-painel-fix");
    painelValue = 8;
  }
});

$(".fa-yes-painelDados").click(function() {
  if (painelDadosYes.hasClass("fa-yes-painelDados-fix")) {
    painelDadosYes.removeClass("fa-yes-painelDados-fix");
    painelDadosNo.addClass("fa-no-painelDados-fix");
    painelAnalitico = 5;
  } else {
    painelDadosYes.addClass("fa-yes-painelDados-fix");
    painelDadosNo.removeClass("fa-no-painelDados-fix");
    painelAnalitico = 0;
  }
});

$(".fa-no-painelDados").click(function() {
  if (painelDadosNo.hasClass("fa-no-painelDados-fix")) {
    painelDadosNo.removeClass("fa-no-painelDados-fix");
    painelDadosYes.addClass("fa-yes-painelDados-fix");
    painelAnalitico = 0;
  } else {
    painelDadosNo.addClass("fa-no-painelDados-fix");
    painelDadosYes.removeClass("fa-yes-painelDados-fix");
    painelAnalitico = 5;
  }
});

/***********************************************
 ********* Cálculo da Aplicação *************/
function resultado() {
  var plataforma = androidValue + iosValue + desktopValue;

  bancoIntegracao = $("div.tab #bancoDados").val() * 2.5;

  resultadoValue.style.display = "";

  var features =
    chatValue +
    geoValue +
    raValue +
    acelerometroValue +
    cameraValue +
    page5 +
    page10 +
    page15 +
    pageMore15 +
    mapsValue +
    streamingValue;
    console.log("Antes " + features);
  if (plataforma === 9) {
    features = features * 3;
  } else if (plataforma === 6) {
    features = features * 2;
  } else {
    features = features * 1;
  }

  features = (features  +  painelValue + painelAnalitico + bancoIntegracao ) * 1000;
  plataforma = plataforma * 1000;
  var teste = (features + plataforma) + ((features + plataforma) * 0.15);

  const formulario = document.querySelector("#regForm");
  formulario.style.display = "none";
  $('.resultados h1').text("R$" + teste);
}

function Prev(n) {
  switch (count) {
    case 0:
      if (
        android.hasClass("green-fix") ||
        apple.hasClass("fa-apple-fix") ||
        desktop.hasClass("fa-desktop-fix")
      ) {
        nextPrev(n);
      } else {
        count = 0;
      }
      break;
    case 1:
      nextPrev(n);
      break;
    case 2:
      if (
        chatYes.hasClass("fa-yes-chat-fix") &&
        chatNo.hasClass("fa-no-chat-fix")
      ) {
        count = 2;
        if (n === -1) {
          nextPrev(n);
        }
      } else {
        nextPrev(n);
      }
      break;
    case 3:
      if (
        streamingYes.hasClass("fa-yes-streaming-fix") &&
        streamingNo.hasClass("fa-no-streaming-fix")
      ) {
        count = 3;
        if (n === -1) {
          nextPrev(n);
        }
      } else {
        nextPrev(n);
      }
      break;
    case 4:
      if (circle.hasClass("active-1")) {
        nextPrev(n);
      } else {
        count = 4;
        if (n === -1) {
          nextPrev(n);
        }
      }
      break;
    case 5:
      if (
        painelYes.hasClass("fa-yes-painel-fix") &&
        painelNo.hasClass("fa-no-painel-fix")
      ) {
        count = 5;
        if (n === -1) {
          nextPrev(n);
        }
      } else {
        nextPrev(n);
      }
      break;
    case 6:
      if (
        painelDadosYes.hasClass("fa-yes-painelDados-fix") &&
        painelDadosNo.hasClass("fa-no-painelDados-fix")
      ) {
        count = 6;
        if (n === -1) {
          nextPrev(n);
        }
      } else {
        nextPrev(n);
      }
      break;
    case 7:
      if (bancoDados.val() >= 0) {
        nextPrev(n);
      }
      break;
  }
}
