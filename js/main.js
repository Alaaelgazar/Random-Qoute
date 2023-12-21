var qoutes =[
    {
        qoute:"“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
        author:"― Mark Twain",
        image:'  <img src="images/1069006._UX200_CR0,44,200,200_.jpg" >'
    }, 
    {
        qoute:"“We are all in the gutter, but some of us are looking at the stars.”",
        author:"― Mark Twain",
        image:'<img src="images/1077326._UX200_CR0,15,200,200_.jpg" >'
    },
    {
        qoute:"“Without music, life would be a mistake.”",
        author:"― Friedrich Nietzsche" ,
        image:'<img src="images/1265._UX200_CR0,4,200,200_.jpg" >'
    },
    {
        qoute:"““It does not do to dwell on dreams and forget to live.”",
        author:"― Mark Twain",
        image:'<img src="images/4184579._UX200_CR0,37,200,200_.jpg">'
    },
    {
        qoute:"“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        author:"― Mahatma Gandhi",
        image :'<img src="images/5810891._UX200_CR0,21,200,200_.jpg">'
    },
    {
        qoute:"“Always forgive your enemies; nothing annoys them so much.”",
        author:"― Oscar Wilde",
        image:'<img src="images/3565._UX200_CR0,15,200,200_.jpg" >'
    },
    {
        qoute:"“Be yourself; everyone else is already taken.”",
        author:"― Oscar Wilde",
        image:'<img src="images/4184579._UX200_CR0,37,200,200_.jpg">'
    },
    {
        qoute:"“You only live once, but if you do it right, once is enough.”",
        author:"― Mae West",
        image:'<img src="images/5810891._UX200_CR0,21,200,200_.jpg">'
    },
    {
        qoute:"“Be the change that you wish to see in the world.”",
        author:"― Mahatma Gandhi",
        image: '<img src="images/81466._UX200_CR0,46,200,200_.jpg">'
    },

    {
        qoute:"“To live is the rarest thing in the world. Most people exist, that is all.”",
        author:"― Oscar Wilde" ,
        image : '<img src="images/3565._UX200_CR0,15,200,200_.jpg" >'
    }
]
var images =[];
var images =document.getElementById("image");
var qoute =document.getElementById("quote");
var author =document.getElementById("author");

function quote(){
    const randomm = Math.floor(Math.random()*qoutes.length);
    qoute.innerHTML=qoutes[randomm].qoute;
    author.innerHTML=qoutes[randomm].author;
    images.innerHTML=qoutes[randomm].image;
}





