$(document).ready(function () {

    
    containerFluid = $(".container-fluid");
    console.log('yo');



    $("#chosen-anime").on("click", function () {
        
        $findAnimeByName = $('#findAnimeByName').val();
        console.log('yo');
        containerFluid.show();
        loadAnimeData($findAnimeByName);

    })

    console.log('yo');


    var loadAnimeData = function ($findAnimeByName) {
        $.ajax({
            method: "GET",
            url: "https://api.jikan.moe/v3/search/anime?q=" + $findAnimeByName + "&limit=16",

        })

            .done(function (response) {
                renderNameResults(response.results);

            });

    }


    var renderNameResults = function (results) {

        var isAnimeTemplate = true;

        var $renderList = $('#render-list');
        $renderList.empty();


        for (var i = 0; i < results.length; i++) {
            var currentAnimeData = results[i];

            var $animeTemplate = $($("#anime-template").html());
            $animeTemplate.find('.anime-image').attr('src', currentAnimeData.image_url);
            $animeTemplate.find('.anime-title').text(currentAnimeData.title);
            $animeTemplate.find('.about-info').text(currentAnimeData.synopsis);

            $renderList.append($animeTemplate);

        }

        $('#change-list').on('click', (function () {
            if (isAnimeTemplate == true) {
                $renderList.empty();
                for (var i = 0; i < results.length; i++) {
                    var currentAnimeData = results[i];
                    //anime-image
                    var $animeCardTemplate = $($("#anime-card-template").html());
                    $animeCardTemplate.find('#card-anime-image').attr('src', currentAnimeData.image_url);
                    $animeCardTemplate.find('#anime-explanation').text(currentAnimeData.synopsis);
                    $animeCardTemplate.find('#card-anime-heading').text(currentAnimeData.title);
                    $renderList.append($animeCardTemplate);
                    isAnimeTemplate = false;
                }
            } else {
                $renderList.empty();
                for (var i = 0; i < results.length; i++) {
                    var currentAnimeData = results[i];

                    var $animeTemplate = $($("#anime-template").html());
                    $animeTemplate.find('.anime-image').attr('src', currentAnimeData.image_url);
                    $animeTemplate.find('.anime-title').text(currentAnimeData.title);
                    $animeTemplate.find('.about-info').text(currentAnimeData.synopsis);

                    $renderList.append($animeTemplate);
                    isAnimeTemplate = true;
                }
            }

        }))



    }


});