apiClient = (function () {
    return{
        getCityInfo: function (name) {
            return app.getCityInfo(name, function (weather) {
                var data = $("#ApiTable");

                var data = JSON.parse(weather);
                console.log(data.values());
                data.forEach(function (valor, indice, array) {
                    console.log(valor);
                    var lol = "<tbody>" +
                            "<tr>" +
                            "<td>" + name + "</td>" +
                            "<td>" + valor.airportId + "</td>" +
                            '<td>' + valor.name + "</td>" +
                            '<td>' + valor.city + "</td>" +
                            '<td>' + valor.cityId + "</td>" +
                            '</tr>' + "</tbody>"
                    var btn = document.createElement("TR");
                    btn.innerHTML = lol;
                    document.getElementById("ApiTable").appendChild(btn);


                });

            });
        }
    }
})();