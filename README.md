# Biglight CRO Challenge

CRO - Senior Developer challenge

## Dependencies

- NodeJS
- ExpressJS
- SASS

## Server setup

- Open terminal/cmd and navigate to `biglight-cro-challenge`
- Type `npm install`
- Paste this for a self signed certificate: `openssl req -nodes -new -x509 -keyout server.key -out server.cert`
- Fill in info (doesn't have to be real)
- Start the server by typing `node app.js`
- Visit `https://localhost:7000` first and accept that it isn't trusted

## Injector setup

Be sure to add the following lines into the injector

Challenge 1:

- URL pattern: https://www.amazon.co.uk/Echo-Dot-3rd-Gen-Charcoal/dp/B07PJV3JPR/ref=sr_1_2
- File 1: https://localhost:7000/challenge-1/challenge-1.js
- File 2: https://localhost:7000/challenge-1/challenge-1.css

Challenge 2:
- URL pattern: https://www.amazon.co.uk/s?k=Amazon
- File 1: https://localhost:7000/challenge-2/challenge-2.js
- File 2: https://localhost:7000/challenge-2/challenge-2.css


You can now browse the Amazon site using the injector pointed towards the files.

# Explanations
## Challenge 1
Challenge 1 seemed like it was going to be the more difficult one upon first glance. My first attempt was to try to clone the add to basket and quantity elements. However, after spending some time actually thinking about it, I thought it better to go with new buttons and to copy the styles. The current version of Challenge 1 simply overlays a fixed bar as per the brief, and the buttons on said bar are simply simulating a click on the actual buttons on the DOM.

I ran into an issue with this where the site itself wouldn't let a simulated click happen unless the quantity field was in the viewport - to fix it, I added some style changes to the intersection observer, essentially overlaying it in the viewport at all times with a minus z-index and opacity 0 so it doesn't get in the way. This fixed any issues I was running into.

## Challenge 2
Challenge 2 at first was the one I thought was going to be simpler. This is the kind of thing I've worked on so many times during my time at TFG, add a simple box and create a mutation observer to watch for DOM changes to refire the correct function. This wasn't the case, however. No matter if I waited for the window to completely load or even if I had set a setTimeout function, the page simply doesn't exist until it's ready. What ended up fixing it was by adding an attributeFilter to the mutation observer config that started watching specifically for the .s-spinner-parent class in the body.

It isn't the cleanest or most elegant solution, but it seems to be working for now. I'd especially love feedback on this piece!

# Conclusion
Overall I thoroughly enjoyed the challenges, it feels good to use my brain, nothing beats a good workout, especially if it's relavent to one's own field and knowledge. I would love some feedback on these challenges, and am looking forward to hearing from the team. One way or another, it felt good to get my JS muscles working properly again.
