/*
Coding Steps:
- Using what you've learned this week, create a page of an application that enables 
  users to vote and leave reviews on movies. --> COMPLETE
- All data necessary for this assignment, including Movies and Reviews, can be 
  pulled from an API or you can create the Movies and their Reviews yourself. --> COMPLETE
- Your application must include the following components:
    - MovieList: a container for all the Movie components and their data. --> COMPLETE  
    - Movie: a component that represents movie data 
      (i.e. image, synopsis, rating, etc…) --> COMPLETE
    - Stars: a one to five-star rating component that allows users to rate something 
      (movies in this case, but remember that components are reusable, so you could 
      use it elsewhere!) --> COMPLETE
    - ReviewList: a container inside of a Movie that houses Review components. --> COMPLETE
    - Review: A text review a user can leave on a movie. --> COMPLETE
    - ReviewForm: a form at the bottom of a Movie component that allows users to 
      leave reviews. When submitted, the review should be added to the movie. All 
      this data can be stored in an array, no networking or database needed for 
      this assignment. --> COMPLETE
*/

/* 
Exporting moviesDataAndReviews so the information can be reused in the MovieList
compnonent. 

In this coding assignment, I have chosen to create the movies and their reviews
myself instead of pulling them from an API. The synopsis and rating is from IMDb. 
For the rating, IMDb has a rating system out of 10 stars. To satisfy this assignment 
of having a 5-star rating component, I have divided the rating in half. The imageUrl
was done through Google search and copying and pasting the image address. For the 
reviews, they are made up. 

moviesDataAndReviews is an array of object literals; this is our database with IDs.
    - reviews is an array of object literals as well.
*/
export const moviesDataAndReviews = [
    {
        id: 1,
        title: 'The Great Gatsby (2013)',
        synopsis: 'A writer and wall street trader, Nick Carraway, finds himself drawn to the past and lifestyle of his mysterious millionaire neighbor, Jay Gatsby, amid the riotous parties of the Jazz Age.',
        rating: 3.6,
        imageUrl: 'https://i0.wp.com/elabraveandtrue.com/wp-content/uploads/2021/05/10015929995_79899f4b44_b.jpg?fit=750%2C750&ssl=1',
        reviews: [
            { id: 1, text: 'Leonardo DiCaprio played a great Gatsby!' },
            { id: 2, text: 'Although not perfect to the book, I enjoyed it.' },
            { id: 3, text: 'The choice of music/soundtrack could be better.' }
        ]
    },
    {
        id: 2,
        title: 'Kung Fu Hustle',
        synopsis: 'In Shanghai, China in the 1940s, a wannabe gangster aspires to join the notorious "Axe Gang" while residents of a housing complex exhibit extraordinary powers in defending their turf.',
        rating: 3.9,
        imageUrl: 'https://lateralthinkingtechnology.wordpress.com/wp-content/uploads/2022/08/71m93eonyzl._ac_sl1500_.jpg',
        reviews: [
            { id: 1, text: 'Amazing work! Stephen Chow and the rest of the movie was hilarious!' },
            { id: 2, text: 'Kung fu and comedy, I love it!' },
            { id: 3, text: 'I take kung fu and comedy to seriuosly, I don\'t like it.' }
        ]
    },
    {
        id: 3,
        title: 'Oblivion',
        synopsis: 'Jack Harper, a drone repairman stationed on Earth that has been ravaged by war with extraterrestrials, questions his identity after rescuing the woman who keeps appearing in his dreams.',
        rating: 3.5,
        imageUrl: 'https://m.media-amazon.com/images/I/81eQT1ep-dL._AC_UF894,1000_QL80_.jpg',
        reviews: [
            { id: 1, text: 'Tom Cruise really made me connect to the world of this movie. Definitely a must watch!' },
            { id: 2, text: 'A great sci-fi movie that gets the mind thinking.' },
            { id: 3, text: 'This movie just didn\'t have that "bang" to it.' }
        ]
    },
    {
        id: 4,
        title: 'Evil Dead Rise',
        synopsis: 'A twisted tale of two estranged sisters whose reunion is cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.',
        rating: 3.3,
        imageUrl: 'https://www.heavenofhorror.com/wp-content/uploads/2023/01/evil-dead-rise-1200x900.jpg',
        reviews: [
            { id: 1, text: 'This was a great new take on the Evil Dead film series.' },
            { id: 2, text: 'A lot of gore!' },
            { id: 3, text: 'I am never scared.' }
        ]
    },
    {
        id: 5,
        title: 'Princess Mononoke',
        synopsis: 'On a journey to find the cure for a Tatarigami\'s curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.',
        rating: 4.2,
        imageUrl: 'https://www.chattanoogapulse.com/downloads/30260/download/Princess%20Mononoke%2024%201.png?cb=d5db8835b50ca7078b3503d31629003a&w=1200',
        reviews: [
            { id: 1, text: 'One of my favorite Studio Ghibli movie!' },
            { id: 2, text: 'Do not underestimate the power of animation.' },
            { id: 3, text: 'I think this is cartoon?' }
        ]
    },
]