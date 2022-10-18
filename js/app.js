/**---Function to send Email ------ */
function sendMail(name, email, message){
    const endpoint = '../php/contact.php';
    $.ajax({
        type: "Post",
        url: endpoint,
        data: JSON.stringify({name:name,email:email,message:message}),
        contentType:'application/json',
        dataType: "json",
        success: function (response) {
            console.log(response)
        }
    });
}

/**----fuction clear form----- */
function clear(element1, element2, element3,element4) {
    $(element1).val("");
    $(element2).val("");
    $(element3).val("");
    $(element4).val("");
}

/**----Event listener ------ */
$(function () {
    $( "form" ).on("submit",function(e) {
        const name = $('#name').val();
        const email = $('#email').val();
        const message = $('#message').val();
        
        sendMail(name,email,message);
        clear('#name','#email','#message','#number');
        e.preventDefault();
    });
});



