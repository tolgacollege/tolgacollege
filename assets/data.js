/*
  TOLGA KILIC — SITE DATA
  ------------------------------------------------------------
  This is the ONE file you edit to update times, rankings, meets,
  and videos across the whole site. It's plain JSON wrapped in a
  variable, so the site works whether it's opened directly as a
  file or hosted on GitHub Pages.

  HOW TO UPDATE:
  - Times: https://www.swimcloud.com/swimmer/1903826/times/
    Update the fastest time per event, per course (scy or lcm).
    The homepage "Signature events" table pulls automatically from
    athlete.primaryEvents + these times — no separate edit needed.
  - Rankings (SwimCloud): https://www.swimcloud.com/swimmer/1903826/
    ("Recruiting" box has power index + national/state rank).
  - Rankings (SwimIntel): https://app.swimintel.ai/recruits/0198a10f-8155-7eda-b862-8cb40095d376
    (Overall rank, Impact Rating, Best Events).
  - Meets: add upcoming meets by hand as they're scheduled (with an
    "events" list if entries are known, or leave events empty and
    add a note). After a meet happens, move it to "recent" and
    update times/rankings above.
  - Videos: add a Google Drive link (must be set to "Anyone with the
    link can view") or a YouTube URL to the "additional" array.
  - Note: some Drive video links only work for people who are signed
    in or have been granted access. Double-check sharing is set to
    "Anyone with the link" on each file (or the folder) before
    sending this site to coaches.

  After editing, save the file and refresh the page — no build step,
  no install. If it's already on GitHub, commit and push the change.
  ------------------------------------------------------------
*/
window.SITE_DATA = {
  "meta": {
    "lastUpdated": "2026-07-01"
  },
  "athlete": {
    "name": "Tolga Kilic",
    "classOf": 2028,
    "ncaaId": "2601800418",
    "hometown": "Leesburg, VA (originally Dickinson, ND)",
    "highSchool": "Riverside High School",
    "club": "Nations Capital Swim Club (NCAP)",
    "lsc": "Potomac Valley Swimming",
    "gpa": "4.0+ unweighted",
    "primaryEvents": ["200 IM", "400 IM", "200 Breaststroke", "100 Backstroke", "200 Backstroke"],
    "academicInterest": "Pre-DPT / Sports Medicine",
    "secondaryInterest": "Finance / Business",
    "athleteEmail": "tolgakcollege@gmail.com",
    "parentName": "Levent Kilic",
    "parentEmail": "levent.kilic.contact@gmail.com",
    "swimcloudUrl": "https://www.swimcloud.com/swimmer/1903826",
    "swimintelUrl": "https://app.swimintel.ai/recruits/0198a10f-8155-7eda-b862-8cb40095d376",
    "social": [
      { "label": "NCAP Loudoun (Instagram)", "handle": "@ncap_loudoun", "url": "https://www.instagram.com/ncap_loudoun/" },
      { "label": "NCAP Swim (Instagram)", "handle": "@ncap_swim", "url": "https://www.instagram.com/ncap_swim/" }
    ]
  },
  "rankings": {
    "swimIntel": {
      "asOf": "June 2026",
      "overallClassRank": "#252",
      "classLabel": "Class of 2028 (M), national",
      "impactRating": "90.44",
      "stars": 3,
      "sectionalsCuts": 7,
      "futuresCuts": 5,
      "bestEvents": [
        { "event": "200Y Breaststroke", "rank": "#61", "time": "2:04.76" },
        { "event": "200Y Individual Medley", "rank": "#106", "time": "1:53.49" },
        { "event": "400Y Individual Medley", "rank": "#148", "time": "4:06.03" }
      ]
    },
    "swimCloud": {
      "asOf": "June 2026",
      "powerIndex": "31.28",
      "classOf2028NationalRank": "525th",
"virginiaRank": "34th",
      "seasonRankings": [
        { "label": "VHSL (state)", "rank": "96th" },
        { "label": "Potomac Valley Swimming, 15-18", "rank": "75th" },
        { "label": "VHSL Class 5", "rank": "28th" },
        { "label": "Riverside High School (team)", "rank": "#1, 2nd straight year" }
      ]
    }
  },
  "times": {
    "scy": [
  { "event": "50 Backstroke", "time": "24.85" },
  { "event": "100 Backstroke", "time": "51.37", "standard": "Futures-18U" },
  { "event": "200 Backstroke", "time": "1:50.89", "standard": "Futures-18U" },
  { "event": "200 IM", "time": "1:53.49", "standard": "Futures-18U" },
  { "event": "400 IM", "time": "4:06.03", "standard": "Futures-18U" },
  { "event": "100 Breaststroke", "time": "59.53" },
  { "event": "200 Breaststroke", "time": "2:04.76", "standard": "Futures-18U" },
  { "event": "100 Freestyle", "time": "48.92" },
  { "event": "200 Freestyle", "time": "1:46.41" }
],
    "lcm": [
      { "event": "50 Backstroke", "time": "28.79" },
      { "event": "100 Backstroke", "time": "1:00.75" },
      { "event": "200 Backstroke", "time": "2:12.31" },
      { "event": "200 IM", "time": "2:11.52" },
      { "event": "400 IM", "time": "4:51.17" },
      { "event": "100 Breaststroke", "time": "1:08.51" },
      { "event": "200 Breaststroke", "time": "2:31.35" },
      { "event": "100 Freestyle", "time": "57.06" },
      { "event": "200 Freestyle", "time": "2:02.29" }
    ]
  },
  "meets": {
    "upcoming": [
      {
        "name": "2026 NCSA Summer Swimming Championships",
        "location": "IU Natatorium, Indianapolis, IN",
        "dates": "July 22-26, 2026",
        "events": [
          { "number": "6", "desc": "M Open 200 Back", "seed": "2:12.31L", "status": "Approved" },
          { "number": "12", "desc": "M Open 400 Medley", "seed": "4:51.317L", "status": "Approved" },
          { "number": "14", "desc": "M Open 50 Back", "seed": "28.79L", "status": "Approved" },
          { "number": "16", "desc": "M Open 100 Back", "seed": "1:00.75L", "status": "Approved" },
          { "number": "32", "desc": "M Open 200 Breast", "seed": "2:31.35L", "status": "Approved" },
          { "number": "36", "desc": "M Open 100 Breast", "seed": "1:08.51L", "status": "Approved" },
          { "number": "40", "desc": "M Open 200 Medley", "seed": "2:11.52L", "status": "Approved" },
        ]
      },
      {
        "name": "TBD",
        "location": "TBD",
        "dates": "TBD",
        "events": []
      }
    ],
    "recent": [
      { "date": "2026-07-09", "name": "PV Long Course Open Championship", "highlight": "200 IM 2:11.52 (LCM PB), 400 IM 4:51.17 (LCM PB), 100 Breast 1:08.51 (LCM PB)" },
      { "date": "2026-06-11", "name": "PV NCAP Elite Qualifier", "highlight": "200 IM 2:13.39 (LCM PB), 100 Breaststroke 1:10.40 (LCM PB)" },
      { "date": "2026-05-29", "name": "Maryland State LC Championship", "highlight": "100 Free 57.06 and 200 Free 2:02.29 (LCM PBs)" },
      { "date": "2026-05-14", "name": "Speedo Sectionals — Richmond", "highlight": "100 Back 1:01.47 and 200 Back 2:12.31 (LCM PBs)" },
      { "date": "2026-03-17", "name": "NCSA Spring Championships", "highlight": "400 IM 4:06.03, 200 IM 1:53.49, 200 Breast 2:04.76 (SCY PBs)" },
      { "date": "2026-02-21", "name": "VHSL Class 5 State Championship", "highlight": "4th, 100 Backstroke (51.37); 5th, 200 IM" }
    ]
  },
  "videos": {
    "highlight": {
      "title": "2026 Recruiting Highlight Reel",
      "driveUrl": "https://drive.google.com/file/d/1gJk3g4c1XWFs1USb8r35_vGvFZoNrpse/view",
      "driveFileId": "1gJk3g4c1XWFs1USb8r35_vGvFZoNrpse"
    },
    "additional": [
      { "title": "100 Back, 2nd, LC Penthatlon Kickoff, LCM, Manassas 2026, Lane 4", "driveFileId": "1ADwqwwmdX6SKFHX2To2kv1SlM4Jwlvp4" },
      { "title": "100 Back, 7th, VHSL States, 2026, Richmond, SCY Prelims, Lane 1", "driveFileId": "1yKHrVWRuyJxYrY-YM91yuZYkX5DykeZo" },
      { "title": "100 Back, 17th, PV Open LC Championship, LCM College Park 2025 Prelims, Lane 1", "driveFileId": "1MVf6Xcz4f_Aowr9gUH1xVFipiqCNKjkr" },
      { "title": "100 Back, 34th, Speedo sectionals LCM, Richmond 2026, Prelims, Lane 4", "driveFileId": "1-ZQB-zYXWuKj5CJhbB4t3sB7a8hkHCwd" },
      { "title": "100 Back, 39th, Speedo sectionals LCM, Richmond 2025, Prelims", "driveFileId": "1RytUhPb8cnCK4a_bVJZ__qm-0lGYMGUy" },
      { "title": "100 Back, 121st, Spring NCSA, Florida 2026, SCY Prelims, Lane 6", "driveFileId": "135zkGYdW-xii9fHxs0CpSD2jFE10fz-v" },
      { "title": "100 Breast, 4th, LC Penthatlon Kickoff, LCM, Manassas 2026, Lane 7", "driveFileId": "17ENfn1KbGKX-RTFhVTidYDEomjFZAmOS" },
      { "title": "100 Breast, 44th, PV Open LC Championship, LCM College Park 2025 Prelims, Lane 2", "driveFileId": "1bjmQp9oY-EEEXYLXg0y7F-NYOB-v4Y3d" },
      { "title": "100 Breast, 57th, Speedo sectionals LCM, Richmond 2026, Prelims, Lane 7", "driveFileId": "1X9GNo2ahEmWo5mpUdfWHATgqgnQ4KYVp" },
      { "title": "100 Fly, 3rd, Helen Wang LCM, Stafford 2025", "driveFileId": "1x_KNM74jNI62LHrpapvUj2vS6BEz8r3c" },
      { "title": "100 Fly, 10th, PV OCCS Fall Festivus, SCY Manassas, 2025, Heat Winner, Lane 5", "driveFileId": "1AlYxoZfahcHUl7IYLILEuIn8nbjW-nRp" },
      { "title": "200 Back, 21st, Speedo sectionals LCM, Richmond 2026, C Finals, Lane 2", "driveFileId": "1EwHZrFBzLkVc2r6w1tLmjSyyRO38bQNL" },
      { "title": "200 Back, 23rd, Speedo sectionals LCM, Richmond 2026, Prelims, Lane 3", "driveFileId": "1RPR69t3wJzulpc1M22CSREBrrUgoUyBt" },
      { "title": "200 Back, 27th, Speedo sectionals LCM, Richmond 2025, D final, Lane 3", "driveFileId": "12A6FXzuKFBY12vSohHMOnjbAp5KkGHCH" },
      { "title": "200 Back, 31st, Speedo sectionals LCM, Richmond 2025, Prelims", "driveFileId": "1f4mV-U2YjgECKZz48_Bg3xI1e4GCEhk4" },
      { "title": "200 Breast, 4th, Presidents Day Classic, Manassas, 2025, SCY Finals, Lane 4", "driveFileId": "1p3xqTC5dV3nqI0CKt08ed6AWJDmeS74O" },
      { "title": "200 Breast, 23rd, PV NOVA Senior Classic, SCY Richmond 2025, Lane 1", "driveFileId": "1R2dBvTZZmNzF2FM30qb7Z21rJ0v0KLab" },
      { "title": "200 Breast, 27th, Speedo sectionals LCM, Richmond 2026, Prelims, Lane 5", "driveFileId": "1ygArT4KG3EFygz65laDJ4Dpiae36Lfk9" },
      { "title": "200 Breast, 28th, Speedo sectionals LCM, Richmond 2026, Prelims, Lane 5", "driveFileId": "15KJIx_VFoiL7K-nf72uprsBbdQ-IC6D0" },
      { "title": "200 Breast, 54th, Speedo sectionals LCM, Richmond 2025, Prelims, Lane 6", "driveFileId": "1ybp9ePzeeXTGRpQujXhKQifjaH5c3UMr" },
      { "title": "200 Breast, 57th, Spring NCSA, Florida 2026, SCY Prelims, Lane 6", "driveFileId": "1WRM9_8-uaiZyErP7OzhGhaC6QXfPMczu" },
      { "title": "200 Breast, Spring NCSA, Florida 2026, SCY Finals, Lane 8", "driveFileId": "1_01gDPgpIFg0TiNeszb_m23KZLPprkf5" },
      { "title": "200 Fly, 10th, PV OCCS Fall Festivus, SCY Manassas, 2025, Lane 1", "driveFileId": "1RkuF2byZcSdamJleT-NcIuAZQLkeJSSQ" },
      { "title": "200 Free, 6th, Presidents Day Classic, Manassas, 2025, SCY Finals, Lane 5", "driveFileId": "1ecJ22l9nnHa4SzEu29KTZZXoyt560XH2" },
      { "title": "200 Free, 7th, PV OCCS Fall Festivus, SCY Manassas, 2025, Lane 2", "driveFileId": "1QYZkGJqKup8GV7TAfYWogcseWnyvoHVI" },
      { "title": "200 Free, 36th, PV Open LC Championship, LCM College Park 2025 Finals, Heat winner, Lane 2", "driveFileId": "1p0aNj4LvuQLZPbW7oYz7cHqwHIGVwI35" },
      { "title": "200 IM, 17th, PV Open LC Championship, LCM College Park 2025 Finals, Heat winner, Lane 4", "driveFileId": "1RAPNzx4MwjSr9iic5otv8wvBwxTJZYbM" },
      { "title": "200 IM, 33rd, Speedo sectionals LCM, Richmond 2026, Prelims, Lane 2", "driveFileId": "1PrIHq3xNxwQxd6ShBC9r_VKUr2mAkKVH" },
      { "title": "400 IM, 42nd, Speedo sectionals LCM, Richmond 2026, Prelims, Lane 4", "driveFileId": "1tz2iFVsWnU2QrwJlkCCSqupd734aL8ty" }
    ]
  }
};
