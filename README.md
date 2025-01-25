# FoodDietApp

This app allows users to figure out how much food they can eat at certain restaurants within calorie limits. Using session storage, the user's information is passed on from each page and used to make calculations on food choices.
**Link to Project:** https://jesusz4751.github.io/FoodDietApp/
![Image of a group of people eating food together.](https://d3ogid48m9qz16.cloudfront.net/project-example.webp)

## How it's made:

**Tech used:** HTML, CSS, JavaScript, AWS S3/CloudFront

First, I designed the UI using Figma. I wanted to get a general outline of what the website would look like before implementing any code since this would make the designing process much simpler. I then went through the process of creating the base html and css of the program.

Once I finished with the overall development of the styling, I began to plan out how the code would work out. I created a flowchart to plan out how the different pages would interact with each other, and then planned a way to store the data I would need to use throughout different pages.

I looked at a couple of different ways I could store user data, but I decided to use session storage since it only stored the data in the current session and didn't create any permanent files in the user's computer. Since this program is very short and doesn't require any data to be transferred from one usage to the next, I didn't see a need to use a more permanent storage system like MongoDB or local storage since the program's calculations in one usage wouldn't affect how the program is used the next time.

## Optimizations

After I finished creating the program, I noticed that there was a lot of repeated code in different sections that could easily be fixed by refactoring the code. I created two classes for this purpose, foodItem and popupItem, and stored all of the repeated code in there. This not only made it much easier to read the code in the individual js pages, but it also allowed me to more easily alter the code in the future when I needed to change the functionality of one of the methods.

Another thing I did to optimize my program is with the image in the main page. At first, I loaded it from a file in the directory. While this isn't nescessarily bad, I found that I could improve it by caching the image to load it faster in the future. By doing this, the image doesn't need to fully load up in the future and the program can load much faster. I stored the image in AWS S3 and read it using Cloudfront. This allowed the contents in the S3 bucket to remain private and secure while still being read and cached by the user. I also decided to preload the image in the program since this would ensure that the image would always appear the instant that the main page gets opened.

## Lessons Learned:

In previous projects I've worked on, I've always started by coding first and then designing the website as I went, but I found that it would never look the way that I wanted to and would end up spending more time designing the website rather than the code that made it function properly. I was originally going to do the same thing with this website, but I decided to try something different and instead design it using another program before coding anything. I found that designing it beforehand made the process much less frustrating and made it look better overall. This is something that I'm definitely going to continue implementing in future projects.

Another thing that I had to learn was the differences between the different storage methods and why a programmer would choose one over the other. I opted for the one that made the most sense for this program, but I gained a much greater understanding of what the other storage methods could do.

Finally, I had to completely learn AWS from scratch. I had never used a program like this before and I had to go through a lot of documentation, but I was able to ultimately figure out how to store and read images from a cloud based service. It made my program run smoother and faster since it could now cache images and store them for future usage.
