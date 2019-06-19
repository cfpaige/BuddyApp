$(document).ready(function() {
    //variables and API variables
    var token = "C5PB5LDMQ2KD6MY7AUEO";
    var $events = $("#events");
    var HTMLTemplate = "";
    var queryURL ="https://www.eventbriteapi.com/v3/events/search/?expand=organizer,venue&token=" + token;
    var date;
    var time;
    var lat;
    var long;
  
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(res) {
      console.log(res);
      if (res.events.length) {
        for (var i = 0; i < res.events.length; i++) {
          var event = res.events[i];
          var eventTitle = event.name.text;
          var eventImage = event.logo.url;
          var eventDescription = event.description.text;
          time = event.start.local;
          lat = event.venue.latitude;
          long = event.venue.longitude;
          console.log(lat);
          console.log(long);
          console.dir(event);
          console.log(event.address_1);
          HTMLTemplate += `
    <div class="card booking-card mb-4">
          
          <!-- Card image -->
          <div class="view overlay">
            <img class="card-img-top" src="${eventImage}" alt="Card image cap">
            <a href="#!">
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>
      
          <!-- Card content -->
          <div class="card-body">
      
            <!-- Title -->
            <h4 class="card-title font-weight-bold"><a>${eventTitle}</a></h4>
            <!-- Data -->
            <ul class="list-unstyled list-inline rating">
            </ul>
            <!-- Text -->
            <p class="card-text">${eventDescription}</p>
            <hr class="my-4">
            <p class="h5 font-weight-bold mb-4">Date:` + " " + `${date}<br> Time:` + " " + `${time}</p>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#events-playing${i}" data-toggle="event${i}">
            Get More Info!
          </button>
          
          <!-- Modal -->
          <div class="modal fade" id="events-playing${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                <!-- Title -->
                <h4 class="card-title font-weight-bold"><a>${eventTitle}</a></h4>
                <!-- Data -->
                <ul class="list-unstyled list-inline rating">
                </ul>
                <!-- Text -->
                <p class="card-text">${eventDescription}</p>
                <hr class="my-4">
                <p class="h5 font-weight-bold mb-4">${event.start.local}</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        
          </div>
      
        </div>`;
        }
        $events.html(HTMLTemplate);
      } else {
        $events.html("<p>Sorry, there are no upcoming events.</p>");
      }
    });
  
    function timeChange(timeconvert){
  
    }
  });

  function ipLookUp () {
    $.ajax('http://ip-api.com/json')
    .then(
        function success(response) {
            console.log('User\'s Location Data is ', response);
            console.log('User\'s Country', response.country);
        },
  
        function fail(data, status) {
            console.log('Request failed.  Returned status of',
                        status);
        }
    );
  }
  ipLookUp()