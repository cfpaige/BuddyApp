$(document).ready(function() {
  //variables and API variables
  var token = "C5PB5LDMQ2KD6MY7AUEO";
  var $events = $("#events");
  var HTMLTemplate = "";
  var eventLat = 0;
  var eventLon = 0;
  var town;
  var date;
  var time;
  var queryURL;
  var loop;
  var map, infoWindow;
  getLocation();

  //getting user location without permission sketchy + creepy!!!!
  function getLocation() {
    $.ajax({
      url: "http://ip-api.com/json",
      method: "GET"
    }).then(function(location) {
      town = location.city;
      makeEventCards();
    });
  }
  //converting EventBrite date + time
  function dateTimeConvert(dtime){
    //getting date
    date = dtime.substring(0,dtime.indexOf("T"));
    time = dtime.substring(dtime.indexOf("T") + 1, dtime.length - 3);
    var timeCheck = parseInt(time.substring(0,2));
    console.log(timeCheck);
    if(timeCheck < 12){
      console.log(timeCheck);
      if(timeCheck === 0){
        time = "12" + time.substring(time.indexOf(":"), time.length) + " AM";
      } else{
        time = timeCheck + time.substring(time.indexOf(":"), time.length) + " AM";
      }
    } else{
      timeCheck = timeCheck -12;
      time = timeCheck + time.substring(time.indexOf(":"), time.length) + " PM";
    }
  }

  function createMap () {
    var options = {
      center: { lat: eventLat, lng: eventLon },
      zoom: 10

    };
    map = new google.maps.Map(document.getElementById(`googleMap1`), options);
    infoWindow = new google.maps.InfoWindow;
  }
  


  //Event Card maker + ajax caller inside!
  function makeEventCards() {
    //ajax variables!!!
    queryURL =
      `https://www.eventbriteapi.com/v3/events/search/?location.address=${town}&location.within=50mi&expand=venue&token=` +
      token;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(res) {
      if (res.events.length) {
        for (var i = 0; i < res.events.length; i++) {
          var loop = i;
          var event = res.events[i];
          console.log(event);
          var eventTitle = event.name.text;
          var eventImage = event.logo.url;
          var eventDescription = event.description.text;
          eventLat = parseFloat(event.venue.latitude);
          eventLon =  parseFloat(event.venue.longitude); 
          console.log(eventLat + " " + eventLon)
          time = event.start.local;
          dateTimeConvert(time);
          HTMLTemplate +=
            `
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
            <p class="card-text"></p>
            <hr class="my-4">
            <p class="h5 font-weight-bold mb-4">Date:` +
            " " +
            `${date}<br> Time:` +
            " " +
            `${time}</p>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#events-playing${i}" data-toggle="event${i}">
            Get More Info!
          </button>
          
          <!-- Modal -->
          <div class="modal fade" id="events-playing${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalCenterTitle">${eventTitle}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                <!-- Title -->
                <div id="googleMap1" style="width:100%;height:200px;"></div>
                <h4 class="card-title font-weight-bold"><a>${eventTitle}</a></h4>
                <div class="view overlay">
                <img class="card-img-top" src="${eventImage}" alt="Card image cap">
                <a href="#!">
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
                <!-- Text -->
                <p class="card-text">${eventDescription}</p>
                <hr class="my-4">
                <p class="h5 font-weight-bold mb-4">Date:` + " " + `${date}<br>Time:` + " " + `${time}</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        
          </div>
      
        </div>`;
        }
        $events.html(HTMLTemplate);
        createMap();
      } else {
        $events.html("<p>Sorry, there are no upcoming events.</p>");
      }
    });
  }
});
Collapse



