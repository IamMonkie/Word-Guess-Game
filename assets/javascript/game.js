// makes sure that the JavaScript doesn't get run until the HTML is finished loading
$(document).ready(function () {

    //variables
    var remainingGuesses = 10;
    var remainingLetters;
    const guesses = [];
    var guessCounter;
    // let puzzleHidden = [];
    var categoryList = ["US Cities", "Movie Titles"];
    var usCapitalCities = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];
    var movieTitles = ["Star Wars", "Jurassic Park", "Avengers", "The Incredibles", "Batman", "Finding Nemo", "Finding Dori", "Pirates of the Caribbean", "The Lion King", "Toy Story", "Wonder Woman", "The Hunger Games", "Jumanji", "Titanic", "The Sound of Music", "Alien", "Paranorman", "Coraline", "Monsters Inc", "Indiana Jones and the Raiders of the Lost Ark", "Indiana Jones and the Temple of Doom", "Indiana Jones and the Last Crusade", "Tron", "Tron Legacy", "The day after Tomorrow", "Edge of Tomorrow", "Mission Impossible", "Star Trek", "Bullitt", "Dirty Harry", "The Outlaw Josey Wales", "Pulp Fiction", "Kill Bill", "Enter the Dragon"];
    var puzzle;
    var wins = 0;
    var losses = 0;
    var guessCorrect = [];
    var guessWrong = [];
    var currentWord;

    var directionsText = document.getElementById("directions-text");
    var categoryText = document.getElementById("category-text");
    var puzzleText = document.getElementById("puzzle-text");
    var remainingText = document.getElementById("remainingGuesses-text");
    var guessesText = document.getElementById("guesses-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var userText = document.getElementById("user-text");

    // Start/ reset button
    $("#resetBtn").on("click", function () {
        
        //change start button to reset button
        resetBtn.innerHTML = "Reset";
        $(this).addClass('btn-danger').removeClass('btn-success');
        reset();

        function reset() {
            
            //reset values & user inputs
            guesses.length = [];
            guessCorrect = [];
            guessWrong = [];
            userGuess = [];
            remainingGuesses = 10;
            document.getElementById('remainingGuesses-text').innerHTML = "GUESSES REMAINING: " + remainingGuesses;
            
            // Hide the directions
            directionsText.textContent = "";
            
            }
        
        //select a random category & word
        var randomCategory = Math.floor(Math.random() * categoryList.length);
            if (randomCategory === 0) {
                puzzle = usCapitalCities;

                var randomPuzzle = Math.floor(Math.random() * usCapitalCities.length);
                
            }
            else if (randomCategory === 1) {
                puzzle = movieTitles;

                var randomPuzzle = Math.floor(Math.random() * movieTitles.length);
                
            }
            
            currentWord = puzzle[randomPuzzle];
            console.log("CURRENT WORD: " + currentWord);
            

        //Hide Puzzle
        let puzzleHidden = [];
        let generateUnderscore = () => {
            for (let i = 0; i < currentWord.length; i++) {
                
                if(currentWord.charAt(i) !== " ") {
                    puzzleHidden.push("_");
                } 
                else {
                    puzzleHidden.push(" ")
                } 
            }
            return puzzleHidden;
        };

        //Display current category
        categoryText.textContent = categoryList[randomCategory];

        //Display current hidden puzzle
        puzzleText.textContent = generateUnderscore();
        
        //Record player guess
        if(remainingGuesses >=0) {
            allowInput();
        };

        function allowInput() {
        document.onkeyup = function (event) {
            
            
            let userGuess = String.fromCharCode(event.keyCode);
            //sort guesses
            if (currentWord.indexOf(userGuess.toLowerCase()) > -1 || 
                currentWord.indexOf(userGuess.toUpperCase()) > -1) {
              //add to guessCorrect
              guessCorrect.push(userGuess)
                  
                updateWord();            
                             
            } else { //add to guessWrong
             guessWrong.push(userGuess);
             guesses.push(userGuess);
             remainingGuesses--;
             console.log("guesses: " + guesses);
                console.log("correct guesses: " + guessCorrect);
                console.log("wrong guesses: " + guessWrong);
            remainingText.textContent = "GUESSES REMAINING " + remainingGuesses;
            };

            if(!puzzleHidden.includes('_')) {
                wins++;
                document.getElementById("wins-text").innerHTML = "WINS: " + wins;
                swal("YOU WIN!", "PRESS RESET TO TRY AGAIN", "success");
                
                return;
            }

            if(remainingGuesses === 0) {
                losses++;
                document.getElementById("losses-text").innerHTML = "LOSSES: " + losses;
                swal("YOU LOSE!", "PRESS RESET TO TRY AGAIN", "error");
                
                return;
            }

            function updateWord() {

                for (i = 0; i < currentWord.length; i++) {
                    if (currentWord.charAt(i).toUpperCase() === userGuess.toUpperCase()) {
                        puzzleHidden[i] = userGuess.toUpperCase();
                    };
                };
                puzzleText.textContent = puzzleHidden.join('');
                console.log(puzzleHidden);
            };
        };

             
        }
        

               
            
         
    });
    


    
}); // ready close






