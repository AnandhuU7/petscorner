export interface Rabbit {
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

export const RABBITS: Rabbit[] = [
    {
        breed: `American Chinchilla`,
        origin: `France`,
        rating: 4,
        id: 300,
        lifeExpectancy: {
            from: 9,
            to: 12
        },
        breedAppearance: `The American Chinchilla or "Heavyweight Chinchilla" is larger than the Standard Chinchilla, it has a commercial body type but the same roll back coat. Standard Chinchillas bred for large size produced this breed.`,
        breedHighlights: `These stocky rabbits have a slight curve to their medium length bodies, beginning at the nape of their necks and following through to the rump. They carry their ears straight erect. The quality of the pelt is first and more important when breeding for the "Standard Of Perfection".`,
        weight: {
            from: 4.1,
            to: 5.4
        },
        height: {
            from: 23,
            to:33
         },
        litterSize: 10,
        history: `The first American Chinchilla Rabbit was developed by French engineer M.J. Dybowski, and were first shown in April 1913 in Saint-Maur, France. Enchanted by its gorgeous coat, the new breed took the fur trade by storm. The first Chinchilla rabbits to hit the English market were in the summer of 1917 thanks to an import from a Mrs. Haidee Lucy-Hulbert of Mitcham Surrey. In 1919, a British exhibitor presented a shipment of these rabbits at the New York State Fair. The exhibitor sold his entire stock to Edward H. Stahl and Jack Harris.
        American breeders set to develop this Chinchilla rabbit with a larger body (the original ones were a mere 5-7.5 lbs) in order for the breed to be meat and fur-worthy animals. Through selective breeding, the American Chinchilla Rabbit was developed, and in 1924, the American Rabbit Breeders Association (ARBA) recognized this breed.`,
        originally: `The American Chinchilla or "Heavyweight Chinchilla" is larger than the Standard Chinchilla, it has a commercial body type but the same roll back coat. Standard Chinchillas bred for large size produced this breed. Chinchilla Rabbits originated in France and were bred to standard by M. J. Dybowski. They were introduced to the United States in 1919. [3] Bred to be a meat and fur rabbit, the American Chinchilla Rabbit can be shown/exhibited or kept as a stocky, hardy pet. American Chinchilla Rabbits do not require regular grooming. Adult American Chinchilla Rabbits weigh different for each sex. Males (Bucks)- 9-11#, and Females (Does) 10-12#. These stocky rabbits have a slight curve to their medium length bodies, beginning at the nape of their necks and following through to the rump. They carry their ears straight erect. The quality of the pelt is first and more important when breeding for the "Standard Of Perfection". American Chinchilla Rabbits are a six-class breed in show. (Any rabbit that matures over 9 pounds is a 6-class breed, maturation weights under 9# are 4-class breeds.) The American Chinchilla Rabbit was bred from large Standard Chinchilla Rabbits in order to produce a meatier rabbit. They were originally called Heavyweight Chinchilla Rabbits.`,
        currentlyUsedAs: `Despite the breed's fine meat producing qualities, producers of today prefer an all white rabbit for the meat market. The American Chinchilla is a large, hardy and gentle animal, with mature bucks weighing in at 9 to 11 pounds and does at 10 to 12 pounds.`,
        training: ` null`,
        healthCare: `The chinchilla’s overall appearance and behavior can provide clues to its well-being. It is a good idea to monitor your pet regularly for signs of illness. Sick chinchillas may show weight loss, hunched posture, scruffy hair coat, labored breathing, or difficulty walking normally. They may stop eating, have no energy, or not respond to stimulation. Respiratory conditions and digestive problems are the most common illnesses and may be signaled by discharges from the eyes and nose or diarrhea. Feet should be examined for sores or broken nails. Teeth may be discolored or overgrown. Ears should be examined for discharges or inflammation and eyes for discharges or conjunctivitis. The lower jaw and chin should be examined for swellings. Difficulty breathing and abnormal breath sounds should be noted.`,
        livingCondition: ` Chinchillas live high above sea level in the mountainous regions of South America's west coast. They live in burrows and rock crevices, and are most active at dawn and dusk. They live off of grasses and shrubs; whatever their arid environment can produce.`,
        excersie:`null`,
        grooming: `The primary reason for grooming your chinchilla is to remove dead fur and matted areas from the coat. Often a chinchilla is not able to easily shed all the dead fur, and some fur becomes trapped close to the skin. If the fur is not removed, the chinchilla will not have as clean a coat (because the dust does not penetrate all the way down the hair shaft) nor will the chinchilla be able to regulate temperature as easily. The dead fur does not allow air flow or ventilation.`,
        pros: [`Friendly`,
            `Exceptionally Smart.`,
            `Sociable.`,   
        ],
        cons: [
            `Need high-quality rabbit food.`,
            `Can get overweight very easy.`
        ],
        imageURL: `https://domesticanimalbreeds.com/wp-content/uploads/2019/01/American-Chinchilla-Rabbit.jpg`
},
{
    breed: `Belgian Hare`,
    origin: ` Belgium`,
    rating: 4.8,
    id: 305,
    lifeExpectancy: {
        from: 7,
        to: 11
    },
    breedAppearance: `The Belgian Hare is most known for its distinctively close resemblance to a hare, with a long, fine body with muscular flank, and distinctly arched back with loins and well-rounded hind quarters. Their head is long and their tail straight and carried in line with the backbone. The fore feet of a Belgian Hare are usually long and fine-boned and perfectly straight, while their hind feet are long, fine, and flat.  `,
    breedHighlights: ` They are believed to be the only breed of domestic rabbit featuring a deep red, rich chestnut color of the Belgian Hare, together with black ticking of a wavy or blotchy appearance and an extended down the sides.`,
    weight: {
        from:6,
        to:9
    },
     height: {
        from:20,
        to: 28
     },
    litterSize: 10,
    history: `The Belgian Hare breed’s lengthy history originates in 18th century Belgium where they were developed using selective breeding tactics from domestic and wild European rabbits with the intention of making a hearty meat. They were imported as early as 1856 into England, and dubbed the “Belgian Hare”, but it wasn’t until 1873 that a man by the name of Winter “William” Lumb and Benjamin Greaves developed into the breed that exists today.
    The first Belgian Hare was shown in America in 1877 where its popularity rapidly grew. The “National Belgian Hare Club” was formed in 1897, and the National Pet Stock Association added this breed under its “all-breed” club. After many name changes, the National Pet Stock Association eventually became known as the American Rabbit Breeders Association (ARBA). In 1972, a group of Belgian Hare breeders came together and applied for a specialty club charter. Soon after, the Belgian Hare was officially accepted into the ARBA.`,
    originally: `The Belgian Hare, although a domestic rabbit, was bred to closely resemble to a wild hare. It is for that reason that this breed has a long, muscular body with an arched back. They have long heads, a straight tail, which is carried in line with the backbone, and tall, slightly wide, erect ears.`,
    currentlyUsedAs:`The Belgian Hare was mainly developed as a meat producing breed. But the breed is also suitable for raising as pets`,
    training: `null`,
    healthCare: `While Belgian Hares are not susceptible to digestive issues such as Wool Block (like long-haired breeds such as Angoras, for instance), care has to be taken in order for them to live long, healthy lives. Two problems that are most common in outdoor rabbits are ear mites and flystrike. Flystrike is common to rabbits that have soiled fur during the summer. Flies lay their eggs in soiled fur and when the eggs hatch, their primary food source is the rabbit. It is extremely painful and symptoms include lack of appetite, fewer droppings in your bunny’s cage and sudden jumping/thrashing in pain. If you suspect your rabbit may have flystrike, take them to your veterinarian for treatment.
    A pea-sized amount of deworming paste is recommended every fall and spring to keep your rabbit healthy. Finally, if your rabbit’s diet does not consist of 70 percent hay, the rabbit’s incisors begin to grow into their faces/jaws. This is a painful condition and can only be corrected by a veterinarian, who can shave down their teeth. A simple change in their diet should keep their teeth naturally worn down.
    This rabbit is usually kept in an outdoor enclosure that’s fairly large and tall. The ideal outdoor hutch should be made of wire or wood, have a solid bottom and be at least 24 x 60 inch floor with a top that is no less than 24 inches high. The bottom of the cages need to be lined in bedding, spot-cleaned every day and completely replaced every 5-7 days. While Belgian Hares can do fine in temperatures above the freezing mark (so long as sufficient protection and bedding is given to keep them warm), there needs to be sufficient ventilation during the summer months.
    When it comes to their diet, this rabbit breed needs access to clean, fresh water and high-quality hay. Hay should be 70 percent of their diet while the rest consists of a healthy balance of pellets and rabbit-safe vegetables, fruits and leafy greens. There are some foods that should be avoided (iceberg lettuce, for example, does not have enough nutritional value), while others are fine in moderation (apples and carrots are a wonderful treat). `,
    livingCondition: `All climates; avoid extremely high humidity or heat`,
    excersie:`null`,
    grooming: `Grooming them once every week or biweekly with a bristled brush should do the trick. Always remember that rabbits should not be bathed, as this causes them great stress and may cause cardiac problems. Instead, spot clean any dirty areas with a damp cloth. When rabbits are concerned, a gentle approach will always do the trick. You want to keep their coat pristine, soft, and fluffy at all times, and rough handling won’t help with that. Not only that, but it will also stress the poor bunny even more. Soft brush and a paced tempo while grooming are advised.`,
    pros: [`While not the easiest indoor pet to train, it is indeed possible to litter train a rabbit. Many owners find having several litter boxes spread across the home is a necessary evil in order for their indoor rabbit not to leave their droppings all over their home. They also find that if their rabbit is prone to doing the deed in one particular corner, they place a litter box in that corner so the rabbit can make the connection and understand that they should be doing their business in the box. With lots of time, patience and a few treats, litter training should be successful within a few months.`],
    cons: [
        `Need high-quality rabbit food.`,
        `Can get overweight very easy.`
    ],
    imageURL: `https://cdn-fastly.petguide.com/media/2022/04/13/8297180/10-best-outdoor-rabbit-breeds.jpg?size=720x845&nocrop=1`
},


];