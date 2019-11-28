$(document).ready(function(){

    var container = $("#containerLists")

    $("#watashiPage").on("click", function () {
        
        
            container.show();
            loadData(renderMangaResults);
        

        console.log("yo");
    })


    var loadData = function(){
        $.ajax({
            method: "GET",
            url: " https://api.jikan.moe/v3/search/anime?order_by/score/10.0&limit=5"

        })

            .done(function (response) {
                renderMangaResults(response.results);
                
                
            });
    } 


    var renderMangaResults = function(results){

        var $renderList = $('#render-top-mangas');
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