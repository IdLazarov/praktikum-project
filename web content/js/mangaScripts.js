$(document).ready(function () {

    containerFluid = $(".container-fluid");

    $(":checkbox").on("change", function () {
        var chosenCheckbox = $(this).val();
        if (this.checked) {
            console.log("Checkbox is checked.");
            containerFluid.show();
            loadMangaData(chosenCheckbox);
        }

        console.log("yo");
    })





    var loadMangaData = function (chosenCheckbox) {
        $.ajax({
            method: "GET",
            url: " https://api.jikan.moe/v3/search/anime?genre=" + chosenCheckbox,

        })

            .done(function (response) {
                renderMangaResults(response.results);
                
            });

    }

    var renderMangaResults = function(results){

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


});