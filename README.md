![WINELOGO!](https://github.com/Halleywood/PourDecisionsFrontEnd/assets/87944545/33b9d143-9bbc-49c1-bb5a-06dd59f6c301)

This Angular front-end application complements the Java RESTful API Backend to create a full wine tasting note experience. With a focus on interactivity, the application provides users with a seamless interface for managing their wine-related activities. Leveraging a robust security service, the application ensures secure access to protected data resources by handling the user's JWT (JSON Web Token). By employing the AuthGuard mechanism, the application restricts access to routes only for authenticated users. 
The user is then greeted by a homepage that displays their profile with custom picture, username, and quirky tagline. Because drinking wine doesn't have to be serious business. From the homepage a user can navigate to the wines section where they can see all wines in the database, or search by their favorite varietal. Clicking on a wine reveals comprehensive details, including user-generated reviews and opinions. It allows users to join the conversation, sharing their own thoughts and engaging with their friends' reviews. With a strong emphasis on user interaction and customization, the application offers a visually appealing and informative wine exploration experience.
Ultimately, my API empowers wine enthusiasts with a seamless and secure platform to share their pour decisions, explore new wines, and connect with those with a grape passion for vino! Cheers to making pour decisions together!

##  Tools and Technologies
* Angular Framework
* TypeScript
* The Angular Command Line Interface
* Node.js and npm
* Angular Material
* RxJS
* Angular Router
* HttpClient
* AuthGuard 

## General Approach
*   Once i had set up the backend to retrieve and send data, I created this Angular application to fetch that data and display it for the end user. This application modularizes code into components that each perform a specific functionality like displaying data or transferring it between other components. 
* In order to gain access to the private endpoints, I needed to manage the Json Web Token emmited by the Java API. Originally I wanted to learn about storing that token in an HttpCookie with a flag set to secure, but do to time constraints and the complex nature of creating an entire full stack application, I decided to store the JWT in SessionStorage. I opted for Session instead of Local so that it did not stay in the browser longer than it need to. 
* Once the user provides their email and password and the the Java backend sends back the JWT, this Angular application stores that in SessionStorage and then I used an Interceptor to listen for and HTTP requests and it automatically generates the header for us. 
* Upon successfull HTTP requests, this application receives the information and displays it dynamically for the user.  

## Hurdles and Wins 
#### Implementing the security on the front end
  * This was both a win and a hurdle. There were a few times when I thought I should just scrap this goal in fear I would run out of time, but I was able to set up my Auth service utilizing AuthGuard for protected routes and a JWT Service for grabbing the JWT from the login response and handling it accordingly. I ended up using SessionStorage over LocalStorage to really ensure that the authentication and authorization was indeed happening and it wasn't a bug. 

* I did have a very hard time trying to parse the login response accordingly...at one point I had made a very complicated custom Regex method to splicing the JWT "string". 
* And then further into the project I learned about JSON.parse() and I was able to extract the JWT in two lines of code. 👿
![customJWTmethod](https://github.com/Halleywood/PourDecisionsFrontEnd/assets/87944545/bee25a64-2790-432f-9256-ed4bfbcfba88)
#### Interceptors
    * Here's a win! 
![interceptorScreenShot](https://github.com/Halleywood/PourDecisionsFrontEnd/assets/87944545/9b1a258e-bcbc-42f0-8d97-ef034e89d501)
#### Json Ignore 
 * Issues with JSON Ignore on the backend, not having my data constructed the way I would have liked on the front end. This really stressed to me the importance of creating a clickable prototype to get that user feedback from the beginnning. 
    ![error3](https://github.com/Halleywood/PourDecisionsFrontEnd/assets/87944545/6c501b30-1f3a-456d-9103-bb9a414f6246)
####    Concurrency Issues
* Concurrency Issues: When I was deleting a post, I wanted it to update the View in real time. But I ended up getting this concurrency error where I was deleting the post and then deleting the post again but it had already been deleted. 
![concurrencyIssuecode](https://github.com/Halleywood/PourDecisionsFrontEnd/assets/87944545/87d563f0-bbf7-45a2-b31c-380747682817)

#### Understanding Observables
  * I initially struggled to comprehend the concept of Observables. It took me some time to grasp when to create an Observable and when to subscribe to it. I made the mistake of attempting to use the subscribe() method directly after an httpClient request, without realizing that it should be used within the Service component.
    Additionally, working with higher-level functions provided by Observables proved challenging. These operators offer great power but can also lead to confusion and headaches when not used correctly.

## Resources 
* Angular is a powerful, comprehensive framework that I knew we had only scratched the surface on. We had worked with Spring Security on the backend, and it was important that I try and implement security on the front end as well to full grasp the importance and the complexity of protecting user and resource data. I would like to thank the following sources for filling in more than just a few blanks and really showing me the power of Angular! 
  * Using Angular Forms for capturing user input: [Angular Forms On Youtube](https://www.youtube.com/watch?v=t6BpRxV4b0M)
  * AuthGuard for protecting routes: [Geeks For Geeks Tutorial](https://www.youtube.com/watch?v=t6BpRxV4b0M)
  * Understanding Interceptors: [HttpClient and Http Interceptors](https://medium.com/@ryanchenkie_40935/angular-authentication-using-the-http-client-and-http-interceptors-2f9d1540eb8)
  * Angular and Spring Security: [YouTube Angular with Spring Security](https://www.youtube.com/watch?v=-Aob4HfEWg4)
  * Incorporating JWT with Angular: [JWT Authentication Tutorial](https://jasonwatmore.com/post/2018/05/23/angular-6-jwt-authentication-example-tutorial)

## Installation Instructions
* Ready to try this application on your own? 
###### Prerequisites: You will need Node.js and NPM installed on your local machine!
  * You can checkout to see if you have them install by typing the following commands in your terminal: 
    ``` 
    node -v
    npm -v
    ```

* If You do not have either, you can visit https://nodejs.org to download and review specific installation instructions! 
###### Downloading from Git and Running on your Machine: 
* In your terminal, navigate to the directory of your choice and run the following command 
  ```
  git clone https://github.com/Halleywood/PourDecisionsFrontEnd.git
  ```
* Navigate into the project directory by running the followign command
  ```
  cd PourDecisionsFrontEnd
  ```
  Then run this command 
  ```
  npm install
  ```
* Ok, now run the following command to start the server and open on your browser 
  ```
  ng serve --open
  ```
###### * Remember to have the backend application running too! 