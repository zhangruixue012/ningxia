function closeDialog() {
    $('#dialog_headerBtn').click(function () {
        var dialogWrapper= document.getElementById('dialog-wrapper');
        dialogWrapper.style.visibility ="hidden";

        var modalMask= document.getElementById('modal_mask');
        modalMask.style.visibility ="hidden";
    })
}

function showDialog() {
    var dialogWrapper= document.getElementById('dialog-wrapper');
    dialogWrapper.style.visibility ="visible";

    var modalMask= document.getElementById('modal_mask');
    modalMask.style.visibility ="visible";
}

function createChartDiv(id, title) {
    if ($('.dialog_body').children().length > 0) {
        $('.dialog_body').children().remove();
    }

    var childDiv = $('<div></div>');
    childDiv.attr('id', id);
    childDiv.attr('class', 'dialog_chart');
    $('.dialog_body').append(childDiv);

    $('.dialog_title').text(title);


    showDialog();

    closeDialog();
}
