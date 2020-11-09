function englishSwitch(language) {
  if (language.checked == true) {
    $("[lang]").each(function () {
      if ($(this).attr("lang") == "en") $(this).show();
      else $(this).hide();
    });
  } else {
    $("[lang]").each(function () {
      if ($(this).attr("lang") == "es") $(this).show();
      else $(this).hide();
    });
  }
}
