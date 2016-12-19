module.exports = (function(app){
    
    app.get('/:query', function (req, res) {
        
      var query = req.params.query;
      var date;
      var natural;
      var unix;
      
      //check for unix timestamp
      if(/^[0-9]*$/.test(query)){ 
          unix = parseInt(query, 10);
          date = new Date(query*1000);
          natural = naturalLang(date);
      } 
      
      //not unix
      else {
          var arr = query.split('%20').join(' ');
          date = new Date(arr);
          
          
          //check if natural language date
          if(!isNaN(date.getMonth())&&!isNaN(date.getFullYear())&&!isNaN(date.getDate())){ //check if query is a natural language date
              natural = naturalLang(date);
              unix = date.getTime()/1000;
           } 
          
          
         //not a valid date
            else {
                return res.json({'unix':null, 'natural': null});
            }
        }
      
      //return valid date
      return res.json({'unix': unix, 'natural': natural});
    });
});



//Convert date to natural Month DD, YYYY
function naturalLang(date){
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June','July','August','September','October','November','December'];
    
    var month = months[date.getMonth()];
    var year = date.getFullYear();
    var day = date.getDate();
    
    return month + ' ' + day + ', ' + year;
}