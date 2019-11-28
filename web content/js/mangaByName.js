$(document).ready(function () {

    containerFluid = $(".container-fluid");
    console.log('yo');



    $("#chosen-manga").on("click", function () {
        $findMangaByName = $('#findMangaByName').val();
        console.log('yo');
        containerFluid.show();
        loadMangaData($findMangaByName);

    })

    console.log('yo');


    var loadMangaData = function ($findMangaByName) {
        $.ajax({
            method: "GET",
            url: "https://api.jikan.moe/v3/search/'manga?q=" + $findMangaByName,

        })

            .done(function (response) {
                renderNameResults(response.results);

            });

    }



    console.log('yo');

    var renderNameResults = function (results) {

        var $renderList = $('#render-mangas-list');
        $renderList.empty();

        for (var i = 0; i < results.length; i++) {

            var currentMangaData = results[i];

            var $mangaTemplate = $($("#manga-template").html());
            $mangaTemplate.find('.manga-image').attr('src', currentMangaData.image_url);
            $mangaTemplate.find('.manga-title').text(currentMangaData.title);
            $mangaTemplate.find('.about-manga-info').text(currentMangaData.synopsis);
            //TODO find all tags and fill with data

            //anime-image


            $renderList.append($mangaTemplate);


        }




    }




})