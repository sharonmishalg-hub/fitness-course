// כאן מוסיפים את החומר הלימודי.
// כל שיעור הוא אובייקט אחד. אפשר להוסיף שיעורים חדשים בסוף הרשימה.
// title: כותרת השיעור
// tags: מילות מפתח לחיפוש (מערך)
// body: הטקסט של השיעור. שורה ריקה בין פסקאות.
// image: נתיב לתמונה בתיקיית images (אופציונלי)

window.SITE_UPDATED = "2026-10-08";

// פירוש בעברית לשמות השרירים באנגלית/לטינית. מוצג כשמעבירים עכבר או נוגעים בשם.
window.MUSCLE_HE = {
  "Biceps": "דו-ראשי",
  "Brachialis": "שריר הזרוע",
  "Brachioradialis": "שריר מחבר בין הזרוע לרדיוס",
  "Triceps Brachii": "זרוע תלת-ראשי",
  "Anconeus": "מהמילה היוונית ankon, שפירושה מרפק.",
  "Supinator": "מהמילה הלטינית supinus, שפירושה שכוב על הגב או פונה כלפי מעלה.",
  "Pronator teres": "Pronator: מהמילה הלטינית pronus, שפירושה פונה כלפי מטה. Teres: מעוגל.",
  "Pronator quadratus": "Quadratus: מרובע.",
  "Upper Trapezius": "טרפזיוס עליון",
  "Middle Trapezius": "טרפזיוס אמצעי",
  "Lower Trapezius": "טרפזיוס תחתון",
  "Rhomboid": "מעוין",
  "Rhomboids": "מעוין",
  "Serratus Anterior": "משונן קדמי",
  "Levator Scapulae": "שריר הרם השכמה",
  "Pectoralis Minor": "שריר חזה קטן",
  "Latissimus Dorsi": "שריר הגב הרחב",
  "Posterior Deltoid": "דלתא אחורי",
  "Lower Pectoralis": "שריר חזה תחתון",
  "Teres Major": "עגול גדול",
  "Long Head of Triceps": "ראש ארוך של התלת-ראשי",
  "Anterior Deltoid": "דלתא קדמי",
  "Upper Pectoralis": "שריר חזה עליון",
  "Coracobrachialis": "קורקובראכיאליס",
  "Short Head of Biceps": "ראש קצר של הדו-ראשי",
  "Middle Deltoid": "דלתא אמצעי",
  "Deltoid": "דלתא",
  "Supraspinatus": "סופרה-ספינטוס",
  "Pectoralis Major": "שריר החזה הגדול",
  "Subscapularis": "תת-שכמתי",
  "Infraspinatus": "אינפרה-ספינטוס",
  "Teres Minor": "עגול קטן",
  "Iliopsoas": "איליאופסואס: מהעצם הכסל (Ilium) ומשריר הפסואס (Psoas).",
  "Rectus Femoris": "ישר הירך. Rectus: ישר. Femoris: של הירך.",
  "Gluteus Maximus": "העכוז הגדול. Gluteus: עכוז. Maximus: הגדול ביותר.",
  "Hamstrings": "שרירי הירך האחוריים",
  "Gluteus Medius": "העכוז האמצעי. Medius: אמצעי.",
  "Gluteus Minimus": "העכוז הקטן. Minimus: הקטן ביותר.",
  "Gastrocnemius": "שריר התאומים. Gastro: בטן. Cnemis: שוק.",
  "Soleus": "שריר הסוליאוס. מהמילה הלטינית solea, שפירושה סנדל.",
  "Tibialis Anterior": "השוק הקדמי. Tibialis: שוק. Anterior: קדמי.",
  "Rectus Abdominis": "שריר הבטן הישר. Rectus: ישר. Abdominis: של הבטן.",
  "Internal Oblique": "השריר האלכסוני הפנימי. Internal: פנימי. Oblique: אלכסוני.",
  "External Oblique": "השריר האלכסוני החיצוני. External: חיצוני. Oblique: אלכסוני.",
  "Transverse Abdominis": "שריר הבטן הרוחבי. Transverse: רוחבי. Abdominis: של הבטן.",
  "Erector Spinae": "שריר מזקף עמוד השדרה. Erector: מזקף. Spinae: של עמוד השדרה.",
  "Quadriceps Femoris": "ארבע-ראשי הירך. Quadriceps: ארבעה ראשים. Femoris: של הירך."
};

// מיקום אנטומי בעברית. מוצג רק ברשימת "פירוש השמות" מתחת לטבלה.
window.MUSCLE_LOCATION = {
  "Upper Trapezius": "צוואר, עמוד שדרה עליון",
  "Middle Trapezius": "בגב אמצעי, בין כתפות",
  "Lower Trapezius": "בגב תחתון, מתחת לכתפות",
  "Rhomboid": "בין כתף לעמוד שדרה, שכבה עמוקה",
  "Rhomboids": "בין כתף לעמוד שדרה, שכבה עמוקה",
  "Serratus Anterior": "צד הגוף בין צלעות לעצם כתף",
  "Levator Scapulae": "צד צוואר מעמוד שדרה לזוית כתף",
  "Pectoralis Minor": "חזה, תחת שריר החזה הגדול",
  "Biceps": "חזית זרוע עליונה",
  "Brachialis": "חזית עמוקה של זרוע עליונה",
  "Brachioradialis": "צד חוץ של זרוע עליונה",
  "Triceps Brachii": "גב זרוע עליונה",
  "Triceps": "גב זרוע עליונה",
  "Latissimus Dorsi": "גב תחתון ואמצעי, מתחבר לחלק הפנימי של עצם הזרוע",
  "Posterior Deltoid": "החלק האחורי של הכתף, מתחת לעצם הבריח ומעל לשכמה, ומכסה את המפרק מאחור ומהצד",
  "Lower Pectoralis": "חזה תחתון",
  "Teres Major": "שוליים תחתונים של השכמה, בגב הכתף",
  "Long Head of Triceps": "גב השכמה, יורד לגב הזרוע העליונה",
  "Anterior Deltoid": "חזית הכתף",
  "Upper Pectoralis": "חזה עליון",
  "Coracobrachialis": "בחזית הכתף, בצד הפנימי של הזרוע העליונה",
  "Short Head of Biceps": "בחזית הכתף, מחובר לבליטה הקורקואידית של השכמה",
  "Middle Deltoid": "צד חוץ של הכתף",
  "Deltoid": "הכתף, מכסה את מפרק הכתף מבחוץ",
  "Supraspinatus": "מעל קוץ השכמה, בחלק העליון של השכמה",
  "Pectoralis Major": "חזית החזה",
  "Subscapularis": "בצד הקדמי של השכמה",
  "Infraspinatus": "בשקע התת-שדרתי (Infraspinous fossa) בפני השכמה האחוריים, מתחת לשדרת השכמה",
  "Teres Minor": "בשוליים הצדדיים של השכמה",
  "Iliopsoas": "בעומק הבטן התחתונה ובחזית האגן, מחובר לחוליות המותן ולחלק הקדמי של עצם הירך",
  "Rectus Femoris": "חזית הירך, באמצע השריר הקדמי של הירך, מחובר לאגן מעל מפרק הירך ולשוק דרך הפטלה",
  "Gluteus Maximus": "העכוז, השריר הגדול בגוף. מחובר לחלק האחורי של האגן ולעצם הירך",
  "Hamstrings": "גב הירך. שלושה שרירים שמתחברים לעצם הישיבה ולשוק, מתחת לברך",
  "Gluteus Medius": "צד העכוז, החיצוני והעליון, על הכנף של עצם הכסל",
  "Gluteus Minimus": "עמוק מתחת לעכוז האמצעי, על הכנף של עצם הכסל, מחובר לחלק הצידי של עצם הירך",
  "Gastrocnemius": "גב השוק, שני ראשים שמתחברים מאחורי עצם הירך, ויורדים לעקב דרך גיד אכילס",
  "Quadriceps Femoris": "חזית הירך, ארבעה ראשים שמתחברים לאגן ולעצם הירך, מתאחדים בגיד הפטלה מעל הברך ומחוברים לשוק",
  "Soleus": "גב השוק, מתחת לשריר התאומים, מחובר לשוק ולשוקה ויורד לעקב דרך גיד אכילס",
  "Tibialis Anterior": "צד חזית השוק, מחובר לשוק ולכף הרגל, בצד הפנימי",
  "Rectus Abdominis": "חזית הבטן, לאורך הבטן מהחזה עד עצם הערווה, בין שתי הרצועות האנכיות",
  "Internal Oblique": "צדי הבטן, שכבה עמוקה מתחת לאלכסוני החיצוני, מחוברת לאגן ולצלעות התחתונות",
  "External Oblique": "צדי הבטן, השכבה השטחית ביותר של הבטן הצדדית, מחוברת לצלעות התחתונות ולאגן",
  "Transverse Abdominis": "השכבה העמוקה ביותר של הבטן, עוטפת את הבטן כמו חגורה, מחוברת לאגן ולצלעות התחתונות",
  "Erector Spinae": "בגב, לאורך עמוד השדרה, בשני צדי החוליות"
};

// פירושים לתנועות שמופיעות בטבלה. מוצגים רק ברשימת "פירוש השמות" מתחת לטבלה.
window.TERMS_HE = [
  { term: "סופינציה (SUPINATION)", he: "סיבוב האמה כך שכף היד פונה כלפי מעלה." },
  { term: "פרונציה (PRONATION)", he: "סיבוב האמה כך שכף היד פונה כלפי מטה." }
];

// מפרקים לבחירה בשיעור. כל מפרק מציג פופאפ עם השרירים העיקריים.
window.JOINTS = [
  {
    name: "כתף",
    muscles: "",
    video: { title: "סרטון: תנועות הכתף", url: "https://youtu.be/vtH_Ozi7scA" },
    printable: true,
    images: [
      { src: "images/sholder-flexion-extension.png", alt: "כפיפה ופשיטה של הכתף" },
      { src: "images/sholder2-flexion-extension.png", alt: "כפיפה ופשיטה של הכתף, תמונה נוספת" }
    ],
    table: [
      { movement: "פשיטה (EXTENSION)", main: "Latissimus Dorsi", assist: "Posterior Deltoid, Lower Pectoralis, Teres Major, Long Head of Triceps" },
      { movement: "כפיפה (FLEXION)", main: "Anterior Deltoid", assist: "Upper Pectoralis, Coracobrachialis, Short Head of Biceps, Middle Deltoid (כשהכתף ברוטציה מדיאלית)" },
      { movement: "קירוב (ADDUCTION)", main: "Latissimus Dorsi", assist: "Posterior Deltoid, Lower Pectoralis, Teres Major, Coracobrachialis" },
      { movement: "הרחקה (ABDUCTION)", main: "Deltoid, Middle Deltoid", assist: "Supraspinatus" },
      { movement: "רוטציה פנימית (INTERNAL ROTATION)", main: "Latissimus Dorsi", assist: "Pectoralis Major, Subscapularis, Teres Major, Anterior Deltoid" },
      { movement: "רוטציה חיצונית (EXTERNAL ROTATION)", main: "Infraspinatus", assist: "Posterior Deltoid, Teres Minor" },
      { movement: "קירוב אופקי (HORIZONTAL ADDUCTION)", main: "Pectoralis Major", assist: "Coracobrachialis, Anterior Deltoid, Short Head of Biceps" },
      { movement: "הרחקה אופקית (HORIZONTAL ABDUCTION)", main: "Posterior Deltoid", assist: "Teres Minor, Infraspinatus" }
    ]
  },
  {
    name: "מרפק",
    printable: true,
    muscles: "",
    images: [
      { src: "images/elbow-flexion-extension.png", alt: "כפיפה ופשיטה של המרפק" }
    ],
    table: [
      { movement: "כפיפה (FLEXION) בסופינציה", main: "Biceps", assist: "Brachioradialis, Brachialis" },
      { movement: "כפיפה (FLEXION) בפרונציה", main: "Brachialis", assist: "Brachioradialis, Biceps" },
      { movement: "פשיטה (EXTENSION)", main: "Triceps Brachii", assist: "אין" }
    ]
  },
  {
    name: "שכמות",
    printable: true,
    muscles: "",
    images: [
      { src: "images/scapular-flextion-extensions.png", alt: "תנועות השכמה" }
    ],
    table: [
      { movement: "קירוב (Retraction)", main: "Middle Trapezius", assist: "Rhomboid, Upper Trapezius, Lower Trapezius" },
      { movement: "הרחקה (Protraction)", main: "Serratus Anterior", assist: "Pectoralis Minor" },
      { movement: "הרמה (Elevation)", main: "Upper Trapezius", assist: "Levator Scapulae, Rhomboids" },
      { movement: "הורדה (Depression)", main: "Lower Trapezius", assist: "Serratus Anterior" },
      { movement: "רוטציה כלפי מעלה, עם הרחקה (Upward Rotation)", main: "Serratus Anterior", assist: "Upper Trapezius, Lower Trapezius" },
      { movement: "רוטציה כלפי מטה, עם קירוב (Downward Rotation)", main: "Middle Trapezius", assist: "Rhomboid" }
    ]
  },
  {
    name: "ירך",
    printable: true,
    muscles: "",
    images: [
      { src: "images/hip-flexion-extension.png", alt: "כפיפה ופשיטה של הירך" }
    ],
    table: [
      { movement: "כפיפה (FLEXION)", main: "Iliopsoas", assist: "Rectus Femoris, מקרבי הירך" },
      { movement: "פשיטה (EXTENSION)", main: "Gluteus Maximus", assist: "Hamstrings, מקרבי הירך" },
      { movement: "קירוב (ADDUCTION)", main: "מקרבי הירך", assist: "אין" },
      { movement: "הרחקה (ABDUCTION)", main: "Gluteus Medius", assist: "Gluteus Minimus" }
    ]
  },
  {
    name: "ברך",
    printable: true,
    muscles: "",
    images: [
      { src: "images/Knee-flexion-extension.png", alt: "כפיפה ופשיטה של הברך" }
    ],
    table: [
      { movement: "כפיפה (FLEXION)", main: "Hamstrings", assist: "Gastrocnemius" },
      { movement: "פשיטה (EXTENSION)", main: "Quadriceps Femoris", assist: "אין" }
    ]
  },
  {
    name: "קרסול",
    printable: true,
    muscles: "",
    images: [
      { src: "images/Ankle-flexion-extension.png", alt: "כפיפה ופשיטה של הקרסול" }
    ],
    table: [
      { movement: "כיפוף כף הרגל כלפי מטה (PLANTAR FLEXION), ברך כפופה", main: "Gastrocnemius", assist: "Soleus" },
      { movement: "כיפוף כף הרגל כלפי מטה (PLANTAR FLEXION), ברך ישרה", main: "Soleus", assist: "Gastrocnemius" },
      { movement: "כיפוף כף הרגל כלפי מעלה (DORSI FLEXION)", main: "Tibialis Anterior", assist: "פושטי האצבעות" }
    ]
  },
  {
    name: "עמוד שדרה",
    printable: true,
    muscles: "",
    images: [
      { src: "images/spine2-flexion-extension.png", alt: "כפיפה ופשיטה של עמוד השדרה" }
    ],
    table: [
      { movement: "כפיפה (FLEXION)", main: "Rectus Abdominis", assist: "Internal Oblique, External Oblique, Transverse Abdominis" },
      { movement: "פשיטה (EXTENSION)", main: "Erector Spinae", assist: "אין" },
      { movement: "כפיפה לצד (SIDE FLEXION)", main: "Internal Oblique (לצד אליו מתבצעת התנועה), External Oblique (לצד אליו מתבצעת התנועה)", assist: "אין" },
      { movement: "רוטציה שמאלה", main: "Internal Oblique (שמאל), External Oblique (ימין)", assist: "Rectus Abdominis, Transverse Abdominis" },
      { movement: "רוטציה ימינה", main: "Internal Oblique (ימין), External Oblique (שמאל)", assist: "Rectus Abdominis, Transverse Abdominis" },
      { movement: "סיבוב אגן לאחור וכפיפת גו", main: "Gluteus Maximus", assist: "Hamstrings, Rectus Abdominis", shade: true },
      { movement: "פשיטת גו", main: "Erector Spinae", assist: "אין", shade: true },
      { movement: "סיבוב אגן לפנים", main: "Iliopsoas", assist: "Erector Spinae", shade: true }
    ]
  },
];

window.LESSONS = [
  {
    title: "שרירים מופעלים בתנועות המפרקים",
    tags: ["שרירים", "מפרקים", "אנטומיה", "תנועה"],
    video: { title: "סרטון: תנועות המפרקים", url: "https://youtu.be/tAJjXvumL7E" },
    body: "כל תנועה בגוף מתבצעת בזכות מפרק אחד או יותר, ושרירים שמתכווצים ומושכים את העצמות סביבו.\n\nשריר מניע הוא השריר שמבצע את התנועה הראשית, למשל הזרוע הקדמית שמכופפת את המרפק. שריר נגדי הוא השריר שמבצע את התנועה ההפוכה, למשל השריר האחורי של הזרוע שמיישר את המרפק. שריר עוזר הוא שריר שתומך בתנועה ומסייע למניע.\n\nהבנת השרירים שמופעלים בכל תנועה עוזרת לבחור תרגילים מתאימים, לתקן טכניקה ולהימנע מעומס על מפרקים.",
    joints: true,
    image: ""
  }
];
