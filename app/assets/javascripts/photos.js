$(function() {


  var followUser = function() {
    console.log("Whazzup")

    $btn = $(this);
    var id = $btn.data('id')
    console.log($btn);
    console.log(id);

    $.ajax({
        type: 'POST',
        url: '/photos/follow_user',
        data: { 
          id: id
           },
        dataType: 'JSON',
        success: function(xhr, textStatus) {
          console.log(textStatus)
        },
        error: function(xhr, textStatus, errorThrown) {
          console.log(textStatus)
        }
    });
  };


  $(".follow-btn").off('click').on('click', followUser);  

});