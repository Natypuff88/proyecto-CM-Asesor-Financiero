$(document).ready(function () {
  $(".showText").click(function () {
    const dataId = $(this).attr("data-id");
    const dataType = $(this).attr("data-type");
    const parser = `_text_${dataId}`;
    const getFullTextClass = `#full${parser}`;
    const getMinTextClass = `#min${parser}`;
    if (dataType === 'full') {
      $(this).text("Leer Menos");
      $(this).attr("data-type", 'less');
      $(`${getMinTextClass}`).addClass("d-none");
      $(`${getFullTextClass}`).removeClass("d-none");
    }
    if (dataType === 'less') {
      $(this).text("Leer Más");
      $(this).attr("data-type", 'full');
      $(`${getMinTextClass}`).removeClass("d-none");
      $(`${getFullTextClass}`).addClass("d-none");

    }

  })
});