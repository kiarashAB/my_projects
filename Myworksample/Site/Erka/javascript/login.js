function check_empty()
{
    var text='';
    text= document.getElementById("text").value;
    if (text=='')
        alert('وارد کردن نام کاربری الزامی است')
    else
    {
        var r = confirm ("از صحت اطلاعات وارد شده اطمینان دارید؟")
        if (r == true) {
            document.register.submit();
        }
    }
}