
$(document).on("scroll", function () {
    if
    ($(document).scrollTop() > 86) {
        $("#banner").addClass("shrink");
    }
    else {
        $("#banner").removeClass("shrink");
    }
});

let buscar = document.querySelector(".buscar");



buscar.addEventListener("click", () => {

    let from = document.querySelector(".origin").value;
    let to = document.querySelector(".destino").value;
    let dateFrom = document.querySelector(".datefrom").value;
    let dateTo = document.querySelector(".dateto").value;
    let adults = document.querySelector(".pasajeros").value;

    event.preventDefault();


    let url = "http://localhost:3000/buscar";
    url += "?from=" + from;
    url += "&to=" + to;
    url += "&dateFrom=" + dateFrom;
    url += "&dateTo=" + dateTo;
    url += "&adults=" + adults;

    fetch(url)
    .then((res) =>{
        return res.json();
    })
    
    .then(res =>{

        mapperJson(res)

    })

})