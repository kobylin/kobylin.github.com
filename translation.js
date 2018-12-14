(function() {
  var langs = {
    ru: {
      "Andrew Kobylin": "Андрей Кобылин",
      "Web Developer": "Веб разработчик",
      '"Trying to finish my tasks.."': '"Пытаюсь закончить начатое..."',
      "Work in programming since 2010": "Работаю программистом с 2010",
      Skills: "Навыки",
      "Public Projects": "Проекты в общем доступе",
      Companies: "Компании",
      Volunteering: "Волонтерство",
      Contacts: "Контакты"
    },
    ua: {
      "Andrew Kobylin": "Андрій Кобилін",
      "Web Developer": "Веб розробник",
      '"Trying to finish my tasks.."': '"Намагаюсь закінчити те що почав..."',
      "Work in programming since 2010": "Працюю программістом з 2010",
      Skills: "Навички",
      "Public Projects": "Проекти в загальному доступі",
      Companies: "Компаніі",
      Volunteering: "Волонтерство",
      Contacts: "Контакти"
    }
  };

  function getLang() {
    var lang = getQSParams()["lang"];

    return lang || "";
  }

  function getQSParams() {
    var rawParams = location.search.slice(1).split("&");
    var resultParams = {};

    rawParams.forEach(param => {
      if (!param) return;
      var splited = param.split("=");
      if (splited[0]) {
        resultParams[splited[0]] = splited[1] || false;
      }
    });

    return resultParams;
  }

  function translate() {
    var lang = getLang();

    if (!langs[lang]) return;

    document.querySelectorAll("[t]").forEach(node => {
      if (langs[lang][node.innerText]) {
        node.innerText = langs[lang][node.innerText];
      }
    });
  }

  translate();
})();
