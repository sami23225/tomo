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

  /* ===================== WEEK 5 — Plain past (た-form) ===================== */
  U[5] = {
    title: 'Plain past (た-form)',
    days: [
      {
        focus: 'The た-form is the て-form’s twin',
        sub: 'Casual past, for free',
        particle: 'は',
        read: { k: 0, task: 'Read the passage with the translation open' },
        produce: 'Say three things you did today, casually.',
        lesson: { min: 5, secs: [
          { t: 'p', lab: 'This week', h: 'You already know most of this',
            body: ['The plain past — the <b>た-form</b> — is built exactly like the て-form you drilled, with one swap: <b>て → た</b> and <b>で → だ</b>. Every sound-change rule carries over. This is the easiest week to earn.'] },
          { t: 'pat', lab: 'The rule', h: 'Take the て-form, swap て→た', formula: ['て-form', '→', 'た-form (past)'], mean: 'Plain past = “did ~.”',
            ex: [
              { jp: '昨日、寿司を食べた。', rom: 'Kinō, sushi o tabeta.', en: 'I ate sushi yesterday.', bd: [['食べた', '食べて → 食べた']] },
              { jp: 'もう帰った。', rom: 'Mō kaetta.', en: 'I already went home.', bd: [['帰った', '帰って → 帰った']] },
              { jp: '映画を見た。', rom: 'Eiga o mita.', en: 'I watched a movie.', bd: [['見た', '見て → 見た']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'One shape, two tails',
            body: ['The て-form and た-form share the same stem; only the final vowel differs (て/た, で/だ). So the moment you can say 飲んで, you can say <b>飲んだ</b>. Learn the て-form once, collect the past for free.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>て → た, で → だ.</b> If you can make the て-form, you can already make the past.'] },
          { t: 'try', lab: 'Your turn', h: 'Make the past', items: ['食べる → (past)', '見る →', '行く →', 'する →', '来る →'], note: 'Via the て-form: 〜て → 〜た. Tap words above to check.' }
        ] }
      },
      {
        focus: 'う・つ・る → った',
        sub: 'Past of the first u-group',
        particle: 'を',
        read: { k: 0, task: 'Listen with the text hidden, then check' },
        produce: 'Say three things you bought or did (買う/待つ/帰る), in the past.',
        lesson: { min: 5, secs: [
          { t: 'p', lab: 'Today', h: 'The って group, in the past',
            body: ['Same group as て-form Day 2 — う・つ・る — now with た: <b>った</b>.'] },
          { t: 'pat', lab: 'The rule', h: 'う・つ・る → った', formula: ['〜う / つ / る', '→', 'った'], mean: 'Small っ, then た.',
            ex: [
              { jp: '切符を買った。', rom: 'Kippu o katta.', en: 'I bought a ticket.', bd: [['買った', '買う → 買った']] },
              { jp: '30分待った。', rom: 'Sanjuppun matta.', en: 'I waited 30 minutes.', bd: [['待った', '待つ → 待った']] },
              { jp: '早く帰った。', rom: 'Hayaku kaetta.', en: 'I went home early.', bd: [['帰った', '帰る → 帰った (u-verb!)']] }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'The 帰る trap again',
            items: [{ x: '帰た', o: '帰った', n: '帰る is a u-verb → 帰った, just like its て-form 帰って.' }] },
          { t: 'try', lab: 'Your turn', h: 'Make the past', items: ['買う →', '待つ →', '作る →', '帰る →', '取る →'], note: 'All → った. Tap words above to check.' }
        ] }
      },
      {
        focus: 'んだ · いた · いだ (and 行った)',
        sub: 'The rest of the u-verbs, in the past',
        particle: 'で',
        read: { k: 1, task: 'Shadow the passage — a half-second behind' },
        produce: 'Say three past actions using 飲む/読む/書く/泳ぐ.',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'Today', h: 'The nasal and k/g groups',
            body: ['む・ぶ・ぬ → <b>んだ</b>; く → <b>いた</b>, ぐ → <b>いだ</b>. And 行く keeps its rebel past: <b>行った</b>.'] },
          { t: 'pat', lab: 'The rules', h: 'んだ · いた · いだ', formula: ['む/ぶ/ぬ→んだ', '·', 'く→いた · ぐ→いだ'], mean: 'Same as the て-form, with た/だ:',
            ex: [
              { jp: 'ビールを飲んだ。', rom: 'Bīru o nonda.', en: 'I drank a beer.', bd: [['飲んだ', '飲む → 飲んだ']] },
              { jp: '本を読んだ。', rom: 'Hon o yonda.', en: 'I read a book.', bd: [['読んだ', '読む → 読んだ']] },
              { jp: '手紙を書いた。', rom: 'Tegami o kaita.', en: 'I wrote a letter.', bd: [['書いた', '書く → 書いた']] }
            ] },
          { t: 'warn', lab: 'The exception', h: '行く → 行った',
            items: [{ x: '行いた', o: '行った', n: 'Just like the て-form, 行く breaks the く→いた rule: 行った.' }] },
          { t: 'try', lab: 'Your turn', h: 'Make the past', items: ['飲む →', '遊ぶ →', '書く →', '泳ぐ →', '行く →'], note: 'Mind 行く! Tap words above to check.' }
        ] }
      },
      {
        focus: 'した, irregulars & polite past',
        sub: 'す-verbs, する/来る, and 〜ました',
        particle: 'と',
        read: { k: 1, task: 'Read the new passage with the translation' },
        produce: 'Say one past sentence politely (〜ました) and one plainly (〜た).',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'Today', h: 'The last group, plus register',
            body: ['す → <b>した</b>; する → <b>した</b>, 来る → <b>来た</b> (kita). Then: when to use plain 〜た vs polite 〜ました.'] },
          { t: 'pat', lab: 'The forms', h: 'した · きた · polite 〜ました', formula: ['plain 〜た', 'vs', 'polite 〜ました'], mean: 'Same past, two registers:',
            ex: [
              { jp: '友だちと話した。', rom: 'Tomodachi to hanashita.', en: 'I talked with a friend. (plain)', bd: [['話した', '話す → 話した'], ['と', 'with']] },
              { jp: '昨日、勉強しました。', rom: 'Kinō, benkyō shimashita.', en: 'I studied yesterday. (polite)', bd: [['しました', 'する → polite past']] },
              { jp: '友だちが来た。', rom: 'Tomodachi ga kita.', en: 'A friend came.', bd: [['来た', '来る → 来た (kita)']] }
            ] },
          { t: 'p', lab: 'Register', h: 'Where each past goes',
            body: ['Polite <b>〜ました</b> ends sentences to strangers/seniors. Plain <b>〜た</b> is for friends — and is required <i>inside</i> clauses (行っ<b>た</b>とき = “when I went,” even in a polite sentence).'] },
          { t: 'try', lab: 'Your turn', h: 'Both registers', items: ['“I talked with a friend.” (plain)', '“I studied.” (polite)', '“My friend came.” (plain)'], note: 'Tap words above to check.' }
        ] }
      },
      {
        focus: 'Plain past negative 〜なかった',
        sub: '“Didn’t”',
        particle: 'に',
        read: { k: 2, task: 'Read the third passage on your own' },
        produce: 'Say three things you didn’t do yesterday, casually.',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'Today', h: 'From 〜ない to 〜なかった',
            body: ['You already make the plain negative 〜ない. Past-tense it the way you past-tense any い-adjective: drop い, add <b>かった</b>.'] },
          { t: 'pat', lab: 'The rule', h: '〜ない → 〜なかった', formula: ['〜ない', '→', '〜なかった'], mean: '“Didn’t ~.”',
            ex: [
              { jp: '昨日、何も食べなかった。', rom: 'Kinō, nani mo tabenakatta.', en: 'I didn’t eat anything yesterday.', bd: [['食べなかった', '食べない → 食べなかった']] },
              { jp: '学校に行かなかった。', rom: 'Gakkō ni ikanakatta.', en: 'I didn’t go to school.', bd: [['行かなかった', '行かない → 行かなかった']] },
              { jp: '時間がなかった。', rom: 'Jikan ga nakatta.', en: 'I didn’t have time.', bd: [['なかった', 'ない → なかった']] }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'The same 〜ない traps carry over',
            items: [{ x: '買あなかった', o: '買わなかった', n: 'う-verbs → わ (買う→買わない→買わなかった). And ある→なかった.' }] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>〜ない is just an い-adjective.</b> Past = drop い + かった → 〜なかった. (Its negative-past you already met: 知らなかった.)'] },
          { t: 'try', lab: 'Your turn', h: 'Say “didn’t”', items: ['“I didn’t eat.”', '“I didn’t go.”', '“I didn’t have money.” (お金)'], note: 'From 〜ない → 〜なかった. Tap words above to check.' }
        ] }
      },
      {
        focus: '〜たことがある — “have done”',
        sub: 'Talk about experiences',
        particle: 'が',
        read: { k: 2, task: 'Dictation — listen and write it, then compare' },
        produce: 'Say two things you’ve done and one you never have.',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'Today', h: 'The past form’s first big job',
            body: ['Bolt <b>ことがある</b> onto the plain past and you get the “experience” form — “I have (once) done ~.”'] },
          { t: 'pat', lab: 'The pattern', h: '〜たことがある', formula: ['past plain', '+', 'ことがある'], mean: '“Have done ~ (at least once).”',
            ex: [
              { jp: '日本に行ったことがあります。', rom: 'Nihon ni itta koto ga arimasu.', en: 'I’ve been to Japan.', bd: [['行った', 'went — past'], ['ことがあります', 'have the experience of']] },
              { jp: '寿司を食べたことがありますか。', rom: 'Sushi o tabeta koto ga arimasu ka.', en: 'Have you ever eaten sushi?', bd: [['食べた', 'ate — past'], ['か', '?']] },
              { jp: '一度も会ったことがない。', rom: 'Ichido mo atta koto ga nai.', en: 'I’ve never met (them).', bd: [['会った', 'met — past'], ['ことがない', 'no such experience']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'Literally “there’s a time I did it”',
            body: ['<b>こと</b> = “an occasion,” <b>がある</b> = “exists.” So 行ったことがある = “an occasion of having gone exists” → I’ve been. Negative ことがない = no such occasion → never.'] },
          { t: 'try', lab: 'Your turn', h: 'Share experiences', items: ['“I’ve been to Korea.” (韓国)', '“Have you ever eaten natto?” (納豆)', '“I’ve never seen it.”'], note: 'past plain + ことがある/ない. Tap words above to check.' }
        ] }
      },
      {
        focus: 'Review — the plain past',
        sub: 'Mirror the て-form, add “didn’t” and “have done”',
        particle: 'ね',
        read: { k: 0, task: 'Re-read any passage and say a one-line summary aloud' },
        produce: 'Tell a 3-sentence mini-story about your day, in plain past.',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'The week in one look', h: 'The past, top to bottom',
            body: ['Plain past = the て-form with <b>て→た, で→だ</b> (行った is the one rebel). Negative is <b>〜なかった</b>. And <b>〜たことがある</b> talks about experience.'] },
          { t: 'warn', lab: 'Last check', h: 'The slips to have beaten',
            items: [
              { x: '行いた', o: '行った', n: 'The 行く exception, in the past too.' },
              { x: '買あなかった', o: '買わなかった', n: 'う-verbs → わ before ない/なかった.' },
              { x: 'あった → negative あらなかった', o: 'なかった', n: 'ある is irregular: past negative is なかった.' }
            ] },
          { t: 'try', lab: 'Your turn', h: 'Tell your day', items: ['One thing you did (〜た).', 'One thing you didn’t do (〜なかった).', 'One thing you’ve done before (〜たことがある).'], note: 'Plain past throughout. Tap words above to check.' }
        ] }
      }
    ]
  };

  /* ===================== WEEK 6 — Explaining & reasons ===================== */
  U[6] = {
    title: 'Explaining & reasons',
    days: [
      {
        focus: 'から — because',
        sub: 'State a reason, then a result',
        particle: 'から',
        read: { k: 0, task: 'Read the passage with the translation open' },
        produce: 'Give two reasons for things you did today, using から.',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'This week', h: 'Say why',
            body: ['This unit is about giving reasons and explaining yourself. The workhorse is <b>から</b> — “because.”'] },
          { t: 'pat', lab: 'The pattern', h: '[reason] から、[result]', formula: ['reason', '+ から +', 'result'], mean: 'から comes right after the reason clause.',
            ex: [
              { jp: '寒いから、窓を閉めます。', rom: 'Samui kara, mado o shimemasu.', en: 'It’s cold, so I’ll close the window.', bd: [['寒い', 'cold'], ['から', 'because / so']] },
              { jp: '時間がないから、急ごう。', rom: 'Jikan ga nai kara, isogō.', en: 'We’re out of time, so let’s hurry.', bd: [['ない', 'not have'], ['から', 'so']] },
              { jp: '好きだから、毎日食べる。', rom: 'Suki da kara, mainichi taberu.', en: 'I like it, so I eat it every day.', bd: [['好きだ', 'like (な-adj + だ)'], ['から', 'because']] }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'から needs だ after nouns / な-adjectives',
            items: [{ x: '学生から', o: '学生だから', n: 'After a noun or な-adjective, add だ before から: 学生<b>だ</b>から, 静か<b>だ</b>から.' }] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>Reason first, から, then result.</b> It’s the reverse of English “I’ll close it because it’s cold.”'] },
          { t: 'try', lab: 'Your turn', h: 'Give a reason', items: ['“It’s hot, so I’ll open the window.”', '“I have no money, so I won’t go.”', '“I’m tired, so I’ll sleep.”'], note: 'reason + から + result. Tap words above to check.' }
        ] }
      },
      {
        focus: 'ので — because (softer)',
        sub: 'Polite, objective reasons',
        particle: 'ので',
        read: { k: 0, task: 'Listen with the text hidden, then check' },
        produce: 'Give a polite excuse using ので.',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'Today', h: 'A gentler “because”',
            body: ['<b>ので</b> means the same as から but sounds softer and more objective — good for polite reasons and excuses.'] },
          { t: 'pat', lab: 'The pattern', h: '[reason] ので、[result]', formula: ['plain form', '+ ので', ''], mean: 'Attach ので to the plain form; after nouns/な-adj use <b>な</b>ので.',
            ex: [
              { jp: '電車が遅れたので、遅刻しました。', rom: 'Densha ga okureta node, chikoku shimashita.', en: 'The train was late, so I was late.', bd: [['遅れた', 'was late — past'], ['ので', 'because (soft)']] },
              { jp: '病気なので、休みます。', rom: 'Byōki na node, yasumimasu.', en: 'I’m ill, so I’ll take the day off.', bd: [['病気なので', 'noun + なので']] },
              { jp: '静かなので、集中できる。', rom: 'Shizuka na node, shūchū dekiru.', en: 'It’s quiet, so I can focus.', bd: [['静かなので', 'な-adj + なので']] }
            ] },
          { t: 'why', lab: 'Why choose it', h: 'から vs ので, in one line',
            body: ['<b>から</b> = my subjective reason (can sound assertive, even defensive). <b>ので</b> = a softer, more neutral “given that…,” which is why it’s preferred in polite requests and apologies.'] },
          { t: 'warn', lab: 'Watch out', h: 'なので after nouns / な-adjectives',
            items: [{ x: '病気ので', o: '病気なので', n: 'Insert な after a noun or な-adjective: 病気<b>な</b>ので, きれい<b>な</b>ので.' }] },
          { t: 'try', lab: 'Your turn', h: 'Give a soft reason', items: ['“The train was late, so I was late.”', '“It’s my day off, so I’m home.”', '“It’s quiet, so I can study.”'], note: 'plain + ので (noun/な-adj + なので). Tap words above to check.' }
        ] }
      },
      {
        focus: 'んです — the explanatory tone',
        sub: 'Give background and context',
        particle: 'の',
        read: { k: 1, task: 'Read the new passage with the translation' },
        produce: 'Explain why you’re doing something, using んです.',
        lesson: { min: 7, secs: [
          { t: 'p', lab: 'Today', h: 'The most Japanese-sounding sentence ending',
            body: ['<b>んです</b> (casual <b>んだ</b>, formal のです) frames a statement as an <i>explanation</i> — “the thing is…,” “it’s that…” It’s everywhere in natural speech.'] },
          { t: 'pat', lab: 'The pattern', h: 'plain form + んです', formula: ['plain', '+', 'んです'], mean: 'Presents the sentence as background/reason. Nouns & な-adj take <b>な</b>んです.',
            ex: [
              { jp: '頭が痛いんです。', rom: 'Atama ga itai n desu.', en: 'It’s that I have a headache. (explaining)', bd: [['痛い', 'hurts'], ['んです', 'the situation is…']] },
              { jp: '日本語を勉強しているんです。', rom: 'Nihongo o benkyō shite iru n desu.', en: 'The thing is, I’m studying Japanese.', bd: [['しているんです', 'explanatory']] },
              { jp: '今日は休みなんです。', rom: 'Kyō wa yasumi na n desu.', en: 'It’s that today’s my day off.', bd: [['休みなんです', 'noun + なんです']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'んです = “here’s the context”',
            body: ['Plain です just states a fact. <b>んです</b> signals “this explains something” — answering an unspoken “why?” or setting up a request. Overuse sounds dramatic; the right use sounds natural and connected.'] },
          { t: 'warn', lab: 'Watch out', h: 'なんです after nouns / な-adjectives',
            items: [{ x: '学生んです', o: '学生なんです', n: 'Noun/な-adj + <b>な</b>んです: 学生なんです, 便利なんです.' }] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>んです = “the thing is…”</b> It hands the listener the backstory, not just the fact.'] },
          { t: 'try', lab: 'Your turn', h: 'Explain', items: ['“It’s that I have a headache.”', '“The thing is, I’m busy.” (忙しい)', '“It’s that today is a holiday.”'], note: 'plain + んです (noun/な-adj + なんです). Tap words above to check.' }
        ] }
      },
      {
        focus: '〜んですか — asking for the story',
        sub: 'Show interest, ask why',
        particle: 'か',
        read: { k: 1, task: 'Shadow the passage — a half-second behind' },
        produce: 'Ask someone a curious 〜んですか question, then answer with 〜んです.',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'Today', h: 'The question side of んです',
            body: ['Add か and 〜んです becomes a warm, curious question — “oh, is it that…?” It invites the other person to explain.'] },
          { t: 'pat', lab: 'The pattern', h: '〜んですか', formula: ['plain', '+', 'んですか'], mean: 'Asks for background — softer and more interested than plain 〜ますか.',
            ex: [
              { jp: 'どこか行くんですか。', rom: 'Dokoka iku n desu ka.', en: 'Oh, are you going somewhere?', bd: [['行く', 'go'], ['んですか', 'is it that…?']] },
              { jp: 'どうして休んだんですか。', rom: 'Dōshite yasunda n desu ka.', en: 'How come you took the day off?', bd: [['休んだ', 'took off — past'], ['どうして', 'why']] },
              { jp: '日本の方なんですか。', rom: 'Nihon no kata na n desu ka.', en: 'Oh, are you from Japan?', bd: [['方', 'person (polite)'], ['なんですか', 'noun + なんですか']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'It reads the situation',
            body: ['You use 〜んですか when something prompts the question — you saw a suitcase, so “行くんですか?” It feels attentive; a bare 行きますか can feel like an interrogation.'] },
          { t: 'try', lab: 'Your turn', h: 'Ask with interest', items: ['“Oh, are you going out?”', '“Why were you absent?”', '“Are you a student?” (curious)'], note: '〜んですか. Tap words above to check.' }
        ] }
      },
      {
        focus: 'て-form as a light reason',
        sub: '“…and so I’m sorry / glad”',
        particle: 'で',
        read: { k: 2, task: 'Read the third passage on your own' },
        produce: 'Apologize or react using a て-form reason.',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'Today', h: 'The て-form quietly gives reasons too',
            body: ['Beyond “and then,” the て-form can express a light cause — especially with feelings and apologies. It’s softer than から/ので.'] },
          { t: 'pat', lab: 'The pattern', h: '[cause て], [feeling/result]', formula: ['〜て', '+', 'feeling'], mean: 'The first clause is the reason for the second.',
            ex: [
              { jp: '遅れて、すみません。', rom: 'Okurete, sumimasen.', en: 'I’m sorry for being late.', bd: [['遅れて', 'be late — reason'], ['すみません', 'sorry']] },
              { jp: '会えて、うれしいです。', rom: 'Aete, ureshii desu.', en: 'I’m glad to meet you.', bd: [['会えて', 'can meet — 会える'], ['うれしい', 'glad']] },
              { jp: 'ニュースを聞いて、驚いた。', rom: 'Nyūsu o kiite, odoroita.', en: 'I heard the news and was surprised.', bd: [['聞いて', 'hear — reason'], ['驚いた', 'was surprised']] }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'て-reason can’t carry commands',
            items: [{ x: '寒くて、窓を閉めてください', o: '寒いから、窓を閉めてください', n: 'For a reason behind a request or command, use から/ので. The て-reason is mainly for feelings/spontaneous results.' }] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>Feeling after a て-clause = “because.”</b> 会えてうれしい, 遅れてすみません, 聞いて驚いた.'] },
          { t: 'try', lab: 'Your turn', h: 'React with a reason', items: ['“Sorry I’m late.”', '“I’m glad to meet you.”', '“I heard it and was surprised.”'], note: 'て-form + feeling. Tap words above to check.' }
        ] }
      },
      {
        focus: 'から vs ので vs んです',
        sub: 'Pick the right “because”',
        particle: 'は',
        read: { k: 2, task: 'Dictation — listen and write it, then compare' },
        produce: 'Give the same reason three ways (から / ので / んです).',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'Today', h: 'Three tools, three flavours',
            body: ['They overlap, but each has a feel. Choosing well makes you sound natural.'] },
          { t: 'pat', lab: 'Side by side', h: 'Same reason, three tones', formula: ['から', 'ので', 'んです'], mean: '“I was late because the train stopped”:',
            ex: [
              { jp: '電車が止まったから、遅れた。', rom: '…tomatta kara, okureta.', en: 'から — direct, my reason (casual/assertive).', bd: [['から', 'subjective “because”']] },
              { jp: '電車が止まったので、遅れました。', rom: '…tomatta node, okuremashita.', en: 'ので — soft, polite, objective.', bd: [['ので', 'gentle “because”']] },
              { jp: '実は、電車が止まったんです。', rom: 'Jitsu wa, …tomatta n desu.', en: 'んです — offering the explanation itself.', bd: [['んです', '“the thing is…”']] }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Rule of thumb',
            items: ['<b>から</b> = I’m telling you my reason. <b>ので</b> = softening it for politeness. <b>んです</b> = handing over the backstory (often answering “why?”).'] },
          { t: 'try', lab: 'Your turn', h: 'Three ways', items: ['“It’s cold, so I closed the window.” → から', '“…” → ので (polite)', '“(explaining) It’s that it was cold.” → んです'], note: 'Tap words above to check.' }
        ] }
      },
      {
        focus: 'Review — explaining yourself',
        sub: 'Reasons, excuses, and background',
        particle: 'ね',
        read: { k: 0, task: 'Re-read any passage and say a one-line summary aloud' },
        produce: 'Explain a real situation in your life using two of the week’s tools.',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'The week in one look', h: 'You can now say why',
            body: ['<b>から</b> (because) · <b>ので</b> (soft because) · <b>んです</b> (explanatory) · <b>〜んですか</b> (curious question) · the <b>て-form</b> as a light reason.'] },
          { t: 'warn', lab: 'Last check', h: 'The attachment traps',
            items: [
              { x: '学生から / 学生ので', o: '学生だから / 学生なので', n: 'Nouns & な-adj: だから, なので, なんです.' },
              { x: '(command) 寒くて閉めてください', o: '寒いから閉めてください', n: 'Reasons for requests use から/ので, not the て-reason.' }
            ] },
          { t: 'try', lab: 'Your turn', h: 'Explain something real', items: ['Why you started studying Japanese (から/ので).', 'Something surprising, reacting with a て-reason.', 'Set up a request with んです, then ask.'], note: 'Tap words above to check.' }
        ] }
      }
    ]
  };

  /* ===================== WEEK 7 — Wanting to do / have ===================== */
  U[7] = {
    title: 'Wanting to do & have',
    days: [
      {
        focus: '〜たい — want to do',
        sub: 'Express your own desires',
        particle: 'が',
        read: { k: 0, task: 'Read the passage with the translation open' },
        produce: 'Say three things you want to do this week.',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'This week', h: 'Two ways to want',
            body: ['This unit is about desire: <b>〜たい</b> for actions you want to <i>do</i>, and <b>〜がほしい</b> for things you want to <i>have</i>. Start with actions.'] },
          { t: 'pat', lab: 'The pattern', h: 'ます-stem + たい', formula: ['ます-stem', '+', 'たい'], mean: 'Take the polite stem and add たい — “want to ~.”',
            ex: [
              { jp: '寿司が食べたい。', rom: 'Sushi ga tabetai.', en: 'I want to eat sushi.', bd: [['食べたい', '食べます → 食べ + たい']] },
              { jp: '日本に行きたいです。', rom: 'Nihon ni ikitai desu.', en: 'I want to go to Japan.', bd: [['行きたい', '行きます → 行きたい'], ['に', 'to']] },
              { jp: '少し休みたい。', rom: 'Sukoshi yasumitai.', en: 'I want to rest a little.', bd: [['休みたい', '休みます → 休みたい']] }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'たい is for YOU (and questions)',
            items: [{ x: '彼は行きたいです', o: '(your own want, or a question)', n: '〜たい states your own desire, or asks the listener’s. For a third person’s want, you’ll use a different form (Day 5).' }] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>Drop ます, add たい.</b> 食べ<s>ます</s> → 食べ<b>たい</b>. The thing wanted often takes が.'] },
          { t: 'try', lab: 'Your turn', h: 'What you want to do', items: ['“I want to eat ramen.”', '“I want to go home.”', '“I want to sleep.”'], note: 'ます-stem + たい. Tap words above to check.' }
        ] }
      },
      {
        focus: 'たい conjugates like an い-adjective',
        sub: 'Negative, past, and “didn’t want”',
        particle: 'は',
        read: { k: 0, task: 'Listen with the text hidden, then check' },
        produce: 'Say something you wanted but didn’t do, and something you don’t want to do.',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'Today', h: 'たい ends in い — so inflect it like one',
            body: ['Because <b>たい</b> ends in い, it bends exactly like an い-adjective (たかい → たくない → たかった).'] },
          { t: 'pat', lab: 'The forms', h: 'たくない · たかった · たくなかった', formula: ['たい', '→', 'たくない / たかった'], mean: 'Don’t want / wanted / didn’t want:',
            ex: [
              { jp: '今日は行きたくない。', rom: 'Kyō wa ikitakunai.', en: 'I don’t want to go today.', bd: [['行きたくない', 'たい → たくない']] },
              { jp: 'もっと食べたかった。', rom: 'Motto tabetakatta.', en: 'I wanted to eat more.', bd: [['食べたかった', 'たい → たかった (past)']] },
              { jp: '見たくなかった。', rom: 'Mitakunakatta.', en: 'I didn’t want to see it.', bd: [['見たくなかった', 'たい → たくなかった']] }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'Drop the final い of たい first',
            items: [{ x: 'たいくない', o: 'たくない', n: 'Like any い-adj: たい → た<b>く</b>ない, た<b>かった</b>. The い goes.' }] },
          { t: 'try', lab: 'Your turn', h: 'Inflect たい', items: ['“I don’t want to work.”', '“I wanted to go.”', '“I didn’t want to eat it.”'], note: 'Treat たい like an い-adjective. Tap words above to check.' }
        ] }
      },
      {
        focus: '名詞 + がほしい — want a thing',
        sub: 'Desire for objects, not actions',
        particle: 'が',
        read: { k: 1, task: 'Read the new passage with the translation' },
        produce: 'Name two things (not actions) that you want.',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'Today', h: 'For things, switch to ほしい',
            body: ['When you want a <b>thing</b> (not to do something), use <b>ほしい</b> — itself an い-adjective — with が.'] },
          { t: 'pat', lab: 'The pattern', h: '[thing] がほしい', formula: ['noun', '+ が', 'ほしい'], mean: '“I want (a) ~.”',
            ex: [
              { jp: '新しい車がほしい。', rom: 'Atarashii kuruma ga hoshii.', en: 'I want a new car.', bd: [['車が', 'car'], ['ほしい', 'want (a thing)']] },
              { jp: '時間がほしいです。', rom: 'Jikan ga hoshii desu.', en: 'I want (more) time.', bd: [['時間が', 'time']] },
              { jp: '何がほしいですか。', rom: 'Nani ga hoshii desu ka.', en: 'What do you want?', bd: [['何が', 'what'], ['か', '?']] }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'たい (do) vs ほしい (have)',
            items: [{ x: '本をほしい / 本がしたい', o: '本がほしい', n: 'Want a THING → がほしい. Want to DO → 〜たい. Don’t cross them.' }] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>たい = to do, ほしい = to have.</b> Both bend like い-adjectives (ほしくない, ほしかった).'] },
          { t: 'try', lab: 'Your turn', h: 'What you want', items: ['“I want a new phone.” (電話)', '“I want time.”', '“What do you want?”'], note: 'noun + がほしい. Tap words above to check.' }
        ] }
      },
      {
        focus: 'を or が with 〜たい',
        sub: 'Marking the object of desire',
        particle: 'を',
        read: { k: 1, task: 'Shadow the passage — a half-second behind' },
        produce: 'Say one want with を and the same with が.',
        lesson: { min: 5, secs: [
          { t: 'p', lab: 'Today', h: 'A small choice that sounds natural',
            body: ['With 〜たい, the object can take <b>を</b> or <b>が</b>. Both are correct; が leans into the <i>craving</i>.'] },
          { t: 'pat', lab: 'The pattern', h: '〜を〜たい / 〜が〜たい', formula: ['object を / が', '+', '〜たい'], mean: 'が spotlights the thing you desire:',
            ex: [
              { jp: 'コーヒーが飲みたい。', rom: 'Kōhī ga nomitai.', en: 'I want (a) coffee. (craving it)', bd: [['が', 'spotlights the object']] },
              { jp: 'パンを買いたい。', rom: 'Pan o kaitai.', en: 'I want to buy bread. (neutral)', bd: [['を', 'plain object']] }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>が = “it’s this I want.”</b> When the object itself is the point of the sentence, が feels right.'] },
          { t: 'try', lab: 'Your turn', h: 'Both markers', items: ['“I want to drink water.” (が)', '“I want to buy a ticket.” (を)', 'Say one of them the other way too.'], note: 'Tap words above to check.' }
        ] }
      },
      {
        focus: 'Other people’s wants',
        sub: 'You can’t read minds',
        particle: 'も',
        read: { k: 2, task: 'Read the third passage on your own' },
        produce: 'Report what a friend or family member wants.',
        lesson: { min: 7, secs: [
          { t: 'p', lab: 'Today', h: 'Third-person desire works differently',
            body: ['〜たい / ほしい describe <i>your own</i> feelings. To say what someone <b>else</b> wants, Japanese describes their observable behaviour: <b>〜たがる / ほしがる</b> (usually + ている).'] },
          { t: 'pat', lab: 'The pattern', h: '〜たがっている · ほしがっている', formula: ['〜たい → 〜たがる', '·', 'ほしい → ほしがる'], mean: '“(Someone) is showing they want to ~ / want ~.”',
            ex: [
              { jp: '弟が日本に行きたがっている。', rom: 'Otōto ga Nihon ni ikitagatte iru.', en: 'My little brother wants to go to Japan.', bd: [['行きたがっている', 'たい → たがる + ている']] },
              { jp: '子どもがそのおもちゃをほしがっている。', rom: 'Kodomo ga sono omocha o hoshigatte iru.', en: 'The child wants that toy.', bd: [['ほしがっている', 'ほしい → ほしがる']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'Feelings are private; behaviour is visible',
            body: ['Japanese avoids asserting another person’s inner state as fact. <b>〜がる</b> literally means “to show signs of ~,” so 行きたがっている = “is acting like they want to go.” Safe and natural.'] },
          { t: 'warn', lab: 'Watch out', h: 'Don’t use bare たい for others',
            items: [{ x: '彼は行きたいです', o: '彼は行きたがっています / 行きたいようです', n: 'For a third party, use たがる, or hedge: 〜たいようです / 〜たいと言っていた.' }] },
          { t: 'try', lab: 'Your turn', h: 'Report a want', items: ['“My brother wants to go.”', '“The kids want ice cream.” (アイス)', '“She wants a new bag.” (かばん)'], note: '〜たがっている / ほしがっている. Tap words above to check.' }
        ] }
      },
      {
        focus: 'Softening wants & requests',
        sub: 'From たい to a polite ask',
        particle: 'か',
        read: { k: 2, task: 'Dictation — listen and write it, then compare' },
        produce: 'Turn a want into a polite request with 〜たいんですが.',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'Today', h: 'Raw たい can be too blunt',
            body: ['Stating a bare want to someone senior can feel pushy. Two fixes: soften with <b>〜たいんですが</b>, and invite rather than ask about wants.'] },
          { t: 'pat', lab: 'The pattern', h: '〜たいんですが…', formula: ['〜たい', '+', 'んですが'], mean: 'A polite lead-in — “I’d like to ~, so…” (trailing off invites help).',
            ex: [
              { jp: 'ちょっと聞きたいんですが。', rom: 'Chotto kikitai n desu ga.', en: 'I’d like to ask something, if I may.', bd: [['聞きたい', 'want to ask'], ['んですが', 'polite, trailing']] },
              { jp: '予約したいんですが…', rom: 'Yoyaku shitai n desu ga…', en: 'I’d like to make a reservation…', bd: [['したいんですが', 'soft request opener']] }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'Don’t ask a superior “〜たいですか”',
            items: [{ x: '(to your boss) コーヒーを飲みたいですか', o: 'コーヒーを飲みませんか / いかがですか', n: 'Asking a superior’s desires directly is too forward. Offer instead: 〜ませんか, いかがですか.' }] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>〜たいんですが = a polite doorway.</b> State the want softly, let the listener offer to help.'] },
          { t: 'try', lab: 'Your turn', h: 'Soften it', items: ['“I’d like to ask something…”', '“I’d like to book a table…”', 'Offer someone a drink with 〜ませんか.'], note: 'Tap words above to check.' }
        ] }
      },
      {
        focus: 'Review — wants & desires',
        sub: 'Do, have, and other people',
        particle: 'ね',
        read: { k: 0, task: 'Re-read any passage and say a one-line summary aloud' },
        produce: 'Two things you want to do, one thing you want, one thing a friend wants.',
        lesson: { min: 6, secs: [
          { t: 'p', lab: 'The week in one look', h: 'The whole desire toolkit',
            body: ['<b>〜たい</b> (do) and <b>〜がほしい</b> (have), both bending like い-adjectives; <b>を/が</b> with たい; <b>〜たがる/ほしがる</b> for others; and <b>〜たいんですが</b> to stay polite.'] },
          { t: 'warn', lab: 'Last check', h: 'The traps to have beaten',
            items: [
              { x: '本をほしい', o: '本がほしい', n: 'Things → がほしい; actions → 〜たい.' },
              { x: '彼は行きたい', o: '彼は行きたがっている', n: 'Third-person want → 〜たがる.' },
              { x: 'たいくない', o: 'たくない', n: 'たい inflects like an い-adjective.' }
            ] },
          { t: 'try', lab: 'Your turn', h: 'Put it together', items: ['Two things you want to do.', 'One thing you want to have.', 'One thing a friend or relative wants.'], note: 'Tap words above to check.' }
        ] }
      }
    ]
  };

  /* ============ Batch: weeks 8-19 & 101-108 ============ */
/* block_A.js — Tomo grammar units U[8]..U[11]. Bare assignments; U already exists. */

/* ===================== WEEK 8 — Comparing ===================== */
U[8] = {
  title: 'Comparing',
  days: [

    /* ---- Day 1 ---- */
    {
      focus: 'B is more than A: AよりBのほうが',
      sub: 'Your first comparison sentence',
      particle: 'より',
      read: { k: 0, task: 'Read the passage with the translation open' },
      produce: 'Compare two foods you like and say which one is better.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'This week', h: 'Comparing two things',
            body: ['This week you’ll <b>compare</b> — bigger, faster, more fun. The key word is <b>ほう</b> (“side”): you say which <b>side</b> wins.'] },
          { t: 'pat', lab: 'The pattern', h: 'AよりBのほうが〜',
            formula: ['Aより', 'Bのほうが', 'adjective'],
            mean: '<b>B is more ~ than A.</b> より tags the one left behind; のほうが tags the winner.',
            ex: [
              { jp: 'バスより電車のほうが速いです。', rom: 'Basu yori densha no hō ga hayai desu.', en: 'The train is faster than the bus.',
                bd: [['バスより', 'more than the bus'], ['電車のほうが', 'the train (wins)'], ['速い', 'fast']] },
              { jp: '犬より猫のほうが好きです。', rom: 'Inu yori neko no hō ga suki desu.', en: 'I like cats more than dogs.',
                bd: [['犬より', 'than dogs'], ['猫のほうが', 'cats (more)'], ['好き', 'liked']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'より = “compared to”',
            body: ['<b>より</b> means “compared to,” so it marks the thing you measure against. <b>のほう</b> is literally “the ~ side,” and <b>が</b> spotlights the winner. The order is flexible: <b>BのほうがAより〜</b> works too.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Loser より, winner のほうが',
            items: ['<b>より</b> = the one left behind. <b>のほうが</b> = the one that wins.'] },
          { t: 'try', lab: 'Your turn', h: 'Build a comparison',
            items: ['夏 / 冬 — which do you prefer?', 'コーヒー / お茶', '電車 / 車'],
            note: 'Use AよりBのほうが〜. Tap words above to check.' }
        ]
      }
    },

    /* ---- Day 2 ---- */
    {
      focus: 'Which is more? AとBとどちらが',
      sub: 'Asking someone to compare',
      particle: 'と',
      read: { k: 0, task: 'Listen with the text hidden, then check' },
      produce: 'Ask a friend which of two cities they like more.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The question', h: 'AとBとどちらが〜ですか',
            formula: ['Aと', 'Bと', 'どちらが〜'],
            mean: '<b>Which is more ~, A or B?</b> どちら = “which one (of two).”',
            ex: [
              { jp: 'コーヒーと紅茶とどちらが好きですか。', rom: 'Kōhī to kōcha to dochira ga suki desu ka.', en: 'Which do you like better, coffee or tea?',
                bd: [['コーヒーと紅茶と', 'coffee and tea'], ['どちらが', 'which one'], ['好き', 'liked']] },
              { jp: '電車とバスとどちらが速いですか。', rom: 'Densha to basu to dochira ga hayai desu ka.', en: 'Which is faster, the train or the bus?',
                bd: [['どちらが', 'which one'], ['速い', 'fast']] }
            ] },
          { t: 'p', lab: 'The answer', h: 'Answer with のほうが',
            body: ['To answer, drop back to Day 1: <b>Bのほうが〜です</b>. So <b>コーヒーのほうが好きです</b> — “I like coffee more.” If they are equal, say <b>どちらも同じです</b> (“both the same”).'] },
          { t: 'warn', lab: 'Watch out', h: 'どちら, not なに',
            items: [
              { x: 'コーヒーと紅茶となにが好きですか。', o: 'コーヒーと紅茶とどちらが好きですか。', n: 'For a choice between two things, use どちら, not なに.' },
              { x: 'コーヒーが好きです。', o: 'コーヒーのほうが好きです。', n: 'When comparing, answer with のほうが to show it beat the other.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Two things, どちら',
            items: ['Two options on the table → <b>どちらが</b>. Then answer → <b>のほうが</b>.'] },
          { t: 'try', lab: 'Your turn', h: 'Ask and answer',
            items: ['山 / 海 — ask which they prefer', 'Answer for yourself with のほうが', '犬 / 猫 — ask a friend'],
            note: 'Casual どっち works with friends.' }
        ]
      }
    },

    /* ---- Day 3 ---- */
    {
      focus: 'The best: 一番',
      sub: 'Superlatives with 一番',
      particle: 'で',
      read: { k: 1, task: 'Read the new passage with the translation' },
      produce: 'Name your favorite food out of all foods.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: '〜の中で〜が一番〜',
            formula: ['groupの中で', 'itemが', '一番〜'],
            mean: '<b>Of all ~, X is the most ~.</b> 一番 is literally “number one.”',
            ex: [
              { jp: '果物の中でりんごが一番好きです。', rom: 'Kudamono no naka de ringo ga ichiban suki desu.', en: 'Of all fruits, I like apples the best.',
                bd: [['果物の中で', 'among fruits'], ['りんごが', 'apples'], ['一番', 'number one / most'], ['好き', 'liked']] },
              { jp: 'クラスで田中さんが一番背が高いです。', rom: 'Kurasu de Tanaka-san ga ichiban se ga takai desu.', en: 'In the class, Tanaka is the tallest.',
                bd: [['クラスで', 'in the class'], ['一番', 'the most'], ['背が高い', 'tall']] }
            ] },
          { t: 'p', lab: 'Asking it', h: 'What / who / where is best?',
            body: ['To ask, swap the item for a question word: <b>何が</b> (what), <b>だれが</b> (who), <b>どこが</b> (where), <b>いつが</b> (when). For example: <b>日本料理の中で何が一番好きですか。</b>'] },
          { t: 'why', lab: 'Why で here', h: 'の中で = “within the group”',
            body: ['<b>の中で</b> marks the group you choose from — “within fruits,” “within the class.” With a place or set noun you often shorten it to just <b>で</b>, as in <b>クラスで</b>.'] },
          { t: 'mem', lab: 'Make it stick', h: '一番 = number one',
            items: ['<b>一番</b> is just “No. 1.” Put it right before the adjective: <b>一番おいしい</b>.'] },
          { t: 'try', lab: 'Your turn', h: 'Say the best',
            items: ['季節 (seasons) — which is best?', 'スポーツ — which is most fun?', 'この店 — what is the most delicious?'],
            note: 'Use 〜の中で〜が一番〜.' }
        ]
      }
    },

    /* ---- Day 4 ---- */
    {
      focus: 'Same as, and not as ~ as',
      sub: 'と同じ / 〜ほど〜ない',
      particle: 'は',
      read: { k: 1, task: 'Shadow the passage — a half-second behind' },
      produce: 'Say one thing that is the same as another, and one that is less than another.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'Equal', h: 'AはBと同じ',
            formula: ['Aは', 'Bと', '同じ'],
            mean: '<b>A is the same as B.</b> 同じ needs <b>と</b> right before it.',
            ex: [
              { jp: 'この本はあの本と同じです。', rom: 'Kono hon wa ano hon to onaji desu.', en: 'This book is the same as that one.',
                bd: [['この本は', 'this book'], ['あの本と', 'as that book'], ['同じ', 'the same']] },
              { jp: 'わたしのかばんは山田さんのと同じです。', rom: 'Watashi no kaban wa Yamada-san no to onaji desu.', en: 'My bag is the same as Yamada’s.',
                bd: [['わたしのかばんは', 'my bag'], ['山田さんのと', 'as Yamada’s'], ['同じ', 'the same']] }
            ] },
          { t: 'pat', lab: 'Less than', h: 'AはBほど〜ない',
            formula: ['Aは', 'Bほど', '〜ない'],
            mean: '<b>A is not as ~ as B.</b> The adjective is always negative.',
            ex: [
              { jp: '今日は昨日ほど暑くないです。', rom: 'Kyō wa kinō hodo atsukunai desu.', en: 'Today isn’t as hot as yesterday.',
                bd: [['今日は', 'today'], ['昨日ほど', 'as yesterday'], ['暑くない', 'not hot']] },
              { jp: 'バスは電車ほど速くないです。', rom: 'Basu wa densha hodo hayakunai desu.', en: 'The bus isn’t as fast as the train.',
                bd: [['バスは', 'the bus'], ['電車ほど', 'as the train'], ['速くない', 'not fast']] }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'ほど pairs with a negative',
            items: [
              { x: '今日は昨日ほど暑いです。', o: '今日は昨日ほど暑くないです。', n: '〜ほど must end negative. It means “not as ~ as.”' },
              { x: 'この本はあの本は同じです。', o: 'この本はあの本と同じです。', n: '同じ takes と, not は, before it.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'ほど = a negative ceiling',
            items: ['See <b>ほど</b>? The end will be <b>ない</b> — “not up to that level.”'] },
          { t: 'try', lab: 'Your turn', h: 'Same or less',
            items: ['Say your phone is the same as a friend’s', '今日 / 昨日 — say today is less cold', 'This week / last week — less busy'],
            note: '同じ needs と; ほど needs a negative.' }
        ]
      }
    },

    /* ---- Day 5 ---- */
    {
      focus: 'More, way more, a bit more',
      sub: 'もっと・ずっと・もう少し',
      particle: 'が',
      read: { k: 2, task: 'Read the third passage on your own' },
      produce: 'Ask a shop for something cheaper and something a little bigger.',
      lesson: {
        min: 6,
        secs: [
          { t: 'tf', lab: 'Three degrees', h: 'How much more?',
            intro: 'These adverbs turn up the dial in front of an adjective.',
            rows: [
              { g: 'もっと', r: 'もっと安い', n: 'more / -er (plain comparative)' },
              { g: 'ずっと', r: 'ずっと安い', n: 'far more, by a lot' },
              { g: 'もう少し', r: 'もう少し安い', n: 'a little more, slightly' }
            ],
            note: 'All three sit right before the adjective, like English “much cheaper.”' },
          { t: 'pat', lab: 'In use', h: 'Turning up the dial',
            formula: ['もっと / ずっと / もう少し', '+', 'adjective'],
            mean: 'Adjust the <i>strength</i> of a comparison.',
            ex: [
              { jp: 'もっと安いのはありますか。', rom: 'Motto yasui no wa arimasu ka.', en: 'Do you have a cheaper one?',
                bd: [['もっと安い', 'cheaper'], ['のは', 'one'], ['ありますか', 'do you have']] },
              { jp: 'こっちのほうがずっといいです。', rom: 'Kotchi no hō ga zutto ii desu.', en: 'This one is much better.',
                bd: [['こっちのほうが', 'this one (more)'], ['ずっと', 'by far'], ['いい', 'good']] },
              { jp: 'もう少し大きいサイズはありますか。', rom: 'Mō sukoshi ōkii saizu wa arimasu ka.', en: 'Do you have a slightly bigger size?',
                bd: [['もう少し', 'a little more'], ['大きい', 'big'], ['サイズ', 'size']] }
            ] },
          { t: 'why', lab: 'Why が', h: 'The winner still takes が',
            body: ['Even with these adverbs, the “winner” keeps <b>のほうが</b>: <b>こっちのほうがずっといい</b>. <b>ずっと</b> just says the gap is <i>big</i>. Use <b>もっと</b> for a plain “more,” and <b>もう少し</b> for a gentle nudge.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Small to big',
            items: ['<b>もう少し</b> = a nudge, <b>もっと</b> = more, <b>ずっと</b> = way more.'] },
          { t: 'try', lab: 'Your turn', h: 'Adjust the dial',
            items: ['Ask for a cheaper one', 'Say this one is much better', 'Ask for a slightly bigger size'],
            note: 'Put the adverb right before the adjective.' }
        ]
      }
    },

    /* ---- Day 6 ---- */
    {
      focus: 'Comparing in real life',
      sub: 'Prices, sizes, speeds',
      particle: 'ぐらい',
      read: { k: 2, task: 'Dictation — listen and write it, then compare' },
      produce: 'Compare two products by price and size using this week’s patterns.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'Put it together', h: 'Shopping and choosing',
            body: ['Now stack the tools. Ask <b>どちらが安いですか</b>, answer <b>こっちのほうが安いです</b>, and add scale with <b>ぐらい</b> — “about,” “roughly.”'] },
          { t: 'pat', lab: 'With numbers', h: 'Adding “about how much”',
            formula: ['amount', 'ぐらい', 'adjective'],
            mean: '<b>ぐらい</b> softens a number to “about / roughly.”',
            ex: [
              { jp: '新幹線はバスより三倍ぐらい速いです。', rom: 'Shinkansen wa basu yori sanbai gurai hayai desu.', en: 'The bullet train is about three times faster than the bus.',
                bd: [['三倍ぐらい', 'about three times'], ['速い', 'fast']] },
              { jp: 'このかばんはあのかばんより二千円ぐらい高いです。', rom: 'Kono kaban wa ano kaban yori nisen-en gurai takai desu.', en: 'This bag is about 2,000 yen more expensive than that one.',
                bd: [['二千円ぐらい', 'about 2,000 yen'], ['高い', 'expensive']] }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'Common slips',
            items: [
              { x: 'こっちのほうが安いより。', o: 'こっちのほうがあっちより安いです。', n: 'より marks the thing compared against, not the end of the sentence.' },
              { x: '三倍ぐらいに速いです。', o: '三倍ぐらい速いです。', n: 'ぐらい attaches straight to the amount; no extra に.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'ぐらい = roughly',
            items: ['<b>ぐらい</b> (also <b>くらい</b>) = “about.” Perfect when you don’t know the exact number.'] },
          { t: 'try', lab: 'Your turn', h: 'Compare for real',
            items: ['Compare two phones by price', 'Compare two cities by size', 'Compare walking and cycling by speed'],
            note: 'Use より / のほうが and add ぐらい for scale.' }
        ]
      }
    },

    /* ---- Day 7 — Review ---- */
    {
      focus: 'Review: comparing',
      sub: 'Pull the week together',
      particle: 'ね',
      read: { k: 0, task: 'Re-read any passage and say a one-line summary aloud' },
      produce: 'Write three comparison sentences: a “more,” a “most,” and a “not as ~ as.”',
      lesson: {
        min: 5,
        secs: [
          { t: 'p', lab: 'Recap', h: 'The whole toolkit',
            body: ['<b>AよりBのほうが〜</b> (B is more). <b>どちらが〜ですか</b> (which?). <b>〜の中で〜が一番〜</b> (the most). <b>と同じ</b> (same as) and <b>〜ほど〜ない</b> (not as ~ as). Adverbs: <b>もっと・ずっと・もう少し</b>. Tag <b>ね</b> to invite agreement: <b>電車のほうが速いですね</b>.'] },
          { t: 'warn', lab: 'Last check', h: 'The classic traps',
            items: [
              { x: 'コーヒーと紅茶となにが好きですか。', o: 'コーヒーと紅茶とどちらが好きですか。', n: 'Two choices → どちら, not なに.' },
              { x: '今日は昨日ほど暑いです。', o: '今日は昨日ほど暑くないです。', n: 'ほど always lands on a negative.' },
              { x: 'この本はあの本は同じです。', o: 'この本はあの本と同じです。', n: '同じ takes と.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'One line to remember',
            items: ['Loser <b>より</b>, winner <b>のほうが</b>, champion <b>一番</b>.'] },
          { t: 'try', lab: 'Your turn', h: 'Mixed practice',
            items: ['Say the train is faster than the bus', 'Say apples are your favorite fruit', 'Say today is not as cold as yesterday', 'Add ね to one sentence to seek agreement'],
            note: 'Mix より, 一番, and ほど〜ない.' }
        ]
      }
    }

  ]
};

/* ===================== WEEK 9 — Inviting & suggesting ===================== */
U[9] = {
  title: 'Inviting & suggesting',
  days: [

    /* ---- Day 1 ---- */
    {
      focus: 'Won’t you…? 〜ませんか',
      sub: 'A gentle invitation',
      particle: 'を',
      read: { k: 0, task: 'Read the passage with the translation open' },
      produce: 'Invite someone to do a weekend activity with you.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'This week', h: 'Inviting people along',
            body: ['This week is about <b>invitations</b> and <b>suggestions</b>. First up: <b>〜ませんか</b>. It looks negative, but it is a warm “won’t you…?” — the softest way to invite.'] },
          { t: 'pat', lab: 'The pattern', h: 'verb + ませんか',
            formula: ['ますstem', 'ません', 'か'],
            mean: '<b>Won’t you ~? / Shall we ~?</b> A gentle invitation.',
            ex: [
              { jp: '一緒に映画を見ませんか。', rom: 'Issho ni eiga o mimasen ka.', en: 'Won’t you watch a movie with me?',
                bd: [['一緒に', 'together'], ['映画を', 'a movie'], ['見ませんか', 'won’t you watch']] },
              { jp: '土曜日にテニスをしませんか。', rom: 'Doyōbi ni tenisu o shimasen ka.', en: 'Won’t you play tennis on Saturday?',
                bd: [['土曜日に', 'on Saturday'], ['テニスを', 'tennis'], ['しませんか', 'won’t you play']] }
            ] },
          { t: 'why', lab: 'Why negative = polite', h: 'Leaving room to say no',
            body: ['Asking in the <b>negative</b> (“won’t you…?”) leaves the other person space to decline, so it feels considerate. It is warmer than a flat <b>ますか</b>, which just asks about facts.'] },
          { t: 'mem', lab: 'Make it stick', h: 'ませんか = warm invite',
            items: ['<b>ませんか</b> sounds like “won’t you?” — an open hand, not a demand.'] },
          { t: 'try', lab: 'Your turn', h: 'Invite someone',
            items: ['お茶を飲む → invite them', '公園を散歩する → invite them', '昼ごはんを食べる → invite them'],
            note: 'ますstem + ませんか. Keep 一緒に up front for warmth.' }
        ]
      }
    },

    /* ---- Day 2 ---- */
    {
      focus: 'Let’s: 〜ましょう',
      sub: 'Suggesting together',
      particle: 'で',
      read: { k: 0, task: 'Listen with the text hidden, then check' },
      produce: 'Suggest where to meet and what to do, using ましょう.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'verb + ましょう',
            formula: ['ますstem', 'ましょう'],
            mean: '<b>Let’s ~.</b> You assume the other person is on board.',
            ex: [
              { jp: '一緒に帰りましょう。', rom: 'Issho ni kaerimashō.', en: 'Let’s go home together.',
                bd: [['一緒に', 'together'], ['帰りましょう', 'let’s go home']] },
              { jp: 'ロビーで待ちましょう。', rom: 'Robī de machimashō.', en: 'Let’s wait in the lobby.',
                bd: [['ロビーで', 'in the lobby'], ['待ちましょう', 'let’s wait']] }
            ] },
          { t: 'p', lab: 'ませんか vs ましょう', h: 'Ask first, then rally',
            body: ['<b>ませんか</b> <i>asks</i> — “want to?” <b>ましょう</b> <i>proposes as a done deal</i> — “let’s!” Often you invite with <b>ませんか</b>, and once they agree, switch to <b>ましょう</b> to set the plan.'] },
          { t: 'warn', lab: 'Watch out', h: 'Same stem, new tail',
            items: [
              { x: '食べるましょう。', o: '食べましょう。', n: 'Drop る first, then add ましょう to the stem: 食べ + ましょう.' },
              { x: '帰るましょう。', o: '帰りましょう。', n: 'ましょう attaches to the ますstem only: 帰り + ましょう.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'ましょう = let’s',
            items: ['<b>ましょう</b> = “let’s.” You are already walking that way together.'] },
          { t: 'try', lab: 'Your turn', h: 'Make a plan',
            items: ['ここで写真を撮る → let’s', '駅で会う → let’s', '少し休む → let’s'],
            note: 'ますstem + ましょう.' }
        ]
      }
    },

    /* ---- Day 3 ---- */
    {
      focus: 'Shall I / shall we? 〜ましょうか',
      sub: 'Offers and gentle suggestions',
      particle: 'か',
      read: { k: 1, task: 'Read the new passage with the translation' },
      produce: 'Offer to help someone with two different things.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'verb + ましょうか',
            formula: ['ますstem', 'ましょう', 'か'],
            mean: '<b>Shall I ~? / Shall we ~?</b> Add か to check if it is wanted.',
            ex: [
              { jp: '荷物を持ちましょうか。', rom: 'Nimotsu o mochimashō ka.', en: 'Shall I carry your bags?',
                bd: [['荷物を', 'your bags'], ['持ちましょうか', 'shall I carry']] },
              { jp: 'そろそろ行きましょうか。', rom: 'Sorosoro ikimashō ka.', en: 'Shall we get going soon?',
                bd: [['そろそろ', 'about now'], ['行きましょうか', 'shall we go']] }
            ] },
          { t: 'p', lab: 'Two meanings', h: 'Shall I, or shall we?',
            body: ['Context decides. If <b>you alone</b> will act, it is an <b>offer</b>: “Shall I open the window?” If it is <b>both of you</b>, it is a <b>suggestion</b>: “Shall we go?” Same form — read the situation.'] },
          { t: 'why', lab: 'Why add か', h: 'か checks their wish',
            body: ['<b>ましょう</b> alone decides; adding <b>か</b> turns it into a question that hands the choice back — “is that okay with you?” That is what makes an offer feel polite rather than pushy.'] },
          { t: 'mem', lab: 'Make it stick', h: 'か = your call',
            items: ['<b>ましょうか</b> = “want me to?” or “shall we?” The <b>か</b> passes the decision to them.'] },
          { t: 'try', lab: 'Your turn', h: 'Offer or suggest',
            items: ['窓を開ける → shall I?', '手伝う → shall I help?', '休憩する → shall we?'],
            note: 'ますstem + ましょうか.' }
        ]
      }
    },

    /* ---- Day 4 ---- */
    {
      focus: 'Casual invites: 〜ない？ and 〜よう',
      sub: 'Inviting friends, plainly',
      particle: 'よ',
      read: { k: 1, task: 'Shadow the passage — a half-second behind' },
      produce: 'Invite a close friend to hang out, casually.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'Casual invite', h: 'plain negative + ？',
            formula: ['plain negative', '？'],
            mean: '<b>Wanna ~?</b> The casual cousin of ませんか.',
            ex: [
              { jp: '一緒に行かない？', rom: 'Issho ni ikanai?', en: 'Wanna go together?',
                bd: [['一緒に', 'together'], ['行かない', 'not go → wanna go?']] },
              { jp: '今日、映画見ない？', rom: 'Kyō, eiga minai?', en: 'Wanna watch a movie today?',
                bd: [['映画', 'a movie'], ['見ない', 'not watch → wanna watch?']] }
            ] },
          { t: 'pat', lab: 'Casual let’s', h: 'plain volitional',
            formula: ['plain volitional', '(＋よ)'],
            mean: '<b>Let’s ~ / I’ll ~.</b> The casual ましょう, often with よ.',
            ex: [
              { jp: 'お茶でも飲もうよ。', rom: 'Ocha demo nomō yo.', en: 'Let’s grab some tea or something.',
                bd: [['お茶でも', 'tea or something'], ['飲もう', 'let’s drink'], ['よ', 'inviting nudge']] },
              { jp: 'そろそろ行こう。', rom: 'Sorosoro ikō.', en: 'Let’s head out soon.',
                bd: [['そろそろ', 'about now'], ['行こう', 'let’s go']] }
            ] },
          { t: 'why', lab: 'Why よ here', h: 'よ nudges warmly',
            body: ['With friends, <b>ない？</b> invites and the <b>volitional</b> proposes. Tag <b>よ</b> onto the volitional (<b>飲もうよ</b>) to add a friendly push — “c’mon, let’s.” Tomorrow you’ll build these volitional forms.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Drop the polish',
            items: ['<b>ませんか → ない？</b> and <b>ましょう → volitional (＋よ)</b>. Same moves, casual tail.'] },
          { t: 'try', lab: 'Your turn', h: 'Invite a friend',
            items: ['ご飯を食べる → wanna eat?', '公園に行く → let’s go', 'ちょっと休む → let’s rest'],
            note: 'ない？ to ask, volitional (＋よ) to rally.' }
        ]
      }
    },

    /* ---- Day 5 ---- */
    {
      focus: 'Building the volitional',
      sub: '行こう・食べよう・しよう・来よう',
      particle: 'に',
      read: { k: 2, task: 'Read the third passage on your own' },
      produce: 'Say four “let’s” plans in plain form, one for each verb type.',
      lesson: {
        min: 6,
        secs: [
          { t: 'tf', lab: 'The rules', h: 'How to make the volitional',
            intro: 'Three groups, three moves. This is the plain form behind ましょう.',
            rows: [
              { g: 'ru-verbs', r: '食べる → 食べよう', n: 'drop る, add よう' },
              { g: 'u-verbs', r: '行く → 行こう', n: 'last sound to the -o row, add う' },
              { g: 'する', r: 'する → しよう', n: 'irregular' },
              { g: '来る', r: '来る → 来よう', n: 'irregular (こよう)' }
            ],
            note: 'u-verb tip: 飲む→飲もう, 話す→話そう, 待つ→待とう, 帰る→帰ろう.' },
          { t: 'pat', lab: 'In a sentence', h: 'Plain “let’s”',
            formula: ['volitional', '(＋か / よ)'],
            mean: 'Suggest or resolve, casually.',
            ex: [
              { jp: '週末、どこに行こうか。', rom: 'Shūmatsu, doko ni ikō ka.', en: 'Where shall we go this weekend?',
                bd: [['どこに', 'where to'], ['行こうか', 'shall we go']] },
              { jp: '今晩、何を食べようか。', rom: 'Konban, nani o tabeyō ka.', en: 'What shall we eat tonight?',
                bd: [['何を', 'what'], ['食べようか', 'shall we eat']] }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'The -o row, not -a',
            items: [
              { x: '行かう', o: '行こう', n: 'u-verbs shift to the -o row: か → こ, then add う.' },
              { x: '食べよ', o: '食べよう', n: 'ru-verbs need the full よう, not just よ.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Same engine as ましょう',
            items: ['<b>ましょう</b> is just the polite coat over the <b>volitional</b>: 行こう ↔ 行きましょう, 食べよう ↔ 食べましょう.'] },
          { t: 'try', lab: 'Your turn', h: 'Conjugate it',
            items: ['飲む →', '見る →', 'する →', '来る →'],
            note: 'Answers: 飲もう / 見よう / しよう / 来よう.' }
        ]
      }
    },

    /* ---- Day 6 ---- */
    {
      focus: 'Yes please, or maybe not',
      sub: 'いいですね / ちょっと…',
      particle: 'から',
      read: { k: 2, task: 'Dictation — listen and write it, then compare' },
      produce: 'Accept one invitation and gently decline another.',
      lesson: {
        min: 6,
        secs: [
          { t: 'tf', lab: 'Two replies', h: 'Say yes, or soften a no',
            intro: 'When someone invites you, you either jump in or bow out kindly.',
            rows: [
              { g: 'Accept', r: 'いいですね。行きましょう。', n: 'warm yes — sounds good, let’s go' },
              { g: 'Decline', r: 'すみません、ちょっと…', n: 'trail off; the no is understood' },
              { g: 'Reason', r: '用事がありますから…', n: 'から softens: because I have an errand' }
            ],
            note: 'A trailing <b>ちょっと…</b> is already a polite refusal — you don’t need to say the word “no.”' },
          { t: 'pat', lab: 'In use', h: 'A soft decline',
            formula: ['reason', 'から', '…'],
            mean: '<b>から</b> gives the reason, then the sentence fades out — no blunt refusal.',
            ex: [
              { jp: 'すみません、今日は用事がありますから…', rom: 'Sumimasen, kyō wa yōji ga arimasu kara…', en: 'Sorry, I have an errand today, so…',
                bd: [['用事が', 'an errand'], ['ありますから', 'because I have'], ['…', 'trails off']] },
              { jp: 'いいですね、ぜひ行きましょう。', rom: 'Ii desu ne, zehi ikimashō.', en: 'Sounds great — let’s definitely go.',
                bd: [['いいですね', 'sounds good'], ['ぜひ', 'by all means'], ['行きましょう', 'let’s go']] }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'Don’t over-explain a no',
            items: [
              { x: 'いいえ、行きません。', o: 'すみません、ちょっと用事が…', n: 'A flat いいえ、行きません sounds cold. Soften with ちょっと and a reason.' },
              { x: 'はい、行きます。', o: 'いいですね、行きましょう。', n: 'To accept warmly, add いいですね rather than a plain はい.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'ちょっと… = polite no',
            items: ['<b>ちょっと…</b> plus a fade-out is the kindest refusal. Add <b>から</b> to hint at a reason.'] },
          { t: 'try', lab: 'Your turn', h: 'Reply to an invite',
            items: ['Accept a dinner invite warmly', 'Decline a Saturday plan with ちょっと…', 'Add a reason with から'],
            note: 'Accept: いいですね. Decline: すみません、ちょっと…（〜から）.' }
        ]
      }
    },

    /* ---- Day 7 — Review ---- */
    {
      focus: 'Review: inviting',
      sub: 'Pull the week together',
      particle: 'ね',
      read: { k: 0, task: 'Re-read any passage and say a one-line summary aloud' },
      produce: 'Write a short invite-and-reply dialogue using three of the week’s forms.',
      lesson: {
        min: 5,
        secs: [
          { t: 'p', lab: 'Recap', h: 'From polite to casual',
            body: ['Invite: <b>〜ませんか</b>. Propose: <b>〜ましょう</b>. Offer or suggest: <b>〜ましょうか</b>. Casual: <b>〜ない？</b> and the <b>volitional</b> (行こう・食べよう・しよう・来よう). Reply: <b>いいですね</b> or a soft <b>ちょっと…</b>. Tag <b>ね</b> to sound friendly: <b>いい天気ですね</b>.'] },
          { t: 'warn', lab: 'Last check', h: 'The classic traps',
            items: [
              { x: '食べるましょう。', o: '食べましょう。', n: 'Attach to the stem: 食べ + ましょう.' },
              { x: '行かう。', o: '行こう。', n: 'u-verbs go to the -o row before う.' },
              { x: 'いいえ、行きません。', o: 'すみません、ちょっと…', n: 'Soften refusals; don’t decline bluntly.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'One ladder',
            items: ['Polite <b>ましょう</b> ↔ casual <b>volitional</b>. Same meaning, different jacket.'] },
          { t: 'try', lab: 'Your turn', h: 'Mixed practice',
            items: ['Invite a coworker to lunch politely', 'Offer to carry something', 'Invite a friend casually with ない？', 'Accept warmly with いいですね'],
            note: 'Use at least three different forms.' }
        ]
      }
    }

  ]
};

/* ===================== WEEK 10 — Potential form (can do) ===================== */
U[10] = {
  title: 'Potential form (can do)',
  days: [

    /* ---- Day 1 ---- */
    {
      focus: 'Can do: the potential form',
      sub: 'ru-verbs → られる',
      particle: 'は',
      read: { k: 0, task: 'Read the passage with the translation open' },
      produce: 'Say three things you can do, using ru-verbs.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'This week', h: 'From “do” to “can do”',
            body: ['This week: the <b>potential form</b> — “can / be able to.” <b>食べる</b> (eat) becomes <b>食べられる</b> (can eat). We start with <b>ru-verbs</b>, the easy group.'] },
          { t: 'pat', lab: 'The rule', h: 'ru-verb → られる',
            formula: ['drop る', '+', 'られる'],
            mean: '<b>Can ~ / be able to ~.</b> Just swap る for られる.',
            ex: [
              { jp: '私はさしみが食べられます。', rom: 'Watashi wa sashimi ga taberaremasu.', en: 'I can eat sashimi.',
                bd: [['さしみが', 'sashimi'], ['食べられます', 'can eat']] },
              { jp: '朝六時に起きられます。', rom: 'Asa roku-ji ni okiraremasu.', en: 'I can get up at six in the morning.',
                bd: [['六時に', 'at six'], ['起きられます', 'can get up']] }
            ] },
          { t: 'tf', lab: 'More ru-verbs', h: 'Same move every time',
            rows: [
              { g: '食べる', r: '食べる → 食べられる', n: 'can eat' },
              { g: '見る', r: '見る → 見られる', n: 'can see / watch' },
              { g: '起きる', r: '起きる → 起きられる', n: 'can get up' },
              { g: '寝る', r: '寝る → 寝られる', n: 'can sleep' }
            ] },
          { t: 'why', lab: 'Why られる', h: '“Can” is its own verb',
            body: ['<b>食べられる</b> is a full verb in its own right — it conjugates like any ru-verb: <b>食べられます、食べられない、食べられて</b>. So once you can build it, you can use it anywhere a verb goes.'] },
          { t: 'mem', lab: 'Make it stick', h: 'る out, られる in',
            items: ['ru-verbs: peel off <b>る</b>, snap on <b>られる</b>. That is the whole trick.'] },
          { t: 'try', lab: 'Your turn', h: 'Make it potential',
            items: ['見る →', '起きる →', '出る →'],
            note: 'Answers: 見られる / 起きられる / 出られる.' }
        ]
      }
    },

    /* ---- Day 2 ---- */
    {
      focus: 'u-verbs can-do',
      sub: '書く→書ける, 飲む→飲める',
      particle: 'も',
      read: { k: 0, task: 'Listen with the text hidden, then check' },
      produce: 'Say two things you can do and two you can’t, using u-verbs.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The rule', h: 'u-verb → e-row + る',
            formula: ['last sound → -e row', '+', 'る'],
            mean: 'Shift the final sound down to the <b>-e</b> row, then add る.',
            ex: [
              { jp: '漢字が書けます。', rom: 'Kanji ga kakemasu.', en: 'I can write kanji.',
                bd: [['漢字が', 'kanji'], ['書けます', 'can write']] },
              { jp: 'お酒も飲めます。', rom: 'Osake mo nomemasu.', en: 'I can drink alcohol too.',
                bd: [['お酒も', 'alcohol too'], ['飲めます', 'can drink']] }
            ] },
          { t: 'tf', lab: 'The pattern', h: '-u becomes -e, add る',
            intro: 'Move the last kana from the -u row down to the -e row.',
            rows: [
              { g: '書く (kaku)', r: '書く → 書ける', n: 'ku → ke' },
              { g: '飲む (nomu)', r: '飲む → 飲める', n: 'mu → me' },
              { g: '話す (hanasu)', r: '話す → 話せる', n: 'su → se' },
              { g: '待つ (matsu)', r: '待つ → 待てる', n: 'tsu → te' },
              { g: '買う (kau)', r: '買う → 買える', n: 'u → e' }
            ],
            note: 'The result always ends in <b>-eru</b>, so it now behaves like a ru-verb (書ける → 書けます).' },
          { t: 'why', lab: 'Why it feels neat', h: 'Everything lands on -eru',
            body: ['Here is the payoff: every potential verb, from either group, ends in <b>-eru</b> and conjugates like a ru-verb. <b>書ける → 書けます → 書けない</b>. Learn the shape once, reuse it everywhere.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Down a row',
            items: ['u-verbs: slide the tail <b>down to -e</b>, then add <b>る</b>. か→け, む→め, す→せ.'] },
          { t: 'try', lab: 'Your turn', h: 'Make it potential',
            items: ['読む →', '泳ぐ →', '話す →'],
            note: 'Answers: 読める / 泳げる / 話せる.' }
        ]
      }
    },

    /* ---- Day 3 ---- */
    {
      focus: 'The can-do irregulars',
      sub: 'する→できる, 来る→来られる',
      particle: 'に',
      read: { k: 1, task: 'Read the new passage with the translation' },
      produce: 'Say whether you can come to an event and what you can do there.',
      lesson: {
        min: 6,
        secs: [
          { t: 'tf', lab: 'The oddballs', h: 'Memorize these three',
            intro: 'Two true irregulars, plus a ru-verb worth pinning down.',
            rows: [
              { g: 'する', r: 'する → できる', n: 'a whole new word: “can do”' },
              { g: '来る', r: '来る → 来られる', n: 'こられる (casual 来れる)' },
              { g: '見る', r: '見る → 見られる', n: 'a ru-verb, but easy to mix up' }
            ],
            note: '<b>できる</b> is the odd one — it looks nothing like する, so learn it as its own word.' },
          { t: 'pat', lab: 'In use', h: 'Can you come?',
            formula: ['place に', '来られる'],
            mean: 'Talk about being able to come or attend.',
            ex: [
              { jp: 'パーティーに来られますか。', rom: 'Pātī ni koraremasu ka.', en: 'Can you come to the party?',
                bd: [['パーティーに', 'to the party'], ['来られますか', 'can you come']] },
              { jp: '土曜日なら来られます。', rom: 'Doyōbi nara koraremasu.', en: 'If it’s Saturday, I can come.',
                bd: [['土曜日なら', 'if it’s Saturday'], ['来られます', 'can come']] }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'する doesn’t take られる',
            items: [
              { x: 'サッカーがされます。', o: 'サッカーができます。', n: 'The potential of する is できる — never される for “can do.”' },
              { x: '来れます (in formal writing)', o: '来られます', n: '来れる is fine in speech, but 来られる is the standard, safe-in-writing form.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'する’s secret twin',
            items: ['<b>する → できる.</b> It hides its shape, so treat <b>できる</b> as a brand-new word to memorize.'] },
          { t: 'try', lab: 'Your turn', h: 'Make it potential',
            items: ['する →', '来る →', '見る →'],
            note: 'Answers: できる / 来られる（来れる） / 見られる.' }
        ]
      }
    },

    /* ---- Day 4 ---- */
    {
      focus: 'The object flips to が',
      sub: '日本語が話せる',
      particle: 'が',
      read: { k: 1, task: 'Shadow the passage — a half-second behind' },
      produce: 'Say three abilities, using が to mark what you can do.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The shift', h: 'を becomes が',
            formula: ['object が', 'potential verb'],
            mean: 'With the potential, the object usually takes <b>が</b>, not を.',
            ex: [
              { jp: '日本語が話せます。', rom: 'Nihongo ga hanasemasu.', en: 'I can speak Japanese.',
                bd: [['日本語が', 'Japanese'], ['話せます', 'can speak']] },
              { jp: '車が運転できます。', rom: 'Kuruma ga unten dekimasu.', en: 'I can drive a car.',
                bd: [['車が', 'a car'], ['運転できます', 'can drive']] }
            ] },
          { t: 'why', lab: 'Why が', h: '“Can” describes a state',
            body: ['The potential is not really an <i>action</i> on the object — it describes your <b>ability</b>, a kind of state. Japanese marks the thing you can handle with <b>が</b>, the same が used for likes (<b>好き</b>) and skills (<b>上手</b>). Compare <b>日本語を話す</b> (I speak) with <b>日本語が話せる</b> (I can speak).'] },
          { t: 'warn', lab: 'Watch out', h: 'Don’t keep を',
            items: [
              { x: '日本語を話せます。', o: '日本語が話せます。', n: 'Textbook Japanese switches を to が with the potential form.' },
              { x: '車を運転できます。', o: '車が運転できます。', n: 'Same rule: the object takes が before できる.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Ability = が',
            items: ['Can-do is a state, not an action — so the object rides on <b>が</b>, like <b>好き</b> and <b>できる</b>.'] },
          { t: 'try', lab: 'Your turn', h: 'Mark it with が',
            items: ['ピアノ / 弾ける — I can play piano', '漢字 / 読める — I can read kanji', '英語 / 話せる — I can speak English'],
            note: 'Put が on the object: 〜が〜（ら）れる.' }
        ]
      }
    },

    /* ---- Day 5 ---- */
    {
      focus: 'できる and ことができる',
      sub: 'Two more ways to say can',
      particle: 'を',
      read: { k: 2, task: 'Read the third passage on your own' },
      produce: 'Say two abilities with できる and two with ことができる.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'Noun + できる', h: 'できる = can do it',
            formula: ['noun が', 'できる'],
            mean: '<b>できる</b> after a noun means “can do it” or “is possible.”',
            ex: [
              { jp: '私はピアノができます。', rom: 'Watashi wa piano ga dekimasu.', en: 'I can play the piano.',
                bd: [['ピアノが', 'piano'], ['できます', 'can do']] },
              { jp: 'ここで予約ができます。', rom: 'Koko de yoyaku ga dekimasu.', en: 'You can make a reservation here.',
                bd: [['予約が', 'a reservation'], ['できます', 'is possible']] }
            ] },
          { t: 'pat', lab: 'Verb + ことができる', h: 'The bookish can-do',
            formula: ['dictionary verb', 'ことができる'],
            mean: '<b>[verb] + ことができる</b> = “be able to [verb].” A touch more formal.',
            ex: [
              { jp: '私は日本語を話すことができます。', rom: 'Watashi wa nihongo o hanasu koto ga dekimasu.', en: 'I am able to speak Japanese.',
                bd: [['日本語を', 'Japanese'], ['話すことが', 'the act of speaking'], ['できます', 'can do']] },
              { jp: 'ここで泳ぐことができます。', rom: 'Koko de oyogu koto ga dekimasu.', en: 'You can swim here.',
                bd: [['泳ぐことが', 'swimming'], ['できます', 'is possible']] }
            ] },
          { t: 'why', lab: 'Why を survives here', h: 'The verb keeps its own object',
            body: ['Inside <b>ことができる</b>, the verb stays normal, so it keeps its usual <b>を</b>: <b>日本語を話すことができる</b>. Only the short potential (<b>話せる</b>) triggers the を→が switch. Both mean the same; <b>ことができる</b> just sounds more formal or written.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Two routes, one meaning',
            items: ['<b>話せる</b> = 話す<b>ことができる</b>. Short form for speech, <b>ことができる</b> for formal or written.'] },
          { t: 'try', lab: 'Your turn', h: 'Say it two ways',
            items: ['泳ぐ → short form and ことができる', '運転する → use できる', '読む → use ことができる'],
            note: 'Short: 泳げる. Long: 泳ぐことができる.' }
        ]
      }
    },

    /* ---- Day 6 ---- */
    {
      focus: 'The ら-drop: 見れる, 食べれる',
      sub: 'Casual potential and register',
      particle: 'よ',
      read: { k: 2, task: 'Dictation — listen and write it, then compare' },
      produce: 'Write one casual sentence with a ら-less potential, then its full-form twin.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'Real speech', h: 'When ら goes missing',
            body: ['In everyday casual Japanese, ru-verb and 来る potentials often <b>drop the ら</b>: <b>食べられる → 食べれる</b>, <b>見られる → 見れる</b>, <b>来られる → 来れる</b>. This is called <b>ら抜き言葉</b> (“ra-dropped words”).'] },
          { t: 'tf', lab: 'Full vs dropped', h: 'Two registers side by side',
            rows: [
              { g: '食べる', r: '食べられる → 食べれる', n: 'casual drops ら' },
              { g: '見る', r: '見られる → 見れる', n: 'casual drops ら' },
              { g: '来る', r: '来られる → 来れる', n: 'casual drops ら' }
            ],
            note: 'u-verbs never had a ら, so nothing changes there: <b>書ける</b> stays 書ける.' },
          { t: 'warn', lab: 'Watch out', h: 'Know your setting',
            items: [
              { x: '面接で「食べれます」', o: '面接では「食べられます」', n: 'In interviews, tests, or writing, keep the ら — 食べられます.' },
              { x: '書けれる', o: '書ける', n: 'The ら-drop only touches ru-verbs and 来る; don’t add extra sounds to u-verbs.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Friends yes, forms no',
            items: ['<b>ら抜き</b> is fine with friends (<b>見れる</b>), but write and speak the <b>full ら</b> form (<b>見られる</b>) when it counts.'] },
          { t: 'try', lab: 'Your turn', h: 'Switch registers',
            items: ['食べられる → casual', '見られる → casual', 'Now say each one back in full form'],
            note: 'Casual: 食べれる / 見れる. Formal: keep the ら.' }
        ]
      }
    },

    /* ---- Day 7 — Review ---- */
    {
      focus: 'Review: potential',
      sub: 'Pull the week together',
      particle: 'ね',
      read: { k: 0, task: 'Re-read any passage and say a one-line summary aloud' },
      produce: 'Write three “I can / can’t” sentences across all verb types.',
      lesson: {
        min: 5,
        secs: [
          { t: 'p', lab: 'Recap', h: 'Every route to “can”',
            body: ['ru-verbs: <b>食べる → 食べられる</b>. u-verbs: <b>書く → 書ける</b> (down to -e, add る). Irregulars: <b>する → できる</b>, <b>来る → 来られる</b>. The object takes <b>が</b>: <b>日本語が話せる</b>. Also <b>ことができる</b> for a formal feel. Tag <b>ね</b> to check in: <b>漢字が読めますね</b>.'] },
          { t: 'warn', lab: 'Last check', h: 'The classic traps',
            items: [
              { x: '日本語を話せます。', o: '日本語が話せます。', n: 'A potential object takes が.' },
              { x: 'サッカーがされます。', o: 'サッカーができます。', n: 'する → できる, not される.' },
              { x: '行けれる', o: '行ける', n: 'u-verbs are already potential-ready; don’t double up.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'All roads end in -eru / -rareru',
            items: ['Whatever the group, the result conjugates like a <b>ru-verb</b>: 〜ます, 〜ない, 〜て all behave normally.'] },
          { t: 'try', lab: 'Your turn', h: 'Mixed practice',
            items: ['Say you can eat natto (食べる)', 'Say you can write your name in kanji (書く)', 'Say you can’t come tomorrow (来る)', 'Add ね to one sentence'],
            note: 'Mark abilities with が. Mix all three verb groups.' }
        ]
      }
    }

  ]
};

/* ===================== WEEK 11 — Listing & simultaneous actions ===================== */
U[11] = {
  title: 'Listing & simultaneous actions',
  days: [

    /* ---- Day 1 ---- */
    {
      focus: 'Do things like A and B: 〜たり〜たり',
      sub: 'A sampling of activities',
      particle: 'で',
      read: { k: 0, task: 'Read the passage with the translation open' },
      produce: 'List three things you do on a lazy day, using たり.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'This week', h: 'Two ways to combine actions',
            body: ['This week you’ll <b>list</b> and <b>overlap</b> actions. First: <b>〜たり〜たりする</b> — “do things <i>like</i> A and B.” It gives a couple of <b>examples</b>, not a complete list.'] },
          { t: 'pat', lab: 'The pattern', h: '〜たり〜たりする',
            formula: ['Vたり', 'Vたり', 'する'],
            mean: '<b>Do things like A and B (among others).</b> A sample, in no fixed order.',
            ex: [
              { jp: '家でテレビを見たり、本を読んだりします。', rom: 'Ie de terebi o mitari, hon o yondari shimasu.', en: 'At home I do things like watch TV and read books.',
                bd: [['家で', 'at home'], ['見たり', 'watch and…'], ['読んだり', 'read and…'], ['します', 'do such things']] },
              { jp: '週末は掃除をしたり、買い物をしたりします。', rom: 'Shūmatsu wa sōji o shitari, kaimono o shitari shimasu.', en: 'On weekends I do things like cleaning and shopping.',
                bd: [['掃除をしたり', 'clean and…'], ['買い物をしたり', 'shop and…'], ['します', 'do such things']] }
            ] },
          { t: 'why', lab: 'Why “like”', h: 'Examples, not a full list',
            body: ['<b>たり</b> signals “these are just <i>samples</i> of what I do,” quietly implying “…and other things too.” That is the big contrast with the <b>て-form</b>, which lists actions as a complete sequence (you’ll meet that on Day 5).'] },
          { t: 'mem', lab: 'Make it stick', h: 'たり = for example',
            items: ['Hear <b>たり…たり</b> as “stuff <i>like</i> ~ and ~.” It samples; it doesn’t finish the list.'] },
          { t: 'try', lab: 'Your turn', h: 'Sample your day',
            items: ['Lazy Sunday — name two things you do', 'Say what you do at a café', 'Say what you do on vacation'],
            note: 'End the set with する: 〜たり〜たりします.' }
        ]
      }
    },

    /* ---- Day 2 ---- */
    {
      focus: 'Building たり',
      sub: 'past-base た + り',
      particle: 'と',
      read: { k: 0, task: 'Listen with the text hidden, then check' },
      produce: 'Turn four verbs into their たり form, then use two in a sentence.',
      lesson: {
        min: 6,
        secs: [
          { t: 'tf', lab: 'The rule', h: 'Take the past, add り',
            intro: 'たり is built off the plain past (the た-form): just add り.',
            rows: [
              { g: '見る', r: '見た → 見たり', n: 'a ru-verb' },
              { g: '読む', r: '読んだ → 読んだり', n: 'んだ → んだり' },
              { g: '行く', r: '行った → 行ったり', n: 'った → ったり' },
              { g: 'する', r: 'した → したり', n: 'irregular' },
              { g: '来る', r: '来た → 来たり', n: 'irregular (きたり)' }
            ],
            note: 'If you know the <b>た-form</b>, you already know <b>たり</b> — the sound (た or だ) carries straight over.' },
          { t: 'pat', lab: 'In a sentence', h: 'Past base, plus り',
            formula: ['た-form', '＋り', '…する'],
            mean: 'Attach り to the plain past, then close with する.',
            ex: [
              { jp: '友達と歌ったり、踊ったりしました。', rom: 'Tomodachi to utattari, odottari shimashita.', en: 'With friends we did things like sing and dance.',
                bd: [['友達と', 'with friends'], ['歌ったり', 'sang and…'], ['踊ったり', 'danced and…'], ['しました', 'did such things']] },
              { jp: '休みの日は寝たり、ゲームをしたりします。', rom: 'Yasumi no hi wa netari, gēmu o shitari shimasu.', en: 'On days off I do things like sleep and play games.',
                bd: [['寝たり', 'sleep and…'], ['ゲームをしたり', 'game and…'], ['します', 'do such things']] }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'Match the past sound',
            items: [
              { x: '読むたり', o: '読んだり', n: 'Build off the past: 読んだ → 読んだり, not the dictionary form.' },
              { x: '行きたり', o: '行ったり', n: 'The past is 行った (irregular), so it is 行ったり.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'た → たり',
            items: ['<b>た-form + り.</b> 食べた → 食べたり, 行った → 行ったり. The tricky part is just the past tense you already know.'] },
          { t: 'try', lab: 'Your turn', h: 'Make たり',
            items: ['飲む →', '遊ぶ →', 'する →', '来る →'],
            note: 'Answers: 飲んだり / 遊んだり / したり / 来たり.' }
        ]
      }
    },

    /* ---- Day 3 ---- */
    {
      focus: 'Doing A while B: 〜ながら',
      sub: 'Two actions at once',
      particle: 'を',
      read: { k: 1, task: 'Read the new passage with the translation' },
      produce: 'Say two things you often do at the same time.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'ますstem + ながら',
            formula: ['ますstem', 'ながら', 'main verb'],
            mean: '<b>Do B while doing A.</b> The main action comes last.',
            ex: [
              { jp: '音楽を聞きながら勉強します。', rom: 'Ongaku o kikinagara benkyō shimasu.', en: 'I study while listening to music.',
                bd: [['音楽を聞き', 'listening to music'], ['ながら', 'while'], ['勉強します', 'study (main)']] },
              { jp: 'テレビを見ながらご飯を食べます。', rom: 'Terebi o minagara gohan o tabemasu.', en: 'I eat while watching TV.',
                bd: [['テレビを見', 'watching TV'], ['ながら', 'while'], ['食べます', 'eat (main)']] }
            ] },
          { t: 'tf', lab: 'Making it', h: 'The same stem as ます',
            intro: 'ながら attaches to the ますstem — the same stem behind ましょう.',
            rows: [
              { g: '聞く', r: '聞きます → 聞きながら', n: 'while listening' },
              { g: '食べる', r: '食べます → 食べながら', n: 'while eating' },
              { g: '歩く', r: '歩きます → 歩きながら', n: 'while walking' }
            ] },
          { t: 'why', lab: 'Why the order matters', h: 'The last verb is the point',
            body: ['In <b>音楽を聞きながら勉強する</b>, the <b>main</b> activity is <i>studying</i>; listening is the background. Whatever comes <b>after ながら</b> is what you are really doing — flip them and you change the meaning.'] },
          { t: 'mem', lab: 'Make it stick', h: 'ながら = meanwhile',
            items: ['<b>ますstem + ながら</b> = “while ~.” The <b>real</b> action always waits until after ながら.'] },
          { t: 'try', lab: 'Your turn', h: 'Overlap two actions',
            items: ['歩く / 音楽を聞く → while walking', 'コーヒーを飲む / 新聞を読む', '歌う / 料理する'],
            note: 'Put the background action on ながら, the main one last.' }
        ]
      }
    },

    /* ---- Day 4 ---- */
    {
      focus: 'ながら’s two rules',
      sub: 'Same subject, background action',
      particle: 'は',
      read: { k: 1, task: 'Shadow the passage — a half-second behind' },
      produce: 'Write one correct ながら sentence and explain who does both actions.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'The fine print', h: 'Two conditions for ながら',
            body: ['<b>ながら</b> has two rules. <b>One:</b> the <i>same person</i> does both actions. <b>Two:</b> the ながら part is the <b>secondary</b>, background action; the main verb carries the real point.'] },
          { t: 'pat', lab: 'One subject', h: 'Same doer, both verbs',
            formula: ['subject は', 'Aながら', 'B'],
            mean: 'One person, two overlapping actions.',
            ex: [
              { jp: '妹はスマホを見ながら歩きます。', rom: 'Imōto wa sumaho o minagara arukimasu.', en: 'My little sister walks while looking at her phone.',
                bd: [['妹は', 'my sister'], ['見ながら', 'while looking'], ['歩きます', 'walks (main)']] },
              { jp: '父は新聞を読みながらコーヒーを飲みます。', rom: 'Chichi wa shinbun o yominagara kōhī o nomimasu.', en: 'My dad drinks coffee while reading the paper.',
                bd: [['父は', 'my dad'], ['読みながら', 'while reading'], ['飲みます', 'drinks (main)']] }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'Don’t split the subject',
            items: [
              { x: '私が歌いながら、妹が踊ります。', o: '妹は歌いながら踊ります。', n: 'ながら needs one subject for both actions. Two people → use 〜て or 〜とき.' },
              { x: '食べながら宿題が終わりました。', o: 'テレビを見ながら宿題をしました。', n: 'Both verbs must be willful actions by the same person, not a result.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'One body, two hands',
            items: ['<b>ながら</b> = one person doing two things at once. Different people? <b>ながら</b> won’t work.'] },
          { t: 'try', lab: 'Your turn', h: 'Check the rules',
            items: ['Say you eat while watching TV', 'Fix this: 私が話しながら友達が聞きます', 'Say what a family member does, with ながら'],
            note: 'Same subject; the background action goes on ながら.' }
        ]
      }
    },

    /* ---- Day 5 ---- */
    {
      focus: 'て vs たり: sequence or sample',
      sub: 'Complete list vs examples',
      particle: 'に',
      read: { k: 2, task: 'Read the third passage on your own' },
      produce: 'Describe your morning twice: once with て (in order), once with たり (examples).',
      lesson: {
        min: 6,
        secs: [
          { t: 'tf', lab: 'The contrast', h: 'All-in-order vs a few examples',
            intro: 'Both link actions, but they promise different things.',
            rows: [
              { g: 'て-form', r: '起きて、食べて、行きます', n: 'the full sequence, in order' },
              { g: 'たり', r: '食べたり、飲んだりします', n: 'a couple of examples, order-free' }
            ],
            note: '<b>て</b> says “I did all of these, in this order.” <b>たり</b> says “I did things <i>like</i> these.”' },
          { t: 'pat', lab: 'Side by side', h: 'Same verbs, different promise',
            formula: ['て = sequence', '／', 'たり = samples'],
            mean: 'Pick て for a full ordered list, たり for representative examples.',
            ex: [
              { jp: '朝、公園に行って、走って、帰ります。', rom: 'Asa, kōen ni itte, hashitte, kaerimasu.', en: 'In the morning I go to the park, run, and come home.',
                bd: [['公園に行って', 'go to the park and'], ['走って', 'run and'], ['帰ります', 'come home']] },
              { jp: '公園で走ったり、散歩したりします。', rom: 'Kōen de hashittari, sanpo shitari shimasu.', en: 'At the park I do things like run and take walks.',
                bd: [['走ったり', 'run and…'], ['散歩したり', 'walk and…'], ['します', 'do such things']] }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'Match the form to the meaning',
            items: [
              { x: '週末は寝て、ゲームをして、全部します。', o: '週末は寝たり、ゲームをしたりします。', n: 'For loose examples, use たり — not a full て chain.' },
              { x: '朝ごはんを食べたり、学校に行きます。', o: '朝ごはんを食べて、学校に行きます。', n: 'A fixed sequence (eat, then go) wants て, not a stray single たり.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Order vs sample',
            items: ['<b>て</b> = “and then” (all of them, in order). <b>たり</b> = “and stuff like” (a sample).'] },
          { t: 'try', lab: 'Your turn', h: 'Choose the right link',
            items: ['Morning routine in order → use て', 'Weekend hobbies as examples → use たり', 'Say which one implies “and other things too”'],
            note: 'て finishes the list; たり leaves it open.' }
        ]
      }
    },

    /* ---- Day 6 ---- */
    {
      focus: 'Stacking reasons: 〜し',
      sub: '安いし、近いし',
      particle: 'し',
      read: { k: 2, task: 'Dictation — listen and write it, then compare' },
      produce: 'Give two reasons you like a place, joined with し.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'plain form + し',
            formula: ['reason A', 'し', 'reason B', 'し'],
            mean: '<b>~ and, what’s more, ~.</b> Stacks reasons that point the same way.',
            ex: [
              { jp: 'この店は安いし、近いし、よく行きます。', rom: 'Kono mise wa yasui shi, chikai shi, yoku ikimasu.', en: 'This shop is cheap and close, so I go often.',
                bd: [['安いし', 'it’s cheap, and'], ['近いし', 'it’s close, and'], ['よく行きます', 'I go often']] },
              { jp: 'あの人は親切だし、頭もいいです。', rom: 'Ano hito wa shinsetsu da shi, atama mo ii desu.', en: 'That person is kind, and smart too.',
                bd: [['親切だし', 'is kind, and'], ['頭もいい', 'is smart too']] }
            ] },
          { t: 'why', lab: 'Why し, not から', h: 'Reasons in a bundle',
            body: ['<b>し</b> piles up reasons that lean the same way and hints “there is more where that came from.” <b>から</b> gives one clear cause. So <b>安いし、近いし</b> = “it’s cheap, it’s close (and more), <i>so…</i>” — a whole basket of reasons, not just one.'] },
          { t: 'warn', lab: 'Watch out', h: 'Use the plain form + し',
            items: [
              { x: '安いですし、近いです。', o: '安いし、近いし', n: 'In casual speech, し attaches to the plain form: 安い + し.' },
              { x: '親切し', o: '親切だし', n: 'な-adjectives and nouns need だ before し: 親切だし, 学生だし.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'し = “and what’s more”',
            items: ['<b>し</b> stacks same-direction reasons: <b>安いし、近いし…</b> — “cheap, close, <i>and then some</i>.”'] },
          { t: 'try', lab: 'Your turn', h: 'Bundle your reasons',
            items: ['Why you like your town — give two reasons with し', 'Why a café is good — 安い / おいしい', 'Add a trailing し to imply “and more”'],
            note: 'Plain form + し. Nouns and な-adjectives add だ first.' }
        ]
      }
    },

    /* ---- Day 7 — Review ---- */
    {
      focus: 'Review: listing and overlap',
      sub: 'Pull the week together',
      particle: 'ね',
      read: { k: 0, task: 'Re-read any passage and say a one-line summary aloud' },
      produce: 'Write one たり sentence, one ながら sentence, and one し sentence.',
      lesson: {
        min: 5,
        secs: [
          { t: 'p', lab: 'Recap', h: 'Four ways to join actions',
            body: ['<b>〜たり〜たりする</b> — sample actions (built on the た-form). <b>〜ながら</b> — two actions at once, same person. <b>て</b> vs <b>たり</b> — a full sequence vs examples. <b>〜し</b> — stack reasons. Tag <b>ね</b> to share the vibe: <b>いい週末でしたね</b>.'] },
          { t: 'warn', lab: 'Last check', h: 'The classic traps',
            items: [
              { x: '読むたり', o: '読んだり', n: 'たり is built on the past: 読んだ → 読んだり.' },
              { x: '私が歌いながら友達が踊ります。', o: '友達は歌いながら踊ります。', n: 'ながら needs one subject for both actions.' },
              { x: '安いですし、近いです。', o: '安いし、近いし', n: 'し attaches to the plain form.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Sample, overlap, stack',
            items: ['<b>たり</b> samples, <b>ながら</b> overlaps, <b>し</b> stacks reasons. Three different jobs.'] },
          { t: 'try', lab: 'Your turn', h: 'Mixed practice',
            items: ['Say what you do on weekends with たり', 'Say you listen to music while cooking (ながら)', 'Give two reasons you like something with し', 'Add ね to one sentence'],
            note: 'One structure each — たり, ながら, し.' }
        ]
      }
    }

  ]
};
/* block_B.js — Tomo grammar units 12–15 (bare U[] statements; no wrapper). */

/* ===================== WEEK 12 — Time relationships ===================== */
U[12] = {
  title: 'Time relationships',
  days: [

    /* ---- Day 1 ---- */
    {
      focus: 'とき is your word for “when”',
      sub: 'One frame for two events',
      particle: 'の',
      read: { k: 0, task: 'Read the passage with the translation open' },
      produce: 'Say what you do when you have free time.',
      lesson: {
        min: 5,
        secs: [
          { t: 'pat', lab: 'The pattern', h: '<b>とき</b> sets the time frame',
            formula: ['noun / na-adj / verb / i-adj', '+', 'とき'],
            mean: '<b>When ~</b> — it marks the moment or situation for the main action.',
            ex: [
              { jp: '子供のとき、京都に住んでいた。', rom: 'Kodomo no toki, Kyōto ni sunde ita.', en: 'When I was a child, I lived in Kyoto.',
                bd: [['子供のとき', 'noun + の + とき = when (I was) a child'], ['住んでいた', 'was living']] },
              { jp: '暇なとき、映画を見ます。', rom: 'Hima na toki, eiga o mimasu.', en: 'When I’m free, I watch movies.',
                bd: [['暇なとき', 'na-adj + な + とき = when free'], ['見ます', 'watch']] },
              { jp: '寒いとき、コートを着ます。', rom: 'Samui toki, kōto o kimasu.', en: 'When it’s cold, I wear a coat.',
                bd: [['寒いとき', 'i-adj attaches straight on = when cold']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'Why <b>の</b> and <b>な</b> show up',
            body: ['Before <b>とき</b>, a noun needs <b>の</b> (子供のとき) and a な-adjective needs <b>な</b> (暇なとき). Verbs and い-adjectives attach directly — nothing extra.'] },
          { t: 'warn', lab: 'Careful', h: 'Watch the connector',
            items: [
              { x: '子供とき', o: '子供のとき', n: 'A noun needs の before とき.' },
              { x: '暇とき', o: '暇なとき', n: 'A na-adjective needs な before とき.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook',
            items: ['Noun<b>の</b>とき · な-adj<b>な</b>とき · verb / い-adj attach straight on.'] },
          { t: 'try', lab: 'Your turn', h: 'Make a “when” frame',
            items: ['子供 →', '暇 →', '忙しい →'], note: 'Add とき, then finish with a main clause.' }
        ]
      }
    },

    /* ---- Day 2 ---- */
    {
      focus: 'とき: the tense decides the timing',
      sub: '行くとき vs 行ったとき',
      particle: 'を',
      read: { k: 0, task: 'Listen with the text hidden, then check' },
      produce: 'Describe one thing you buy when you travel to a new place.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'The verb before とき carries the tense',
            formula: ['行く + とき', '=', 'before', '/', '行った + とき', '=', 'after'],
            mean: 'The tense before <b>とき</b> shows whether the main action happens <b>before</b> or <b>after</b> that event.',
            ex: [
              { jp: '日本へ行くとき、かばんを買った。', rom: 'Nihon e iku toki, kaban o katta.', en: 'When I was going to Japan, I bought a bag (before I left).',
                bd: [['行くとき', 'dictionary form = before / as I leave'], ['買った', 'bought — in my own country']] },
              { jp: '日本へ行ったとき、かばんを買った。', rom: 'Nihon e itta toki, kaban o katta.', en: 'When I went to Japan, I bought a bag (after I arrived).',
                bd: [['行ったとき', 'past form = after I arrived'], ['買った', 'bought — in Japan']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'Read it as “before” vs “after”',
            body: ['With <b>行くとき</b> the trip hasn’t happened yet, so you buy the bag <b>before</b> leaving. With <b>行ったとき</b> you have already arrived, so you buy it <b>after</b> getting there.',
              'The main verb’s own tense (買った) just marks the whole story as past.'] },
          { t: 'warn', lab: 'Careful', h: 'The tense is relative, not absolute',
            items: [
              { x: '家を出たとき、電気を消す', o: '家を出るとき、電気を消す', n: 'You turn off the light as you leave — the leaving isn’t done, so use 出る.' },
              { x: '日本に行くとき、写真をたくさん撮った', o: '日本に行ったとき、写真をたくさん撮った', n: 'You took photos after arriving — use past 行った.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook',
            items: ['<b>Dictionary + とき</b> = before it happens. <b>た + とき</b> = after it’s done.'] },
          { t: 'try', lab: 'Your turn', h: 'Pick the tense',
            items: ['出かける / 出かけた + とき … (lock the door)', '日本に行く / 行った + とき … (bought souvenirs)'],
            note: 'Dictionary for “before,” past for “after.”' }
        ]
      }
    },

    /* ---- Day 3 ---- */
    {
      focus: '〜前に: before doing',
      sub: 'Dictionary form + 前に',
      particle: 'に',
      read: { k: 1, task: 'Read the new passage with the translation' },
      produce: 'Say two things you do before you sleep.',
      lesson: {
        min: 5,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'Dictionary form + <b>前に</b>',
            formula: ['dictionary verb', '+', '前に', '=', 'before doing'],
            mean: '<b>Before ~ing.</b> Always the <b>dictionary</b> form, even about the past.',
            ex: [
              { jp: '寝る前に、歯を磨きます。', rom: 'Neru mae ni, ha o migakimasu.', en: 'Before I sleep, I brush my teeth.',
                bd: [['寝る前に', 'neru (dictionary) + 前に = before sleeping'], ['磨きます', 'brush']] },
              { jp: '食べる前に、手を洗います。', rom: 'Taberu mae ni, te o araimasu.', en: 'Before eating, I wash my hands.',
                bd: [['食べる前に', 'before eating']] },
              { jp: '日本に来る前に、少し勉強しました。', rom: 'Nihon ni kuru mae ni, sukoshi benkyō shimashita.', en: 'Before coming to Japan, I studied a little.',
                bd: [['来る前に', 'dictionary 来る even though the sentence is past'], ['勉強しました', 'studied']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'Why it stays dictionary form',
            body: ['<b>前に</b> means “before,” so from that viewpoint the action hasn’t happened yet — the verb stays in <b>dictionary</b> form no matter when the whole sentence takes place.',
              'With a noun, use <b>の</b>: 食事の前に (before the meal).'] },
          { t: 'warn', lab: 'Careful', h: 'Do not use the past form',
            items: [
              { x: '寝た前に', o: '寝る前に', n: 'Before + verb is always dictionary form.' },
              { x: '食事前に', o: '食事の前に', n: 'A noun needs の before 前に.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook',
            items: ['<b>前に</b> = “before.” The verb stays <b>dictionary</b>, always.'] },
          { t: 'try', lab: 'Your turn', h: 'Make “before” lines',
            items: ['寝る →', '出かける →', 'ご飯を食べる →'], note: 'Attach 前に and finish the sentence.' }
        ]
      }
    },

    /* ---- Day 4 ---- */
    {
      focus: '〜あとで: after doing',
      sub: 'Past form (た) + あとで',
      particle: 'で',
      read: { k: 1, task: 'Shadow the passage — a half-second behind' },
      produce: 'Say what you do after you get home.',
      lesson: {
        min: 5,
        secs: [
          { t: 'pat', lab: 'The pattern', h: '<b>た-form</b> + あとで',
            formula: ['た-form verb', '+', 'あとで', '=', 'after doing'],
            mean: '<b>After ~ing.</b> The verb before あとで is always in <b>past (た)</b> form.',
            ex: [
              { jp: '宿題をしたあとで、遊びます。', rom: 'Shukudai o shita ato de, asobimasu.', en: 'After I do my homework, I’ll play.',
                bd: [['したあとで', 'shita (past) + あとで = after doing'], ['遊びます', 'play']] },
              { jp: 'ご飯を食べたあとで、散歩します。', rom: 'Gohan o tabeta ato de, sanpo shimasu.', en: 'After eating, I take a walk.',
                bd: [['食べたあとで', 'after eating']] },
              { jp: '仕事のあとで、飲みに行きます。', rom: 'Shigoto no ato de, nomi ni ikimasu.', en: 'After work, I go for a drink.',
                bd: [['仕事のあとで', 'noun + の + あとで = after work']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'Past form, even about the future',
            body: ['The action before <b>あとで</b> finishes first, so Japanese marks it <b>past (た)</b> — even when the whole plan is about the future. A noun takes <b>の</b>: 授業のあとで (after class).'] },
          { t: 'warn', lab: 'Careful', h: 'Mind the form and the の',
            items: [
              { x: 'する あとで', o: 'したあとで', n: 'Use the past た-form before あとで.' },
              { x: '仕事あとで', o: '仕事のあとで', n: 'A noun needs の.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook',
            items: ['<b>前に</b> takes dictionary; <b>あとで</b> takes <b>た</b>. Before = plain, after = past.'] },
          { t: 'try', lab: 'Your turn', h: 'Make “after” lines',
            items: ['帰る → 帰った +', '食べる → 食べた +', '授業 → 授業の +'], note: 'Attach あとで.' }
        ]
      }
    },

    /* ---- Day 5 ---- */
    {
      focus: '〜てから: do A, then B',
      sub: 'Sequence with the て-form',
      particle: 'から',
      read: { k: 2, task: 'Read the third passage on your own' },
      produce: 'Say your morning order: after A, then B, then C.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: '<b>て-form</b> + から',
            formula: ['て-form', '+', 'から', '=', 'after doing, then'],
            mean: '<b>After doing A, then B.</b> It stresses that A finishes first and B follows.',
            ex: [
              { jp: 'ご飯を食べてから、出かけます。', rom: 'Gohan o tabete kara, dekakemasu.', en: 'I’ll eat, and then go out.',
                bd: [['食べてから', 'te-form + から = after eating, then'], ['出かけます', 'go out']] },
              { jp: '手を洗ってから、食べましょう。', rom: 'Te o aratte kara, tabemashō.', en: 'Let’s wash our hands, then eat.',
                bd: [['洗ってから', 'after washing, then']] },
              { jp: '宿題をしてから、テレビを見ます。', rom: 'Shukudai o shite kara, terebi o mimasu.', en: 'After I finish my homework, I watch TV.',
                bd: [['してから', 'after doing, then']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'How it differs from あとで',
            body: ['<b>てから</b> and <b>たあとで</b> both mean “after,” but てから highlights the <b>sequence</b> — A must finish before B starts. Reach for てから when you want a clear step-by-step order.'] },
          { t: 'warn', lab: 'Careful', h: 'One tiny change flips the meaning',
            items: [
              { x: '食べたから、出かけます (= because I ate)', o: '食べてから、出かけます (= after eating, then)', n: 'た + から means “because”; て + から means “after, then.”' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook',
            items: ['<b>てから</b> = “and then.” Finish A → start B.'] },
          { t: 'try', lab: 'Your turn', h: 'Chain two actions',
            items: ['起きる → 起きて +', 'シャワーを浴びる →', '朝ご飯を食べる →'], note: 'Link with てから to show the order.' }
        ]
      }
    },

    /* ---- Day 6 ---- */
    {
      focus: 'まで vs までに',
      sub: 'Until versus by a deadline',
      particle: 'まで',
      read: { k: 2, task: 'Dictation — listen and write it, then compare' },
      produce: 'Say what you do until a certain time, and one thing to finish by then.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: '<b>まで</b> = until, <b>までに</b> = by',
            formula: ['time / verb + まで', 'until', '/', 'time / verb + までに', 'by (deadline)'],
            mean: '<b>まで</b> = a continuous action up to a point. <b>までに</b> = a one-time action to finish by a deadline.',
            ex: [
              { jp: '5時まで働きます。', rom: 'Goji made hatarakimasu.', en: 'I work until 5:00.',
                bd: [['5時まで', 'until 5 — a continuous span'], ['働きます', 'work']] },
              { jp: '5時までに帰ります。', rom: 'Goji made ni kaerimasu.', en: 'I’ll be home by 5:00.',
                bd: [['5時までに', 'by 5 — a deadline'], ['帰ります', 'return']] },
              { jp: '友達が来るまで待ちます。', rom: 'Tomodachi ga kuru made machimasu.', en: 'I’ll wait until my friend comes.',
                bd: [['来るまで', 'until (he) comes — continuous'], ['待ちます', 'wait']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'Continuous vs one moment',
            body: ['<b>まで</b> covers a whole span — you keep doing something up to that point (wait, work, sleep). <b>までに</b> marks a <b>deadline</b> — do one thing at some moment before it (finish, send, arrive).'] },
          { t: 'warn', lab: 'Careful', h: 'Match the verb type',
            items: [
              { x: '5時まで宿題を出す', o: '5時までに宿題を出す', n: 'Handing it in by 5 is a one-time deadline — use までに.' },
              { x: '友達が来るまでに待つ', o: '友達が来るまで待つ', n: 'Waiting is continuous — use まで.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook',
            items: ['<b>まで</b> = keep doing until. <b>までに</b> = get it done by. The extra <b>に</b> = deadline.'] },
          { t: 'try', lab: 'Your turn', h: 'Until or by?',
            items: ['映画が終わる ___ 待つ', '9時 ___ レポートを出す', '雨がやむ ___ 家にいる'], note: 'Fill in まで or までに.' }
        ]
      }
    },

    /* ---- Day 7 — Review ---- */
    {
      focus: 'Review: timing and order',
      sub: 'とき · 前に · あとで · てから · まで',
      particle: 'ね',
      read: { k: 0, task: 'Re-read any passage and say a one-line summary aloud' },
      produce: 'Tell your day in order using three of this week’s patterns.',
      lesson: {
        min: 5,
        secs: [
          { t: 'p', lab: 'Recap', h: 'What this week gave you',
            body: ['<b>とき</b> frames “when,” and its verb tense sets before (dictionary) vs after (た).',
              '<b>前に</b> = before (dictionary), <b>あとで</b> = after (た), <b>てから</b> = after, then (sequence).',
              '<b>まで</b> = until (continuous), <b>までに</b> = by a deadline.'] },
          { t: 'tf', lab: 'One glance', h: 'The whole week',
            intro: 'Cover the right column and recall each meaning.',
            rows: [
              { g: '行くとき', r: 'iku toki', n: 'when going (before)' },
              { g: '行ったとき', r: 'itta toki', n: 'when arrived (after)' },
              { g: '寝る前に', r: 'neru mae ni', n: 'before sleeping' },
              { g: '食べたあとで', r: 'tabeta ato de', n: 'after eating' },
              { g: '洗ってから', r: 'aratte kara', n: 'after washing, then' },
              { g: '5時まで / までに', r: 'goji made / made ni', n: 'until 5 / by 5' }
            ] },
          { t: 'warn', lab: 'Last check', h: 'Catch these before you go',
            items: [
              { x: '寝た前に', o: '寝る前に', n: '前に always takes dictionary form.' },
              { x: '食べるあとで', o: '食べたあとで', n: 'あとで always takes past た.' },
              { x: '5時まで出す', o: '5時までに出す', n: 'A deadline needs までに.' }
            ] },
          { t: 'mem', lab: 'Keep it', h: 'Hook',
            items: ['Before → <b>前に</b> (dict). After → <b>あとで</b> (た). Then → <b>てから</b>. Until / by → <b>まで / までに</b>.'] },
          { t: 'try', lab: 'Your turn', h: 'Put it in order',
            items: ['起きて … てから …', '出かける前に …', '宿題をしたあとで …'], note: 'String three actions in order, ending casually with ね.' }
        ]
      }
    }
  ]
};

/* ===================== WEEK 13 — Must and don’t-have-to ===================== */
U[13] = {
  title: 'Must and don’t-have-to',
  days: [

    /* ---- Day 1 ---- */
    {
      focus: '〜なければならない: must',
      sub: 'The full “have to” form',
      particle: 'を',
      read: { k: 0, task: 'Read the passage with the translation open' },
      produce: 'Say two things you have to do this week.',
      lesson: {
        min: 5,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'Obligation: <b>〜なければならない</b>',
            formula: ['verb (must-form)', '+', 'なければならない'],
            mean: '<b>Must / have to ~.</b> The strong, complete form of obligation.',
            ex: [
              { jp: '宿題をしなければならない。', rom: 'Shukudai o shinakereba naranai.', en: 'I have to do my homework.',
                bd: [['しなければならない', 'shinakereba naranai = must do'], ['宿題を', 'homework — the object']] },
              { jp: '薬を飲まなければなりません。', rom: 'Kusuri o nomanakereba narimasen.', en: 'I must take my medicine.',
                bd: [['飲まなければなりません', 'polite form of “must take”']] },
              { jp: '明日、早く起きなければならない。', rom: 'Ashita, hayaku okinakereba naranai.', en: 'I have to get up early tomorrow.',
                bd: [['起きなければならない', 'must get up']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'Literally “if not, won’t do”',
            body: ['<b>なければ</b> = “if (you) don’t,” and <b>ならない</b> = “it won’t do.” Together: if you don’t, it won’t do → you <b>must</b>. Polite: ならない → <b>なりません</b>.'] },
          { t: 'warn', lab: 'Careful', h: 'It’s a fixed phrase',
            items: [
              { x: 'しなければならないない', o: 'しなければならない', n: 'Don’t add an extra negative — ならない is already the ending.' },
              { x: 'しなければなる', o: 'しなければならない', n: 'The ending is the negative ならない / なりません, not なる.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook',
            items: ['Hear it as one chunk: <b>〜なければならない</b> = “gotta do it.”'] },
          { t: 'try', lab: 'Your turn', h: 'State an obligation',
            items: ['宿題をする →', '薬を飲む →', '早く起きる →'], note: 'End with なければならない (or polite なりません).' }
        ]
      }
    },

    /* ---- Day 2 ---- */
    {
      focus: 'Building なければ from ない',
      sub: 'ない → なければ',
      particle: 'は',
      read: { k: 0, task: 'Listen with the text hidden, then check' },
      produce: 'Turn three ない-forms into なければ.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'Drop <b>い</b>, add <b>ければ</b>',
            formula: [' ない-form', 'drop い', '+', 'ければ', '=', 'なければ'],
            mean: 'Any <b>ない</b>-form turns into an “if not” by swapping <b>ない → なければ</b>.',
            ex: [
              { jp: '行かない → 行かなければ', rom: 'ikanai → ikanakereba', en: 'not go → if (I) don’t go',
                bd: [['行かなければ', 'ikanai → drop い → ikanakere + ば']] },
              { jp: '食べない → 食べなければ', rom: 'tabenai → tabenakereba', en: 'not eat → if (I) don’t eat',
                bd: [['食べなければ', 'tabenai → tabenakereba']] },
              { jp: '来ない → 来なければ', rom: 'konai → konakereba', en: 'not come → if (I) don’t come',
                bd: [['来なければ', 'konai → konakereba (irregular 来る)']] }
            ] },
          { t: 'tf', lab: 'Drill it', h: 'ない → なければ',
            intro: 'It’s the same move for every verb — just <b>い → ければ</b>.',
            rows: [
              { g: '飲まない', r: 'nomanai', n: '飲まなければ' },
              { g: '待たない', r: 'matanai', n: '待たなければ' },
              { g: '見ない', r: 'minai', n: '見なければ' },
              { g: 'しない', r: 'shinai', n: 'しなければ' }
            ] },
          { t: 'why', lab: 'Why it works', h: 'Why it looks like an い-adjective',
            body: ['<b>ない</b> behaves like an <b>い-adjective</b>. Just as 高い → 高ければ, the word ない → なければ. Same rule — nothing new to memorize.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook',
            items: ['<b>〜ない</b> → chop <b>い</b>, add <b>ければ</b>. Then add ならない for “must.”'] },
          { t: 'try', lab: 'Your turn', h: 'Convert to なければ',
            items: ['書かない →', '起きない →', 'しない →'], note: 'い → ければ.' }
        ]
      }
    },

    /* ---- Day 3 ---- */
    {
      focus: '〜なきゃ / 〜なくちゃ: casual must',
      sub: 'Everyday shortcuts',
      particle: 'よ',
      read: { k: 1, task: 'Read the new passage with the translation' },
      produce: 'Tell a friend two things you’ve gotta do, casually.',
      lesson: {
        min: 5,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'Shrink it: <b>なきゃ</b> / <b>なくちゃ</b>',
            formula: ['なければ → なきゃ', '/', 'なくては → なくちゃ'],
            mean: 'Casual “gotta.” The ならない / いけない is often <b>dropped</b> — the ending alone implies it.',
            ex: [
              { jp: 'もう行かなきゃ。', rom: 'Mō ikanakya.', en: 'I’ve gotta go now.',
                bd: [['行かなきゃ', 'ikanakereba → ikanakya (must go)']] },
              { jp: '宿題をしなくちゃ。', rom: 'Shukudai o shinakucha.', en: 'I’ve gotta do my homework.',
                bd: [['しなくちゃ', 'shinakute wa → shinakucha']] },
              { jp: '薬を飲まなきゃいけない。', rom: 'Kusuri o nomanakya ikenai.', en: 'I have to take my medicine.',
                bd: [['飲まなきゃいけない', 'with いけない spelled out']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'Where the sounds come from',
            body: ['<b>なきゃ</b> is a squeezed <b>なければ</b>; <b>なくちゃ</b> is a squeezed <b>なくては</b>. In speech the <b>ならない / いけない</b> is usually left off — everyone still hears “I have to.”'] },
          { t: 'warn', lab: 'Careful', h: 'Keep it casual',
            items: [
              { x: '会議で「行かなきゃ」', o: '会議で「行かなければなりません」', n: 'なきゃ / なくちゃ are casual — use the full form when you need to be polite.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook',
            items: ['<b>なきゃ = なければ</b>, <b>なくちゃ = なくては</b>. Drop the rest and go.'] },
          { t: 'try', lab: 'Your turn', h: 'Say it casually',
            items: ['行く →', '食べる →', '宿題をする →'], note: 'End in なきゃ or なくちゃ. Add よ to nudge a friend.' }
        ]
      }
    },

    /* ---- Day 4 ---- */
    {
      focus: '〜なくてもいい: don’t have to',
      sub: 'Permission to skip',
      particle: 'も',
      read: { k: 1, task: 'Shadow the passage — a half-second behind' },
      produce: 'Say two things you don’t have to do today.',
      lesson: {
        min: 5,
        secs: [
          { t: 'pat', lab: 'The pattern', h: '<b>なくてもいい</b> = don’t have to',
            formula: ['ない → なくて', '+', 'もいい', '=', 'need not'],
            mean: '<b>Don’t have to ~ / it’s okay not to.</b> The negative “even if you don’t, it’s fine.”',
            ex: [
              { jp: '明日は来なくてもいいです。', rom: 'Ashita wa konakute mo ii desu.', en: 'You don’t have to come tomorrow.',
                bd: [['来なくてもいい', 'konai → konakute + もいい = need not come']] },
              { jp: '全部食べなくてもいい。', rom: 'Zenbu tabenakute mo ii.', en: 'You don’t have to eat it all.',
                bd: [['食べなくてもいい', 'need not eat']] },
              { jp: '心配しなくてもいいよ。', rom: 'Shinpai shinakute mo ii yo.', en: 'You don’t have to worry.',
                bd: [['しなくてもいい', 'need not do']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'Built from the て-form of ない',
            body: ['Take the <b>ない</b>-form, change い → <b>くて</b> (来ない → 来なくて), then add <b>もいい</b> — “even if not, it’s fine.” It mirrors 〜てもいい (“may / it’s okay to”): 食べてもいい = you may eat.'] },
          { t: 'warn', lab: 'Careful', h: 'Don’t confuse it with “must”',
            items: [
              { x: '来なくてもいい (= you may skip)', o: '来なければならない (= you must come)', n: 'なくてもいい = need not; なければならない = must. Opposite meanings.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook',
            items: ['<b>なくてもいい</b> = “even if you don’t, it’s okay” = don’t have to.'] },
          { t: 'try', lab: 'Your turn', h: 'Give a free pass',
            items: ['来る → 来なくてもいい', '急ぐ →', '全部食べる →'], note: 'Reassure someone they need not do it.' }
        ]
      }
    },

    /* ---- Day 5 ---- */
    {
      focus: '〜方がいい・〜べき: advice',
      sub: 'Had better and should',
      particle: 'が',
      read: { k: 2, task: 'Read the third passage on your own' },
      produce: 'Give a friend one piece of advice with 〜方がいい.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: '<b>〜た方がいい</b> = you’d better',
            formula: ['た-form', '+', '方がいい', '=', 'had better'],
            mean: '<b>You’d better ~ / it’s better to ~.</b> For advice, use the <b>past (た)</b> form before 方がいい.',
            ex: [
              { jp: '早く寝た方がいいよ。', rom: 'Hayaku neta hō ga ii yo.', en: 'You’d better go to bed early.',
                bd: [['寝た方がいい', 'neta (past) + 方がいい = had better sleep'], ['よ', 'soft urging']] },
              { jp: '薬を飲んだ方がいい。', rom: 'Kusuri o nonda hō ga ii.', en: 'You’d better take some medicine.',
                bd: [['飲んだ方がいい', 'had better take']] },
              { jp: '休んだ方がいいですよ。', rom: 'Yasunda hō ga ii desu yo.', en: 'You’d better rest.',
                bd: [['休んだ方がいい', 'had better rest']] }
            ] },
          { t: 'pat', lab: 'Also', h: '<b>〜べき</b> = should',
            formula: ['dictionary verb', '+', 'べき(だ)', '=', 'should'],
            mean: '<b>Should ~</b> — a stronger “the right thing to do.” A little more formal.',
            ex: [
              { jp: '約束は守るべきだ。', rom: 'Yakusoku wa mamoru beki da.', en: 'You should keep your promises.',
                bd: [['守るべきだ', 'mamoru + べきだ = should keep']] },
              { jp: 'もっと勉強するべきだ。', rom: 'Motto benkyō suru beki da.', en: 'You should study more.',
                bd: [['するべきだ', 'should do']] }
            ],
            extra: 'With <b>する</b>, you’ll hear both するべき and すべき.' },
          { t: 'warn', lab: 'Careful', h: 'Mind the forms',
            items: [
              { x: '寝る方がいい (weak for advice)', o: '寝た方がいい', n: 'For advice, use past た before 方がいい.' },
              { x: '食べなかった方がいい', o: '食べない方がいい', n: 'For “had better not,” use the plain ない-form (not past) + 方がいい.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook',
            items: ['Advice to do: <b>た方がいい</b>. Advice not to: <b>ない方がいい</b>. Formal “should”: <b>べき</b>.'] },
          { t: 'try', lab: 'Your turn', h: 'Advise a friend',
            items: ['早く寝る →', '無理をしない →', '医者に行く →'], note: 'Use た方がいい (or ない方がいい for “had better not”).' }
        ]
      }
    },

    /* ---- Day 6 ---- */
    {
      focus: 'Obligations in real life',
      sub: 'Work, rules, manners',
      particle: 'ので',
      read: { k: 2, task: 'Dictation — listen and write it, then compare' },
      produce: 'Explain one rule you must follow, and why.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'Obligation + reason',
            formula: ['reason + ので', '+', '〜なければならない'],
            mean: 'State the <b>reason</b> with <b>ので</b> (“because”), then the <b>obligation</b>.',
            ex: [
              { jp: '危ないので、ヘルメットをかぶらなければなりません。', rom: 'Abunai node, herumetto o kaburanakereba narimasen.', en: 'Because it’s dangerous, you must wear a helmet.',
                bd: [['危ないので', 'abunai + ので = because it’s dangerous'], ['かぶらなければなりません', 'must wear']] },
              { jp: '会議があるので、9時までに来なければならない。', rom: 'Kaigi ga aru node, kuji made ni konakereba naranai.', en: 'There’s a meeting, so I have to come by 9.',
                bd: [['あるので', 'because there is'], ['9時までに', 'by 9 — last week’s までに'], ['来なければならない', 'must come']] },
              { jp: 'ここは図書館なので、静かにしなければならない。', rom: 'Koko wa toshokan na node, shizuka ni shinakereba naranai.', en: 'This is a library, so you have to be quiet.',
                bd: [['図書館なので', 'noun + な + ので = because it’s a library'], ['静かにしなければ', 'must be quiet']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'ので vs から for reasons',
            body: ['<b>ので</b> and <b>から</b> both mean “because,” but <b>ので</b> sounds softer and more polite — good for rules and requests. Watch the shape: verb / い-adj + ので, but noun / な-adj + <b>な</b> + ので (図書館なので).'] },
          { t: 'warn', lab: 'Careful', h: 'Connect ので correctly',
            items: [
              { x: '図書館だので', o: '図書館なので', n: 'A noun takes な (not だ) before ので.' },
              { x: '静かにしなければなりませんない', o: '静かにしなければなりません', n: 'Don’t double the negative — the phrase already ends negative.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook',
            items: ['Real-world formula: <b>〜ので、〜なければならない</b> = “because …, you must ….”'] },
          { t: 'try', lab: 'Your turn', h: 'State a rule',
            items: ['危ない → …ので、…なければならない', '試験がある → …', 'ここは病院だ → …なので、…'], note: 'Give the reason with ので, then the duty.' }
        ]
      }
    },

    /* ---- Day 7 — Review ---- */
    {
      focus: 'Review: duty and freedom',
      sub: 'must · gotta · need-not · had-better',
      particle: 'ね',
      read: { k: 0, task: 'Re-read any passage and say a one-line summary aloud' },
      produce: 'Say one thing you must do, one you don’t have to, and one you’d better do.',
      lesson: {
        min: 5,
        secs: [
          { t: 'p', lab: 'Recap', h: 'The obligation family',
            body: ['<b>Must</b>: 〜なければならない / なりません. Casual: <b>なきゃ · なくちゃ</b>.',
              '<b>Don’t have to</b>: 〜なくてもいい.',
              '<b>Advice</b>: た方がいい (had better), べき (should).'] },
          { t: 'tf', lab: 'One glance', h: 'One verb, five shades',
            intro: 'Same verb 行く, five degrees of obligation.',
            rows: [
              { g: '行かなければならない', r: 'ikanakereba naranai', n: 'must go' },
              { g: '行かなきゃ', r: 'ikanakya', n: 'gotta go (casual)' },
              { g: '行かなくてもいい', r: 'ikanakute mo ii', n: 'don’t have to go' },
              { g: '行った方がいい', r: 'itta hō ga ii', n: 'had better go' },
              { g: '行くべきだ', r: 'iku beki da', n: 'should go' }
            ] },
          { t: 'warn', lab: 'Last check', h: 'Catch these before you go',
            items: [
              { x: '寝る方がいい', o: '寝た方がいい', n: 'Advice uses past た + 方がいい.' },
              { x: '来なくてはならないない', o: '来なくてはならない', n: 'One negative ending only.' },
              { x: '会議で「行かなきゃ」', o: '行かなければなりません', n: 'Casual forms don’t fit formal settings.' }
            ] },
          { t: 'mem', lab: 'Keep it', h: 'Hook',
            items: ['Must → <b>なければならない</b>. Gotta → <b>なきゃ</b>. Need not → <b>なくてもいい</b>. Better → <b>た方がいい</b>.'] },
          { t: 'try', lab: 'Your turn', h: 'Three in a row',
            items: ['Must: …なければならない', 'Need not: …なくてもいい', 'Better: …た方がいい'], note: 'Say all three about your day, ending with ね.' }
        ]
      }
    }
  ]
};

/* ===================== WEEK 14 — Conditionals ===================== */
U[14] = {
  title: 'Conditionals',
  days: [

    /* ---- Day 1 ---- */
    {
      focus: '〜たら: the all-purpose if',
      sub: 'Past-base + ら',
      particle: 'が',
      read: { k: 0, task: 'Read the passage with the translation open' },
      produce: 'Say what you’ll do if you have money or time.',
      lesson: {
        min: 5,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'Make the <b>た-form</b>, add <b>ら</b>',
            formula: ['た-form', '+', 'ら', '=', 'if / when'],
            mean: '<b>If / when ~.</b> The most flexible conditional — it works almost anywhere.',
            ex: [
              { jp: 'お金があったら、旅行します。', rom: 'Okane ga attara, ryokō shimasu.', en: 'If I have money, I’ll travel.',
                bd: [['あったら', 'atta (past of ある) + ら = if there is'], ['旅行します', 'travel']] },
              { jp: '雨が降ったら、行きません。', rom: 'Ame ga futtara, ikimasen.', en: 'If it rains, I won’t go.',
                bd: [['降ったら', 'futta + ら = if it rains']] },
              { jp: '時間があったら、電話してください。', rom: 'Jikan ga attara, denwa shite kudasai.', en: 'If you have time, please call.',
                bd: [['あったら', 'if there is (time)']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'Why it’s built on the past form',
            body: ['<b>たら</b> uses the same <b>た</b> shape as the plain past, plus <b>ら</b>. It doesn’t mean past here — it means “once that happens.” If you can make the た-form, you can make たら.'] },
          { t: 'tf', lab: 'Drill it', h: 'Anything → たら',
            intro: 'Nouns and adjectives work too: 暇 → 暇だったら, 高い → 高かったら.',
            rows: [
              { g: '食べる', r: 'taberu', n: '食べたら tabetara' },
              { g: '行く', r: 'iku', n: '行ったら ittara' },
              { g: 'する', r: 'suru', n: 'したら shitara' },
              { g: '高い', r: 'takai (i-adj)', n: '高かったら takakattara' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook',
            items: ['Can you say the past? Add <b>ら</b>. 食べた → 食べたら, 行った → 行ったら.'] },
          { t: 'try', lab: 'Your turn', h: 'Make “if” lines',
            items: ['お金がある →', '暇だ →', '安い →'], note: 'Build the た-form, add ら, finish the thought.' }
        ]
      }
    },

    /* ---- Day 2 ---- */
    {
      focus: '〜たら for what you found',
      sub: 'When A happened, B (a discovery)',
      particle: 'に',
      read: { k: 0, task: 'Listen with the text hidden, then check' },
      produce: 'Say what you found when you got home or opened the box.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: '<b>〜たら</b> for a discovery',
            formula: ['past action + たら', '=', 'when A, (I found) B'],
            mean: '<b>When A happened, B.</b> B is what you discovered — and the main verb is <b>past</b>.',
            ex: [
              { jp: '家に帰ったら、手紙があった。', rom: 'Ie ni kaettara, tegami ga atta.', en: 'When I got home, there was a letter.',
                bd: [['帰ったら', 'kaetta + ら = when I got home'], ['あった', 'there was (I found it)']] },
              { jp: '窓を開けたら、猫が入ってきた。', rom: 'Mado o aketara, neko ga haitte kita.', en: 'When I opened the window, a cat came in.',
                bd: [['開けたら', 'when I opened'], ['入ってきた', 'came in']] },
              { jp: '店に行ったら、閉まっていた。', rom: 'Mise ni ittara, shimatte ita.', en: 'When I went to the shop, it was closed.',
                bd: [['行ったら', 'when I went'], ['閉まっていた', 'was closed']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'The result is already past',
            body: ['Here <b>たら</b> isn’t a hypothetical “if” — A really happened, and B is what you <b>found</b>. Because it already occurred, the second clause is in the <b>past</b> tense (あった, 来た).'] },
          { t: 'warn', lab: 'Careful', h: 'Report it in the past',
            items: [
              { x: '家に帰ったら、手紙がある', o: '家に帰ったら、手紙があった', n: 'A discovery already happened — end in the past (あった).' },
              { x: '窓を開けたら、猫が入ってくる', o: '窓を開けたら、猫が入ってきた', n: 'Report what actually happened, in the past.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook',
            items: ['<b>〜たら + past</b> = “when I did A, I found B.” A real event, a real result.'] },
          { t: 'try', lab: 'Your turn', h: 'Report a discovery',
            items: ['家に帰る → 帰ったら、…', '箱を開ける → 開けたら、…', '朝起きる → 起きたら、…'], note: 'End in the past — what did you find?' }
        ]
      }
    },

    /* ---- Day 3 ---- */
    {
      focus: '〜ば: the “if” of general truths',
      sub: 'u → e + ば; い-adj → ければ',
      particle: 'を',
      read: { k: 1, task: 'Read the new passage with the translation' },
      produce: 'State one “if you do X, Y happens” general rule.',
      lesson: {
        min: 5,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'Last <b>u → e</b>, add <b>ば</b>',
            formula: ['verb: u → e', '+', 'ば', '/', 'い-adj: い → ければ'],
            mean: '<b>If ~.</b> Great for general conditions and hypotheticals.',
            ex: [
              { jp: 'ボタンを押せば、動きます。', rom: 'Botan o oseba, ugokimasu.', en: 'If you press the button, it moves.',
                bd: [['押せば', 'osu → ose + ば = if you press'], ['動きます', 'it moves']] },
              { jp: '安ければ、買います。', rom: 'Yasukereba, kaimasu.', en: 'If it’s cheap, I’ll buy it.',
                bd: [['安ければ', 'yasui → yasukereba = if cheap']] },
              { jp: '練習すれば、上手になります。', rom: 'Renshū sureba, jōzu ni narimasu.', en: 'If you practice, you’ll get good.',
                bd: [['すれば', 'suru → sureba = if you do']] }
            ] },
          { t: 'tf', lab: 'Drill it', h: 'u → e + ば',
            intro: 'る-verbs: る → れば. い-adjectives: 高い → 高ければ.',
            rows: [
              { g: '行く', r: 'iku', n: '行けば ikeba' },
              { g: '飲む', r: 'nomu', n: '飲めば nomeba' },
              { g: '食べる', r: 'taberu', n: '食べれば tabereba' },
              { g: 'する', r: 'suru', n: 'すれば sureba' },
              { g: '来る', r: 'kuru', n: '来れば kureba' }
            ] },
          { t: 'why', lab: 'Why it works', h: 'When ば feels natural',
            body: ['<b>ば</b> shines for <b>general truths</b> and <b>hypotheticals</b>: “if you press it, it moves.” One caution — avoid ば when the second clause is a request or command about the same subject; たら fits better there.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook',
            items: ['Verb: last <b>u → e</b>, add <b>ば</b> (行く → 行けば). い-adj: <b>い → ければ</b>.'] },
          { t: 'try', lab: 'Your turn', h: 'Make ば-conditions',
            items: ['押す →', '安い →', '勉強する →'], note: 'u → e + ば, or い → ければ.' }
        ]
      }
    },

    /* ---- Day 4 ---- */
    {
      focus: '〜と: whenever A, B',
      sub: 'Automatic, natural results',
      particle: 'と',
      read: { k: 1, task: 'Shadow the passage — a half-second behind' },
      produce: 'State a natural law: whenever A, B always happens.',
      lesson: {
        min: 5,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'Dictionary + <b>と</b> = always / whenever',
            formula: ['dictionary verb', '+', 'と', '=', 'whenever A, B'],
            mean: '<b>Whenever A, B.</b> A always and automatically leads to B — nature, machines, math, directions.',
            ex: [
              { jp: '春になると、暖かくなる。', rom: 'Haru ni naru to, atatakaku naru.', en: 'When spring comes, it gets warm.',
                bd: [['なると', 'naru + と = whenever it becomes'], ['暖かくなる', 'gets warm']] },
              { jp: 'このボタンを押すと、ドアが開きます。', rom: 'Kono botan o osu to, doa ga akimasu.', en: 'If you press this button, the door opens.',
                bd: [['押すと', 'osu + と = whenever you press'], ['開きます', 'opens']] },
              { jp: 'まっすぐ行くと、駅があります。', rom: 'Massugu iku to, eki ga arimasu.', en: 'If you go straight, there’s the station.',
                bd: [['行くと', 'go + と = if / when you go'], ['あります', 'there is']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'No choice, no surprise',
            body: ['<b>と</b> is for <b>automatic</b> results — nature, machines, math, directions. Because B is guaranteed, the second clause <b>can’t</b> be a request, invitation, or command.'] },
          { t: 'warn', lab: 'Careful', h: 'No orders after と',
            items: [
              { x: '駅に着くと、電話してください', o: '駅に着いたら、電話してください', n: 'と can’t take a request; use たら for “when you arrive, please call.”' },
              { x: '安いと買います (odd)', o: '安ければ / 安かったら買います', n: 'A personal decision fits ば or たら better than と.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook',
            items: ['<b>と</b> = a switch: A, and B <b>always</b> follows. No commands, no “please.”'] },
          { t: 'try', lab: 'Your turn', h: 'State a sure result',
            items: ['春になる →', 'ボタンを押す →', '2に3を足す →'], note: 'Use と for the automatic outcome.' }
        ]
      }
    },

    /* ---- Day 5 ---- */
    {
      focus: '〜なら: if that’s the case',
      sub: 'Responding to a topic',
      particle: 'は',
      read: { k: 2, task: 'Read the third passage on your own' },
      produce: 'Recommend something: “if it’s X you want,” then …',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: '<b>なら</b> = if it’s the case that',
            formula: ['noun / plain form', '+', 'なら', '=', 'if (that’s so)'],
            mean: '<b>If it’s ~ / speaking of ~.</b> It picks up something just mentioned and reacts to it.',
            ex: [
              { jp: '温泉なら、箱根がいいですよ。', rom: 'Onsen nara, Hakone ga ii desu yo.', en: 'If it’s hot springs (you want), Hakone is good.',
                bd: [['温泉なら', 'onsen + なら = if it’s hot springs'], ['いいですよ', 'is good']] },
              { jp: '日本に行くなら、京都を見てください。', rom: 'Nihon ni iku nara, Kyōto o mite kudasai.', en: 'If you’re going to Japan, see Kyoto.',
                bd: [['行くなら', 'iku + なら = if you’re going'], ['見てください', 'please see']] },
              { jp: '安いなら、買います。', rom: 'Yasui nara, kaimasu.', en: 'If it’s cheap (as you say), I’ll buy it.',
                bd: [['安いなら', 'if it’s cheap']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'Reacting to what was said',
            body: ['<b>なら</b> takes a <b>topic someone raised</b> and responds: “if that’s the case, then ….” Unlike と / ば / たら, it happily allows advice and requests after it (行くなら、見てください). A noun attaches directly: 温泉なら (no だ needed).'] },
          { t: 'warn', lab: 'Careful', h: 'なら is about the premise, not the timing',
            items: [
              { x: '日本に行ったら、ガイドブックを買った方がいい', o: '日本に行くなら、ガイドブックを買った方がいい', n: 'Buy the guidebook before the trip — 行くなら (given you’re going), not 行ったら (after arriving).' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook',
            items: ['<b>なら</b> = “if that’s the case.” It reacts to a topic and welcomes advice or requests.'] },
          { t: 'try', lab: 'Your turn', h: 'React with なら',
            items: ['A: 寿司が食べたい。 B: 寿司___、あの店!', 'A: 日本に行く。 B: ___、京都へ!', '安い → 安い___、買う'], note: 'Fill in なら.' }
        ]
      }
    },

    /* ---- Day 6 ---- */
    {
      focus: 'Choosing the right if',
      sub: 'たら · ば · と · なら',
      particle: 'から',
      read: { k: 2, task: 'Dictation — listen and write it, then compare' },
      produce: 'Say the same idea two ways and feel the difference.',
      lesson: {
        min: 6,
        secs: [
          { t: 'tf', lab: 'Compare', h: 'Four “if”s at a glance',
            intro: 'They overlap, but each has a home base.',
            rows: [
              { g: 'たら', r: 'tara', n: 'most versatile; if / when, one-time, discoveries' },
              { g: 'ば', r: 'ba', n: 'general rules, hypotheticals' },
              { g: 'と', r: 'to', n: 'automatic result; no commands after it' },
              { g: 'なら', r: 'nara', n: 'if it’s the case; reacts to a topic' }
            ] },
          { t: 'why', lab: 'Why it works', h: 'Quick decision guide',
            body: ['Unsure? <b>たら</b> is safe almost anywhere. Want a <b>general truth</b>? <b>ば</b>. A <b>guaranteed, automatic</b> outcome (nature, machines)? <b>と</b>. Reacting to something <b>just mentioned</b>? <b>なら</b>.',
              'Remember: after <b>と</b> you can’t put a request or command; after <b>なら</b> you can.'] },
          { t: 'warn', lab: 'Careful', h: 'Common mix-ups',
            items: [
              { x: 'ボタンを押すなら、動きます', o: 'ボタンを押すと、動きます', n: 'An automatic machine result → と.' },
              { x: '時間があると、手伝ってください', o: '時間があったら、手伝ってください', n: 'A request needs たら (or ば / なら), not と.' },
              { x: '日本に行けば、これを買ってきて', o: '日本に行くなら、これを買ってきて', n: 'Advice about a known plan → なら.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook',
            items: ['<b>たら</b> anytime · <b>ば</b> general · <b>と</b> automatic (no orders) · <b>なら</b> “if that’s so.”'] },
          { t: 'try', lab: 'Your turn', h: 'Choose and justify',
            items: ['押す + (door opens automatically) → と or たら?', '安い + (I’ll buy) → ば / たら', '行く + (please buy this) → なら'], note: 'Pick the natural conditional for each.' }
        ]
      }
    },

    /* ---- Day 7 — Review ---- */
    {
      focus: 'Review: four conditionals',
      sub: 'たら · ば · と · なら',
      particle: 'ね',
      read: { k: 0, task: 'Re-read any passage and say a one-line summary aloud' },
      produce: 'Give one “if” sentence of each type.',
      lesson: {
        min: 5,
        secs: [
          { t: 'p', lab: 'Recap', h: 'The four “if”s',
            body: ['<b>たら</b>: past-base + ら — the flexible “if / when,” also discoveries.',
              '<b>ば</b>: u → e + ば — general rules and hypotheticals.',
              '<b>と</b>: dictionary + と — automatic results; no commands after it.',
              '<b>なら</b>: noun / plain + なら — “if that’s the case,” reacts to a topic.'] },
          { t: 'tf', lab: 'One glance', h: 'Same “if,” four flavors',
            intro: 'One idea, four shades.',
            rows: [
              { g: '雨が降ったら', r: 'ame ga futtara', n: 'if / when it rains (flexible)' },
              { g: '押せば', r: 'oseba', n: 'if you press (general)' },
              { g: '押すと', r: 'osu to', n: 'whenever you press (automatic)' },
              { g: '温泉なら', r: 'onsen nara', n: 'if it’s hot springs (topic)' }
            ] },
          { t: 'warn', lab: 'Last check', h: 'Catch these before you go',
            items: [
              { x: '駅に着くと、電話して', o: '駅に着いたら、電話して', n: 'No requests after と.' },
              { x: '安いだったら', o: '安かったら / 安いなら', n: 'い-adjectives don’t take だ — use 安かったら or 安いなら.' },
              { x: '行けば、買ってきて', o: '行くなら、買ってきて', n: 'Advice on a plan → なら.' }
            ] },
          { t: 'mem', lab: 'Keep it', h: 'Hook',
            items: ['<b>たら</b> anytime · <b>ば</b> general · <b>と</b> automatic · <b>なら</b> “if that’s so.”'] },
          { t: 'try', lab: 'Your turn', h: 'One of each',
            items: ['たら: …', 'ば: …', 'と: …', 'なら: …'], note: 'Four short sentences. End your favorite with ね.' }
        ]
      }
    }
  ]
};

/* ===================== WEEK 15 — Giving and receiving ===================== */
U[15] = {
  title: 'Giving and receiving',
  days: [

    /* ---- Day 1 ---- */
    {
      focus: 'あげる: give (outward)',
      sub: 'From me or us toward others',
      particle: 'に',
      read: { k: 0, task: 'Read the passage with the translation open' },
      produce: 'Say what you gave to two different people.',
      lesson: {
        min: 5,
        secs: [
          { t: 'pat', lab: 'The pattern', h: '<b>A は B に X を あげる</b>',
            formula: ['giver は', 'receiver に', 'thing を', 'あげる'],
            mean: '<b>A gives X to B.</b> The gift moves <b>away</b> from the speaker’s side.',
            ex: [
              { jp: '私は友達にプレゼントをあげた。', rom: 'Watashi wa tomodachi ni purezento o ageta.', en: 'I gave my friend a present.',
                bd: [['友達に', 'tomodachi ni = to my friend (the receiver)'], ['あげた', 'gave']] },
              { jp: '弟に本をあげます。', rom: 'Otōto ni hon o agemasu.', en: 'I’ll give my little brother a book.',
                bd: [['弟に', 'to my brother'], ['あげます', 'give']] },
              { jp: '田中さんは山田さんに花をあげました。', rom: 'Tanaka-san wa Yamada-san ni hana o agemashita.', en: 'Tanaka gave Yamada flowers.',
                bd: [['山田さんに', 'to Yamada'], ['あげました', 'gave']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'あげる points outward',
            body: ['<b>あげる</b> is for a gift that goes <b>from the speaker’s side outward</b> — from me, or from someone close to me, toward someone else. The receiver takes <b>に</b>.',
              'Never use あげる for a gift <b>to me</b> — that’s tomorrow’s くれる.'] },
          { t: 'warn', lab: 'Careful', h: 'Not for gifts to yourself',
            items: [
              { x: '友達は私にあげた', o: '友達は私にくれた', n: 'A gift coming to me uses くれる, not あげる.' },
              { x: '友達をプレゼントをあげた', o: '友達にプレゼントをあげた', n: 'The receiver takes に; the thing takes を.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook',
            items: ['<b>あげる</b> = give <b>away</b> from my side. Receiver + <b>に</b>, gift + <b>を</b>.'] },
          { t: 'try', lab: 'Your turn', h: 'Give something',
            items: ['友達 に … を あげた', '母 に … を あげた', '先生 に … を …'], note: 'Fill in a gift and finish with あげる.' }
        ]
      }
    },

    /* ---- Day 2 ---- */
    {
      focus: 'くれる: give to me',
      sub: 'Inward, toward my side',
      particle: 'が',
      read: { k: 0, task: 'Listen with the text hidden, then check' },
      produce: 'Say what two people gave to you.',
      lesson: {
        min: 5,
        secs: [
          { t: 'pat', lab: 'The pattern', h: '<b>A は (私に) X を くれる</b>',
            formula: ['giver は / が', '(me に)', 'thing を', 'くれる'],
            mean: '<b>A gives X to me (or my side).</b> The gift moves <b>toward</b> the speaker.',
            ex: [
              { jp: '友達がプレゼントをくれた。', rom: 'Tomodachi ga purezento o kureta.', en: 'My friend gave me a present.',
                bd: [['友達が', 'tomodachi ga = my friend (the giver)'], ['くれた', 'gave (to me)']] },
              { jp: '母が時計をくれました。', rom: 'Haha ga tokei o kuremashita.', en: 'My mother gave me a watch.',
                bd: [['母が', 'my mother (the giver)'], ['くれました', 'gave me']] },
              { jp: '田中さんが弟に本をくれた。', rom: 'Tanaka-san ga otōto ni hon o kureta.', en: 'Tanaka gave my brother a book.',
                bd: [['弟に', 'to my brother — still my side'], ['くれた', 'gave (toward us)']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'くれる always aims at me',
            body: ['Use <b>くれる</b> when the receiver is <b>me</b> or someone in my in-group (family, close friends). The “to me” is often left out — くれる already tells you. The giver takes <b>が</b> (or は).'] },
          { t: 'warn', lab: 'Careful', h: 'Direction is fixed',
            items: [
              { x: '私は友達にくれた', o: '私は友達にあげた', n: 'From me to others = あげる. くれる only points toward me.' },
              { x: '先生が私にあげた', o: '先生が私にくれた', n: 'A teacher giving to me = くれる.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook',
            items: ['<b>くれる</b> = give <b>to me</b>. The arrow points home. Giver + <b>が</b>.'] },
          { t: 'try', lab: 'Your turn', h: 'Someone gave you …',
            items: ['友達 が … を くれた', '父 が … を くれた', '先生 が … を …'], note: 'Report a gift that came to you.' }
        ]
      }
    },

    /* ---- Day 3 ---- */
    {
      focus: 'もらう: receive',
      sub: 'Get something from someone',
      particle: 'から',
      read: { k: 1, task: 'Read the new passage with the translation' },
      produce: 'Say what you received and from whom.',
      lesson: {
        min: 5,
        secs: [
          { t: 'pat', lab: 'The pattern', h: '<b>A は (人) に X を もらう</b>',
            formula: ['receiver は', 'source に / から', 'thing を', 'もらう'],
            mean: '<b>A receives X from someone.</b> The focus is the <b>receiver</b>. The source takes <b>に</b> or <b>から</b>.',
            ex: [
              { jp: '私は友達にプレゼントをもらった。', rom: 'Watashi wa tomodachi ni purezento o moratta.', en: 'I received a present from my friend.',
                bd: [['友達に', 'from my friend (the source)'], ['もらった', 'received']] },
              { jp: '母からお金をもらいました。', rom: 'Haha kara okane o moraimashita.', en: 'I received money from my mother.',
                bd: [['母から', 'from my mother — から makes “from” clear'], ['もらいました', 'received']] },
              { jp: '先生に本をもらった。', rom: 'Sensei ni hon o moratta.', en: 'I got a book from my teacher.',
                bd: [['先生に', 'from my teacher'], ['もらった', 'received']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'に or から for the source',
            body: ['With <b>もらう</b>, the person you get something from takes <b>に</b> or <b>から</b>. <b>から</b> (“from”) is the clearest and always safe; <b>に</b> is common when the source is a person. For a company or office, prefer <b>から</b>.'] },
          { t: 'warn', lab: 'Careful', h: 'The receiver is the subject',
            items: [
              { x: '友達は私にプレゼントをもらった (if I gave it)', o: '私は友達にプレゼントをもらった', n: 'The one who receives is the topic — start with the receiver.' },
              { x: '友達をもらった', o: '友達にもらった', n: 'The source takes に / から, not を.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook',
            items: ['<b>もらう</b> = I receive. Source + <b>に / から</b>, thing + <b>を</b>.'] },
          { t: 'try', lab: 'Your turn', h: 'You received …',
            items: ['友達 に … を もらった', '会社 から … を …', '母 に … を …'], note: 'Say what you got and from whom.' }
        ]
      }
    },

    /* ---- Day 4 ---- */
    {
      focus: '〜てあげる: do for someone',
      sub: 'A favor going outward',
      particle: 'を',
      read: { k: 1, task: 'Shadow the passage — a half-second behind' },
      produce: 'Say one kind thing you did for someone.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: '<b>て-form</b> + あげる',
            formula: ['て-form', '+', 'あげる', '=', 'do (something) for someone'],
            mean: '<b>Do ~ for someone</b> — a favor going <b>outward</b> from your side.',
            ex: [
              { jp: '妹に日本語を教えてあげた。', rom: 'Imōto ni nihongo o oshiete ageta.', en: 'I taught my little sister Japanese (for her).',
                bd: [['教えてあげた', 'oshiete + あげた = taught as a favor'], ['妹に', 'for my sister']] },
              { jp: '友達を駅まで送ってあげました。', rom: 'Tomodachi o eki made okutte agemashita.', en: 'I walked my friend to the station.',
                bd: [['送ってあげました', 'saw them off — as a favor'], ['駅まで', 'to the station — last week’s まで']] },
              { jp: '荷物を持ってあげる。', rom: 'Nimotsu o motte ageru.', en: 'I’ll carry your bag for you.',
                bd: [['持ってあげる', 'carry for (someone)']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'The action becomes a gift',
            body: ['Add <b>てあげる</b> to a verb and the action itself is given as a <b>favor</b>, moving outward from you (or your side) to someone else. The direction matches plain あげる.'] },
          { t: 'warn', lab: 'Careful', h: 'It can sound boastful',
            items: [
              { x: '先生、荷物を持ってあげます', o: '先生、お荷物をお持ちします', n: 'てあげる can sound like you’re doing a big favor; to superiors, use humble forms.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook',
            items: ['<b>てあげる</b> = do it <b>for</b> someone, the favor flowing outward.'] },
          { t: 'try', lab: 'Your turn', h: 'Do a favor',
            items: ['教える → 教えてあげた', '手伝う →', '貸す →'], note: 'Say who you did it for.' }
        ]
      }
    },

    /* ---- Day 5 ---- */
    {
      focus: '〜てくれる: someone does for me',
      sub: 'Gratitude, coming inward',
      particle: 'は',
      read: { k: 2, task: 'Read the third passage on your own' },
      produce: 'Thank someone: say what they did for you.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: '<b>て-form</b> + くれる',
            formula: ['て-form', '+', 'くれる', '=', 'someone does ~ for me'],
            mean: '<b>Someone does ~ for me</b> — a favor coming <b>toward</b> my side. It carries warmth and thanks.',
            ex: [
              { jp: '友達は宿題を手伝ってくれた。', rom: 'Tomodachi wa shukudai o tetsudatte kureta.', en: 'My friend helped me with my homework.',
                bd: [['手伝ってくれた', 'tetsudatte + くれた = kindly helped me'], ['友達は', 'my friend (the doer)']] },
              { jp: '母がお弁当を作ってくれました。', rom: 'Haha ga obentō o tsukutte kuremashita.', en: 'My mother made me a lunch.',
                bd: [['作ってくれました', 'made (for me)']] },
              { jp: '先生が説明してくれた。', rom: 'Sensei ga setsumei shite kureta.', en: 'The teacher explained it for me.',
                bd: [['説明してくれた', 'explained (for me)']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'Why it sounds grateful',
            body: ['<b>てくれる</b> says the favor came <b>to me</b>, so it naturally carries thanks. Compare plain 手伝った (just “helped”) with 手伝ってくれた (“kindly helped <b>me</b>”). The second one feels warm.'] },
          { t: 'warn', lab: 'Careful', h: 'Keep the direction inward',
            items: [
              { x: '私は友達を手伝ってくれた', o: '私は友達を手伝ってあげた', n: 'When I help someone else, it’s てあげる; くれる only points to me.' },
              { x: '友達が私を手伝ってあげた', o: '友達が私を手伝ってくれた', n: 'A favor coming to me must be てくれる.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook',
            items: ['<b>てくれる</b> = someone did it <b>for me</b> — say it to show thanks.'] },
          { t: 'try', lab: 'Your turn', h: 'Show gratitude',
            items: ['手伝う → 手伝ってくれた', '作る →', '教える →'], note: 'Say what someone kindly did for you.' }
        ]
      }
    },

    /* ---- Day 6 ---- */
    {
      focus: '〜てもらう: get someone to do',
      sub: 'Receiving an action',
      particle: 'に',
      read: { k: 2, task: 'Dictation — listen and write it, then compare' },
      produce: 'Say something you had someone do for you.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: '<b>て-form</b> + もらう',
            formula: ['doer に', 'て-form', '+', 'もらう', '=', 'have / get someone to do ~'],
            mean: '<b>I have / get someone to do ~ (for me).</b> Focus on the receiver of the favor; the doer takes <b>に</b>.',
            ex: [
              { jp: '友達に宿題を手伝ってもらった。', rom: 'Tomodachi ni shukudai o tetsudatte moratta.', en: 'I had my friend help me with my homework.',
                bd: [['友達に', 'tomodachi ni = by my friend (the doer)'], ['手伝ってもらった', 'got them to help me']] },
              { jp: '先生に漢字を教えてもらいました。', rom: 'Sensei ni kanji o oshiete moraimashita.', en: 'I had my teacher teach me kanji.',
                bd: [['先生に', 'by my teacher'], ['教えてもらいました', 'got them to teach me']] },
              { jp: '兄に駅まで送ってもらった。', rom: 'Ani ni eki made okutte moratta.', en: 'I had my big brother take me to the station.',
                bd: [['兄に', 'by my brother'], ['送ってもらった', 'got a ride']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'てくれる vs てもらう',
            body: ['Same favor, different subject. <b>友達が手伝ってくれた</b> makes the <b>friend</b> the subject (they kindly did it). <b>友達に手伝ってもらった</b> makes <b>me</b> the subject (I received or arranged it). てもらう often implies I asked for it.'] },
          { t: 'warn', lab: 'Careful', h: 'The doer takes に',
            items: [
              { x: '友達が手伝ってもらった', o: '友達に手伝ってもらった', n: 'With もらう, the doer takes に, not が.' },
              { x: '先生を教えてもらった', o: '先生に教えてもらった', n: 'The person who does the favor is marked に.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook',
            items: ['<b>てくれる</b>: they did it (they’re the subject). <b>てもらう</b>: I got them to (I’m the subject, doer + <b>に</b>).'] },
          { t: 'try', lab: 'Your turn', h: 'Get a favor done',
            items: ['友達 に … 手伝ってもらった', '先生 に … 教えてもらった', '兄 に … てもらった'], note: 'Mark the doer with に.' }
        ]
      }
    },

    /* ---- Day 7 — Review ---- */
    {
      focus: 'Review: the direction of giving',
      sub: 'うち · そと; humble and honorific',
      particle: 'ね',
      read: { k: 0, task: 'Re-read any passage and say a one-line summary aloud' },
      produce: 'Describe a favor two ways: with てくれる and with てもらう.',
      lesson: {
        min: 5,
        secs: [
          { t: 'p', lab: 'Recap', h: 'It all comes down to direction',
            body: ['<b>あげる</b> gives outward; <b>くれる</b> gives toward me; <b>もらう</b> receives. Add a <b>て-form</b> and the same arrows apply to <b>actions</b> (favors).',
              'The key is <b>うち</b> (my in-group) vs <b>そと</b> (outside): toward うち = くれる / もらう; away to そと = あげる.'] },
          { t: 'tf', lab: 'Polite upgrades', h: 'For superiors, swap these in',
            intro: 'Same meaning, humbler or more honorific verbs.',
            rows: [
              { g: 'あげる → さしあげる', r: 'sashiageru', n: 'humbly give (to a superior)' },
              { g: 'もらう → いただく', r: 'itadaku', n: 'humbly receive' },
              { g: 'くれる → くださる', r: 'kudasaru', n: 'someone kindly gives me (honorific)' }
            ] },
          { t: 'warn', lab: 'Last check', h: 'Catch these before you go',
            items: [
              { x: '友達は私にあげた', o: '友達は私にくれた', n: 'Toward me = くれる.' },
              { x: '友達が手伝ってもらった', o: '友達に手伝ってもらった', n: 'もらう marks the doer with に.' },
              { x: '先生が本をくれた (to me)', o: '先生が本をくださった', n: 'A superior giving to me → くださる (honorific).' }
            ] },
          { t: 'mem', lab: 'Keep it', h: 'Hook',
            items: ['Toward <b>うち</b>: くれる · もらう. Toward <b>そと</b>: あげる. Polite: <b>さしあげる · いただく · くださる</b>.'] },
          { t: 'try', lab: 'Your turn', h: 'Two ways, one favor',
            items: ['友達が手伝ってくれた →', '友達に手伝ってもらった →', '先生に … いただいた'], note: 'Say the favor as くれる and as もらう. End with ね.' }
        ]
      }
    }
  ]
};
U[16] = {
  title: 'Quoting thoughts & speech',
  days: [
    {
      focus: '〜と思う — say what you think',
      sub: 'I think that ~',
      particle: 'と',
      read: { k: 0, task: 'Read the passage with the translation open' },
      produce: 'Say three things you think about tomorrow.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'This week', h: 'You can already say what you <i>think</i>', body: ['This unit is about reporting — your own thoughts, and other people’s words. It all runs through one small particle: <b>と</b>.', 'Start with opinions: <b>plain form + と思う</b> = “I think that ~.”'] },
          { t: 'pat', lab: 'The pattern', h: 'plain form + と思う', formula: ['plain form', '+', 'と思う'], mean: '“I think that ~.” The <b>と</b> quotes your thought, then 思う closes it.', ex: [
            { jp: '明日は雨だと思います。', rom: 'Ashita wa ame da to omoimasu.', en: 'I think it will rain tomorrow.', bd: [['雨だ', 'rain (plain) — a noun keeps だ'], ['と思います', 'I think that']] },
            { jp: 'この本は面白いと思う。', rom: 'Kono hon wa omoshiroi to omou.', en: 'I think this book is interesting.', bd: [['面白い', 'interesting (plain)'], ['と思う', 'I think that']] },
            { jp: '田中さんは来ないと思います。', rom: 'Tanaka-san wa konai to omoimasu.', en: 'I don’t think Tanaka is coming.', bd: [['来ない', 'won’t come (plain negative)'], ['と思います', 'I think that']] }
          ] },
          { t: 'why', lab: 'Why it works', h: 'と draws a box around the thought', body: ['Everything before <b>と</b> is the thought, quoted whole. After と comes the reporting verb (思う).', 'That’s why the verb inside stays <b>plain</b> — it lives inside the quote, not at the end of your sentence.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>と</b> = the quote clamp. The thought goes in, 思う snaps it shut.'] },
          { t: 'try', lab: 'Your turn', h: 'Say your opinion', items: ['this movie / interesting →', 'tomorrow / cold →', 'Tanaka / will not come →'], note: 'Plain form first, then と思う.' }
        ]
      }
    },
    {
      focus: 'Plain form goes before と',
      sub: 'Never 行きますと — always 行くと',
      particle: 'が',
      read: { k: 0, task: 'Listen with the text hidden, then check' },
      produce: 'Turn three ます-sentences into 〜と思います.',
      lesson: {
        min: 5,
        secs: [
          { t: 'tf', lab: 'Plain before と', h: 'Only the <b>plain</b> form enters the quote', intro: 'The main verb stays polite (思います). The verb <i>inside</i> the quote goes plain.', rows: [
            { g: '行きます → 行く', r: 'iku', n: '行くと思います — I think I will go' },
            { g: '食べません → 食べない', r: 'tabenai', n: '食べないと思います — I do not think I will eat' },
            { g: '学生です → 学生だ', r: 'gakusei da', n: '学生だと思います — I think he is a student' },
            { g: '静かです → 静かだ', r: 'shizuka da', n: '静かだと思います — I think it is quiet' }
          ], note: 'Politeness lives on the <b>last</b> verb only.' },
          { t: 'warn', lab: 'Watch out', h: 'Don’t drag ます into the quote', items: [
            { x: '行きますと思います', o: '行くと思います', n: 'The inside verb must be plain — iku, not ikimasu.' },
            { x: '学生ですと思います', o: '学生だと思います', n: 'A noun takes だ, not です, before と.' },
            { x: '高いですと思います', o: '高いと思います', n: 'い-adjectives take no です inside the quote.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Rule of thumb', items: ['Politeness sits on the <b>tail</b>. Inside と, everything is plain.'] },
          { t: 'try', lab: 'Your turn', h: 'Go plain, then quote', items: ['明日は晴れます →', '田中さんは来ません →', 'これは高いです →'], note: 'Convert to plain, then add と思います.' }
        ]
      }
    },
    {
      focus: '〜と言う — report what was said',
      sub: 'Direct 「…」 vs indirect',
      particle: 'を',
      read: { k: 1, task: 'Read the new passage with the translation' },
      produce: 'Report one thing a friend said, direct and indirect.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'quote + と言う', formula: ['quote', '+', 'と言う'], mean: '“say that ~.” Same <b>と</b>, new verb: 言う (to say).', ex: [
            { jp: '田中さんは「行きます」と言いました。', rom: 'Tanaka-san wa “ikimasu” to iimashita.', en: 'Tanaka said, “I will go.”', bd: [['「行きます」', 'the exact words, quoted'], ['と言いました', 'said that']] },
            { jp: '田中さんは行くと言いました。', rom: 'Tanaka-san wa iku to iimashita.', en: 'Tanaka said that he would go.', bd: [['行く', 'go (plain) — reworded'], ['と言いました', 'said that']] }
          ] },
          { t: 'tf', lab: 'Two ways to quote', h: 'Direct keeps the words; indirect reshapes them', intro: '<b>Direct</b> uses 「…」 and the exact words. <b>Indirect</b> drops the brackets and goes plain.', rows: [
            { g: 'Direct: 「明日来ます」と言った', r: 'ashita kimasu', n: 'quoted word for word' },
            { g: 'Indirect: 明日来ると言った', r: 'ashita kuru', n: 'reworded to plain form' },
            { g: 'Direct: 「疲れた」と言った', r: 'tsukareta', n: 'their exact words' },
            { g: 'Indirect: 疲れたと言った', r: 'tsukareta', n: 'same idea, no brackets' }
          ], note: 'Indirect speech always uses the <b>plain</b> form before と.' },
          { t: 'why', lab: 'Why it works', h: 'The bracket is the boundary', body: ['With 「…」 you replay the words exactly. Without brackets, you retell in your own plain-form words.', 'Both still pass through <b>と</b> — the quote clamp never changes.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['言う = say. 思う = think. Same <b>と</b>, different verb.'] },
          { t: 'try', lab: 'Your turn', h: 'Report it both ways', items: ['friend: “I am busy” → direct', 'friend: “I am busy” → indirect', 'friend: “I will come” → indirect'], note: 'Direct keeps 「…」; indirect goes plain + と言った.' }
        ]
      }
    },
    {
      focus: '〜と言っていた — what someone told me',
      sub: 'Relaying news you heard',
      particle: 'に',
      read: { k: 1, task: 'Shadow the passage — a half-second behind' },
      produce: 'Report two things people told you this week.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'plain + と言っていた', formula: ['plain form', '+', 'と言っていた'], mean: '“(Someone) said that ~.” Best for passing on <b>news you heard</b>.', ex: [
            { jp: '田中さんは疲れたと言っていました。', rom: 'Tanaka-san wa tsukareta to itte imashita.', en: 'Tanaka said he was tired.', bd: [['疲れた', 'was tired (plain past)'], ['と言っていました', 'was saying that']] },
            { jp: '母は来週来ると言っていた。', rom: 'Haha wa raishuu kuru to itte ita.', en: 'My mom said she is coming next week.', bd: [['来週来る', 'is coming next week (plain)'], ['と言っていた', 'was saying that']] }
          ] },
          { t: 'why', lab: 'Why ていた', h: 'They <i>were</i> saying it', body: ['言っていた is the <b>continuous past</b> of 言う. It frames the words as something the person was telling you.', 'Use it to relay a message: <b>“X said that ~.”</b> It feels more natural than 言った for passing news along.'] },
          { t: 'warn', lab: 'Watch out', h: '言った vs 言っていた', items: [
            { x: 'relaying news: 田中さんは行くと言った', o: '田中さんは行くと言っていた', n: 'For reporting what someone told you, ていた sounds natural.' },
            { x: '言いていた', o: '言っていた', n: '言う becomes 言って becomes 言っていた. The て-form is 言って.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['言っていた = “was telling me.” Your go-to for <b>relaying</b> a message.'] },
          { t: 'try', lab: 'Your turn', h: 'Pass on the message', items: ['Tanaka / busy tomorrow →', 'teacher / test on Friday →'], note: 'plain form + と言っていた.' }
        ]
      }
    },
    {
      focus: 'かもしれない and でしょう — hedge your bets',
      sub: 'might vs probably',
      particle: 'で',
      read: { k: 2, task: 'Read the third passage on your own' },
      produce: 'Guess tomorrow’s weather two ways.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'Less sure', h: 'plain + かもしれない', formula: ['plain form', '+', 'かもしれない'], mean: '“might ~ / maybe ~.” About a coin flip.', ex: [
            { jp: '明日は雨かもしれません。', rom: 'Ashita wa ame kamo shiremasen.', en: 'It might rain tomorrow.', bd: [['雨', 'rain (noun) — drop だ'], ['かもしれません', 'might be']] },
            { jp: '田中さんは来ないかもしれない。', rom: 'Tanaka-san wa konai kamo shirenai.', en: 'Tanaka might not come.', bd: [['来ない', 'won’t come (plain)'], ['かもしれない', 'might']] }
          ] },
          { t: 'pat', lab: 'Fairly sure', h: 'plain + でしょう／だろう', formula: ['plain form', '+', 'でしょう'], mean: '“probably ~.” More confident than かもしれない.', ex: [
            { jp: '明日は晴れるでしょう。', rom: 'Ashita wa hareru deshou.', en: 'It will probably be sunny tomorrow.', bd: [['晴れる', 'be sunny (plain)'], ['でしょう', 'probably']] },
            { jp: '彼は学生だろう。', rom: 'Kare wa gakusei darou.', en: 'He’s probably a student.', bd: [['学生', 'student (noun)'], ['だろう', 'probably (casual)']] }
          ] },
          { t: 'warn', lab: 'Watch out', h: 'Drop だ after nouns', items: [
            { x: '雨だかもしれない', o: '雨かもしれない', n: 'Nouns and な-adjectives lose だ before かもしれない.' },
            { x: '学生だでしょう', o: '学生でしょう', n: 'でしょう attaches straight to the noun.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Certainty ladder', items: ['<b>かもしれない</b> = a coin flip. <b>でしょう／だろう</b> = pretty sure.'] },
          { t: 'try', lab: 'Your turn', h: 'Hedge it', items: ['tomorrow / cold / maybe →', 'he / come / probably →', 'this / expensive / maybe →'], note: 'Drop だ after nouns.' }
        ]
      }
    },
    {
      focus: '〜そうだ — I hear that ~',
      sub: 'Passing on hearsay',
      particle: 'から',
      read: { k: 2, task: 'Dictation — listen and write it, then compare' },
      produce: 'Report two facts you heard, with そうだ.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'plain + そうだ', formula: ['plain form', '+', 'そうだ'], mean: '“I hear that ~ / They say ~.” Report info from another source.', ex: [
            { jp: '天気予報によると、明日は雨だそうです。', rom: 'Tenki yohou ni yoru to, ashita wa ame da sou desu.', en: 'According to the forecast, I hear it will rain tomorrow.', bd: [['雨だ', 'rain (plain) — a noun keeps だ'], ['そうです', 'I hear that']] },
            { jp: '田中さんは今日来ないそうだ。', rom: 'Tanaka-san wa kyou konai sou da.', en: 'I hear Tanaka isn’t coming today.', bd: [['来ない', 'won’t come (plain)'], ['そうだ', 'I hear that']] }
          ] },
          { t: 'warn', lab: 'Watch out', h: 'Hearsay そう vs looks-like そう', items: [
            { x: '降りそうだ = it looks about to rain', o: '降るそうだ = I hear it will rain', n: 'Hearsay uses the plain form; appearance uses the verb stem.' },
            { x: '雨そうだ', o: '雨だそうだ', n: 'For hearsay, a noun keeps だ before そうだ.' }
          ] },
          { t: 'why', lab: 'Why it works', h: 'そうだ = secondhand', body: ['Hearsay <b>そうだ</b> attaches to a full plain-form sentence — because you’re quoting a whole fact you heard.', 'Pair it with によると (“according to”) to name your source: 〜によると…そうだ.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['A full plain sentence + <b>そうだ</b> = “word on the street is…”'] },
          { t: 'try', lab: 'Your turn', h: 'Pass it on', items: ['forecast / snow tomorrow →', 'Tanaka / busy →', 'that restaurant / delicious →'], note: 'Plain form (a noun keeps だ) + そうだ.' }
        ]
      }
    },
    {
      focus: 'Week review — thoughts and speech',
      sub: 'Recap and last checks',
      particle: 'ね',
      read: { k: 0, task: 'Re-read any passage and say a one-line summary aloud' },
      produce: 'Give an opinion, report a quote, and pass on hearsay — three sentences.',
      lesson: {
        min: 5,
        secs: [
          { t: 'p', lab: 'Recap', h: 'One particle, many reports', body: ['This week everything passed through <b>と</b>: と思う (think), と言う (say), と言っていた (relayed). Then modality: <b>かもしれない</b> (might), <b>でしょう／だろう</b> (probably), <b>そうだ</b> (hearsay).', 'The golden rule: whatever sits before と or そうだ is <b>plain form</b>.'] },
          { t: 'warn', lab: 'Last check', h: 'The usual slips', items: [
            { x: '行きますと思います', o: '行くと思います', n: 'Plain form inside the quote.' },
            { x: '雨だかもしれない', o: '雨かもしれない', n: 'Drop だ before かもしれない.' },
            { x: '降りそうだ for hearsay', o: '降るそうだ', n: 'Hearsay takes the plain form, not the stem.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'One line to keep', items: ['<b>Plain form → と → 思う／言う.</b> Modality just hangs off the plain form too.'] },
          { t: 'try', lab: 'Your turn', h: 'Put it together', items: ['I think it will rain tomorrow →', 'Tanaka said he is coming →', 'I hear the test is on Friday →'], note: 'Opinion, quote, hearsay — one each.' }
        ]
      }
    }
  ]
};

U[17] = {
  title: 'States & transitive/intransitive',
  days: [
    {
      focus: '自動詞・他動詞 — the verb twins',
      sub: 'I open it vs it opens',
      particle: 'を',
      read: { k: 0, task: 'Read the passage with the translation open' },
      produce: 'Name three verb pairs out loud.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'This week', h: 'Japanese verbs come in <b>pairs</b>', body: ['Many actions have two verbs: one where <b>you do it</b> (transitive, 他動詞) and one where <b>it just happens</b> (intransitive, 自動詞).', 'English reuses one word — “open the door” / “the door opens.” Japanese uses twins: <b>開ける</b> vs <b>開く</b>.'] },
          { t: 'tf', lab: 'The twins', h: 'Do-it vs it-happens', intro: 'Left = transitive (you act on something). Right = intransitive (it changes on its own).', rows: [
            { g: '開ける / 開く', r: 'akeru / aku', n: 'I open it — it opens' },
            { g: 'つける / つく', r: 'tsukeru / tsuku', n: 'I turn it on — it comes on' },
            { g: '閉める / 閉まる', r: 'shimeru / shimaru', n: 'I close it — it closes' },
            { g: '消す / 消える', r: 'kesu / kieru', n: 'I turn it off — it goes out' }
          ], note: 'Transitive often ends in <b>-eru/-su</b>; intransitive often in <b>-aru/-ku</b> — but always check, the patterns leak.' },
          { t: 'why', lab: 'Why it matters', h: 'The pair decides the particle', body: ['Transitive verbs take a direct object with <b>を</b>: ドア<b>を</b>開ける.', 'Intransitive verbs have no object — the thing that changes takes <b>が</b>: ドア<b>が</b>開く.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>を + transitive</b> (you act). <b>が + intransitive</b> (it acts on its own).'] },
          { t: 'try', lab: 'Your turn', h: 'Pick the twin', items: ['I turn on the light →', 'the light comes on →', 'I close the window →'], note: 'Choose transitive or intransitive, then を or が.' }
        ]
      }
    },
    {
      focus: '〜てある — left that way on purpose',
      sub: 'Someone set it up',
      particle: 'が',
      read: { k: 0, task: 'Listen with the text hidden, then check' },
      produce: 'Describe two things prepared in your room with てある.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'transitive て-form + ある', formula: ['transitive て-form', '+', 'ある'], mean: '“has been ~ed (on purpose).” A state left behind by someone’s intentional act.', ex: [
            { jp: '壁に地図が貼ってあります。', rom: 'Kabe ni chizu ga hatte arimasu.', en: 'A map has been put up on the wall.', bd: [['貼って', 'put up (て-form of 貼る)'], ['あります', 'is in that state']] },
            { jp: 'ノートに名前が書いてある。', rom: 'Nooto ni namae ga kaite aru.', en: 'A name is written in the notebook.', bd: [['書いて', 'written (て-form of 書く)'], ['ある', 'is in that state']] }
          ] },
          { t: 'why', lab: 'Why が', h: 'The object becomes the subject', body: ['You’d normally say 名前<b>を</b>書く (write a name). But with <b>てある</b>, the focus shifts to the result, so the object is re-marked with <b>が</b>: 名前<b>が</b>書いてある.', 'The nuance: someone did this <b>on purpose</b>, and it’s still that way.'] },
          { t: 'warn', lab: 'Watch out', h: 'てある needs the transitive verb', items: [
            { x: 'ドアが開いてある', o: 'ドアが開けてある', n: 'Use the transitive 開ける, so 開けてある, for the on-purpose state.' },
            { x: '名前を書いてある', o: '名前が書いてある', n: 'With てある the object takes が, not を.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>てある</b> = “someone set it up and left it.” A transitive verb, but が on the object.'] },
          { t: 'try', lab: 'Your turn', h: 'Describe the setup', items: ['the window / opened on purpose →', 'the name / written →', 'a note / posted →'], note: 'Transitive て-form + ある, mark with が.' }
        ]
      }
    },
    {
      focus: '〜ている — just the state, no agent',
      sub: 'It is open, who knows why',
      particle: 'は',
      read: { k: 1, task: 'Read the new passage with the translation' },
      produce: 'Describe two things in the room with intransitive + ている.',
      lesson: {
        min: 5,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'intransitive て-form + いる', formula: ['intransitive て-form', '+', 'いる'], mean: '“is (in the state of) ~.” Describes how something simply <b>is</b>.', ex: [
            { jp: 'ドアが開いています。', rom: 'Doa ga aite imasu.', en: 'The door is open.', bd: [['開いて', 'opened (て-form of 開く)'], ['います', 'is in that state']] },
            { jp: '電気がついている。', rom: 'Denki ga tsuite iru.', en: 'The light is on.', bd: [['ついて', 'came on (て-form of つく)'], ['いる', 'is in that state']] },
            { jp: '窓が閉まっています。', rom: 'Mado ga shimatte imasu.', en: 'The window is closed.', bd: [['閉まって', 'closed (て-form of 閉まる)'], ['います', 'is in that state']] }
          ] },
          { t: 'why', lab: 'Why ている here', h: 'Not an action — a standing state', body: ['With <b>intransitive</b> verbs, ている doesn’t mean “-ing in progress.” 開いている is not “opening” — it means “is open.”', 'It’s a plain snapshot: no agent, no intention, just the current state.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['Intransitive + <b>ている</b> = a state photo. 開いている = “is open,” not “opening.”'] },
          { t: 'try', lab: 'Your turn', h: 'Snapshot the room', items: ['the light / is on →', 'the door / is closed →', 'the window / is open →'], note: 'Intransitive て-form + いる, mark with が.' }
        ]
      }
    },
    {
      focus: 'てある vs ている — the showdown',
      sub: 'On purpose vs just so',
      particle: 'も',
      read: { k: 1, task: 'Shadow the passage — a half-second behind' },
      produce: 'Contrast one thing two ways: 〜てある and 〜ている.',
      lesson: {
        min: 6,
        secs: [
          { t: 'tf', lab: 'Side by side', h: 'Same scene, different story', intro: 'Both describe a state. <b>てある</b> hints someone did it on purpose; <b>ている</b> just reports the state.', rows: [
            { g: '窓が開けてある', r: 'mado ga akete aru', n: 'transitive 開ける — someone opened it on purpose' },
            { g: '窓が開いている', r: 'mado ga aite iru', n: 'intransitive 開く — it is simply open' },
            { g: '電気がつけてある', r: 'denki ga tsukete aru', n: 'transitive つける — left on deliberately' },
            { g: '電気がついている', r: 'denki ga tsuite iru', n: 'intransitive つく — it is simply on' }
          ], note: 'Transitive + <b>てある</b> = intention. Intransitive + <b>ている</b> = plain state.' },
          { t: 'why', lab: 'Why choose one', h: 'Do you want to imply a plan?', body: ['If a person set it up and you want that felt — use <b>てある</b> (transitive).', 'If you’re just reporting what you see, no backstory — use <b>ている</b> (intransitive).'] },
          { t: 'warn', lab: 'Watch out', h: 'Match the verb type to the ending', items: [
            { x: '窓が開いてある', o: '窓が開けてある', n: 'てある needs the transitive verb 開ける.' },
            { x: '窓が開けている for a plain state', o: '窓が開いている', n: 'For a plain state, use intransitive 開く + ている.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>てある</b> = fingerprints on it (someone did it). <b>ている</b> = just the state.'] },
          { t: 'try', lab: 'Your turn', h: 'Say it both ways', items: ['the door — opened on purpose →', 'the door — simply open →', 'the light — left on →'], note: 'てある (transitive) vs ている (intransitive).' }
        ]
      }
    },
    {
      focus: 'Pair drill — six essential twins',
      sub: 'Lock in the forms',
      particle: 'に',
      read: { k: 2, task: 'Read the third passage on your own' },
      produce: 'Run all six pairs in a sentence each.',
      lesson: {
        min: 6,
        secs: [
          { t: 'tf', lab: 'The six pairs', h: 'Transitive → intransitive', intro: 'Memorise these six. Left takes を, right takes が.', rows: [
            { g: '閉める / 閉まる', r: 'shimeru / shimaru', n: 'close it — it closes' },
            { g: '入れる / 入る', r: 'ireru / hairu', n: 'put in — it goes in' },
            { g: '出す / 出る', r: 'dasu / deru', n: 'take out — it comes out' },
            { g: '消す / 消える', r: 'kesu / kieru', n: 'turn off — it goes out' },
            { g: '開ける / 開く', r: 'akeru / aku', n: 'open it — it opens' },
            { g: 'つける / つく', r: 'tsukeru / tsuku', n: 'turn on — it comes on' }
          ], note: 'Notice 入る is read <b>hairu</b>, not iru — a classic trap.' },
          { t: 'pat', lab: 'Worked example', h: '入れる vs 入る in action', formula: ['を + 入れる', '/', 'が + 入る'], mean: 'Put something in vs something goes in.', ex: [
            { jp: 'かばんに本を入れます。', rom: 'Kaban ni hon o iremasu.', en: 'I put the book in the bag.', bd: [['本を', 'book (object, を)'], ['入れます', 'put in (transitive)']] },
            { jp: 'かばんに本が入っています。', rom: 'Kaban ni hon ga haitte imasu.', en: 'The book is in the bag.', bd: [['本が', 'book (subject, が)'], ['入っています', 'is inside (intransitive + ている)']] }
          ] },
          { t: 'warn', lab: 'Watch out', h: 'Readings and pairs that bite', items: [
            { x: '入る = iru', o: '入る = hairu', n: '入る is hairu. 要る (to need) is iru — a different verb.' },
            { x: 'ゴミを出る', o: 'ゴミを出す', n: 'To take the trash out, use transitive 出す, not 出る.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Chant', items: ['<b>しめる／しまる、いれる／はいる、だす／でる、けす／きえる.</b> Say it like a rhythm.'] },
          { t: 'try', lab: 'Your turn', h: 'Use each twin', items: ['I turn off the TV →', 'the fire goes out →', 'I take the trash out →'], note: 'を for transitive, が for intransitive.' }
        ]
      }
    },
    {
      focus: 'を or が — let the verb decide',
      sub: 'The particle follows the twin',
      particle: 'と',
      read: { k: 2, task: 'Dictation — listen and write it, then compare' },
      produce: 'Say four sentences, switching を and が correctly.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'transitive を … / intransitive が …', formula: ['thing + を + transitive', 'vs', 'thing + が + intransitive'], mean: 'The verb’s type picks the particle — every time.', ex: [
            { jp: '私がドアを閉めました。', rom: 'Watashi ga doa o shimemashita.', en: 'I closed the door.', bd: [['ドアを', 'door (object, を)'], ['閉めました', 'closed it (transitive)']] },
            { jp: 'ドアが閉まりました。', rom: 'Doa ga shimarimashita.', en: 'The door closed.', bd: [['ドアが', 'door (subject, が)'], ['閉まりました', 'closed (intransitive)']] }
          ] },
          { t: 'why', lab: 'Why it works', h: 'を needs a doer; が needs none', body: ['Transitive verbs describe someone acting on a thing — that thing is the object, marked <b>を</b>.', 'Intransitive verbs describe a thing changing by itself — that thing is the subject, marked <b>が</b>. No を anywhere.'] },
          { t: 'warn', lab: 'Watch out', h: 'No を with an intransitive verb', items: [
            { x: 'ドアを閉まりました', o: 'ドアが閉まりました', n: '閉まる is intransitive — the door takes が.' },
            { x: '電気がつけました', o: '電気をつけました', n: 'つける is transitive — the light takes を.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>Doer + を + transitive.</b> <b>Thing + が + intransitive.</b> The verb is the boss.'] },
          { t: 'try', lab: 'Your turn', h: 'Pick the particle', items: ['the window / closed by me →', 'the window / closed by itself →', 'I turned on the light →', 'the light came on →'], note: 'The verb type decides を or が.' }
        ]
      }
    },
    {
      focus: 'Week review — states and twins',
      sub: 'Recap and last checks',
      particle: 'ね',
      read: { k: 0, task: 'Re-read any passage and say a one-line summary aloud' },
      produce: 'Describe a room: what is open, on, and set up.',
      lesson: {
        min: 5,
        secs: [
          { t: 'p', lab: 'Recap', h: 'Twins, particles, and states', body: ['Verbs come in pairs: transitive (を, you act) and intransitive (が, it changes). 開ける/開く, つける/つく, 閉める/閉まる, 入れる/入る, 出す/出る, 消す/消える.', 'States: <b>transitive てある</b> = set up on purpose; <b>intransitive ている</b> = just the state.'] },
          { t: 'warn', lab: 'Last check', h: 'The usual slips', items: [
            { x: 'ドアを閉まる', o: 'ドアが閉まる', n: 'Intransitive verbs take が.' },
            { x: '窓が開いてある', o: '窓が開けてある', n: 'てある needs the transitive verb.' },
            { x: '入る = iru', o: '入る = hairu', n: 'Watch the reading — hairu.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'One line to keep', items: ['<b>を + 他動詞 (do it). が + 自動詞 (it happens).</b> てある = on purpose, ている = just so.'] },
          { t: 'try', lab: 'Your turn', h: 'Describe the room', items: ['The door is open →', 'The light has been left on →', 'The window closed →'], note: 'Choose the twin, then が or を, and てある or ている.' }
        ]
      }
    }
  ]
};

U[18] = {
  title: 'Review sprint',
  days: [
    {
      focus: 'Verb forms — the full set',
      sub: 'て・た・ない・potential・volitional',
      particle: 'は',
      read: { k: 0, task: 'Read the passage with the translation open' },
      produce: 'Conjugate three verbs through all five forms.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'This week', h: 'A sprint through everything', body: ['This unit is pure review — no new grammar, just fast reps. Today: the five verb forms you lean on most.', '<b>て</b> (connect), <b>た</b> (past), <b>ない</b> (negative), <b>potential</b> (can), <b>volitional</b> (let’s).'] },
          { t: 'tf', lab: 'Five forms', h: 'Three verbs, all the way across', intro: 'Watch how each group conjugates. 行く is the famous <b>て/た</b> exception.', rows: [
            { g: '食べる (ru-verb)', r: 'taberu', n: '食べて・食べた・食べない・食べられる・食べよう' },
            { g: '飲む (u-verb)', r: 'nomu', n: '飲んで・飲んだ・飲まない・飲める・飲もう' },
            { g: '行く (u-verb)', r: 'iku', n: '行って・行った・行かない・行ける・行こう' },
            { g: 'する (irregular)', r: 'suru', n: 'して・した・しない・できる・しよう' }
          ], note: 'Potential of する is <b>できる</b>; of 来る is <b>来られる</b>.' },
          { t: 'warn', lab: 'Watch out', h: 'Conjugation traps', items: [
            { x: '行いて', o: '行って', n: '行く is the exception — its て-form is 行って, not 行いて.' },
            { x: '飲まる for potential', o: '飲める', n: 'u-verb potential: the -u becomes -eru. 飲む becomes 飲める.' },
            { x: '食べれる', o: '食べられる', n: 'Textbook potential of ru-verbs keeps ら: 食べられる.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Order to chant', items: ['Five gears: <b>て, た, ない, potential, volitional.</b> Shift through all five for each verb.'] },
          { t: 'try', lab: 'Your turn', h: 'Run the set', items: ['書く → て / た / ない / potential / volitional', '見る → て / た / ない / potential / volitional', '話す → て / た / ない / potential / volitional'], note: '書く is a く-verb: watch the て-form.' }
        ]
      }
    },
    {
      focus: 'Conditionals — four ways to say if',
      sub: 'たら・ば・と・なら',
      particle: 'と',
      read: { k: 0, task: 'Listen with the text hidden, then check' },
      produce: 'Make one sentence with each conditional.',
      lesson: {
        min: 6,
        secs: [
          { t: 'tf', lab: 'Four ifs', h: 'Same idea, different feel', intro: 'All translate as “if/when,” but each has a home turf.', rows: [
            { g: 'たら — after the fact', r: 'jikan ga attara', n: '時間があったら、行きます — the most flexible if/when' },
            { g: 'ば — general condition', r: 'yasukereba', n: '安ければ、買います — if it is cheap' },
            { g: 'と — automatic result', r: 'osu to', n: '押すと、開きます — press and it opens (natural result)' },
            { g: 'なら — given that topic', r: 'iku nara', n: '行くなら、朝がいい — if it is the case that you go' }
          ], note: '<b>と</b> is for guaranteed, natural outcomes — never for requests or plans.' },
          { t: 'pat', lab: 'Worked contrast', h: 'と vs たら', formula: ['と = always so', 'vs', 'たら = this time'], mean: 'と for a rule of nature; たら for a specific if/when.', ex: [
            { jp: '春になると、桜が咲きます。', rom: 'Haru ni naru to, sakura ga sakimasu.', en: 'When spring comes, the cherries bloom.', bd: [['なると', 'when it becomes (natural law)'], ['咲きます', 'bloom']] },
            { jp: '家に帰ったら、電話します。', rom: 'Ie ni kaettara, denwa shimasu.', en: 'When I get home, I’ll call.', bd: [['帰ったら', 'when I return (this time)'], ['電話します', 'I will call']] }
          ] },
          { t: 'warn', lab: 'Watch out', h: 'と can’t carry intentions', items: [
            { x: 'ボタンを押すと、教えてください', o: 'ボタンを押したら、教えてください', n: 'A request after a condition uses たら, not と.' },
            { x: '行けば、いつがいい？', o: '行くなら、いつがいい？', n: 'To respond to a stated plan, なら fits best.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Quick pick', items: ['<b>と</b> = natural law. <b>たら</b> = if/when (safe default). <b>ば</b> = general if. <b>なら</b> = “if that’s the case.”'] },
          { t: 'try', lab: 'Your turn', h: 'Choose the if', items: ['If it is cheap, I will buy it →', 'When I get home, I will eat →', 'When you push it, it opens →', 'If you are going to Tokyo, take the shinkansen →'], note: 'ば / たら / と / なら — one each.' }
        ]
      }
    },
    {
      focus: 'Giving and receiving — direction matters',
      sub: 'あげる・くれる・もらう',
      particle: 'に',
      read: { k: 1, task: 'Read the new passage with the translation' },
      produce: 'Say who gave what to whom, three ways.',
      lesson: {
        min: 6,
        secs: [
          { t: 'tf', lab: 'Three verbs', h: 'Who gives to whom', intro: 'The verb encodes direction. Watch where the arrow points.', rows: [
            { g: 'あげる ageru', r: 'I to others', n: '私は友達に本をあげた — I gave a book to a friend' },
            { g: 'くれる kureru', r: 'others to me', n: '友達は私に本をくれた — a friend gave me a book' },
            { g: 'もらう morau', r: 'I receive', n: '私は友達に本をもらった — I got a book from a friend' }
          ], note: '<b>くれる</b> always points toward me (or my side). That’s its whole job.' },
          { t: 'pat', lab: 'Favors', h: 'て-form + あげる／くれる／もらう', formula: ['て-form', '+', 'あげる／くれる／もらう'], mean: 'Give or receive an <b>action</b>, not just a thing.', ex: [
            { jp: '友達が手伝ってくれた。', rom: 'Tomodachi ga tetsudatte kureta.', en: 'My friend helped me (did me the favor).', bd: [['手伝って', 'help (て-form)'], ['くれた', 'did it for me']] },
            { jp: '先生に教えてもらった。', rom: 'Sensei ni oshiete moratta.', en: 'I had the teacher teach me.', bd: [['教えて', 'teach (て-form)'], ['もらった', 'received the favor']] }
          ] },
          { t: 'warn', lab: 'Watch out', h: 'Don’t point くれる the wrong way', items: [
            { x: '私は友達にプレゼントをくれた', o: '私は友達にプレゼントをあげた', n: 'When I give to others, use あげる, not くれる.' },
            { x: '友達は私に本をあげた', o: '友達は私に本をくれた', n: 'When someone gives to me, use くれる.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Arrows', items: ['<b>あげる</b> = away from me. <b>くれる</b> = toward me. <b>もらう</b> = I reach out and receive.'] },
          { t: 'try', lab: 'Your turn', h: 'Track the direction', items: ['I gave my friend chocolate →', 'My friend gave me a book →', 'I had my teacher check it →'], note: 'あげる / くれる / もらう — mind the arrow.' }
        ]
      }
    },
    {
      focus: 'Quoting and guessing — the recap',
      sub: 'と思う・と言う・かもしれない・そうだ',
      particle: 'か',
      read: { k: 1, task: 'Shadow the passage — a half-second behind' },
      produce: 'One opinion, one quote, one guess, one hearsay.',
      lesson: {
        min: 5,
        secs: [
          { t: 'tf', lab: 'Four reports', h: 'All built on the plain form', intro: 'Everything below attaches to a <b>plain-form</b> sentence.', rows: [
            { g: 'と思う', r: 'iku to omou', n: '行くと思う — I think I will go' },
            { g: 'と言う', r: 'iku to iu', n: '行くと言った — said that he will go' },
            { g: 'かもしれない', r: 'iku kamo shirenai', n: '行くかもしれない — might go' },
            { g: 'そうだ (hearsay)', r: 'iku sou da', n: '行くそうだ — I hear he will go' }
          ], note: 'Nouns keep <b>だ</b> before と and そうだ (学生だと思う), but drop it before <b>かもしれない</b> (学生かもしれない).' },
          { t: 'warn', lab: 'Watch out', h: 'Plain form, and mind だ', items: [
            { x: '行きますと思う', o: '行くと思う', n: 'Plain form goes before と.' },
            { x: '雨だかもしれない', o: '雨かもしれない', n: 'Drop だ before かもしれない.' },
            { x: '雨そうだ for hearsay', o: '雨だそうだ', n: 'Hearsay keeps だ on a noun: 雨だそうだ.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Anchor', items: ['Build the <b>plain sentence</b> first, then bolt on と思う／と言う／かもしれない／そうだ.'] },
          { t: 'try', lab: 'Your turn', h: 'Report four ways', items: ['I think it is cheap →', 'She said she will come →', 'It might be cold →', 'I hear the shop is closed →'], note: 'と思う / と言う / かもしれない / そうだ.' }
        ]
      }
    },
    {
      focus: 'Particles — the workhorses',
      sub: 'は/が, を/に/で, から/まで',
      particle: 'を',
      read: { k: 2, task: 'Read the third passage on your own' },
      produce: 'Fill six blanks with the right particle.',
      lesson: {
        min: 5,
        secs: [
          { t: 'tf', lab: 'Who does what', h: 'Each particle’s day job', intro: 'A quick map of the core particles.', rows: [
            { g: 'は', r: 'wa', n: 'topic — as for X' },
            { g: 'が', r: 'ga', n: 'subject — points to the doer or the new info' },
            { g: 'を', r: 'o', n: 'direct object of a transitive verb' },
            { g: 'に', r: 'ni', n: 'destination, time, target — 7時に, 東京に' },
            { g: 'で', r: 'de', n: 'place of action, means — カフェで, バスで' },
            { g: 'から／まで', r: 'kara / made', n: 'from / until — 9時から5時まで' }
          ], note: '<b>に</b> is the still target (a point); <b>で</b> is where the action happens.' },
          { t: 'warn', lab: 'Watch out', h: 'The classic mix-ups', items: [
            { x: '家に勉強する', o: '家で勉強する', n: 'An action happens at a place — use で.' },
            { x: 'バスに行きます by bus', o: 'バスで行きます', n: 'A means of transport takes で.' },
            { x: 'コーヒーが飲みます', o: 'コーヒーを飲みます', n: 'The object of a transitive verb takes を.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Two duels', items: ['<b>に</b> = a point (time or place you head to). <b>で</b> = where things happen. <b>は</b> sets the topic; <b>が</b> spotlights the subject.'] },
          { t: 'try', lab: 'Your turn', h: 'Drop in the particle', items: ['7時 __ 起きます (at 7) →', 'カフェ __ コーヒー __ 飲みます (at / object) →', '東京 __ 大阪 __ (from / to) →'], note: 'に, で, を, から, まで.' }
        ]
      }
    },
    {
      focus: 'Translation sprint — EN to JP',
      sub: 'Pull it all together',
      particle: 'で',
      read: { k: 2, task: 'Dictation — listen and write it, then compare' },
      produce: 'Translate five prompts without notes.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'The challenge', h: 'Say it in Japanese — no notes', body: ['Today is output only. Read each English prompt, build the Japanese out loud, then check.', 'Aim for <b>plain, correct sentences</b> — particles right, verb forms right. Speed comes later.'] },
          { t: 'pat', lab: 'Worked examples', h: 'From English to natural Japanese', formula: ['English idea', '→', 'plain Japanese'], mean: 'Notice the reordering — the verb goes last, and particles do the work.', ex: [
            { jp: '昨日、友達と映画を見ました。', rom: 'Kinou, tomodachi to eiga o mimashita.', en: 'Yesterday I watched a movie with a friend.', bd: [['友達と', 'with a friend'], ['映画を見ました', 'watched a movie']] },
            { jp: '時間があったら、行きたいと思います。', rom: 'Jikan ga attara, ikitai to omoimasu.', en: 'If I have time, I think I want to go.', bd: [['あったら', 'if there is (conditional)'], ['行きたいと思います', 'think I want to go']] }
          ] },
          { t: 'warn', lab: 'Watch out', h: 'Don’t translate word for word', items: [
            { x: '友達で映画を見た', o: '友達と映画を見た', n: '“with a person” is と, not で.' },
            { x: '私は思う、行く', o: '行くと思う', n: 'The thought comes first, then と思う — no separate word for “that.”' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Build order', items: ['Topic → time → place → object → <b>verb last</b>. Let the particles carry the meaning.'] },
          { t: 'try', lab: 'Your turn', h: 'Translate out loud', items: ['I get up at seven every morning →', 'If it rains tomorrow, I will stay home →', 'My friend gave me this book →', 'I hear the new restaurant is delicious →', 'I think Japanese is fun →'], note: 'Say each fully, then write it and check.' }
        ]
      }
    },
    {
      focus: 'Week review — self-check',
      sub: 'What stuck, what slipped',
      particle: 'ね',
      read: { k: 0, task: 'Re-read any passage and say a one-line summary aloud' },
      produce: 'Rate yourself on each topic; drill the weakest.',
      lesson: {
        min: 5,
        secs: [
          { t: 'p', lab: 'Recap', h: 'Everything, in one place', body: ['You sprinted through verb forms (て・た・ない・potential・volitional), conditionals (たら・ば・と・なら), giving and receiving, quoting & modality, and particles.', 'If any felt shaky, that’s your signal — loop back to that day’s unit before moving on.'] },
          { t: 'warn', lab: 'Last check', h: 'The greatest hits of mistakes', items: [
            { x: '行いて', o: '行って', n: 'The 行く te-form is irregular.' },
            { x: 'ドアを閉まる', o: 'ドアが閉まる', n: 'Intransitive takes が.' },
            { x: '家に勉強する', o: '家で勉強する', n: 'An action location takes で.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'The one habit', items: ['Before you speak: <b>pick the verb, then the particle it demands.</b> That fixes half of all errors.'] },
          { t: 'try', lab: 'Self-check', h: 'Can you do each, cold?', items: ['Conjugate 泳ぐ through all five forms →', 'Say one sentence per conditional →', 'Give and receive a favor with て-forms →', 'Report a fact with そうだ →'], note: 'Any miss? Revisit that day.' }
        ]
      }
    }
  ]
};

U[19] = {
  title: 'Free conversation & self-check',
  days: [
    {
      focus: 'Self-introduction — beyond the basics',
      sub: 'Say who you are with detail',
      particle: 'は',
      read: { k: 0, task: 'Read the passage with the translation open' },
      produce: 'Give a 20-second self-introduction.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'This week', h: 'Now you <b>talk</b>', body: ['This unit puts your grammar to work in real conversation. Each day is one situation you can actually hold.', 'Start with the door-opener: a self-introduction with real substance, not just your name.'] },
          { t: 'pat', lab: 'Model intro', h: 'A fuller はじめまして', formula: ['name', '+', 'details', '+', 'よろしく'], mean: 'Layer in where you’re from, what you do, and a hobby.', ex: [
            { jp: 'はじめまして。サムと申します。', rom: 'Hajimemashite. Samu to moushimasu.', en: 'Nice to meet you. I’m Sam.', bd: [['はじめまして', 'nice to meet you'], ['申します', 'am called (humble)']] },
            { jp: 'アメリカから来ました。今、日本語を勉強しています。', rom: 'Amerika kara kimashita. Ima, nihongo o benkyou shite imasu.', en: 'I’m from America. I’m studying Japanese now.', bd: [['から来ました', 'came from'], ['勉強しています', 'am studying']] },
            { jp: '趣味は料理です。どうぞよろしくお願いします。', rom: 'Shumi wa ryouri desu. Douzo yoroshiku onegai shimasu.', en: 'My hobby is cooking. Pleased to meet you.', bd: [['趣味は', 'as for my hobby'], ['よろしくお願いします', 'please treat me well']] }
          ] },
          { t: 'why', lab: 'Why this order', h: 'From label to hook', body: ['Open with はじめまして, give your name with <b>と申します</b> (the humble form of と言います), then add color: origin, activity, hobby.', 'End every intro with <b>よろしくお願いします</b> — it’s the social handshake.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Four beats', items: ['<b>Greeting → name → two facts → よろしく.</b> Same skeleton every time.'] },
          { t: 'try', lab: 'Your turn', h: 'Introduce yourself', items: ['Greeting + your name with と申します →', 'Where you are from + what you do →', 'One hobby + よろしくお願いします →'], note: 'Aim for four smooth sentences.' }
        ]
      }
    },
    {
      focus: 'Daily life — routine and frequency',
      sub: 'Time, order, how often',
      particle: 'に',
      read: { k: 0, task: 'Listen with the text hidden, then check' },
      produce: 'Describe your morning in five sentences.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'Model routine', h: 'A day, in order', formula: ['time + に', '+', 'action + それから'], mean: 'Chain your day with time markers and connectors.', ex: [
            { jp: '毎朝六時に起きます。', rom: 'Maiasa rokuji ni okimasu.', en: 'I get up at six every morning.', bd: [['六時に', 'at six o’clock'], ['起きます', 'get up']] },
            { jp: 'それから、朝ご飯を食べて、会社に行きます。', rom: 'Sorekara, asagohan o tabete, kaisha ni ikimasu.', en: 'After that, I eat breakfast and go to work.', bd: [['食べて', 'eat and (て-form)'], ['会社に行きます', 'go to the office']] }
          ] },
          { t: 'tf', lab: 'How often', h: 'Frequency words', intro: 'Slot these in before the verb to say how often.', rows: [
            { g: 'いつも', r: 'itsumo', n: 'always' },
            { g: 'よく', r: 'yoku', n: 'often' },
            { g: 'ときどき', r: 'tokidoki', n: 'sometimes' },
            { g: 'あまり', r: 'amari', n: 'not much (needs a negative verb)' },
            { g: 'ぜんぜん', r: 'zenzen', n: 'not at all (needs a negative verb)' }
          ], note: '<b>あまり</b> and <b>ぜんぜん</b> must pair with a <b>negative</b> verb: あまり見ない.' },
          { t: 'warn', lab: 'Watch out', h: 'Frequency needs the right polarity', items: [
            { x: 'あまり見ます', o: 'あまり見ません', n: 'あまり pairs with a negative verb.' },
            { x: 'ぜんぜん好きです', o: 'ぜんぜん好きじゃない', n: 'ぜんぜん needs a negative in standard use.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>あまり</b> and <b>ぜんぜん</b> lean negative — always finish them with a ない.'] },
          { t: 'try', lab: 'Your turn', h: 'Narrate your day', items: ['What time you get up →', 'Two things you do, chained with て →', 'One thing you often do, one you rarely do →'], note: 'Use 〜に for times and a frequency word.' }
        ]
      }
    },
    {
      focus: 'Opinions — say what you think and why',
      sub: 'と思う, が好き, reason with から',
      particle: 'が',
      read: { k: 1, task: 'Read the new passage with the translation' },
      produce: 'State an opinion with a reason.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'Model opinion', h: 'Claim + reason', formula: ['opinion + と思う', '+', 'reason + から'], mean: 'State it, then back it up with から.', ex: [
            { jp: '日本の夏は暑いと思います。', rom: 'Nihon no natsu wa atsui to omoimasu.', en: 'I think Japanese summers are hot.', bd: [['夏は', 'as for summer'], ['暑いと思います', 'think it is hot']] },
            { jp: '私は冬が好きです。涼しいからです。', rom: 'Watashi wa fuyu ga suki desu. Suzushii kara desu.', en: 'I like winter. It’s because it’s cool.', bd: [['冬が好き', 'like winter (が with 好き)'], ['涼しいから', 'because it is cool']] }
          ] },
          { t: 'why', lab: 'Why から', h: 'から = because', body: ['Put the reason first, then <b>から</b>: 涼しいから、冬が好きです (Because it’s cool, I like winter).', 'Or answer “why?” with just 〜からです: it stands alone as “It’s because ~.”'] },
          { t: 'warn', lab: 'Watch out', h: '好き and 上手 take が', items: [
            { x: '冬を好きです', o: '冬が好きです', n: '好き marks its object with が, not を.' },
            { x: '料理を上手です', o: '料理が上手です', n: '上手 (good at) also takes が.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['Opinion in <b>と思う</b>, reason in <b>から</b>, and remember: <b>好き and 上手 love が.</b>'] },
          { t: 'try', lab: 'Your turn', h: 'Opinion with a reason', items: ['Say a food you like with が好き →', 'Add why, using から →', 'Give one opinion with と思う →'], note: 'Claim first, then から for the reason.' }
        ]
      }
    },
    {
      focus: 'Making plans — invite and decide',
      sub: 'ませんか / ましょう + if',
      particle: 'か',
      read: { k: 1, task: 'Shadow the passage — a half-second behind' },
      produce: 'Invite someone and settle a plan.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'Model invite', h: 'A short planning exchange', formula: ['ませんか (invite)', '→', 'ましょう (settle)'], mean: 'Invite gently, then confirm together.', ex: [
            { jp: '週末、一緒に映画を見ませんか。', rom: 'Shuumatsu, issho ni eiga o mimasen ka.', en: 'Would you like to watch a movie together this weekend?', bd: [['一緒に', 'together'], ['見ませんか', 'won’t you watch (soft invite)']] },
            { jp: 'いいですね。じゃあ、土曜日に会いましょう。', rom: 'Ii desu ne. Jaa, doyoubi ni aimashou.', en: 'Sounds good. Then let’s meet on Saturday.', bd: [['いいですね', 'sounds good'], ['会いましょう', 'let’s meet']] },
            { jp: 'もし雨が降ったら、カフェに行きましょう。', rom: 'Moshi ame ga futtara, kafe ni ikimashou.', en: 'If it rains, let’s go to a cafe.', bd: [['降ったら', 'if it rains (conditional)'], ['行きましょう', 'let’s go']] }
          ] },
          { t: 'tf', lab: 'Invite vs decide', h: 'ませんか and ましょう', intro: 'Two polite planning tools.', rows: [
            { g: '〜ませんか', r: 'mimasen ka', n: 'a soft invitation — won’t you ~?' },
            { g: '〜ましょう', r: 'mimashou', n: 'let’s ~ (once you both agree)' },
            { g: '〜ましょうか', r: 'mimashou ka', n: 'shall we ~? / shall I ~?' }
          ], note: '<b>ませんか</b> invites; <b>ましょう</b> confirms the shared plan.' },
          { t: 'warn', lab: 'Watch out', h: 'Invite before you decide', items: [
            { x: '映画を見ましょうか as a first invite', o: '映画を見ませんか', n: 'ませんか is the softer, more polite opener.' },
            { x: 'もし雨が降ると、行きましょう', o: 'もし雨が降ったら、行きましょう', n: 'Pair plans with たら, not と.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Two-step', items: ['<b>ませんか</b> to open the door, <b>ましょう</b> to walk through it together.'] },
          { t: 'try', lab: 'Your turn', h: 'Set up a plan', items: ['Invite a friend to eat with ませんか →', 'Agree and pick a day with ましょう →', 'Add a rain plan with たら →'], note: 'Invite, confirm, then a backup with たら.' }
        ]
      }
    },
    {
      focus: 'Trouble — ask, apologize, recover',
      sub: 'Requests, もう一度, asking meaning',
      particle: 'を',
      read: { k: 2, task: 'Read the third passage on your own' },
      produce: 'Ask someone to repeat and explain a word.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'Model recovery', h: 'When you don’t catch it', formula: ['すみません', '+', 'request'], mean: 'Slow the conversation down, politely.', ex: [
            { jp: 'すみません、もう一度お願いします。', rom: 'Sumimasen, mou ichido onegai shimasu.', en: 'Sorry, once more please.', bd: [['もう一度', 'one more time'], ['お願いします', 'please']] },
            { jp: 'ゆっくり話してくださいませんか。', rom: 'Yukkuri hanashite kudasaimasen ka.', en: 'Could you please speak slowly?', bd: [['ゆっくり', 'slowly'], ['話してくださいませんか', 'could you speak (polite)']] },
            { jp: 'この言葉はどういう意味ですか。', rom: 'Kono kotoba wa dou iu imi desu ka.', en: 'What does this word mean?', bd: [['どういう意味', 'what kind of meaning'], ['ですか', 'is it?']] }
          ] },
          { t: 'tf', lab: 'Rescue phrases', h: 'Keep these ready', intro: 'Memorise them as whole chunks — no need to build them.', rows: [
            { g: 'もう一度お願いします', r: 'mou ichido onegai shimasu', n: 'once more, please' },
            { g: 'ゆっくりお願いします', r: 'yukkuri onegai shimasu', n: 'slowly, please' },
            { g: 'どういう意味ですか', r: 'dou iu imi desu ka', n: 'what does it mean?' },
            { g: 'ちょっと分かりません', r: 'chotto wakarimasen', n: 'I don’t quite understand' }
          ], note: 'A soft <b>ちょっと</b> before 分かりません softens “I don’t understand.”' },
          { t: 'warn', lab: 'Watch out', h: 'Stay polite under pressure', items: [
            { x: 'もう一度。', o: 'もう一度お願いします', n: 'Add お願いします — a bare command sounds abrupt.' },
            { x: '分からない to a stranger', o: 'ちょっと分かりません', n: 'Use the polite ません form with people you don’t know.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Three lifelines', items: ['<b>もう一度お願いします / ゆっくりお願いします / どういう意味ですか.</b> Keep them on the tip of your tongue.'] },
          { t: 'try', lab: 'Your turn', h: 'Recover smoothly', items: ['Ask them to repeat →', 'Ask them to slow down →', 'Ask what a word means →'], note: 'Start with すみません, end politely.' }
        ]
      }
    },
    {
      focus: 'Past story — chain it together',
      sub: 'て-links + past ending',
      particle: 'から',
      read: { k: 2, task: 'Dictation — listen and write it, then compare' },
      produce: 'Tell what you did yesterday in a chained story.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'Model story', h: 'One long chain, past at the end', formula: ['て … て', '+', 'past verb'], mean: 'Link events with て; only the last verb shows past tense.', ex: [
            { jp: '昨日、友達と会って、映画を見て、ご飯を食べました。', rom: 'Kinou, tomodachi to atte, eiga o mite, gohan o tabemashita.', en: 'Yesterday I met a friend, watched a movie, and ate a meal.', bd: [['会って', 'met and'], ['見て', 'watched and'], ['食べました', 'ate (past, ends the chain)']] },
            { jp: 'それから、家に帰って、すぐ寝ました。', rom: 'Sorekara, ie ni kaette, sugu nemashita.', en: 'After that, I went home and slept right away.', bd: [['帰って', 'went home and'], ['寝ました', 'slept (past)']] }
          ] },
          { t: 'why', lab: 'Why it works', h: 'One tense to rule them all', body: ['You don’t mark every verb for past. The <b>て-form</b> just says “and then,” staying tense-neutral.', 'The <b>final verb</b> (食べました) sets the tense for the whole chain — past here, so everything before it is understood as past too.'] },
          { t: 'warn', lab: 'Watch out', h: 'Don’t past-tense every link', items: [
            { x: '会いました、見ました、食べました', o: '会って、見て、食べました', n: 'Chain with て; only the last verb takes past.' },
            { x: '家に帰て', o: '家に帰って', n: '帰る is a u-verb: 帰って, with a small っ.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>て, て, て … 〜ました.</b> The tense waits for the very end.'] },
          { t: 'try', lab: 'Your turn', h: 'Tell yesterday’s story', items: ['Three things you did, chained with て →', 'End with a past-tense verb →', 'Add それから to link two chains →'], note: 'Only the last verb shows past.' }
        ]
      }
    },
    {
      focus: 'Self-assessment — can-do check',
      sub: 'What you can do, what to review',
      particle: 'ね',
      read: { k: 0, task: 'Re-read any passage and say a one-line summary aloud' },
      produce: 'List three things you can now do, and one to review.',
      lesson: {
        min: 5,
        secs: [
          { t: 'p', lab: 'Recap', h: 'You can hold a conversation', body: ['This week you built five real skills: introduce yourself, describe your routine, give opinions with reasons, make plans, recover from trouble, and tell a past story.', 'Put together, that’s a genuine conversation — greeting to goodbye.'] },
          { t: 'warn', lab: 'Last check', h: 'Small things that trip up talk', items: [
            { x: '冬を好きです', o: '冬が好きです', n: '好き takes が.' },
            { x: 'あまり行きます', o: 'あまり行きません', n: 'あまり needs a negative.' },
            { x: '会いました、見ました as a chain', o: '会って、見て…', n: 'Chain events with て.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'The mindset', items: ['Perfect isn’t the goal — <b>keeping the conversation going</b> is. Lean on your rescue phrases.'] },
          { t: 'try', lab: 'Can-do check', h: 'Rate yourself, then drill', items: ['Give a 20-second self-introduction →', 'Describe your daily routine →', 'State an opinion with a reason →', 'Invite someone and make a plan →', 'Tell a short past story →'], note: 'Shaky on any? That’s your next practice.' }
        ]
      }
    }
  ]
};
U[101] = {
  title: 'です sentences & questions',
  days: [
    {
      focus: 'XはYです — A is B',
      sub: 'Your very first sentence',
      particle: 'は',
      read: { k: 0, task: 'Read the passage with the translation open' },
      produce: 'Say what you are and what two friends are.',
      lesson: {
        min: 5,
        secs: [
          { t: 'p', lab: 'This week', h: 'Meet <b>です</b> — the “is / am / are” word', body: ['This unit builds the simplest Japanese sentence: <b>X は Y です</b> = “X is Y.”', 'The little <b>は</b> after X means “as for…,” and <b>です</b> is a polite way to say “is.” One frame, endless sentences.'] },
          { t: 'pat', lab: 'The pattern', h: 'X は Y です', formula: ['X は', '+', 'Y です'], mean: '“X is Y.” は points to the topic; <b>です</b> closes the sentence politely.', ex: [
            { jp: '私は学生です。', rom: 'Watashi wa gakusei desu.', en: 'I am a student.', bd: [['私は', 'I (topic) — wa'], ['学生です', 'am a student']] },
            { jp: '山田さんは日本人です。', rom: 'Yamada-san wa nihonjin desu.', en: 'Ms. Yamada is Japanese.', bd: [['山田さんは', 'Yamada (topic)'], ['日本人です', 'is Japanese']] }
          ] },
          { t: 'why', lab: 'Why it works', h: 'は sets the topic, です seals it', body: ['Think of <b>は</b> as a spotlight: “as for X…”. Everything after is the comment about X.', 'The sentence always ends in <b>です</b>. Japanese saves the verb for last, so です is your finish line.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>は</b> = “as for,” <b>です</b> = “is.” As for me — student — is.'] },
          { t: 'try', lab: 'Your turn', h: 'Build three', items: ['I / student →', 'Yamada / teacher →', 'Tanaka / Japanese →'], note: 'Topic first with は, then です at the end.' }
        ]
      }
    },
    {
      focus: '〜ですか — ask a yes or no question',
      sub: 'Adding か to ask',
      particle: 'か',
      read: { k: 0, task: 'Listen with the text hidden, then check' },
      produce: 'Ask three yes or no questions about a friend.',
      lesson: {
        min: 5,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'sentence + か', formula: ['… です', '+', 'か'], mean: 'Add <b>か</b> to the end and your statement becomes a question. No word order changes.', ex: [
            { jp: '田中さんは学生ですか。', rom: 'Tanaka-san wa gakusei desu ka.', en: 'Is Tanaka a student?', bd: [['田中さんは', 'Tanaka (topic)'], ['学生ですか', 'is a student?']] },
            { jp: '山田さんは先生ですか。', rom: 'Yamada-san wa sensei desu ka.', en: 'Is Ms. Yamada a teacher?', bd: [['先生ですか', 'is a teacher?']] }
          ] },
          { t: 'tf', lab: 'Answer it', h: 'はい (yes) and いいえ (no)', intro: 'Answer with <b>はい</b> or <b>いいえ</b>, then repeat the です part.', rows: [
            { g: '学生ですか。', r: 'gakusei desu ka', n: 'はい、学生です。 — Yes, (I) am a student.' },
            { g: '先生ですか。', r: 'sensei desu ka', n: 'いいえ、学生です。 — No, (I) am a student.' }
          ], note: 'はい = yes, いいえ = no. Short and clear.' },
          { t: 'why', lab: 'Why it works', h: 'か is a spoken question mark', body: ['Japanese does not flip the words around like English (“Are you…?”). It just tacks <b>か</b> on the end.', 'You often will not even see a “?” mark — the <b>か</b> already does that job.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>か</b> at the end = a question mark you can hear.'] },
          { t: 'try', lab: 'Your turn', h: 'Ask away', items: ['Tanaka / student →', 'Yamada / teacher →', 'this person / Japanese →'], note: 'Statement first, then add か.' }
        ]
      }
    },
    {
      focus: '〜じゃありません — is not',
      sub: 'The polite negative',
      particle: 'が',
      read: { k: 1, task: 'Read the new passage with the translation' },
      produce: 'Correct three wrong guesses about people.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'X は Y じゃありません', formula: ['X は Y', '+', 'じゃありません'], mean: '“X is not Y.” Swap <b>です</b> for <b>じゃありません</b> to make it negative.', ex: [
            { jp: '私は先生じゃありません。', rom: 'Watashi wa sensei ja arimasen.', en: 'I am not a teacher.', bd: [['私は', 'I (topic)'], ['先生じゃありません', 'am not a teacher']] },
            { jp: '山田さんは学生じゃありません。', rom: 'Yamada-san wa gakusei ja arimasen.', en: 'Ms. Yamada is not a student.', bd: [['学生じゃありません', 'is not a student']] }
          ] },
          { t: 'tf', lab: 'Two flavors', h: 'じゃありません and ではありません', intro: 'Both mean “is not.” <b>じゃ</b> is the everyday spoken form; <b>では</b> is a touch more formal.', rows: [
            { g: '学生じゃありません', r: 'gakusei ja arimasen', n: 'is not a student — casual polite' },
            { g: '学生ではありません', r: 'gakusei dewa arimasen', n: 'is not a student — more formal' }
          ], note: '<b>じゃ</b> is just a squeezed-together <b>では</b>. Same meaning.' },
          { t: 'warn', lab: 'Watch out', h: 'Do not glue ない onto です', items: [
            { x: '学生ですない', o: '学生じゃありません', n: 'The negative of です is じゃありません, not ですない.' },
            { x: '先生じゃない です', o: '先生じゃありません', n: 'Keep the polite ありません for a polite sentence.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>じゃありません</b> = the polite “nope.” です flips to じゃありません.'] },
          { t: 'try', lab: 'Your turn', h: 'Say it is not so', items: ['I / teacher / not →', 'Yamada / student / not →', 'this / pen / not →'], note: 'Replace です with じゃありません.' }
        ]
      }
    },
    {
      focus: 'でした — was and were',
      sub: 'Putting です in the past',
      particle: 'に',
      read: { k: 1, task: 'Shadow the passage — a half-second behind' },
      produce: 'Say what two people were, and what one was not.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'X は Y でした', formula: ['X は Y', '+', 'でした'], mean: '“X was Y.” <b>です</b> becomes <b>でした</b> for the past.', ex: [
            { jp: '昨日は休みでした。', rom: 'Kinou wa yasumi deshita.', en: 'Yesterday was a day off.', bd: [['昨日は', 'yesterday (topic)'], ['休みでした', 'was a day off']] },
            { jp: '田中さんは学生でした。', rom: 'Tanaka-san wa gakusei deshita.', en: 'Tanaka was a student.', bd: [['学生でした', 'was a student']] }
          ] },
          { t: 'tf', lab: 'All four corners', h: 'now vs past, yes vs no', intro: 'Here is the whole です family in one place.', rows: [
            { g: 'です', r: 'desu', n: 'is / am / are — now, yes' },
            { g: 'じゃありません', r: 'ja arimasen', n: 'is not — now, no' },
            { g: 'でした', r: 'deshita', n: 'was / were — past, yes' },
            { g: 'じゃありませんでした', r: 'ja arimasen deshita', n: 'was not — past, no' }
          ], note: 'Past-negative just adds <b>でした</b> onto じゃありません.' },
          { t: 'warn', lab: 'Watch out', h: 'The past is でした, not ですた', items: [
            { x: '休みですた', o: '休みでした', n: 'です turns into でした as one piece.' },
            { x: '学生でしたじゃありません', o: '学生じゃありませんでした', n: 'For was-not, put でした at the very end.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>でした</b> = “was.” Same word, wearing a past-tense coat.'] },
          { t: 'try', lab: 'Your turn', h: 'Talk about yesterday', items: ['yesterday / day off →', 'Tanaka / student / was →', 'I / teacher / was not →'], note: 'です to でした; じゃありません to じゃありませんでした.' }
        ]
      }
    },
    {
      focus: 'も — too and also',
      sub: 'Me too sentences',
      particle: 'も',
      read: { k: 2, task: 'Read the third passage on your own' },
      produce: 'Agree that you are the same, three times.',
      lesson: {
        min: 5,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'X も Y です', formula: ['X も', '+', 'Y です'], mean: '“X is Y too.” <b>も</b> means “also,” and it steps into は’s spot.', ex: [
            { jp: '私も学生です。', rom: 'Watashi mo gakusei desu.', en: 'I am a student too.', bd: [['私も', 'I too'], ['学生です', 'am a student']] },
            { jp: '田中さんも先生です。', rom: 'Tanaka-san mo sensei desu.', en: 'Tanaka is also a teacher.', bd: [['田中さんも', 'Tanaka too'], ['先生です', 'is a teacher']] }
          ] },
          { t: 'why', lab: 'Why it works', h: 'も replaces は, it does not join it', body: ['<b>も</b> lives in the same slot as は. When you add も, the は disappears — you do not keep both.', 'So “I am a student too” is 私<b>も</b>学生です, never 私はも….'] },
          { t: 'warn', lab: 'Watch out', h: 'One marker per topic', items: [
            { x: '私はも学生です', o: '私も学生です', n: 'も replaces は — drop the は.' },
            { x: '私もは学生です', o: '私も学生です', n: 'Never stack も and は together.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>も</b> = “me too.” It bumps は out and takes the seat.'] },
          { t: 'try', lab: 'Your turn', h: 'Say me too', items: ['I / student / too →', 'Tanaka / teacher / too →', 'Yamada / Japanese / too →'], note: 'Use も and drop は.' }
        ]
      }
    },
    {
      focus: 'の — glue two nouns together',
      sub: 'My book, Japanese teacher',
      particle: 'の',
      read: { k: 2, task: 'Dictation — listen and write it, then compare' },
      produce: 'Name three things that belong to you or others.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'A の B', formula: ['A の', '+', 'B'], mean: '<b>の</b> links two nouns: “A’s B” or “B of A.” The second noun is the main thing.', ex: [
            { jp: '私の本です。', rom: 'Watashi no hon desu.', en: 'It is my book.', bd: [['私の', 'my'], ['本です', 'is a book']] },
            { jp: '日本語の先生です。', rom: 'Nihongo no sensei desu.', en: 'It is a Japanese teacher.', bd: [['日本語の', 'of Japanese'], ['先生です', 'is a teacher']] },
            { jp: '山田さんの車です。', rom: 'Yamada-san no kuruma desu.', en: 'It is Ms. Yamada’s car.', bd: [['山田さんの', 'Yamada’s'], ['車です', 'is a car']] }
          ] },
          { t: 'why', lab: 'Why it works', h: 'の is like apostrophe-s or “of”', body: ['<b>の</b> ties one noun to another. It can mean ownership (私の本, my book) or type (日本語の先生, a teacher of Japanese).', 'The word after の is the real subject; the word before just describes it.'] },
          { t: 'warn', lab: 'Watch out', h: 'Order changes the meaning', items: [
            { x: '先生の日本語', o: '日本語の先生', n: 'A の B = B of A. 日本語の先生 is a teacher of Japanese, not the other way around.' },
            { x: '私本', o: '私の本', n: 'You need の between two nouns — do not just stack them.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>の</b> = “’s” or “of.” Owner の thing.'] },
          { t: 'try', lab: 'Your turn', h: 'Link the nouns', items: ['my / book →', 'Japanese / teacher →', 'Yamada / car →'], note: 'Owner or type first, then の, then the thing.' }
        ]
      }
    },
    {
      focus: 'Week review — です sentences',
      sub: 'Recap and last checks',
      particle: 'ね',
      read: { k: 0, task: 'Re-read any passage and say a one-line summary aloud' },
      produce: 'Say what you are, ask a friend, and correct one wrong guess.',
      lesson: {
        min: 5,
        secs: [
          { t: 'p', lab: 'Recap', h: 'One frame, many forms', body: ['This week grew from one seed: <b>X は Y です</b>. Then です stretched: <b>ですか</b> (question), <b>じゃありません</b> (not), <b>でした</b> (was), <b>じゃありませんでした</b> (was not).', 'You also met two helpers: <b>も</b> (also) and <b>の</b> (linking nouns).'] },
          { t: 'warn', lab: 'Last check', h: 'The usual slips', items: [
            { x: '私はも学生です', o: '私も学生です', n: 'も replaces は.' },
            { x: '休みですた', o: '休みでした', n: 'Past of です is でした.' },
            { x: '私本', o: '私の本', n: 'Use の to link two nouns.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'One line to keep', items: ['<b>は … です.</b> Everything else is just です changing outfits.'] },
          { t: 'try', lab: 'Your turn', h: 'Put it together', items: ['I am a student →', 'Are you a teacher? →', 'I am not a teacher →'], note: 'Statement, question, negative — one each.' }
        ]
      }
    }
  ]
};

U[102] = {
  title: 'Pointing at the world (こそあど)',
  days: [
    {
      focus: 'これ・それ・あれ — this and that',
      sub: 'Pointing at things',
      particle: 'は',
      read: { k: 0, task: 'Read the passage with the translation open' },
      produce: 'Name three objects — one near you, one far.',
      lesson: {
        min: 5,
        secs: [
          { t: 'tf', lab: 'The trio', h: 'Distance decides the word', intro: 'These three all mean “this / that” for <b>things</b>. Which one depends on where the thing is.', rows: [
            { g: 'これ', r: 'kore', n: 'this — near me, the speaker' },
            { g: 'それ', r: 'sore', n: 'that — near you, the listener' },
            { g: 'あれ', r: 'are', n: 'that over there — far from us both' }
          ], note: '<b>こ</b> near me, <b>そ</b> near you, <b>あ</b> far away.' },
          { t: 'pat', lab: 'In a sentence', h: 'これ は … です', formula: ['これ は', '+', '… です'], mean: 'Use them just like a noun: point, then say what it is.', ex: [
            { jp: 'これは本です。', rom: 'Kore wa hon desu.', en: 'This is a book.', bd: [['これは', 'this (topic)'], ['本です', 'is a book']] },
            { jp: 'それはペンです。', rom: 'Sore wa pen desu.', en: 'That is a pen.', bd: [['それは', 'that, near you'], ['ペンです', 'is a pen']] },
            { jp: 'あれは車です。', rom: 'Are wa kuruma desu.', en: 'That over there is a car.', bd: [['あれは', 'that, far away'], ['車です', 'is a car']] }
          ] },
          { t: 'why', lab: 'Why it works', h: 'A map around the speakers', body: ['<b>これ</b> is in my hands, <b>それ</b> is in yours, <b>あれ</b> is across the room from both of us.', 'It is not near vs far in general — it is measured from the two people talking.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>こ-そ-あ</b> = here, by-you, way-over-there. A ladder pointing outward.'] },
          { t: 'try', lab: 'Your turn', h: 'Point and name', items: ['this (in my hand) / book →', 'that (by you) / pen →', 'that far one / car →'], note: 'Pick これ, それ, or あれ by distance.' }
        ]
      }
    },
    {
      focus: 'この・その・あの + noun',
      sub: 'This book, that pen',
      particle: 'の',
      read: { k: 0, task: 'Listen with the text hidden, then check' },
      produce: 'Point at three things and describe each.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'この + noun', formula: ['この', '+', 'noun'], mean: '<b>この・その・あの</b> must be followed by a noun: “this book,” “that car.”', ex: [
            { jp: 'この本は面白いです。', rom: 'Kono hon wa omoshiroi desu.', en: 'This book is interesting.', bd: [['この本', 'this book'], ['面白いです', 'is interesting']] },
            { jp: 'その車は新しいです。', rom: 'Sono kuruma wa atarashii desu.', en: 'That car is new.', bd: [['その車', 'that car'], ['新しいです', 'is new']] },
            { jp: 'あの人は先生です。', rom: 'Ano hito wa sensei desu.', en: 'That person is a teacher.', bd: [['あの人', 'that person'], ['先生です', 'is a teacher']] }
          ] },
          { t: 'tf', lab: 'The pairs', h: 'これ stands alone, この needs a noun', intro: 'Same こ-そ-あ distances, but one set is a full word and one set needs a noun.', rows: [
            { g: 'これ / この本', r: 'kore / kono hon', n: 'this one / this book' },
            { g: 'それ / その本', r: 'sore / sono hon', n: 'that one / that book' },
            { g: 'あれ / あの本', r: 'are / ano hon', n: 'that far one / that book over there' }
          ], note: 'Drop the final れ, add the noun: これ becomes この ___.' },
          { t: 'warn', lab: 'Watch out', h: 'Do not mix the two sets', items: [
            { x: 'これ本', o: 'この本', n: 'Before a noun, use この, not これ.' },
            { x: 'この です', o: 'これ です', n: 'この cannot stand alone — it needs a noun after it.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>これ</b> = “this one.” <b>この</b> = “this ___.” The ___ is required.'] },
          { t: 'try', lab: 'Your turn', h: 'Point plus noun', items: ['this / book / interesting →', 'that / car / new →', 'that far / person / teacher →'], note: 'Use この, その, or あの right before the noun.' }
        ]
      }
    },
    {
      focus: 'ここ・そこ・あそこ — places',
      sub: 'Pointing at where',
      particle: 'に',
      read: { k: 1, task: 'Read the new passage with the translation' },
      produce: 'Say where three places or rooms are.',
      lesson: {
        min: 5,
        secs: [
          { t: 'tf', lab: 'The place trio', h: 'The こ-そ-あ set for locations', intro: 'These mean “here / there,” pointing at <b>places</b>.', rows: [
            { g: 'ここ', r: 'koko', n: 'here — where I am' },
            { g: 'そこ', r: 'soko', n: 'there — where you are' },
            { g: 'あそこ', r: 'asoko', n: 'over there — away from us both' }
          ], note: 'Careful: it is <b>あそこ</b>, not あこ.' },
          { t: 'pat', lab: 'In a sentence', h: 'X は ここ です', formula: ['X は', '+', 'ここ です'], mean: 'Say where something is by ending in a place word.', ex: [
            { jp: 'ここは教室です。', rom: 'Koko wa kyoushitsu desu.', en: 'This place is a classroom.', bd: [['ここは', 'here (topic)'], ['教室です', 'is a classroom']] },
            { jp: 'トイレはそこです。', rom: 'Toire wa soko desu.', en: 'The toilet is there.', bd: [['トイレは', 'the toilet (topic)'], ['そこです', 'is there']] },
            { jp: '銀行はあそこです。', rom: 'Ginkou wa asoko desu.', en: 'The bank is over there.', bd: [['銀行は', 'the bank (topic)'], ['あそこです', 'is over there']] }
          ] },
          { t: 'why', lab: 'Why it works', h: 'The same map, now for rooms', body: ['<b>ここ</b> is my spot, <b>そこ</b> is your spot, <b>あそこ</b> is somewhere away from us both.', 'It is the こ-そ-あ idea again — only now you are pointing at a place instead of a thing.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['Things end in <b>-れ</b> (これ); places end in <b>-こ</b> (ここ).'] },
          { t: 'try', lab: 'Your turn', h: 'Say the place', items: ['here / classroom →', 'toilet / there (by you) →', 'bank / over there →'], note: 'Use ここ, そこ, or あそこ.' }
        ]
      }
    },
    {
      focus: 'どれ・どの・どこ・何 — questions',
      sub: 'Which, where, what',
      particle: 'か',
      read: { k: 1, task: 'Shadow the passage — a half-second behind' },
      produce: 'Ask which one, where, and what.',
      lesson: {
        min: 6,
        secs: [
          { t: 'tf', lab: 'The ど-words', h: 'The question member of the family', intro: 'Swap こ-そ-あ for <b>ど</b> and you get the question.', rows: [
            { g: 'どれ', r: 'dore', n: 'which one — of three or more things' },
            { g: 'どの + noun', r: 'dono', n: 'which ___ — どの本, which book' },
            { g: 'どこ', r: 'doko', n: 'where — which place' },
            { g: '何', r: 'nan / nani', n: 'what' }
          ], note: 'Answer a <b>ど</b> question with a こ, そ, or あ word.' },
          { t: 'pat', lab: 'In a sentence', h: 'X は … ですか', formula: ['X は', '+', '… ですか'], mean: 'Drop the question word into the normal frame and add か.', ex: [
            { jp: 'これは何ですか。', rom: 'Kore wa nan desu ka.', en: 'What is this?', bd: [['これは', 'this (topic)'], ['何ですか', 'is what?']] },
            { jp: 'トイレはどこですか。', rom: 'Toire wa doko desu ka.', en: 'Where is the toilet?', bd: [['トイレは', 'the toilet (topic)'], ['どこですか', 'is where?']] },
            { jp: 'どの本ですか。', rom: 'Dono hon desu ka.', en: 'Which book is it?', bd: [['どの本', 'which book'], ['ですか', 'is it?']] }
          ] },
          { t: 'warn', lab: 'Watch out', h: '何 reads two ways', items: [
            { x: '何ですか as nani desu ka', o: '何ですか as nan desu ka', n: 'Before です the reading is nan, not nani.' },
            { x: 'どれ本ですか', o: 'どの本ですか', n: 'Before a noun use どの, just like この.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>ど</b> = the “?” cousin. こ-そ-あ answer, <b>ど</b> asks.'] },
          { t: 'try', lab: 'Your turn', h: 'Ask the question', items: ['this / what →', 'toilet / where →', 'which / book →'], note: 'Use どれ, どの, どこ, or 何, then か.' }
        ]
      }
    },
    {
      focus: 'こちら・そちら・あちら — the polite set',
      sub: 'This way, that way',
      particle: 'へ',
      read: { k: 2, task: 'Read the third passage on your own' },
      produce: 'Point politely and introduce one person.',
      lesson: {
        min: 6,
        secs: [
          { t: 'tf', lab: 'The polite set', h: 'こ-そ-あ, dressed up', intro: 'These are softer, more polite versions. They mean “this way / this one / this person.”', rows: [
            { g: 'こちら', r: 'kochira', n: 'this way / this one / this person — polite' },
            { g: 'そちら', r: 'sochira', n: 'that way, near you — polite' },
            { g: 'あちら', r: 'achira', n: 'that way over there — polite' },
            { g: 'どちら', r: 'dochira', n: 'which way / where — polite question' }
          ], note: 'The <b>-ちら</b> set is the formal, gentle cousin of これ / ここ.' },
          { t: 'pat', lab: 'In use', h: 'こちら for direction and people', formula: ['こちら', '+', 'へ / です'], mean: 'Use it to point a direction politely, or to introduce a person.', ex: [
            { jp: 'こちらへどうぞ。', rom: 'Kochira e douzo.', en: 'This way, please.', bd: [['こちらへ', 'this way (e)'], ['どうぞ', 'please, go ahead']] },
            { jp: 'お手洗いはあちらです。', rom: 'Otearai wa achira desu.', en: 'The restroom is that way.', bd: [['お手洗いは', 'the restroom (topic)'], ['あちらです', 'is that way']] },
            { jp: 'こちらは田中さんです。', rom: 'Kochira wa Tanaka-san desu.', en: 'This is Mr. Tanaka.', bd: [['こちらは', 'this person (polite)'], ['田中さんです', 'is Tanaka']] }
          ] },
          { t: 'why', lab: 'Why it works', h: 'Polite, and about direction', body: ['The <b>-ちら</b> words feel more respectful, so shops and staff love them. あちら sounds gentler than あれ.', 'They also lean toward <b>direction</b> (“this way”), and they politely introduce a person: こちらは… “this is….”'] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>-ちら</b> = the polite cousin. こちら = “this way / this esteemed person.”'] },
          { t: 'try', lab: 'Your turn', h: 'Be polite', items: ['this way / please →', 'restroom / that way →', 'this is / Tanaka →'], note: 'Use こちら, そちら, or あちら.' }
        ]
      }
    },
    {
      focus: 'Shopping — これはいくらですか',
      sub: 'Asking the price',
      particle: 'も',
      read: { k: 2, task: 'Dictation — listen and write it, then compare' },
      produce: 'Ask the price of three things and buy one.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The key phrase', h: 'X は いくら ですか', formula: ['X は', '+', 'いくら ですか'], mean: '<b>いくら</b> = “how much?” Point with これ and ask the price.', ex: [
            { jp: 'これはいくらですか。', rom: 'Kore wa ikura desu ka.', en: 'How much is this?', bd: [['これは', 'this (topic)'], ['いくらですか', 'is how much?']] },
            { jp: 'それをください。', rom: 'Sore o kudasai.', en: 'That one, please.', bd: [['それを', 'that one (o)'], ['ください', 'please give me']] },
            { jp: 'これもください。', rom: 'Kore mo kudasai.', en: 'This one too, please.', bd: [['これも', 'this one too'], ['ください', 'please give me']] }
          ] },
          { t: 'tf', lab: 'Shop phrases', h: 'A tiny survival kit', intro: 'Mix these with これ / それ / あれ and you can shop.', rows: [
            { g: 'いくらですか。', r: 'ikura desu ka', n: 'How much is it?' },
            { g: 'これをください。', r: 'kore o kudasai', n: 'This one, please. (I will take it)' },
            { g: 'これもください。', r: 'kore mo kudasai', n: 'This one too, please.' }
          ], note: '<b>を</b> marks the thing you take; <b>ください</b> means “please give me.”' },
          { t: 'why', lab: 'Why it works', h: 'Old words, real errand', body: ['You already know <b>これ・それ・あれ</b>. Add <b>いくら</b> (how much) and <b>ください</b> (please give me) and you can point-and-buy.', 'Notice <b>も</b> again: これ<b>も</b>ください = “this one too.” The same “also” from last week.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['Point (<b>これ</b>) + price (<b>いくら</b>) + get it (<b>ください</b>) = shopping.'] },
          { t: 'try', lab: 'Your turn', h: 'Go shopping', items: ['this / how much →', 'that one / please →', 'this one too / please →'], note: 'Use これ, それ, あれ with いくら and ください.' }
        ]
      }
    },
    {
      focus: 'Week review — こそあど',
      sub: 'Recap and last checks',
      particle: 'ね',
      read: { k: 0, task: 'Re-read any passage and say a one-line summary aloud' },
      produce: 'Point near, point far, and ask which one.',
      lesson: {
        min: 5,
        secs: [
          { t: 'p', lab: 'Recap', h: 'One family, four columns', body: ['Everything shares こ-そ-あ-ど: <b>これ・それ・あれ・どれ</b> (things), <b>この・その・あの・どの</b> (+ noun), <b>ここ・そこ・あそこ・どこ</b> (places), and the polite <b>こちら</b> set.', 'The rule never changes: <b>こ</b> near me, <b>そ</b> near you, <b>あ</b> far, <b>ど</b> asks.'] },
          { t: 'warn', lab: 'Last check', h: 'The usual slips', items: [
            { x: 'これ本', o: 'この本', n: 'Before a noun, use この not これ.' },
            { x: 'あこ', o: 'あそこ', n: 'The place word is あそこ.' },
            { x: '何ですか as nani', o: '何ですか as nan', n: 'Before です, 何 is read nan.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'One line to keep', items: ['<b>こ・そ・あ・ど</b> = me, you, far, ask. Learn the corner, fill the grid.'] },
          { t: 'try', lab: 'Your turn', h: 'Put it together', items: ['This is a book →', 'That book (by you) is new →', 'Which one is it? →'], note: 'Thing, this-book, and a どれ question.' }
        ]
      }
    }
  ]
};

U[103] = {
  title: 'Particles は・も・が',
  days: [
    {
      focus: 'は — the topic marker',
      sub: 'As for X…',
      particle: 'は',
      read: { k: 0, task: 'Read the passage with the translation open' },
      produce: 'State a topic and say one thing about it, three times.',
      lesson: {
        min: 5,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'X は (comment)', formula: ['X は', '+', 'comment'], mean: '<b>は</b> lifts X up as the topic: “as for X…,” then you comment on it.', ex: [
            { jp: '私は田中です。', rom: 'Watashi wa Tanaka desu.', en: 'As for me, I am Tanaka.', bd: [['私は', 'as for me'], ['田中です', 'am Tanaka']] },
            { jp: '天気はいいです。', rom: 'Tenki wa ii desu.', en: 'The weather is nice.', bd: [['天気は', 'as for the weather'], ['いいです', 'is nice']] }
          ] },
          { t: 'why', lab: 'Why it works', h: 'は raises a flag, then you talk about it', body: ['<b>は</b> announces what the sentence is about, and everything after is your comment on it.', 'It is not really “is” — it just sets the stage. Often you can hear it as “as for….”'] },
          { t: 'warn', lab: 'Watch out', h: 'Written は, spoken wa', items: [
            { x: 'reading 私は as watashi ha', o: 'reading 私は as watashi wa', n: 'As a particle, は is pronounced wa.' },
            { x: 'dropping it: 私田中です', o: '私は田中です', n: 'Keep は to mark the topic clearly.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>は</b> = “as for.” Raise the topic, then say your piece.'] },
          { t: 'try', lab: 'Your turn', h: 'Set a topic', items: ['me / Tanaka →', 'the weather / nice →', 'today / day off →'], note: 'Topic + は, then a comment.' }
        ]
      }
    },
    {
      focus: 'も — also, in place of は',
      sub: 'X too',
      particle: 'も',
      read: { k: 0, task: 'Listen with the text hidden, then check' },
      produce: 'Add a second person who is the same, three times.',
      lesson: {
        min: 5,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'X も (comment)', formula: ['X も', '+', 'comment'], mean: '<b>も</b> = “also / too.” It takes the exact spot where は or が would sit.', ex: [
            { jp: '私も学生です。', rom: 'Watashi mo gakusei desu.', en: 'I am a student too.', bd: [['私も', 'I too'], ['学生です', 'am a student']] },
            { jp: '田中さんも来ます。', rom: 'Tanaka-san mo kimasu.', en: 'Tanaka is coming too.', bd: [['田中さんも', 'Tanaka too'], ['来ます', 'comes / is coming']] }
          ] },
          { t: 'why', lab: 'Why it works', h: 'も swaps in, it does not pile on', body: ['<b>も</b> uses the same slot as は and が. So when も appears, は and が step aside.', 'That is how you say “me too”: 私<b>も</b>…, never 私はも….'] },
          { t: 'warn', lab: 'Watch out', h: 'Only one marker at a time', items: [
            { x: '私はも学生です', o: '私も学生です', n: 'も replaces は — drop the は.' },
            { x: '田中さんがも来ます', o: '田中さんも来ます', n: 'も replaces が too.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>も</b> = “also.” It shoves は or が out of the chair and sits down.'] },
          { t: 'try', lab: 'Your turn', h: 'Say too', items: ['I / student / too →', 'Tanaka / come / too →', 'Yamada / teacher / too →'], note: 'Use も; do not keep は or が.' }
        ]
      }
    },
    {
      focus: 'が — spotlight on the subject',
      sub: 'New info and who-did-it',
      particle: 'が',
      read: { k: 1, task: 'Read the new passage with the translation' },
      produce: 'Answer three who or what questions with が.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'X が (did / exists)', formula: ['X が', '+', 'verb'], mean: '<b>が</b> marks the subject, especially when it is <b>new</b> or the answer to “who / what?”', ex: [
            { jp: '田中さんが来ました。', rom: 'Tanaka-san ga kimashita.', en: 'Tanaka came. (it was Tanaka)', bd: [['田中さんが', 'Tanaka (new subject)'], ['来ました', 'came']] },
            { jp: 'だれが来ましたか。', rom: 'Dare ga kimashita ka.', en: 'Who came?', bd: [['だれが', 'who (subject)'], ['来ましたか', 'came?']] }
          ] },
          { t: 'why', lab: 'Why it works', h: 'が is the spotlight on brand-new info', body: ['Use <b>が</b> when the subject is fresh news or the specific answer: “It was <b>Tanaka</b> who came.”', 'Question words like <b>だれ</b> (who) and <b>何</b> (what) always take が, and their answers do too.'] },
          { t: 'warn', lab: 'Watch out', h: 'Question words never take は', items: [
            { x: 'だれは来ましたか', o: 'だれが来ましたか', n: 'Who / what questions take が, not は.' },
            { x: '田中さんは来ました (as the answer to who)', o: '田中さんが来ました', n: 'Answering “who?” — spotlight the subject with が.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>が</b> = the spotlight. New face on stage? Point with が.'] },
          { t: 'try', lab: 'Your turn', h: 'Spotlight it', items: ['who / came →', 'Tanaka / came (it was Tanaka) →', 'what / is here →'], note: 'Use が for the who / what and its answer.' }
        ]
      }
    },
    {
      focus: 'は vs が — the big contrast',
      sub: 'Known topic vs new subject',
      particle: 'か',
      read: { k: 1, task: 'Shadow the passage — a half-second behind' },
      produce: 'Say one idea with は, then the same idea with が.',
      lesson: {
        min: 6,
        secs: [
          { t: 'tf', lab: 'The core split', h: 'Old news takes は, new news takes が', intro: 'Same sentence, different spotlight. <b>は</b> = already-known topic; <b>が</b> = new or identified subject.', rows: [
            { g: '私は学生です。', r: 'watashi wa gakusei desu', n: 'As for me, I am a student. (topic: me)' },
            { g: '私が学生です。', r: 'watashi ga gakusei desu', n: 'I am the one who is the student. (answers who)' },
            { g: '犬がいます。', r: 'inu ga imasu', n: 'There is a dog. (brand-new info)' },
            { g: '犬は好きです。', r: 'inu wa suki desu', n: 'As for dogs, I like them. (known topic)' }
          ], note: '<b>は</b> looks back at what we know; <b>が</b> introduces something new.' },
          { t: 'why', lab: 'Why it works', h: 'Known vs new', body: ['If the listener already knows the thing, make it the topic with <b>は</b>. If it is fresh or you are picking it out, use <b>が</b>.', 'That is why answers to “who / what?” use <b>が</b> — the answer is the new piece of the puzzle.'] },
          { t: 'warn', lab: 'Watch out', h: 'Match the spotlight to the moment', items: [
            { x: 'だれは来ましたか', o: 'だれが来ましたか', n: 'New / unknown subject — use が.' },
            { x: '私は学生です as the answer to who is the student', o: '私が学生です', n: 'Identifying the one — use が.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>は</b> = old friend (already known). <b>が</b> = new arrival (just introduced).'] },
          { t: 'try', lab: 'Your turn', h: 'Switch the spotlight', items: ['as for me / student (は) →', 'I am the one / student (が) →', 'there is a dog (が) →'], note: 'Known idea uses は; new idea uses が.' }
        ]
      }
    },
    {
      focus: '好き・上手・ある take が',
      sub: 'The liked thing gets が',
      particle: 'に',
      read: { k: 2, task: 'Read the third passage on your own' },
      produce: 'Say three things you like using が.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'X は Y が 好きです', formula: ['X は', '+', 'Y が', '+', '好きです'], mean: 'With <b>好き</b> (like), <b>上手</b> (good at), and <b>ある</b> (have), the thing rides on <b>が</b>, not を.', ex: [
            { jp: '私は寿司が好きです。', rom: 'Watashi wa sushi ga suki desu.', en: 'I like sushi.', bd: [['私は', 'as for me'], ['寿司が', 'sushi (が)'], ['好きです', 'is liked']] },
            { jp: '田中さんは日本語が上手です。', rom: 'Tanaka-san wa nihongo ga jouzu desu.', en: 'Tanaka is good at Japanese.', bd: [['日本語が', 'Japanese (が)'], ['上手です', 'is skilled']] },
            { jp: 'お金があります。', rom: 'Okane ga arimasu.', en: 'I have money.', bd: [['お金が', 'money (が)'], ['あります', 'exists / have']] }
          ] },
          { t: 'why', lab: 'Why it works', h: 'These describe a state, not an action', body: ['<b>好き</b>, <b>上手</b>, and <b>ある</b> are not really actions you do to a thing — they describe how things are.', 'So the sushi is not an object you hit with を; it is the subject of “is liked,” and subjects take <b>が</b>.'] },
          { t: 'warn', lab: 'Watch out', h: 'Not を with these words', items: [
            { x: '寿司を好きです', o: '寿司が好きです', n: 'The liked thing takes が, not を.' },
            { x: '日本語を上手です', o: '日本語が上手です', n: '上手 (good at) also uses が.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>like / good-at / have</b> → the thing rides on <b>が</b>.'] },
          { t: 'try', lab: 'Your turn', h: 'Say what you like', items: ['I / sushi / like →', 'Tanaka / Japanese / good at →', 'money / have →'], note: 'Mark the thing with が, not を.' }
        ]
      }
    },
    {
      focus: 'は for contrast',
      sub: 'This one is fine, but…',
      particle: 'の',
      read: { k: 2, task: 'Dictation — listen and write it, then compare' },
      produce: 'Contrast two things using は twice.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'A は …, B は … (not)', formula: ['A は … が', '+', 'B は …'], mean: 'Put <b>は</b> on two items to set them against each other: “A yes, but B no.”', ex: [
            { jp: 'コーヒーは好きですが、お茶は好きじゃありません。', rom: 'Koohii wa suki desu ga, ocha wa suki ja arimasen.', en: 'I like coffee, but I do not like tea.', bd: [['コーヒーは', 'coffee (topic 1)'], ['が', 'but'], ['お茶は', 'tea (topic 2)']] },
            { jp: '日本語は分かりますが、中国語は分かりません。', rom: 'Nihongo wa wakarimasu ga, chuugokugo wa wakarimasen.', en: 'I understand Japanese, but not Chinese.', bd: [['日本語は', 'Japanese (topic 1)'], ['中国語は', 'Chinese (topic 2)']] }
          ] },
          { t: 'why', lab: 'Why it works', h: 'Two は marks draw a line between them', body: ['When you mark two things with <b>は</b>, you signal a contrast: this one behaves one way, that one another.', 'The little <b>が</b> in the middle here means “but,” connecting the two halves.'] },
          { t: 'warn', lab: 'Watch out', h: 'Do not confuse the two が', items: [
            { x: 'reading the middle が as the subject marker', o: 'reading が as but here', n: 'Between two clauses, が means but.' },
            { x: 'コーヒーが好きですが、お茶が…', o: 'コーヒーは好きですが、お茶は…', n: 'For contrast, mark both items with は.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['Two <b>は</b>s facing off = “this, but that.” A see-saw of contrast.'] },
          { t: 'try', lab: 'Your turn', h: 'Set up a contrast', items: ['coffee / like, but tea / not →', 'Japanese / understand, but Chinese / not →', 'today / busy, but tomorrow / free →'], note: 'Mark both sides with は.' }
        ]
      }
    },
    {
      focus: 'Week review — は・も・が',
      sub: 'Recap and last checks',
      particle: 'ね',
      read: { k: 0, task: 'Re-read any passage and say a one-line summary aloud' },
      produce: 'Use は, も, and が — one sentence each.',
      lesson: {
        min: 5,
        secs: [
          { t: 'p', lab: 'Recap', h: 'Three little words, three jobs', body: ['<b>は</b> raises a topic (as for X), <b>も</b> means “also” and replaces は or が, and <b>が</b> spotlights a new or identified subject.', 'The big idea: <b>は</b> is old news, <b>が</b> is new news. And feelings like 好き put the thing on <b>が</b>.'] },
          { t: 'warn', lab: 'Last check', h: 'The usual slips', items: [
            { x: 'だれは来ましたか', o: 'だれが来ましたか', n: 'Question words take が.' },
            { x: '私はも学生です', o: '私も学生です', n: 'も replaces は.' },
            { x: '寿司を好きです', o: '寿司が好きです', n: '好き puts the thing on が.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'One line to keep', items: ['<b>は</b> known, <b>が</b> new, <b>も</b> also. That is the whole week.'] },
          { t: 'try', lab: 'Your turn', h: 'Put it together', items: ['As for me, I am a student →', 'I am a student too →', 'Who came? →'], note: 'One は, one も, one が.' }
        ]
      }
    }
  ]
};

U[104] = {
  title: 'Existence: あります／います',
  days: [
    {
      focus: 'います — living things exist',
      sub: 'People and animals',
      particle: 'が',
      read: { k: 0, task: 'Read the passage with the translation open' },
      produce: 'Say three living things that are here.',
      lesson: {
        min: 5,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'X が います', formula: ['X が', '+', 'います'], mean: '<b>います</b> = “there is / exists,” for things that are <b>alive</b>: people and animals.', ex: [
            { jp: '猫がいます。', rom: 'Neko ga imasu.', en: 'There is a cat.', bd: [['猫が', 'a cat (subject)'], ['います', 'exists / is there']] },
            { jp: '田中さんがいます。', rom: 'Tanaka-san ga imasu.', en: 'Tanaka is here.', bd: [['田中さんが', 'Tanaka (subject)'], ['います', 'is here']] }
          ] },
          { t: 'why', lab: 'Why it works', h: 'います is for things that move on their own', body: ['Japanese has two “exist” verbs. <b>います</b> is the one for living things that can move by themselves — people, animals, fish, insects.', 'The thing that exists is the subject, so it gets <b>が</b>.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>います</b> starts like <b>いきもの</b> (living thing). Alive → います.'] },
          { t: 'try', lab: 'Your turn', h: 'Name the living', items: ['a cat / is here →', 'Tanaka / is here →', 'a student / is here →'], note: 'Living thing + が + います.' }
        ]
      }
    },
    {
      focus: 'あります — non-living things exist',
      sub: 'Objects, plants, places',
      particle: 'は',
      read: { k: 0, task: 'Listen with the text hidden, then check' },
      produce: 'Say three objects that are here.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'X が あります', formula: ['X が', '+', 'あります'], mean: '<b>あります</b> = “there is / exists,” for things that are <b>not alive</b>: objects, plants, buildings.', ex: [
            { jp: '本があります。', rom: 'Hon ga arimasu.', en: 'There is a book.', bd: [['本が', 'a book (subject)'], ['あります', 'exists / is there']] },
            { jp: '車があります。', rom: 'Kuruma ga arimasu.', en: 'There is a car.', bd: [['車が', 'a car (subject)'], ['あります', 'exists']] },
            { jp: '時間があります。', rom: 'Jikan ga arimasu.', en: 'There is time.', bd: [['時間が', 'time (subject)'], ['あります', 'exists / have']] }
          ] },
          { t: 'tf', lab: 'Sort them', h: 'Which verb for which thing', intro: 'Alive uses <b>います</b>; not-alive uses <b>あります</b>.', rows: [
            { g: '猫 (cat)', r: 'neko', n: 'alive → 猫がいます' },
            { g: '本 (book)', r: 'hon', n: 'not alive → 本があります' },
            { g: '先生 (teacher)', r: 'sensei', n: 'alive → 先生がいます' },
            { g: '木 (tree)', r: 'ki', n: 'not alive → 木があります' }
          ], note: 'A tree grows but cannot walk away, so it takes <b>あります</b>.' },
          { t: 'warn', lab: 'Watch out', h: 'Match the verb to alive-or-not', items: [
            { x: '猫があります', o: '猫がいます', n: 'A cat is alive — use います.' },
            { x: '本がいます', o: '本があります', n: 'A book is not alive — use あります.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['Can it walk off on its own? <b>います</b>. If not, <b>あります</b>.'] },
          { t: 'try', lab: 'Your turn', h: 'Name the objects', items: ['a book / is there →', 'a car / is there →', 'time / there is →'], note: 'Non-living + が + あります.' }
        ]
      }
    },
    {
      focus: 'に marks where it is',
      sub: 'Place に + thing が + exists',
      particle: 'に',
      read: { k: 1, task: 'Read the new passage with the translation' },
      produce: 'Say where three things are.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'place に X が あります', formula: ['place に', '+', 'X が あります'], mean: 'Put the location first with <b>に</b>, then the thing with <b>が</b>, then the exist verb.', ex: [
            { jp: '机の上に本があります。', rom: 'Tsukue no ue ni hon ga arimasu.', en: 'There is a book on the desk.', bd: [['机の上に', 'on the desk (に)'], ['本が', 'a book'], ['あります', 'exists']] },
            { jp: '部屋に猫がいます。', rom: 'Heya ni neko ga imasu.', en: 'There is a cat in the room.', bd: [['部屋に', 'in the room (に)'], ['猫が', 'a cat'], ['います', 'is there']] },
            { jp: '教室に学生がいます。', rom: 'Kyoushitsu ni gakusei ga imasu.', en: 'There is a student in the classroom.', bd: [['教室に', 'in the classroom (に)'], ['学生が', 'a student'], ['います', 'is there']] }
          ] },
          { t: 'why', lab: 'Why it works', h: 'に pins the place, が marks the thing', body: ['<b>に</b> is the location tag for existence — it answers “where?” Then <b>が</b> marks what is there.', 'The order is steady: <b>place に … thing が … あります/います</b>.'] },
          { t: 'warn', lab: 'Watch out', h: 'Existence uses に, not で', items: [
            { x: '机の上で本があります', o: '机の上に本があります', n: 'For where something exists, use に. で is for where actions happen.' },
            { x: '本が机の上にあります (fine) but 机の上に本を', o: '机の上に本があります', n: 'The thing that exists takes が, not を.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>Place に, thing が, then exists.</b> Location first, spotlight next.'] },
          { t: 'try', lab: 'Your turn', h: 'Say where', items: ['on the desk / a book →', 'in the room / a cat →', 'in the classroom / a student →'], note: 'Place + に, thing + が, then あります or います.' }
        ]
      }
    },
    {
      focus: 'は vs が in existence',
      sub: 'What is there vs where is X',
      particle: 'も',
      read: { k: 1, task: 'Shadow the passage — a half-second behind' },
      produce: 'Ask where a thing is, then say what is there.',
      lesson: {
        min: 6,
        secs: [
          { t: 'tf', lab: 'Two angles', h: 'New thing takes が, known thing takes は', intro: 'Introducing something? Use <b>が</b>. Asking about a thing you both know? Use <b>は</b>.', rows: [
            { g: '机の上に本があります。', r: 'tsukue no ue ni hon ga arimasu', n: 'There is a book on the desk. (new thing → が)' },
            { g: '本はどこにありますか。', r: 'hon wa doko ni arimasu ka', n: 'Where is the book? (known thing → は)' },
            { g: '本は机の上にあります。', r: 'hon wa tsukue no ue ni arimasu', n: 'The book is on the desk. (known → は)' },
            { g: '猫もいます。', r: 'neko mo imasu', n: 'There is also a cat. (adds another → も)' }
          ], note: 'First mention with <b>が</b>; once known, switch to <b>は</b>.' },
          { t: 'why', lab: 'Why it works', h: 'Same は vs が you already know', body: ['This is last week’s rule in a new setting. Brand-new item on stage → <b>が</b>. Something already in the conversation → <b>は</b>.', 'So “Where is the book?” uses <b>は</b> — you both know the book; you only want its place.'] },
          { t: 'warn', lab: 'Watch out', h: 'Known topic takes は', items: [
            { x: '本がどこにありますか', o: '本はどこにありますか', n: 'The book is known, so mark it with は.' },
            { x: '田中さんはいますか (fine) but answering there is one with は', o: '田中さんがいます', n: 'Announcing a new presence — use が.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['New on the table → <b>が</b>. Already on the table → <b>は</b>.'] },
          { t: 'try', lab: 'Your turn', h: 'Pick the marker', items: ['there is a book on the desk (が) →', 'where is the book? (は) →', 'there is also a cat (も) →'], note: 'New info が; known topic は.' }
        ]
      }
    },
    {
      focus: '上・下・中・となり — position words',
      sub: 'On, under, in, next to',
      particle: 'の',
      read: { k: 2, task: 'Read the third passage on your own' },
      produce: 'Place three things using position words.',
      lesson: {
        min: 6,
        secs: [
          { t: 'tf', lab: 'The position words', h: 'Where exactly', intro: 'These attach to a noun with <b>の</b>: Xの上 = “on top of X.”', rows: [
            { g: '上', r: 'ue', n: 'on / above' },
            { g: '下', r: 'shita', n: 'under / below' },
            { g: '中', r: 'naka', n: 'inside / in' },
            { g: 'となり', r: 'tonari', n: 'next to / beside' },
            { g: '前', r: 'mae', n: 'in front of' },
            { g: '後ろ', r: 'ushiro', n: 'behind' }
          ], note: 'Build it as <b>X の 上</b>, then add <b>に</b> for the location.' },
          { t: 'pat', lab: 'The pattern', h: 'X の 上 に … があります', formula: ['X の 上 に', '+', '… があります'], mean: 'Glue the position word to X with <b>の</b>, tag it with <b>に</b>, then say what exists.', ex: [
            { jp: '机の上に本があります。', rom: 'Tsukue no ue ni hon ga arimasu.', en: 'The book is on the desk.', bd: [['机の上に', 'on top of the desk'], ['本があります', 'there is a book']] },
            { jp: 'いすの下に猫がいます。', rom: 'Isu no shita ni neko ga imasu.', en: 'The cat is under the chair.', bd: [['いすの下に', 'under the chair'], ['猫がいます', 'there is a cat']] },
            { jp: '銀行のとなりにあります。', rom: 'Ginkou no tonari ni arimasu.', en: 'It is next to the bank.', bd: [['銀行のとなりに', 'next to the bank'], ['あります', 'exists']] }
          ] },
          { t: 'why', lab: 'Why it works', h: 'の links, に places', body: ['<b>の</b> ties the position word to its anchor: 机<b>の</b>上 = “the desk’s top.” Then <b>に</b> says that is the location.', 'It is the same の from before (owner の thing), just pointing at a spot.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['<b>X の 上 に</b> = “at X’s top.” Anchor の spot に thing.'] },
          { t: 'try', lab: 'Your turn', h: 'Place it exactly', items: ['on the desk / a book →', 'under the chair / a cat →', 'next to the bank / it is →'], note: 'X の position に, then が あります or います.' }
        ]
      }
    },
    {
      focus: 'Counting things — 〜が二つあります',
      sub: 'How many are there',
      particle: 'か',
      read: { k: 2, task: 'Dictation — listen and write it, then compare' },
      produce: 'Say how many of three things there are.',
      lesson: {
        min: 6,
        secs: [
          { t: 'pat', lab: 'The pattern', h: 'X が [number] あります', formula: ['X が', '+', 'number', '+', 'あります'], mean: 'The number sits right before the verb, with <b>no</b> particle after it.', ex: [
            { jp: 'りんごが二つあります。', rom: 'Ringo ga futatsu arimasu.', en: 'There are two apples.', bd: [['りんごが', 'apples'], ['二つ', 'two (things)'], ['あります', 'exist']] },
            { jp: '学生が二人います。', rom: 'Gakusei ga futari imasu.', en: 'There are two students.', bd: [['学生が', 'students'], ['二人', 'two (people)'], ['います', 'are there']] },
            { jp: 'いくつありますか。', rom: 'Ikutsu arimasu ka.', en: 'How many are there?', bd: [['いくつ', 'how many'], ['ありますか', 'are there?']] }
          ] },
          { t: 'tf', lab: 'A few counters', h: 'Generic counting and people', intro: 'For general things use <b>ひとつ・ふたつ・みっつ</b>; for people use <b>ひとり・ふたり</b>.', rows: [
            { g: '一つ / 二つ / 三つ', r: 'hitotsu / futatsu / mittsu', n: 'one / two / three — general things' },
            { g: '一人 / 二人', r: 'hitori / futari', n: 'one person / two people' },
            { g: 'いくつ', r: 'ikutsu', n: 'how many (general)' }
          ], note: 'The number goes after が and before あります / います.' },
          { t: 'why', lab: 'Why it works', h: 'Numbers hug the verb', body: ['Counting words are adverbs here — they attach to the verb and take <b>no</b> particle of their own.', 'So it is 本が三つあります, never 本が三つ<b>を</b>あります.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Hook', items: ['How many? The number <b>hugs the verb</b>: … が [number] あります.'] },
          { t: 'try', lab: 'Your turn', h: 'Count them', items: ['apples / two / there are →', 'students / two / there are →', 'how many are there? →'], note: 'Number right before あります or います, no particle.' }
        ]
      }
    },
    {
      focus: 'Week review — あります／います',
      sub: 'Recap and last checks',
      particle: 'ね',
      read: { k: 0, task: 'Re-read any passage and say a one-line summary aloud' },
      produce: 'Say what is where — one living, one non-living.',
      lesson: {
        min: 5,
        secs: [
          { t: 'p', lab: 'Recap', h: 'Two verbs, one frame', body: ['<b>います</b> is for living things, <b>あります</b> for non-living. The frame is <b>place に … thing が … exists</b>.', 'You add position words with <b>の</b> (机の上に), switch to <b>は</b> for a known thing, and drop a number right before the verb to count.'] },
          { t: 'warn', lab: 'Last check', h: 'The usual slips', items: [
            { x: '猫があります', o: '猫がいます', n: 'Living things take います.' },
            { x: '机の上で本があります', o: '机の上に本があります', n: 'Existence location uses に, not で.' },
            { x: '本が二つをあります', o: '本が二つあります', n: 'No particle after the number.' }
          ] },
          { t: 'mem', lab: 'Make it stick', h: 'One line to keep', items: ['Alive → <b>います</b>, not → <b>あります</b>. Place <b>に</b>, thing <b>が</b>.'] },
          { t: 'try', lab: 'Your turn', h: 'Put it together', items: ['There is a cat in the room →', 'There is a book on the desk →', 'There are two apples →'], note: 'One います, one あります, one with a number.' }
        ]
      }
    }
  ]
};
U[105] = {
  title: 'Verbs (ます-form)',
  days: [
    {
      focus: 'The ます-form — polite present and future',
      sub: 'One shape, two times',
      particle: 'は',
      read: { k: 0, task: 'Read the passage with the translation open' },
      produce: 'Say three things you do every day.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'Start here', h: 'One form covers now and later',
            body: ['Japanese has no separate future tense. The polite <b>ます-form</b> covers both what you <b>do</b> and what you <b>will do</b>. 食べます can mean “I eat” or “I will eat” — context decides.'] },
          { t: 'tf', lab: 'Build it', h: 'From dictionary form to ます',
            intro: 'Take the verb, find its stem, and add ます. る-verbs simply drop る; う-verbs shift the last sound to an い-row syllable.',
            rows: [
              { g: 'る-verb', r: '食べる → 食べます', n: 'eat (taberu → tabemasu)' },
              { g: 'る-verb', r: '見る → 見ます', n: 'see, watch (miru → mimasu)' },
              { g: 'う-verb', r: '行く → 行きます', n: 'go (iku → ikimasu)' },
              { g: 'う-verb', r: '飲む → 飲みます', n: 'drink (nomu → nomimasu)' }
            ],
            note: 'The <b>ます</b> ending is the polite marker — picture a small bow at the end of the sentence.' },
          { t: 'pat', lab: 'The rule', h: 'Saying what you do',
            formula: ['verb stem', '+', 'ます'],
            mean: 'A polite statement of a habit, a fact, or a plan — “I do ~” or “I will do ~.”',
            ex: [
              { jp: 'あした来ます。', rom: 'Ashita kimasu.', en: 'I will come tomorrow.',
                bd: [['あした', 'tomorrow'], ['来ます', 'come (polite)']] },
              { jp: 'わたしはよく食べます。', rom: 'Watashi wa yoku tabemasu.', en: 'I eat a lot.',
                bd: [['わたし', 'I'], ['は', '(topic)'], ['よく', 'a lot, often'], ['食べます', 'eat (polite)']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'No future tense needed',
            body: ['A time word like <b>あした</b> (tomorrow) tells the listener <i>when</i>, so the verb itself does not need to change. Learn one form and you get present and future for free.'] },
          { t: 'mem', lab: 'Make it stick', h: 'ます = manners',
            items: ['<b>ます</b> is the polite tail. Picture a tiny bow (ます) at the end of every sentence you say to someone new.'] },
          { t: 'try', lab: 'Your turn', h: 'Say your routine',
            items: ['Say: I will come tomorrow.', 'Say: I eat a lot. (わたしは ___ )', 'Fill in: 毎日、日本語を ___ (study).'],
            note: 'Tap the words in the examples above to check yourself.' }
        ]
      }
    },
    {
      focus: '〜ません — the polite negative',
      sub: 'Say you do not do it',
      particle: 'も',
      read: { k: 0, task: 'Listen with the text hidden, then check' },
      produce: 'Say two things you do not do.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'Today', h: 'The polite no',
            body: ['To make a verb negative, change <b>ます</b> to <b>ません</b>. The stem never moves — only the tail.'] },
          { t: 'pat', lab: 'The rule', h: '〜ません',
            formula: ['verb stem', '+', 'ません'],
            mean: 'A polite negative — “I do not ~” or “I will not ~.”',
            ex: [
              { jp: 'あまり飲みません。', rom: 'Amari nomimasen.', en: 'I do not drink much.',
                bd: [['あまり', '(not) much'], ['飲みません', 'do not drink']] },
              { jp: 'わたしも行きません。', rom: 'Watashi mo ikimasen.', en: 'I will not go either.',
                bd: [['わたし', 'I'], ['も', 'too, either'], ['行きません', 'will not go']] }
            ],
            extra: '<b>あまり</b> and <b>も</b> both love the negative: あまり…ません means “not much,” and …も…ません means “not … either.”' },
          { t: 'tf', lab: 'Two forms', h: 'Affirmative vs negative',
            rows: [
              { g: 'affirmative', r: '食べます', n: 'tabemasu — eat' },
              { g: 'negative', r: '食べません', n: 'tabemasen — do not eat' }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'Do not build it like English',
            items: [
              { x: '食べますない', o: '食べません', n: 'Do not tack ない onto ます. The negative IS ません — one word replaces ます.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'sen = none',
            items: ['<b>ません</b> ends in <i>sen</i>. Picture an empty <i>zen</i> garden: nothing happens — the negative.'] },
          { t: 'try', lab: 'Your turn', h: 'Say no politely',
            items: ['Say: I do not drink much.', 'Say: I will not go either. (わたし ___ 行きません)', 'Make 見ます negative.'],
            note: 'Tap words above to check.' }
        ]
      }
    },
    {
      focus: '〜ました — the polite past',
      sub: 'Talk about what you did',
      particle: 'よ',
      read: { k: 1, task: 'Read the new passage with the translation' },
      produce: 'Say two things you did yesterday.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'Today', h: 'Yesterday, politely',
            body: ['Change <b>ます</b> to <b>ました</b> for the past. 食べます (eat) becomes 食べました (ate). Same stem again — only the tail shifts.'] },
          { t: 'pat', lab: 'The rule', h: '〜ました',
            formula: ['verb stem', '+', 'ました'],
            mean: 'A polite past — “I did ~.”',
            ex: [
              { jp: 'きのう来ました。', rom: 'Kinou kimashita.', en: 'I came yesterday.',
                bd: [['きのう', 'yesterday'], ['来ました', 'came']] },
              { jp: 'よく勉強しましたよ。', rom: 'Yoku benkyou shimashita yo.', en: 'I studied a lot, you know.',
                bd: [['よく', 'a lot'], ['勉強しました', 'studied'], ['よ', '(you know)']] }
            ],
            extra: '<b>よ</b> at the end adds “you know / let me tell you” — you are giving the listener new information.' },
          { t: 'tf', lab: 'Three forms', h: 'Now the past joins',
            rows: [
              { g: 'present / future', r: '食べます', n: 'tabemasu — eat / will eat' },
              { g: 'negative', r: '食べません', n: 'tabemasen — do not eat' },
              { g: 'past', r: '食べました', n: 'tabemashita — ate' }
            ] },
          { t: 'why', lab: 'Why it works', h: 'One swap, a new time',
            body: ['The stem 食べ never changes. Only the tail — <b>ます / ません / ました</b> — carries the time and the yes-or-no. Master the tails and you can shift <i>any</i> verb.'] },
          { t: 'mem', lab: 'Make it stick', h: 'ta = past',
            items: ['<b>ました</b> hides a <i>ta</i> sound — and <b>た</b> is the past-tense signal all over Japanese (食べた, 行った).'] },
          { t: 'try', lab: 'Your turn', h: 'Talk about yesterday',
            items: ['Say: I came yesterday.', 'Say: I studied a lot, you know. (add よ)', 'Make 飲みます past.'],
            note: 'Tap words above to check.' }
        ]
      }
    },
    {
      focus: '〜ませんでした — the polite past negative',
      sub: 'What you did not do',
      particle: 'か',
      read: { k: 1, task: 'Shadow the passage — a half-second behind' },
      produce: 'Say two things you did not do yesterday.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'Today', h: 'Did not, politely',
            body: ['Add <b>でした</b> after <b>ません</b>: 食べ<b>ませんでした</b> means “did not eat.” It is long, but it is just ません plus the past helper でした.'] },
          { t: 'tf', lab: 'The four forms', h: 'The complete ます-family',
            intro: 'Learn this grid and you can conjugate any polite verb. Notice the stem 食べ never changes — only the ending moves.',
            rows: [
              { g: 'present / future', r: '食べます', n: 'tabemasu — eat / will eat' },
              { g: 'negative', r: '食べません', n: 'tabemasen — do not eat' },
              { g: 'past', r: '食べました', n: 'tabemashita — ate' },
              { g: 'past negative', r: '食べませんでした', n: 'tabemasen deshita — did not eat' }
            ],
            note: 'Four tails, one stem. Chant them in order until they are automatic.' },
          { t: 'pat', lab: 'In use', h: 'Asking and answering',
            formula: ['ません', '+', 'でした'],
            mean: 'A polite past negative — “I did not ~.”',
            ex: [
              { jp: 'きのう来ましたか。', rom: 'Kinou kimashita ka.', en: 'Did you come yesterday?',
                bd: [['きのう', 'yesterday'], ['来ました', 'came'], ['か', '(question)']] },
              { jp: 'いいえ、来ませんでした。', rom: 'Iie, kimasen deshita.', en: 'No, I did not come.',
                bd: [['いいえ', 'no'], ['来ませんでした', 'did not come']] }
            ],
            extra: '<b>か</b> turns any statement into a question — just add it to the end. 来ました becomes 来ましたか.' },
          { t: 'warn', lab: 'Watch out', h: 'Verbs are not adjectives',
            items: [
              { x: '食べませんかった', o: '食べませんでした', n: 'The past negative is ません plus でした. There is no かった on a verb — that ending belongs to adjectives.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Two blocks',
            items: ['<b>ませんでした</b> = <i>polite no</i> (ません) + <i>past helper</i> (でした). Say it as two blocks, not one scary word.'] },
          { t: 'try', lab: 'Your turn', h: 'Ask and deny',
            items: ['Ask: Did you come yesterday? (きのう来ました ___ )', 'Answer: No, I did not eat.', 'Make 行きます past negative.'],
            note: 'Tap words above to check.' }
        ]
      }
    },
    {
      focus: 'を — the direct-object particle',
      sub: 'Mark what the verb acts on',
      particle: 'を',
      read: { k: 2, task: 'Read the third passage on your own' },
      produce: 'Say three things you eat or drink, using を.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'Today', h: 'The target of the action',
            body: ['<b>を</b> goes right after the noun that receives the action — what you eat, drink, read, or watch. It is written を but pronounced <b>o</b>.'] },
          { t: 'pat', lab: 'The rule', h: 'noun を verb',
            formula: ['noun', '+', 'を', '+', 'verb'],
            mean: 'を marks the direct object — the thing the verb happens to.',
            ex: [
              { jp: 'パンを食べます。', rom: 'Pan o tabemasu.', en: 'I eat bread.',
                bd: [['パン', 'bread'], ['を', '(object)'], ['食べます', 'eat']] },
              { jp: '水を飲みます。', rom: 'Mizu o nomimasu.', en: 'I drink water.',
                bd: [['水', 'water'], ['を', '(object)'], ['飲みます', 'drink']] },
              { jp: 'テレビを見ました。', rom: 'Terebi o mimashita.', en: 'I watched TV.',
                bd: [['テレビ', 'TV'], ['を', '(object)'], ['見ました', 'watched']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'を points the verb at its object',
            body: ['Japanese word order is flexible, so a marker has to tell you which noun is the object. <b>を</b> is that flag, and the object sits <i>before</i> the verb: パンを食べます, never 食べますパン.'] },
          { t: 'warn', lab: 'Watch out', h: 'Written を, said o',
            items: [
              { x: 'read を as wo', o: 'read を as o', n: 'The particle を is pronounced o. Its kana looks like wo, but nobody says the w here.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'A little hook',
            items: ['<b>を</b> is a hook that grabs the object and hands it to the verb: [thing] を [do it].'] },
          { t: 'try', lab: 'Your turn', h: 'Mark the object',
            items: ['Say: I eat bread. (パン ___ 食べます)', 'Say: I drank water. (水 ___ 飲みました)', 'Say one food + を + 食べます.'],
            note: 'Tap words above to check.' }
        ]
      }
    },
    {
      focus: 'に / へ for destination, で for place of action',
      sub: 'Go there, do it there',
      particle: 'に',
      read: { k: 2, task: 'Dictation — listen and write it, then compare' },
      produce: 'Say where you go and where you eat.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'Today', h: 'Two jobs, three particles',
            body: ['<b>に</b> and <b>へ</b> mark the place you go <i>to</i>. <b>で</b> marks the place where an action <i>happens</i>. Go there with に, do it there with で.'] },
          { t: 'pat', lab: 'Destination', h: 'place に / へ 行きます',
            formula: ['place', '+', 'に / へ', '+', '行きます'],
            mean: 'に or へ marks where you go — the destination.',
            ex: [
              { jp: '学校に行きます。', rom: 'Gakkou ni ikimasu.', en: 'I go to school.',
                bd: [['学校', 'school'], ['に', '(to)'], ['行きます', 'go']] },
              { jp: '日本へ行きました。', rom: 'Nihon e ikimashita.', en: 'I went to Japan.',
                bd: [['日本', 'Japan'], ['へ', '(to)'], ['行きました', 'went']] }
            ] },
          { t: 'pat', lab: 'Place of action', h: 'place で verb',
            formula: ['place', '+', 'で', '+', 'verb'],
            mean: 'で marks where the action is performed.',
            ex: [
              { jp: '家で食べます。', rom: 'Uchi de tabemasu.', en: 'I eat at home.',
                bd: [['家', 'home'], ['で', '(at)'], ['食べます', 'eat']] },
              { jp: '図書館で勉強しました。', rom: 'Toshokan de benkyou shimashita.', en: 'I studied at the library.',
                bd: [['図書館', 'library'], ['で', '(at)'], ['勉強しました', 'studied']] }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'Do not swap them',
            items: [
              { x: '学校で行きます', o: '学校に行きます', n: 'Movement toward a place takes に or へ, not で. で is only for where an action takes place.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Dot vs stage',
            items: ['<b>に</b> = the dot you land on (a destination). <b>で</b> = the stage where the action is performed.'] },
          { t: 'try', lab: 'Your turn', h: 'Places',
            items: ['Say: I go to school. (学校 ___ 行きます)', 'Say: I eat at home. (家 ___ 食べます)', 'Say: I studied at the library.'],
            note: 'Tap words above to check.' }
        ]
      }
    },
    {
      focus: 'Review — the ます-forms and their particles',
      sub: 'Week review',
      particle: 'ね',
      read: { k: 0, task: 'Re-read any passage and say a one-line summary aloud' },
      produce: 'Tell a short story: where you went and what you did.',
      lesson: {
        min: 7,
        secs: [
          { t: 'p', lab: 'Review', h: 'What you built this week',
            body: ['This week: the four <b>ます-forms</b> and the particles <b>を</b> (object), <b>に / へ</b> (destination), and <b>で</b> (place of action). Let us tie them together.'] },
          { t: 'tf', lab: 'The four forms', h: 'One more pass, with 行く',
            rows: [
              { g: 'present / future', r: '行きます', n: 'ikimasu — go / will go' },
              { g: 'negative', r: '行きません', n: 'ikimasen — do not go' },
              { g: 'past', r: '行きました', n: 'ikimashita — went' },
              { g: 'past negative', r: '行きませんでした', n: 'ikimasen deshita — did not go' }
            ] },
          { t: 'pat', lab: 'Put it together', h: 'Full sentences',
            formula: ['place で', '+', 'object を', '+', 'verb'],
            mean: 'Stack the particles in order and a full sentence appears.',
            ex: [
              { jp: '毎日、家でごはんを食べます。', rom: 'Mainichi, uchi de gohan o tabemasu.', en: 'Every day I eat a meal at home.',
                bd: [['毎日', 'every day'], ['家', 'home'], ['で', '(at)'], ['ごはん', 'meal'], ['を', '(object)'], ['食べます', 'eat']] },
              { jp: 'きのう、学校へ行きましたね。', rom: 'Kinou, gakkou e ikimashita ne.', en: 'You went to school yesterday, right?',
                bd: [['きのう', 'yesterday'], ['学校', 'school'], ['へ', '(to)'], ['行きました', 'went'], ['ね', '(right?)']] }
            ],
            extra: '<b>ね</b> at the end asks for agreement — “…right?” It softens a statement and invites the listener to nod along.' },
          { t: 'warn', lab: 'Quick check', h: 'に or で?',
            items: [
              { x: '家に食べます', o: '家で食べます', n: 'Eating is an action, so the place takes で. に would wrongly turn 家 into a destination.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Slot order',
            items: ['A natural order to lean on: <b>time — place で — object を — verb</b>. Fill the slots and you have a sentence.'] },
          { t: 'try', lab: 'Your turn', h: 'Build a story',
            items: ['Say: Every day I eat a meal at home.', 'Say: You went to school yesterday, right? (add ね)', 'Make one sentence with で + を + a ます-verb.'],
            note: 'Tap words above to check.' }
        ]
      }
    }
  ]
};

U[106] = {
  title: 'Negative, past & destinations',
  days: [
    {
      focus: 'Recap — the four ます-forms at a glance',
      sub: 'Warm-up review',
      particle: 'は',
      read: { k: 0, task: 'Read the passage with the translation open' },
      produce: 'Conjugate three verbs through all four forms.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'Recap', h: 'Back to the grid',
            body: ['A quick refresher before we add new particles. Every polite verb has four core forms — present, negative, past, and past negative.'] },
          { t: 'tf', lab: 'The four forms', h: 'With 飲む (drink)',
            rows: [
              { g: 'present / future', r: '飲みます', n: 'nomimasu — drink / will drink' },
              { g: 'negative', r: '飲みません', n: 'nomimasen — do not drink' },
              { g: 'past', r: '飲みました', n: 'nomimashita — drank' },
              { g: 'past negative', r: '飲みませんでした', n: 'nomimasen deshita — did not drink' }
            ],
            note: 'Only the tail changes: <b>-ます / -ません / -ました / -ませんでした</b>.' },
          { t: 'pat', lab: 'In use', h: 'Quick sentences',
            formula: ['topic は', '+', 'ます-verb'],
            mean: 'は marks the topic — “as for X, …”',
            ex: [
              { jp: 'わたしは肉を食べません。', rom: 'Watashi wa niku o tabemasen.', en: 'I do not eat meat.',
                bd: [['わたし', 'I'], ['は', '(topic)'], ['肉', 'meat'], ['を', '(object)'], ['食べません', 'do not eat']] },
              { jp: 'きのうは来ませんでした。', rom: 'Kinou wa kimasen deshita.', en: 'Yesterday I did not come.',
                bd: [['きのう', 'yesterday'], ['は', '(topic)'], ['来ませんでした', 'did not come']] }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'Past is not ます + でした',
            items: [
              { x: '食べますでした', o: '食べました', n: 'The past of a verb is ました. でした belongs to です sentences and な-adjectives, not to ます-verbs.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Chant the tails',
            items: ['Drill them as a four-beat chant: <b>ます — ません — ました — ませんでした</b>. Speed comes from rhythm.'] },
          { t: 'try', lab: 'Your turn', h: 'Full conjugation',
            items: ['Conjugate 飲む through all four forms.', 'Say: I do not eat meat.', 'Say: Yesterday I did not come.'],
            note: 'Tap words above to check.' }
        ]
      }
    },
    {
      focus: 'に and へ — both mean to a place',
      sub: 'Direction particles',
      particle: 'へ',
      read: { k: 0, task: 'Listen with the text hidden, then check' },
      produce: 'Say three places you go, using に and へ.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'Today', h: 'Two ways to say to',
            body: ['For a destination, both <b>に</b> and <b>へ</b> work: 学校<b>に</b>行きます and 学校<b>へ</b>行きます both mean “I go to school.” As a particle, <b>へ</b> is pronounced <b>e</b>.'] },
          { t: 'pat', lab: 'The rule', h: 'place に / へ 行きます',
            formula: ['place', '+', 'に or へ', '+', 'motion verb'],
            mean: 'Marks the destination of a motion verb like 行く, 来る, 帰る.',
            ex: [
              { jp: '駅へ行きます。', rom: 'Eki e ikimasu.', en: 'I go to the station.',
                bd: [['駅', 'station'], ['へ', '(to)'], ['行きます', 'go']] },
              { jp: '会社に行きました。', rom: 'Kaisha ni ikimashita.', en: 'I went to the office.',
                bd: [['会社', 'office, company'], ['に', '(to)'], ['行きました', 'went']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'A tiny difference',
            body: ['<b>に</b> leans on the arrival point; <b>へ</b> leans on the direction of travel. With everyday motion verbs the two are interchangeable — for now, pick whichever you like.'] },
          { t: 'warn', lab: 'Watch out', h: 'へ is said e',
            items: [
              { x: 'read へ as he', o: 'read へ as e', n: 'As a particle, へ is pronounced e, not he. In the word へや (room) the same kana is read he — only the particle changes.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Arrow vs pin',
            items: ['<b>へ</b> looks like an arrow angling up and away — think <i>direction</i>. <b>に</b> is the pin dropped on the destination.'] },
          { t: 'try', lab: 'Your turn', h: 'Go places',
            items: ['Say: I go to the station. (駅 ___ 行きます)', 'Say: I went to the office.', 'Name a place + へ + 行きます.'],
            note: 'Tap words above to check.' }
        ]
      }
    },
    {
      focus: 'で — where an action happens',
      sub: 'Place of action',
      particle: 'で',
      read: { k: 1, task: 'Read the new passage with the translation' },
      produce: 'Say three things you do and where you do them.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'Today', h: 'Where it happens',
            body: ['<b>で</b> attaches to the place where you <i>do</i> something: レストラン<b>で</b>食べます (“I eat at a restaurant”). It marks the stage of the action, not a destination.'] },
          { t: 'pat', lab: 'The rule', h: 'place で verb',
            formula: ['place', '+', 'で', '+', 'action verb'],
            mean: 'で marks where an action is carried out.',
            ex: [
              { jp: 'レストランで食べます。', rom: 'Resutoran de tabemasu.', en: 'I eat at a restaurant.',
                bd: [['レストラン', 'restaurant'], ['で', '(at)'], ['食べます', 'eat']] },
              { jp: 'カフェで勉強しました。', rom: 'Kafe de benkyou shimashita.', en: 'I studied at a cafe.',
                bd: [['カフェ', 'cafe'], ['で', '(at)'], ['勉強しました', 'studied']] }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'に vs で',
            items: [
              { x: 'レストランに食べます', o: 'レストランで食べます', n: 'Eating is an action performed at the restaurant, so use で. に would wrongly make the restaurant a destination.' }
            ] },
          { t: 'why', lab: 'Why it works', h: 'Destination or stage?',
            body: ['Ask one question: is the place a <i>target you move to</i> (に / へ) or a <i>stage where the action plays out</i> (で)? 行きます takes に; 食べます, 見ます, 勉強します take で.'] },
          { t: 'mem', lab: 'Make it stick', h: 'The venue',
            items: ['<b>で</b> = the <i>venue</i>. The concert happens <b>で</b> the hall; the studying happens <b>で</b> the cafe.'] },
          { t: 'try', lab: 'Your turn', h: 'Where you act',
            items: ['Say: I eat at a restaurant. (レストラン ___ 食べます)', 'Say: I studied at a cafe.', 'Say: I watch TV at home. (家 ___ テレビを見ます)'],
            note: 'Tap words above to check.' }
        ]
      }
    },
    {
      focus: 'と — with a person',
      sub: 'Doing things together',
      particle: 'と',
      read: { k: 1, task: 'Shadow the passage — a half-second behind' },
      produce: 'Say who you do things with.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'Today', h: 'Together with',
            body: ['<b>と</b> after a person means <i>with</i> that person: 友だち<b>と</b>行きます (“I go with a friend”).'] },
          { t: 'pat', lab: 'The rule', h: 'person と verb',
            formula: ['person', '+', 'と', '+', 'verb'],
            mean: 'と marks the person you do something with.',
            ex: [
              { jp: '友だちと行きます。', rom: 'Tomodachi to ikimasu.', en: 'I go with a friend.',
                bd: [['友だち', 'friend'], ['と', '(with)'], ['行きます', 'go']] },
              { jp: '家族と食べました。', rom: 'Kazoku to tabemashita.', en: 'I ate with my family.',
                bd: [['家族', 'family'], ['と', '(with)'], ['食べました', 'ate']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'One と, two uses',
            body: ['You already know <b>と</b> can join nouns as a listing “and” (パンとたまご = “bread and eggs”). After a person, that same と means <i>with</i>. Context keeps them apart.'] },
          { t: 'warn', lab: 'Watch out', h: 'Not に for company',
            items: [
              { x: '友だちに行きます', o: '友だちと行きます', n: 'To say with a friend, use と. に after a person points at them as a target, not alongside you.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Side by side',
            items: ['<b>と</b> = two people standing side by side, doing it <i>together</i>.'] },
          { t: 'try', lab: 'Your turn', h: 'With whom',
            items: ['Say: I go with a friend. (友だち ___ 行きます)', 'Say: I ate with my family.', 'Say: I studied with a friend. (友だち ___ 勉強しました)'],
            note: 'Tap words above to check.' }
        ]
      }
    },
    {
      focus: 'から and まで — from and to',
      sub: 'Spans of place and time',
      particle: 'から',
      read: { k: 2, task: 'Read the third passage on your own' },
      produce: 'Say your work or school hours.',
      lesson: {
        min: 7,
        secs: [
          { t: 'p', lab: 'Today', h: 'Start and end',
            body: ['<b>から</b> = “from” (a start point). <b>まで</b> = “to / until” (an end point). They work for both places and times.'] },
          { t: 'pat', lab: 'The rule', h: 'A から B まで',
            formula: ['start から', '+', 'end まで'],
            mean: 'Frames a span: from a start to an end.',
            ex: [
              { jp: '九時から五時まで働きます。', rom: 'Kuji kara goji made hatarakimasu.', en: 'I work from nine to five.',
                bd: [['九時', '9:00'], ['から', 'from'], ['五時', '5:00'], ['まで', 'until'], ['働きます', 'work']] },
              { jp: '東京から大阪まで行きます。', rom: 'Toukyou kara Oosaka made ikimasu.', en: 'I go from Tokyo to Osaka.',
                bd: [['東京', 'Tokyo'], ['から', 'from'], ['大阪', 'Osaka'], ['まで', 'to'], ['行きます', 'go']] }
            ] },
          { t: 'tf', lab: 'The pair', h: 'から and まで',
            rows: [
              { g: 'から', r: 'from (a start)', n: 'kara — place or time' },
              { g: 'まで', r: 'to / until (an end)', n: 'made — place or time' }
            ] },
          { t: 'why', lab: 'Why it works', h: 'A matched pair, but each stands alone',
            body: ['<b>から</b> and <b>まで</b> often frame a span together, but either can appear by itself: 五時まで待ちます (“I wait until five”) and 九時から働きます (“I work from nine”) are both complete.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Sound hooks',
            items: ['<b>から</b> = a <i>car</i> pulling away from the start line. <b>まで</b> = it has <i>made</i> it to the finish. (Sound hooks, not real meanings.)'] },
          { t: 'try', lab: 'Your turn', h: 'Spans',
            items: ['Say: I work from 9 to 5. (九時 ___ 五時 ___ 働きます)', 'Say: from Tokyo to Osaka.', 'Say: I study until five. (五時 ___ 勉強します)'],
            note: 'Tap words above to check.' }
        ]
      }
    },
    {
      focus: 'に for a clock time or date',
      sub: 'When something happens',
      particle: 'に',
      read: { k: 2, task: 'Dictation — listen and write it, then compare' },
      produce: 'Say what time you wake up and what time you sleep.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'Today', h: 'Pin the time',
            body: ['Use <b>に</b> with specific times and dates: 七時<b>に</b>起きます (“I get up at seven”). But do <i>not</i> use に with relative words like 今日 (today) or 明日 (tomorrow).'] },
          { t: 'pat', lab: 'The rule', h: 'time に verb',
            formula: ['clock time / date', '+', 'に', '+', 'verb'],
            mean: 'に pins an action to an exact time or date.',
            ex: [
              { jp: '七時に起きます。', rom: 'Shichiji ni okimasu.', en: 'I get up at 7.',
                bd: [['七時', '7:00'], ['に', '(at)'], ['起きます', 'get up']] },
              { jp: '日曜日に行きます。', rom: 'Nichiyoubi ni ikimasu.', en: 'I go on Sunday.',
                bd: [['日曜日', 'Sunday'], ['に', '(on)'], ['行きます', 'go']] }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'No に on relative time',
            items: [
              { x: '明日に行きます', o: '明日、行きます', n: 'Relative time words — 今日, 明日, 毎日, 今 — take no に. Only clock times, weekdays, and dates use に.' }
            ] },
          { t: 'why', lab: 'Why it works', h: 'Numbers get a に',
            body: ['Rule of thumb: if the time word has a <b>number</b> or a fixed calendar slot (七時, 月曜日, 三月), add <b>に</b>. If it floats relative to now (今, 今日, 明日, 毎朝), leave に off.'] },
          { t: 'mem', lab: 'Make it stick', h: 'A pin on the clock',
            items: ['<b>に</b> = a pin stuck at an exact point on the clock or calendar. No exact point, no pin.'] },
          { t: 'try', lab: 'Your turn', h: 'Times',
            items: ['Say: I get up at 7. (七時 ___ 起きます)', 'Say: I go on Sunday.', 'Fix this: 明日に行きます.'],
            note: 'Tap words above to check.' }
        ]
      }
    },
    {
      focus: 'Review — particles for place, person, and time',
      sub: 'Week review',
      particle: 'ね',
      read: { k: 0, task: 'Re-read any passage and say a one-line summary aloud' },
      produce: 'Describe your day: when, where, and with whom.',
      lesson: {
        min: 7,
        secs: [
          { t: 'p', lab: 'Review', h: 'Your particle toolkit',
            body: ['This week: <b>に / へ</b> (to a place), <b>で</b> (where an action happens), <b>と</b> (with a person), <b>から / まで</b> (from / to), and time <b>に</b>.'] },
          { t: 'tf', lab: 'Particle map', h: 'Which particle, which job',
            rows: [
              { g: 'に / へ', r: '学校に行きます', n: 'to a destination' },
              { g: 'で', r: '家で食べます', n: 'where an action happens' },
              { g: 'と', r: '友だちと行きます', n: 'with a person' },
              { g: 'に (time)', r: '七時に起きます', n: 'at a clock time or date' }
            ] },
          { t: 'pat', lab: 'Put it together', h: 'All at once',
            formula: ['time に', '+', 'person と', '+', 'place で', '+', 'verb'],
            mean: 'Stack them in order for a natural sentence.',
            ex: [
              { jp: '日曜日に友だちとカフェで話しました。', rom: 'Nichiyoubi ni tomodachi to kafe de hanashimashita.', en: 'On Sunday I talked with a friend at a cafe.',
                bd: [['日曜日', 'Sunday'], ['に', '(on)'], ['友だち', 'friend'], ['と', '(with)'], ['カフェ', 'cafe'], ['で', '(at)'], ['話しました', 'talked']] },
              { jp: '九時から働きますね。', rom: 'Kuji kara hatarakimasu ne.', en: 'You work from 9, right?',
                bd: [['九時', '9:00'], ['から', 'from'], ['働きます', 'work'], ['ね', '(right?)']] }
            ],
            extra: '<b>ね</b> seeks agreement — “…right?” Use it to check that you and the listener are on the same page.' },
          { t: 'warn', lab: 'Quick check', h: 'Time words and に',
            items: [
              { x: '明日に来ます', o: '明日、来ます', n: '明日 and 今日 take no に; only clock times and dates do.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Slot order',
            items: ['A natural order: <b>time に — person と — place で — object を — verb</b>.'] },
          { t: 'try', lab: 'Your turn', h: 'Describe your day',
            items: ['Say: On Sunday I talked with a friend at a cafe.', 'Say: You work from 9, right? (add ね)', 'Say when, where, and with whom you ate yesterday.'],
            note: 'Tap words above to check.' }
        ]
      }
    }
  ]
};

U[107] = {
  title: 'い-adjectives',
  days: [
    {
      focus: 'い-adjectives — before a noun and as a predicate',
      sub: 'Two positions',
      particle: 'は',
      read: { k: 0, task: 'Read the passage with the translation open' },
      produce: 'Describe three things with an い-adjective.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'Start here', h: 'One word, two spots',
            body: ['An <b>い-adjective</b> ends in <b>い</b>. Put it <i>before</i> a noun to describe it (高い山 = “a high mountain”), or at the <i>end</i> with <b>です</b> to state it (この本は高いです = “this book is expensive”).'] },
          { t: 'pat', lab: 'Describing', h: 'い-adj + noun',
            formula: ['い-adjective', '+', 'noun'],
            mean: 'The adjective sits directly in front of the noun — no linker needed.',
            ex: [
              { jp: '高い山。', rom: 'Takai yama.', en: 'A high mountain.',
                bd: [['高い', 'high, tall'], ['山', 'mountain']] },
              { jp: '新しい車。', rom: 'Atarashii kuruma.', en: 'A new car.',
                bd: [['新しい', 'new'], ['車', 'car']] }
            ] },
          { t: 'pat', lab: 'As a predicate', h: 'topic は い-adj です',
            formula: ['topic', '+', 'は', '+', 'い-adjective', '+', 'です'],
            mean: 'Ends the sentence. です adds politeness but does not change the adjective.',
            ex: [
              { jp: 'この本は高いです。', rom: 'Kono hon wa takai desu.', en: 'This book is expensive.',
                bd: [['この', 'this'], ['本', 'book'], ['は', '(topic)'], ['高い', 'expensive'], ['です', 'is']] },
              { jp: 'この店は安いです。', rom: 'Kono mise wa yasui desu.', en: 'This shop is cheap.',
                bd: [['この', 'this'], ['店', 'shop'], ['は', '(topic)'], ['安い', 'cheap'], ['です', 'is']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'The い is part of the word',
            body: ['That final <b>い</b> belongs to the adjective itself — it is <i>not</i> です. That is why 高い山 needs no です at all, and why adding です for politeness leaves the adjective untouched.'] },
          { t: 'mem', lab: 'Make it stick', h: 'Ends in い',
            items: ['If it ends in <b>い</b> and names a quality (高い, 安い, おいしい), it is almost always an <b>い-adjective</b>. (A few sneaky ones hide out — more on those later.)'] },
          { t: 'try', lab: 'Your turn', h: 'Describe things',
            items: ['Say: a new car. (新しい ___ )', 'Say: This book is expensive. (この本 ___ 高いです)', 'Say: This shop is cheap.'],
            note: 'Tap words above to check.' }
        ]
      }
    },
    {
      focus: '〜くない — the negative',
      sub: 'Not (adjective)',
      particle: 'が',
      read: { k: 0, task: 'Listen with the text hidden, then check' },
      produce: 'Say three things that are NOT some quality.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'Today', h: 'From い to くない',
            body: ['To make an い-adjective negative, drop the final <b>い</b> and add <b>くない</b>: 高い becomes 高<b>くない</b> (“not expensive”). Add です to make it polite.'] },
          { t: 'tf', lab: 'The forms', h: 'Base, then negative',
            intro: 'Politeness just means adding です at the very end.',
            rows: [
              { g: 'plain', r: '高い', n: 'takai — expensive' },
              { g: 'negative (plain)', r: '高くない', n: 'takakunai — not expensive' },
              { g: 'negative (polite)', r: '高くないです', n: 'takakunai desu — not expensive' }
            ],
            note: 'Also correct: <b>高くありません</b> — a slightly more formal polite negative.' },
          { t: 'pat', lab: 'The rule', h: 'stem + くない',
            formula: ['stem (drop い)', '+', 'くない'],
            mean: 'Turns the quality negative — “is not ~.” Add です for polite speech.',
            ex: [
              { jp: 'この店は安くないです。', rom: 'Kono mise wa yasukunai desu.', en: 'This shop is not cheap.',
                bd: [['この', 'this'], ['店', 'shop'], ['は', '(topic)'], ['安くない', 'not cheap'], ['です', 'is']] },
              { jp: '値段が高くないです。', rom: 'Nedan ga takakunai desu.', en: 'The price is not high.',
                bd: [['値段', 'price'], ['が', '(subject)'], ['高くない', 'not high'], ['です', 'is']] }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'Drop the い first',
            items: [
              { x: '高いくない', o: '高くない', n: 'Remove the final い before adding くない. Do not keep both.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'く + ない',
            items: ['Read it as <b>く-ない</b>: the <b>く</b> is the adjective stepping aside, and <b>ない</b> is the everyday “not.”'] },
          { t: 'try', lab: 'Your turn', h: 'Say it is not so',
            items: ['Say: not cheap. (安 ___ )', 'Say: The price is not high. (値段が ___ です)', 'Make おいしい negative.'],
            note: 'Tap words above to check.' }
        ]
      }
    },
    {
      focus: '〜かった and 〜くなかった — past and past negative',
      sub: 'Was and was not',
      particle: 'よ',
      read: { k: 1, task: 'Read the new passage with the translation' },
      produce: 'Say how two things were yesterday.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'Today', h: 'Adjectives carry their own past',
            body: ['い-adjectives do <i>not</i> use でした for the past. Instead, change <b>い</b> to <b>かった</b>: 高い becomes 高<b>かった</b> (“was expensive”). The negative past is <b>くなかった</b>.'] },
          { t: 'tf', lab: 'The full set', h: 'One い-adjective, four forms',
            intro: 'This is the complete plain set. Add です to any line to make it polite.',
            rows: [
              { g: 'present', r: '高い', n: 'takai — is expensive' },
              { g: 'negative', r: '高くない', n: 'takakunai — is not expensive' },
              { g: 'past', r: '高かった', n: 'takakatta — was expensive' },
              { g: 'past negative', r: '高くなかった', n: 'takakunakatta — was not expensive' }
            ],
            note: 'Polite = add です: <b>高かったです</b>, <b>高くなかったです</b>.' },
          { t: 'pat', lab: 'In use', h: 'Talking about the past',
            formula: ['stem', '+', 'かった / くなかった'],
            mean: '“Was ~” and “was not ~.” Add です for polite speech.',
            ex: [
              { jp: '映画は楽しかったですよ。', rom: 'Eiga wa tanoshikatta desu yo.', en: 'The movie was fun, you know.',
                bd: [['映画', 'movie'], ['は', '(topic)'], ['楽しかった', 'was fun'], ['です', '(polite)'], ['よ', '(you know)']] },
              { jp: 'テストは難しくなかったです。', rom: 'Tesuto wa muzukashikunakatta desu.', en: 'The test was not hard.',
                bd: [['テスト', 'test'], ['は', '(topic)'], ['難しくなかった', 'was not hard'], ['です', '(polite)']] }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'Never でした on an い-adjective',
            items: [
              { x: '高いでした', o: '高かった (です)', n: 'Do not put でした on an い-adjective. The past lives inside the word as かった.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'かった hides た',
            items: ['<b>かった</b> hides a <b>た</b> — the same past sound as verbs (食べた, 行った). Adjectives just wrap it in かっ.'] },
          { t: 'try', lab: 'Your turn', h: 'Was it good?',
            items: ['Say: The movie was fun. (映画は ___ です)', 'Say: The test was not hard.', 'Make 安い past (was cheap).'],
            note: 'Tap words above to check.' }
        ]
      }
    },
    {
      focus: 'いい is irregular — it becomes よ',
      sub: 'The one exception',
      particle: 'けど',
      read: { k: 1, task: 'Shadow the passage — a half-second behind' },
      produce: 'Say one thing that was good and one that was not.',
      lesson: {
        min: 7,
        secs: [
          { t: 'p', lab: 'Today', h: 'The one you must memorize',
            body: ['<b>いい</b> (“good”) is irregular. Every form except the plain present switches the stem from <b>い</b> to <b>よ</b>. It comes from the older word 良い (よい), which is where the よ hides.'] },
          { t: 'tf', lab: 'The forms', h: 'いい, conjugated',
            intro: 'Only the present is いい. Every other form uses よ.',
            rows: [
              { g: 'present', r: 'いい', n: 'ii — is good' },
              { g: 'negative', r: 'よくない', n: 'yokunai — is not good' },
              { g: 'past', r: 'よかった', n: 'yokatta — was good' },
              { g: 'past negative', r: 'よくなかった', n: 'yokunakatta — was not good' }
            ],
            note: 'So it is <b>よくない</b>, <b>よかった</b>, <b>よくなかった</b> — never いくない or いかった.' },
          { t: 'pat', lab: 'In use', h: 'Good, but…',
            formula: ['いい', '→', 'よ-forms'],
            mean: 'Present stays いい; everything else uses よ.',
            ex: [
              { jp: 'この店はいいですけど、高いです。', rom: 'Kono mise wa ii desu kedo, takai desu.', en: 'This shop is good, but expensive.',
                bd: [['この', 'this'], ['店', 'shop'], ['は', '(topic)'], ['いい', 'good'], ['です', 'is'], ['けど', 'but'], ['高い', 'expensive'], ['です', 'is']] },
              { jp: '天気はよくなかったです。', rom: 'Tenki wa yokunakatta desu.', en: 'The weather was not good.',
                bd: [['天気', 'weather'], ['は', '(topic)'], ['よくなかった', 'was not good'], ['です', '(polite)']] }
            ],
            extra: '<b>けど</b> means “but / though” and joins two clauses: いいですけど、高いです = “good, but pricey.”' },
          { t: 'warn', lab: 'Watch out', h: 'Never keep the い',
            items: [
              { x: 'いくない / いかった', o: 'よくない / よかった', n: 'The negative and past of いい never keep い. Switch to よ every single time.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Say the phrase',
            items: ['Memorize it as a chant: <b>よくない, よかった, よくなかった</b>. The good-news <b>よ</b> replaces the plain い.'] },
          { t: 'try', lab: 'Your turn', h: 'Good and not good',
            items: ['Say: The weather was not good. (天気は ___ です)', 'Say: good, but expensive. (いいですけど ___ )', 'Fix this: 天気はいかったです.'],
            note: 'Tap words above to check.' }
        ]
      }
    },
    {
      focus: '〜く — the adverb form',
      sub: 'Describing how you do it',
      particle: 'を',
      read: { k: 2, task: 'Read the third passage on your own' },
      produce: 'Say you do two things early, well, or deliciously.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'Today', h: 'From what to how',
            body: ['Change the final <b>い</b> to <b>く</b> to make an adverb — a word that describes the <i>verb</i>: 早い (“early”) becomes 早<b>く</b> (“do it early”).'] },
          { t: 'pat', lab: 'The rule', h: 'stem + く + verb',
            formula: ['stem (drop い)', '+', 'く', '+', 'verb'],
            mean: 'Describes how the action is done.',
            ex: [
              { jp: '早く起きます。', rom: 'Hayaku okimasu.', en: 'I get up early.',
                bd: [['早く', 'early'], ['起きます', 'get up']] },
              { jp: 'ケーキをおいしく作ります。', rom: 'Keeki o oishiku tsukurimasu.', en: 'I make the cake deliciously.',
                bd: [['ケーキ', 'cake'], ['を', '(object)'], ['おいしく', 'deliciously'], ['作ります', 'make']] }
            ] },
          { t: 'tf', lab: 'Adjective to adverb', h: 'い → く',
            rows: [
              { g: '早い', r: '早い → 早く', n: 'hayai → hayaku (early)' },
              { g: 'おいしい', r: 'おいしい → おいしく', n: 'oishii → oishiku (deliciously)' },
              { g: 'いい (irregular)', r: 'いい → よく', n: 'ii → yoku (well, often)' }
            ] },
          { t: 'why', lab: 'Why it works', h: 'Same く, new job',
            body: ['The <b>く</b> stem you met in the negative (高くない) is also the adverb stem. Here it stands on its own before a verb — and yes, <b>いい</b> becomes <b>よく</b> here too.'] },
          { t: 'mem', lab: 'Make it stick', h: 'く before a verb = how',
            items: ['<b>く</b> right before a verb answers <i>how</i>: 早く (in an early way), おいしく (in a delicious way).'] },
          { t: 'try', lab: 'Your turn', h: 'Say how',
            items: ['Say: I get up early. (早 ___ 起きます)', 'Say: I make the cake deliciously. (ケーキを ___ 作ります)', 'Turn いい into its adverb.'],
            note: 'Tap words above to check.' }
        ]
      }
    },
    {
      focus: '〜くて — connecting adjectives',
      sub: 'Stacking descriptions',
      particle: 'し',
      read: { k: 2, task: 'Dictation — listen and write it, then compare' },
      produce: 'Describe one thing with two adjectives.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'Today', h: 'And, for adjectives',
            body: ['To link two い-adjectives, change the first from <b>い</b> to <b>くて</b>: 安い + おいしい becomes 安<b>くて</b>おいしい (“cheap and delicious”). Only the last adjective takes です.'] },
          { t: 'pat', lab: 'The rule', h: 'stem + くて + next',
            formula: ['stem (drop い)', '+', 'くて', '+', 'next adjective'],
            mean: 'Joins adjectives like “and.”',
            ex: [
              { jp: 'この店は安くておいしいです。', rom: 'Kono mise wa yasukute oishii desu.', en: 'This shop is cheap and delicious.',
                bd: [['この', 'this'], ['店', 'shop'], ['は', '(topic)'], ['安くて', 'cheap and'], ['おいしい', 'delicious'], ['です', 'is']] },
              { jp: 'この部屋は広くて明るいです。', rom: 'Kono heya wa hirokute akarui desu.', en: 'This room is spacious and bright.',
                bd: [['この', 'this'], ['部屋', 'room'], ['は', '(topic)'], ['広くて', 'spacious and'], ['明るい', 'bright'], ['です', 'is']] }
            ],
            extra: 'いい connects as <b>よくて</b> (irregular again). Verbs join with a て-form; adjectives use this <b>くて</b> the same way.' },
          { t: 'pat', lab: 'Another way', h: 'Listing with し',
            formula: ['clause', '+', 'し', '+', 'clause'],
            mean: 'し links whole clauses and often hints at reasons — “A, and (what is more) B.”',
            ex: [
              { jp: 'この店は安いし、おいしいです。', rom: 'Kono mise wa yasui shi, oishii desu.', en: 'This shop is cheap, and also delicious.',
                bd: [['この', 'this'], ['店', 'shop'], ['は', '(topic)'], ['安い', 'cheap'], ['し', 'and (also)'], ['おいしい', 'delicious'], ['です', 'is']] },
              { jp: 'この本は安いし、おもしろいです。', rom: 'Kono hon wa yasui shi, omoshiroi desu.', en: 'This book is cheap, and interesting too.',
                bd: [['この', 'this'], ['本', 'book'], ['は', '(topic)'], ['安い', 'cheap'], ['し', 'and (also)'], ['おもしろい', 'interesting'], ['です', 'is']] }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'Change い to くて',
            items: [
              { x: '安いておいしい', o: '安くておいしい', n: 'Drop the い and use くて before joining. Do not attach て straight onto い.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'くて = adjective glue',
            items: ['<b>くて</b> is the adjective version of a verb te-form — the same “and then / and also” glue, for a different word type.'] },
          { t: 'try', lab: 'Your turn', h: 'Two in one',
            items: ['Say: cheap and delicious. (安 ___ おいしい)', 'Say: This shop is cheap, and also delicious. (use し)', 'Say: This room is spacious and bright.'],
            note: 'Tap words above to check.' }
        ]
      }
    },
    {
      focus: 'Review — the full い-adjective set',
      sub: 'Week review',
      particle: 'ね',
      read: { k: 0, task: 'Re-read any passage and say a one-line summary aloud' },
      produce: 'Describe your day using three adjective forms.',
      lesson: {
        min: 7,
        secs: [
          { t: 'p', lab: 'Review', h: 'The whole toolkit',
            body: ['This week you built the full <b>い-adjective</b> set: describe, negative, past, adverb, and the <b>くて</b> connector — plus the irregular <b>いい</b>.'] },
          { t: 'tf', lab: 'Regular vs いい', h: 'Side by side',
            intro: 'Left column: a regular い-adjective (高い). Right column: the irregular いい.',
            rows: [
              { g: 'present', r: '高い (takai)', n: 'いい (ii)' },
              { g: 'negative', r: '高くない (takakunai)', n: 'よくない (yokunai)' },
              { g: 'past', r: '高かった (takakatta)', n: 'よかった (yokatta)' },
              { g: 'past negative', r: '高くなかった (takakunakatta)', n: 'よくなかった (yokunakatta)' },
              { g: 'adverb', r: '高く (takaku)', n: 'よく (yoku)' }
            ],
            note: 'Every よ-form of いい is irregular; 高い is your model for all the rest.' },
          { t: 'pat', lab: 'Put it together', h: 'Real sentences',
            formula: ['topic は', '+', 'adjective form', '+', 'ね'],
            mean: 'Combine the forms you learned this week.',
            ex: [
              { jp: 'きのうの映画はよかったですね。', rom: 'Kinou no eiga wa yokatta desu ne.', en: 'The movie yesterday was good, right?',
                bd: [['きのう', 'yesterday'], ['の', '(of)'], ['映画', 'movie'], ['は', '(topic)'], ['よかった', 'was good'], ['です', '(polite)'], ['ね', '(right?)']] },
              { jp: 'この店は安くて、いいですね。', rom: 'Kono mise wa yasukute, ii desu ne.', en: 'This shop is cheap and good, right?',
                bd: [['この', 'this'], ['店', 'shop'], ['は', '(topic)'], ['安くて', 'cheap and'], ['いい', 'good'], ['です', 'is'], ['ね', '(right?)']] }
            ] },
          { t: 'warn', lab: 'Quick check', h: 'The two classic slips',
            items: [
              { x: '高いでした', o: '高かったです', n: 'い-adjectives never take でした. The past is かった. And いい conjugates as よ- (よかった, not いかった).' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Two rules to keep',
            items: ['Never forget: い-adjectives use <b>かった</b> (not でした) for the past, and <b>いい</b> becomes <b>よ-</b> in every form but the present.'] },
          { t: 'try', lab: 'Your turn', h: 'Show the set',
            items: ['Say all four forms of 安い (cheap).', 'Say: The movie yesterday was good, right? (add ね)', 'Say all four forms of いい.'],
            note: 'Tap words above to check.' }
        ]
      }
    }
  ]
};

U[108] = {
  title: 'な-adjectives',
  days: [
    {
      focus: 'な-adjectives — な before a noun, です at the end',
      sub: 'Describing and stating',
      particle: 'は',
      read: { k: 0, task: 'Read the passage with the translation open' },
      produce: 'Describe two nouns with な-adjectives.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'Start here', h: 'Add な to describe',
            body: ['A <b>な-adjective</b> needs <b>な</b> before a noun: きれい<b>な</b>花 (“a pretty flower”). As a sentence ending, it drops the な and just takes <b>です</b>: この部屋は静かです (“this room is quiet”).'] },
          { t: 'pat', lab: 'Describing', h: 'な-adj + な + noun',
            formula: ['な-adjective', '+', 'な', '+', 'noun'],
            mean: 'The な links the adjective to the noun that follows.',
            ex: [
              { jp: 'きれいな花。', rom: 'Kirei na hana.', en: 'A pretty flower.',
                bd: [['きれい', 'pretty'], ['な', '(links to noun)'], ['花', 'flower']] },
              { jp: '有名なレストラン。', rom: 'Yuumei na resutoran.', en: 'A famous restaurant.',
                bd: [['有名', 'famous'], ['な', '(links to noun)'], ['レストラン', 'restaurant']] }
            ] },
          { t: 'pat', lab: 'As a predicate', h: 'topic は な-adj です',
            formula: ['topic', '+', 'は', '+', 'な-adjective', '+', 'です'],
            mean: 'Ends the sentence with です — and no な.',
            ex: [
              { jp: 'この部屋は静かです。', rom: 'Kono heya wa shizuka desu.', en: 'This room is quiet.',
                bd: [['この', 'this'], ['部屋', 'room'], ['は', '(topic)'], ['静か', 'quiet'], ['です', 'is']] },
              { jp: 'この町はにぎやかです。', rom: 'Kono machi wa nigiyaka desu.', en: 'This town is lively.',
                bd: [['この', 'this'], ['町', 'town'], ['は', '(topic)'], ['にぎやか', 'lively'], ['です', 'is']] }
            ] },
          { t: 'why', lab: 'Why it works', h: 'な appears only before a noun',
            body: ['The <b>な</b> is a linker that glues the adjective onto a following noun. Drop the noun and you drop the な — which is exactly why the predicate form (静かです) has no な.'] },
          { t: 'mem', lab: 'Make it stick', h: 'The な hat',
            items: ['The name says it: a <b>な-adjective</b> wears a <b>な</b> hat — but only when a noun follows right after.'] },
          { t: 'try', lab: 'Your turn', h: 'Describe nouns',
            items: ['Say: a pretty flower. (きれい ___ 花)', 'Say: This room is quiet. (この部屋 ___ 静かです)', 'Say: a famous restaurant.'],
            note: 'Tap words above to check.' }
        ]
      }
    },
    {
      focus: 'じゃありません — the negative',
      sub: 'Not (adjective)',
      particle: 'も',
      read: { k: 0, task: 'Listen with the text hidden, then check' },
      produce: 'Say two things that are not some quality.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'Today', h: 'The polite no',
            body: ['For な-adjectives, drop <b>です</b> and add <b>じゃありません</b>: 静か<b>じゃありません</b> (“is not quiet”). The fuller <b>ではありません</b> means the same, a touch more formal.'] },
          { t: 'tf', lab: 'The forms', h: 'One affirmative, two negatives',
            rows: [
              { g: 'affirmative', r: '静かです', n: 'shizuka desu — is quiet' },
              { g: 'negative', r: '静かじゃありません', n: 'shizuka ja arimasen — is not quiet' },
              { g: 'negative (formal)', r: '静かではありません', n: 'shizuka dewa arimasen — is not quiet' }
            ],
            note: 'Casual spoken option: <b>静かじゃないです</b>. All three polite forms are correct.' },
          { t: 'pat', lab: 'The rule', h: 'な-adj + じゃありません',
            formula: ['な-adjective', '+', 'じゃありません'],
            mean: 'The polite negative — “is not ~.”',
            ex: [
              { jp: 'この部屋は静かじゃありません。', rom: 'Kono heya wa shizuka ja arimasen.', en: 'This room is not quiet.',
                bd: [['この', 'this'], ['部屋', 'room'], ['は', '(topic)'], ['静か', 'quiet'], ['じゃありません', 'is not']] },
              { jp: 'この町もにぎやかじゃありません。', rom: 'Kono machi mo nigiyaka ja arimasen.', en: 'This town is not lively either.',
                bd: [['この', 'this'], ['町', 'town'], ['も', 'too, either'], ['にぎやか', 'lively'], ['じゃありません', 'is not']] }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'Not the い-adjective ending',
            items: [
              { x: '静かくないです', o: '静かじゃありません', n: 'Do not put the い-adjective ending くない on a な-adjective. Use じゃありません (or ではありません).' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'じゃ = では',
            items: ['<b>じゃ</b> is just a squished <b>では</b>. So じゃありません = ではありません, only more relaxed and everyday.'] },
          { t: 'try', lab: 'Your turn', h: 'Say it is not',
            items: ['Say: This room is not quiet. (この部屋は静か ___ )', 'Say: This town is not lively either. (この町 ___ にぎやか ___ )', 'Make きれい negative.'],
            note: 'Tap words above to check.' }
        ]
      }
    },
    {
      focus: 'でした and じゃありませんでした — past and past negative',
      sub: 'Was and was not',
      particle: 'が',
      read: { k: 1, task: 'Read the new passage with the translation' },
      produce: 'Say how two things were.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'Today', h: 'な-adjectives use でした',
            body: ['Unlike い-adjectives, <b>な-adjectives</b> <i>do</i> take <b>でした</b> for the past: 静か<b>でした</b> (“was quiet”). The past negative is <b>じゃありませんでした</b>.'] },
          { t: 'tf', lab: 'The four forms', h: 'They behave like noun + です',
            intro: 'A な-adjective conjugates just like a noun with です.',
            rows: [
              { g: 'present', r: '静かです', n: 'shizuka desu — is quiet' },
              { g: 'negative', r: '静かじゃありません', n: 'shizuka ja arimasen — is not quiet' },
              { g: 'past', r: '静かでした', n: 'shizuka deshita — was quiet' },
              { g: 'past negative', r: '静かじゃありませんでした', n: 'shizuka ja arimasen deshita — was not quiet' }
            ],
            note: 'The past negative is simply the negative (じゃありません) plus the past helper でした.' },
          { t: 'pat', lab: 'In use', h: 'Talking about the past',
            formula: ['な-adjective', '+', 'でした'],
            mean: '“Was ~.” For the negative past, add でした after じゃありません.',
            ex: [
              { jp: 'テストが大変でした。', rom: 'Tesuto ga taihen deshita.', en: 'The test was tough.',
                bd: [['テスト', 'test'], ['が', '(subject)'], ['大変', 'tough'], ['でした', 'was']] },
              { jp: '町はあまり静かじゃありませんでした。', rom: 'Machi wa amari shizuka ja arimasen deshita.', en: 'The town was not very quiet.',
                bd: [['町', 'town'], ['は', '(topic)'], ['あまり', '(not) very'], ['静か', 'quiet'], ['じゃありませんでした', 'was not']] }
            ] },
          { t: 'warn', lab: 'Watch out', h: 'Not かった',
            items: [
              { x: '静かかったです', o: '静かでした', n: 'かった is only for い-adjectives. な-adjectives form the past with でした.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Copy the noun pattern',
            items: ['A <b>な-adjective</b> in the past copies the <b>noun + です</b> pattern: 学生でした (“was a student”), 静かでした (“was quiet”). Same でした.'] },
          { t: 'try', lab: 'Your turn', h: 'Was it so?',
            items: ['Say: The test was tough. (テストが ___ でした)', 'Say: The town was not very quiet.', 'Make にぎやか past (was lively).'],
            note: 'Tap words above to check.' }
        ]
      }
    },
    {
      focus: '〜に — the adverb form',
      sub: 'Describing how',
      particle: 'に',
      read: { k: 1, task: 'Shadow the passage — a half-second behind' },
      produce: 'Say you do two things quietly or skillfully.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'Today', h: 'に turns it into how',
            body: ['To describe a verb, add <b>に</b> to a な-adjective: 静か<b>に</b>歩きます (“walk quietly”), 上手<b>に</b>話します (“speak skillfully”). This mirrors the <b>く</b> of い-adjectives.'] },
          { t: 'pat', lab: 'The rule', h: 'な-adj + に + verb',
            formula: ['な-adjective', '+', 'に', '+', 'verb'],
            mean: 'Describes how the action is done.',
            ex: [
              { jp: '静かに歩きます。', rom: 'Shizuka ni arukimasu.', en: 'I walk quietly.',
                bd: [['静か', 'quiet'], ['に', '(-ly)'], ['歩きます', 'walk']] },
              { jp: '日本語を上手に話します。', rom: 'Nihongo o jouzu ni hanashimasu.', en: 'I speak Japanese skillfully.',
                bd: [['日本語', 'Japanese'], ['を', '(object)'], ['上手', 'skillful'], ['に', '(-ly)'], ['話します', 'speak']] }
            ] },
          { t: 'tf', lab: 'Two adverb makers', h: 'く for い, に for な',
            rows: [
              { g: 'い-adj → く', r: '早い → 早く', n: 'hayaku — (do) early' },
              { g: 'な-adj → に', r: '静か → 静かに', n: 'shizuka ni — (do) quietly' }
            ] },
          { t: 'why', lab: 'Why it works', h: 'Each family, its own tail',
            body: ['い-adjectives make adverbs with <b>く</b>; な-adjectives make them with <b>に</b>. Same idea — turn a describing word into a <i>how</i> word — but a different ending for each family.'] },
          { t: 'mem', lab: 'Make it stick', h: 'に = な-adverb',
            items: ['<b>に</b> is the な-adjective adverb tail. Handy pair: 上手に (skillfully) and 下手に (clumsily).'] },
          { t: 'try', lab: 'Your turn', h: 'Say how',
            items: ['Say: I walk quietly. (静か ___ 歩きます)', 'Say: I speak Japanese skillfully. (日本語を ___ 話します)', 'Turn きれい into its adverb.'],
            note: 'Tap words above to check.' }
        ]
      }
    },
    {
      focus: '〜で — connecting adjectives',
      sub: 'Stacking descriptions',
      particle: 'で',
      read: { k: 2, task: 'Read the third passage on your own' },
      produce: 'Describe one thing with two な-adjectives.',
      lesson: {
        min: 6,
        secs: [
          { t: 'p', lab: 'Today', h: 'And, for な-adjectives',
            body: ['Link a <b>な-adjective</b> to the next word with <b>で</b>: きれい<b>で</b>静か (“pretty and quiet”). This で is the connecting form of です.'] },
          { t: 'pat', lab: 'The rule', h: 'な-adj + で + next',
            formula: ['な-adjective', '+', 'で', '+', 'next adjective'],
            mean: 'Joins descriptions like “and.”',
            ex: [
              { jp: 'この部屋はきれいで静かです。', rom: 'Kono heya wa kirei de shizuka desu.', en: 'This room is pretty and quiet.',
                bd: [['この', 'this'], ['部屋', 'room'], ['は', '(topic)'], ['きれい', 'pretty'], ['で', 'and'], ['静か', 'quiet'], ['です', 'is']] },
              { jp: 'この店は有名でにぎやかです。', rom: 'Kono mise wa yuumei de nigiyaka desu.', en: 'This shop is famous and lively.',
                bd: [['この', 'this'], ['店', 'shop'], ['は', '(topic)'], ['有名', 'famous'], ['で', 'and'], ['にぎやか', 'lively'], ['です', 'is']] }
            ],
            extra: 'This で also connects nouns: 学生で… (“is a student, and…”). It is です in mid-sentence form.' },
          { t: 'why', lab: 'Why it works', h: 'くて for い, で for な',
            body: ['い-adjectives connect with <b>くて</b> (安くて); な-adjectives and nouns connect with <b>で</b> (きれいで, 学生で). Match the connector to the word type.'] },
          { t: 'warn', lab: 'Watch out', h: 'きれい is a な-adjective',
            items: [
              { x: 'きれいくて静か', o: 'きれいで静か', n: 'きれい is a な-adjective, so it connects with で, not くて. Do not let its final い fool you.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'で = is, and…',
            items: ['This <b>で</b> is です wearing mid-sentence clothes: it says <i>“is, and…”</i> then keeps the sentence going.'] },
          { t: 'try', lab: 'Your turn', h: 'Two in one',
            items: ['Say: pretty and quiet. (きれい ___ 静か)', 'Say: This shop is famous and lively.', 'Say: This room is quiet and pretty. (静か ___ きれい)'],
            note: 'Tap words above to check.' }
        ]
      }
    },
    {
      focus: 'Telling な- and い-adjectives apart',
      sub: 'Two families, two patterns',
      particle: 'か',
      read: { k: 2, task: 'Dictation — listen and write it, then compare' },
      produce: 'Sort five adjectives into い-type or な-type.',
      lesson: {
        min: 7,
        secs: [
          { t: 'p', lab: 'Today', h: 'Which family is it?',
            body: ['Most words ending in <b>い</b> are い-adjectives, but a few — <b>きれい</b>, <b>きらい</b>, <b>有名</b> — are な-adjectives in disguise. The reliable test: does it take <b>な</b> before a noun?'] },
          { t: 'tf', lab: 'Side by side', h: 'Same jobs, different endings',
            intro: 'Left: 高い (い-type). Right: 静か (な-type).',
            rows: [
              { g: 'before a noun', r: '高い山', n: '静かな部屋 (add な)' },
              { g: 'negative', r: '高くないです', n: '静かじゃありません' },
              { g: 'past', r: '高かったです', n: '静かでした' },
              { g: 'adverb', r: '高く', n: '静かに' },
              { g: 'connect (and)', r: '高くて', n: '静かで' }
            ] },
          { t: 'why', lab: 'Why it works', h: 'The な test beats the spelling',
            body: ['Do not judge by the last kana alone. Try adding <b>な</b> + noun: 静かな部屋 works, so 静か is な-type. きれいな花 works too — so <b>きれい</b> is な-type despite ending in い. 高い<i>な</i>山 fails, so 高い is い-type.'] },
          { t: 'warn', lab: 'Watch out', h: 'Do not conjugate きれい like an い-adjective',
            items: [
              { x: 'きれくないです', o: 'きれいじゃありません', n: 'きれい is な-type, so its negative is じゃありません — never a くない form.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Ask one question',
            items: ['One question decides it: <b>does it take な before a noun?</b> Yes means な-type; no means い-type. Memorize the sneaky ones: きれい, きらい, 有名, 上手.'] },
          { t: 'try', lab: 'Your turn', h: 'Sort them',
            items: ['Is 静か い-type or な-type?', 'Ask in Japanese: Is this shop famous? (この店は有名です ___ )', 'Give the negative of きれい.'],
            note: 'Tap words above to check.' }
        ]
      }
    },
    {
      focus: 'Review — な-adjectives vs い-adjectives',
      sub: 'Week review',
      particle: 'ね',
      read: { k: 0, task: 'Re-read any passage and say a one-line summary aloud' },
      produce: 'Describe a place using both adjective types.',
      lesson: {
        min: 7,
        secs: [
          { t: 'p', lab: 'Review', h: 'Both families together',
            body: ['You now have both adjective types: <b>い</b> (高い, いい) and <b>な</b> (静か, きれい). Keep their endings straight and you can describe almost anything.'] },
          { t: 'tf', lab: 'Cheat sheet', h: 'い vs な, side by side',
            intro: 'A quick map across both types.',
            rows: [
              { g: 'describe', r: '高い山 / 静かな部屋', n: 'い: no linker · な: add な' },
              { g: 'negative', r: '高くない / 静かじゃありません', n: 'い: くない · な: じゃありません' },
              { g: 'past', r: '高かった / 静かでした', n: 'い: かった · な: でした' },
              { g: 'connect', r: '高くて / 静かで', n: 'い: くて · な: で' }
            ] },
          { t: 'pat', lab: 'Put it together', h: 'Both types in one breath',
            formula: ['な-adj で', '+', 'い-adj くて', '+', 'ね'],
            mean: 'Chain な-type and い-type descriptions in a single sentence.',
            ex: [
              { jp: 'この部屋は静かで、いいですね。', rom: 'Kono heya wa shizuka de, ii desu ne.', en: 'This room is quiet and nice, right?',
                bd: [['この', 'this'], ['部屋', 'room'], ['は', '(topic)'], ['静か', 'quiet'], ['で', 'and'], ['いい', 'nice, good'], ['です', 'is'], ['ね', '(right?)']] },
              { jp: 'この店はきれいで、料理も安くておいしいですね。', rom: 'Kono mise wa kirei de, ryouri mo yasukute oishii desu ne.', en: 'This shop is pretty, and the food is cheap and delicious too, right?',
                bd: [['この', 'this'], ['店', 'shop'], ['は', '(topic)'], ['きれい', 'pretty'], ['で', 'and'], ['料理', 'food'], ['も', 'too'], ['安くて', 'cheap and'], ['おいしい', 'delicious'], ['です', 'is'], ['ね', '(right?)']] }
            ] },
          { t: 'warn', lab: 'Quick check', h: 'Do not mix the endings',
            items: [
              { x: 'きれくないです', o: 'きれいじゃありません', n: 'きれい is a な-adjective — its negative is じゃありません, not a くない form.' }
            ] },
          { t: 'mem', lab: 'Make it stick', h: 'Never swap these',
            items: ['Two pairs to keep straight: past = <b>かった</b> (い) vs <b>でした</b> (な); negative = <b>くない</b> (い) vs <b>じゃありません</b> (な).'] },
          { t: 'try', lab: 'Your turn', h: 'Use both',
            items: ['Say: This room is quiet and nice, right? (add ね)', 'Give past and past-negative of 静か.', 'Give past and past-negative of 高い.'],
            note: 'Tap words above to check.' }
        ]
      }
    }
  ]
};

})();
