getVideoUrl = function (selected) {
    let videoSelection = selected;
    $('#video').html(`<iframe width="640" height="340" src=${videoSelection}>
      </iframe>`);
  };
  meetThe = function(selectedTeam) {
    switch (selectedTeam) {
      case 'soundTeam':
        $('#meetTeam').html(
          `
          <h3>The Sound Designers</h3>
          <p>
            <span class="team-description">
              This team curated all of the sound effects heard throughout the game, including the ambient noises of the ocean and subtle sounds played upon picking up trash.
            </span>
            <ul class="list-items">
              <li>Kenji Cano</li>
              <li>Sahan Jayalath</li>
              <li>Odalys Sanchez</li>
              <li>Justin Philip</li>
            </ul>
          </p>
          `);
        break;
        case 'productManagers':
          $("#meetTeam").html(
            `
            <h3>The Product Managers</h3>
            <p>
              <span class="team-description">
                This team oversaw the general aspects of the project, and provided assistance to other groups in order to get necessary tasks completed in time.
              </span>
            <ul class="list-items">
              <li>Hiuling Yen</li>
              <li>Patrick Rufino</li>
              <li>Giancarlo Macias</li>
              <li>Renuka Sookdeosingh</li>
            </ul>
            </p>
            `);
          break;
        case 'programmers':
          $("#meetTeam").html(
            `
            <h3>The Programmers</h3>
            <p>
              <span class="team-description">
                This team worked on creating the scripts needed for the game’s player mechanics, including player movement, the ability to grab objects, and more.
              </span>
              <ul class="list-items">
                <li>Edwin Bishop</li>
                <li>Shanice Smith</li>
                <li>Nicholas Ramdin</li>
                <li>Edwin Samaniego</li>
              </ul>
            </p>
            `);
          break;
        case 'designers':
          $("#meetTeam").html(
            `
            <h3>The 3D Designers</h3>
            <p>
              <span class="team-description">
                This duo designed and developed the environment of the game using the Unity game engine. They implemented various 3D objects, materials, and other assets to create this world.
              </span>
              <ul class="list-items">
                <li>Julian Frost</li>
                <li>Bryan Pierre-Louis</li>
              </ul>
            </p>
          `);
          break;
        case 'interviews':
            $("#meetTeam").html(
                `
                <h3>Interviews</h3>
                <p>
                <span class="team-description">These individuals kindly shared their stories and knowledge regarding their experiences as environmental and social justice advocates, allowing us to accurately craft this project.</span>
                <ul class="list-items">
                    <li>Maxi Cohen</li>
                    <li>Dioganhdih</li>
                    <li>Lou Harris</li>
                    <li>Sto Len</li>
                    <li>Amber Payne</li>
                    <li>Saylor Pochan</li>
                    <li>Rayner Ramirez</li>
                    <li>Rachel Shragis</li>
                    <li>Don "Guardian of Jamaica Bay" Reipe</li>
                </ul>
                </p>
            `);
            break;
    }
  };