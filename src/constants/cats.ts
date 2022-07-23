export interface Cat {
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

export const CATS: Cat[] = [
    {
        breed: `SPHYNX CAT`,
        origin: `Toronto`,
        rating: 5.5,
        id: 200,
        lifeExpectancy: {
            from: 8,
            to: 14
        },
        breedAppearance: `Sphynx is medium sized cat with bald and wrinkled skin. They have fine hair and are muscular for their size. Their ears are unique with large size resembling to that of bat. The eyes are big and wide, most of the time observed lemon like with a slight slant at upper corners.`,
        breedHighlights: 'Sphynx is the most attention loving cat. Much alien in looks it also has a funny character with lots of showiness. It is a cat of family who loves to see new people and make them laugh. It is a smart and athletic by nature.',
        weight: {
            from: 6,
            to: 12
        },
        height: {
            from: 8,
            to: 10
        },
        litterSize: 4,
        history: `Their history dates back to 1966 when Prune, a hairless kitten was born to a domestic cat Elizabeth in Toronto. It was case of mutation. Owner of Elizabeth realized the uniqueness of this new kitten and tried backcrossing which produced one more naked kitten.`,
        originally: `Their breed originated in Toronto. Sphynx are a result of mutation of genes. They have very little hair to prove their belongingness to normal cat species but so they remain different because of the unnatural phenomenon (hairlessness) occurred to them.`,
        currentlyUsedAs: `Sphynx are currently used as pet`,
        training: `These naked cats takes a lot of time to become comfortable at new place. You need to love and attend them to make them feel comfortable. And once they start roaming by themselves in your home you can start their training. They easily get accustomed to grooming and would love to have pedicures and baths depending on their mood, but unlike other breeds they are grooming friendly. They originally are a fun chap so you can train them to become more entertaining. They would love to talk and become part of your family and friend circle. You can also expect good sport from them as they are athlete enough to play and exercise. `,
        healthCare: `Because they lack the protection of a fur coat, a hairless Sphynx cat requires special care. Sphynx cats have few health or genetic problems, and have a normal lifespan. They are generally considered to be a very robust breed. But they do still face some problems unique to their physical nature, most of which have to do with their hairlessness.`,
        livingCondition: `Sphynx cats are vulnerable to the sun and cold and are meant to be indoor cats. So exposure to the outdoors should be limited. Also, as their bodies are constantly working to keep themselves warm, their metabolism is higher than other cats so they need to be fed more food at meal times`,
        excersie: `Sphynx is a happy go lucky breed. They practice exercise through play. Not very eager with outdoor strolls they find activities indoor that will give them a chance to show off their stunts and acrobatics. They can wear themselves out by running behind a laser point or fur mice or simply by running back and forth in the house, but they make sure they remain agile and active.`,
        grooming: `These naked cats need special care because of their unusual coat condition. It is advised to bath them weekly to prevent their body from buildup of oil and dust. Sphynx are vulnerable to heat and cold so exposure to outside should be limited. One more reason to keep them inside is that they are also prone to infections. Their metabolism is high so they need to be fed really well!`,
        pros: [`Sphynx breed is friendly, 
        affectionate and intelligent, Good for them who dont like pets shedding their fur all over,These are indoor cats and are adaptive to circumstances., They are less prone to trigger allergies and are quiet entertaining.`],
        cons: [`Purebreds are nearly always expensive to purchase, and often prone to particular diseases or birth defects. They are more prone than other breeds to health problems, they have a shorter lifespan than most cats, they are rather expensive, and they require special grooming attention including regular baths. They also have a high metabolism, so they eat a lot. And their skin is rather sensitive and they can easily suffer from sun burn.`
        ],
        imageURL: `https://cdn.shopify.com/s/files/1/1199/8502/files/hairless-cat-breeds.jpg`
    },
    {
        breed: `PERSIAN CAT`,
        origin: `Iran`,
        rating: 6.5,
        id: 201,
        lifeExpectancy: {
            from: 12,
            to: 17
        },
        breedAppearance: `The Persian is the glamor puss of the cat world. Their beautiful, flowing coat, sweet face and calm personality have combined to make them the most popular cat breed. They are high maintenance and have some health issues, but for many their looks and personality overcome those drawbacks.`,
        breedHighlights: 'Long hair, docile body, flat nose and watery eyes are the main highlights of this breed. ',
        weight: {
            from: 7,
            to: 12
        },
        height: {
            from: 10,
            to: 15
        },
        litterSize: 3 - 6,
        history: `The Persian is an old breed. Its origination is marked in Mesopotamia which was later called as Persia (modern day Iran).The breed’s long hair was probably the result of a natural mutation, and its striking appearance attracted the attention of 17 th - century Italian nobleman and world traveler Pietro Della Valle, who is credited with bringing the first longhaired cats to Europe in 1626. At that time, the cats had shiny, silky gray fur, but thanks to selective breeding Persians are now found in a kaleidoscope of colors, including bi-color (a color plus white).`,
        originally: 'Persian cat is one of the oldest known breeds of cat. The early history isn’t entirely known although it is generally accepted that the early cats came from Persia (now Iran) and Turkey. Italian traveler Pietro Della Valle (1586 – 1652) is credited with bringing the first Persian cats back to Europe, arriving in his homeland of Italy in 1620 with them.',
        currentlyUsedAs: `Persian cats are currently used as pet.`,
        livingCondition: 'Persian are one of the most domesticated of all cats. They should not be treated as outdoors cats. They gel well with the apartment culture and become vulnerable when exposed to the outside dirt because of their flat nose.',
        training: `Soft hearted Persians are fussy about rude behavior. Make sure you never yell or fuss. For first few weeks they need extra love, care and attention. Baby talk to the kittens. This will help them socialize and bond with humans. `,
        healthCare: ' Persians have hereditary health issues that can be a concern. They include polycystic kidney disease (PKD), progressive retinal atrophy (PRA), hypertrophic cardiomyopathy (HCM), bladder stones, cystitis (bladder infections), and liver shunts. Responsible breeders take steps to avoid these problems.',
        excersie: `Persians being quiet by nature need more motivation for physical activity. They require more interactive toys, like the good old-fashioned ribbon on a string. Spend a few minutes per day playing with them to keep them fit and help maintain yourbond. Few toys like, remote control mice and laser pointers are irresistible so you try it to make them chase.`,
        grooming: `Persians demand more grooming than any other breed. Their long hair needs regular maintenance- combing, brushing, bathing and clipping. Preciseness of products- shampoo similar to coat’s hair, long nail clipper and soft bristled brush is important in the process of grooming.`,
        pros: [`Persians are even- tempered and calm by nature. They are adapt well with transfers or additions in family. These cats are mostly quiet and have melodious voice. Usually comfortable indoors.`
        ],
        cons: [`Grooming this cat is must. Long hair needs combing on daily basis to prevent matting. Weekly bathing is required to maintain their shiny coat. They are prone to breathing and digestion problems. Persians don’t like to be left alone for long periods, its better if there's another pet living with you too that will provide company when you're not there.`
        ],
        imageURL: `https://cdn.shopify.com/s/files/1/1199/8502/files/persian-doll-face.jpg`
    },
    {
        breed: `BENGAL CAT`,
        origin: `USA`,
        rating: 5,
        id: 202,
        lifeExpectancy: {
            from: 9,
            to: 15
        },
        breedAppearance:'Bengal cats are a lithe and agile breed and generally weigh between 8–15 pounds. They are prized for their dense, short coats that are boldly patterned in different shades of brown, silver, and snow. Their fur is super soft to the touch, feeling a bit like bunny hair. The most common eye colours found in Bengal cats are brown, yellow, orange, and green.A Bengal cats coat is what sets him apart from all other felines. In fact, Bengals are the only breed that can have rosette markings that directly reflect their wild Asian leopard ancestry. Spotted or marbled coats are also popular and just as gorgeous. Because their fur is so short, they only require a weekly brushing to remove loose hair and dead skin cells.Although Bengal cats weigh about the same as a typical house cat, theyre generally larger in size because of their long, muscular bodies. And their lengthy legs make them excellent jumpers, so do not be surprised if you find your Bengal staring down at you from shelves and countertops. ',
        breedHighlights:'The Bengal is a domestic cat that has physical features distinctive to the small forest-dwelling wildcats, and with the loving, dependable temperament of a family pet. As such, some characteristics in the appearance of the Bengal are distinct from those found in other domestic cat breeds.',
        weight: {
            from: 4.5,
            to: 6.5
        },
        height: {
            from: 33,
            to: 40
        },
        litterSize: 3-6,
        history: `Although crosses between Asian leopard cats and domestic cats occurred as early as the 1800s, the breed didn't really come into its own until the mid-20th century. Breeder and conservationist Jean Mill first crossed a domestic cat with an Asian leopard cat in 1963, according to the Cat Fanciers' Association. By 1996, Bengals were registered by the CFA. The accepted animals come from the F6 generation or higher.
        Of course, when you consider their warm, intelligent personalities and eye-popping coat colours and patterns, it's no surprise that they have quickly become one of the most popular breeds in the world, outpacing cats that have been around for generations.`,
        originally: 'USA',
        currentlyUsedAs: `Bengals are very entertaining and affectionate. They make great pets, but you have to be prepared for their playful personality and incredible intelligence. Like their ancestors, Bengal cats are very active creatures. They are energetic and require entertainment. If these cats do not get the action they need, they may damage household items and furniture.
        A Bengal cat with a tabby-pattern coat carrying a cat toy. Bengals are also known as avid thieves. They often steal and hide items they find intriguing (imagine jewellery, coins, keys). On top of this, most Bengals love splashing in the water and playing with paper, so keep important documents locked and offer lots of toys to keep them busy.
        Overall, Bengal cats are confident, curious, and happy. They are no more aggressive than the average domestic cat, and, as with all cats, their temperament can be moulded with training. They are also friendly and loving, and it’s not unusual for them to develop great loyalty to a single family member.`,
        livingCondition:'A Bengal cat is happiest when he is near you. He does not care where he lives, whether it be a big house or small apartment, as long as you and your family are nearby. But no matter the size of your space, a Bengal needs to have lots of things to do—and climb.Owners should have at least one cat tree for this big kitty, along with plenty of toys to keep him entertained while you are away. And if you spend long hours away from home, having a second cat is a good idea to help keep your pet amused and busy. Bengal cats also have a high prey drive and enjoy watching birds, squirrels, and other animals from safely inside your home. Because of his love of chattering at the window, it is a great idea to install a carpeted perch (or two) to give him a comfortable viewing spot. Bengals are active and intelligent cats. To keep him happy and healthy, you need to give him ample mental and physical stimulation. Just try not to leave breakable items on a shelf or mantel that your Bengal can reach. Remember: This breed is super agile, so it is inevitable your cat will eventually explore every high-up spot he can reach. So, if you are proud of your Faberge egg collection, secure them someplace where your cat can not knock them over. Installing cat shelves in your home could help keep him away from your breakables, too! And although they are not considered couch potatoes, Bengals will curl up on your lap for a good snooze after a busy day of chasing toy mice.',
        training: `Bengal cats are easier to train than most cat breeds. They are considered to be one of the smartest cat breeds. With time and consistency, they can learn tricks and develop certain behaviours. The effort involved to train your cat will depend on his or her personality and their interest level in the activity.`,
        healthCare:' Your Bengal cat will need all of the same immunizations and preventative health treatments as a domestic cat. They are not as immune to the feline leukaemia virus as their ALC ancestor is. Purebred cat breeds are more prone to genetic diseases than mixed breed domestic cats due to the fact that the gene population that they come from is smaller. As most Bengal cats today are several generations removed from the African leopard cat, they require no special care. They are simply larger "house cats." You should groom your cat with weekly combing to remove the dead hair and help prevent hairballs. Trim your cats nails every couple of weeks and provide a scratching post. Provide a clean and fresh litter box as any cat is bound to start refusing to use a dirty, smelly one.Bengal cats are active and you should provide a climbing tree and opportunities for your cat to find a perch to survey the room. Provide interactive toys to engage your cat. Spend time playing together; you can train your cat to fetch and "catch the laser dot."Bengal cats are known to love water, a trait that most house cats do not possess. You may have to be careful that your aquarium does not become a fishing pond. As with any cat, a Bengal cat is best kept as an indoors-only cat. That protects them from catching diseases from other animals, getting into fights, being attacked by predators, or being hit by vehicles. This breed should get along well with dogs and other cats. However, if you have gerbils, hamsters, or guinea pigs you may find them being stalked by your cat. It is best to keep cats separate from their natural prey.',
        excersie: `Bengals love to run and play and especially to climb up high. A tall scratching post especially with perches at the top is a very good addition to a home with a Bengal. 
        A cat wheel such as the one made by one fast cat will help your Bengal get most of the exercise that they need. With very little training they usually take right to it! It's so much fun to watch them walking and running full speed on the wheel. We find the exercise wheel made by one fast cat to be a nice quiet wheel relative to others we have purchased and it literally took less than ten minutes of play with our Bengal Girls to get them up and running.  From there it is just a matter of any new Kitten or cat watching others play and on and on it goes with no further training required in many cases.`,
        grooming: `The Bengal cat's short glossy coat does not require excessive grooming but they will enjoy the attention gained from being groomed. As with most shorthair breeds, Bengal cats look after their coat very well. As with all cats, this breed needs regular vaccinations, parasite control and annual health checks.`,
        pros: [`Highly affectionate.
                Are inquisitive and intelligent.
                Love going on walks.`
        ],
        cons: [`Can get lonely.
                Love to scratch and make mischief.
                Get bored easily.`
        ],
        imageURL: `https://cdn.shopify.com/s/files/1/1199/8502/files/Bengal_Cat_in.jpg?v=1646365765`
},
{
    breed: `AMERICAN BOBTAIL`,
  
    origin: `USA`,
    rating: 5,
    id: 206,
    lifeExpectancy: {
        from: 11,
        to: 15
    },
    breedAppearance:'Most notably, these cats have a shortened tail which averages between 1-4 inches in length. Their tails can also appear to be straight, slightly curved, kinked, or bumpy along the sides. The American Bobtails striking appearance makes them look as though they are wild.',
    breedHighlights:'American bobtail cats are known for their wild appearance and short bobbed tails. This cat breed is a loving, playful pet.',
    weight: {
        from: 7,
        to: 16
    },
    height: {
        from: 9,
        to: 10
    },
    litterSize: 5,
    history: 'The American Bobtail is an uncommon breed of domestic cat which was developed in the late 1960s.Urban legend says that Bobtails are the result of a cross breeding between a domestic tabby cat and a wild bobcat. The unusual tail is actually the result of a random spontaneous genetic mutation within the domestic cat population, and may be related to the Manx gene, which is also dominant. Yodie, a short-tailed brown tabby male, was mated with a seal-point Siamese female to create the American Bobtails original bloodline. Most of the early bloodlines have died out.This cats original appearance genetics were modified in the breed to form a new and improved strain which comes in essentially all colors and coat types. The breed was first recognized by The International Cat Association (TICA, US-based), in 1989. The breed has been accepted for championship competition by TICA, the Cat Fanciers Association (CFA, also US-based)[3] and the American Cat Fanciers Association (ACFA).[4][5] The breed is technically also sanctioned in the Cat Aficionado Association (CAA) of China, by virtue of the CAA having adopted all of ACFAs breed standards; it is unknown if any specimens are actually in China. The breed is "recognized" (as existing), as both American Bobtail Longhair and American Bobtail Shorthair, in the Germany-based World Cat Federation (WCF), but is not "accepted" for competition[6] and has no WCF breed standard.',
    originally: 'The American Bobtail is an uncommon breed of domestic cat which was developed in the late 1960s. It is most notable for its stubby "bobbed" tail about one-third to one-half the length of a normal cats tail.',
    currentlyUsedAs: 'American Bobtail is currently used as a pet.',
    livingCondition:'American bobtails love to be loved and have tons of love to give in return. These sweet cats need lots of human interaction and do not do well when left alone for long periods of time. Busy families be aware: Your bobtail will need constant affection. But if you spend a lot of time on the road, the American bobtail travels well and makes an excellent traveling companion. These social cats get along with pretty much everyone and do not mind homes with frequent visitors. In fact, they will probably bolt to the door to greet guests before you do! Because they crave interaction, they will try to make friends with just about anyone—you will need to keep an eye on your American bobtail to make sure he does not head outside for a meet and greet with less-friendly animals and people. To satisfy your kittys curious nature and social needs, you can leash-train him and take him on strolls around the neighborhood.',
    training: `Owing to their superior intelligence and willingness to please, American Bobtails are a lot easier to train than most other cats. However, it is best to start training them when they are still kittens, especially when it comes to leash training.
    Bobtails will not give you any problems when it comes to litter box training.`,
    healthCare:'Bobtails are prone to hip dysplasia, a hereditary disease that has the potential to cause crippling, lameness and arthritis of the hip joints. Although generally healthy cats, some bobtail cats are born without tails. Bobtail cats without tails are known as “rumpies”.',
    excersie: `American Bobtails are a fairly energetic breed. As such, it is crucial that you provide them with an outlet for releasing that energy to not allow them to stay in shape, but also to prevent the development of destructive behaviors.
    Fortunately, thanks to their willingness to interact with their humans, Bobtails are much easier to exercise than most cat breeds. Like dogs, the American Bobtail enjoys walks. Therefore, make sure that you leash-train them early so that they can be comfortable wearing one.
    Other ways to exercise your Bobtail include playing games such as ball chasing, fetch, and making them hunt a toy attached to a string. Make sure to leave toys around the house so that the cat can play by themselves when you are not around.
    In addition to physical exercise, this intelligent animal requires mental stimulation as well. Therefore, invest in puzzle toys such as treat prize games and food mazes to keep them occupied for extended periods at a time.`,
    grooming: `Thanks to their short coats, the American Bobtail does not require as much care as other cats do. Occasional brushing, at least once a week, should be enough to help them shed and maintain a healthy coat.
    Make sure that you trim nails at least once a month, as long claws can affect their ability to walk comfortably. Therefore, in the same light, ensure that you have a scratching post in the house so the cat can trim its nails naturally.
    Every couple of weeks, clean their ears, as they are a hotbed for infections. To clean, dip a piece of cotton wool in a cat cleaner solution, and then dab the inside of the ear gently to remove any debris.`,
    pros: ['American Bobtail cats are self-assured, intelligent, active, and sociable. These qualities make them great companions and suitable for families of all ages. American Bobtails are said to be very social cats and will generally get along with other pets, including cats if introduced early.'
],
    cons: [`Bobtails are prone to hip dysplasia, a hereditary disease that has the potential to cause crippling, lameness and arthritis of the hip joints.`
],
    imageURL: `https://www.petsworld.in/blog/wp-content/uploads/2014/07/American-Bobtail1.jpg`
},
{
    breed: `AMERICAN CURL`,
    origin: `USA`,
    rating: 5.5,
    id: 205,
    lifeExpectancy: {
        from: 13,
        to: 15
    },
    breedAppearance:'The American Curl has medium-sized bones so she is not a delicate cat despite the length of the body. The head of the American Curl is wedge shaped with eyes that are shaped like a walnut. Her tail is long. Her unique feature, of course, is that her ears curl backwards.',
    breedHighlights:'The head of the American Curl is wedge shaped with eyes that are shaped like a walnut. Her tail is long. Her unique feature, of course, is that her ears curl backwards. Her ears are large, and curve in a smooth arc of at least 90 degrees.',
    weight: {
        from: 8,
        to: 12
    },
    height: {
        from: 9,
        to: 12
    },
    litterSize: 5,
    history: 'The first American Curls appeared as strays on the door step of the Rugas in Lakewood, California in June 1981.The black female, named Shulamith, gave birth to a litter of cats with the same curled ears, and so became the ancestor of all American Curls today.In 1986, an American Curl was exhibited at a cat show for the first time, and in 1992, the longhaired American Curl was given championship status by The International Cat Association (TICA). In 1999, the American Curl became the first breed admitted to the Cat Fanciers Association (CFA) Championship Class with both longhair and shorthair divisions.',
    originally: 'The first American Curls appeared as strays on the door step of the Rugas in Lakewood, California in June 1981. The black female, named Shulamith, gave birth to a litter of cats with the same curled ears, and so became the ancestor of all American Curls today.',
    currentlyUsedAs: 'American curl is currently used as a pet.',
    livingCondition:'When not curling up with his humans, the American curl appreciates a quiet place to nap on his own. Curls have been known to commandeer salad bowls, boxes, and milk crates for slumbering, especially any left in a lofty position. But you should give him his own cat bed, hammock, and other comfy spaces that are just for him. American curls are highly adaptable cats, Gerken says, and do great with seniors, first-time cat parents, and families with children. In fact, the American curl is one of the few cat breeds that seem to seek out children and enjoys play sessions with them, according to the CFA. However, Gerken says very small children should be supervised and taught how to interact with pets. Make sure they know to not play with the American curls delicate ears!',
    training: `Because American curls are intelligent cats, pet parents are encouraged to teach them tricks," Gerken says. "Training cats is not just a fun way to show-off to visitors to the home, but is great mental stimulation for the cats too.`,
    healthCare:'The American Curl is well regarded for its health, hardiness and adaptability. With no known genetic defects or predispositions to physical ailments, it rarely gets ill. Kittens also have a strong immune system and respond well to immunization shots. ',
    excersie: `The American Curl enjoys daily exercise. They relish cat trees in the house with perches for climbing and jumping. If they are provided with enough exercise space, they tend to maintain their weight rather well. They also like interactive play. While not considered a "lap cat," the Curl likes to be next to people.`,
    grooming: `A longhaired Curl should be combed twice a week to prevent or remove mats and tangles. The only other grooming the American Curl needs is regular nail trimming, usually weekly. Brush the teeth frequently with a vet-approved pet toothpaste for good overall health and fresh breath.`,
    pros:['American Curls are friendly, affectionate, and docile cats that love to bond with their owners. The American Curl is a joyous cat. He loves to play, even well into old age.'
],
    cons: [`Due to the unique shape of the American Curl's ears, some may be born with narrowed ear canals. These narrowed canals can trap wax, which can lead to ongoing ear infections.`
],
    imageURL: `https://www.petsworld.in/blog/wp-content/uploads/2014/07/American-Curl.jpg`
},
{
    breed: `BURMESE CAT`,
    origin: `Thailand`,
    rating: 3.5,
    id: 203,
    lifeExpectancy: {
        from: 10,
        to: 17
    },
    breedAppearance:'The Burmese is a cat that is round all over. The head is round, the tips of the ears are round, the eyes, chin and even the feet are round. This breed is solid both in looks and in feel and has great strength. The coat of the Burmese is short and glossy.',
    breedHighlights:'The Burmese is highly intelligent, affectionate and extremely loyal. They love being with people, but also gets along well with other cats and even dogs. One of their most endearing qualities is that they love to perform tricks.',
    weight: {
        from: 8,
        to: 12
    },
    height: {
        from: 9,
        to: 13
    },
    litterSize: 6-8,
    history: `The Burmese cat is a breed of domestic cat, originating in Burma, believed to have its roots near the Thai-Burma border and developed in the United States and Britain.
    Most modern Burmese are descendants of one female cat called Wong Mau, which was brought from Burma to America in 1930 and bred with American Siamese. From there, American and British breeders developed distinctly different Burmese breed standards, which is unusual among pedigreed domestic cats. Most modern cat registries do not formally recognize the two as separate breeds, but those that do refer to the British type as the European Burmese.
    Originally, all Burmese cats were dark brown (sable), but are now available in a wide variety of colours; formal recognition of these also varies by standard. Both versions of the breed are known for their uniquely social and playful temperament and persistent vocalization.`,
    originally: 'Myanmar, Thailand',
    currentlyUsedAs: 'Burmese cats are loving, playful, and highly social. Expressing a number of tendencies that have been described as "dog-like," Burmese tend to develop strong loyalty bonds with their humans and have been described as a "Velcro cat," wanting to spend as much time as possible around their people.',
    livingCondition:'Whether they are playing or just sitting on the couch, the biggest factor in having a happy Burmese is going to be proximity to you. They develop loyalty bonds quickly and want to be wherever you are. If your lap is empty, your Burmese will happily climb into it to snooze, says M. Leanne Lilly, DVM, DACVB, assistant professor-clinical at the Ohio State University Veterinary Medical Center.Along with your lap, Lilly also says Burmese cats are more likely to favor sleeping in warm, elevated areas. So if you bring home a Burmese kitten, make sure you have a cat tree and a hammock for her to curl up in. But don ot expect this breed to spend all her time asleep.',
    training: `If you harness train her, she'll be your best adventure buddy. Cat toys that mimic mice and birds will make your Burmese purr. With an almost doglike personality, the Burmese can be taught to retrieve. This breed is good with children and tolerates cat friendly dogs. Having a short, satinlike coat and compact body, this cat has large, expressive eyes that are one of the breed's endearing traits.`,
    healthCare:'With an almost doglike personality, the Burmese can be taught to retrieve. This breed is good with children and tolerates cat friendly dogs. Having a short, satinlike coat and compact body, this cat has large, expressive eyes that are one of the breeds endearing traits.Their super short coats and relative lack of shedding make the Burmese a breeze to groom. Brushing and bathing should be virtually nonexistent, save for a little combing during traditional shedding seasons in the spring and fall, but even those times should be fairly light. ',
    excersie: `The Burmese cat breed needs daily exercise combined with plenty of mental stimulation through active play and interaction with people. Cat parents can use cat toys like the Mousr or Cat Dancer to get their cats to play. This will encourage your cat to play.`,
    grooming: `The silky coat of the Burmese does not shed much and is easy to groom with weekly brushing. The only other grooming requires is regular nail trimming and ear cleaning. The Burmese is well suited to any home with people who will love him and give him the attention and love he desires.`,
    pros: ['Very active, Learns Tricks, Long life expectancy, Gets along well with other cats and dogs.'
    ],
    cons: [`They are not loners.
            Prone to asthma,
            sinus problems and
            dental issues.`
    ],
    imageURL: `https://www.petsworld.in/blog/wp-content/uploads/2014/07/Burmese-Cat.jpg`
},
{
    breed: `CALIFORNIA SPANGLE`,

    origin: `California`,
    rating: 2.5,
    id: 209,
    lifeExpectancy: {
        from: 9,
        to: 16
    },
    breedAppearance:'The California Spangled is a breed of domestic cat that was bred to resemble spotted wild cats, like the ocelot and leopard. They were usually expensive, priced between US$800 and $2,500. The popularity of two other spotted cats breeds, the Ocicat and the Bengal, overshadowed their development.',
    breedHighlights:'The California Spangled Cat is energetic, active, and, though it sports a wild look, easy to tame. Affectionate and intelligent, it will return its owners love in full measure, though it will also scheme to get its way. A born athlete, the California Spangled Cat is capable of acrobatic high jumps.',
    weight: {
        from: 8,
        to: 15
    },
    height: {
        from: 8,
        to: 10
    },
    litterSize: 4,
    history: 'Originally bred by Paul Arnold Casey, Jr., a Hollywood scriptwriter, playwright, and author, after his return from Tanzania while working with Louis Leakey in the 1970s. Caseys novel, "Open The Coffin" chronicles his journey in Africa and subsequent breeding that led to the California Spangle.This animal was ideally bred to resemble a leopard, thus giving the impression of a "House-Leopard". One of many motivations for this breed was that people would not want to wear the same type of fur that resembled their pet.The Spangle was introduced to the general public on the cover of the iconic Neiman Marcus Christmas catalog in 1986.',
    originally: 'California',
    currentlyUsedAs: 'The California Spangled is a breed of domestic cat that was bred to resemble spotted wild cats, like the ocelot and leopard. Its is currently used as a pet.',
    livingCondition:'California Spangled cats adapt well to life as an only pet, because they are independent by nature. They are a strong breed and because of this have no known hereditary health problems. Their short short sleek coat is easy to maintain and weekly grooming will keep it in good condition.',
    training: `The high intelligence of the California Spangled cat makes the breed easy to train if that’s something that owners are interested in doing. These cats can be taught to retrieve items, clean up toys, and even verbally communicate on command. That said, training cats, no matter how smart they happen to be, requires patience and commitment. After all, cats have a stubborn side and only cooperate when they feel like it.
    If possible, work with a cat training professional for a few days to get a clear understanding of how training sessions should be done and to learn about techniques and tactics that you can use to optimize each session based on your cat’s specific personality and level of interest.`,
    healthCare:'California Spangleds are generally considered to be healthy cats; although, it is important to schedule regular wellness visits with your cats vet.There are not any breed-specific health problems associated with the California Spangled, but always keep an eye out for signs that your cat might be in distress or pain. The California Spangled is always going to be ready and willing to embark on a play session or explore the highest parts of their environment. So, as a responsible guardian, you will need to first make sure that their home is spacious enough and well equipped to satisfy the mixed breeds exercise needs.A cat tree is a must--or if you have the room, feline-friendly shelving that the cat can climb and jump between is ideal. If you have the option of adding a secure catio to your home, the California Spangled will love the chance to be safely outside!Along with scheduling yearly wellness vet visits, your California Spangled will need to have their nails checked and trimmed on a regular basis. If you are new to cat adoption, your vet can show you the safest way to carry this out. Adding a scratching post to your living environment can also help promote healthy scratching and keep the cats nails in good condition.Beyond nail care, examine the California Spangleds ears for signs of dirt building up or possible infection every couple of weeks.It is also advisable to talk with your vet about starting a regular teeth brushing regimen that will suit your California Spangled.',
    excersie: `Due to the California Spangled cat’s active nature, this breed needs to get exercise through playing and exploring during the day. Human companions can interact with their cats by using toys like balls, feathers, and strings for extra exercise and stimulation when necessary. Scratching posts, climbing trees, and play tunnels can all help keep this breed in good physical and mental health.
    Introducing another cat to the household is a great way to make sure your pets get the exercise that they need, as they will have a companion to play with when the humans are away from the house. You will likely witness your California Spangled cat playfully chase your other kitty around the house.`,
    grooming: `The California Spangled Cat is a shorthaired breed, so there is no need to worry about matting or tangles. A quick combing or brushing twice a week is all that should be needed to keep this cat's coat looking clean, shiny, and dander-free.`,
    pros:['California Spangled cats are practiculating affectionate, highly intelligent, very energetic and playful, hypoallergenic and are not aggressive.'
],
    cons: [`Yet, despite its wild-looking appearance, the cat is extremely docile—preferring the companionship of family and often seeking attention and affection.`
],
    imageURL: `https://www.petsworld.in/blog/wp-content/uploads/2014/07/California-Spangled-Cat.jpg`
},
{
    breed: `MAINE COON`,
    origin: `USA`,
    rating: 4.5,
    id: 207,
    lifeExpectancy: {
        from: 12,
        to: 15
    },
    breedAppearance:'The Maine Coon is a large and sociable cat, hence its nickname, "the gentle giant." It is characterized by a prominent ruff along its chest, robust bone structure, rectangular body shape, an uneven two-layered coat with longer guard hairs over a silky satin undercoat, and a long, bushy tail.',
    breedHighlights:'She is a calm and affectionate gentle giant. The Maine Coon is known for its large size and thick double coat of long hair which is well suited for the harsh winters in Maine, the state from which they originated. Relaxed and laid-back, Maine Coons are not overly dependent, but they are people oriented.',
    weight: {
        from: 3.6,
        to: 8.2
    },
    height: {
        from: 10,
        to: 16
    },
    litterSize: 4-5,
    history: 'The Maine Coon is one of the largest domesticated cats. It has a distinctive physical appearance and valuable hunting skills. The breed was popular in cat shows in the late 19th century, but its existence became threatened when long-haired breeds from overseas were introduced in the early 20th century.The ancestral origins of the Maine Coon are unknown,some speculate that they are descended from Norwegian forest cats or Siberian forest cats, which may have been brought to New England by settlers.',
    originally: 'It is one of the oldest natural breeds in North America. The breed originated in the U.S. state of Maine, where it is the official state cat. The breed was popular in cat shows in the late 19th century, but its existence became threatened when long-haired breeds from overseas were introduced in the early 20th century.',
    currentlyUsedAs: 'Maine Coonis currently used as a pets.',
    livingCondition:'Maine Coons can adapt to any type of home in any climate and, although they are built for outdoor living, it is safer to keep them inside so they do not get hit by cars or run the risk of disease spread by cats. ',
    training: `There are a variety of ways to train a Maine Coon cat, but every method involves patience and persistence. You should set up a schedule to train your Maine Coon daily or every other day. Avoid using negative reinforcements or punishments, as cats learn best through positive reinforcement, such as praise or treats.`,
    healthCare:'Even though Maine Coon cats are considered a hardy breed, there are some hereditary health issues they are prone to. They include hypertrophic cardiomyopathy, hip dysplasia and spinal muscular atrophy.',
    excersie: `Maine coons don't have any special exercise needs—they'll keep the same activity schedule of most cats, with long hours of sleep and playful bouts of jumping and running through the house. Cat toys and cat trees can help them work out some of that energy. These super-intelligent cats are easily trainable.`,
    grooming: `To groom your Maine Coon cat, start by combing it from head to tail with a steel comb. Then, brush the fur upwards with a bristle brush to get rid of any dead fur from both layers of its coat. Additionally, use scissors to cut out any mats you can't brush out.`,
    pros: ['Maine Coon cats are an intelligent breed of cats. They are naturally curious. Because of this, some owners have successfully taught their Maine Coon to do tricks. If you want a loyal cat, then a Maine Coon is a great choice. They treat everyone in their household as their family. Maine Coon cats are also wonderful with children and other pets.Don’t let their luscious coat intimidate you. Maine Coon cats are typically easier to groom than other long-haired cats. They are also relatively healthy cats. They are active and playful. Maine Coon cats are excellent mousers. They enjoy hunting and chasing. There will be lots of fun times with a Maine Coon cat!'
],
    cons: [`As mentioned, Maine Coon cats are a strong and healthy breed. However, there are some possible hereditary or genetic health issues. It is important to be cautious about whom you buy or adopt your Maine Coon from. Make sure to find a reputable breeder. Being aware of these possible health issues would help you with your buying choices and on how you would care your Maine Coon. Some of these health concerns are hip dysplasia and hypertrophic cardiomyopathy. The Maine Coon cat’s size may be a factor for the predisposition to hip dysplasia. Male Maine Coon cats can grow up to 15-25lbs. HCM or hypertrophic cardiomyopathy, on the other hand, is the most common form of heart disease and may affect middle to old age Maine Coon cats.
    While there may be some areas of concern, Maine Coon cats are surely lovable. There will be so many owners and enthusiasts that can tell you that it’s worth it to welcome this gentle giant into your home.`
],
    imageURL: `https://www.petsworld.in/blog/wp-content/uploads/2014/07/Maine-Coon.jpg`
},
{
    breed: `SCOTTISH FOLD`,
    origin: `Scotland`,
    rating: 4,
    id: 204,
    lifeExpectancy: {
        from: 11,
        to: 15
    },
    breedAppearance:'The Scottish Fold is a medium-sized cat with medium sized boning. She is a very round looking cat. The head is round and the folded ears heighten that illusion of roundness. The eyes are very round, bright and clear.',
    breedHighlights:'The nose is short with a gentle curve, and the cats body is well-rounded with a padded look and medium-to-short legs. The head is domed at the top, and the neck very short. The broadly-spaced eyes give the Scottish Fold a "sweet expression". The scottish folds ears are folded hence the name "Scottish Fold".',
    weight: {
        from: 6,
        to: 13
    },
    height: {
        from: 8,
        to: 10
    },
    litterSize: 5,
    history: 'The original Scottish Fold was a white barn cat named Susie, who was found at a farm near Coupar Angus in Perthshire, Scotland, in 1961. Susies ears had an unusual fold in their middle, making her resemble an owl. When Susie had kittens, two of them were born with folded ears, and one was acquired by William Ross, a neighbouring farmer and cat-fancier. Ross registered the breed with the Governing Council of the Cat Fancy (GCCF) in the United Kingdom in 1966 and started to breed Scottish Fold kittens with the help of geneticist Pat Turner. The breeding program produced 76 kittens in the first three years – 42 with folded ears and 34 with straight ears. The conclusion from this was that the ear mutation is due to a simple dominant gene.Susies only reproducing offspring was a female Fold named Snooks who was also white; a second kitten was neutered shortly after birth. Three months after Snooks birth Susie was killed by a car. All Scottish Fold cats share a common ancestry to Susie.',
    originally: 'Scotland, United Kingdom',
    currentlyUsedAs: 'Scottish Fold currently used as pets',
    livingCondition:'Because Scottish fold cats are medium-sized and mostly short-haired, they can live almost anywhere with minimal work on your part. They can be as happy in a one-room apartment as they are in a spacious mansion. ',
    training: `Scottish folds are also quite intelligent and are easily trained to do basic tricks (but, of course, they are cats, so any training is always on their terms). The Scottish fold can be, trained to use a litter box, to come when it is, called, the Scottish fold can be, trained to fetch, and even other things like to jump from one place to another. There are many other things the folds can be, trained to do as long as it is safe for the fold.`,
    healthCare:'The Scottish Fold is a pretty healthy breed, but there are some hereditary health problems in the breed: Osteochondrodysplasia, a developmental abnormality that affects cartilage and bone development; Polycystic kidney disease (PKD); Cardiomyopathy, a form of heart disease.',
    excersie: `The Scottish Fold cat breed needs daily exercise combined with plenty of mental stimulation through active play and interaction with people. Cat parents can use cat toys like the Mousr or Cat Dancer to get their cats to play. This will encourage your cat to play.`,
    grooming: ` Overall, Scottish Folds do not require any special grooming. In order to keep their coat healthy and to remove dead hairs, your cat should be brushed at least once a week—more brushing typically means less hair on your furniture and your clothes.`,
    pros: ['The Scottish Fold is a sweet, charming breed. She is an easy cat to live with and to care for. She is affectionate and is comfortable with all members of her family. Her tail should be handled gently.'
],
    cons: [`Common features of the Scottish Fold include malformations in the forelimbs, hindlimbs, spine and tail. This ultimately leads to painful, stiff, or even fused joints. And we are not just talking about a small unfortunate selection of these cats.`
],
    imageURL: `https://www.petsworld.in/blog/wp-content/uploads/2014/07/Scottish-Fold.jpg`
},
{
    breed: `TURKISH ANGORA`,

    origin: `Turkey`,
    rating: 4,
    id: 208,
    lifeExpectancy: {
        from: 12,
        to: 18
    },
    breedAppearance:'The Turkish Angora is generally a medium sized cat. She has a long, slender body with fine boning. She is a muscular cat and should not appear thin or emaciated. The ears of the Turkish Angora are tall as are the slightly slanted eyes.',
    breedHighlights:'With their high intelligence and gorgeous white fur, it is easy to see why the Turkish Angora is a national treasure in their home country.',
    weight: {
        from: 8,
        to: 15
    },
    height: {
        from: 9,
        to: 14
    },
    litterSize: 4,
    history: 'The wild ancestors of the Turkish Angora were some of the first cats domesticated in the Middle Easts Fertile Crescent. An old breed, Europeans noticed them sometime around the 16th century, according to the Turkish Angora Breed Council (TABC), when their brilliant white, long-hair coats made them prized as breeding stock for the more popular Persian.So prolific was this outbreeding process that it nearly drove the Angora to extinction by the end of the 19th century, as their own bloodlines were given a back seat to building up the Persians.The Turkish Angora was saved from oblivion by caretakers in their home country who began collecting white Angoras for breeding and preservation in the Ankara Zoo in the early 20th century, according to the TABC. The zoo has bred and raised Angoras ever since, but did not begin selling cats for export outside of Turkey until the 1960s when breeding pairs began making their way to Canada and the United States.Today, Turkish Angoras are still a rare breed, but they were accepted by the Cat Fanciers Association for championship in 1973. All registered Angoras must still be able to trace their lineage back to the Ankara Zoo.',
    originally: 'The Turkish Angora (Turkish: Ankara kedisi, "Ankara cat") is a breed of domestic cat. Turkish Angoras are one of the ancient, natural breeds of cat, having originated in central Anatolia, (modern-day Turkey, Ankara region).',
    currentlyUsedAs: 'Turkish Angora is currently used as a pet.',
    livingCondition:'Turkish Angoras can get along well with children if they are socialized to them well enough, though very little ones should be cautioned about pulling their long hair or tugging on tails. They are not as accepting of being handled by small kids as some other breeds, like the Himalayan, Nichols says.Angoras are happily accepting of other cats as well as dogs, if properly introduced. But they tend to do just as well on their own and do not traditionally exhibit a lot of stress behaviors if left alone. Like all cats, Turkish Angoras need a variety of toys and a few scratching posts to keep themselves happy (and save your couch from claw marks). They also tend to be loft perchers, so give them some kind of high vantage point from which to sit and watch the house. "They tend to be climbers [and] like to sit up high," Nichols says. A tall cat tree, mounted cat shelves, or a high-up cat hammock will be your Angoras go-to spot. If not designated a tall place to sit, they are most likely going to commandeer one on top of a bookcase or door.',
    training: `It's a good idea to have another lively feline playmate for The Turkish Angora to play with when you are away.`,
    healthCare:'Turkish Angoras are susceptible to bacterial and viral infections such as panleukopenia, calicivirus, rhinotracheitis, and rabies, which are preventable through vaccination. ',
    excersie: `Provide plenty of places to climb. Turkish Angoras love to climb, jump, and play. They will climb on bookcases and tall cabinets.`,
    grooming: `Maintain the Turkish Angora coat by brushing once or twice a week with a fine-toothed comb or slicker brush to remove excess hair and prevent mats. During the summer, brush more often to prevent hairballs.`,
    pros: ['They are very lively, playful and active. They love jumping around everything and watching things from on high. If they think they can help their humans with something, they will be at your side right away, trying to solve the problem in their own way. The Turkish Angora is very friendly, cheerful, open and sociable.'
],
    cons: [`The Turkish Angora doesn't like being left alone or being left to its own devices. To get attention, they sometimes even chew things. You should take things with a pinch of salt and a sense of humor and don't lose your patience if your Turkish Angora keeps on throwing up surprises.`
],
    imageURL: `https://www.petsworld.in/blog/wp-content/uploads/2014/07/Turkish-Angora.jpg`
}
];
