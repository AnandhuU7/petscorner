export interface Bird {
    breed: string;
    origin: string | null;
    rating: number;
    id: number | null;
    lifeExpectancy: {
        from: number;
        to: number;
    };
    breedAppearance: string | null;
    breedHighlights: string;
    weight: {
        from: number;
        to: number;
    } | null;
    height: {
        from: number;
        to: number;
    } | null;
    litterSize: number | null;
    history: string | null;
    originally: string | null;
    currentlyUsedAs: string | null;
    training: string | null;
    healthCare: string | null;
    livingCondition: string | null;
    excersie: string | null;
    grooming: string | null;
    pros: string[];
    cons: string[];
    imageURL: string;
}

export const BIRDS: Bird[] = [
    {
        breed: `Dove`,
        origin: `Europe, North Africa and Asia.`,
        rating: 6.5,
        id: 405,
        lifeExpectancy: {
            from: 10,
            to: 25
        },
        breedAppearance: `Plump-bodied and long-tailed, with short legs, small bill, and a head that looks particularly small in comparison to the body. The long, pointed tail is unique among North American doves.Plump-bodied and long-tailed, with short legs, small bill, and a head that looks particularly small in comparison to the body. The long, pointed tail is unique among North American doves.`,
        breedHighlights: `Doves are common birds with a very symbolic history. Many religions and cultures celebrate doves as a symbol of peace. The Christian religion uses the dove as a symbol of God, while other cultures release doves into the sky at ceremonies, weddings, and other important events.`,
        weight: {
            from: 5,
            to: 8
        },
         height: {
            from:11,
            to:13
         },
        litterSize: 2,
        history: `While ring-neck doves originally hail from Africa, there are other dove species indigenous to places all over the world. For example, fruit doves are endemic to Australia while mourning doves are one of the most prolific and widely recognized wild bird species in North America. Only the aridest areas of the Sahara and the coldest arctic regions are without some species of the Columbidae suborder. 
        Different dove species prefer different habitats, and while overall this is not a group that is endangered, roughly 59 of the more than 300 species are threatened with extinction. 
        In the wild, the Streptopelia risoria form that is native to Africa is highly dependent on the presence of water, and it eats primarily seeds, supplemented with fruits and berries. Provided enough water and food sources are present, it can inhabit nearly any environment, from grasslands to dense forests. This hardiness and adaptability makes S. risoria the favorite breeding stock for domestic doves.  `,
        originally: `Originally native to the Indian subcontinent, Eurasian collared-doves began to wander northwestward into Asia and Europe in the 1600s. By the 1930s collared doves began a rapid range expansion in Europe.`,
        currentlyUsedAs:`They are currently used as a pet.`,
        training: `Get to know your dove. This is often referred to as body handling. Spend time with your bird. Be gentle and patient. Gently lift its wings and play with its feet. Pet the bird as often as possible to let it become familiar and comfortable with being held. Show attention and love. No bird or animal desires to learn out of fear. These birds are affectionate and are happiest and respond best when they are treated kindly and have other doves around them. Reward your birds with small whole seed treats such as millet, canary grass, wheat and cracked corn as you work with them. You are teaching a form of operant conditioning where the dove will learn that performing certain actions will result in being fed special treats. Observing the doves' body language and becoming accustomed to their preferences will help you respond to them in a way that results in better communication.`,
        healthCare: `Doves are prone to infection from the parasite Trichomonas gallinae, commonly known as canker. Symptoms include discoloration or sores around the mouth, and sometimes diarrhea. It can be treated with anti-parasite medications and can be prevented with good hygiene and regular cleaning of cages. 
        Doves that do not receive enough direct sunlight are prone to vitamin D deficiency. Birds kept indoors should be supplemented with UV lighting.
        Beautiful, charming, and easy to care for, doves make excellent pets for those who are interested in owning a pet bird but don't quite feel ready to take on a more difficult bird, such as a parrot. Doves are very common pets, and it is worth checking with rescue organizations and animal adoption agencies. These birds breed so readily in captivity that orphaned birds are frequently available. Doves are also easily found in specialty aviary pet stores and from breeders. `,
        livingCondition: `Doves have different housing needs than parrots. Doves are unable to climb up the cage bars like parrots ca; instead they move about by flying back and forth, which makes a wide cage an important feature. Offer a variety of perch styles and of varying diameters, which will help promote good foot health in your dove. Doves also need opportunities for bathing.`,
        excersie:`Doves are not chewing birds, so they do not require a lot of toys. They do, however, require plenty of free flight time for exercise. If kept outdoors, make sure the aviary is large enough to provide flight space. If kept indoors, your bird should be allowed several hours of out-of-cage flight time in a safe environment (makes sure they can't escape).`,
        grooming: `Keeping a dove groomed is relatively easy. A dove will bathe itself if provided with water, and it will usually enjoy the pastime immensely. Trimming a dove's nails is a bit more difficult, but you can do it at home. If you prefer, you can also clip the bird's wings, though many pet owners prefer not to introduce this practice to their birds.`,
        pros: [`quiter than parrots,
               cheaper to feed,
               cheaper to house,
               less destruction of property,
               pecks don't hurt or break the skin,
               the coos are nice and sweet,
               array of coat patterns and colors.`],
        cons: [`very dusty birds. Bad for people who are sensitive to dust,
               can only be kept in pairs. They do not flock like pigeons or parrots,
               not as smart as pigeons,
               can't home so no free flight!,
               random coos at 2am (at least for my weirdo dove),
               if free roaming around the house there's poop everywhere.`],
        imageURL: `https://www.thesprucepets.com/thmb/bW0OE43DKZrbmncJsQr7Kkr8MUQ=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cape-turtle-dove-535093428-5b5df52b46e0fb008249e06c.jpg`
},
{
    breed: `Budgie`,
    origin: `Australia`,
    rating: 4.5,
    id: 400,
    lifeExpectancy: {
        from: 12,
        to: 14
    },
    breedAppearance: `Light green body with black wing markings and yellow head; captive-bred colors of blue, gray, green, white, violet, yellow/blue`,
    breedHighlights: `While these birds are smaller than their bigger peers, they require the same attention and care. Budgies are quite intelligent in spite of their small size, and while most are content to whistle and sing, many have been known to learn words and phrases.`,
    weight: {
        from:1,
        to:2
    },
     height: {
        from:3,
        to:7 
     },
    litterSize: 2,
    history: `The English naturalist John Gould brought the budgie to Europe around 1840, where they quickly became favorites as pets. By 1894, Australia banned export budgies, leading to a lucrative breeding business in Europe. The bird was slow to find its way to America, arriving about 1920, but became wildly popular by the 1950s. `,
    originally: `The budgie and other parakeet species are native to Australia, where they are still found in huge flocks in grasslands. These wild species, however, are slightly smaller than the birds normally found in pet stores, which have now undergone decades of captive breeding.`,
    currentlyUsedAs:`The budgie, or parakeet, is among the smallest of the parrot species commonly kept as pets. They are also one of the most popular pet birds in the world, due in part to the fact that they are quite affordable. These small parrots are exceedingly friendly and easy to tame.`,
    training: `Budgies are gentle and docile birds. They are also very easy to tame, especially if acquired at a young age. Pairs of birds make good company for each other, but when in living pairs and entertaining one another, they may not bond as well with their owners or mimic speech as fluently. Budgies are also very playful, active, and quieter than some other types of parrots.`,
    healthCare: `Budgies are prone to some of the same issues as other parrots, but also have some that are unique to this species. They can be susceptible to goiters caused by iodine deficiency or develop tumors if their diet includes too many seeds and not enough fruits and vegetables. Budgies can also be subject to psittacosis (also called parrot fever, caused by bacteria), and they can fall prey to scaly mites that affect the skin on the legs and around the eyes.
    Budgies are active and playful and should have a large cage that allows room for toys, sleeping, eating, and flight. Minimum dimensions for a cage are 20 inches long by 12 inches deep by 18 inches high, but bigger is always better. The spacing of the cage bars should be half an inch or less to avoid escapes and to prevent your bird from getting stuck. Horizontal cage bars offer the best opportunity for climbing and exercise. Place at least a couple of perches at different levels, with enough space for your budgie to comfortably move between them. Offering a variety of perch sizes, shapes, and textures will also help keep your budgie's feet in good shape. A nest to sleep in, dishes for food and water, various toys, and things to chew on should all fit inside the cage.
    Even if they have a large cage, budgies will still need playtime and socialization opportunities outside of the cage. Flight is very natural and important for a bird, but you should only allow your budgie to fly in a very secure and safe area. If you have concerns about being able to control your bird's flight area, consider having the wings trimmed some to decrease the flying abilities.
    Like most parrots, budgies are social birds, and thus many owners keep budgies in pairs so that they can entertain one another. Budgies seem to be happiest when kept in pairs. A single bird can be fine as long as you are able to spend a significant amount of time interacting with them on a daily basis.`,

    livingCondition: `Parakeets need adequate space for exercising, roosting, and so they don't feel crowded or contained. The cage should be as large as your budget can afford, and the bars should provide a suitable climbing surface that the birds cannot become wedged in or escape through.`,
    excersie:`Free flying time is critical to the budgie; try to offer several hours each a day in a room that is safe. A large houseplant can be a great playground. Your budgie needs a variety of toys to offer exercise and mental stimulation. It's best to rotate the toys every month or so to prevent them from growing bored.`,
    grooming: `Budgies can also be bathed by misting with a fine mist spray bottle. They should be bathed twice weekly to maintain healthy plumage. Wing clipping is essential for initial training; you will need to clip the bird periodically as his flight feathers grow back in.`,
    pros: [`Small bird species like budgies make great pets for people with limited space. At only seven inches long, a budgie is one of the smallest parrots. Because of this, a budgie's cage does not need to be very large.`],
    cons: [`While they don't squawk loudly, they can chirp constantly. Short lifespan of 8-12 years (compared to 20+ for larger parrots). Relatively fragile health; can easily get sick with slight temperature variations. Also susceptible to tumors and liver problems.`],
    imageURL: `https://www.thesprucepets.com/thmb/zIUSsW_S-yHwL29-MhzfHpztI6g=/434x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/six-budgerigars--melopsittacus-undulatus--on-a-twig--front-view--73506135-5b50015d46e0fb00379dd642.jpg`
},

];
