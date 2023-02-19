$(document).ready(function () {
  $('table').on('click', '.bi-trash', function () {
    var row = $(this).closest('tr');
    row.fadeOut(400, function () {
      row.remove();
      if ($('table tbody tr').length == 0) {
        $('table tbody').append('<tr><td colspan="6">Belum ada produk</td></tr>');
      }
    });
    var prevRow = row.prev('tr');
    if (prevRow.length > 0) {
      var prevRowPos = prevRow.position().top;
      $('html, body').animate({ scrollTop: prevRowPos }, 400);
    }
  });
});
