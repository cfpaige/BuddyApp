var token = 'C5PB5LDMQ2KD6MY7AUEO';
var $events = $("#events");
var HTMLTemplate = '';
var queryURL = 'https://www.eventbriteapi.com/v3/events/search/?token='+token
$.ajax({
url: queryURL,
method: "GET"
}).then(function(res){
console.log(res)
if(res.events.length) {
            var s = "<ul class='eventList'>";
            for(var i=0;i<res.events.length;i++) {
                var event = res.events[i];
                console.dir(event);
      // s += "<li><a href='" + event.url + "'>" + event.name.text + "</a> - " + event.description.text + "</li>" + "<img src="+ event.logo.original.url+">";
      HTMLTemplate +=  `
  <div class="card booking-card mb-4">
        
        <!-- Card image -->
        <div class="view overlay">
          <img class="card-img-top" src="${event.logo.url}" alt="Card image cap">
          <a href="#!">
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>
    
        <!-- Card content -->
        <div class="card-body">
    
          <!-- Title -->
          <h4 class="card-title font-weight-bold"><a>${event.name.text}</a></h4>
          <!-- Data -->
          <ul class="list-unstyled list-inline rating">
          </ul>
          <!-- Text -->
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <hr class="my-4">
          <p class="h5 font-weight-bold mb-4">${event.start.local}</p>
      
        </div>
    
      </div>`
            }
            s += "</ul>";
            $events.html(HTMLTemplate);
        } else {
      $events.html("<p>Sorry, there are no upcoming events.</p>");
  
  }

})