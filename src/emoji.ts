const EMOJI = [
  {
    char: '🔴',
    name: 'Progress',
  },
  {
    char: '🟡',
    name: 'Review',
  },
  {
    char: '🟢',
    name: 'Done',
  },
  {
    char: '😀',
    name: 'grinning face',
  },
  {
    char: '😃',
    name: 'grinning face with big eyes',
  },
  {
    char: '😄',
    name: 'grinning face with smiling eyes',
  },
  {
    char: '😁',
    name: 'beaming face with smiling eyes',
  },
  {
    char: '😆',
    name: 'grinning squinting face',
  },
  {
    char: '😅',
    name: 'grinning face with sweat',
  },
  {
    char: '🤣',
    name: 'rolling on the floor laughing',
  },
  {
    char: '😂',
    name: 'face with tears of joy',
  },
  {
    char: '🙂',
    name: 'slightly smiling face',
  },
  {
    char: '🙃',
    name: 'upside-down face',
  },
  {
    char: '😉',
    name: 'winking face',
  },
  {
    char: '😊',
    name: 'smiling face with smiling eyes',
  },
  {
    char: '😇',
    name: 'smiling face with halo',
  },
  {
    char: '🥰',
    name: 'smiling face with hearts',
  },
  {
    char: '😍',
    name: 'smiling face with heart-eyes',
  },
  {
    char: '🤩',
    name: 'star-struck',
  },
  {
    char: '😘',
    name: 'face blowing a kiss',
  },
  {
    char: '😗',
    name: 'kissing face',
  },
  {
    char: '😚',
    name: 'kissing face with closed eyes',
  },
  {
    char: '😙',
    name: 'kissing face with smiling eyes',
  },
  {
    char: '😋',
    name: 'face savoring food',
  },
  {
    char: '😛',
    name: 'face with tongue',
  },
  {
    char: '😜',
    name: 'winking face with tongue',
  },
  {
    char: '🤪',
    name: 'zany face',
  },
  {
    char: '😝',
    name: 'squinting face with tongue',
  },
  {
    char: '🤑',
    name: 'money-mouth face',
  },
  {
    char: '🤗',
    name: 'hugging face',
  },
  {
    char: '🤭',
    name: 'face with hand over mouth',
  },
  {
    char: '🤫',
    name: 'shushing face',
  },
  {
    char: '🤔',
    name: 'thinking face',
  },
  {
    char: '🤐',
    name: 'zipper-mouth face',
  },
  {
    char: '🤨',
    name: 'face with raised eyebrow',
  },
  {
    char: '😐',
    name: 'neutral face',
  },
  {
    char: '😑',
    name: 'expressionless face',
  },
  {
    char: '😶',
    name: 'face without mouth',
  },
  {
    char: '😏',
    name: 'smirking face',
  },
  {
    char: '😒',
    name: 'unamused face',
  },
  {
    char: '🙄',
    name: 'face with rolling eyes',
  },
  {
    char: '😬',
    name: 'grimacing face',
  },
  {
    char: '😮',
    name: 'face exhaling',
  },
  {
    char: '🤥',
    name: 'lying face',
  },
  {
    char: '😌',
    name: 'relieved face',
  },
  {
    char: '😔',
    name: 'pensive face',
  },
  {
    char: '😪',
    name: 'sleepy face',
  },
  {
    char: '🤤',
    name: 'drooling face',
  },
  {
    char: '😴',
    name: 'sleeping face',
  },
  {
    char: '😷',
    name: 'face with medical mask',
  },
  {
    char: '🤒',
    name: 'face with thermometer',
  },
  {
    char: '🤕',
    name: 'face with head-bandage',
  },
  {
    char: '🤢',
    name: 'nauseated face',
  },
  {
    char: '🤮',
    name: 'face vomiting',
  },
  {
    char: '🤧',
    name: 'sneezing face',
  },
  {
    char: '🥵',
    name: 'hot face',
  },
  {
    char: '🥶',
    name: 'cold face',
  },
  {
    char: '🥴',
    name: 'woozy face',
  },
  {
    char: '😵',
    name: 'knocked-out face',
  },
  {
    char: '🤯',
    name: 'exploding head',
  },
  {
    char: '🤠',
    name: 'cowboy hat face',
  },
  {
    char: '🥳',
    name: 'partying face',
  },
  {
    char: '😎',
    name: 'smiling face with sunglasses',
  },
  {
    char: '🤓',
    name: 'nerd face',
  },
  {
    char: '🧐',
    name: 'face with monocle',
  },
  {
    char: '😕',
    name: 'confused face',
  },
  {
    char: '😟',
    name: 'worried face',
  },
  {
    char: '🙁',
    name: 'slightly frowning face',
  },
  {
    char: '☹️',
    name: 'frowning face',
  },
  {
    char: '😯',
    name: 'hushed face',
  },
  {
    char: '😲',
    name: 'astonished face',
  },
  {
    char: '😳',
    name: 'flushed face',
  },
  {
    char: '🥺',
    name: 'pleading face',
  },
  {
    char: '😦',
    name: 'frowning face with open mouth',
  },
  {
    char: '😧',
    name: 'anguished face',
  },
  {
    char: '😨',
    name: 'fearful face',
  },
  {
    char: '😰',
    name: 'anxious face with sweat',
  },
  {
    char: '😥',
    name: 'sad but relieved face',
  },
  {
    char: '😢',
    name: 'crying face',
  },
  {
    char: '😭',
    name: 'loudly crying face',
  },
  {
    char: '😱',
    name: 'face screaming in fear',
  },
  {
    char: '😖',
    name: 'confounded face',
  },
  {
    char: '😣',
    name: 'persevering face',
  },
  {
    char: '😞',
    name: 'disappointed face',
  },
  {
    char: '😓',
    name: 'downcast face with sweat',
  },
  {
    char: '😩',
    name: 'weary face',
  },
  {
    char: '😫',
    name: 'tired face',
  },
  {
    char: '🥱',
    name: 'yawning face',
  },
  {
    char: '😤',
    name: 'face with steam from nose',
  },
  {
    char: '😡',
    name: 'pouting face',
  },
  {
    char: '😠',
    name: 'angry face',
  },
  {
    char: '🤬',
    name: 'face with symbols on mouth',
  },
  {
    char: '😈',
    name: 'smiling face with horns',
  },
  {
    char: '👿',
    name: 'angry face with horns',
  },
  {
    char: '💀',
    name: 'skull',
  },
  {
    char: '💩',
    name: 'pile of poo',
  },
  {
    char: '🤡',
    name: 'clown face',
  },
  {
    char: '👹',
    name: 'ogre',
  },
  {
    char: '👺',
    name: 'goblin',
  },
  {
    char: '👻',
    name: 'ghost',
  },
  {
    char: '👽',
    name: 'alien',
  },
  {
    char: '👾',
    name: 'alien monster',
  },
  {
    char: '🤖',
    name: 'robot',
  },
  {
    char: '😺',
    name: 'grinning cat',
  },
  {
    char: '😸',
    name: 'grinning cat with smiling eyes',
  },
  {
    char: '😹',
    name: 'cat with tears of joy',
  },
  {
    char: '😻',
    name: 'smiling cat with heart-eyes',
  },
  {
    char: '😼',
    name: 'cat with wry smile',
  },
  {
    char: '😽',
    name: 'kissing cat',
  },
  {
    char: '🙀',
    name: 'weary cat',
  },
  {
    char: '😿',
    name: 'crying cat',
  },
  {
    char: '😾',
    name: 'pouting cat',
  },
  {
    char: '🙈',
    name: 'see-no-evil monkey',
  },
  {
    char: '🙉',
    name: 'hear-no-evil monkey',
  },
  {
    char: '🙊',
    name: 'speak-no-evil monkey',
  },
  {
    char: '💋',
    name: 'kiss mark',
  },
  {
    char: '💌',
    name: 'love letter',
  },
  {
    char: '💘',
    name: 'heart with arrow',
  },
  {
    char: '💝',
    name: 'heart with ribbon',
  },
  {
    char: '💖',
    name: 'sparkling heart',
  },
  {
    char: '💗',
    name: 'growing heart',
  },
  {
    char: '💓',
    name: 'beating heart',
  },
  {
    char: '💞',
    name: 'revolving hearts',
  },
  {
    char: '💕',
    name: 'two hearts',
  },
  {
    char: '💟',
    name: 'heart decoration',
  },
  {
    char: '💔',
    name: 'broken heart',
  },
  {
    char: '🧡',
    name: 'orange heart',
  },
  {
    char: '💛',
    name: 'yellow heart',
  },
  {
    char: '💚',
    name: 'green heart',
  },
  {
    char: '💙',
    name: 'blue heart',
  },
  {
    char: '💜',
    name: 'purple heart',
  },
  {
    char: '🤎',
    name: 'brown heart',
  },
  {
    char: '🖤',
    name: 'black heart',
  },
  {
    char: '🤍',
    name: 'white heart',
  },
  {
    char: '💯',
    name: 'hundred points',
  },
  {
    char: '💢',
    name: 'anger symbol',
  },
  {
    char: '💥',
    name: 'collision',
  },
  {
    char: '💫',
    name: 'dizzy',
  },
  {
    char: '💦',
    name: 'sweat droplets',
  },
  {
    char: '💣',
    name: 'bomb',
  },
  {
    char: '💬',
    name: 'speech balloon',
  },
  {
    char: '👁️',
    name: 'eye in speech bubble',
  },
  {
    char: '🗨',
    name: 'left speech bubble',
  },
  {
    char: '🗯️',
    name: 'right anger bubble',
  },
  {
    char: '💭',
    name: 'thought balloon',
  },
  {
    char: '💤',
    name: 'zzz',
  },
  {
    char: '👋',
    name: 'waving hand',
  },
  {
    char: '🤚',
    name: 'raised back of hand',
  },
  {
    char: '🖐️',
    name: 'hand with fingers splayed',
  },
  {
    char: '✋',
    name: 'raised hand',
  },
  {
    char: '🖖',
    name: 'vulcan salute',
  },
  {
    char: '👌',
    name: 'OK hand',
  },
  {
    char: '🤌',
    name: 'pinched fingers',
  },
  {
    char: '🤏',
    name: 'pinching hand',
  },
  {
    char: '🤞',
    name: 'crossed fingers',
  },
  {
    char: '🤟',
    name: 'love-you gesture',
  },
  {
    char: '🤘',
    name: 'sign of the horns',
  },
  {
    char: '🤙',
    name: 'call me hand',
  },
  {
    char: '👈',
    name: 'backhand index pointing left',
  },
  {
    char: '👉',
    name: 'backhand index pointing right',
  },
  {
    char: '👆',
    name: 'backhand index pointing up',
  },
  {
    char: '🖕',
    name: 'middle finger',
  },
  {
    char: '👇',
    name: 'backhand index pointing down',
  },
  {
    char: '👍',
    name: 'thumbs up',
  },
  {
    char: '👎',
    name: 'thumbs down',
  },
  {
    char: '✊',
    name: 'raised fist',
  },
  {
    char: '👊',
    name: 'oncoming fist',
  },
  {
    char: '🤛',
    name: 'left-facing fist',
  },
  {
    char: '🤜',
    name: 'right-facing fist',
  },
  {
    char: '👏',
    name: 'clapping hands',
  },
  {
    char: '🙌',
    name: 'raising hands',
  },
  {
    char: '👐',
    name: 'open hands',
  },
  {
    char: '🤲',
    name: 'palms up together',
  },
  {
    char: '🤝',
    name: 'handshake',
  },
  {
    char: '🙏',
    name: 'folded hands',
  },
  {
    char: '💅',
    name: 'nail polish',
  },
  {
    char: '🤳',
    name: 'selfie',
  },
  {
    char: '💪',
    name: 'flexed biceps',
  },
  {
    char: '🦾',
    name: 'mechanical arm',
  },
  {
    char: '🦿',
    name: 'mechanical leg',
  },
  {
    char: '🦵',
    name: 'leg',
  },
  {
    char: '🦶',
    name: 'foot',
  },
  {
    char: '👂',
    name: 'ear',
  },
  {
    char: '🦻',
    name: 'ear with hearing aid',
  },
  {
    char: '👃',
    name: 'nose',
  },
  {
    char: '🧠',
    name: 'brain',
  },
  {
    char: '🦷',
    name: 'tooth',
  },
  {
    char: '🦴',
    name: 'bone',
  },
  {
    char: '👀',
    name: 'eyes',
  },
  {
    char: '👅',
    name: 'tongue',
  },
  {
    char: '👄',
    name: 'mouth',
  },
  {
    char: '👶',
    name: 'baby',
  },
  {
    char: '🧒',
    name: 'child',
  },
  {
    char: '👦',
    name: 'boy',
  },
  {
    char: '👧',
    name: 'girl',
  },
  {
    char: '🧑',
    name: 'person',
  },
  {
    char: '👱',
    name: 'person: blond hair',
  },
  {
    char: '👨',
    name: 'man',
  },
  {
    char: '🧔',
    name: 'person: beard',
  },
  {
    char: '👩',
    name: 'woman',
  },
  {
    char: '🧓',
    name: 'older person',
  },
  {
    char: '👴',
    name: 'old man',
  },
  {
    char: '👵',
    name: 'old woman',
  },
  {
    char: '🙍',
    name: 'person frowning',
  },
  {
    char: '🙎',
    name: 'person pouting',
  },
  {
    char: '🙅',
    name: 'person gesturing NO',
  },
  {
    char: '🙆',
    name: 'person gesturing OK',
  },
  {
    char: '💁',
    name: 'person tipping hand',
  },
  {
    char: '🙋',
    name: 'person raising hand',
  },
  {
    char: '🧏',
    name: 'deaf person',
  },
  {
    char: '🙇',
    name: 'person bowing',
  },
  {
    char: '🤦',
    name: 'person facepalming',
  },
  {
    char: '🤷',
    name: 'person shrugging',
  },
  {
    char: '👮',
    name: 'police officer',
  },
  {
    char: '🕵️',
    name: 'detective',
  },
  {
    char: '🕵',
    name: 'man detective',
  },
  {
    char: '💂',
    name: 'guard',
  },
  {
    char: '👷',
    name: 'construction worker',
  },
  {
    char: '🤴',
    name: 'prince',
  },
  {
    char: '👸',
    name: 'princess',
  },
  {
    char: '👳',
    name: 'person wearing turban',
  },
  {
    char: '👲',
    name: 'person with skullcap',
  },
  {
    char: '🧕',
    name: 'woman with headscarf',
  },
  {
    char: '🤵',
    name: 'person in tuxedo',
  },
  {
    char: '👰',
    name: 'person with veil',
  },
  {
    char: '🤰',
    name: 'pregnant woman',
  },
  {
    char: '🤱',
    name: 'breast-feeding',
  },
  {
    char: '👼',
    name: 'baby angel',
  },
  {
    char: '🎅',
    name: 'Santa Claus',
  },
  {
    char: '🤶',
    name: 'Mrs. Claus',
  },
  {
    char: '🦸',
    name: 'superhero',
  },
  {
    char: '🦹',
    name: 'supervillain',
  },
  {
    char: '🧙',
    name: 'mage',
  },
  {
    char: '🧚',
    name: 'fairy',
  },
  {
    char: '🧛',
    name: 'vampire',
  },
  {
    char: '🧜',
    name: 'merperson',
  },
  {
    char: '🧝',
    name: 'elf',
  },
  {
    char: '🧞',
    name: 'genie',
  },
  {
    char: '🧟',
    name: 'zombie',
  },
  {
    char: '💆',
    name: 'person getting massage',
  },
  {
    char: '💇',
    name: 'person getting haircut',
  },
  {
    char: '🚶',
    name: 'person walking',
  },
  {
    char: '🧍',
    name: 'person standing',
  },
  {
    char: '🧎',
    name: 'person kneeling',
  },
  {
    char: '🏃',
    name: 'person running',
  },
  {
    char: '💃',
    name: 'woman dancing',
  },
  {
    char: '🕺',
    name: 'man dancing',
  },
  {
    char: '🕴️',
    name: 'person in suit levitating',
  },
  {
    char: '👯',
    name: 'people with bunny ears',
  },
  {
    char: '🧖',
    name: 'person in steamy room',
  },
  {
    char: '🧗',
    name: 'person climbing',
  },
  {
    char: '🤺',
    name: 'person fencing',
  },
  {
    char: '🏇',
    name: 'horse racing',
  },
  {
    char: '⛷️',
    name: 'skier',
  },
  {
    char: '🏂',
    name: 'snowboarder',
  },
  {
    char: '🏌️',
    name: 'person golfing',
  },
  {
    char: '🏌',
    name: 'man golfing',
  },
  {
    char: '🏄',
    name: 'person surfing',
  },
  {
    char: '🚣',
    name: 'person rowing boat',
  },
  {
    char: '🏊',
    name: 'person swimming',
  },
  {
    char: '⛹️',
    name: 'person bouncing ball',
  },
  {
    char: '⛹',
    name: 'man bouncing ball',
  },
  {
    char: '🏋️',
    name: 'person lifting weights',
  },
  {
    char: '🚴',
    name: 'person biking',
  },
  {
    char: '🚵',
    name: 'person mountain biking',
  },
  {
    char: '🤸',
    name: 'person cartwheeling',
  },
  {
    char: '🤼',
    name: 'people wrestling',
  },
  {
    char: '🤽',
    name: 'person playing water polo',
  },
  {
    char: '🤾',
    name: 'person playing handball',
  },
  {
    char: '🤹',
    name: 'person juggling',
  },
  {
    char: '🧘',
    name: 'person in lotus position',
  },
  {
    char: '🛀',
    name: 'person taking bath',
  },
  {
    char: '🛌',
    name: 'person in bed',
  },
  {
    char: '👪',
    name: 'family',
  },
  {
    char: '🗣️',
    name: 'speaking head',
  },
  {
    char: '👤',
    name: 'bust in silhouette',
  },
  {
    char: '👥',
    name: 'busts in silhouette',
  },
  {
    char: '👣',
    name: 'footprints',
  },
  {
    char: '🦰',
    name: 'red hair',
  },
  {
    char: '🦱',
    name: 'curly hair',
  },
  {
    char: '🦳',
    name: 'white hair',
  },
  {
    char: '🦲',
    name: 'bald',
  },
  {
    char: '🐵',
    name: 'monkey face',
  },
  {
    char: '🐒',
    name: 'monkey',
  },
  {
    char: '🦍',
    name: 'gorilla',
  },
  {
    char: '🦧',
    name: 'orangutan',
  },
  {
    char: '🐶',
    name: 'dog face',
  },
  {
    char: '🐕',
    name: 'dog',
  },
  {
    char: '🦮',
    name: 'guide dog',
  },
  {
    char: '🐩',
    name: 'poodle',
  },
  {
    char: '🐺',
    name: 'wolf',
  },
  {
    char: '🦊',
    name: 'fox',
  },
  {
    char: '🦝',
    name: 'raccoon',
  },
  {
    char: '🐱',
    name: 'cat face',
  },
  {
    char: '🐈',
    name: 'cat',
  },
  {
    char: '🦁',
    name: 'lion',
  },
  {
    char: '🐯',
    name: 'tiger face',
  },
  {
    char: '🐅',
    name: 'tiger',
  },
  {
    char: '🐆',
    name: 'leopard',
  },
  {
    char: '🐴',
    name: 'horse face',
  },
  {
    char: '🐎',
    name: 'horse',
  },
  {
    char: '🦄',
    name: 'unicorn',
  },
  {
    char: '🦓',
    name: 'zebra',
  },
  {
    char: '🦌',
    name: 'deer',
  },
  {
    char: '🦬',
    name: 'bison',
  },
  {
    char: '🐮',
    name: 'cow face',
  },
  {
    char: '🐂',
    name: 'ox',
  },
  {
    char: '🐃',
    name: 'water buffalo',
  },
  {
    char: '🐄',
    name: 'cow',
  },
  {
    char: '🐷',
    name: 'pig face',
  },
  {
    char: '🐖',
    name: 'pig',
  },
  {
    char: '🐗',
    name: 'boar',
  },
  {
    char: '🐽',
    name: 'pig nose',
  },
  {
    char: '🐏',
    name: 'ram',
  },
  {
    char: '🐑',
    name: 'ewe',
  },
  {
    char: '🐐',
    name: 'goat',
  },
  {
    char: '🐪',
    name: 'camel',
  },
  {
    char: '🐫',
    name: 'two-hump camel',
  },
  {
    char: '🦙',
    name: 'llama',
  },
  {
    char: '🦒',
    name: 'giraffe',
  },
  {
    char: '🐘',
    name: 'elephant',
  },
  {
    char: '🦣',
    name: 'mammoth',
  },
  {
    char: '🦏',
    name: 'rhinoceros',
  },
  {
    char: '🦛',
    name: 'hippopotamus',
  },
  {
    char: '🐭',
    name: 'mouse face',
  },
  {
    char: '🐁',
    name: 'mouse',
  },
  {
    char: '🐀',
    name: 'rat',
  },
  {
    char: '🐹',
    name: 'hamster',
  },
  {
    char: '🐰',
    name: 'rabbit face',
  },
  {
    char: '🐇',
    name: 'rabbit',
  },
  {
    char: '🐿️',
    name: 'chipmunk',
  },
  {
    char: '🦫',
    name: 'beaver',
  },
  {
    char: '🦔',
    name: 'hedgehog',
  },
  {
    char: '🦇',
    name: 'bat',
  },
  {
    char: '🐻',
    name: 'bear',
  },
  {
    char: '🐨',
    name: 'koala',
  },
  {
    char: '🐼',
    name: 'panda',
  },
  {
    char: '🦥',
    name: 'sloth',
  },
  {
    char: '🦦',
    name: 'otter',
  },
  {
    char: '🦨',
    name: 'skunk',
  },
  {
    char: '🦘',
    name: 'kangaroo',
  },
  {
    char: '🦡',
    name: 'badger',
  },
  {
    char: '🐾',
    name: 'paw prints',
  },
  {
    char: '🦃',
    name: 'turkey',
  },
  {
    char: '🐔',
    name: 'chicken',
  },
  {
    char: '🐓',
    name: 'rooster',
  },
  {
    char: '🐣',
    name: 'hatching chick',
  },
  {
    char: '🐤',
    name: 'baby chick',
  },
  {
    char: '🐥',
    name: 'front-facing baby chick',
  },
  {
    char: '🐦',
    name: 'bird',
  },
  {
    char: '🐧',
    name: 'penguin',
  },
  {
    char: '🕊️',
    name: 'dove',
  },
  {
    char: '🦅',
    name: 'eagle',
  },
  {
    char: '🦆',
    name: 'duck',
  },
  {
    char: '🦢',
    name: 'swan',
  },
  {
    char: '🦉',
    name: 'owl',
  },
  {
    char: '🦩',
    name: 'flamingo',
  },
  {
    char: '🦚',
    name: 'peacock',
  },
  {
    char: '🦜',
    name: 'parrot',
  },
  {
    char: '🐸',
    name: 'frog',
  },
  {
    char: '🐊',
    name: 'crocodile',
  },
  {
    char: '🐢',
    name: 'turtle',
  },
  {
    char: '🦎',
    name: 'lizard',
  },
  {
    char: '🐍',
    name: 'snake',
  },
  {
    char: '🐲',
    name: 'dragon face',
  },
  {
    char: '🐉',
    name: 'dragon',
  },
  {
    char: '🦕',
    name: 'sauropod',
  },
  {
    char: '🦖',
    name: 'T-Rex',
  },
  {
    char: '🐳',
    name: 'spouting whale',
  },
  {
    char: '🐋',
    name: 'whale',
  },
  {
    char: '🐬',
    name: 'dolphin',
  },
  {
    char: '🐟',
    name: 'fish',
  },
  {
    char: '🐠',
    name: 'tropical fish',
  },
  {
    char: '🐡',
    name: 'blowfish',
  },
  {
    char: '🦈',
    name: 'shark',
  },
  {
    char: '🐙',
    name: 'octopus',
  },
  {
    char: '🐚',
    name: 'spiral shell',
  },
  {
    char: '🐌',
    name: 'snail',
  },
  {
    char: '🦋',
    name: 'butterfly',
  },
  {
    char: '🐛',
    name: 'bug',
  },
  {
    char: '🐜',
    name: 'ant',
  },
  {
    char: '🐝',
    name: 'honeybee',
  },
  {
    char: '🐞',
    name: 'lady beetle',
  },
  {
    char: '🦗',
    name: 'cricket',
  },
  {
    char: '🕷️',
    name: 'spider',
  },
  {
    char: '🕸️',
    name: 'spider web',
  },
  {
    char: '🦂',
    name: 'scorpion',
  },
  {
    char: '🦟',
    name: 'mosquito',
  },
  {
    char: '🦠',
    name: 'microbe',
  },
  {
    char: '💐',
    name: 'bouquet',
  },
  {
    char: '🌸',
    name: 'cherry blossom',
  },
  {
    char: '💮',
    name: 'white flower',
  },
  {
    char: '🏵️',
    name: 'rosette',
  },
  {
    char: '🌹',
    name: 'rose',
  },
  {
    char: '🥀',
    name: 'wilted flower',
  },
  {
    char: '🌺',
    name: 'hibiscus',
  },
  {
    char: '🌻',
    name: 'sunflower',
  },
  {
    char: '🌼',
    name: 'blossom',
  },
  {
    char: '🌷',
    name: 'tulip',
  },
  {
    char: '🌱',
    name: 'seedling',
  },
  {
    char: '🌲',
    name: 'evergreen tree',
  },
  {
    char: '🌳',
    name: 'deciduous tree',
  },
  {
    char: '🌴',
    name: 'palm tree',
  },
  {
    char: '🌵',
    name: 'cactus',
  },
  {
    char: '🌿',
    name: 'herb',
  },
  {
    char: '☘️',
    name: 'shamrock',
  },
  {
    char: '🍀',
    name: 'four leaf clover',
  },
  {
    char: '🍁',
    name: 'maple leaf',
  },
  {
    char: '🍂',
    name: 'fallen leaf',
  },
  {
    char: '🍃',
    name: 'leaf fluttering in wind',
  },
  {
    char: '🍇',
    name: 'grapes',
  },
  {
    char: '🍈',
    name: 'melon',
  },
  {
    char: '🍉',
    name: 'watermelon',
  },
  {
    char: '🍊',
    name: 'tangerine',
  },
  {
    char: '🍋',
    name: 'lemon',
  },
  {
    char: '🍌',
    name: 'banana',
  },
  {
    char: '🍍',
    name: 'pineapple',
  },
  {
    char: '🥭',
    name: 'mango',
  },
  {
    char: '🍎',
    name: 'red apple',
  },
  {
    char: '🍏',
    name: 'green apple',
  },
  {
    char: '🍐',
    name: 'pear',
  },
  {
    char: '🍑',
    name: 'peach',
  },
  {
    char: '🍒',
    name: 'cherries',
  },
  {
    char: '🍓',
    name: 'strawberry',
  },
  {
    char: '🫐',
    name: 'blueberries',
  },
  {
    char: '🥝',
    name: 'kiwi fruit',
  },
  {
    char: '🍅',
    name: 'tomato',
  },
  {
    char: '🥥',
    name: 'coconut',
  },
  {
    char: '🥑',
    name: 'avocado',
  },
  {
    char: '🍆',
    name: 'eggplant',
  },
  {
    char: '🥔',
    name: 'potato',
  },
  {
    char: '🥕',
    name: 'carrot',
  },
  {
    char: '🌽',
    name: 'ear of corn',
  },
  {
    char: '🌶️',
    name: 'hot pepper',
  },
  {
    char: '🥒',
    name: 'cucumber',
  },
  {
    char: '🥬',
    name: 'leafy green',
  },
  {
    char: '🥦',
    name: 'broccoli',
  },
  {
    char: '🧄',
    name: 'garlic',
  },
  {
    char: '🧅',
    name: 'onion',
  },
  {
    char: '🍄',
    name: 'mushroom',
  },
  {
    char: '🥜',
    name: 'peanuts',
  },
  {
    char: '🌰',
    name: 'chestnut',
  },
  {
    char: '🍞',
    name: 'bread',
  },
  {
    char: '🥐',
    name: 'croissant',
  },
  {
    char: '🥖',
    name: 'baguette bread',
  },
  {
    char: '🥨',
    name: 'pretzel',
  },
  {
    char: '🥯',
    name: 'bagel',
  },
  {
    char: '🥞',
    name: 'pancakes',
  },
  {
    char: '🧇',
    name: 'waffle',
  },
  {
    char: '🧀',
    name: 'cheese wedge',
  },
  {
    char: '🍖',
    name: 'meat on bone',
  },
  {
    char: '🍗',
    name: 'poultry leg',
  },
  {
    char: '🥩',
    name: 'cut of meat',
  },
  {
    char: '🥓',
    name: 'bacon',
  },
  {
    char: '🍔',
    name: 'hamburger',
  },
  {
    char: '🍟',
    name: 'french fries',
  },
  {
    char: '🍕',
    name: 'pizza',
  },
  {
    char: '🌭',
    name: 'hot dog',
  },
  {
    char: '🥪',
    name: 'sandwich',
  },
  {
    char: '🌮',
    name: 'taco',
  },
  {
    char: '🌯',
    name: 'burrito',
  },
  {
    char: '🥙',
    name: 'stuffed flatbread',
  },
  {
    char: '🧆',
    name: 'falafel',
  },
  {
    char: '🥚',
    name: 'egg',
  },
  {
    char: '🥘',
    name: 'shallow pan of food',
  },
  {
    char: '🍲',
    name: 'pot of food',
  },
  {
    char: '🥣',
    name: 'bowl with spoon',
  },
  {
    char: '🥗',
    name: 'green salad',
  },
  {
    char: '🍿',
    name: 'popcorn',
  },
  {
    char: '🧈',
    name: 'butter',
  },
  {
    char: '🧂',
    name: 'salt',
  },
  {
    char: '🥫',
    name: 'canned food',
  },
  {
    char: '🍱',
    name: 'bento box',
  },
  {
    char: '🍘',
    name: 'rice cracker',
  },
  {
    char: '🍙',
    name: 'rice ball',
  },
  {
    char: '🍚',
    name: 'cooked rice',
  },
  {
    char: '🍛',
    name: 'curry rice',
  },
  {
    char: '🍜',
    name: 'steaming bowl',
  },
  {
    char: '🍝',
    name: 'spaghetti',
  },
  {
    char: '🍠',
    name: 'roasted sweet potato',
  },
  {
    char: '🍢',
    name: 'oden',
  },
  {
    char: '🍣',
    name: 'sushi',
  },
  {
    char: '🍤',
    name: 'fried shrimp',
  },
  {
    char: '🍥',
    name: 'fish cake with swirl',
  },
  {
    char: '🥮',
    name: 'moon cake',
  },
  {
    char: '🍡',
    name: 'dango',
  },
  {
    char: '🥟',
    name: 'dumpling',
  },
  {
    char: '🥠',
    name: 'fortune cookie',
  },
  {
    char: '🥡',
    name: 'takeout box',
  },
  {
    char: '🦀',
    name: 'crab',
  },
  {
    char: '🦞',
    name: 'lobster',
  },
  {
    char: '🦐',
    name: 'shrimp',
  },
  {
    char: '🦑',
    name: 'squid',
  },
  {
    char: '🦪',
    name: 'oyster',
  },
  {
    char: '🍦',
    name: 'soft ice cream',
  },
  {
    char: '🍧',
    name: 'shaved ice',
  },
  {
    char: '🍨',
    name: 'ice cream',
  },
  {
    char: '🍩',
    name: 'doughnut',
  },
  {
    char: '🍪',
    name: 'cookie',
  },
  {
    char: '🎂',
    name: 'birthday cake',
  },
  {
    char: '🍰',
    name: 'shortcake',
  },
  {
    char: '🧁',
    name: 'cupcake',
  },
  {
    char: '🥧',
    name: 'pie',
  },
  {
    char: '🍫',
    name: 'chocolate bar',
  },
  {
    char: '🍬',
    name: 'candy',
  },
  {
    char: '🍭',
    name: 'lollipop',
  },
  {
    char: '🍮',
    name: 'custard',
  },
  {
    char: '🍯',
    name: 'honey pot',
  },
  {
    char: '🍼',
    name: 'baby bottle',
  },
  {
    char: '🥛',
    name: 'glass of milk',
  },
  {
    char: '🍵',
    name: 'teacup without handle',
  },
  {
    char: '🍶',
    name: 'sake',
  },
  {
    char: '🍾',
    name: 'bottle with popping cork',
  },
  {
    char: '🍷',
    name: 'wine glass',
  },
  {
    char: '🍸',
    name: 'cocktail glass',
  },
  {
    char: '🍹',
    name: 'tropical drink',
  },
  {
    char: '🍺',
    name: 'beer mug',
  },
  {
    char: '🍻',
    name: 'clinking beer mugs',
  },
  {
    char: '🥂',
    name: 'clinking glasses',
  },
  {
    char: '🥃',
    name: 'tumbler glass',
  },
  {
    char: '🥤',
    name: 'cup with straw',
  },
  {
    char: '🧃',
    name: 'beverage box',
  },
  {
    char: '🧉',
    name: 'mate',
  },
  {
    char: '🧊',
    name: 'ice',
  },
  {
    char: '🥢',
    name: 'chopsticks',
  },
  {
    char: '🍽️',
    name: 'fork and knife with plate',
  },
  {
    char: '🍴',
    name: 'fork and knife',
  },
  {
    char: '🥄',
    name: 'spoon',
  },
  {
    char: '🔪',
    name: 'kitchen knife',
  },
  {
    char: '🏺',
    name: 'amphora',
  },
  {
    char: '🌍',
    name: 'globe showing Europe-Africa',
  },
  {
    char: '🌎',
    name: 'globe showing Americas',
  },
  {
    char: '🌏',
    name: 'globe showing Asia-Australia',
  },
  {
    char: '🌐',
    name: 'globe with meridians',
  },
  {
    char: '🗺️',
    name: 'world map',
  },
  {
    char: '🗾',
    name: 'map of Japan',
  },
  {
    char: '🧭',
    name: 'compass',
  },
  {
    char: '🏔️',
    name: 'snow-capped mountain',
  },
  {
    char: '⛰️',
    name: 'mountain',
  },
  {
    char: '🌋',
    name: 'volcano',
  },
  {
    char: '🗻',
    name: 'mount fuji',
  },
  {
    char: '🏕️',
    name: 'camping',
  },
  {
    char: '🏖️',
    name: 'beach with umbrella',
  },
  {
    char: '🏜️',
    name: 'desert',
  },
  {
    char: '🏝️',
    name: 'desert island',
  },
  {
    char: '🏞️',
    name: 'national park',
  },
  {
    char: '🏟️',
    name: 'stadium',
  },
  {
    char: '🏛️',
    name: 'classical building',
  },
  {
    char: '🏗️',
    name: 'building construction',
  },
  {
    char: '🧱',
    name: 'brick',
  },
  {
    char: '🏘️',
    name: 'houses',
  },
  {
    char: '🏚️',
    name: 'derelict house',
  },
  {
    char: '🏠',
    name: 'house',
  },
  {
    char: '🏡',
    name: 'house with garden',
  },
  {
    char: '🏢',
    name: 'office building',
  },
  {
    char: '🏣',
    name: 'Japanese post office',
  },
  {
    char: '🏤',
    name: 'post office',
  },
  {
    char: '🏥',
    name: 'hospital',
  },
  {
    char: '🏦',
    name: 'bank',
  },
  {
    char: '🏨',
    name: 'hotel',
  },
  {
    char: '🏩',
    name: 'love hotel',
  },
  {
    char: '🏪',
    name: 'convenience store',
  },
  {
    char: '🏬',
    name: 'department store',
  },
  {
    char: '🏯',
    name: 'Japanese castle',
  },
  {
    char: '🏰',
    name: 'castle',
  },
  {
    char: '💒',
    name: 'wedding',
  },
  {
    char: '🗼',
    name: 'Tokyo tower',
  },
  {
    char: '🗽',
    name: 'Statue of Liberty',
  },
  {
    char: '⛪',
    name: 'church',
  },
  {
    char: '🕌',
    name: 'mosque',
  },
  {
    char: '🛕',
    name: 'hindu temple',
  },
  {
    char: '🕍',
    name: 'synagogue',
  },
  {
    char: '⛩️',
    name: 'shinto shrine',
  },
  {
    char: '🕋',
    name: 'kaaba',
  },
  {
    char: '⛲',
    name: 'fountain',
  },
  {
    char: '⛺',
    name: 'tent',
  },
  {
    char: '🌁',
    name: 'foggy',
  },
  {
    char: '🌃',
    name: 'night with stars',
  },
  {
    char: '🏙️',
    name: 'cityscape',
  },
  {
    char: '🌄',
    name: 'sunrise over mountains',
  },
  {
    char: '🌅',
    name: 'sunrise',
  },
  {
    char: '🌆',
    name: 'cityscape at dusk',
  },
  {
    char: '🌇',
    name: 'sunset',
  },
  {
    char: '🌉',
    name: 'bridge at night',
  },
  {
    char: '♨️',
    name: 'hot springs',
  },
  {
    char: '🎠',
    name: 'carousel horse',
  },
  {
    char: '🎡',
    name: 'ferris wheel',
  },
  {
    char: '🎢',
    name: 'roller coaster',
  },
  {
    char: '💈',
    name: 'barber pole',
  },
  {
    char: '🎪',
    name: 'circus tent',
  },
  {
    char: '🚂',
    name: 'locomotive',
  },
  {
    char: '🚃',
    name: 'railway car',
  },
  {
    char: '🚄',
    name: 'high-speed train',
  },
  {
    char: '🚅',
    name: 'bullet train',
  },
  {
    char: '🚆',
    name: 'train',
  },
  {
    char: '🚇',
    name: 'metro',
  },
  {
    char: '🚈',
    name: 'light rail',
  },
  {
    char: '🚉',
    name: 'station',
  },
  {
    char: '🚊',
    name: 'tram',
  },
  {
    char: '🚝',
    name: 'monorail',
  },
  {
    char: '🚞',
    name: 'mountain railway',
  },
  {
    char: '🚋',
    name: 'tram car',
  },
  {
    char: '🚌',
    name: 'bus',
  },
  {
    char: '🚍',
    name: 'oncoming bus',
  },
  {
    char: '🚎',
    name: 'trolleybus',
  },
  {
    char: '🚐',
    name: 'minibus',
  },
  {
    char: '🚑',
    name: 'ambulance',
  },
  {
    char: '🚒',
    name: 'fire engine',
  },
  {
    char: '🚓',
    name: 'police car',
  },
  {
    char: '🚔',
    name: 'oncoming police car',
  },
  {
    char: '🚕',
    name: 'taxi',
  },
  {
    char: '🚖',
    name: 'oncoming taxi',
  },
  {
    char: '🚗',
    name: 'automobile',
  },
  {
    char: '🚘',
    name: 'oncoming automobile',
  },
  {
    char: '🚙',
    name: 'sport utility vehicle',
  },
  {
    char: '🛻',
    name: 'pickup truck',
  },
  {
    char: '🚚',
    name: 'delivery truck',
  },
  {
    char: '🚛',
    name: 'articulated lorry',
  },
  {
    char: '🚜',
    name: 'tractor',
  },
  {
    char: '🏎️',
    name: 'racing car',
  },
  {
    char: '🏍️',
    name: 'motorcycle',
  },
  {
    char: '🛵',
    name: 'motor scooter',
  },
  {
    char: '🦽',
    name: 'manual wheelchair',
  },
  {
    char: '🦼',
    name: 'motorized wheelchair',
  },
  {
    char: '🛺',
    name: 'auto rickshaw',
  },
  {
    char: '🚲',
    name: 'bicycle',
  },
  {
    char: '🛴',
    name: 'kick scooter',
  },
  {
    char: '🛹',
    name: 'skateboard',
  },
  {
    char: '🚏',
    name: 'bus stop',
  },
  {
    char: '🛣️',
    name: 'motorway',
  },
  {
    char: '🛤️',
    name: 'railway track',
  },
  {
    char: '🛢️',
    name: 'oil drum',
  },
  {
    char: '⛽',
    name: 'fuel pump',
  },
  {
    char: '🚨',
    name: 'police car light',
  },
  {
    char: '🚥',
    name: 'horizontal traffic light',
  },
  {
    char: '🚦',
    name: 'vertical traffic light',
  },
  {
    char: '🛑',
    name: 'stop sign',
  },
  {
    char: '🚧',
    name: 'construction',
  },
  {
    char: '⛵',
    name: 'sailboat',
  },
  {
    char: '🛶',
    name: 'canoe',
  },
  {
    char: '🚤',
    name: 'speedboat',
  },
  {
    char: '🛳️',
    name: 'passenger ship',
  },
  {
    char: '⛴️',
    name: 'ferry',
  },
  {
    char: '🛥️',
    name: 'motor boat',
  },
  {
    char: '🚢',
    name: 'ship',
  },
  {
    char: '🛩️',
    name: 'small airplane',
  },
  {
    char: '🛫',
    name: 'airplane departure',
  },
  {
    char: '🛬',
    name: 'airplane arrival',
  },
  {
    char: '🪂',
    name: 'parachute',
  },
  {
    char: '💺',
    name: 'seat',
  },
  {
    char: '🚁',
    name: 'helicopter',
  },
  {
    char: '🚟',
    name: 'suspension railway',
  },
  {
    char: '🚠',
    name: 'mountain cableway',
  },
  {
    char: '🚡',
    name: 'aerial tramway',
  },
  {
    char: '🛰️',
    name: 'satellite',
  },
  {
    char: '🚀',
    name: 'rocket',
  },
  {
    char: '🛸',
    name: 'flying saucer',
  },
  {
    char: '🛎️',
    name: 'bellhop bell',
  },
  {
    char: '🧳',
    name: 'luggage',
  },
  {
    char: '⌛',
    name: 'hourglass done',
  },
  {
    char: '⏳',
    name: 'hourglass not done',
  },
  {
    char: '⌚',
    name: 'watch',
  },
  {
    char: '⏰',
    name: 'alarm clock',
  },
  {
    char: '⏱️',
    name: 'stopwatch',
  },
  {
    char: '⏲️',
    name: 'timer clock',
  },
  {
    char: '🕰️',
    name: 'mantelpiece clock',
  },
  {
    char: '🕛',
    name: 'twelve o’clock',
  },
  {
    char: '🕧',
    name: 'twelve-thirty',
  },
  {
    char: '🕐',
    name: 'one o’clock',
  },
  {
    char: '🕜',
    name: 'one-thirty',
  },
  {
    char: '🕑',
    name: 'two o’clock',
  },
  {
    char: '🕝',
    name: 'two-thirty',
  },
  {
    char: '🕒',
    name: 'three o’clock',
  },
  {
    char: '🕞',
    name: 'three-thirty',
  },
  {
    char: '🕓',
    name: 'four o’clock',
  },
  {
    char: '🕟',
    name: 'four-thirty',
  },
  {
    char: '🕔',
    name: 'five o’clock',
  },
  {
    char: '🕠',
    name: 'five-thirty',
  },
  {
    char: '🕕',
    name: 'six o’clock',
  },
  {
    char: '🕡',
    name: 'six-thirty',
  },
  {
    char: '🕖',
    name: 'seven o’clock',
  },
  {
    char: '🕢',
    name: 'seven-thirty',
  },
  {
    char: '🕗',
    name: 'eight o’clock',
  },
  {
    char: '🕣',
    name: 'eight-thirty',
  },
  {
    char: '🕘',
    name: 'nine o’clock',
  },
  {
    char: '🕤',
    name: 'nine-thirty',
  },
  {
    char: '🕙',
    name: 'ten o’clock',
  },
  {
    char: '🕥',
    name: 'ten-thirty',
  },
  {
    char: '🕚',
    name: 'eleven o’clock',
  },
  {
    char: '🕦',
    name: 'eleven-thirty',
  },
  {
    char: '🌑',
    name: 'new moon',
  },
  {
    char: '🌒',
    name: 'waxing crescent moon',
  },
  {
    char: '🌓',
    name: 'first quarter moon',
  },
  {
    char: '🌔',
    name: 'waxing gibbous moon',
  },
  {
    char: '🌕',
    name: 'full moon',
  },
  {
    char: '🌖',
    name: 'waning gibbous moon',
  },
  {
    char: '🌗',
    name: 'last quarter moon',
  },
  {
    char: '🌘',
    name: 'waning crescent moon',
  },
  {
    char: '🌙',
    name: 'crescent moon',
  },
  {
    char: '🌚',
    name: 'new moon face',
  },
  {
    char: '🌛',
    name: 'first quarter moon face',
  },
  {
    char: '🌜',
    name: 'last quarter moon face',
  },
  {
    char: '🌡️',
    name: 'thermometer',
  },
  {
    char: '🌝',
    name: 'full moon face',
  },
  {
    char: '🌞',
    name: 'sun with face',
  },
  {
    char: '🪐',
    name: 'ringed planet',
  },
  {
    char: '⭐',
    name: 'star',
  },
  {
    char: '🌟',
    name: 'glowing star',
  },
  {
    char: '🌠',
    name: 'shooting star',
  },
  {
    char: '🌌',
    name: 'milky way',
  },
  {
    char: '⛅',
    name: 'sun behind cloud',
  },
  {
    char: '⛈️',
    name: 'cloud with lightning and rain',
  },
  {
    char: '🌤️',
    name: 'sun behind small cloud',
  },
  {
    char: '🌥️',
    name: 'sun behind large cloud',
  },
  {
    char: '🌦️',
    name: 'sun behind rain cloud',
  },
  {
    char: '🌧️',
    name: 'cloud with rain',
  },
  {
    char: '🌨️',
    name: 'cloud with snow',
  },
  {
    char: '🌩️',
    name: 'cloud with lightning',
  },
  {
    char: '🌪️',
    name: 'tornado',
  },
  {
    char: '🌫️',
    name: 'fog',
  },
  {
    char: '🌬️',
    name: 'wind face',
  },
  {
    char: '🌀',
    name: 'cyclone',
  },
  {
    char: '🌈',
    name: 'rainbow',
  },
  {
    char: '🌂',
    name: 'closed umbrella',
  },
  {
    char: '⛱️',
    name: 'umbrella on ground',
  },
  {
    char: '⛄',
    name: 'snowman without snow',
  },
  {
    char: '☄️',
    name: 'comet',
  },
  {
    char: '🔥',
    name: 'fire',
  },
  {
    char: '💧',
    name: 'droplet',
  },
  {
    char: '🌊',
    name: 'water wave',
  },
  {
    char: '🎃',
    name: 'jack-o-lantern',
  },
  {
    char: '🎄',
    name: 'Christmas tree',
  },
  {
    char: '🎆',
    name: 'fireworks',
  },
  {
    char: '🎇',
    name: 'sparkler',
  },
  {
    char: '🧨',
    name: 'firecracker',
  },
  {
    char: '✨',
    name: 'sparkles',
  },
  {
    char: '🎈',
    name: 'balloon',
  },
  {
    char: '🎉',
    name: 'party popper',
  },
  {
    char: '🎊',
    name: 'confetti ball',
  },
  {
    char: '🎋',
    name: 'tanabata tree',
  },
  {
    char: '🎍',
    name: 'pine decoration',
  },
  {
    char: '🎎',
    name: 'Japanese dolls',
  },
  {
    char: '🎏',
    name: 'carp streamer',
  },
  {
    char: '🎐',
    name: 'wind chime',
  },
  {
    char: '🎑',
    name: 'moon viewing ceremony',
  },
  {
    char: '🧧',
    name: 'red envelope',
  },
  {
    char: '🎀',
    name: 'ribbon',
  },
  {
    char: '🎁',
    name: 'wrapped gift',
  },
  {
    char: '🎗️',
    name: 'reminder ribbon',
  },
  {
    char: '🎟️',
    name: 'admission tickets',
  },
  {
    char: '🎫',
    name: 'ticket',
  },
  {
    char: '🎖️',
    name: 'military medal',
  },
  {
    char: '🏆',
    name: 'trophy',
  },
  {
    char: '🏅',
    name: 'sports medal',
  },
  {
    char: '🥇',
    name: '1st place medal',
  },
  {
    char: '🥈',
    name: '2nd place medal',
  },
  {
    char: '🥉',
    name: '3rd place medal',
  },
  {
    char: '⚽',
    name: 'soccer ball',
  },
  {
    char: '⚾',
    name: 'baseball',
  },
  {
    char: '🥎',
    name: 'softball',
  },
  {
    char: '🏀',
    name: 'basketball',
  },
  {
    char: '🏐',
    name: 'volleyball',
  },
  {
    char: '🏈',
    name: 'american football',
  },
  {
    char: '🏉',
    name: 'rugby football',
  },
  {
    char: '🎾',
    name: 'tennis',
  },
  {
    char: '🥏',
    name: 'flying disc',
  },
  {
    char: '🎳',
    name: 'bowling',
  },
  {
    char: '🏏',
    name: 'cricket game',
  },
  {
    char: '🏑',
    name: 'field hockey',
  },
  {
    char: '🏒',
    name: 'ice hockey',
  },
  {
    char: '🥍',
    name: 'lacrosse',
  },
  {
    char: '🏓',
    name: 'ping pong',
  },
  {
    char: '🏸',
    name: 'badminton',
  },
  {
    char: '🥊',
    name: 'boxing glove',
  },
  {
    char: '🥋',
    name: 'martial arts uniform',
  },
  {
    char: '🥅',
    name: 'goal net',
  },
  {
    char: '⛳',
    name: 'flag in hole',
  },
  {
    char: '⛸️',
    name: 'ice skate',
  },
  {
    char: '🎣',
    name: 'fishing pole',
  },
  {
    char: '🤿',
    name: 'diving mask',
  },
  {
    char: '🎽',
    name: 'running shirt',
  },
  {
    char: '🎿',
    name: 'skis',
  },
  {
    char: '🛷',
    name: 'sled',
  },
  {
    char: '🥌',
    name: 'curling stone',
  },
  {
    char: '🎯',
    name: 'bullseye',
  },
  {
    char: '🪀',
    name: 'yo-yo',
  },
  {
    char: '🪁',
    name: 'kite',
  },
  {
    char: '🎱',
    name: 'pool 8 ball',
  },
  {
    char: '🔮',
    name: 'crystal ball',
  },
  {
    char: '🪄',
    name: 'magic wand',
  },
  {
    char: '🧿',
    name: 'nazar amulet',
  },
  {
    char: '🎮',
    name: 'video game',
  },
  {
    char: '🕹️',
    name: 'joystick',
  },
  {
    char: '🎰',
    name: 'slot machine',
  },
  {
    char: '🎲',
    name: 'game die',
  },
  {
    char: '🧩',
    name: 'puzzle piece',
  },
  {
    char: '🧸',
    name: 'teddy bear',
  },
  {
    char: '🃏',
    name: 'joker',
  },
  {
    char: '🀄',
    name: 'mahjong red dragon',
  },
  {
    char: '🎴',
    name: 'flower playing cards',
  },
  {
    char: '🎭',
    name: 'performing arts',
  },
  {
    char: '🖼️',
    name: 'framed picture',
  },
  {
    char: '🧵',
    name: 'thread',
  },
  {
    char: '🪡',
    name: 'sewing needle',
  },
  {
    char: '🧶',
    name: 'yarn',
  },
  {
    char: '🪢',
    name: 'knot',
  },
  {
    char: '👓',
    name: 'glasses',
  },
  {
    char: '🕶️',
    name: 'sunglasses',
  },
  {
    char: '🥽',
    name: 'goggles',
  },
  {
    char: '🥼',
    name: 'lab coat',
  },
  {
    char: '🦺',
    name: 'safety vest',
  },
  {
    char: '👔',
    name: 'necktie',
  },
  {
    char: '👕',
    name: 't-shirt',
  },
  {
    char: '👖',
    name: 'jeans',
  },
  {
    char: '🧣',
    name: 'scarf',
  },
  {
    char: '🧤',
    name: 'gloves',
  },
  {
    char: '🧥',
    name: 'coat',
  },
  {
    char: '🧦',
    name: 'socks',
  },
  {
    char: '👗',
    name: 'dress',
  },
  {
    char: '👘',
    name: 'kimono',
  },
  {
    char: '🥻',
    name: 'sari',
  },
  {
    char: '🩱',
    name: 'one-piece swimsuit',
  },
  {
    char: '🩲',
    name: 'briefs',
  },
  {
    char: '🩳',
    name: 'shorts',
  },
  {
    char: '👙',
    name: 'bikini',
  },
  {
    char: '👚',
    name: 'woman’s clothes',
  },
  {
    char: '👛',
    name: 'purse',
  },
  {
    char: '👜',
    name: 'handbag',
  },
  {
    char: '👝',
    name: 'clutch bag',
  },
  {
    char: '🛍️',
    name: 'shopping bags',
  },
  {
    char: '🎒',
    name: 'backpack',
  },
  {
    char: '🩴',
    name: 'thong sandal',
  },
  {
    char: '👞',
    name: 'man’s shoe',
  },
  {
    char: '👟',
    name: 'running shoe',
  },
  {
    char: '🥾',
    name: 'hiking boot',
  },
  {
    char: '🥿',
    name: 'flat shoe',
  },
  {
    char: '👠',
    name: 'high-heeled shoe',
  },
  {
    char: '👡',
    name: 'woman’s sandal',
  },
  {
    char: '🩰',
    name: 'ballet shoes',
  },
  {
    char: '👢',
    name: 'woman’s boot',
  },
  {
    char: '👑',
    name: 'crown',
  },
  {
    char: '👒',
    name: 'woman’s hat',
  },
  {
    char: '🎩',
    name: 'top hat',
  },
  {
    char: '🧢',
    name: 'billed cap',
  },
  {
    char: '⛑️',
    name: 'rescue worker’s helmet',
  },
  {
    char: '📿',
    name: 'prayer beads',
  },
  {
    char: '💄',
    name: 'lipstick',
  },
  {
    char: '💍',
    name: 'ring',
  },
  {
    char: '💎',
    name: 'gem stone',
  },
  {
    char: '🔇',
    name: 'muted speaker',
  },
  {
    char: '🔈',
    name: 'speaker low volume',
  },
  {
    char: '🔉',
    name: 'speaker medium volume',
  },
  {
    char: '🔊',
    name: 'speaker high volume',
  },
  {
    char: '📢',
    name: 'loudspeaker',
  },
  {
    char: '📣',
    name: 'megaphone',
  },
  {
    char: '📯',
    name: 'postal horn',
  },
  {
    char: '🔔',
    name: 'bell',
  },
  {
    char: '🔕',
    name: 'bell with slash',
  },
  {
    char: '🎼',
    name: 'musical score',
  },
  {
    char: '🎵',
    name: 'musical note',
  },
  {
    char: '🎶',
    name: 'musical notes',
  },
  {
    char: '🎙️',
    name: 'studio microphone',
  },
  {
    char: '🎚️',
    name: 'level slider',
  },
  {
    char: '🎛️',
    name: 'control knobs',
  },
  {
    char: '🎧',
    name: 'headphone',
  },
  {
    char: '📻',
    name: 'radio',
  },
  {
    char: '🎷',
    name: 'saxophone',
  },
  {
    char: '🪗',
    name: 'accordion',
  },
  {
    char: '🎸',
    name: 'guitar',
  },
  {
    char: '🎹',
    name: 'musical keyboard',
  },
  {
    char: '🎺',
    name: 'trumpet',
  },
  {
    char: '🎻',
    name: 'violin',
  },
  {
    char: '🪕',
    name: 'banjo',
  },
  {
    char: '🥁',
    name: 'drum',
  },
  {
    char: '📱',
    name: 'mobile phone',
  },
  {
    char: '📲',
    name: 'mobile phone with arrow',
  },
  {
    char: '☎️',
    name: 'telephone',
  },
  {
    char: '📞',
    name: 'telephone receiver',
  },
  {
    char: '📟',
    name: 'pager',
  },
  {
    char: '📠',
    name: 'fax machine',
  },
  {
    char: '🔋',
    name: 'battery',
  },
  {
    char: '🔌',
    name: 'electric plug',
  },
  {
    char: '🖥️',
    name: 'desktop computer',
  },
  {
    char: '🖨️',
    name: 'printer',
  },
  {
    char: '⌨️',
    name: 'keyboard',
  },
  {
    char: '🖱️',
    name: 'computer mouse',
  },
  {
    char: '🖲️',
    name: 'trackball',
  },
  {
    char: '💽',
    name: 'computer disk',
  },
  {
    char: '💾',
    name: 'floppy disk',
  },
  {
    char: '💿',
    name: 'optical disk',
  },
  {
    char: '📀',
    name: 'dvd',
  },
  {
    char: '🧮',
    name: 'abacus',
  },
  {
    char: '🎥',
    name: 'movie camera',
  },
  {
    char: '🎞️',
    name: 'film frames',
  },
  {
    char: '📽️',
    name: 'film projector',
  },
  {
    char: '🎬',
    name: 'clapper board',
  },
  {
    char: '📺',
    name: 'television',
  },
  {
    char: '📷',
    name: 'camera',
  },
  {
    char: '📸',
    name: 'camera with flash',
  },
  {
    char: '📹',
    name: 'video camera',
  },
  {
    char: '📼',
    name: 'videocassette',
  },
  {
    char: '🔍',
    name: 'magnifying glass tilted left',
  },
  {
    char: '🔎',
    name: 'magnifying glass tilted right',
  },
  {
    char: '🕯️',
    name: 'candle',
  },
  {
    char: '💡',
    name: 'light bulb',
  },
  {
    char: '🔦',
    name: 'flashlight',
  },
  {
    char: '🏮',
    name: 'red paper lantern',
  },
  {
    char: '🪔',
    name: 'diya lamp',
  },
  {
    char: '📔',
    name: 'notebook with decorative cover',
  },
  {
    char: '📕',
    name: 'closed book',
  },
  {
    char: '📖',
    name: 'open book',
  },
  {
    char: '📗',
    name: 'green book',
  },
  {
    char: '📘',
    name: 'blue book',
  },
  {
    char: '📙',
    name: 'orange book',
  },
  {
    char: '📚',
    name: 'books',
  },
  {
    char: '📓',
    name: 'notebook',
  },
  {
    char: '📒',
    name: 'ledger',
  },
  {
    char: '📃',
    name: 'page with curl',
  },
  {
    char: '📜',
    name: 'scroll',
  },
  {
    char: '📄',
    name: 'page facing up',
  },
  {
    char: '📰',
    name: 'newspaper',
  },
  {
    char: '🗞️',
    name: 'rolled-up newspaper',
  },
  {
    char: '📑',
    name: 'bookmark tabs',
  },
  {
    char: '🔖',
    name: 'bookmark',
  },
  {
    char: '🏷️',
    name: 'label',
  },
  {
    char: '💰',
    name: 'money bag',
  },
  {
    char: '💴',
    name: 'yen banknote',
  },
  {
    char: '💵',
    name: 'dollar banknote',
  },
  {
    char: '💶',
    name: 'euro banknote',
  },
  {
    char: '💷',
    name: 'pound banknote',
  },
  {
    char: '💸',
    name: 'money with wings',
  },
  {
    char: '💳',
    name: 'credit card',
  },
  {
    char: '🧾',
    name: 'receipt',
  },
  {
    char: '💹',
    name: 'chart increasing with yen',
  },
  {
    char: '✉️',
    name: 'envelope',
  },
  {
    char: '📧',
    name: 'e-mail',
  },
  {
    char: '📨',
    name: 'incoming envelope',
  },
  {
    char: '📩',
    name: 'envelope with arrow',
  },
  {
    char: '📤',
    name: 'outbox tray',
  },
  {
    char: '📥',
    name: 'inbox tray',
  },
  {
    char: '📦',
    name: 'package',
  },
  {
    char: '📫',
    name: 'closed mailbox with raised flag',
  },
  {
    char: '📪',
    name: 'closed mailbox with lowered flag',
  },
  {
    char: '📬',
    name: 'open mailbox with raised flag',
  },
  {
    char: '📭',
    name: 'open mailbox with lowered flag',
  },
  {
    char: '📮',
    name: 'postbox',
  },
  {
    char: '🗳️',
    name: 'ballot box with ballot',
  },
  {
    char: '🖋️',
    name: 'fountain pen',
  },
  {
    char: '🖊️',
    name: 'pen',
  },
  {
    char: '🖌️',
    name: 'paintbrush',
  },
  {
    char: '🖍️',
    name: 'crayon',
  },
  {
    char: '📝',
    name: 'memo',
  },
  {
    char: '📁',
    name: 'file folder',
  },
  {
    char: '📂',
    name: 'open file folder',
  },
  {
    char: '🗂️',
    name: 'card index dividers',
  },
  {
    char: '📅',
    name: 'calendar',
  },
  {
    char: '📆',
    name: 'tear-off calendar',
  },
  {
    char: '🗒️',
    name: 'spiral notepad',
  },
  {
    char: '🗓️',
    name: 'spiral calendar',
  },
  {
    char: '📇',
    name: 'card index',
  },
  {
    char: '📈',
    name: 'chart increasing',
  },
  {
    char: '📉',
    name: 'chart decreasing',
  },
  {
    char: '📊',
    name: 'bar chart',
  },
  {
    char: '📋',
    name: 'clipboard',
  },
  {
    char: '📌',
    name: 'pushpin',
  },
  {
    char: '📍',
    name: 'round pushpin',
  },
  {
    char: '📎',
    name: 'paperclip',
  },
  {
    char: '🖇️',
    name: 'linked paperclips',
  },
  {
    char: '📏',
    name: 'straight ruler',
  },
  {
    char: '📐',
    name: 'triangular ruler',
  },
  {
    char: '🗃️',
    name: 'card file box',
  },
  {
    char: '🗄️',
    name: 'file cabinet',
  },
  {
    char: '🗑️',
    name: 'wastebasket',
  },
  {
    char: '🔒',
    name: 'locked',
  },
  {
    char: '🔓',
    name: 'unlocked',
  },
  {
    char: '🔏',
    name: 'locked with pen',
  },
  {
    char: '🔐',
    name: 'locked with key',
  },
  {
    char: '🔑',
    name: 'key',
  },
  {
    char: '🗝️',
    name: 'old key',
  },
  {
    char: '🔨',
    name: 'hammer',
  },
  {
    char: '🪓',
    name: 'axe',
  },
  {
    char: '⛏️',
    name: 'pick',
  },
  {
    char: '⚒️',
    name: 'hammer and pick',
  },
  {
    char: '🛠️',
    name: 'hammer and wrench',
  },
  {
    char: '🗡️',
    name: 'dagger',
  },
  {
    char: '⚔️',
    name: 'crossed swords',
  },
  {
    char: '🔫',
    name: 'water pistol',
  },
  {
    char: '🪃',
    name: 'boomerang',
  },
  {
    char: '🏹',
    name: 'bow and arrow',
  },
  {
    char: '🛡️',
    name: 'shield',
  },
  {
    char: '🔩',
    name: 'nut and bolt',
  },
  {
    char: '⚙',
    name: 'gear',
  },
  {
    char: '🗜️',
    name: 'clamp',
  },
  {
    char: '🦯',
    name: 'white cane',
  },
  {
    char: '🔗',
    name: 'link',
  },
  {
    char: '⛓️',
    name: 'chains',
  },
  {
    char: '🧰',
    name: 'toolbox',
  },
  {
    char: '🧲',
    name: 'magnet',
  },
  {
    char: '🧪',
    name: 'test tube',
  },
  {
    char: '🧫',
    name: 'petri dish',
  },
  {
    char: '🧬',
    name: 'dna',
  },
  {
    char: '🔭',
    name: 'telescope',
  },
  {
    char: '📡',
    name: 'satellite antenna',
  },
  {
    char: '💉',
    name: 'syringe',
  },
  {
    char: '🩸',
    name: 'drop of blood',
  },
  {
    char: '💊',
    name: 'pill',
  },
  {
    char: '🩹',
    name: 'adhesive bandage',
  },
  {
    char: '🩺',
    name: 'stethoscope',
  },
  {
    char: '🚪',
    name: 'door',
  },
  {
    char: '🛏️',
    name: 'bed',
  },
  {
    char: '🛋️',
    name: 'couch and lamp',
  },
  {
    char: '🪑',
    name: 'chair',
  },
  {
    char: '🚽',
    name: 'toilet',
  },
  {
    char: '🚿',
    name: 'shower',
  },
  {
    char: '🛁',
    name: 'bathtub',
  },
  {
    char: '🪤',
    name: 'mouse trap',
  },
  {
    char: '🪒',
    name: 'razor',
  },
  {
    char: '🧴',
    name: 'lotion bottle',
  },
  {
    char: '🧷',
    name: 'safety pin',
  },
  {
    char: '🧹',
    name: 'broom',
  },
  {
    char: '🧺',
    name: 'basket',
  },
  {
    char: '🧻',
    name: 'roll of paper',
  },
  {
    char: '🪣',
    name: 'bucket',
  },
  {
    char: '🧼',
    name: 'soap',
  },
  {
    char: '🧽',
    name: 'sponge',
  },
  {
    char: '🧯',
    name: 'fire extinguisher',
  },
  {
    char: '🛒',
    name: 'shopping cart',
  },
  {
    char: '🚬',
    name: 'cigarette',
  },
  {
    char: '🗿',
    name: 'moai',
  },
  {
    char: '🏧',
    name: 'ATM sign',
  },
  {
    char: '🚮',
    name: 'litter in bin sign',
  },
  {
    char: '🚰',
    name: 'potable water',
  },
  {
    char: '♿',
    name: 'wheelchair symbol',
  },
  {
    char: '🚹',
    name: 'men’s room',
  },
  {
    char: '🚺',
    name: 'women’s room',
  },
  {
    char: '🚻',
    name: 'restroom',
  },
  {
    char: '🚼',
    name: 'baby symbol',
  },
  {
    char: '🚾',
    name: 'water closet',
  },
  {
    char: '🛂',
    name: 'passport control',
  },
  {
    char: '🛃',
    name: 'customs',
  },
  {
    char: '🛄',
    name: 'baggage claim',
  },
  {
    char: '🛅',
    name: 'left luggage',
  },
  {
    char: '🚸',
    name: 'children crossing',
  },
  {
    char: '⛔',
    name: 'no entry',
  },
  {
    char: '🚫',
    name: 'prohibited',
  },
  {
    char: '🚳',
    name: 'no bicycles',
  },
  {
    char: '🚭',
    name: 'no smoking',
  },
  {
    char: '🚯',
    name: 'no littering',
  },
  {
    char: '🚱',
    name: 'non-potable water',
  },
  {
    char: '🚷',
    name: 'no pedestrians',
  },
  {
    char: '📵',
    name: 'no mobile phones',
  },
  {
    char: '🔞',
    name: 'no one under eighteen',
  },
  {
    char: '⬆️',
    name: 'up arrow',
  },
  {
    char: '⬇️',
    name: 'down arrow',
  },
  {
    char: '⬅️',
    name: 'left arrow',
  },
  {
    char: '⤴️',
    name: 'right arrow curving up',
  },
  {
    char: '⤵️',
    name: 'right arrow curving down',
  },
  {
    char: '🔃',
    name: 'clockwise vertical arrows',
  },
  {
    char: '🔄',
    name: 'counterclockwise arrows button',
  },
  {
    char: '🔙',
    name: 'BACK arrow',
  },
  {
    char: '🔚',
    name: 'END arrow',
  },
  {
    char: '🔛',
    name: 'ON! arrow',
  },
  {
    char: '🔜',
    name: 'SOON arrow',
  },
  {
    char: '🔝',
    name: 'TOP arrow',
  },
  {
    char: '🛐',
    name: 'place of worship',
  },
  {
    char: '🕉️',
    name: 'om',
  },
  {
    char: '🕎',
    name: 'menorah',
  },
  {
    char: '🔯',
    name: 'dotted six-pointed star',
  },
  {
    char: '⛎',
    name: 'Ophiuchus',
  },
  {
    char: '🔀',
    name: 'shuffle tracks button',
  },
  {
    char: '🔁',
    name: 'repeat button',
  },
  {
    char: '🔂',
    name: 'repeat single button',
  },
  {
    char: '⏩',
    name: 'fast-forward button',
  },
  {
    char: '⏭️',
    name: 'next track button',
  },
  {
    char: '⏯️',
    name: 'play or pause button',
  },
  {
    char: '⏪',
    name: 'fast reverse button',
  },
  {
    char: '⏮️',
    name: 'last track button',
  },
  {
    char: '🔼',
    name: 'upwards button',
  },
  {
    char: '⏫',
    name: 'fast up button',
  },
  {
    char: '🔽',
    name: 'downwards button',
  },
  {
    char: '⏬',
    name: 'fast down button',
  },
  {
    char: '⏸️',
    name: 'pause button',
  },
  {
    char: '⏹️',
    name: 'stop button',
  },
  {
    char: '⏺️',
    name: 'record button',
  },
  {
    char: '🎦',
    name: 'cinema',
  },
  {
    char: '🔅',
    name: 'dim button',
  },
  {
    char: '🔆',
    name: 'bright button',
  },
  {
    char: '📶',
    name: 'antenna bars',
  },
  {
    char: '📳',
    name: 'vibration mode',
  },
  {
    char: '📴',
    name: 'mobile phone off',
  },
  {
    char: '➕',
    name: 'plus',
  },
  {
    char: '➖',
    name: 'minus',
  },
  {
    char: '❓',
    name: 'red question mark',
  },
  {
    char: '❔',
    name: 'white question mark',
  },
  {
    char: '❕',
    name: 'white exclamation mark',
  },
  {
    char: '❗',
    name: 'red exclamation mark',
  },
  {
    char: '〰️',
    name: 'wavy dash',
  },
  {
    char: '💱',
    name: 'currency exchange',
  },
  {
    char: '💲',
    name: 'heavy dollar sign',
  },
  {
    char: '🔱',
    name: 'trident emblem',
  },
  {
    char: '📛',
    name: 'name badge',
  },
  {
    char: '🔰',
    name: 'Japanese symbol for beginner',
  },
  {
    char: '⭕',
    name: 'hollow red circle',
  },
  {
    char: '✅',
    name: 'check mark button',
  },
  {
    char: '❌',
    name: 'cross mark',
  },
  {
    char: '❎',
    name: 'cross mark button',
  },
  {
    char: '➰',
    name: 'curly loop',
  },
  {
    char: '➿',
    name: 'double curly loop',
  },
  {
    char: '〽️',
    name: 'part alternation mark',
  },
  {
    char: '#️⃣',
    name: 'keycap: #',
  },
  {
    char: '*️⃣',
    name: 'keycap: *',
  },
  {
    char: '0️⃣',
    name: 'keycap: 0',
  },
  {
    char: '1️⃣',
    name: 'keycap: 1',
  },
  {
    char: '2️⃣',
    name: 'keycap: 2',
  },
  {
    char: '3️⃣',
    name: 'keycap: 3',
  },
  {
    char: '4️⃣',
    name: 'keycap: 4',
  },
  {
    char: '5️⃣',
    name: 'keycap: 5',
  },
  {
    char: '6️⃣',
    name: 'keycap: 6',
  },
  {
    char: '7️⃣',
    name: 'keycap: 7',
  },
  {
    char: '8️⃣',
    name: 'keycap: 8',
  },
  {
    char: '9️⃣',
    name: 'keycap: 9',
  },
  {
    char: '🔟',
    name: 'keycap: 10',
  },
  {
    char: '🔠',
    name: 'input latin uppercase',
  },
  {
    char: '🔡',
    name: 'input latin lowercase',
  },
  {
    char: '🔢',
    name: 'input numbers',
  },
  {
    char: '🔣',
    name: 'input symbols',
  },
  {
    char: '🔤',
    name: 'input latin letters',
  },
  {
    char: '🅰️',
    name: 'A button (blood type)',
  },
  {
    char: '🆎',
    name: 'AB button (blood type)',
  },
  {
    char: '🅱️',
    name: 'B button (blood type)',
  },
  {
    char: '🆑',
    name: 'CL button',
  },
  {
    char: '🆒',
    name: 'COOL button',
  },
  {
    char: '🆓',
    name: 'FREE button',
  },
  {
    char: 'ℹ️',
    name: 'information',
  },
  {
    char: '🆔',
    name: 'ID button',
  },
  {
    char: 'Ⓜ️',
    name: 'circled M',
  },
  {
    char: '🆕',
    name: 'NEW button',
  },
  {
    char: '🆖',
    name: 'NG button',
  },
  {
    char: '🅾️',
    name: 'O button (blood type)',
  },
  {
    char: '🆗',
    name: 'OK button',
  },
  {
    char: '🅿️',
    name: 'P button',
  },
  {
    char: '🆘',
    name: 'SOS button',
  },
  {
    char: '🆙',
    name: 'UP! button',
  },
  {
    char: '🆚',
    name: 'VS button',
  },
  {
    char: '🈁',
    name: 'Japanese “here” button',
  },
  {
    char: '🈂️',
    name: 'Japanese “service charge” button',
  },
  {
    char: '🈷️',
    name: 'Japanese “monthly amount” button',
  },
  {
    char: '🈶',
    name: 'Japanese “not free of charge” button',
  },
  {
    char: '🈯',
    name: 'Japanese “reserved” button',
  },
  {
    char: '🉐',
    name: 'Japanese “bargain” button',
  },
  {
    char: '🈹',
    name: 'Japanese “discount” button',
  },
  {
    char: '🈚',
    name: 'Japanese “free of charge” button',
  },
  {
    char: '🈲',
    name: 'Japanese “prohibited” button',
  },
  {
    char: '🉑',
    name: 'Japanese “acceptable” button',
  },
  {
    char: '🈸',
    name: 'Japanese “application” button',
  },
  {
    char: '🈴',
    name: 'Japanese “passing grade” button',
  },
  {
    char: '🈳',
    name: 'Japanese “vacancy” button',
  },
  {
    char: '㊗️',
    name: 'Japanese “congratulations” button',
  },
  {
    char: '㊙️',
    name: 'Japanese “secret” button',
  },
  {
    char: '🈺',
    name: 'Japanese “open for business” button',
  },
  {
    char: '🈵',
    name: 'Japanese “no vacancy” button',
  },
  {
    char: '🔴',
    name: 'red circle',
  },
  {
    char: '🟠',
    name: 'orange circle',
  },
  {
    char: '🟡',
    name: 'yellow circle',
  },
  {
    char: '🟢',
    name: 'green circle',
  },
  {
    char: '🔵',
    name: 'blue circle',
  },
  {
    char: '🟣',
    name: 'purple circle',
  },
  {
    char: '🟤',
    name: 'brown circle',
  },
  {
    char: '⚫',
    name: 'black circle',
  },
  {
    char: '⚪',
    name: 'white circle',
  },
  {
    char: '🟥',
    name: 'red square',
  },
  {
    char: '🟧',
    name: 'orange square',
  },
  {
    char: '🟨',
    name: 'yellow square',
  },
  {
    char: '🟩',
    name: 'green square',
  },
  {
    char: '🟦',
    name: 'blue square',
  },
  {
    char: '🟪',
    name: 'purple square',
  },
  {
    char: '🟫',
    name: 'brown square',
  },
  {
    char: '⬛',
    name: 'black large square',
  },
  {
    char: '⬜',
    name: 'white large square',
  },
  {
    char: '🔶',
    name: 'large orange diamond',
  },
  {
    char: '🔷',
    name: 'large blue diamond',
  },
  {
    char: '🔸',
    name: 'small orange diamond',
  },
  {
    char: '🔹',
    name: 'small blue diamond',
  },
  {
    char: '🔺',
    name: 'red triangle pointed up',
  },
  {
    char: '🔻',
    name: 'red triangle pointed down',
  },
  {
    char: '💠',
    name: 'diamond with a dot',
  },
  {
    char: '🔘',
    name: 'radio button',
  },
  {
    char: '🔳',
    name: 'white square button',
  },
  {
    char: '🔲',
    name: 'black square button',
  },
  {
    char: '🏁',
    name: 'chequered flag',
  },
  {
    char: '🚩',
    name: 'triangular flag',
  },
  {
    char: '🎌',
    name: 'crossed flags',
  },
  {
    char: '🏴',
    name: 'black flag',
  },
  {
    char: '🏳️',
    name: 'white flag',
  },
  {
    char: '🇦🇨',
    name: 'flag: Ascension Island',
  },
  {
    char: '🇦🇩',
    name: 'flag: Andorra',
  },
  {
    char: '🇦🇪',
    name: 'flag: United Arab Emirates',
  },
  {
    char: '🇦🇫',
    name: 'flag: Afghanistan',
  },
  {
    char: '🇦🇬',
    name: 'flag: Antigua & Barbuda',
  },
  {
    char: '🇦🇮',
    name: 'flag: Anguilla',
  },
  {
    char: '🇦🇱',
    name: 'flag: Albania',
  },
  {
    char: '🇦🇲',
    name: 'flag: Armenia',
  },
  {
    char: '🇦🇴',
    name: 'flag: Angola',
  },
  {
    char: '🇦🇶',
    name: 'flag: Antarctica',
  },
  {
    char: '🇦🇷',
    name: 'flag: Argentina',
  },
  {
    char: '🇦🇸',
    name: 'flag: American Samoa',
  },
  {
    char: '🇦🇹',
    name: 'flag: Austria',
  },
  {
    char: '🇦🇺',
    name: 'flag: Australia',
  },
  {
    char: '🇦🇼',
    name: 'flag: Aruba',
  },
  {
    char: '🇦🇽',
    name: 'flag: Åland Islands',
  },
  {
    char: '🇦🇿',
    name: 'flag: Azerbaijan',
  },
  {
    char: '🇧🇦',
    name: 'flag: Bosnia & Herzegovina',
  },
  {
    char: '🇧🇧',
    name: 'flag: Barbados',
  },
  {
    char: '🇧🇩',
    name: 'flag: Bangladesh',
  },
  {
    char: '🇧🇪',
    name: 'flag: Belgium',
  },
  {
    char: '🇧🇫',
    name: 'flag: Burkina Faso',
  },
  {
    char: '🇧🇬',
    name: 'flag: Bulgaria',
  },
  {
    char: '🇧🇭',
    name: 'flag: Bahrain',
  },
  {
    char: '🇧🇮',
    name: 'flag: Burundi',
  },
  {
    char: '🇧🇯',
    name: 'flag: Benin',
  },
  {
    char: '🇧🇱',
    name: 'flag: St. Barthélemy',
  },
  {
    char: '🇧🇲',
    name: 'flag: Bermuda',
  },
  {
    char: '🇧🇳',
    name: 'flag: Brunei',
  },
  {
    char: '🇧🇴',
    name: 'flag: Bolivia',
  },
  {
    char: '🇧🇶',
    name: 'flag: Caribbean Netherlands',
  },
  {
    char: '🇧🇷',
    name: 'flag: Brazil',
  },
  {
    char: '🇧🇸',
    name: 'flag: Bahamas',
  },
  {
    char: '🇧🇹',
    name: 'flag: Bhutan',
  },
  {
    char: '🇧🇻',
    name: 'flag: Bouvet Island',
  },
  {
    char: '🇧🇼',
    name: 'flag: Botswana',
  },
  {
    char: '🇧🇾',
    name: 'flag: Belarus',
  },
  {
    char: '🇧🇿',
    name: 'flag: Belize',
  },
  {
    char: '🇨🇦',
    name: 'flag: Canada',
  },
  {
    char: '🇨🇨',
    name: 'flag: Cocos (Keeling) Islands',
  },
  {
    char: '🇨🇩',
    name: 'flag: Congo - Kinshasa',
  },
  {
    char: '🇨🇫',
    name: 'flag: Central African Republic',
  },
  {
    char: '🇨🇬',
    name: 'flag: Congo - Brazzaville',
  },
  {
    char: '🇨🇭',
    name: 'flag: Switzerland',
  },
  {
    char: '🇨🇮',
    name: 'flag: Côte d’Ivoire',
  },
  {
    char: '🇨🇰',
    name: 'flag: Cook Islands',
  },
  {
    char: '🇨🇱',
    name: 'flag: Chile',
  },
  {
    char: '🇨🇲',
    name: 'flag: Cameroon',
  },
  {
    char: '🇨🇳',
    name: 'flag: China',
  },
  {
    char: '🇨🇴',
    name: 'flag: Colombia',
  },
  {
    char: '🇨🇵',
    name: 'flag: Clipperton Island',
  },
  {
    char: '🇨🇷',
    name: 'flag: Costa Rica',
  },
  {
    char: '🇨🇺',
    name: 'flag: Cuba',
  },
  {
    char: '🇨🇻',
    name: 'flag: Cape Verde',
  },
  {
    char: '🇨🇼',
    name: 'flag: Curaçao',
  },
  {
    char: '🇨🇽',
    name: 'flag: Christmas Island',
  },
  {
    char: '🇨🇾',
    name: 'flag: Cyprus',
  },
  {
    char: '🇨🇿',
    name: 'flag: Czechia',
  },
  {
    char: '🇩🇪',
    name: 'flag: Germany',
  },
  {
    char: '🇩🇬',
    name: 'flag: Diego Garcia',
  },
  {
    char: '🇩🇯',
    name: 'flag: Djibouti',
  },
  {
    char: '🇩🇰',
    name: 'flag: Denmark',
  },
  {
    char: '🇩🇲',
    name: 'flag: Dominica',
  },
  {
    char: '🇩🇴',
    name: 'flag: Dominican Republic',
  },
  {
    char: '🇩🇿',
    name: 'flag: Algeria',
  },
  {
    char: '🇪🇦',
    name: 'flag: Ceuta & Melilla',
  },
  {
    char: '🇪🇨',
    name: 'flag: Ecuador',
  },
  {
    char: '🇪🇪',
    name: 'flag: Estonia',
  },
  {
    char: '🇪🇬',
    name: 'flag: Egypt',
  },
  {
    char: '🇪🇭',
    name: 'flag: Western Sahara',
  },
  {
    char: '🇪🇷',
    name: 'flag: Eritrea',
  },
  {
    char: '🇪🇸',
    name: 'flag: Spain',
  },
  {
    char: '🇪🇹',
    name: 'flag: Ethiopia',
  },
  {
    char: '🇪🇺',
    name: 'flag: European Union',
  },
  {
    char: '🇫🇮',
    name: 'flag: Finland',
  },
  {
    char: '🇫🇯',
    name: 'flag: Fiji',
  },
  {
    char: '🇫🇰',
    name: 'flag: Falkland Islands',
  },
  {
    char: '🇫🇲',
    name: 'flag: Micronesia',
  },
  {
    char: '🇫🇴',
    name: 'flag: Faroe Islands',
  },
  {
    char: '🇫🇷',
    name: 'flag: France',
  },
  {
    char: '🇬🇦',
    name: 'flag: Gabon',
  },
  {
    char: '🇬🇧',
    name: 'flag: United Kingdom',
  },
  {
    char: '🇬🇩',
    name: 'flag: Grenada',
  },
  {
    char: '🇬🇪',
    name: 'flag: Georgia',
  },
  {
    char: '🇬🇫',
    name: 'flag: French Guiana',
  },
  {
    char: '🇬🇬',
    name: 'flag: Guernsey',
  },
  {
    char: '🇬🇭',
    name: 'flag: Ghana',
  },
  {
    char: '🇬🇮',
    name: 'flag: Gibraltar',
  },
  {
    char: '🇬🇱',
    name: 'flag: Greenland',
  },
  {
    char: '🇬🇲',
    name: 'flag: Gambia',
  },
  {
    char: '🇬🇳',
    name: 'flag: Guinea',
  },
  {
    char: '🇬🇵',
    name: 'flag: Guadeloupe',
  },
  {
    char: '🇬🇶',
    name: 'flag: Equatorial Guinea',
  },
  {
    char: '🇬🇷',
    name: 'flag: Greece',
  },
  {
    char: '🇬🇸',
    name: 'flag: South Georgia & South Sandwich Islands',
  },
  {
    char: '🇬🇹',
    name: 'flag: Guatemala',
  },
  {
    char: '🇬🇺',
    name: 'flag: Guam',
  },
  {
    char: '🇬🇼',
    name: 'flag: Guinea-Bissau',
  },
  {
    char: '🇬🇾',
    name: 'flag: Guyana',
  },
  {
    char: '🇭🇰',
    name: 'flag: Hong Kong SAR China',
  },
  {
    char: '🇭🇲',
    name: 'flag: Heard & McDonald Islands',
  },
  {
    char: '🇭🇳',
    name: 'flag: Honduras',
  },
  {
    char: '🇭🇷',
    name: 'flag: Croatia',
  },
  {
    char: '🇭🇹',
    name: 'flag: Haiti',
  },
  {
    char: '🇭🇺',
    name: 'flag: Hungary',
  },
  {
    char: '🇮🇨',
    name: 'flag: Canary Islands',
  },
  {
    char: '🇮🇩',
    name: 'flag: Indonesia',
  },
  {
    char: '🇮🇪',
    name: 'flag: Ireland',
  },
  {
    char: '🇮🇱',
    name: 'flag: Israel',
  },
  {
    char: '🇮🇲',
    name: 'flag: Isle of Man',
  },
  {
    char: '🇮🇳',
    name: 'flag: India',
  },
  {
    char: '🇮🇴',
    name: 'flag: British Indian Ocean Territory',
  },
  {
    char: '🇮🇶',
    name: 'flag: Iraq',
  },
  {
    char: '🇮🇷',
    name: 'flag: Iran',
  },
  {
    char: '🇮🇸',
    name: 'flag: Iceland',
  },
  {
    char: '🇮🇹',
    name: 'flag: Italy',
  },
  {
    char: '🇯🇪',
    name: 'flag: Jersey',
  },
  {
    char: '🇯🇲',
    name: 'flag: Jamaica',
  },
  {
    char: '🇯🇴',
    name: 'flag: Jordan',
  },
  {
    char: '🇯🇵',
    name: 'flag: Japan',
  },
  {
    char: '🇰🇪',
    name: 'flag: Kenya',
  },
  {
    char: '🇰🇬',
    name: 'flag: Kyrgyzstan',
  },
  {
    char: '🇰🇭',
    name: 'flag: Cambodia',
  },
  {
    char: '🇰🇮',
    name: 'flag: Kiribati',
  },
  {
    char: '🇰🇲',
    name: 'flag: Comoros',
  },
  {
    char: '🇰🇳',
    name: 'flag: St. Kitts & Nevis',
  },
  {
    char: '🇰🇵',
    name: 'flag: North Korea',
  },
  {
    char: '🇰🇷',
    name: 'flag: South Korea',
  },
  {
    char: '🇰🇼',
    name: 'flag: Kuwait',
  },
  {
    char: '🇰🇾',
    name: 'flag: Cayman Islands',
  },
  {
    char: '🇰🇿',
    name: 'flag: Kazakhstan',
  },
  {
    char: '🇱🇦',
    name: 'flag: Laos',
  },
  {
    char: '🇱🇧',
    name: 'flag: Lebanon',
  },
  {
    char: '🇱🇨',
    name: 'flag: St. Lucia',
  },
  {
    char: '🇱🇮',
    name: 'flag: Liechtenstein',
  },
  {
    char: '🇱🇰',
    name: 'flag: Sri Lanka',
  },
  {
    char: '🇱🇷',
    name: 'flag: Liberia',
  },
  {
    char: '🇱🇸',
    name: 'flag: Lesotho',
  },
  {
    char: '🇱🇹',
    name: 'flag: Lithuania',
  },
  {
    char: '🇱🇺',
    name: 'flag: Luxembourg',
  },
  {
    char: '🇱🇻',
    name: 'flag: Latvia',
  },
  {
    char: '🇱🇾',
    name: 'flag: Libya',
  },
  {
    char: '🇲🇦',
    name: 'flag: Morocco',
  },
  {
    char: '🇲🇨',
    name: 'flag: Monaco',
  },
  {
    char: '🇲🇩',
    name: 'flag: Moldova',
  },
  {
    char: '🇲🇪',
    name: 'flag: Montenegro',
  },
  {
    char: '🇲🇫',
    name: 'flag: St. Martin',
  },
  {
    char: '🇲🇬',
    name: 'flag: Madagascar',
  },
  {
    char: '🇲🇭',
    name: 'flag: Marshall Islands',
  },
  {
    char: '🇲🇰',
    name: 'flag: North Macedonia',
  },
  {
    char: '🇲🇱',
    name: 'flag: Mali',
  },
  {
    char: '🇲🇲',
    name: 'flag: Myanmar (Burma)',
  },
  {
    char: '🇲🇳',
    name: 'flag: Mongolia',
  },
  {
    char: '🇲🇴',
    name: 'flag: Macao SAR China',
  },
  {
    char: '🇲🇵',
    name: 'flag: Northern Mariana Islands',
  },
  {
    char: '🇲🇶',
    name: 'flag: Martinique',
  },
  {
    char: '🇲🇷',
    name: 'flag: Mauritania',
  },
  {
    char: '🇲🇸',
    name: 'flag: Montserrat',
  },
  {
    char: '🇲🇹',
    name: 'flag: Malta',
  },
  {
    char: '🇲🇺',
    name: 'flag: Mauritius',
  },
  {
    char: '🇲🇻',
    name: 'flag: Maldives',
  },
  {
    char: '🇲🇼',
    name: 'flag: Malawi',
  },
  {
    char: '🇲🇽',
    name: 'flag: Mexico',
  },
  {
    char: '🇲🇾',
    name: 'flag: Malaysia',
  },
  {
    char: '🇲🇿',
    name: 'flag: Mozambique',
  },
  {
    char: '🇳🇦',
    name: 'flag: Namibia',
  },
  {
    char: '🇳🇨',
    name: 'flag: New Caledonia',
  },
  {
    char: '🇳🇪',
    name: 'flag: Niger',
  },
  {
    char: '🇳🇫',
    name: 'flag: Norfolk Island',
  },
  {
    char: '🇳🇬',
    name: 'flag: Nigeria',
  },
  {
    char: '🇳🇮',
    name: 'flag: Nicaragua',
  },
  {
    char: '🇳🇱',
    name: 'flag: Netherlands',
  },
  {
    char: '🇳🇴',
    name: 'flag: Norway',
  },
  {
    char: '🇳🇵',
    name: 'flag: Nepal',
  },
  {
    char: '🇳🇷',
    name: 'flag: Nauru',
  },
  {
    char: '🇳🇺',
    name: 'flag: Niue',
  },
  {
    char: '🇳🇿',
    name: 'flag: New Zealand',
  },
  {
    char: '🇴🇲',
    name: 'flag: Oman',
  },
  {
    char: '🇵🇦',
    name: 'flag: Panama',
  },
  {
    char: '🇵🇪',
    name: 'flag: Peru',
  },
  {
    char: '🇵🇫',
    name: 'flag: French Polynesia',
  },
  {
    char: '🇵🇬',
    name: 'flag: Papua New Guinea',
  },
  {
    char: '🇵🇭',
    name: 'flag: Philippines',
  },
  {
    char: '🇵🇰',
    name: 'flag: Pakistan',
  },
  {
    char: '🇵🇱',
    name: 'flag: Poland',
  },
  {
    char: '🇵🇲',
    name: 'flag: St. Pierre & Miquelon',
  },
  {
    char: '🇵🇳',
    name: 'flag: Pitcairn Islands',
  },
  {
    char: '🇵🇷',
    name: 'flag: Puerto Rico',
  },
  {
    char: '🇵🇸',
    name: 'flag: Palestinian Territories',
  },
  {
    char: '🇵🇹',
    name: 'flag: Portugal',
  },
  {
    char: '🇵🇼',
    name: 'flag: Palau',
  },
  {
    char: '🇵🇾',
    name: 'flag: Paraguay',
  },
  {
    char: '🇶🇦',
    name: 'flag: Qatar',
  },
  {
    char: '🇷🇪',
    name: 'flag: Réunion',
  },
  {
    char: '🇷🇴',
    name: 'flag: Romania',
  },
  {
    char: '🇷🇸',
    name: 'flag: Serbia',
  },
  {
    char: '🇷🇺',
    name: 'flag: Russia',
  },
  {
    char: '🇷🇼',
    name: 'flag: Rwanda',
  },
  {
    char: '🇸🇦',
    name: 'flag: Saudi Arabia',
  },
  {
    char: '🇸🇧',
    name: 'flag: Solomon Islands',
  },
  {
    char: '🇸🇨',
    name: 'flag: Seychelles',
  },
  {
    char: '🇸🇩',
    name: 'flag: Sudan',
  },
  {
    char: '🇸🇪',
    name: 'flag: Sweden',
  },
  {
    char: '🇸🇬',
    name: 'flag: Singapore',
  },
  {
    char: '🇸🇭',
    name: 'flag: St. Helena',
  },
  {
    char: '🇸🇮',
    name: 'flag: Slovenia',
  },
  {
    char: '🇸🇯',
    name: 'flag: Svalbard & Jan Mayen',
  },
  {
    char: '🇸🇰',
    name: 'flag: Slovakia',
  },
  {
    char: '🇸🇱',
    name: 'flag: Sierra Leone',
  },
  {
    char: '🇸🇲',
    name: 'flag: San Marino',
  },
  {
    char: '🇸🇳',
    name: 'flag: Senegal',
  },
  {
    char: '🇸🇴',
    name: 'flag: Somalia',
  },
  {
    char: '🇸🇷',
    name: 'flag: Suriname',
  },
  {
    char: '🇸🇸',
    name: 'flag: South Sudan',
  },
  {
    char: '🇸🇹',
    name: 'flag: São Tomé & Príncipe',
  },
  {
    char: '🇸🇻',
    name: 'flag: El Salvador',
  },
  {
    char: '🇸🇽',
    name: 'flag: Sint Maarten',
  },
  {
    char: '🇸🇾',
    name: 'flag: Syria',
  },
  {
    char: '🇸🇿',
    name: 'flag: Eswatini',
  },
  {
    char: '🇹🇦',
    name: 'flag: Tristan da Cunha',
  },
  {
    char: '🇹🇨',
    name: 'flag: Turks & Caicos Islands',
  },
  {
    char: '🇹🇩',
    name: 'flag: Chad',
  },
  {
    char: '🇹🇫',
    name: 'flag: French Southern Territories',
  },
  {
    char: '🇹🇬',
    name: 'flag: Togo',
  },
  {
    char: '🇹🇭',
    name: 'flag: Thailand',
  },
  {
    char: '🇹🇯',
    name: 'flag: Tajikistan',
  },
  {
    char: '🇹🇰',
    name: 'flag: Tokelau',
  },
  {
    char: '🇹🇱',
    name: 'flag: Timor-Leste',
  },
  {
    char: '🇹🇲',
    name: 'flag: Turkmenistan',
  },
  {
    char: '🇹🇳',
    name: 'flag: Tunisia',
  },
  {
    char: '🇹🇴',
    name: 'flag: Tonga',
  },
  {
    char: '🇹🇷',
    name: 'flag: Turkey',
  },
  {
    char: '🇹🇹',
    name: 'flag: Trinidad & Tobago',
  },
  {
    char: '🇹🇻',
    name: 'flag: Tuvalu',
  },
  {
    char: '🇹🇼',
    name: 'flag: Taiwan',
  },
  {
    char: '🇹🇿',
    name: 'flag: Tanzania',
  },
  {
    char: '🇺🇦',
    name: 'flag: Ukraine',
  },
  {
    char: '🇺🇬',
    name: 'flag: Uganda',
  },
  {
    char: '🇺🇲',
    name: 'flag: U.S. Outlying Islands',
  },
  {
    char: '🇺🇳',
    name: 'flag: United Nations',
  },
  {
    char: '🇺🇸',
    name: 'flag: United States',
  },
  {
    char: '🇺🇾',
    name: 'flag: Uruguay',
  },
  {
    char: '🇺🇿',
    name: 'flag: Uzbekistan',
  },
  {
    char: '🇻🇦',
    name: 'flag: Vatican City',
  },
  {
    char: '🇻🇨',
    name: 'flag: St. Vincent & Grenadines',
  },
  {
    char: '🇻🇪',
    name: 'flag: Venezuela',
  },
  {
    char: '🇻🇬',
    name: 'flag: British Virgin Islands',
  },
  {
    char: '🇻🇮',
    name: 'flag: U.S. Virgin Islands',
  },
  {
    char: '🇻🇳',
    name: 'flag: Vietnam',
  },
  {
    char: '🇻🇺',
    name: 'flag: Vanuatu',
  },
  {
    char: '🇼🇫',
    name: 'flag: Wallis & Futuna',
  },
  {
    char: '🇼🇸',
    name: 'flag: Samoa',
  },
  {
    char: '🇽🇰',
    name: 'flag: Kosovo',
  },
  {
    char: '🇾🇪',
    name: 'flag: Yemen',
  },
  {
    char: '🇾🇹',
    name: 'flag: Mayotte',
  },
  {
    char: '🇿🇦',
    name: 'flag: South Africa',
  },
  {
    char: '🇿🇲',
    name: 'flag: Zambia',
  },
  {
    char: '🇿🇼',
    name: 'flag: Zimbabwe',
  },
  {
    char: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    name: 'flag: England',
  },
  {
    char: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    name: 'flag: Scotland',
  },
  {
    char: '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
    name: 'flag: Wales',
  },
];
export default EMOJI;
