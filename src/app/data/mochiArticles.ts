export interface ArticleData {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  heroImage: string;
  readTime: string;
  byline: string;
  paragraphs: { subheading?: string; text: string }[];
  vetCtaText: string;
  topics: string[];
  breedRelevance?: string[];
  ageRange?: "kitten" | "adult" | "senior";
  followUps: { question: string; articleId: string }[];
}

const ARTICLE_IMAGES = [
  "/article-1.jpg",
  "/article-2.jpg",
  "/article-3.jpg",
  "/article-4.jpg",
  "/article-5.jpg",
];

function stockImage(index: number): string {
  return ARTICLE_IMAGES[index % ARTICLE_IMAGES.length];
}

function buildArticlePool(catName: string, breed: string | null, ageText: string): ArticleData[] {
  const breedName = breed || "cat";

  return [
    // ── Behavior ──
    {
      id: "behavior-bathroom",
      category: "Behavior",
      categoryColor: "#ef4444",
      title: `Why does your ${breedName} follow you to the bathroom?`,
      heroImage: stockImage(0),
      readTime: "3 min read",
      byline: "Mochi",
      topics: ["anxiety", "bonding", "territory"],
      paragraphs: [
        {
          text: `If your cat trails you into the bathroom every single time, you're not alone. This is one of the most common quirks cat owners notice — and it's actually a sign of a healthy bond.`,
        },
        {
          subheading: "It's about trust, not nosiness",
          text: `Cats are territorial creatures, and your bathroom is part of their domain. When your cat follows you in, they're essentially saying "this is our space." It's also a moment where you're stationary and calm — two things cats love.`,
        },
        {
          subheading: "The vulnerability factor",
          text: `In the wild, a cat in an enclosed space is vulnerable. By joining you, your cat is both guarding you and showing they feel safe enough to be in a small room with you. It's a mutual trust thing.`,
        },
        {
          subheading: "When to pay attention",
          text: `If the following becomes excessive — shadowing you to every room, vocalizing when separated — it could signal separation anxiety. A quick chat with a vet can help rule out stress-related behavior.`,
        },
      ],
      vetCtaText: "Talk to a vet",
      followUps: [
        { question: "Why do cats knock things off tables?", articleId: "behavior-knocking" },
        { question: "How to build trust with a shy cat", articleId: "bonding-shy-cat" },
        { question: "Can you actually train a cat?", articleId: "training-basics" },
      ],
    },
    {
      id: "behavior-knocking",
      category: "Behavior",
      categoryColor: "#ef4444",
      title: "Why do cats knock things off tables?",
      heroImage: stockImage(1),
      readTime: "3 min read",
      byline: "Mochi",
      topics: ["play", "attention", "instinct"],
      paragraphs: [
        {
          text: `That water glass on the edge of the table? Your cat sees it as a science experiment. Pushing objects off surfaces is one of the most universal — and infuriating — cat behaviors.`,
        },
        {
          subheading: "It's their hunting instinct",
          text: `Cats are hardwired to bat at small objects. In the wild, this is how they test whether prey is alive or dead. Your pen, your phone, your mug — they're all potential "prey" to your cat's brain.`,
        },
        {
          subheading: "The attention factor",
          text: `Cats are smart. If knocking your water glass off the counter got a big reaction once, they'll do it again. The crash, your scramble to clean up — it's all very entertaining from their perspective.`,
        },
        {
          subheading: "How to redirect",
          text: `Give your cat approved things to bat around — crinkle balls, lightweight toys. And for chronic counter-surfers, double-sided tape on surfaces can discourage the habit without drama.`,
        },
      ],
      vetCtaText: "Talk to a vet",
      followUps: [
        { question: "Why does your cat follow you to the bathroom?", articleId: "behavior-bathroom" },
        { question: "Best toys that actually work", articleId: "play-best-toys" },
        { question: "How much playtime does your cat really need?", articleId: "play-how-much" },
      ],
    },

    // ── Play ──
    {
      id: "play-best-toys",
      category: "Play",
      categoryColor: "#f97316",
      title: `Best toys for a ${ageText || "young"} ${breedName} — what actually works?`,
      heroImage: stockImage(2),
      readTime: "3 min read",
      byline: "Mochi",
      topics: ["enrichment", "exercise", "boredom"],
      breedRelevance: ["Bengal", "Abyssinian", "Siamese cat"],
      ageRange: "adult",
      paragraphs: [
        {
          text: `Not all cat toys are created equal — and most of the ones gathering dust under your couch prove it. Here's what actually keeps a ${ageText || "young"} ${breedName} engaged.`,
        },
        {
          subheading: "Interactive wands win every time",
          text: `Feather wands and fishing-rod toys tap into your cat's prey drive. The key is unpredictable movement — don't just drag it in circles. Mimic how a bird or mouse would move: quick darts, pauses, and sudden direction changes.`,
        },
        {
          subheading: "The puzzle feeder secret",
          text: `Puzzle feeders aren't just toys — they're mental workouts. For a ${breedName}, food puzzles prevent boredom eating and keep their brain sharp. Start with easy ones and level up as your cat gets the hang of it.`,
        },
        {
          subheading: "Rotate, don't stockpile",
          text: `Cats lose interest in toys that are always available. Keep 3-4 toys out and rotate them weekly. The "new" factor reignites their curiosity every time. That crinkly ball they ignored last month? It'll be their favorite again next week.`,
        },
      ],
      vetCtaText: "Talk to a vet",
      followUps: [
        { question: "How much playtime does your cat really need?", articleId: "play-how-much" },
        { question: "Why do cats knock things off tables?", articleId: "behavior-knocking" },
        { question: "Is your cat drinking enough water?", articleId: "nutrition-water" },
      ],
    },
    {
      id: "play-how-much",
      category: "Play",
      categoryColor: "#f97316",
      title: "How much playtime does your cat really need?",
      heroImage: stockImage(3),
      readTime: "3 min read",
      byline: "Mochi",
      topics: ["exercise", "weight", "enrichment"],
      ageRange: "kitten",
      paragraphs: [
        {
          text: `The short answer: more than they're getting. Most indoor cats are drastically under-stimulated, and it shows up as weight gain, destructive behavior, or that 3 AM zoomies session.`,
        },
        {
          subheading: "The 30-minute minimum",
          text: `Vets recommend at least 30 minutes of active play per day, split into two or three sessions. Kittens need more — up to an hour. Senior cats still benefit from 15-20 minutes of gentle play daily.`,
        },
        {
          subheading: "Quality over quantity",
          text: `A 10-minute session with a wand toy that mimics real prey movement is worth more than an hour of a laser pointer. Cats need the satisfaction of "catching" something — let them grab the toy at the end.`,
        },
        {
          subheading: "Signs your cat needs more play",
          text: `Attacking ankles, yowling at night, over-grooming, weight gain — these are all signs of pent-up energy. Before assuming it's a behavior problem, try doubling playtime for a week.`,
        },
      ],
      vetCtaText: "Talk to a vet",
      followUps: [
        { question: "Best toys that actually work", articleId: "play-best-toys" },
        { question: "Why does your cat sleep 16 hours a day?", articleId: "sleep-16-hours" },
        { question: "Wet vs dry food — what vets actually recommend", articleId: "nutrition-wet-dry" },
      ],
    },

    // ── Grooming ──
    {
      id: "grooming-semi-long",
      category: "Grooming",
      categoryColor: "#22c55e",
      title: "How often should you groom semi-long coats?",
      heroImage: stockImage(4),
      readTime: "3 min read",
      byline: "Mochi",
      topics: ["coat", "mats", "shedding"],
      breedRelevance: ["Maine Coon", "Norwegian Forest", "Ragdoll", "Persian cat", "Himalayan"],
      paragraphs: [
        {
          text: `Semi-long coats look gorgeous — until mat season hits. Whether your cat has a luxurious mane or a fluffy undercoat, getting the grooming cadence right makes all the difference.`,
        },
        {
          subheading: "The 3-times-a-week rule",
          text: `For most semi-long coated cats, brushing 3 times a week prevents mats before they form. Focus on behind the ears, the belly, and under the arms — these are mat hotspots. Use a wide-tooth comb first, then a slicker brush.`,
        },
        {
          subheading: "Shedding season changes everything",
          text: `During spring and fall shedding seasons, bump up to daily brushing. You'll be amazed how much fur comes off — and your cat's hairball situation will improve dramatically too.`,
        },
        {
          subheading: "When grooming reveals something off",
          text: `Regular grooming is also your early warning system. If you notice bald patches, flaky skin, or your cat flinching at a specific spot, it's worth a quick vet check. Skin issues often hide under all that fluff.`,
        },
      ],
      vetCtaText: "Talk to a vet",
      followUps: [
        { question: "How to reduce hairballs naturally", articleId: "grooming-hairballs" },
        { question: "What a dull coat says about your cat's health", articleId: "health-dull-coat" },
        { question: "Wet vs dry food — what vets actually recommend", articleId: "nutrition-wet-dry" },
      ],
    },
    {
      id: "grooming-hairballs",
      category: "Grooming",
      categoryColor: "#22c55e",
      title: "How to reduce hairballs naturally",
      heroImage: stockImage(0),
      readTime: "3 min read",
      byline: "Mochi",
      topics: ["hairballs", "digestion", "coat"],
      breedRelevance: ["Maine Coon", "Persian cat", "Norwegian Forest", "Himalayan", "Ragdoll"],
      paragraphs: [
        {
          text: `Hairballs are a fact of cat life — but frequent ones aren't normal. If your cat is hacking up hairballs more than once a month, there are simple changes that can help.`,
        },
        {
          subheading: "Brush more, hack less",
          text: `The #1 hairball prevention is regular brushing. Every loose hair you remove is one less your cat swallows. For long-haired cats, daily brushing during shedding season makes a huge difference.`,
        },
        {
          subheading: "Diet matters more than you think",
          text: `High-fiber diets help hair pass through the digestive tract instead of coming back up. Look for "hairball control" formulas, or add a small spoonful of plain pumpkin puree to their food.`,
        },
        {
          subheading: "When to see the vet",
          text: `If your cat is retching without producing a hairball, losing appetite, or having constipation, it could mean a blockage. Don't wait — this is a vet-worthy concern.`,
        },
      ],
      vetCtaText: "Talk to a vet",
      followUps: [
        { question: "How often should you groom semi-long coats?", articleId: "grooming-semi-long" },
        { question: "What a dull coat says about your cat's health", articleId: "health-dull-coat" },
        { question: "Is your cat drinking enough water?", articleId: "nutrition-water" },
      ],
    },

    // ── Bonding ──
    {
      id: "bonding-likes-you",
      category: "Bonding",
      categoryColor: "#84cc16",
      title: `How to tell if your ${breedName} actually likes you`,
      heroImage: stockImage(1),
      readTime: "3 min read",
      byline: "Mochi",
      topics: ["affection", "body-language", "trust"],
      paragraphs: [
        {
          text: `Cats don't do love the way dogs do — no tail-wagging welcome parties. But they have their own language, and once you learn it, the signs of affection are everywhere.`,
        },
        {
          subheading: "The slow blink says it all",
          text: `If your cat looks at you and slowly closes and opens their eyes, that's the cat equivalent of "I love you." Try it back — slow-blink at them and see if they return it. This is one of the most reliable bonding signals in the feline world.`,
        },
        {
          subheading: "Head bunting and cheek rubs",
          text: `When your cat bumps their head against you or rubs their cheek on your hand, they're marking you with their scent glands. Translation: "You're mine." It's both affection and a territorial claim — the ultimate cat compliment.`,
        },
        {
          subheading: "The belly show (with a catch)",
          text: `A cat showing their belly is showing trust — but it's not necessarily an invitation to touch. If your cat rolls over in front of you, appreciate the gesture. Whether they want belly rubs depends entirely on their personality. Test at your own risk.`,
        },
      ],
      vetCtaText: "Talk to a vet",
      followUps: [
        { question: "How to build trust with a shy cat", articleId: "bonding-shy-cat" },
        { question: "Why does your cat follow you to the bathroom?", articleId: "behavior-bathroom" },
        { question: "Why does your cat sleep 16 hours a day?", articleId: "sleep-16-hours" },
      ],
    },
    {
      id: "bonding-shy-cat",
      category: "Bonding",
      categoryColor: "#84cc16",
      title: "How to build trust with a shy cat",
      heroImage: stockImage(2),
      readTime: "3 min read",
      byline: "Mochi",
      topics: ["anxiety", "trust", "socialization"],
      breedRelevance: ["Russian Blue", "Scottish Fold"],
      ageRange: "adult",
      paragraphs: [
        {
          text: `Some cats warm up instantly. Others take weeks — or months. If you've got a shy cat, patience isn't just a virtue, it's the strategy.`,
        },
        {
          subheading: "Let them come to you",
          text: `The biggest mistake people make with shy cats is trying too hard. Sit on the floor, read a book, and let them approach on their terms. Avoid direct eye contact at first — to a cat, staring is a threat.`,
        },
        {
          subheading: "Create safe zones",
          text: `Shy cats need hiding spots they can retreat to. A covered bed, a box on its side, or a high shelf. If they have a safe zone, they'll feel confident enough to venture out more often.`,
        },
        {
          subheading: "The treat trail technique",
          text: `Place treats in a line leading from their safe spot toward you. Over days, gradually shorten the distance. This positive association builds trust without forcing interaction.`,
        },
      ],
      vetCtaText: "Talk to a vet",
      followUps: [
        { question: "How to tell if your cat actually likes you", articleId: "bonding-likes-you" },
        { question: "Can you actually train a cat?", articleId: "training-basics" },
        { question: "Best spots for your cat's bed", articleId: "sleep-bed-spots" },
      ],
    },

    // ── Health ──
    {
      id: "health-dull-coat",
      category: "Health",
      categoryColor: "#3b82f6",
      title: "What a dull coat says about your cat's health",
      heroImage: stockImage(3),
      readTime: "3 min read",
      byline: "Mochi",
      topics: ["coat", "nutrition", "illness"],
      breedRelevance: ["Persian cat", "Maine Coon", "Norwegian Forest"],
      paragraphs: [
        {
          text: `A healthy cat has a glossy, smooth coat. When it starts looking dull, greasy, or patchy, your cat's body is telling you something — and it's worth listening.`,
        },
        {
          subheading: "Nutrition is usually the first suspect",
          text: `A diet lacking in essential fatty acids (omega-3 and omega-6) will show up in the coat first. Cheap foods with mostly fillers can leave coats looking rough. Upgrading to a higher-protein food often fixes this within weeks.`,
        },
        {
          subheading: "It could be stress",
          text: `Cats under stress may stop grooming themselves. A recent move, a new pet, or changes in routine can trigger this. If your normally glossy cat suddenly looks unkempt, think about what's changed in their environment.`,
        },
        {
          subheading: "When it's medical",
          text: `Thyroid issues, kidney disease, allergies, and parasites can all cause coat changes. If dietary changes and stress reduction don't help within 2-3 weeks, a vet visit is the smart move.`,
        },
      ],
      vetCtaText: "Talk to a vet",
      followUps: [
        { question: "How to check for fleas at home", articleId: "health-fleas" },
        { question: "How often should you groom semi-long coats?", articleId: "grooming-semi-long" },
        { question: "Is your cat drinking enough water?", articleId: "nutrition-water" },
      ],
    },
    {
      id: "health-fleas",
      category: "Health",
      categoryColor: "#3b82f6",
      title: "How to check for fleas at home",
      heroImage: stockImage(4),
      readTime: "3 min read",
      byline: "Mochi",
      topics: ["fleas", "parasites", "skin"],
      paragraphs: [
        {
          text: `You might not see fleas — they're fast, tiny, and good at hiding. But that doesn't mean they're not there. Here's how to check before they become a full infestation.`,
        },
        {
          subheading: "The flea comb test",
          text: `Run a fine-toothed flea comb through your cat's fur, especially around the neck and base of the tail. Wipe what you find onto a damp white paper towel. If you see tiny dark specks that turn reddish-brown — that's flea dirt (dried blood). Fleas are present.`,
        },
        {
          subheading: "Watch for the signs",
          text: `Excessive scratching (especially around the head and neck), small red bumps on the skin, hair loss near the tail, and restlessness can all point to fleas — even if you never see one.`,
        },
        {
          subheading: "Act fast",
          text: `A single flea can lay 50 eggs a day. If you confirm fleas, treat your cat with a vet-recommended product (not over-the-counter sprays) and wash all bedding in hot water. Vacuum daily for at least 2 weeks.`,
        },
      ],
      vetCtaText: "Talk to a vet",
      followUps: [
        { question: "What a dull coat says about your cat's health", articleId: "health-dull-coat" },
        { question: "How to reduce hairballs naturally", articleId: "grooming-hairballs" },
        { question: "Best spots for your cat's bed", articleId: "sleep-bed-spots" },
      ],
    },

    // ── Nutrition ──
    {
      id: "nutrition-water",
      category: "Nutrition",
      categoryColor: "#8b5cf6",
      title: "Is your cat drinking enough water?",
      heroImage: stockImage(0),
      readTime: "3 min read",
      byline: "Mochi",
      topics: ["hydration", "kidney", "diet"],
      breedRelevance: ["Russian Blue", "Persian cat", "Himalayan", "British Shorthair"],
      ageRange: "senior",
      paragraphs: [
        {
          text: `Cats evolved from desert animals, so they're not naturally big drinkers. But chronic dehydration is one of the most common — and preventable — health issues in indoor cats.`,
        },
        {
          subheading: "How much is enough?",
          text: `A general rule: cats need about 4 ounces of water per 5 pounds of body weight per day. A 10-pound cat should be drinking roughly a cup of water daily. Cats on wet food get some hydration from their meals.`,
        },
        {
          subheading: "The fountain trick",
          text: `Many cats prefer running water over a still bowl. A cat water fountain can double or triple their water intake. Place it away from their food — cats instinctively avoid water near food sources.`,
        },
        {
          subheading: "Dehydration red flags",
          text: `Gently pinch the skin between your cat's shoulder blades. If it doesn't snap back immediately, they may be dehydrated. Other signs: dry gums, sunken eyes, and lethargy. Chronic dehydration can lead to kidney issues.`,
        },
      ],
      vetCtaText: "Talk to a vet",
      followUps: [
        { question: "Wet vs dry food — what vets actually recommend", articleId: "nutrition-wet-dry" },
        { question: "What a dull coat says about your cat's health", articleId: "health-dull-coat" },
        { question: "Why does your cat sleep 16 hours a day?", articleId: "sleep-16-hours" },
      ],
    },
    {
      id: "nutrition-wet-dry",
      category: "Nutrition",
      categoryColor: "#8b5cf6",
      title: "Wet vs dry food — what vets actually recommend",
      heroImage: stockImage(1),
      readTime: "3 min read",
      byline: "Mochi",
      topics: ["diet", "hydration", "weight"],
      breedRelevance: ["British Shorthair", "Burmese", "Exotic Shorthair"],
      paragraphs: [
        {
          text: `The wet vs dry debate has been going on forever. Here's what veterinary nutritionists actually say — and it's more nuanced than most pet food marketing suggests.`,
        },
        {
          subheading: "Wet food wins for hydration",
          text: `Wet food is about 75% water, making it a significant source of hydration. For cats prone to urinary tract issues or kidney problems, wet food can be genuinely therapeutic. Many vets recommend at least some wet food in every cat's diet.`,
        },
        {
          subheading: "Dry food has its place",
          text: `Dry food is more calorie-dense, easier to portion control, and won't spoil if left out. Some cats also prefer the crunch. There's no evidence that dry food "cleans teeth" — that's largely a myth — but it's a valid part of a balanced diet.`,
        },
        {
          subheading: "The best of both worlds",
          text: `Most vets suggest a mix: wet food for hydration and protein, dry food for convenience and variety. The key is choosing high-protein options with named meat as the first ingredient — not corn, wheat, or "meat by-products."`,
        },
      ],
      vetCtaText: "Talk to a vet",
      followUps: [
        { question: "Is your cat drinking enough water?", articleId: "nutrition-water" },
        { question: "How much playtime does your cat really need?", articleId: "play-how-much" },
        { question: "How to check for fleas at home", articleId: "health-fleas" },
      ],
    },

    // ── Sleep ──
    {
      id: "sleep-16-hours",
      category: "Sleep",
      categoryColor: "#ec4899",
      title: "Why does your cat sleep 16 hours a day?",
      heroImage: stockImage(2),
      readTime: "3 min read",
      byline: "Mochi",
      topics: ["sleep", "energy", "instinct"],
      ageRange: "senior",
      paragraphs: [
        {
          text: `If it feels like your cat is asleep every time you look at them — they probably are. Cats sleep an average of 12-16 hours a day, and senior cats can sleep up to 20.`,
        },
        {
          subheading: "They're built for it",
          text: `Cats are crepuscular predators — most active at dawn and dusk. The rest of the time, they're conserving energy for short, intense bursts of activity. This sleep pattern is hardwired from their wild ancestors.`,
        },
        {
          subheading: "Not all sleep is deep sleep",
          text: `About 75% of a cat's sleep is light dozing — ears twitching, ready to spring into action. Only about 25% is deep REM sleep, where they truly rest and dream. You can tell the difference: a dozing cat's ears will rotate toward sounds.`,
        },
        {
          subheading: "When to worry",
          text: `A sudden increase in sleeping, especially paired with eating less or hiding, could signal illness. Conversely, a cat that can't seem to settle could be in pain. Changes in sleep patterns are always worth noting.`,
        },
      ],
      vetCtaText: "Talk to a vet",
      followUps: [
        { question: "Best spots for your cat's bed", articleId: "sleep-bed-spots" },
        { question: "How much playtime does your cat really need?", articleId: "play-how-much" },
        { question: "How to tell if your cat actually likes you", articleId: "bonding-likes-you" },
      ],
    },
    {
      id: "sleep-bed-spots",
      category: "Sleep",
      categoryColor: "#ec4899",
      title: "Best spots for your cat's bed",
      heroImage: stockImage(3),
      readTime: "3 min read",
      byline: "Mochi",
      topics: ["comfort", "territory", "stress"],
      paragraphs: [
        {
          text: `You bought a beautiful cat bed. Your cat sleeps in a cardboard box. Sound familiar? Where cats choose to sleep tells you a lot about what they need.`,
        },
        {
          subheading: "Height = safety",
          text: `Cats feel safest when elevated. A bed on a high shelf, the top of a cat tree, or a window perch will almost always be preferred over a floor-level bed. It's not about snobbery — it's about survival instinct.`,
        },
        {
          subheading: "Warmth matters",
          text: `Cats run a body temperature of about 101.5°F and seek out warm spots. Near a sunny window, on top of a radiator, or next to your laptop — they're all just following the heat. A self-warming bed can be a game-changer in winter.`,
        },
        {
          subheading: "Quiet and away from litter",
          text: `Place beds in low-traffic areas away from litter boxes. Cats won't sleep near where they do their business. A quiet corner of a bedroom or a dedicated cat shelf in the living room usually works well.`,
        },
      ],
      vetCtaText: "Talk to a vet",
      followUps: [
        { question: "Why does your cat sleep 16 hours a day?", articleId: "sleep-16-hours" },
        { question: "How to build trust with a shy cat", articleId: "bonding-shy-cat" },
        { question: "How to stop your cat from scratching furniture", articleId: "training-scratching" },
      ],
    },

    // ── Training ──
    {
      id: "training-basics",
      category: "Training",
      categoryColor: "#14b8a6",
      title: "Can you actually train a cat?",
      heroImage: stockImage(4),
      readTime: "3 min read",
      byline: "Mochi",
      topics: ["training", "enrichment", "behavior"],
      breedRelevance: ["Bengal", "Siamese cat", "Abyssinian"],
      paragraphs: [
        {
          text: `Short answer: yes. Long answer: yes, but on their terms. Cats are fully trainable — they just need a different approach than dogs.`,
        },
        {
          subheading: "Think rewards, not commands",
          text: `Cats don't respond to praise the way dogs do. They respond to food. High-value treats (think freeze-dried chicken) are your best training tool. Keep sessions to 3-5 minutes — any longer and your cat will walk away.`,
        },
        {
          subheading: "Start with the basics",
          text: `Sit, high-five, and come-when-called are all achievable for most cats. Use a clicker (or a consistent sound) to mark the exact moment they do the right thing, then immediately reward. The click-treat timing is everything.`,
        },
        {
          subheading: "Never punish",
          text: `Punishment doesn't work with cats — it just damages trust. If your cat does something unwanted, redirect them to the right behavior and reward that instead. Squirt bottles and yelling teach your cat to fear you, not to stop the behavior.`,
        },
      ],
      vetCtaText: "Talk to a vet",
      followUps: [
        { question: "How to stop your cat from scratching furniture", articleId: "training-scratching" },
        { question: "Best toys that actually work", articleId: "play-best-toys" },
        { question: "How to build trust with a shy cat", articleId: "bonding-shy-cat" },
      ],
    },
    {
      id: "training-scratching",
      category: "Training",
      categoryColor: "#14b8a6",
      title: "How to stop your cat from scratching furniture",
      heroImage: stockImage(0),
      readTime: "3 min read",
      byline: "Mochi",
      topics: ["scratching", "territory", "training"],
      paragraphs: [
        {
          text: `Your couch isn't the enemy — and neither is your cat. Scratching is a natural, essential behavior. The trick is redirecting it, not stopping it.`,
        },
        {
          subheading: "Why they scratch",
          text: `Cats scratch to maintain their claws, stretch their muscles, and mark territory (they have scent glands in their paws). It's not spite — it's biology. A cat that doesn't scratch is a cat with a problem.`,
        },
        {
          subheading: "Give them better options",
          text: `Place a sturdy scratching post right next to the furniture they're targeting. Cats prefer tall, stable posts they can really stretch on. Sisal rope posts are the gold standard — most cats prefer them over carpet-covered options.`,
        },
        {
          subheading: "The catnip and tape combo",
          text: `Rub catnip on the scratching post to attract your cat, and apply double-sided tape to the furniture to deter them. Most cats hate the sticky feeling. Within a week or two, the habit usually shifts to the post.`,
        },
      ],
      vetCtaText: "Talk to a vet",
      followUps: [
        { question: "Can you actually train a cat?", articleId: "training-basics" },
        { question: "Why do cats knock things off tables?", articleId: "behavior-knocking" },
        { question: "How to tell if your cat actually likes you", articleId: "bonding-likes-you" },
      ],
    },
  ];
}

// ── Article lookup by ID ──

let _cachedPool: { key: string; articles: ArticleData[] } | null = null;

function getArticlePool(catName: string, breed: string | null, ageText: string): ArticleData[] {
  const key = `${catName}|${breed}|${ageText}`;
  if (_cachedPool && _cachedPool.key === key) return _cachedPool.articles;
  const articles = buildArticlePool(catName, breed, ageText);
  _cachedPool = { key, articles };
  return articles;
}

export function getArticleById(
  id: string,
  catName: string,
  breed: string | null,
  ageText: string
): ArticleData | undefined {
  return getArticlePool(catName, breed, ageText).find((a) => a.id === id);
}

// ── Selection logic ──

function ageTextToRange(ageText: string): "kitten" | "adult" | "senior" {
  // Parse months from age text like "18 months", "2 years", "2 years, 3 months"
  const monthMatch = ageText.match(/^(\d+)\s*month/);
  const yearMatch = ageText.match(/^(\d+)\s*year/);
  let months = 18; // default
  if (monthMatch) {
    months = parseInt(monthMatch[1]);
  } else if (yearMatch) {
    months = parseInt(yearMatch[1]) * 12;
    const extraMonths = ageText.match(/(\d+)\s*month/);
    if (extraMonths) months += parseInt(extraMonths[1]);
  }
  if (months < 12) return "kitten";
  if (months >= 120) return "senior"; // 10+ years
  return "adult";
}

export function getArticlesForVisit(
  breed: string | null,
  ageText: string,
  visitCount: number,
  catName: string
): ArticleData[] {
  const pool = getArticlePool(catName, breed, ageText);
  const lifeStage = ageTextToRange(ageText);

  // Score each article
  const scored = pool.map((article, originalIndex) => {
    let score = 0;
    if (breed && article.breedRelevance?.includes(breed)) score += 10;
    if (article.ageRange === lifeStage) score += 5;
    return { article, score, originalIndex };
  });

  // Sort by score desc, then by original index for stability
  scored.sort((a, b) => b.score - a.score || a.originalIndex - b.originalIndex);

  // Offset into the sorted list based on visit count
  const offset = visitCount % scored.length;

  // Greedy pick: scan from offset, take first 4 with unique categories
  const picked: typeof scored = [];
  const usedCategories = new Set<string>();

  for (let i = 0; i < scored.length && picked.length < 4; i++) {
    const candidate = scored[(offset + i) % scored.length];
    if (!usedCategories.has(candidate.article.category)) {
      picked.push(candidate);
      usedCategories.add(candidate.article.category);
    }
  }

  // Assign unique images — rotate which 4-of-5 stock images are used per visit
  const imageOffset = visitCount % ARTICLE_IMAGES.length;
  return picked.map((p, i) => ({
    ...p.article,
    heroImage: ARTICLE_IMAGES[(imageOffset + i) % ARTICLE_IMAGES.length],
  }));
}

// ── Public API ──

export function getMochiArticles(
  catName: string,
  breed: string | null,
  ageText: string
): ArticleData[] {
  let visitCount = 0;
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("mochi-visit-count");
    visitCount = stored ? parseInt(stored, 10) || 0 : 0;
  }
  return getArticlesForVisit(breed, ageText, visitCount, catName);
}

export function incrementVisitCount(): void {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("mochi-visit-count");
    const current = stored ? parseInt(stored, 10) || 0 : 0;
    localStorage.setItem("mochi-visit-count", String(current + 1));
  }
}
