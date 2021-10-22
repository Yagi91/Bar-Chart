  # Bar-Chart

*TABLE OF CONTENT*
- [Description of Project](#description).
- [LINK to app](https://yagi91.github.io/pomodoro-clock/).
- [Tools Used and why I choose them.](#tools).
- [User Stories and functionality of the clock](#users-story-completed-and-added-functionality-of-the-clock).
- [Problems Encountered](#problems-faced).
- [Credit](#credits).

### Description
THis a bar chart that shows the relation of the GDP of the US in relation to the years.More Information: (http://www.bea.gov/national/pdf/nipaguid.pdf)


### TOOLS:
- Vanilla JS; It was easier to build with Javascript as the website does not require to do many things.
    nested rules, inline imports and more
- HTML5/CSS6
- D3.js: a Huge JavaScript libary that can be used to reprsent data, its very flxible thn most of the other ones out therelike chart.js though difficult to implement.;
- AJAX: with xhr element which is still widely sipported accross multiple browsers than the fetch API.
## USERS STORY COMPLETED and ADDED FUNCTIONALITY OF THE CLOCK
- User is sees a Title of Bar chart.
- Bottom and left axis are present.
- Rectangles representing bars.
- Each bar has a property of data-date and data-gdp containing the date and GDP.
- Each bar element's height accurately represent the data's corresponding GDP .
- I can mouse over an area and see a tooltip with a corresponding `id="tooltip"` which displays more information about the area.
-  My tooltip should have a data-date property that corresponds to the data-date of the active area..

### PROBLEMS FACED
This beign my first Data Vizualization project ever usig the D3.js libary it was difficult to put everything together after learning with combination of AJAX.
Also faced lot of problems in scaling my data and getting the right orientation to place on the axis.

#### CREDITS
This Bar-chart was created after completing my Data vizualization course on [FREE CODE CAMP](https://www.freecodecamp.org/).
