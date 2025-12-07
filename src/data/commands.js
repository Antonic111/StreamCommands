export const commandSections = [
  {
    title: "Social/Informational Commands",
    category: "social",
    commands: [
      {
        aliases: ["!commands"],
        description: "Displays this command list and provides a link to view all available Stream Avatars commands.",
        platform: null,
      },
      {
        aliases: ["!discord", "!disc", "!dc"],
        description: "Provides a link to my community Discord server.",
        platform: null,
      },
      {
        aliases: ["!instagram", "!insta", "!ig"],
        description: "Provides a link to my Instagram account.",
        platform: null,
      },
      {
        aliases: ["!tiktok", "!tt"],
        description: "Provides a link to my TikTok account.",
        platform: null,
      },
      {
        aliases: ["!twitch"],
        description: "Provides a link to my Twitch account.",
        platform: "YouTube Only",
      },
      {
        aliases: ["!youtube", "!yt"],
        description: "Provides a link to my YouTube account.",
        platform: "Twitch Only",
      },
      {
        aliases: ["!livingdex", "!shinydex", "!ld", "!sd", "!collection"],
        description: "Provides a link to [ultimatedextracker](https://ultimatedextracker.com) to view my complete shiny Pokémon collection tracker.",
        platform: null,
      },
      {
        aliases: ["!watchtime"],
        description: "Displays your total watch time on my channel.",
        platform: "Twitch Only",
      },
      {
        aliases: ["!followage", "!howlong", "!fa"],
        description: "Displays how long you have been following my channel.",
        platform: "Twitch Only",
      },
      {
        aliases: ["!code"],
        description: "Displays my Dynamax Adventure and trade code. (2580 0852)",
        platform: null,
      },
      {
        aliases: ["!friendcode"],
        description: "Displays my Nintendo Switch friend code for viewers to add me.",
        platform: null,
      },
      {
        aliases: ["!social", "!socials", "!linktree", "!linktr", "!lt"],
        description: "Displays my Linktree with all social media links and additional resources.",
        platform: null,
      },
      {
        aliases: ["!donation", "!donate"],
        description: "Provides a StreamElements donation link to support the stream.",
        platform: null,
      },
    ],
  },
  {
    title: "Fun/Other Commands",
    category: "fun",
    commands: [
      {
        aliases: ["!r.i.p", "!rip"],
        description: "Pay respects. (Press F)",
        platform: null,
      },
      {
        aliases: ["!first"],
        description: "One-time claim per stream to receive 5000 currency and flex your achievement.",
        platform: "YouTube Only",
      },
      {
        aliases: ["!longesthunts", "!lh", "!longest"],
        description: "Displays a list of my top 3 longest shiny hunts of all time.",
        platform: null,
      },
      {
        aliases: ["!checkin", "!checkin {username}"],
        description: "Displays your total check-in count and current leaderboard rank. Add a username to check another viewer's stats. Example: !checkin Antonic",
        platform: null,
      },
      {
        aliases: ["!checkinlb", "!checkin leaderboard"],
        description: "Displays the top 3 viewers with the most stream visits.",
        platform: null,
      },
      {
        aliases: ["!lurk", "!lurking", "!brb", "!afk"],
        description: "Notifies the streamer and chat that you are lurking in the stream.",
        platform: null,
      },
      {
        aliases: ["!quote {number}"],
        description: "Displays a random quote, or specify a number to view a specific quote.",
        platform: null,
      },
      {
        aliases: ["!gamblingluck", "!gl"],
        description: "Sends a luck message to the chat for gambling.",
        platform: null,
      },
      {
        aliases: ["!shinyluck", "!sl"],
        description: "Sends a shiny luck message to the chat.",
        platform: null,
      },
      {
        aliases: ["!goon"],
        description: "Sends a goon message about a random character.",
        platform: null,
      },
      {
        aliases: ["@nult {message}"],
        description: "ChatGPT powered assistant that responds to questions in chat. Example: @nult How was your day?",
        platform: null,
      },
      {
        aliases: ["!caught {Form} {Mon}"],
        description: "Adds the specified Pokémon as caught and displays it on a scroller on the stream overlay.",
        platform: null,
      },
    ],
  },
  {
    title: "Stream Avatars",
    category: "avatar",
    commands: [
      {
        aliases: ["!avatarlist", "!al"],
        description: "Provides a link to a website showcasing all available avatars for use on the stream.",
        platform: null,
      },
      {
        aliases: ["!extensions", "!extension"],
        description: "Opens an extensions page that lets you change avatars and manage avatar-related settings.",
        platform: null,
      },
      {
        aliases: ["!avatar {Mon}"],
        description: "Select an avatar. Replace \"Mon\" with your desired avatar. Example: !avatar charizard",
        platform: null,
      },
      {
        aliases: ["!{current Mon} {form}"],
        description: "Select a form for your current Pokémon avatar. Replace \"current Mon\" with your current avatar name and \"form\" with the variant. Example: !charizard mega_shiny",
        platform: null,
      },
      {
        aliases: ["!pokeball {ball}"],
        description: "Change your pokeball. Replace \"ball\" with your desired pokeball type. Example: !pokeball master",
        platform: null,
      },
      {
        aliases: ["!buy avatar {Mon}", "!buy gear {Mon/ball} {gear}", "!buy gear {Mon}"],
        description: "Purchase items with currency. Use !buy avatar {Mon} to buy a Pokémon avatar. Use !buy gear {Mon/ball} {gear} to buy specific gear for a Pokémon or ball. Use !buy gear {Mon} to list all available gears for that Pokémon.",
        platform: null,
      },
      {
        aliases: ["!jump"],
        description: "Performs the jump action with your avatar.",
        platform: null,
      },
      {
        aliases: ["!sit"],
        description: "Performs the sit action with your avatar.",
        platform: null,
      },
      {
        aliases: ["!stand"],
        description: "Performs the stand action with your avatar.",
        platform: null,
      },
      {
        aliases: ["!attack {name}"],
        description: "Performs the attack action with your avatar targeting a specified user.",
        platform: null,
      },
      {
        aliases: ["!dance"],
        description: "Performs the dance action with your avatar.",
        platform: null,
      },
      {
        aliases: ["!fart"],
        description: "Performs the fart action with your avatar.",
        platform: null,
      },
      {
        aliases: ["!hug {name}"],
        description: "Performs the hug action with your avatar targeting a specified user.",
        platform: null,
      },
      {
        aliases: ["!boom", "!boom {name}"],
        description: "Plants a bomb at the cost of 10 currency. Without a name, bombs yourself. With a name, targets the specified user.",
        platform: null,
      },
    ],
  },
];

