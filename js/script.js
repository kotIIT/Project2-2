function success() {
    alert("Thank you! Your message has been sent successfully.");
}
$(document)
    .one('focus.autoExpand', 'textarea.autoExpand', function() {
        var savedValue = this.value;
        this.value = '';
        this.baseScrollHeight = this.scrollHeight;
        this.value = savedValue;
    })
    .on('input.autoExpand', 'textarea.autoExpand', function() {
        var minRows = this.getAttribute('data-min-rows') | 0,
            rows;
        this.rows = minRows;
        rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 16);
        this.rows = minRows + rows;
    });

function initMap() {
    var isud = {
        lat: 52.2296756,
        lng: 21.012228700000037
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: isud
    });
    var marker = new google.maps.Marker({
        position: isud,
        map: map
    });
}
