var site = 'https://www.cineworld.co.uk/syndication/all-performances.xml';
    $.ajax({
        type: 'GET',
        url: "https://query.yahooapis.com/v1/public/yql?q=select%20Status.presence%20from%20xml%20where%20url%20%3D%20'https%3A%2F%2Fwww.cineworld.co.uk%2Fsyndication%2Fall-performances.xml'&format=xml&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        dataType: 'html',
        success: function(data) {
            $('#container').append($(data).find('results'));
        }
    });
