export interface Dog {
    breed: string | null;
    origin: string | null;
    rating: number | null;
    id: number | null;
    lifeExpectancy: {
        from: number;
        to: number
    } | null;
    breedAppearance: string | null;
    breedHighlights: string | null;
    weight: {
        from: number;
        to: number
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
    imageURL: string | null;
}

export const DOGS: Dog[] = [
    {
        breed: `PEMBROKE WELSH CORGI`,
        origin: `Pembrokeshire`,
        rating: 4.5,
        id: 101,
        lifeExpectancy: {
            from: 12,
            to: 15
        },
        breedAppearance: `The Pembroke Welsh corgi is a small- to medium-sized herding dog of short stature and sturdy build. Known for its low-set body, large erect ears, and stubby tail, the Pembroke also has a reputation for being a wonderful companion. Pembroke Welsh corgis are achondroplastic, a dwarf breed with shortened legs. They are the shortest breed of the herding dog group.`,
        breedHighlights: `Originally bred to herd cattle, sheep, and horses, the Pembroke Welsh Corgi is an active and intelligent dog breed. Easy to train and eager to learn, Pembroke’s are great with children and other pets, and you can find them in four different coat colours and markings.
    Adaptable and loving with the whole family, Corgis can fit into just about any household, whether it’s an apartment or a large home with a yard. However, they do have quite a bit of energy for a small dog. They’ll need plenty of walks and active play sessions. You might be surprised by how quickly these short-legged pups can move! For humans who can meet the breed’s needs, the Pembroke will make an excellent family companion, even for novice pet parents.`,
        weight: {
            from: 11,
            to: 14
        },
        height: {
            from: 25,
            to: 30
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
        pros: [`Companionship.`,
            `Exceptionally Smart.`,
            `Sociable.`,
            `Loved by Royal families.`
        ],
        cons: [`Need daily stimulation.`,
            `Need high-quality dog food.`,
            `Shedding.`,
            `Can get overweight very easy.`
        ],
        imageURL: `https://cdn.shopify.com/s/files/1/1199/8502/files/corgi_1.jpg?v=1644254591`
    },
]