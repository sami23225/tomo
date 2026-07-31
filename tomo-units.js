/* tomo-units.js — per-day grammar content for Tomo, keyed by week then day (1..7).
   Mutates window.TOMO_UNITS so load order vs tomo-daily.js doesn't matter.
   Section types: p / tf / pat / why / warn / mem / try (see tomo-daily.js).
   Authored progressively; each unit's 7 days build from foundation to review. */
(function () {
  var U = (window.TOMO_UNITS = window.TOMO_UNITS || {});

  /* te-form refresher table reused by several days */
  var TEFORM_ROWS = [
    { g: 'る-verbs', r: '食べる → 食べて', n: 'drop る, add て (見る→見て)' },
    { g: 'う・つ・る', r: '買う → 買って', n: '→ って' },
    { g: 'む・ぶ・ぬ', r: '飲む → 飲んで', n: '→ んで' },
    { g: 'く', r: '書く → 書いて', n: '→ いて   ⚠ 行く → 行って' },
    { g: 'ぐ', r: '泳ぐ → 泳いで', n: '→ いで' },
    { g: 'す', r: '話す → 話して', n: '→ して' },
    { g: 'irregular', r: 'する→して · 来る→来て', n: 'just memorize these two' }
  ];

  /* ===================== WEEK 2 — 〜てください / 〜ています ===================== */
  U[2] = {
    title: 'Requests & the -ing form',
    days: [

      /* ---- Day 1 ---- */
      {
        focus: 'The て-form',
        sub: 'Build it for every verb group',
        particle: 'を',
        read: { k: 0, task: 'Read the passage with the translation open' },
        produce: 'Turn these into the て-form: 行く・食べる・話す・待つ・飲む.',
        lesson: {
          min: 6,
          secs: [
            { t: 'p', lab: 'Start here', h: 'The master key of Japanese verbs',
              body: [
                'The <b>て-form</b> is the single most useful verb shape in Japanese. On its own it means roughly “…and,” but its real power is that you bolt endings onto it — this week alone it gives you polite requests (〜てください) and “-ing / a state” (〜ています).',
                'So today isn’t about a meaning — it’s about a <i>shape</i>. Make the て-form automatic and everything that follows just clicks an ending onto the end.'
              ] },
            { t: 'tf', lab: 'Build it', h: 'The て-form by verb group',
              intro: 'る-verbs are easy; the u-verbs are where the sound changes live. Say each pair out loud.',
              rows: TEFORM_ROWS,
              note: 'Group the u-verbs by their ending sound and drill them as a rhythm — that’s far faster than memorising a chart.' },
            { t: 'why', lab: 'Why it works', h: 'The sound changes aren’t random',
              body: [
                'Every change exists to make the word <b>easier to say fast</b>. 買いて (kai-te) is clumsy; 買って (katte) snaps out. 飲みて → 飲んで for the same reason.',
                'Once you feel that, you can almost <i>predict</i> the て-form: whatever version flows off the tongue quickest is usually the right one.'
              ] },
            { t: 'warn', lab: 'Watch out', h: 'The traps everyone hits',
              items: [
                { x: '待ちて', o: '待って', n: 'つ-verbs become って, not ちて. 待つ → 待って.' },
                { x: '行いて', o: '行って', n: '行く is the famous exception: く usually → いて, but 行く → 行って.' },
                { x: 'するて', o: 'して', n: 'する and 来る are irregular — memorise して and 来て (きて).' }
              ] },
            { t: 'mem', lab: 'Make it stick', h: 'Memory hooks',
              items: [
                'Chant the う・つ・る group as one sound: “kau–katte, matsu–matte, uru–utte.” Rhythm beats charts.',
                '<b>行く “goes its own way”</b> → 行って. That one phrase locks the exception.',
                'The instant you meet a new verb, say its て-form too. 泳ぐ → 泳いで. Build the reflex, not a lookup.'
              ] },
            { t: 'try', lab: 'Your turn', h: 'Make the て-form',
              items: ['書く →', '泳ぐ →', '読む →', '買う →', 'する →'],
              note: 'Say each out loud, then tap the verbs in the examples above to check yourself.' }
          ]
        }
      },

      /* ---- Day 2 ---- */
      {
        focus: '〜てください — polite requests',
        sub: 'Ask someone to do something',
        particle: 'に',
        read: { k: 0, task: 'Listen with the text hidden, then check' },
        produce: 'Write two requests you’d really use — e.g. “please wait,” “please write it here.”',
        lesson: {
          min: 6,
          secs: [
            { t: 'p', lab: 'Today', h: 'Your first thing built on the て-form',
              body: ['Now that you can make the て-form, add one word and you can politely ask for anything. This is the everyday “please do ~.”'] },
            { t: 'pat', lab: 'The pattern', h: '〜てください',
              formula: ['て-form', '+', 'ください'],
              mean: 'A polite request or instruction — “please do ~.”',
              ex: [
                { jp: 'ちょっと待ってください。', rom: 'Chotto matte kudasai.', en: 'Please wait a moment.',
                  bd: [['ちょっと', 'a moment'], ['待って', 'wait — て-form of 待つ'], ['ください', 'please give me…']] },
                { jp: 'ここに名前を書いてください。', rom: 'Koko ni namae o kaite kudasai.', en: 'Please write your name here.',
                  bd: [['ここに', 'here (に = target point)'], ['名前を', 'name (object)'], ['書いて', 'write — 書く'], ['ください', 'please']] },
                { jp: 'もう一度言ってください。', rom: 'Mō ichido itte kudasai.', en: 'Please say it once more.',
                  bd: [['もう一度', 'once more'], ['言って', 'say — 言う'], ['ください', 'please']] }
              ],
              extra: 'Softer: <b>〜てくださいませんか</b> (“would you please…?”). Casual: drop ください — 待って！ = “Wait!” Because signs and teachers use 〜てください for instructions, it can sound a touch top-down; for a favour between equals, 〜てくれませんか is gentler (a later week).' },
            { t: 'why', lab: 'Why it works', h: '“Please give me the action”',
              body: ['ください is the polite command of <b>くださる</b>, an honorific verb meaning “to give (to me).” So 待ってください is literally “<i>give me</i> the waiting.” Every 〜てください is you politely asking for an action to be handed to you — which is why it feels courteous.'] },
            { t: 'warn', lab: 'Watch out', h: 'Common slips',
              items: [
                { x: '待ちてください', o: '待ってください', n: 'The て-form change still applies — 待つ → 待って.' },
                { x: '見てください (to a boss, bluntly)', o: '見ていただけますか', n: 'For someone above you, soften it. 〜てください is polite but still an instruction.' }
              ] },
            { t: 'mem', lab: 'Make it stick', h: 'Memory hook',
              items: ['<b>kudasai ≈ “could I, say?”</b> — a silly homophone for “please give me…”', 'It’s just [て-form] + ください. If you can make the て-form, you can already make the request.'] },
            { t: 'try', lab: 'Your turn', h: 'Ask politely',
              items: ['“Please write your name here.”', '“Please wait a moment.”', '“Please say it one more time.”'],
              note: 'Build each from the verb’s て-form + ください. Tap words above to check.' }
          ]
        }
      },

      /* ---- Day 3 ---- */
      {
        focus: '〜ています — happening now',
        sub: 'Actions in progress',
        particle: 'で',
        read: { k: 1, task: 'Read the new passage with the translation' },
        produce: 'Describe three things happening around you right now.',
        lesson: {
          min: 6,
          secs: [
            { t: 'p', lab: 'Today', h: 'Same て-form, new ending',
              body: ['Swap ください for います and you stop making requests and start describing what’s <b>happening right now</b>.'] },
            { t: 'pat', lab: 'The pattern', h: '〜ています (in progress)',
              formula: ['て-form', '+', 'います'],
              mean: 'An action in progress — “is / am ~ing.” います comes from いる, “to exist.”',
              ex: [
                { jp: '今、ごはんを食べています。', rom: 'Ima, gohan o tabete imasu.', en: 'I’m eating now.',
                  bd: [['今', 'now'], ['ごはんを', 'meal (object)'], ['食べて', 'eat — 食べる'], ['います', 'am ~ing']] },
                { jp: '雨が降っています。', rom: 'Ame ga futte imasu.', en: 'It’s raining.',
                  bd: [['雨が', 'rain (subject)'], ['降って', 'fall — 降る'], ['います', 'is ~ing']] },
                { jp: '公園で子どもが遊んでいます。', rom: 'Kōen de kodomo ga asonde imasu.', en: 'Children are playing in the park.',
                  bd: [['公園で', 'in the park (で = place of action)'], ['遊んで', 'play — 遊ぶ'], ['います', 'are ~ing']] }
              ],
              extra: 'In speech います often shrinks to <b>てる</b>: 食べてる, 降ってる. You’ll hear this constantly.' },
            { t: 'why', lab: 'Why it works', h: 'You’re standing inside the action',
              body: ['いる literally means “to exist.” So 食べています is almost “I <i>exist in the middle of</i> eating.” Picture the verb as a room you’re standing inside — that image is exactly why the same shape can also describe a lasting state (tomorrow’s lesson).'] },
            { t: 'warn', lab: 'Watch out', h: 'Not for the future',
              items: [
                { x: '明日、食べています', o: '明日、食べます', n: '“I’m eating tomorrow” is a plan — use plain 〜ます, not 〜ています.' },
                { x: '降ています', o: '降っています', n: 'Don’t skip the small っ — it’s the て-form of 降る.' }
              ] },
            { t: 'mem', lab: 'Make it stick', h: 'Memory hook',
              items: ['<b>“imasu” starts like “I’m.”</b> I’m + in the action = I’m ~ing.', 'で marks <i>where the action happens</i> (公園で遊ぶ), so it pairs naturally with 〜ています.'] },
            { t: 'try', lab: 'Your turn', h: 'What’s happening now',
              items: ['“It’s raining.”', '“I’m studying Japanese.”', '“Someone is waiting outside.”'],
              note: 'Use で for the place of the action. Tap words above to check.' }
          ]
        }
      },

      /* ---- Day 4 ---- */
      {
        focus: '〜ています — a lasting state',
        sub: 'Results that still hold',
        particle: 'が',
        read: { k: 1, task: 'Shadow the passage — say it a half-second behind the audio' },
        produce: 'Say two states that are true about you (e.g. you know someone, you wear glasses).',
        lesson: {
          min: 7,
          secs: [
            { t: 'p', lab: 'Today', h: 'The same form does a second job',
              body: ['Yesterday 〜ています meant “in progress.” Today: the <b>exact same form</b> also describes a <i>state</i> that resulted from an earlier action and still holds now. Which meaning applies depends on the verb.'] },
            { t: 'pat', lab: 'The pattern', h: '〜ています (resultant state)',
              formula: ['て-form', '+', 'います'],
              mean: 'With change-of-state verbs, 〜ています = the state that remains, not an action underway.',
              ex: [
                { jp: '田中さんを知っています。', rom: 'Tanaka-san o shitte imasu.', en: 'I know Mr. Tanaka.',
                  bd: [['知って', 'come to know — 知る'], ['います', '→ the lasting state “know”']] },
                { jp: '姉は結婚しています。', rom: 'Ane wa kekkon shite imasu.', en: 'My sister is married.',
                  bd: [['結婚して', 'get married — 結婚する'], ['います', '→ the state of being married']] },
                { jp: 'めがねをかけています。', rom: 'Megane o kakete imasu.', en: 'I wear glasses.',
                  bd: [['めがねを', 'glasses (object)'], ['かけて', 'put on — かける'], ['います', '→ the state of wearing']] }
              ],
              extra: 'Rule of thumb: “do” verbs (eat, run) → in progress. “Become / change” verbs (know, marry, stand up, wear) → a resulting state.' },
            { t: 'why', lab: 'Why it works', h: 'The action finished; the result stays',
              body: ['結婚する is a one-moment change — you don’t spend hours “marrying.” So “existing in” that verb can’t mean the act is underway; it means the <b>result</b> — being married — is still true. Same logic for 知る (come to know → know) and 立つ (stand up → be standing).'] },
            { t: 'warn', lab: 'Watch out', h: 'The famous “know” trap',
              items: [
                { x: '知っていません', o: '知りません', n: '“I don’t know” is a fixed idiom — drop the ています entirely.' },
                { x: '結婚しています = getting married now', o: '結婚しています = is married', n: 'It’s a state, not an event in progress.' }
              ] },
            { t: 'mem', lab: 'Make it stick', h: 'Memory hook',
              items: ['Ask: <b>can you do this verb for ten minutes?</b> Yes (eat) → in progress. No, it’s instant (marry, know) → a state.', 'が marks the thing whose state you’re describing — pairs naturally here (ドアが開いています = the door is open).'] },
            { t: 'try', lab: 'Your turn', h: 'Describe a state',
              items: ['“I know Mr. Satō.” (佐藤)', '“My brother is married.”', '“The window is open.” (窓 / 開く)'],
              note: 'These are states, not actions in progress. Tap words above to check.' }
          ]
        }
      },

      /* ---- Day 5 ---- */
      {
        focus: '〜ています vs 〜ます',
        sub: 'Right now vs. usually',
        particle: 'は',
        read: { k: 2, task: 'Read the third passage on your own' },
        produce: 'Write one habit (毎日…ます) and one thing happening now (…ています).',
        lesson: {
          min: 6,
          secs: [
            { t: 'p', lab: 'Today', h: 'Two presents, and when to use which',
              body: ['English hides it, but Japanese clearly splits “I eat” from “I’m eating.” Today you choose correctly on purpose.'] },
            { t: 'p', lab: 'The contrast', h: 'Habit / future vs. in progress',
              body: [
                '<b>食べます</b> — “I eat.” A habit or the future. 毎朝パンを食べます = “I eat bread every morning.”',
                '<b>食べています</b> — “I’m eating.” Right now, in progress.',
                'One tricky case: for jobs and ongoing situations, Japanese uses 〜ています where English uses the simple present — <b>銀行で働いています</b> = “I work at a bank.”'
              ] },
            { t: 'why', lab: 'Why it works', h: 'は sets the frame',
              body: ['は marks the <b>topic</b> — the frame you’re talking about. 私は毎日走ります frames a habit; 私は今走っています frames this moment. Same verb, different time-frame set by the surrounding words, so the ending has to match.'] },
            { t: 'warn', lab: 'Watch out', h: 'Don’t default to ています',
              items: [
                { x: '毎日、勉強しています (for “I study daily”)', o: '毎日、勉強します', n: 'A pure habit takes plain 〜ます. Use 〜ています for right-now or an ongoing situation.' }
              ] },
            { t: 'mem', lab: 'Make it stick', h: 'Memory hook',
              items: ['Ask: <b>is it true at this exact second, or in general?</b> This second → ています. In general → ます.', 'Time words tip you off: 今 (now) → ています; 毎日 (every day) → ます.'] },
            { t: 'try', lab: 'Your turn', h: 'Pick the right one',
              items: ['“I drink coffee every morning.”', '“I’m drinking coffee right now.”', '“I work at a hospital.” (病院)'],
              note: 'Match the ending to the time-frame. Tap words above to check.' }
          ]
        }
      },

      /* ---- Day 6 ---- */
      {
        focus: 'Negatives & casual forms',
        sub: '〜ていません・〜てる・〜ないでください',
        particle: 'も',
        read: { k: 2, task: 'Dictation — listen and write the passage, then compare' },
        produce: 'Write one “please don’t …” and one “I’m not …ing right now.”',
        lesson: {
          min: 7,
          secs: [
            { t: 'p', lab: 'Today', h: 'Flip the week’s patterns to the negative',
              body: ['You can already make requests and “-ing.” Now make their negatives and hear how they sound casually.'] },
            { t: 'pat', lab: 'The patterns', h: 'Three you’ll use daily',
              formula: ['て-form', '+', 'いません / ない / ないでください'],
              mean: 'Negatives of this week’s grammar, plus the casual voice.',
              ex: [
                { jp: 'まだ食べていません。', rom: 'Mada tabete imasen.', en: 'I haven’t eaten yet.',
                  bd: [['まだ', 'still / (not) yet'], ['食べて', 'eat — 食べる'], ['いません', 'am not ~ing / haven’t']] },
                { jp: '今は何もしていない。', rom: 'Ima wa nani mo shite inai.', en: 'I’m not doing anything now. (casual)',
                  bd: [['何も', 'nothing (も = not even)'], ['して', 'do — する'], ['いない', 'casual of いません']] },
                { jp: 'ここで写真を撮らないでください。', rom: 'Koko de shashin o toranaide kudasai.', en: 'Please don’t take photos here.',
                  bd: [['撮らないで', 'don’t take — 撮る'], ['ください', 'please']] }
              ],
              extra: 'Casual swaps: います→いる, いません→いない, 〜ています→〜てる, 〜ていない→〜てない. 食べてない = “not eating / haven’t eaten.”' },
            { t: 'why', lab: 'Why it works', h: 'You only negate the ending',
              body: ['The て-form never changes — you just negate what’s attached. います→いません, くださる→ないでください. Learn the pattern once and it applies to every verb.'] },
            { t: 'warn', lab: 'Watch out', h: 'Two easy mix-ups',
              items: [
                { x: '知っていません', o: '知りません', n: 'Still the idiom — “I don’t know” drops ています.' },
                { x: '食べないでます', o: '食べていません', n: 'To say “not ~ing,” negate います (→いません), don’t bolt ない onto ます.' }
              ] },
            { t: 'mem', lab: 'Make it stick', h: 'Memory hook',
              items: ['<b>〜ないでください = “please, without doing.”</b> The ないで is “without ~ing.”', 'Casual = shave the syllable: います→る, いません→ない. 待ってる, 待ってない.'] },
            { t: 'try', lab: 'Your turn', h: 'Go negative',
              items: ['“Please don’t open the window.” (窓)', '“I haven’t eaten yet.”', '“I’m not working today.” (casual)'],
              note: 'Negate the ending, keep the て-form. Tap words above to check.' }
          ]
        }
      },

      /* ---- Day 7 ---- */
      {
        focus: 'Review & put it together',
        sub: 'From て-form to full sentences',
        particle: 'よ',
        read: { k: 0, task: 'Re-read any passage and say a one-line summary aloud' },
        produce: 'Write a 3-sentence self-intro: a request, something you’re doing, and a state about you.',
        lesson: {
          min: 7,
          secs: [
            { t: 'p', lab: 'The week in one look', h: 'Everything grew from the て-form',
              body: [
                'Day 1 you built the <b>て-form</b>. Then you bolted endings on: <b>〜てください</b> (please do ~), <b>〜ています</b> for an action <i>in progress</i>, and the same 〜ています for a lasting <i>state</i>. Day 5 you chose <b>〜ています vs 〜ます</b>, and Day 6 you made them <b>negative and casual</b>.',
                'That’s the whole engine: one shape, several endings. Today you snap the pieces together.'
              ] },
            { t: 'pat', lab: 'One recap', h: 'The four moves side by side',
              formula: ['て-form', '+', '4 endings'],
              mean: 'Same verb (する), four different jobs:',
              ex: [
                { jp: '手伝ってください。', rom: 'Tetsudatte kudasai.', en: 'Please help. (request)',
                  bd: [['手伝って', 'help — 手伝う'], ['ください', 'please']] },
                { jp: '今、勉強しています。', rom: 'Ima, benkyō shite imasu.', en: 'I’m studying now. (in progress)',
                  bd: [['勉強して', 'study — 勉強する'], ['います', 'am ~ing']] },
                { jp: '東京に住んでいます。', rom: 'Tōkyō ni sunde imasu.', en: 'I live in Tokyo. (state)',
                  bd: [['住んで', 'live — 住む'], ['います', '→ the state of living there']] }
              ] },
            { t: 'warn', lab: 'Last check', h: 'The three mistakes to have beaten',
              items: [
                { x: '待ちて / 行いて', o: '待って / 行って', n: 'て-form sound changes, and the 行く exception.' },
                { x: '明日食べています', o: '明日食べます', n: '〜ています isn’t the future.' },
                { x: '知っていません', o: '知りません', n: 'The “don’t know” idiom.' }
              ] },
            { t: 'mem', lab: 'Carry it forward', h: 'What to keep',
              items: ['If you can make the <b>て-form</b> on reflex, next week’s grammar (permission, prohibition) also just clicks onto it.', 'Keep pairing every new verb with its て-form the moment you meet it.'] },
            { t: 'try', lab: 'Free production', h: 'Put it together',
              items: [
                'Ask a waiter for water. (お水 / please)',
                'Say what you’re doing this weekend that’s already underway.',
                'Describe one lasting state about your family (married / lives somewhere / knows someone).'
              ],
              note: 'Say all three aloud, then write them. Use よ when you’re telling the listener something new.' }
          ]
        }
      }

    ]
  };

  /* ===================== WEEK 1 — て-form formation ===================== */
  U[1] = {
    title: 'The て-form, built',
    days: [
      {
        focus: 'The て-form & る-verbs',
        sub: 'The easiest group first',
        particle: 'は',
        read: { k: 0, task: 'Read the passage with the translation open' },
        produce: 'Make the て-form: 食べる・見る・寝る・起きる・教える.',
        lesson: { min: 5, secs: [
          { t: 'p', lab: 'This week', h: 'One shape, learned group by group',
            body: ['This whole unit builds a single thing — the <b>て-form</b> — one verb group per day. Nail it and every later pattern (requests, “-ing,” permission, past) just clicks onto it.', 'Start with the easy group: <b>る-verbs</b>.'] },
          { t: 'pat', lab: 'The rule', h: 'る-verbs: drop る, add て', formula: ['stem', '+', 'て'], mean: 'For る-verbs (ichidan), just replace る with て — no sound changes.',
            ex: [
              { jp: 'ごはんを食べて。', rom: 'Gohan o tabete.', en: 'Eat. (casual)', bd: [['食べて', 'eat — 食べる → 食べて']] },
              { jp: 'ここを見てください。', rom: 'Koko o mite kudasai.', en: 'Please look here.', bd: [['見て', 'look — 見る → 見て'], ['ください', 'please']] }
            ] },
          { t: 'p', lab: 'Spot them', h: 'Which verbs are る-verbs?',
            body: ['Most verbs ending in <b>-eru</b> or <b>-iru</b> are る-verbs: 食べる (tab<b>e</b>ru), 見る (m<b>i</b>ru), 寝る, 起きる, 教える. A few look like る-verbs but aren’t — 帰る (kaeru), 入る (hairu) — you’ll meet those tomorrow.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook',
            items: ['る-verbs are the well-behaved group: <b>drop る, add て</b>, nothing else moves.'] },
          { t: 'try', lab: 'Your turn', h: 'Make the て-form', items: ['食べる →', '見る →', '寝る →', '起きる →', '教える →'], note: 'All る-verbs — just swap る for て. Tap words above to check.' }
        ] }
      },
      {
        focus: 'う・つ・る → って',
        sub: 'The first u-verb group',
        particle: 'を',
        read: { k: 0, task: 'Listen with the text hidden, then check' },
        produce: 'Make the て-form: 買う・待つ・作る・帰る・取る.',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'Today', h: 'Now the u-verbs begin',
            body: ['u-verbs (godan) change their final sound before て. Today’s group: verbs ending in <b>う・つ・る</b> all become <b>って</b>.'] },
          { t: 'pat', lab: 'The rule', h: 'う・つ・る → って', formula: ['〜う / つ / る', '→', 'って'], mean: 'A small っ, then て.',
            ex: [
              { jp: '切符を買って。', rom: 'Kippu o katte.', en: 'Buy a ticket.', bd: [['買って', 'buy — 買う → 買って']] },
              { jp: 'ちょっと待って。', rom: 'Chotto matte.', en: 'Wait a sec.', bd: [['待って', 'wait — 待つ → 待って']] },
              { jp: '家に帰って、休みます。', rom: 'Ie ni kaette, yasumimasu.', en: 'I’ll go home and rest.', bd: [['帰って', 'go home — 帰る → 帰って'], ['に', 'to (target)']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'って simply flows faster',
            body: ['買いて (ka-i-te) is clumsy; <b>買って</b> (kat-te) snaps out. The small っ is your mouth taking the shortest path — and every う/つ/る verb does the same.'] },
          { t: 'warn', lab: 'Watch out', h: 'The fake る-verbs live here',
            items: [{ x: '帰て', o: '帰って', n: '帰る looks like a る-verb but is a u-verb, so it takes って.' }] },
          { t: 'try', lab: 'Your turn', h: 'Make the て-form', items: ['買う →', '待つ →', '作る →', '帰る →', '取る →'], note: 'All → って. Tap words above to check.' }
        ] }
      },
      {
        focus: 'む・ぶ・ぬ → んで',
        sub: 'The voiced u-verb group',
        particle: 'に',
        read: { k: 1, task: 'Read the new passage with the translation' },
        produce: 'Make the て-form: 飲む・読む・遊ぶ・呼ぶ・死ぬ.',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'Today', h: 'The nasal group',
            body: ['Verbs ending in <b>む・ぶ・ぬ</b> all become <b>んで</b> — a nasal ん, then a voiced で.'] },
          { t: 'pat', lab: 'The rule', h: 'む・ぶ・ぬ → んで', formula: ['〜む / ぶ / ぬ', '→', 'んで'],
            mean: 'ん + で (voiced, because ん makes the て voice up).',
            ex: [
              { jp: 'お茶を飲んで。', rom: 'Ocha o nonde.', en: 'Drink some tea.', bd: [['飲んで', 'drink — 飲む → 飲んで']] },
              { jp: '本を読んでいます。', rom: 'Hon o yonde imasu.', en: 'I’m reading a book.', bd: [['読んで', 'read — 読む → 読んで'], ['います', '~ing']] },
              { jp: '公園で遊んで。', rom: 'Kōen de asonde.', en: 'Play in the park.', bd: [['遊んで', 'play — 遊ぶ → 遊んで'], ['で', 'place of action']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'ん drags the sound into で',
            body: ['Once your mouth makes the nasal <b>ん</b>, an unvoiced て is awkward — it naturally voices to <b>で</b>. That’s why this whole group ends in んで, never んて.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>む・ぶ・ぬ → hum (ん) then で.</b> Hum into the ん and で falls out.'] },
          { t: 'try', lab: 'Your turn', h: 'Make the て-form', items: ['飲む →', '読む →', '遊ぶ →', '呼ぶ →', '死ぬ →'], note: 'All → んで. Tap words above to check.' }
        ] }
      },
      {
        focus: 'く → いて, ぐ → いで (and 行く!)',
        sub: 'The k/g group and its rebel',
        particle: 'で',
        read: { k: 1, task: 'Shadow the passage — a half-second behind' },
        produce: 'Make the て-form: 書く・聞く・泳ぐ・急ぐ・行く.',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'Today', h: 'The く and ぐ verbs',
            body: ['く softens to <b>いて</b>; its voiced twin ぐ becomes <b>いで</b>. One verb breaks the rule — and it’s a verb you’ll use constantly.'] },
          { t: 'pat', lab: 'The rule', h: 'く → いて · ぐ → いで', formula: ['〜く / ぐ', '→', 'いて / いで'], mean: 'The k/g melts into a long い before て/で.',
            ex: [
              { jp: '名前を書いて。', rom: 'Namae o kaite.', en: 'Write your name.', bd: [['書いて', 'write — 書く → 書いて']] },
              { jp: '音楽を聞いています。', rom: 'Ongaku o kiite imasu.', en: 'I’m listening to music.', bd: [['聞いて', 'listen — 聞く → 聞いて']] },
              { jp: 'プールで泳いで。', rom: 'Pūru de oyoide.', en: 'Swim in the pool.', bd: [['泳いで', 'swim — 泳ぐ → 泳いで'], ['で', 'place of action']] }
            ] },
          { t: 'warn', lab: 'The one exception', h: '行く breaks the く rule',
            items: [{ x: '行いて', o: '行って', n: '行く should be 行いて by the rule — but it’s the famous exception: 行く → 行って.' }] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>行く “goes its own way”</b> → 行って. Everything else with く behaves: 書く→書いて.'] },
          { t: 'try', lab: 'Your turn', h: 'Make the て-form', items: ['書く →', '聞く →', '泳ぐ →', '急ぐ →', '行く →'], note: 'Watch 行く! Tap words above to check.' }
        ] }
      },
      {
        focus: 'す → して & the irregulars',
        sub: 'The last group + する / 来る',
        particle: 'と',
        read: { k: 2, task: 'Read the third passage on your own' },
        produce: 'Make the て-form: 話す・貸す・する・勉強する・来る.',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'Today', h: 'The final group, then the only irregulars',
            body: ['One clean group left — <b>す → して</b> — plus the only two verbs you simply memorise: <b>する</b> and <b>来る</b>.'] },
          { t: 'pat', lab: 'The rule', h: 'す → して', formula: ['〜す', '→', 'して'], mean: 'The gentlest change — す just adds て.',
            ex: [
              { jp: 'ゆっくり話して。', rom: 'Yukkuri hanashite.', en: 'Speak slowly.', bd: [['話して', 'speak — 話す → 話して']] },
              { jp: 'ペンを貸してください。', rom: 'Pen o kashite kudasai.', en: 'Please lend me a pen.', bd: [['貸して', 'lend — 貸す → 貸して'], ['ください', 'please']] }
            ] },
          { t: 'pat', lab: 'The two irregulars', h: 'する → して · 来る → 来て', formula: ['する / 来る', '→', 'して / 来て'], mean: 'Just memorise these two — every compound する verb follows.',
            ex: [
              { jp: '勉強して、寝ます。', rom: 'Benkyō shite, nemasu.', en: 'I’ll study and sleep.', bd: [['勉強して', 'study — 勉強する → 勉強して']] },
              { jp: '早く来て。', rom: 'Hayaku kite.', en: 'Come quickly.', bd: [['来て', 'come — 来る → 来て (kite)']] }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['Every 〜する word (勉強する, 電話する, 運動する) just becomes 〜して. Learn one, get hundreds.', '来る is read <b>きて</b> in the て-form, not くて.'] },
          { t: 'try', lab: 'Your turn', h: 'Make the て-form', items: ['話す →', '貸す →', 'する →', '勉強する →', '来る →'], note: 'Tap words above to check.' }
        ] }
      },
      {
        focus: 'Chaining actions with て',
        sub: 'The て-form’s original job: “and then”',
        particle: 'から',
        read: { k: 2, task: 'Dictation — listen and write it, then compare' },
        produce: 'Write one sentence linking two actions with て (e.g. “I get up and wash my face”).',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'Today', h: 'Why it’s called the “連用” connector',
            body: ['Before all the endings, the て-form’s core job is to <b>join actions in sequence</b> — “do X, and then Y.” This is where the shape you drilled all week pays off in real sentences.'] },
          { t: 'pat', lab: 'The pattern', h: '〜て、〜 — do X and then Y', formula: ['action 1 (て)', '+', 'action 2'], mean: 'String actions in order; only the final verb carries tense and politeness.',
            ex: [
              { jp: '朝起きて、顔を洗います。', rom: 'Asa okite, kao o araimasu.', en: 'I get up in the morning and wash my face.', bd: [['起きて', 'get up — 起きる'], ['洗います', 'wash (sets the tense)']] },
              { jp: '手を洗って、食べます。', rom: 'Te o aratte, tabemasu.', en: 'I wash my hands and eat.', bd: [['洗って', 'wash — 洗う'], ['食べます', 'eat']] },
              { jp: '東京へ行って、友だちに会いました。', rom: 'Tōkyō e itte, tomodachi ni aimashita.', en: 'I went to Tokyo and met a friend.', bd: [['行って', 'go — 行く'], ['会いました', 'met (past — sets both)']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'Only the last verb is tensed',
            body: ['The て-form itself has <b>no tense</b>. 起きて…洗いました means both are past, because the final 洗いました carries it. That’s why one clean form can chain any number of actions.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>て = a comma that means “and then.”</b> Set the tense once, at the very end.'] },
          { t: 'try', lab: 'Your turn', h: 'Link two actions', items: ['“I get up and eat breakfast.”', '“I wash my hands and cook.”', '“I went home and slept.” (past)'], note: 'Only the last verb takes the tense. Tap words above to check.' }
        ] }
      },
      {
        focus: 'Review — any verb, instantly',
        sub: 'The whole map in one place',
        particle: 'ね',
        read: { k: 0, task: 'Re-read any passage and say a one-line summary aloud' },
        produce: 'Pick 5 new verbs, say each て-form aloud, then chain two of them with て.',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'The week in one look', h: 'You can now build any て-form',
            body: ['る drop → て; う・つ・る → って; む・ぶ・ぬ → んで; く → いて / ぐ → いで; す → して; する・来る are the two irregulars — and 行く → 行って is the one rebel.'] },
          { t: 'tf', lab: 'The full table', h: 'All groups at a glance', rows: TEFORM_ROWS,
            note: 'Read the whole table aloud once as a rhythm. That “song” is what makes it automatic.' },
          { t: 'warn', lab: 'Last check', h: 'The three classic slips',
            items: [
              { x: '待ちて', o: '待って', n: 'つ-verbs → って.' },
              { x: '行いて', o: '行って', n: 'The 行く exception.' },
              { x: 'するて / 来て (kute)', o: 'して / 来て (kite)', n: 'The two irregulars — memorised, not derived.' }
            ] },
          { t: 'try', lab: 'Your turn', h: 'Mixed drill', items: ['書く →', '飲む →', '帰る →', '泳ぐ →', 'then chain two: “___て、___。”'], note: 'Mix the groups. Tap words above to check.' }
        ] }
      }
    ]
  };

  /* ===================== WEEK 3 — Permission & prohibition ===================== */
  U[3] = {
    title: 'Permission & prohibition',
    days: [
      {
        focus: '〜てもいいですか — “May I?”',
        sub: 'Ask permission',
        particle: 'か',
        read: { k: 0, task: 'Read the passage with the translation open' },
        produce: 'Ask permission for two things (sit here, open the window).',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'This week', h: 'Your て-form now asks and forbids',
            body: ['This unit is all built on the て-form you drilled. Add a few words and you can ask permission, grant it, and say what’s not allowed. Start with asking.'] },
          { t: 'pat', lab: 'The pattern', h: '〜てもいいですか', formula: ['て-form', '+', 'もいいですか'], mean: '“Is it okay if I ~?” — a polite request for permission.',
            ex: [
              { jp: 'ここに座ってもいいですか。', rom: 'Koko ni suwatte mo ii desu ka.', en: 'May I sit here?', bd: [['座って', 'sit — 座る'], ['もいいですか', 'is it okay if…?']] },
              { jp: '窓を開けてもいいですか。', rom: 'Mado o akete mo ii desu ka.', en: 'May I open the window?', bd: [['開けて', 'open — 開ける'], ['か', 'question']] },
              { jp: '写真を撮ってもいいですか。', rom: 'Shashin o totte mo ii desu ka.', en: 'May I take a photo?', bd: [['撮って', 'take — 撮る']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'Literally “even if I do it, is it good?”',
            body: ['<b>〜てもいい</b> breaks down as て (do) + も (“even if”) + いい (“good”). So you’re asking “even if I do X, is that fine?” — a soft, polite way to seek an okay.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>“temo ii” = even-if-I-do, it’s good.</b> Add か to turn it into “may I?”'] },
          { t: 'try', lab: 'Your turn', h: 'Ask permission', items: ['“May I sit here?”', '“May I open the window?”', '“May I take a photo?”'], note: 'て-form + もいいですか. Tap words above to check.' }
        ] }
      },
      {
        focus: '〜てもいいです — granting it',
        sub: 'Say “you may”',
        particle: 'も',
        read: { k: 0, task: 'Listen with the text hidden, then check' },
        produce: 'Grant permission for two requests, once politely and once casually.',
        lesson: { min: 5, secs: [
          { t: 'p', lab: 'Today', h: 'The other side of the exchange',
            body: ['Drop the か and the same phrase <b>gives</b> permission instead of asking for it.'] },
          { t: 'pat', lab: 'The pattern', h: '〜てもいいです', formula: ['て-form', '+', 'もいいです'], mean: '“You may ~ / it’s fine to ~.”',
            ex: [
              { jp: 'はい、座ってもいいです。', rom: 'Hai, suwatte mo ii desu.', en: 'Yes, you may sit.', bd: [['座って', 'sit — 座る'], ['もいいです', 'it’s fine to…']] },
              { jp: 'ここで食べてもいいですよ。', rom: 'Koko de tabete mo ii desu yo.', en: 'You can eat here, you know.', bd: [['食べて', 'eat — 食べる'], ['よ', 'telling you']] },
              { jp: 'もう帰ってもいい。', rom: 'Mō kaette mo ii.', en: 'You can go home now. (casual)', bd: [['帰って', 'go home — 帰る']] }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['Same phrase, no か = <b>granting</b>, not asking. Add よ to sound warm and reassuring.'] },
          { t: 'try', lab: 'Your turn', h: 'Grant it', items: ['“Yes, you may open the window.”', '“You can take photos here.”', '“You can go home now.” (casual)'], note: 'Tap words above to check.' }
        ] }
      },
      {
        focus: '〜てはいけません — must not',
        sub: 'State what’s forbidden',
        particle: 'は',
        read: { k: 1, task: 'Read the new passage with the translation' },
        produce: 'Write two prohibitions (no smoking here, no entering).',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'Today', h: 'The flip side: “not allowed”',
            body: ['Same て-form, a different tail, and now you’re drawing a hard line: <b>you must not</b>.'] },
          { t: 'pat', lab: 'The pattern', h: '〜てはいけません', formula: ['て-form', '+', 'はいけません'], mean: '“Must not ~ / it’s not allowed.”',
            ex: [
              { jp: 'ここでたばこを吸ってはいけません。', rom: 'Koko de tabako o sutte wa ikemasen.', en: 'You must not smoke here.', bd: [['吸って', 'smoke — 吸う'], ['はいけません', 'must not']] },
              { jp: '中に入ってはいけません。', rom: 'Naka ni haitte wa ikemasen.', en: 'You must not go inside.', bd: [['入って', 'enter — 入る']] },
              { jp: 'ここで写真を撮ってはいけません。', rom: 'Koko de shashin o totte wa ikemasen.', en: 'Photos are not allowed here.', bd: [['撮って', 'take — 撮る']] }
            ] },
          { t: 'why', lab: 'Why it works', h: '“As for doing it — it won’t do”',
            body: ['<b>〜てはいけない</b> is て + は (“as for…”) + いけない (“it won’t go / no good”). So “as for doing X, that won’t do” → you must not. In speech people often shrink ては to <b>ちゃ</b> (tomorrow).'] },
          { t: 'warn', lab: 'Register', h: 'いけません is firm',
            items: [{ x: '(to a friend) 吸ってはいけません', o: '吸っちゃだめ', n: '〜てはいけません sounds like an official rule. With friends, use the casual だめ form.' }] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>“te wa ikemasen” = doing-it won’t go.</b> It’s the sign-language of Japan: 〜てはいけません = the rule.'] },
          { t: 'try', lab: 'Your turn', h: 'Forbid it', items: ['“You must not smoke here.”', '“You must not enter.”', '“Photos are not allowed.”'], note: 'て-form + はいけません. Tap words above to check.' }
        ] }
      },
      {
        focus: 'Casual prohibition & 〜ないでください',
        sub: 'Match the register to the listener',
        particle: 'を',
        read: { k: 1, task: 'Shadow the passage — a half-second behind' },
        produce: 'Tell a friend “don’t do X” casually, and a stranger the polite way.',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'Today', h: 'Same meaning, three registers',
            body: ['“Don’t” changes shape with who you’re talking to: casual, blunt, or polite-request.'] },
          { t: 'pat', lab: 'The patterns', h: 'だめ · ちゃだめ · 〜ないでください', formula: ['〜ては', '→', 'ちゃ (casual)'], mean: 'From firmest rule to gentlest request:',
            ex: [
              { jp: 'ここに入っちゃだめ。', rom: 'Koko ni haiccha dame.', en: 'You can’t go in here. (casual)', bd: [['入っちゃ', '入っては → 入っちゃ'], ['だめ', 'no good']] },
              { jp: 'まだ見てはだめだよ。', rom: 'Mada mite wa dame da yo.', en: 'Don’t look yet!', bd: [['見て', 'look — 見る'], ['だめ', 'no good']] },
              { jp: 'ここで写真を撮らないでください。', rom: 'Koko de shashin o toranaide kudasai.', en: 'Please don’t take photos here.', bd: [['撮らないで', 'don’t take — 撮る'], ['ください', 'please']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'ちゃ is just ては, said fast',
            body: ['<b>ては → ちゃ</b> (and では → じゃ) is a casual contraction. 食べては → 食べちゃ, 飲んでは → 飲んじゃ. It only changes the sound, not the meaning.'] },
          { t: 'warn', lab: 'Watch out', h: 'Don’t bark at strangers',
            items: [{ x: '(to a stranger) 入っちゃだめ', o: '入らないでください', n: 'だめ is for friends/kids. For strangers, the polite 〜ないでください is safer.' }] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>ちゃ = ては in a hurry.</b> だめ = “no good.” 〜ないでください = “please, without doing.”'] },
          { t: 'try', lab: 'Your turn', h: 'Say “don’t”', items: ['“Don’t go in.” (casual)', '“Don’t look yet!”', '“Please don’t open the window.” (polite)'], note: 'Pick the register for your listener. Tap words above to check.' }
        ] }
      },
      {
        focus: '〜なくてもいいです — don’t have to',
        sub: 'The relief form',
        particle: 'に',
        read: { k: 2, task: 'Read the third passage on your own' },
        produce: 'Say two things you don’t have to do today.',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'Today', h: 'Permission’s cousin: “no need”',
            body: ['Not everything is “may” or “must not.” Often the answer is <b>you don’t have to</b> — and that’s built from the negative, not the て-form.'] },
          { t: 'pat', lab: 'The pattern', h: '〜なくてもいいです', formula: ['〜ない → 〜なくても', '+', 'いいです'], mean: '“You don’t have to ~ / no need to ~.”',
            ex: [
              { jp: '今日は来なくてもいいです。', rom: 'Kyō wa konakute mo ii desu.', en: 'You don’t have to come today.', bd: [['来なくても', 'even if you don’t come — 来る→来ない'], ['いいです', 'it’s fine']] },
              { jp: '予約しなくてもいいです。', rom: 'Yoyaku shinakute mo ii desu.', en: 'You don’t need to make a reservation.', bd: [['しなくても', 'even if you don’t do — する→しない']] },
              { jp: '全部食べなくてもいいですよ。', rom: 'Zenbu tabenakute mo ii desu yo.', en: 'You don’t have to eat it all.', bd: [['食べなくても', '食べる→食べない→食べなくても']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'Build it from 〜ない',
            body: ['Make the plain negative (来ない), swap the final <b>い</b> for <b>くても</b> (来なくても = “even if not coming”), then add いい. “Even if you don’t, it’s fine” → you don’t have to.'] },
          { t: 'warn', lab: 'Watch out', h: 'It’s なくても, not ないでも',
            items: [{ x: '来ないでもいい', o: '来なくてもいい', n: 'Turn 〜ない into 〜なくて (drop い, add くて) before adable もいい.' }] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>nakute mo ii = even-if-not-doing, fine.</b> The mirror of てもいい (“even-if-doing, fine”).'] },
          { t: 'try', lab: 'Your turn', h: 'Give relief', items: ['“You don’t have to come today.”', '“You don’t need to book.”', '“You don’t have to finish it.”'], note: 'From 〜ない → 〜なくてもいい. Tap words above to check.' }
        ] }
      },
      {
        focus: 'Signs & rules in the wild',
        sub: 'Read and state real rules',
        particle: 'で',
        read: { k: 2, task: 'Dictation — listen and write it, then compare' },
        produce: 'Write a short rule sign mixing permission and prohibition.',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'Today', h: 'Put the week to work',
            body: ['You now have four moves — may I, you may, must not, don’t have to. Real signs and situations mix them.'] },
          { t: 'pat', lab: 'In context', h: 'One notice, several rules', formula: ['permission', '+', 'prohibition'], mean: 'How they appear together on signs and in speech:',
            ex: [
              { jp: '館内で飲食してはいけません。', rom: 'Kannai de inshoku shite wa ikemasen.', en: 'No eating or drinking inside.', bd: [['飲食して', 'eat/drink — 飲食する'], ['で', 'place of action']] },
              { jp: '写真は撮ってもいいです。', rom: 'Shashin wa totte mo ii desu.', en: 'Photos are allowed.', bd: [['撮って', 'take — 撮る'], ['は', 'as for (contrast)']] },
              { jp: '靴を脱がなくてもいいです。', rom: 'Kutsu o nuganakute mo ii desu.', en: 'You don’t have to take off your shoes.', bd: [['脱がなくても', 'not take off — 脱ぐ→脱がない']] }
            ] },
          { t: 'p', lab: 'Sign vocabulary', h: 'Two words you’ll see everywhere',
            body: ['<b>〜禁止 (kinshi)</b> = “~ prohibited” (立入禁止 = no entry). <b>ご遠慮ください (goenryo kudasai)</b> = “please refrain from ~” — a very polite prohibition.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['On a sign, 〜てはいけません and 〜禁止 mean the same “no.” もいい = the green light.'] },
          { t: 'try', lab: 'Your turn', h: 'State the rules', items: ['“No eating inside.”', '“Photos are okay.”', '“You don’t have to remove your shoes.”'], note: 'Mix permission + prohibition. Tap words above to check.' }
        ] }
      },
      {
        focus: 'Review — permission & prohibition',
        sub: 'Ask, grant, forbid, excuse',
        particle: 'よ',
        read: { k: 0, task: 'Re-read any passage and say a one-line summary aloud' },
        produce: 'Roleplay: ask to do two things, grant one, and forbid one.',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'The week in one look', h: 'Four moves from one て-form',
            body: ['<b>〜てもいいですか</b> (may I?) · <b>〜てもいいです</b> (you may) · <b>〜てはいけません</b> (must not) · <b>〜なくてもいいです</b> (don’t have to). Three are built on the て-form; the last on 〜ない.'] },
          { t: 'pat', lab: 'Side by side', h: 'The same verb, four answers', formula: ['入る', '→', '4 answers'], mean: 'Using 入る (enter):',
            ex: [
              { jp: '入ってもいいですか。', rom: 'Haitte mo ii desu ka.', en: 'May I go in?', bd: [['入って', '入る'], ['か', '?']] },
              { jp: '入ってはいけません。', rom: 'Haitte wa ikemasen.', en: 'You must not go in.', bd: [['はいけません', 'must not']] },
              { jp: '入らなくてもいいです。', rom: 'Hairanakute mo ii desu.', en: 'You don’t have to go in.', bd: [['入らなくても', '入る→入らない→入らなくても']] }
            ] },
          { t: 'warn', lab: 'Last check', h: 'The three slips to have beaten',
            items: [
              { x: '(to a stranger) 入っちゃだめ', o: '入らないでください', n: 'Match the register to your listener.' },
              { x: '来ないでもいい', o: '来なくてもいい', n: '〜ない → 〜なくて before もいい.' },
              { x: '吸ってはいい', o: '吸ってもいい', n: 'Permission is 〜てもいい; prohibition is 〜てはいけない. Keep も vs は straight.' }
            ] },
          { t: 'try', lab: 'Your turn', h: 'Roleplay', items: ['Ask to sit and to take a photo.', 'Grant one of them.', 'Forbid smoking, and excuse someone from a chore.'], note: 'Use よ when you’re reassuring the listener. Tap words above to check.' }
        ] }
      }
    ]
  };

  /* ===================== WEEK 4 — Plain present (casual) ===================== */
  U[4] = {
    title: 'Plain / casual form',
    days: [
      {
        focus: 'Dictionary form & the 3 groups',
        sub: 'The base every casual form grows from',
        particle: 'は',
        read: { k: 0, task: 'Read the passage with the translation open' },
        produce: 'Give the dictionary form of: 食べます・飲みます・行きます・します・来ます.',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'This week', h: 'Meet the casual register',
            body: ['Everything so far has been polite (〜ます/です). This week you learn <b>plain form</b> — how Japanese sounds with friends and family, and the base form you need inside longer sentences.', 'It all starts from the <b>dictionary form</b>.'] },
          { t: 'pat', lab: 'The three groups', h: 'From 〜ます to dictionary form', formula: ['〜ます', '→', 'dictionary'], mean: 'Turn the polite 〜ます back into the plain base:',
            ex: [
              { jp: '食べます → 食べる', rom: 'tabemasu → taberu', en: 'る-verb: 〜ます → る', bd: [['食べる', 'eat (dictionary form)']] },
              { jp: '飲みます → 飲む', rom: 'nomimasu → nomu', en: 'u-verb: the i-row → u-row', bd: [['飲む', 'drink'], ['み→む', 'i-row → u-row']] },
              { jp: 'します → する · 来ます → 来る', rom: 'shimasu → suru · kimasu → kuru', en: 'the two irregulars', bd: [['する', 'do'], ['来る', 'come (kuru)']] }
            ] },
          { t: 'p', lab: 'The trick', h: 'For u-verbs, slide the i-row to the u-row',
            body: ['書き<b>ます</b> → 書<b>く</b>, 話し<b>ます</b> → 話<b>す</b>, 待ち<b>ます</b> → 待<b>つ</b>. The syllable before ます moves from the い-row to the う-row. る-verbs just swap ます for る.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['Dictionary form is the “headword” — it’s how verbs are listed and the base for 〜ない, 〜と, 〜つもり and much of what’s coming.'] },
          { t: 'try', lab: 'Your turn', h: 'To dictionary form', items: ['食べます →', '飲みます →', '行きます →', 'します →', '来ます →'], note: 'Tap words above to check.' }
        ] }
      },
      {
        focus: 'When to use plain form',
        sub: 'Friends, family, and inside clauses',
        particle: 'と',
        read: { k: 0, task: 'Listen with the text hidden, then check' },
        produce: 'Rewrite two polite sentences as casual to a friend.',
        lesson: { min: 5, secs: [
          { t: 'p', lab: 'Today', h: 'Two jobs for plain form',
            body: ['Plain form does two things: it’s the <b>casual register</b> for people you’re close to, and it’s the <b>required base</b> inside bigger sentences (before と, から, ので, 〜と思う), no matter how polite the whole sentence is.'] },
          { t: 'pat', lab: 'Casual speech', h: 'How friends actually talk', formula: ['drop', '〜ます/です'], mean: 'Same meaning, relaxed:',
            ex: [
              { jp: '何する？', rom: 'Nani suru?', en: 'What are you doing / gonna do?', bd: [['する', 'do (plain)']] },
              { jp: 'コーヒー飲む？', rom: 'Kōhī nomu?', en: 'Want some coffee?', bd: [['飲む', 'drink (plain)']] },
              { jp: 'うん、行く。', rom: 'Un, iku.', en: 'Yeah, I’ll go.', bd: [['行く', 'go (plain)'], ['うん', 'casual “yes”']] }
            ] },
          { t: 'why', lab: 'Why it matters', h: 'Plain form hides inside polite sentences',
            body: ['Even when you speak politely, the verb before <b>と</b> (“that”) is plain: 行く<b>と思います</b> (“I think I’ll go”). So you can’t avoid plain form — it’s structural, not just casual.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['Plain = <b>inner circle + inner clauses.</b> Casual with friends, and the base the grammar bolts onto.'] },
          { t: 'try', lab: 'Your turn', h: 'Make it casual', items: ['“Do you want to eat?” → casual', '“I’ll go home.” → casual', '“What are you drinking?” → casual'], note: 'Drop the 〜ます. Tap words above to check.' }
        ] }
      },
      {
        focus: 'Plain negative 〜ない',
        sub: 'Casual “don’t / not”',
        particle: 'を',
        read: { k: 1, task: 'Read the new passage with the translation' },
        produce: 'Say three things you don’t do, casually.',
        lesson: { min: 7, secs: [
          { t: 'p', lab: 'Today', h: 'The casual negative',
            body: ['The plain negative <b>〜ない</b> is the casual “don’t,” and also the base for 〜なくてもいい, 〜ないで and more. Formation has one trap.'] },
          { t: 'pat', lab: 'The rule', h: 'Build 〜ない by group', formula: ['dictionary', '→', '〜ない'], mean: 'る-verbs drop る; u-verbs move the u-row to the a-row; irregulars memorised.',
            ex: [
              { jp: '肉を食べない。', rom: 'Niku o tabenai.', en: 'I don’t eat meat.', bd: [['食べない', '食べる → 食べない (drop る)']] },
              { jp: 'お酒を飲まない。', rom: 'Osake o nomanai.', en: 'I don’t drink alcohol.', bd: [['飲まない', '飲む → 飲ま + ない (u→a)']] },
              { jp: '全然わからない。', rom: 'Zenzen wakaranai.', en: 'I don’t get it at all.', bd: [['わからない', 'わかる → わからない']] }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'Two famous traps',
            items: [
              { x: '買あない', o: '買わない', n: 'Verbs ending in う go to <b>わ</b>, not あ: 買う → 買わない, 会う → 会わない.' },
              { x: 'あらない', o: 'ない', n: 'ある (to exist) is irregular — its negative is simply <b>ない</b>.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['u-verbs: the last sound <b>drops to the あ-row</b> + ない (飲む→飲ま-ない). Only う→わ and ある→ない break step.'] },
          { t: 'try', lab: 'Your turn', h: 'Go negative (casual)', items: ['“I don’t eat meat.”', '“I don’t drink.”', '“I don’t buy it.” (買う!)'], note: 'Mind 買う→買わない. Tap words above to check.' }
        ] }
      },
      {
        focus: 'Casual adjectives & だ',
        sub: 'Describe things plainly',
        particle: 'が',
        read: { k: 1, task: 'Shadow the passage — a half-second behind' },
        produce: 'Describe two things casually (drop です).',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'Today', h: 'Casual isn’t just for verbs',
            body: ['Adjectives and nouns have a plain form too. い-adjectives are easy; な-adjectives and nouns use <b>だ</b>.'] },
          { t: 'pat', lab: 'The rule', h: 'Drop です — carefully', formula: ['です', '→', '(い-adj) nothing · (な/noun) だ'], mean: 'How each type goes casual:',
            ex: [
              { jp: 'このケーキ、おいしい。', rom: 'Kono kēki, oishii.', en: 'This cake is delicious.', bd: [['おいしい', 'い-adj: just drop です']] },
              { jp: 'ここ、静かだ。', rom: 'Koko, shizuka da.', en: 'It’s quiet here.', bd: [['静かだ', 'な-adj: です → だ']] },
              { jp: '姉は学生だ。', rom: 'Ane wa gakusei da.', en: 'My sister is a student.', bd: [['学生だ', 'noun: です → だ']] }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'い-adjectives never take だ',
            items: [{ x: 'おいしいだ', o: 'おいしい', n: 'い-adjectives already end in the “is” — don’t add だ. Just おいしい.' }] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>い-adj: drop です, stop.</b> <b>な-adj & nouns: です → だ.</b> (In casual speech だ is often dropped too: 静か。 学生。)'] },
          { t: 'try', lab: 'Your turn', h: 'Describe it casually', items: ['“This is delicious.”', '“It’s quiet.”', '“He’s a teacher.” (先生)'], note: 'Watch い-adj vs な-adj/noun. Tap words above to check.' }
        ] }
      },
      {
        focus: 'Casual questions',
        sub: 'Ask without か',
        particle: 'の',
        read: { k: 2, task: 'Read the third passage on your own' },
        produce: 'Ask a friend two casual questions.',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'Today', h: 'Drop the か, raise the pitch',
            body: ['Casual questions don’t use か — you just lift your intonation. A softer, warmer version uses <b>の</b>.'] },
          { t: 'pat', lab: 'The patterns', h: 'Rising tone · 〜の？', formula: ['plain', '+', '？ / の？'], mean: 'Two everyday question styles:',
            ex: [
              { jp: '一緒に行く？', rom: 'Issho ni iku?', en: 'Wanna go together?', bd: [['行く', 'go (plain)'], ['？', 'rising tone = question']] },
              { jp: 'どうしたの？', rom: 'Dō shita no?', en: 'What’s wrong? / What happened?', bd: [['の', 'soft, explanatory question']] },
              { jp: '今、何してるの？', rom: 'Ima, nani shiteru no?', en: 'What are you doing right now?', bd: [['してる', 'している → してる'], ['の', 'seeking the story']] }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'な-adjectives & nouns take なの',
            items: [{ x: '元気の？', o: '元気なの？', n: 'After a な-adj or noun, the question の becomes <b>なの</b>: 学生なの？ (“Are you a student?”).' }] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>の？ = “tell me the story.”</b> It softens a question and invites an explanation.'] },
          { t: 'try', lab: 'Your turn', h: 'Ask casually', items: ['“Are you coming?”', '“What are you doing?” (with の)', '“Are you okay?” (大丈夫)'], note: 'Rising tone, no か. Tap words above to check.' }
        ] }
      },
      {
        focus: 'Register — when NOT to be casual',
        sub: 'The social rules that matter',
        particle: 'に',
        read: { k: 2, task: 'Dictation — listen and write it, then compare' },
        produce: 'List who you’d speak plainly to vs. politely to in your life.',
        lesson: { min: 5, secs: [
          { t: 'p', lab: 'Today', h: 'Casual is powerful — and risky',
            body: ['Using plain form with the wrong person is the single most common social slip for learners. The line is about <b>relationship</b>, not difficulty.'] },
          { t: 'p', lab: 'The rule of thumb', h: 'Who gets plain, who gets polite',
            body: ['<b>Plain:</b> close friends, family, people clearly younger or junior, and your own inner thoughts.', '<b>Polite (〜ます/です):</b> strangers, customers, teachers, bosses, anyone older or senior, and first meetings.', 'When you’re unsure, <b>default to polite</b> — it’s never rude.'] },
          { t: 'pat', lab: 'Same idea, two registers', h: 'Read the room', formula: ['friend', 'vs', 'colleague'], mean: 'One thought, two levels:',
            ex: [
              { jp: '明日、行く。', rom: 'Ashita, iku.', en: '“I’ll go tomorrow.” (to a friend)', bd: [['行く', 'plain']] },
              { jp: '明日、行きます。', rom: 'Ashita, ikimasu.', en: '“I’ll go tomorrow.” (to a colleague)', bd: [['行きます', 'polite']] }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>Casual is earned — start polite.</b> Let the other person drop into plain form first.'] },
          { t: 'try', lab: 'Your turn', h: 'Sort it', items: ['A new coworker →', 'Your close friend →', 'A shop clerk →'], note: 'Polite or plain? When unsure, polite.' }
        ] }
      },
      {
        focus: 'Review — polite ⇄ plain',
        sub: 'Convert both directions',
        particle: 'ね',
        read: { k: 0, task: 'Re-read any passage and say a one-line summary aloud' },
        produce: 'Convert five polite sentences to plain, then back.',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'The week in one look', h: 'You can now switch registers',
            body: ['Dictionary form, plain negative <b>〜ない</b>, casual adjectives (drop です / use だ), casual questions (no か / 〜の), and the social sense of <b>when</b> to use each.'] },
          { t: 'pat', lab: 'Conversion drill', h: 'Polite → plain', formula: ['〜ます/です', '→', 'plain'], mean: 'The mappings to keep straight:',
            ex: [
              { jp: '行きます → 行く / 行きません → 行かない', rom: 'ikimasu → iku / ikimasen → ikanai', en: 'verb, positive & negative', bd: [['行かない', 'u→a + ない']] },
              { jp: 'おいしいです → おいしい', rom: 'oishii desu → oishii', en: 'い-adjective (no だ)', bd: [['おいしい', 'drop です only']] },
              { jp: '学生です → 学生だ', rom: 'gakusei desu → gakusei da', en: 'noun (です → だ)', bd: [['だ', 'plain “is”']] }
            ] },
          { t: 'warn', lab: 'Last check', h: 'The traps that trip everyone',
            items: [
              { x: '買あない', o: '買わない', n: 'う-verbs → わ before ない.' },
              { x: 'おいしいだ', o: 'おいしい', n: 'い-adjectives never take だ.' },
              { x: '(to a stranger) 行く？', o: '行きますか', n: 'Register first — casual only with your inner circle.' }
            ] },
          { t: 'try', lab: 'Your turn', h: 'Both directions', items: ['食べます → ', '飲みません → ', 'きれいです → ', 'then say each back in polite form'], note: 'Tap words above to check.' }
        ] }
      }
    ]
  };
})();
