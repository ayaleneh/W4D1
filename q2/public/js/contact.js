$(function(){
 

    function success(data)
    {
        console.log(data);
        let elem = `<pre>${data}</pre>`;
        $('#body').append(elem);
    }
    function fail(xhr, status, exception)
    {
        $('#body').append(`<p>Failled to get data</p>`);
    }

    fetch("./js/contactinfo.txt").then(data => data.text()).then(success).catch(fail);
})