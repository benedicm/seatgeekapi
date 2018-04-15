const url = 'https://api.seatgeek.com/2/events?q=${searchTerm}&client_id=NTI3NjAxNHwxNTIyMjcwMDY2LjI0&client_secret=f2c29864e0377dc90a438fdf2a3c5b70411958af195a3b3dc7717ef04020ff89&q';

function getdatafromAPI(url, searchTerm, callback, render) {
//   const settings = {
//     url: url,
//     data: {
//     q:`${searchTerm}`,},
//     success: render
//   }
//   $.ajax(settings);
  //console.log(events);
}

function render(events) {
  console.log(events);
}
function watchSubmit() {
  $('.js-query-form').submit(event => {
    event.preventDefault();
    const searchTerm = $(event.currentTarget).find('.js-query-event').val();
    console.log(searchTerm);
    $('.js-query-event').val("");
    getdatafromAPI(searchTerm);
  });
                          
}
watchSubmit();