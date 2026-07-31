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
})();
