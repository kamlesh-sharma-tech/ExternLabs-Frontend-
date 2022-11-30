$(function () {
  $("#images").sortable({
    update: function (event, ui) {
      getIdsOfImages();
    }, //end update
  });
});

function getIdsOfImages() {
  var values = [];
  $(".imageClass").each(function (index) {
    values.push($(this).attr("id").replace("imageNo", ""));
  });
  $("#outputvalues").val(values);
}