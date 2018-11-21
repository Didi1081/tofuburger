$('#submit').on('click', function(){
    alert('this works');
    var newBurger = {
        name: $('#burgerInput').val(),
        devoured: 1
    }
    $.post('/api/burgers', newBurger, function(response){
        console.log(response);
    })
})