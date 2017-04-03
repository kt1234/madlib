function makeStory() {
    // get form values (2 points)
    var noun1 = document.getElementById('noun1').value;
    var noun2 = document.getElementById('noun2').value;
    var verb1 = document.getElementById('verb1').value;
    var verb2 = document.getElementById('verb2').value;
    var plural_noun1 = document.getElementById('plural_noun1').value;
    var verbing1 = document.getElementById('verbing1').value;
    var verbing2 = document.getElementById('verbing2').value;
    var birdtype1 = document.getElementById('birdtype1').value;
    var name1 = document.getElementById('name1').value;
    var adjective1 = document.getElementById('adjective1').value;
    var adjective2 = document.getElementById('adjective2').value;
    var birdtype1 = document.getElementById('birdtype1').value;
    var room1 = document.getElementById('room1').value;
    var verb_past_tense1 = document.getElementById('verb_past_tense1').value;
    var liquid1 = document.getElementById('liquid1').value;
    var body_part1 = document.getElementById('body_part1').value;
    var birdtype2 = document.getElementById('birdtype2').value;

    // Set title of story. Use at least one form value in the title. (2 points)
    var title = birdtype1 + " Dinner";


    // Build story. you can add as many paragraphs as you like. (3 points)
    var paragraph1 = "It was a " + adjective1 + " ,cold November day. I woke up to the " + adjective2 +
              " smell of " + birdtype2 + " roasting in the " + room1 + "downstairs. I " + verb_past_tense1 +
              " down the stairs to see if I could help " + verb1 + " the dinner. My mom said, 'See if " + name1 +
              " needs a fresh " + noun1 + ".' So I carried a tray of glasses full of " + liquid1 + " into the " + verbing1 +
              " room. When I got there, I couldn't believe my " + body_part1 + " ! There were " + plural_noun1 + verbing2 +
              " on the " + noun2 + "!";

    // Display story by putting title & paragraphs into appropriate divs. (3 points)

    document.getElementById('title').innerHTML = title;
    document.getElementById('one').innerHTML = paragraph1;

}
