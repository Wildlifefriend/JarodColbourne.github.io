CSCI 1170
Jarod Colbourne
2024/02/08


   To start all of the html files have consistent headers and footers which
have the navigation bar at the top of every page which is made using a flex box and having 3 items within the box which is aligned to be spaced-around in the flex box.
To change the look of each item I added a tag for each seperate item so I can directed call on them when I was styling the site. How I made the Nav bar work was I used 
a tags and used an href attribute to make it reference the other webpage and put some text and images within the to have something that
you can click to send you to the other webpage. The relative path for the image is (./Images/Home.png). The next thing is just a giant flex box which takes up the entire
screen, which I called the title screen and its just text within 1 items inside a flex box. Next follows just some simple information about me which is sorted using flexboxes
to have them horizontally next to eachother and I used the justify-content CSS code to space the items evenly within the flex box. The last part of the page is a footer which 
is just a flex box which has items for my  my email, github, and youtube links.
Specifically inside the first page, (index.html), the body contains a header tag which says about me
and below if is a p tag which makes a paragraph just telling base information about me. After that is an
image tag which just shows an image of me, and after another paragraph with some more information. Those are sections into flex boxes of their own too so they could be sorted
side by side within the website.

   The second page, (Hobbies.html), is a page which I talk about my hobbies and it starts a title page and below is a bunch of information within a grid which contains information 
on my hobbies that I like to do. the first box has a header and the below that a paragraph talking about it and in the row below is a iframe element which shows a youtube video of
me playing that game. Same things for the next 2 columns but the second uses a video element to import an internal video file within the webpage, and the last part of the grid is just
the inclusion of an audio file, which is a song from minecraft. After all  that information it has just a normal header and paragraph addition to the page which just talks about my
time playing curling and lastly the page end with the contact information at the bottom.

   The third page, (Education.html) follows the same format as the previous with the nav bar and then the title page and information below. But this time it starts with just some basic
headers and paragraph. After that there is another grid which is normal and just seperates 2 sections of information onto the other sides of the page.

   The websites Styling is split into many section, but most of them apply to all of the pages. Firstly the same styling is applied onto the nav bar at the top of the page
which is just shoving the 3 links into a flex box and spacing them out evenly along the top. The text links are colour orange to stand out against the blue background using the color: orange;
code and using a selector which is specified to the nav bar elements, while the image I had to adjust the size of within the CSS code so it wasn't out of place on the top of the page.
The title screen is just a giant flex box with a background-image(url="space.png") and with a large font size so that it takes up a large area of the screen. Below that is all the information
which in CSS is split up into 2 sections, the flex box which is just the information divided vertically, and the grid which is just the header of an information section with a video or audio
file below it and it then moves on to the next column and does the same thing. Finally for all of this there is a universal selector which makes most of all the text in the webpage
a white color so that it contrasts the dark background and makes it easy to read and there is also another thing in the universal selector which changes the font the whole website uses
to something else.

   Newly added javascript file which contains 4 functions to control the form for one of them which uses an event listener to wait for a click on the submit button and then it calls the
function to check if the inputs within the form are right to be submitted, currently the information doesn't go anywhere and it is just the illusion that something does happen. The other
functions within the javascript file control the colour of the background. They correspond to a certain button on the top of the page and whenever they get clicked the onclick attribute within
the button element triggers the corresponding function within the javascript file.

Citations:
Home.png: Anon. 2018. House Free Icons designed by kiranshastry. (May 2018). Retrieved February 8, 2024 from https://www.flaticon.com/free-icon/house_845022 

MailIcon.png: Anon. 81,533 mail icons - free in SVG, PNG, ico. Retrieved February 8, 2024 from https://iconscout.com/icons/mail 

YoutubeIcon.png: Anon. 2018b. YouTube free icons designed by Freepik. (December 2018). Retrieved February 8, 2024 from https://www.flaticon.com/free-icon/youtube_1384060 

GithubIcon.png: Author:           Creative Hive. Creative hive. Retrieved February 8, 2024 from https://creazilla.com/nodes/7912097-git-icon 

JavaIcon.png: Anon. 28,086 java icons - free in SVG, PNG, ico. Retrieved February 8, 2024a from https://iconscout.com/icons/java 

CIcon.png: Anon. 5,822,300 c icons - free in SVG, PNG, ico. Retrieved February 8, 2024a from https://iconscout.com/icons/c 

CSharpIcon.png: SVG Logos et al. 2020. "C sharp (C#) " icon - download for free. (December 2020). Retrieved February 8, 2024 from https://iconduck.com/icons/27153/c-sharp-c 

PythonIcon.png: Anon. File:python-logo-notext.svg. Retrieved February 8, 2024d from https://en.wikipedia.org/wiki/File:Python-logo-notext.svg 

HTMLIcon.png: Anon. 2018b. HTML 5 free icons designed by Pixel Perfect. (February 2018). Retrieved February 8, 2024 from https://www.flaticon.com/free-icon/html-5_732212 

CSSIcon.png: Visual Studio Code Icons et al. 2020. “File type css” icon - download for free. (December 2020). Retrieved February 8, 2024 from https://iconduck.com/icons/101876/file-type-css

Youtube Video: Anon.Retrieved February 8, 2024e from https://www.youtube.com/embed/O1hHwsgHXIg?si=vBCX_6o-Z7GHD8wu

sleepyJardo.png created by Jarod Colbourne

GD.mp4 created by Jarod Colbourne, game created by RobTop from https://www.robtopgames.com

Space.png Anon. 2021. 4k space wallpapers - top free 4K space backgrounds - wallpaperaccess: Geometric space wallpaper, background images wallpapers, free wallpaper backgrounds. (July 2021). Retrieved March 9, 2024 from https://www.pinterest.com/pin/kono--777222848199181033/ 