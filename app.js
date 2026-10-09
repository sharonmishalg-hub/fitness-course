// מציג את השיעורים ומאפשר חיפוש בהם. לא צריך שרת או ספרייה חיצונית.

(function () {
  const lessonsEl = document.getElementById("lessons");
  const resultsEl = document.getElementById("results");
  const statusEl = document.getElementById("status");
  const searchEl = document.getElementById("search");
  const updatedEl = document.getElementById("updated");

  updatedEl.textContent = window.SITE_UPDATED || "";

  function escapeHtml(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function highlight(text, query) {
    const safe = escapeHtml(text);
    if (!query) return safe;
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return safe.replace(new RegExp("(" + escapedQuery + ")", "gi"), "<mark>$1</mark>");
  }

  function jointPicker(lesson) {
    if (!lesson.joints || !window.JOINTS) return "";
    const buttons = window.JOINTS
      .map(j => '<button type="button" class="joint-btn" data-name="' + escapeHtml(j.name) + '">' + escapeHtml(j.name) + "</button>")
      .join("");
    return '<div class="joint-picker"><p>בחרו מפרק כדי לראות את השרירים העיקריים והמסייעים:</p>' + buttons + "</div>";
  }

  function renderLesson(lesson, query) {
    const tags = (lesson.tags || [])
      .map(t => '<span class="tag">' + escapeHtml(t) + "</span>")
      .join(" ");
    const paragraphs = lesson.body
      .split(/\n\s*\n/)
      .map(p => "<p>" + highlight(p, query) + "</p>")
      .join("");
    const image = lesson.image
      ? '<img src="' + escapeHtml(lesson.image) + '" alt="' + escapeHtml(lesson.title) + '">'
      : "";
    const videoLink = lesson.video
      ? '<p class="lesson-video"><a href="' + escapeHtml(lesson.video.url) + '" target="_blank" rel="noopener">' + escapeHtml(lesson.video.title) + "</a></p>"
      : "";
    return (
      '<article class="lesson">' +
      "<h2>" + highlight(lesson.title, query) + "</h2>" +
      videoLink +
      image +
      paragraphs +
      jointPicker(lesson) +
      "</article>"
    );
  }

  function matches(lesson, query) {
    const haystack = (
      lesson.title + " " +
      (lesson.tags || []).join(" ") + " " +
      lesson.body
    ).toLowerCase();
    return haystack.includes(query);
  }

  // כפתורי מפרקים שמתאימים למילת החיפוש. לחיצה עליהם פותחת את הפופאפ
  function jointButtonsFor(query) {
    const matchesJoint = (window.JOINTS || []).filter(j => j.name.includes(query));
    if (!matchesJoint.length) return "";
    const buttons = matchesJoint
      .map(j => '<button type="button" class="joint-btn" data-name="' + escapeHtml(j.name) + '">' + escapeHtml(j.name) + "</button>")
      .join("");
    return '<div class="joint-picker"><p>מפרקים שנמצאו:</p>' + buttons + "</div>";
  }

  function render() {
    const query = searchEl.value.trim().toLowerCase();
    const lessons = window.LESSONS || [];

    if (!query) {
      statusEl.textContent = "";
      resultsEl.innerHTML = "";
      lessonsEl.innerHTML = lessons.map(l => renderLesson(l, "")).join("");
      return;
    }

    const found = lessons.filter(l => matches(l, query));
    const jointsHtml = jointButtonsFor(query);
    lessonsEl.innerHTML = "";
    statusEl.textContent = (found.length || jointsHtml)
      ? "נמצאו " + found.length + " שיעורים"
      : "לא נמצאו תוצאות עבור: " + searchEl.value.trim();
    resultsEl.innerHTML = jointsHtml + found.map(l => renderLesson(l, query)).join("");
  }

  const dialog = document.getElementById("joint-dialog");

  // שם שריר באנגלית/לטינית, עם פירוש בעברית שמופיע בהעברת עכבר או בנגיעה
  function muscleHtml(list) {
    return list
      .split(",")
      .map(s => s.trim())
      .filter(Boolean)
      .map(item => {
        const m = item.match(/^(.*?)\s*\((.*)\)$/);
        const name = m ? m[1].trim() : item;
        const note = m ? " (" + escapeHtml(m[2]) + ")" : "";
        const he = (window.MUSCLE_HE || {})[name] || "";
        if (!he) return escapeHtml(name) + note;
        return '<span class="muscle" tabindex="0" data-he="' + escapeHtml(he) + '">' + escapeHtml(name) + "</span>" + note;
      })
      .join("<br>");
  }

  // רשימת פירושים בעברית לשרירים שמופיעים בטבלה, מתחת לטבלה
  function legendHtml(table) {
    const names = [];
    table.forEach(r => [r.main, r.assist].forEach(list => {
      list.split(",").forEach(item => {
        const m = item.trim().match(/^(.*?)\s*\(.*\)$/);
        const name = m ? m[1].trim() : item.trim();
        if (name && (window.MUSCLE_HE || {})[name] && !names.includes(name)) names.push(name);
      });
    }));
    if (!names.length) return "";
    const rows = names
      .map(n => "<tr><td>" + escapeHtml(n) + "</td><td>" + escapeHtml(window.MUSCLE_HE[n]) + "</td><td>" + escapeHtml((window.MUSCLE_LOCATION || {})[n] || "—") + "</td></tr>")
      .join("");
    const txt = JSON.stringify(table);
    const termRows = (txt.includes("סופינציה") || txt.includes("פרונציה"))
      ? (window.TERMS_HE || []).map(t => "<tr><td>" + escapeHtml(t.term) + "</td><td>" + escapeHtml(t.he) + "</td><td>—</td></tr>").join("")
      : "";
    return (
      '<div class="muscle-legend"><p><strong>פירוש השמות:</strong></p>' +
      '<table class="joint-table"><thead><tr><th>שם</th><th>פירוש</th><th>מיקום אנטומי</th></tr></thead>' +
      "<tbody>" + rows + termRows + "</tbody></table></div>"
    );
  }

  function showJoint(name) {
    const joint = (window.JOINTS || []).find(j => j.name === name);
    if (!joint) return;
    let content;
    if (joint.table) {
      const rows = joint.table
        .map(r => (r.shade ? '<tr class="row-shade">' : "<tr>") + "<td>" + escapeHtml(r.movement) + "</td><td>" + muscleHtml(r.main) + "</td><td>" + muscleHtml(r.assist) + "</td></tr>")
        .join("");
      content =
        '<table class="joint-table"><thead><tr><th>סוג תנועה</th><th>שריר ראשי</th><th>שריר מסייע</th></tr></thead>' +
        "<tbody>" + rows + "</tbody></table>" + legendHtml(joint.table);
    } else {
      content = "<p>" + escapeHtml(joint.muscles).replace(/\n/g, "<br>") + "</p>";
    }
    const imagesHtml = (joint.images || []).length
      ? '<div class="joint-images">' +
        joint.images.map(img => '<img src="' + escapeHtml(img.src) + '" alt="' + escapeHtml(img.alt) + '">').join("") +
        "</div>"
      : "";
    const videoHtml = joint.video
      ? '<p class="joint-video"><a href="' + escapeHtml(joint.video.url) + '" target="_blank" rel="noopener">' + escapeHtml(joint.video.title) + "</a></p>"
      : "";
    dialog.innerHTML =
      '<div class="joint-top"><button type="button" class="joint-close" autofocus>סגירה</button></div>' +
      imagesHtml +
      "<h3>" + escapeHtml(joint.name) + "</h3>" +
      videoHtml +
      content;
    dialog.showModal();
  }

  document.addEventListener("click", function (e) {
    const btn = e.target.closest(".joint-btn");
    if (btn) showJoint(btn.dataset.name);
    if (e.target.classList.contains("joint-close")) dialog.close();
  });

  searchEl.addEventListener("input", render);
  render();
})();
