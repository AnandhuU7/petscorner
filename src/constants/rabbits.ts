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
        breed: `PEMBROKE WELSH CORGI`,
        origin: `Pembrokeshire`,
        rating: 4.5,
        id: 101,
        lifeExpectancy: {
            from: 12,
            to: 15,
        },
        breedAppearance: `The Pembroke Welsh corgi is a small- to medium-sized herding dog of short stature and sturdy build. Known for its low-set body, large erect ears, and stubby tail, the Pembroke also has a reputation for being a wonderful companion. Pembroke Welsh corgis are achondroplastic, a dwarf breed with shortened legs. They are the shortest breed of the herding dog group.`,
        breedHighlights: `Originally bred to herd cattle, sheep, and horses, the Pembroke Welsh Corgi is an active and intelligent dog breed. Easy to train and eager to learn, Pembroke’s are great with children and other pets, and you can find them in four different coat colours and markings.
    Adaptable and loving with the whole family, Corgis can fit into just about any household, whether it’s an apartment or a large home with a yard. However, they do have quite a bit of energy for a small dog. They’ll need plenty of walks and active play sessions. You might be surprised by how quickly these short-legged pups can move! For humans who can meet the breed’s needs, the Pembroke will make an excellent family companion, even for novice pet parents.`,
        weight: {
            from: 11,
            to: 14,
        },
        height: {
            from: 25,
            to: 30,
        },
        litterSize: 6,
        history: `Originating in Pembrokeshire, Wales, the Pembroke Welsh Corgi is an enchanting dog whose background is steeped in folklore. According to Welsh legend, the Pembroke Welsh Corgi sprang from the lairs of fairies and elves!
    For those who don't believe in fairy tales, there are historians who say that the Pembroke Welsh Corgi is descended from Vallhunds, Swedish cattle dogs that were brought to Wales by the Vikings in the 9th and 10th centuries. Others think they may have been descended from dogs that were brought to Wales by Flemish weavers in the 12th century.
    In the 1920s, the UK Kennel Club recognized Corgis as purebred dogs. They were officially known as Welsh Corgis when exhibited for the first time in 1925. At that time, Pembrokes and Cardigans were shown in the same class as one breed.
    Then, in 1934, the Kennel Club recognized the Pembroke and the Cardigan as two separate breeds. In that same year, the American Kennel Club followed suit. Pembrokes were first shown in the U.S. in 1936.
    Pembrokes have slowly gained in popularity in the U.S., and today, are among the top 50 most popular breeds for family pets. They're also popular with Her Majesty, Queen Elizabeth II of England, who received her first Pembroke Welsh Corgi from her father (King George VI) in 1933.
    The puppy's name was Rozavel Golden Eagle and was a playmate for Elizabeth and her sister, Margaret. Elizabeth has loved the little dogs ever since, and currently has a pack of them lounging around Buckingham Palace.`,
        originally: `The Pembroke Welsh corgi of Pembrokeshire is descended from dogs brought to Wales by Flemish weavers about AD 1100. The ancestors of the Pembroke belonged to the group that produced the Keeshond, Pomeranian, and Samoyed. The corgi gained exposure from its association with the royal family of Britain; Queen Elizabeth II has had corgis since her childhood.`,
        currentlyUsedAs: `Although Pembrokes are still used as working dogs, they are most often seen as family pets these days. They are known for being happy, loving, and intelligent, but with a stubborn or independent streak at times. They are easy to train but don't expect your Pembroke to be subservient. They like to think for themselves.`,
        training: `As with all breeds, early socialization and puppy training classes are strongly recommended. Gently exposing the puppy to a wide variety of people, places, and situations between the ages of 7 weeks and 4 months will help him develop into a well-adjusted, well-mannered adult. Pembrokes often have a mind of their own, but they are energetic, willing, and highly intelligent partners who respond well to training. Positive, reward-based training works best with this sensitive breed.`,
        healthCare: `Pembrokes are generally healthy, but like all breeds, they're prone to certain health conditions. Not all Pembrokes will get any or all of these diseases, but it's important to be aware of them if you're considering this breed.
    If you're buying a puppy, find a good breeder who will show your health clearances for both your puppy's parents. Health clearances prove that a dog has been tested for and cleared of a particular condition.
    In Pembrokes, you should expect to see health clearances from the Orthopaedic Foundation for Animals (OFA) for hip dysplasia (with a score of fair or better), elbow dysplasia, hypothyroidism, and von Willebrand's disease; from Auburn University for thrombopathia; and from the Canine Eye Registry Foundation (CERF) certifying that eyes are normal. You can confirm health clearances by checking the OFA website (offa.org).
    With a Pembroke Welsh Corgi one should be careful about these illnesses:
    Hip Dysplasia.
    Cataracts.
    Cutaneous Asthenia.
    Cystinuria.
    Epilepsy, etc. Athletic and surprisingly fast, Pembrokes were bred to be herding dogs and require plenty of exercises each day. That said, they make fine apartment dogs as long as they get the physical stimulation they need.
    With their short legs and long backs, they should not be expected to hop up on (or down from) the couch or any other modest height — fractures are common.
    Corgis can adapt quite easily to living in the country or the city. Although their coats are weather-resistant and they do well in most climates, they are very people-oriented and need to be a part of the family at all times — not left alone in the backyard.`,
        livingCondition: `They require only quick, weekly grooming except in times of shedding. They need to be watched carefully for developing obesity. These dogs are easy to keep and do well with a minimal amount of food. Added weight can be an extra strain on the long, low back.
    They are quick to learn tricks and seem to have a sense of humour. They are excellent watchdogs if anything prone to unnecessary alarm barking.
    Perhaps because of their small stature, corgis seem to be attracted to high places and may occasionally be found on the back of the sofa or in the middle of the kitchen table. Corgis do need a firm but kind hand in training.`,
        excersie: `A strong, athletic little dog developed to herd cattle and other livestock, the Pembroke Welsh Corgi loves physical activity and is happiest when he has a job to do. Corgis benefit from moderate daily exercise to maintain their physical and mental health. Pembrokes can do well on long walks or slow jogs, but their short legs won't allow them to keep up with a bicycle
    rider. Avoid extreme heat or cold, and always provide plenty of cool, fresh water after exercise. Many Pembrokes enjoy and excel at canine activities such as agility, herding, obedience, and tracking events.`,
        grooming: `The Pembroke has a thick, weatherproof double coat’s soft, light undercoat covered by a coarse outer coat. The breed sheds a fair amount on a daily basis, and even more so in the late spring/early summer. A daily once-over with a comb and a slicker brush will remove a lot of the shed hair before it is all over the house. During shedding season, baths help to loosen the dead hair the dog must be completely dry before brushing begins and a rake helps strip out the undercoat. As with all breeds, the Corgi's nails should be trimmed regularly, and ears checked to be sure they are clean and healthy.`,
        pros: [`Companionship.`, `Exceptionally Smart.`, `Sociable.`, `Loved by Royal families.`],
        cons: [`Need daily stimulation.`, `Need high-quality dog food.`, `Shedding.`, `Can get overweight very easy.`],
        imageURL: `https://cdn.shopify.com/s/files/1/1199/8502/files/corgi_1.jpg?v=1644254591`,
    },
    {
        breed: ` LHASA APSO`,
        origin: `Tibet`,
        rating: 4.7,
        id: 102,
        lifeExpectancy: {
            from: 12,
            to: 15,
        },
        breedAppearance: `Full-grown male Lhasa apsos are about 10–11 inches tall and weigh 12–18 pounds, while female pups are slightly smaller. Lhasa apsos have gorgeous black, tan, cream, white, and/or red-coloured coats, but they can also be blue, grey, and silver, though those are less common. Their luscious locks grow long, so you might want to tie up their flowy hairdo with a scrunchie or give them a sweet "puppy cut" to keep fur out of their eyes. They have black and brown button noses, long beards (if their hair is kept long), and slightly longer snouts than similar snub-nosed dogs like the Pekingese.`,
        breedHighlights: `
The Lhasa Apso (pronounced "LAH-Suh-AHP-so") is a smart and wilful small dog with a big personality. They're often described as funny, merry, and eager to please. Originating in Tibet, the Lhasa was bred to be a watchdog in palaces and Buddhist monasteries high in the Himalayas. Lhasa comes from the city in Tibet and Apso is a Tibetan word that loosely translates to "dog." This ancestry reveals itself in modern-day Lhasa—they're alert and loyal to their owners, though often wary of strangers.`,
        weight: {
            from: 5.4,
            to: 8.2,
        },
        height: {
            from: 25,
            to: 28,
        },
        litterSize: 8,

        history: `Lhasa apsos have a regal history that begins in 800 B.C. Tibet, when they were bred as sentinel dogs who stood watch inside palaces and Buddhist monasteries high in the Himalayan mountains, according to the ALAC. Legend has it, the brave little Lhasa apsos inspired this ancient Tibetan saying: "If the snow-lion stays in the mountains, it is a snow-lion; if it comes down to the valleys, it becomes a dog."
        Lhasas have held popular status with Buddhist monks and Dalai Lamas over the centuries—they were never sold, and thus a highly prized gift. Some Tibetian Buddhists believe that the souls of lamas (priests) are reborn as Lhasa apsos in the stage of reincarnation just before they are reborn as humans, according to the ALAC.
        Lhasa apsos first came to the West in the early 19th century, landing in the U.S. (specifically, New Jersey) in 1933 after being gifted to a couple by the Dalai Lama. The American Kennel Club recognized the breed just two years later, and the ALAC was founded in 1959.`,
        originally: `The Lhasa Apso dog breed is originally from Tibet, where they were highly regarded watchdogs in the palaces and monasteries of their mountainous homeland.`,
        currentlyUsedAs: `Today's Lhasa is no longer a palace guard but primarily a family companion who loyally protects their family from danger.`,
        training: `Lhasa Apsos will please you if it pleases them to please you. They are highly intelligent, sometimes compared to a willful toddlers. They can learn just about anything that a trainer makes interesting enough to master's on their terms. They do not appreciate repetitive drill and can become uncommonly stubborn if bullied or badgered. Most cases of unacceptable Lhasa behaviour involve situations with inconsistent, improper, or non-existent human leadership. This is a breed for creative, motivated people who enjoy a canine companion of like mind.`,
        healthCare: `The Lhasa apso is a generally healthy breed but can be prone to health problems like hip dysplasia and patellar luxation. According to the American Lhasa Apso Club (ALAC), they may also deal with eye issues like retinal atrophy, pigmentary keratitis, dry eye, and glaucoma.
Other common health issues for Lhasa apsos include cherry eye (a red mass at the inner corner of the dog's eye), allergies, and a genetic skin condition called sebaceous adenitis, where the sebaceous glands become inflamed. Lhasa apsos can also be susceptible to haemorrhagic gastroenteritis (HGE), a life-threatening disease that can occur in small and medium-sized dog breeds, according to the ALAC. If you catch the warning signs (like bloody diarrhoea) early, the condition can be cured.
With the right care, Lhasa apsos live long lives—about 12–15 years on average. Some have even been reported to have lived well into their 20s.
If you buy a Lhasa from a breeder, it's important that they be reputable and dedicated to maintaining healthy animals. The Lhasa apso breeder should be able to show you lineage records that prove their dogs are healthy enough for breeding.`,
        livingCondition: `Lhasas are loyal to their tribe and do well with adults and children who respect their boundaries. Lhasas can make great family pets—even with small children—as long as the children understand (with the parents' direction) to give the dog some space. If properly socialized and trained, Lhasas can get along with other dogs and pets but know that Lhasa can like to be the boss.
Lhasas will tolerate being left alone for reasonable periods of time, but think twice if you have neighbours who would be disturbed by any warning barking while you're away. They are not a 'yappy' dog, but with their keen hearing, they will alert you of unexpected events. Their small size might make them seem like ideal apartment dogs, but their bark might prove otherwise.
Lhasa apsos are quick on their little legs! These pups can excel in agility, where they'll get the exercise and mental stimulation to make them happy. Lhasas need a moderate amount of exercise. A 20-minute walk once or twice a day and some playtime in the house or yard, especially during the puppy stage, will do`,
        excersie: `The Lhasa is generally not a couch potato and is adept at self-exercise. They will race around an apartment to run off energy, entertain themselves in a fenced yard, or take their owners on a brisk walk. Mental stimulation is as important as physical exercise. They excel at agility, can do scent work, and have been known to retrieve and herd. There are talented Lhasas certified as therapy dogs working in hospitals, nursing homes, colleges, and prisons.`,
        grooming: `When it comes to grooming, the Lhasa apso is definitely high-maintenance. Though she doesn't shed much, her long and lavish coat can get quite tangled and matted if not cared for correctly—daily brushing and a bi-monthly bath is recommended. Some owners opt to keep their dog's coat short in a "puppy cut" style so that it's easier to maintain, but both hairdos are equally adorable and aww-worthy.
Lhasas will also need basic grooming every couple of weeks beyond their hair care, including nail trims and teeth brushing. Experts recommend brushing your dog's teeth every day if possible. Just make sure to use dog toothpaste, because human toothpaste is toxic for dogs! Her ears also need to be checked and cleaned regularly.
Your Lhasa should eat dog food made from high-quality ingredients. Monitoring her food and exercise is an important part of care, preventing your dog from gaining an unhealthy amount of weight. A visit to your vet can help you determine how much and how often to feed your Lhasa to keep her healthy`,
        pros: [`- Friendly and Affectionate.`, `- Requires Frequent Grooming.`, `- Protective.`],
        cons: [`- Stubborn.`, `- Excellent Lifespan.`, `- Fragile.`],
        imageURL: `https://cdn.shopify.com/s/files/1/1199/8502/files/oie_2716152JzzpfzCA.jpg?v=1643295784`,
    },
    {
        breed: `SHIBA INU `,
        origin: ` Japan`,
        rating: 4.0,
        id: 102,
        lifeExpectancy: {
            from: 12,
            to: 15
        },
        breedAppearance: `The Shiba Inu is a breed of hunting dog from Japan. A small-to-medium breed, it is the smallest of the six original and distinct spitz breeds of dog native to Japan. A small, alert, and agile dog that copes very well with mountainous terrain and hiking trails, the Shiba Inu was originally bred for hunting.
        It's not difficult to differentiate between a male and female Shiba Inu, as they have distinct physical and emotional qualities. For starters, males stand up to 16.5 inches tall and weigh about 23 pounds. Females are smaller, standing around 13.5 inches tall and weighing 17 pounds. A male Shiba will have a broader face, while the female has softer facial features. No matter the gender, the Shiba Inu is built like a hunter-quick and agile, with a confident stance. Their perky, triangular ears and fluffy curlicue tail give them the look of a forest animal from a storybook.`,
        breedHighlights: `The Shiba Inu is a breed of hunting dog from Japan. A small-to-medium breed, it is the smallest of the six original and distinct spitz breeds of dog native to Japan. A small, alert, and agile dog that copes very well with mountainous terrain and hiking trails, the Shiba Inu was originally bred for hunting.`,
        weight: {
            from:6.8,
            to: 11
        },
        height: {
            from: 33,
            to: 43
        },
        litterSize: 6,
        history:`The Shiba Inu is an ancient Japanese breed that has been around since 300 B.C. They are the smallest of Japan's national dogs, called the "Nihon-ken," that consist of six treasured Japanese breeds: the Akita Inu, Hokkaido Inu, Kai Ken, Kishu Ken, Shikoku Ken, and Shiba Inu.
According to the National Shiba Club of America, these small dogs were originally used to hunt small game and birds, though sometimes they would hunt wild boar. Their name supposedly comes from the reddish brushwood bushes in which they hunted: Shiba means "brushwood" and Inu means "dog."
During World War II, the number of Shibas declined. The ones who survived the bombing raids in the war caught distemper, a serious disease that can be lethal if untreated. Thankfully, breeding programs were established and the Shiba Inu grew to be Japan's No. 1 companion dog, and the 44th most popular dog in the U.S.`,
        originally: `The Shiba Inu dog breed was originally bred to flush birds, small game and was occasionally used to hunt wild boar. They’re one of Japan’s six native breeds: Akita (large), Kishu, Hokkaido, Kai, Shikoku (medium), and Shiba (small).`,
        currentlyUsedAs: `Shibas are known for their spirited personality, small upright ears, and cat-like agility. Today they serve primarily as companion dogs in Japan and the United States.`,
   training: `The one thing every Shiba owner must know is that a Shiba can never, ever be considered reliable off lead unless in a confined area. No amount of obedience training will ever change that. Letting a Shiba off lead or any dog, for that matter is playing Russian roulette with its life. An open door, an unlocked gate, a moment of inattentiveness, and the Shiba may be gone forever. On the positive side, a Shiba is practically born housebroken. By 4 weeks of age, the puppy is trying to get as far away from his sleeping area as possible to eliminate. By 5 weeks the puppy will hold it all night and wait until taken outside to go. Controlling the bladder takes a little longer and depends a lot on immediate access to the outdoors and the diligence of the owner.`,
        healthCare: `Shiba Inus have a life expectancy of 12-15 years, and it's generally a healthy, happy ride. This breed is known for dramatics and may talk, scream, or throw a bit of a temper tantrum if things don't go their way. All jokes aside, a responsible owner must be diligent in preventing certain health issues for their Shiba. Obesity and dental disease are big risks for Shibas, so proper nutrition and dental hygiene are a must. Their genetic problems can include hip dysplasia, patellar luxation, and allergies. Owners should closely monitor any symptoms of these conditions and alert their veterinarian if they notice anything out of the ordinary. Before bringing home a Shiba Inu puppy, make sure the breeder conducts the tests recommended by the OFA to ensure you get a healthy dog.
With their thick double coats, Shibas are big shedders. Their heaviest periods of shedding are in the spring and fall, but they lose fur year-round and will need to be brushed regularly if the owner wants to save their furniture. You can also use a blow dryer to check for fleas and remove loose hair, dirt, and dandruff. Shibas are notoriously less-than-happy about nail-trimming, so unless they have an experienced owner, they may need to see a professional to keep their nails short and neat. A Shiba needs a moderate amount of exercise before he can calm down. They make great hiking companions, thanks to their history as hunters (and their natural winter coat). Of course, they'll need to be leash trained before they can consistently go for walks. Shibas typically house-train quickly and are perceptive to learning commands, but may need obedience classes-such as puppy kindergarten-to fully grasp good manners`,
        livingCondition: `Shiba Inus might be a small dog breed, but they need a fenced-in yard with space to roam-emphasis on the fence. They have a strong dislike for being restrained, and if there isn't a limit to where they can explore, they will wander off. They've also been described as escape artists, so a Shiba should always have a collar with tags and shouldn't be left to his own devices outdoors for a long period of time. Shibas can also tend to dart after smaller animals in an effort to protect their turf. They have a high prey drive and love to chase, thanks to their hunting roots. Because of this, a Shiba should always be leashed outside the house.
As with all dogs, Shibas need to be socialized at a young age so they're used to being around other animals. They can get along well with cats and other dogs if introduced during puppyhood, but might not want to share their food and toys if they don't meet their furry siblings until they are adults.`,
        excersie: `Most Shibas are fairly energetic and love to go for walks. They are not so hyper that they will climb the walls if they don't get daily exercise, but a Shiba owner should be dedicated to exercising the dog, especially if the dog doesn't have an adequate yard in which to exercise himself. In general, Shibas are not massively destructive if left alone once they reach maturity, but some can suffer separation anxiety and should be able to spend periods of time created even when the owners are home and at night. Crating guarantees a home will remain intact`,
        grooming: `Shibas shed a lot. It has been said that they shed twice a year, but some owners quip that it lasts for six months at a time. Unless a Shiba is a "long coat," the coat does not mat, so infrequent brushing doesn't hurt the dog, but brushing or combing during periods of heavy shedding will reduce the amount of hair around the house. Blowing the dog with a strong blow-dryer or a shop vacuum in reverse is a good way to remove loose hair, dirt, and dandruff and to check for fleas. Most dogs learn to like the blower, as it feels good and doesn't scrape the skin or pull the coat. Don't let it get too hot, though. Shibas often object to nail trimming. Start a puppy early, but if it becomes a major struggle, let a professional do it.`,
     pros: [`- Their Natural Beauty`,
                `- Their Loyalty`,
                `- Their Health `,
                `- Their Intelligence`,
               `- Their Fastidious Nature.`
        ],
        cons: [`- Their Aloofness `,
                `- Their Stubbornness`,
                `- Their Tantrums`,
                `- Their Shedding`,
                `- Their Risk of Running Away.`
        ],
        imageURL: `https://cdn.shopify.com/s/files/1/1199/8502/files/Shiba-Inu-Display-Image.jpg?v=1643203060`
    
},
{
    breed: `BEAGLE `,
    origin: `United Kingdom `,
    rating: 4.5,
    id: 103,
    lifeExpectancy: {
        from: 12,
        to: 15
    },
    breedAppearance: `The Shiba Inu is a breed of hunting dog from Japan. A small-to-medium breed, it is the smallest of the six original and distinct spitz breeds of dog native to Japan. A small, alert, and agile dog that copes very well with mountainous terrain and hiking trails, the Shiba Inu was originally bred for hunting.
    It's not difficultBeing small, compact, and robust, Beagles are active companions
for kids and adults alike. to differentiate between a male and female Shiba Inu, as they have distinct physical and emotional qualities. For starters, males stand up to 16.5 inches tall and weigh about 23 pounds. Females are smaller, standing around 13.5 inches tall and weighing 17 pounds. A male Shiba will have a broader face, while the female has softer facial features. No matter the gender, the Shiba Inu is built like a hunter-quick and agile, with a confident stance. Their perky, triangular ears and fluffy curlicue tail give them the look of a forest animal from a storybook.`,
    breedHighlights: ``,
    weight: {
        from:10,
        to: 11
    },
    height: {
        from: 33,
        to: 41
    },
    litterSize: 7,
    history:`The roots of the dogs having the same size and purpose as themodern Beagle can be traced to Ancient Greece of the 5th century BC. Xenophon, born around 430 BC, in his Treatise on Hunting or Cynegeticus, alludes to a hound that hunted hares by scent and chased them on foot. Small hounds find mention in the Forest Laws of Canute, which exempted them from the ordinance that commanded that all dogs capable of running down a stag should have one foot mutilated. However, there are divergent opinions regarding the time of existence of such laws. If they indeed existed in practice, they lend weight to the fact that such dogs were prevalent in England prior to 1016.`,
    originally:` The Beagles date back to the 1500s. English hunters have a tendency of using these dogs profusely for the purpose of tracking rabbits, hares, pheasants, quails and other small animals. The breed probably originated as a cross between the Harrier and other types of English hounds.`,
    currentlyUsedAs: `Beagles are currently employed as scent hounds to mostly track animals, like rabbits and hares. Dogs of this breed are utilized for this purpose in numerous countries, including the USA.`,
    training: `Dealing with Beagles can be a Herculean task at times. This is because their attitude makes training a real nuisance. Therefore, it takes plenty of tenacity and resolve to train the Beagles.`,
    healthCare: `Some dogs of this breed can be susceptible to a multitude of diseases, including epilepsy, heart disease, eye and back problems, chondroplasia, popularly termed as dwarfism (warped front legs, like a Basset's), mast cell tumors, etc.`,
    livingCondition:`Beagles can live pleasantly in an apartment if they are not provided with ample opportunities to roam outdoors. They tend to stay vibrant indoors, and a small yard will suffice.`,
    excersie: `Being endowed with qualities of dynamism and stamina, lots of exercise, including a brisk daily walk, is a prerequisite for the Beagle. There should have a fenced yard of reasonable size for romping the breed. Always use a lead when taking this breed out for a walk or you may lose track of the swift-legged dog very quickly.`,
    grooming: `Nurturing the Beagle's smooth, shorthaired coat is no different from having a walk in the park. Brush it with a firm bristle brush, and bathe it with mild soap only when the need arises. Dry shampoo occasionally. Be sure to check the ears carefully for signs of infection and keep the nails trimmed. This breed is an average shedder.`,
 pros: [ 
     `Beagles are quite capable of fetching and returning a variety of items, like balls and plush toys. They are an intelligent breed, and when trained as pups, can be rendered disciplined and mannerly. Beagles have the potential of learning and understanding pet owners' commands, if trained at an early age or taken to attend some obedience classes. They are also known for mixing and mingling with children, other dogs and even cats, if acquainted early. They are frisky, and easy to maintain, clean and groom. Since it is a neat and tidy breed, it necessitates an occasional bathing and brushing at times.`
    ],
    cons: [
    `As they have a penchant for digging and chewing on things, pet owners need to distract the dog by buying chewable toys and bones for the beagles or they could run the risk of having their own personal items chewed and buried. Absent-mindedness and inattentiveness of a beagle makes it a headache to train it. As a result, pet owners must repeat dog commands and demands quite a number of times before it becomes an obedient dog. Furthermore, beagles howl very loud, and they learn this kind of barking, a part and parcel of their hunting activities, when they are pups..`
    ],
    imageURL:` https://cdn.shopify.com/s/files/1/1199/8502/files/33_2048x2048.jpg?1140046362213161000`

},
{
    breed: `BOXER`,
    origin: `Germany `,
    rating: 4.4,
    id: 104,
    lifeExpectancy: {
        from: 9,
        to: 10
    },
    breedAppearance: `The Boxer's body is compact and sturdy. The size of the head is in proportion to that of the body. The muzzle is short and blunt with a distinct stop. The nose is large and black with very open nostrils. The jaw has an under bite. The eyes are dark brown in color. The ears are set high, either cropped or kept natural. When cropped, they are trained to stand up on the head, tapering to a point. When left in their natural form, the ears are thin, falling forward, lying close to the head. The neck should be round, strong and muscular, without a dewlap. The muscular front legs seem to be straight and parallel when viewed from the front. The back legs are muscular. The tail is set high and usually docked. The AKC severely penalizes a natural tail, while most of Europe has outlawed this practice. Dewclaws are usually removed. The short, smooth, close-fitting coat comes in fawn, brindle, tan, mahogany and black often with white markings. Boxers with a white coat cannot be registered with some clubs.`,
    breedHighlights: `Boxers are known for bursting with energy and plenty of exercise is a prerequisite for them. You should have the time, resolve, and vigour to give them the play and activity they need. Boxers are exuberant and will greet you ecstatically.`,
    weight: {
        from:25,
        to: 32
    },
    height: {
        from: 57,
        to: 63
    },
    litterSize:8, 
    history:`The roots of the dogs having the same size and purpose as themodern Beagle can be traced to Ancient Greece of the 5th century BC. Xenophon, born around 430 BC, in his Treatise on Hunting or Cynegeticus, alludes to a hound that hunted hares by scent and chased them on foot. Small hounds find mention in the Forest Laws of Canute, which exempted them from the ordinance that commanded that all dogs capable of running down a stag should have one foot mutilated. However, there are divergent opinions regarding the time of existence of such laws. If they indeed existed in practice, they lend weight to the fact that such dogs were prevalent in England prior to 1016.`,
    originally:` The Beagles date back to the 1500s. English hunters have a tendency of using these dogs profusely for the purpose of tracking rabbits, hares, pheasants, quails and other small animals. The breed probably originated as a cross between the Harrier and other types of English hounds.`,
    currentlyUsedAs: `Guard Dogs,Dog fighting`,
    training: `The crate should be large enough that your English bulldog can sit up, lie down and stand on it comfortably. The dog should have enough room to stretch out, but excessive space might make the dog soil the crate. Dogs naturally desire to avoid soiling their immediate surroundings. This makes a dog crate a useful aid in house-breaking your English bulldog. English bulldogs cannot put up with weather extremes, such as excessive heat and/or humidity.`,
    healthCare: `The bull dogs can be vulnerable to cardiomyopathy and other heart problems, sub-aortic stenosis and thyroid, skin and other allergies, epilepsy. They are more likely to pick up tumor-related diseases compared to other breeds. They are, moreover, quite susceptible to cancer, mast cell tumors, arthritis, hip dysplasia, back and knee issues. These dogs may drool and snore. The breed has excessive flatulence, especially when fed something other than their own dog food. Some white Boxers are prone to deafness.`,
    livingCondition:`Boxers will fit into an apartment quite well if sufficiently exercised. They are buzzing with energy and vigor in indoor conditions and at least an average-sized yard is a necessity for them. Boxers are temperature-sensitive, getting easily overheated and chilling very quickly.`,
    excersie: `An active, athletic breed, Boxers need daily work or exercise, as well as a long brisk, daily walk. They also enjoy fetching a ball or other sessions of play.`,
    grooming: `The Boxer's smooth, shorthaired coat is easy to groom. Brush with a firm bristle brush, and bathe only when necessary, for it removes the natural oils from the skin. Some Boxers try and keep themselves clean, grooming themselves like a cat, although some cannot resist rolling in another animal’s poop, which calls for a bath. This breed is an average shedder.`,
 pros: [ 
     `The pros of owning an English bulldog are so many that they can easily overpower the cons. There are exiguous dogs that have the same degree of stoicism as the bulldog, thereby making it the quintessential family pet. Children adore these dogs immensely. Bull dogs are known for their fidelity and affectionate attitude. They are the perfect “nanny” dog for children, and equally favoured by the elderly, not dashing around their feet and tripping them and large enough for them to be easily seen.The English bulldog, once he has surpassed the lively puppy stage, becomes stolid and sluggish, heavy and ponderous, and can hardly be provoked. Finding a short-tempered bulldog is out of the bounds of possibility.`
    ],
    cons: [
    `There are some demerits of owning an English bulldog. He is definitely not easy to train due to his obdurateness; the bulldog will consume quite a lot of time to learn things, albeit once he has grasped something, it will be stamped on his memory forever. Food is the key to bulldog training (a system of rewards is the backbone of a suitable training mechanism as it makes them quite responsive and engaged).As a breed, the bulldog is an avid eater. So, the owner has to be pragmatic and ration food amounts to avoid this heavy breed from becoming seriously overweight.`
    ],
    imageURL:`https://cdn.shopify.com/s/files/1/1199/8502/files/30_1_2048x2048.jpg?4156348428957486057 `

}
];
