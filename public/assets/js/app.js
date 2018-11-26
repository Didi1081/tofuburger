$('#submit').on('click', function(){
   
    var newBurger = {
        name: $('#burgerInput').val(),
        devoured: 0
    }
    $.post('/api/burgers', newBurger, function(response){
        console.log(response);
        window.location = '/';
    })
})

$(document).on('click', '.eat', function(){
    var burgerId = $(this).attr('data-value');

    $.ajax({
        type: 'PUT',
        url: '/api/burgers/'+ burgerId,
        data: {devoured: 1}
    }).then(function(res){
        console.log(res, "this is the reuslt");
        window.location = '/';
    });
});






