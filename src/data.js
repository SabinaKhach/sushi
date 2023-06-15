import caliRoll from './assets/images/caliRoll.png';
import goldSushi from './assets/images/goldSushi.png';
import niuRoll from './assets/images/niuRoll.png';
import sakeFurai from './assets/images/sakeFurai.png';
import gorosSushi from './assets/images/gorosSushi.png';
import uniSushi from './assets/images/uniSushi.png';
const data = [
    {
        id: 1 + Date.now(),
        image: caliRoll,
        title: 'California Roll',
        price: 22.90,
        description: 'A California roll is a fresh take on traditional Japanese rice rolls. Filled with avocado, crab, and cucumber, it is fresh and crunchy and makes a filling meal. You can use real or imitation crab.',
        ingridients: ['avocado','crab','cucumber','rice']
    },
    {
        id: 2 + Date.now(),
        image: goldSushi,
        title: 'Gold Sushi',
        price: 100000000,
        description: 'The new golden toro maki sushi roll brings a high roller experience with its chopped blue fin tuna, tempura flakes, and takuan (pickled daikon), all topped with toro (fatty tuna), fried ginger, 24-karat gold leaf, and Ossetra caviar.',
        ingridients: ['blue fin tuna','tempura flakes','takuan','24-karat gold leaf']
    },
    {
        id: 3 + Date.now(),
        image: niuRoll,
        title: 'Niu Roll',
        price: 29.90,
        description: 'Niu roll is a type of sushi roll that is popular in Japanese cuisine. It is a unique roll that features crab meat, avocado, and cucumber, rolled with rice and seaweed. The crab meat is typically mixed with Japanese mayo, and the avocado and cucumber add a refreshing crunch to the roll. The roll is then sliced into bite-sized pieces and served with soy sauce, wasabi, and pickled ginger. Some variations of the niu roll might include shrimp tempura or eel, but the classic version remains a popular and delicious choice.',
        ingridients: ['crab meat','avocado','cucumber','seaweed','cocacola']
    },
    {
        id: 4 + Date.now(),
        image: sakeFurai,
        title: 'Sake Furai',
        price: 21.90,
        description: 'Sake furai is a popular Japanese dish typically made using fresh salmon that has been coated in breadcrumbs or panko and deep-fried until golden and crispy. The word "sake" in this context refers to salmon, not the Japanese rice wine. The dish is often served with shredded cabbage and a side of Japanese rice. Sake furai is a popular dish in Japanese cuisine and is commonly found in Japanese restaurants around the world. It is a delicious way to enjoy high-quality salmon and is a popular choice for those who love seafood and fish dishes.',
        ingridients: ['sake','shredded cabbage','cherries']
    },
    {
        id: 5 + Date.now(),
        image: gorosSushi,
        title: 'Goros Sushi',
        price: 32.90,
        description: 'Goros sushi is a unique fusion of Japanese and Latin-American cuisine, offering a satisfying blend of flavors and textures. This tasty sushi roll features fresh salmon or tuna mixed with spicy jalapeno, ripe avocado, and a drizzle of zesty lime sauce. The roll is then topped with crunchy tempura flakes for an added touch of texture and flavor. The name Goros perfectly matches the boldness and spiciness of this delectable sushi roll.',
        ingridients: ['tuna','salmon','jalapeno','avocado','lime sauce','cotton candy']
    },
    {
        id: 6 + Date.now(),
        image: uniSushi,
        title: 'Unagi Roll',
        price: 22.90,
        description: 'The unagi roll is a popular sushi roll that features freshwater eel as the main ingredient. Slices of tender, grilled eel lay atop a bed of seasoned rice, wrapped in crisp nori seaweed. The roll is accented with creamy avocado slices and a drizzle of sweet and savory eel sauce, adding a rich umami flavor to each bite. The unagi roll is a favorite among sushi lovers, known for its delicate balance of flavors and textures.',
        ingridients: ['freshwater eel','avocado','chocolate','avocado','eel sauce']
    },
]

export default data;