
"use strict";

const translations = {
  en: {
    appTitle: "Tender Document Package Builder",
    subtitle: "Prepare, validate, and combine tender documents.",
    language: "Language",
    bangla: "বাংলা",
    english: "English",
    instructions: "How to use",
    step1Title: "Step 1 · Load requirements",
    step1Text: "Select the requirements.json file provided for your tender.",
    step2Title: "Step 2 · Upload PDFs",
    step2Text: "Add PDF files using the picker or drag and drop.",
    step3Title: "Step 3 · Match documents",
    step3Text: "Match each requirement to one file and enter expiry dates when needed.",
    step4Title: "Step 4 · Generate",
    step4Text: "Resolve blocking issues and download the final PDF package.",
    requirementsHeading: "Tender requirements",
    requirementsDescription: "Load the JSON file to see tender details and required documents.",
    chooseRequirements: "Choose requirements.json",
    requirementsHint: "Expected format: a tender object and a requirements array.",
    tenderDetails: "Tender details",
    tenderId: "Tender ID",
    tenderTitle: "Title",
    procuringEntity: "Procuring Entity",
    bidder: "Bidder",
    deadline: "Submission Deadline",
    requirement: "Requirement",
    mandatory: "Mandatory",
    optional: "Optional",
    matchedFile: "Matched file",
    expiryDate: "Expiry date",
    status: "Status",
    noRequirements: "Load a valid requirements.json file to see the document checklist.",
    uploadHeading: "Upload PDF documents",
    uploadDescription: "Each file can be used for at most one requirement.",
    dropTitle: "Drag and drop PDF files here",
    dropText: "Or select multiple PDF files from your device.",
    choosePdfs: "Choose PDF files",
    uploadHint: "Only readable, unencrypted PDF files are accepted.",
    uploadedFiles: "Uploaded files",
    noFiles: "No PDF files uploaded yet.",
    pageCount: "{count} page(s)",
    remove: "Remove",
    duplicate: "Duplicate",
    duplicateOf: "Same content as: {names}",
    matchingHint: "A file already assigned elsewhere, or blocked by a matched duplicate, cannot be selected again.",
    selectFile: "Select a file",
    noExpiry: "Not applicable",
    chooseDate: "Choose an expiry date",
    missing: "Missing",
    expiryNeeded: "Expiry date needed",
    expired: "Expired",
    notProvided: "Not provided",
    ok: "OK",
    blockingHeading: "Issues to resolve before generating",
    noBlocking: "No blocking issues. You can generate the package.",
    blockingItem: "{name}: {status}",
    generateHeading: "Generate PDF package",
    generateDescription: "The package contains an English cover page followed by matched documents in requirement order.",
    generate: "Generate and download PDF",
    generating: "Generating PDF...",
    nothingLoaded: "Load requirements before generating a package.",
    invalidJson: "Invalid requirements file. Check the JSON syntax and required fields.",
    readJsonError: "Could not read the requirements file.",
    noRequirementsFile: "Please select a requirements.json file.",
    invalidFileType: "Not a valid PDF file: {name}.",
    damagedPdf: "Could not read {name}. The PDF may be damaged or password-protected.",
    duplicateHashError: "Could not calculate the file fingerprint for {name}. Check that your browser supports secure cryptography.",
    uploadFailed: "Could not process {name}.",
    fileRemoved: "File removed: {name}.",
    requirementsLoaded: "Requirements loaded successfully.",
    pdfAdded: "PDF uploaded: {name}.",
    noPdfSelected: "Please select at least one PDF file.",
    pdfLibraryMissing: "The PDF library could not load. Check your internet connection and reload the page.",
    generationFailed: "Could not generate the PDF package. Check the uploaded PDFs and try again.",
    packageDownloaded: "PDF package generated and downloaded.",
    uploadInProgress: "Please wait until PDF uploads finish.",
    emptyTenderTitle: "Untitled tender",
    emptyText: "—",
    appFooter: "Tender Document Package Builder · Frontend-only application",
    includedDocuments: "Included documents",
    noIncludedDocuments: "No documents included.",
    coverHeading: "Tender Document Package",
    coverTenderId: "Tender ID",
    coverTitle: "Title",
    coverEntity: "Procuring Entity",
    coverBidder: "Bidder",
    coverDeadline: "Submission Deadline",
    coverDate: "Package Created",
    coverDocuments: "Included Documents",
    fileInputLabel: "Select requirements JSON",
    pdfInputLabel: "Select PDF files",
    packageFileName: "{id}_Package.pdf"
  },

  bn: {
    appTitle: "টেন্ডার ডকুমেন্ট প্যাকেজ বিল্ডার",
    subtitle: "টেন্ডারের নথি যাচাই করুন এবং একত্রে PDF তৈরি করুন।",
    language: "ভাষা",
    bangla: "বাংলা",
    english: "English",
    instructions: "ব্যবহারের নিয়ম",
    step1Title: "ধাপ ১ · Requirements লোড",
    step1Text: "টেন্ডারের জন্য দেওয়া requirements.json ফাইল নির্বাচন করুন।",
    step2Title: "ধাপ ২ · PDF আপলোড",
    step2Text: "ফাইল নির্বাচন করুন অথবা টেনে এনে আপলোড করুন।",
    step3Title: "ধাপ ৩ · নথি মিলিয়ে নিন",
    step3Text: "প্রতিটি requirement-এর জন্য একটি ফাইল নির্বাচন করুন এবং প্রয়োজন হলে মেয়াদ দিন।",
    step4Title: "ধাপ ৪ · PDF তৈরি",
    step4Text: "বাধা দেওয়া সমস্যাগুলো সমাধান করে চূড়ান্ত PDF ডাউনলোড করুন।",
    requirementsHeading: "টেন্ডারের প্রয়োজনীয় নথি",
    requirementsDescription: "টেন্ডারের তথ্য ও নথির তালিকা দেখতে JSON ফাইল লোড করুন।",
    chooseRequirements: "requirements.json নির্বাচন করুন",
    requirementsHint: "ফাইলে tender object এবং requirements array থাকতে হবে।",
    tenderDetails: "টেন্ডারের বিবরণ",
    tenderId: "টেন্ডার আইডি",
    tenderTitle: "শিরোনাম",
    procuringEntity: "ক্রয়কারী প্রতিষ্ঠান",
    bidder: "দরদাতা",
    deadline: "জমা দেওয়ার শেষ তারিখ",
    requirement: "প্রয়োজনীয় নথি",
    mandatory: "বাধ্যতামূলক",
    optional: "ঐচ্ছিক",
    matchedFile: "নির্বাচিত ফাইল",
    expiryDate: "মেয়াদ শেষের তারিখ",
    status: "অবস্থা",
    noRequirements: "নথির তালিকা দেখতে একটি সঠিক requirements.json ফাইল লোড করুন।",
    uploadHeading: "PDF নথি আপলোড",
    uploadDescription: "প্রতিটি ফাইল সর্বোচ্চ একটি requirement-এর জন্য ব্যবহার করা যাবে।",
    dropTitle: "এখানে PDF ফাইল টেনে আনুন",
    dropText: "অথবা ডিভাইস থেকে একাধিক PDF নির্বাচন করুন।",
    choosePdfs: "PDF ফাইল নির্বাচন করুন",
    uploadHint: "শুধু পড়া যায় এবং পাসওয়ার্ডমুক্ত PDF গ্রহণ করা হবে।",
    uploadedFiles: "আপলোড করা ফাইল",
    noFiles: "এখনো কোনো PDF আপলোড করা হয়নি।",
    pageCount: "{count} পৃষ্ঠা",
    remove: "সরান",
    duplicate: "ডুপ্লিকেট",
    duplicateOf: "একই কনটেন্ট রয়েছে: {names}",
    matchingHint: "অন্য requirement-এ ব্যবহৃত বা নির্বাচিত ডুপ্লিকেটের কারণে বাধাপ্রাপ্ত ফাইল পুনরায় নির্বাচন করা যাবে না।",
    selectFile: "ফাইল নির্বাচন করুন",
    noExpiry: "প্রযোজ্য নয়",
    chooseDate: "মেয়াদ শেষের তারিখ নির্বাচন করুন",
    missing: "অনুপস্থিত",
    expiryNeeded: "মেয়াদের তারিখ প্রয়োজন",
    expired: "মেয়াদ শেষ",
    notProvided: "দেওয়া হয়নি",
    ok: "ঠিক আছে",
    blockingHeading: "PDF তৈরির আগে যেসব সমস্যা সমাধান করতে হবে",
    noBlocking: "কোনো বাধাদানকারী সমস্যা নেই। এখন প্যাকেজ তৈরি করতে পারবেন।",
    blockingItem: "{name}: {status}",
    generateHeading: "PDF প্যাকেজ তৈরি",
    generateDescription: "প্যাকেজে প্রথমে ইংরেজি কভার পেজ থাকবে, তারপর requirement-এর ক্রম অনুযায়ী নির্বাচিত নথিগুলো যুক্ত হবে।",
    generate: "PDF তৈরি ও ডাউনলোড",
    generating: "PDF তৈরি হচ্ছে...",
    nothingLoaded: "প্যাকেজ তৈরির আগে requirements লোড করুন।",
    invalidJson: "Requirements ফাইল সঠিক নয়। JSON syntax এবং প্রয়োজনীয় field পরীক্ষা করুন।",
    readJsonError: "Requirements ফাইল পড়া যায়নি।",
    noRequirementsFile: "অনুগ্রহ করে requirements.json ফাইল নির্বাচন করুন।",
    invalidFileType: "এটি সঠিক PDF ফাইল নয়: {name}।",
    damagedPdf: "{name} পড়া যায়নি। PDF ক্ষতিগ্রস্ত বা পাসওয়ার্ড-সুরক্ষিত হতে পারে।",
    duplicateHashError: "{name}-এর ফিঙ্গারপ্রিন্ট তৈরি করা যায়নি। ব্রাউজারে নিরাপদ cryptography সমর্থিত কি না পরীক্ষা করুন।",
    uploadFailed: "{name} প্রক্রিয়া করা যায়নি।",
    fileRemoved: "ফাইল সরানো হয়েছে: {name}।",
    requirementsLoaded: "Requirements সফলভাবে লোড হয়েছে।",
    pdfAdded: "PDF আপলোড হয়েছে: {name}।",
    noPdfSelected: "অনুগ্রহ করে অন্তত একটি PDF ফাইল নির্বাচন করুন।",
    pdfLibraryMissing: "PDF লাইব্রেরি লোড হয়নি। ইন্টারনেট সংযোগ পরীক্ষা করে পেজটি আবার খুলুন।",
    generationFailed: "PDF প্যাকেজ তৈরি করা যায়নি। আপলোড করা PDF পরীক্ষা করে আবার চেষ্টা করুন।",
    packageDownloaded: "PDF প্যাকেজ তৈরি ও ডাউনলোড হয়েছে।",
    uploadInProgress: "PDF আপলোড শেষ হওয়া পর্যন্ত অপেক্ষা করুন।",
    emptyTenderTitle: "শিরোনামহীন টেন্ডার",
    emptyText: "—",
    appFooter: "টেন্ডার ডকুমেন্ট প্যাকেজ বিল্ডার · Frontend-only অ্যাপ্লিকেশন",
    includedDocuments: "অন্তর্ভুক্ত নথি",
    noIncludedDocuments: "কোনো নথি অন্তর্ভুক্ত করা হয়নি।",
    coverHeading: "Tender Document Package",
    coverTenderId: "Tender ID",
    coverTitle: "Title",
    coverEntity: "Procuring Entity",
    coverBidder: "Bidder",
    coverDeadline: "Submission Deadline",
    coverDate: "Package Created",
    coverDocuments: "Included Documents",
    fileInputLabel: "Requirements JSON নির্বাচন করুন",
    pdfInputLabel: "PDF ফাইল নির্বাচন করুন",
    packageFileName: "{id}_Package.pdf"
  }
};

const state = {
  language: "en",
  tender: null,
  requirements: [],
  requirementsLoaded: false,
  files: [],
  matches: {},
  expiryDates: {},
  messages: [],
  uploading: false,
  generating: false,
  nextFileId: 1
};

const app = document.getElementById("app");
const FOOTER_HEIGHT = 36;
const A4_WIDTH = 595.28;
const A4_HEIGHT = 841.89;

try {
  const savedLanguage = localStorage.getItem("tender-builder-language");
  if (savedLanguage === "en" || savedLanguage === "bn") {
    state.language = savedLanguage;
  }
} catch {
  // Continue with the default language when storage is unavailable.
}

function t(key, params = {}) {
  const dictionary = translations[state.language];
  let result = dictionary[key] ?? translations.en[key] ?? key;

  for (const [name, value] of Object.entries(params)) {
    result = result.replaceAll(`{${name}}`, String(value));
  }

  return result;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}

function addMessage(key, params = {}, type = "error") {
  state.messages.push({ key, params, type });
}

function clearMessages() {
  state.messages = [];
}

function formatDate(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function isValidDateString(value) {
  if (typeof value !== "string" ||
      !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));

  return date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day;
}

function validateRequirementsData(data) {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return false;
  }

  const tender = data.tender;
  const requirements = data.requirements;

  if (!tender || typeof tender !== "object" ||
      Array.isArray(tender) || !Array.isArray(requirements)) {
    return false;
  }

  const tenderFields = [
    "tender_id",
    "title",
    "procuring_entity",
    "bidder"
  ];

  for (const field of tenderFields) {
    if (typeof tender[field] !== "string" ||
        tender[field].trim() === "") {
      return false;
    }
  }

  if (!isValidDateString(tender.submission_deadline)) {
    return false;
  }

  const ids = new Set();

  for (const requirement of requirements) {
    if (!requirement ||
        typeof requirement !== "object" ||
        Array.isArray(requirement)) {
      return false;
    }

    if (typeof requirement.id !== "string" ||
        requirement.id.trim() === "" ||
        ids.has(requirement.id)) {
      return false;
    }

    if (!Number.isFinite(requirement.order) ||
        typeof requirement.title_en !== "string" ||
        typeof requirement.title_bn !== "string" ||
        typeof requirement.mandatory !== "boolean" ||
        typeof requirement.has_expiry !== "boolean") {
      return false;
    }

    ids.add(requirement.id);
  }

  return true;
}

function getRequirementTitle(requirement) {
  const title = state.language === "bn"
    ? requirement.title_bn
    : requirement.title_en;

  return title || requirement.title_en || requirement.id;
}

function getSortedRequirements() {
  return [...state.requirements].sort((a, b) => {
    return a.order - b.order ||
      a.id.localeCompare(b.id);
  });
}

function getFileById(fileId) {
  return state.files.find((file) => file.id === fileId);
}

function getMatchedFile(requirementId) {
  return getFileById(state.matches[requirementId]);
}

function getDuplicateFiles(fileId) {
  const file = getFileById(fileId);

  if (!file) {
    return [];
  }

  return state.files.filter((other) =>
    other.id !== fileId && other.hash === file.hash
  );
}

function isFileAvailable(file, requirementId) {
  for (const [otherRequirementId, matchedFileId]
    of Object.entries(state.matches)) {
    if (otherRequirementId === requirementId) {
      continue;
    }

    const matchedFile = getFileById(matchedFileId);

    if (!matchedFile) {
      continue;
    }

    if (matchedFile.id === file.id ||
        matchedFile.hash === file.hash) {
      return false;
    }
  }

  return true;
}

function getRequirementStatus(requirement) {
  const file = getMatchedFile(requirement.id);

  if (!file) {
    return requirement.mandatory ? "missing" : "notProvided";
  }

  if (requirement.has_expiry) {
    const expiryDate = state.expiryDates[requirement.id];

    if (!expiryDate) {
      return "expiryNeeded";
    }

    if (expiryDate < state.tender.submission_deadline) {
      return "expired";
    }
  }

  return "ok";
}

function isBlockingStatus(status) {
  return ["missing", "expiryNeeded", "expired"].includes(status);
}

function getBlockingRequirements() {
  if (!state.requirementsLoaded) {
    return [];
  }

  return getSortedRequirements()
    .map((requirement) => ({
      requirement,
      status: getRequirementStatus(requirement)
    }))
    .filter((item) => isBlockingStatus(item.status));
}

function getIncludedRequirements() {
  return getSortedRequirements().filter((requirement) => {
    return Boolean(getMatchedFile(requirement.id));
  });
}

function getStatusClass(status) {
  const classes = {
    missing: "status-missing",
    expiryNeeded: "status-expiry-needed",
    expired: "status-expired",
    notProvided: "status-not-provided",
    ok: "status-ok"
  };

  return classes[status] || "status-not-provided";
}

function renderMessages() {
  if (!state.messages.length) {
    return "";
  }

  return `
    <div class="message-list" aria-live="polite">
      ${state.messages.map((message) => `
        <div class="message message-${escapeHtml(message.type)}" role="status">
          ${escapeHtml(t(message.key, message.params))}
        </div>
      `).join("")}
    </div>
  `;
}

function renderHeader() {
  return `
    <header class="topbar">
      <div class="brand">
        <div class="brand-mark" aria-hidden="true">T</div>
        <div>
          <h1>${escapeHtml(t("appTitle"))}</h1>
          <p>${escapeHtml(t("subtitle"))}</p>
        </div>
      </div>

      <div class="language-switch" role="group"
           aria-label="${escapeHtml(t("language"))}">
        <button type="button" data-action="language" data-language="en"
          class="${state.language === "en" ? "active" : ""}"
          aria-pressed="${state.language === "en"}">
          ${escapeHtml(t("english"))}
        </button>
        <button type="button" data-action="language" data-language="bn"
          class="${state.language === "bn" ? "active" : ""}"
          aria-pressed="${state.language === "bn"}">
          ${escapeHtml(t("bangla"))}
        </button>
      </div>
    </header>
  `;
}

function renderInstructions() {
  const steps = [
    ["step1Title", "step1Text"],
    ["step2Title", "step2Text"],
    ["step3Title", "step3Text"],
    ["step4Title", "step4Text"]
  ];

  return `
    <section class="panel">
      <div class="panel-heading">
        <div>
          <h2>${escapeHtml(t("instructions"))}</h2>
        </div>
      </div>

      <div class="instructions">
        ${steps.map(([title, description], index) => `
          <div class="instruction">
            <strong>
              <span class="step-number">${index + 1}</span>
              ${escapeHtml(t(title))}
            </strong>
            <p>${escapeHtml(t(description))}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderRequirementsLoader() {
  return `
    <section class="panel">
      <div class="panel-heading">
        <div>
          <h2>${escapeHtml(t("requirementsHeading"))}</h2>
          <p>${escapeHtml(t("requirementsDescription"))}</p>
        </div>
      </div>

      <div class="file-picker">
        <input id="requirements-input" type="file"
          accept=".json,application/json"
          aria-label="${escapeHtml(t("fileInputLabel"))}">
      </div>

      <p class="field-hint">${escapeHtml(t("requirementsHint"))}</p>

      ${renderMessages()}
      ${state.requirementsLoaded
        ? renderTenderDetails()
        : `<div class="empty-state">${escapeHtml(t("noRequirements"))}</div>`
      }
    </section>
  `;
}

function renderTenderDetails() {
  const fields = [
    ["tenderId", state.tender.tender_id],
    ["tenderTitle", state.tender.title],
    ["procuringEntity", state.tender.procuring_entity],
    ["bidder", state.tender.bidder],
    ["deadline", state.tender.submission_deadline]
  ];

  return `
    <div class="panel-heading" style="margin-top:24px">
      <h2>${escapeHtml(t("tenderDetails"))}</h2>
    </div>

    <div class="tender-grid">
      ${fields.map(([label, value]) => `
        <div class="detail-card">
          <span class="label">${escapeHtml(t(label))}</span>
          <div class="value">${escapeHtml(value)}</div>
        </div>
      `).join("")}
    </div>

    ${renderRequirementsTable()}
  `;
}

function renderRequirementsTable() {
  const requirements = getSortedRequirements();

  if (!requirements.length) {
    return `<div class="empty-state">${escapeHtml(t("noRequirements"))}</div>`;
  }

  return `
    <div class="panel-heading" style="margin-top:26px">
      <h2>${escapeHtml(t("requirementsHeading"))}</h2>
    </div>

    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>${escapeHtml(t("requirement"))}</th>
            <th>${escapeHtml(t("matchedFile"))}</th>
            <th>${escapeHtml(t("expiryDate"))}</th>
            <th>${escapeHtml(t("status"))}</th>
          </tr>
        </thead>
        <tbody>
          ${requirements.map(renderRequirementRow).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderRequirementRow(requirement) {
  const selectedFileId = state.matches[requirement.id] || "";
  const selectedFile = getMatchedFile(requirement.id);
  const status = getRequirementStatus(requirement);
  const expiryValue = state.expiryDates[requirement.id] || "";

  const availableFiles = state.files.filter((file) =>
    isFileAvailable(file, requirement.id)
  );

  const options = availableFiles.map((file) => `
    <option value="${escapeHtml(file.id)}"
      ${file.id === selectedFileId ? "selected" : ""}>
      ${escapeHtml(file.name)}
      ${getDuplicateFiles(file.id).length
        ? ` · ${escapeHtml(t("duplicate"))}`
        : ""}
    </option>
  `).join("");

  return `
    <tr>
      <td class="requirement-name">
        ${escapeHtml(getRequirementTitle(requirement))}
        <span class="requirement-meta">
          ${escapeHtml(requirement.mandatory
            ? t("mandatory")
            : t("optional"))}
        </span>
      </td>

      <td class="match-cell">
        <select data-action="match"
          data-requirement-id="${escapeHtml(requirement.id)}"
          aria-label="${escapeHtml(t("matchedFile"))}: ${escapeHtml(getRequirementTitle(requirement))}">
          <option value="">${escapeHtml(t("selectFile"))}</option>
          ${options}
        </select>
      </td>

      <td class="expiry-cell">
        ${requirement.has_expiry && selectedFile
          ? `<input class="expiry-input" type="date"
              data-action="expiry"
              data-requirement-id="${escapeHtml(requirement.id)}"
              value="${escapeHtml(expiryValue)}"
              aria-label="${escapeHtml(t("expiryDate"))}: ${escapeHtml(getRequirementTitle(requirement))}"
              title="${escapeHtml(t("chooseDate"))}">`
          : `<span class="requirement-meta">${escapeHtml(t("noExpiry"))}</span>`
        }
      </td>

      <td>
        <span class="status-badge ${getStatusClass(status)}">
          ${escapeHtml(t(status))}
        </span>
      </td>
    </tr>
  `;
}

function renderUploadSection() {
  const files = state.files;

  return `
    <section class="panel">
      <div class="panel-heading">
        <div>
          <h2>${escapeHtml(t("uploadHeading"))}</h2>
          <p>${escapeHtml(t("uploadDescription"))}</p>
        </div>
      </div>

      <div class="upload-zone" id="upload-zone">
        <strong>${escapeHtml(t("dropTitle"))}</strong>
        <p>${escapeHtml(t("dropText"))}</p>

        <div class="file-picker" style="justify-content:center">
          <input id="pdf-input" type="file" accept=".pdf,application/pdf"
            multiple aria-label="${escapeHtml(t("pdfInputLabel"))}">
        </div>
      </div>

      <p class="field-hint">${escapeHtml(t("uploadHint"))}</p>
      <p class="field-hint">${escapeHtml(t("matchingHint"))}</p>

      <div class="panel-heading" style="margin-top:24px">
        <h2>${escapeHtml(t("uploadedFiles"))} (${files.length})</h2>
      </div>

      ${files.length
        ? `<div class="file-list">${files.map(renderUploadedFile).join("")}</div>`
        : `<div class="empty-state">${escapeHtml(t("noFiles"))}</div>`
      }
    </section>
  `;
}

function renderUploadedFile(file) {
  const duplicates = getDuplicateFiles(file.id);

  return `
    <div class="uploaded-file">
      <div class="file-info">
        <span class="file-name">${escapeHtml(file.name)}</span>
        <div class="file-meta">
          <span>${escapeHtml(t("pageCount", { count: file.pageCount }))}</span>
          ${duplicates.length
            ? `<span class="duplicate-note">
                ${escapeHtml(t("duplicate"))} ·
                ${escapeHtml(t("duplicateOf", {
                  names: duplicates.map((item) => item.name).join(", ")
                }))}
              </span>`
            : ""
          }
        </div>
      </div>

      <button type="button" class="button button-danger"
        data-action="remove-file"
        data-file-id="${escapeHtml(file.id)}">
        ${escapeHtml(t("remove"))}
      </button>
    </div>
  `;
}

function renderGenerateSection() {
  const blockers = getBlockingRequirements();

  const disabled = !state.requirementsLoaded ||
    blockers.length > 0 ||
    state.generating ||
    state.uploading ||
    typeof PDFLib === "undefined";

  return `
    <section class="panel generate-panel">
      <div class="panel-heading">
        <div>
          <h2>${escapeHtml(t("generateHeading"))}</h2>
          <p>${escapeHtml(t("generateDescription"))}</p>
        </div>
      </div>

      <div class="panel-heading">
        <h2>${escapeHtml(t("blockingHeading"))}</h2>
      </div>

      ${!state.requirementsLoaded
        ? `<div class="message message-warning">${escapeHtml(t("nothingLoaded"))}</div>`
        : blockers.length
          ? `<div class="message message-error">
              <ul class="validation-list">
                ${blockers.map(({ requirement, status }) => `
                  <li>${escapeHtml(t("blockingItem", {
                    name: getRequirementTitle(requirement),
                    status: t(status)
                  }))}</li>
                `).join("")}
              </ul>
            </div>`
          : `<div class="message message-success">${escapeHtml(t("noBlocking"))}</div>`
      }

      ${typeof PDFLib === "undefined"
        ? `<div class="message message-warning">${escapeHtml(t("pdfLibraryMissing"))}</div>`
        : ""
      }

      ${state.uploading
        ? `<div class="message message-warning">${escapeHtml(t("uploadInProgress"))}</div>`
        : ""
      }

      <div class="generate-actions" style="margin-top:18px">
        <p>${escapeHtml(t("generateDescription"))}</p>
        <button type="button" class="button button-primary"
          data-action="generate" ${disabled ? "disabled" : ""}>
          ${escapeHtml(t(state.generating ? "generating" : "generate"))}
        </button>
      </div>
    </section>
  `;
}

function render() {
  document.documentElement.lang = state.language;

  app.innerHTML = `
    <main class="app-shell">
      ${renderHeader()}
      ${renderInstructions()}
      ${renderRequirementsLoader()}
      ${renderUploadSection()}
      ${renderGenerateSection()}
      <footer class="footer-note">${escapeHtml(t("appFooter"))}</footer>
    </main>
  `;
}

async function loadRequirements(file) {
  clearMessages();

  if (!file) {
    addMessage("noRequirementsFile");
    render();
    return;
  }

  try {
    const text = await file.text();
    const data = JSON.parse(text);

    if (!validateRequirementsData(data)) {
      throw new Error("Invalid requirements schema");
    }

    state.tender = data.tender;
    state.requirements = [...data.requirements].sort((a, b) =>
      a.order - b.order || a.id.localeCompare(b.id)
    );
    state.requirementsLoaded = true;
    state.matches = {};
    state.expiryDates = {};
    state.files = [];

    addMessage("requirementsLoaded", {}, "success");
  } catch {
    state.tender = null;
    state.requirements = [];
    state.requirementsLoaded = false;
    state.matches = {};
    state.expiryDates = {};
    state.files = [];
    addMessage("invalidJson");
  }

  render();
}

async function uploadPdfFiles(inputFiles) {
  if (!inputFiles.length) {
    return;
  }

  state.uploading = true;
  clearMessages();
  render();

  for (const file of inputFiles) {
    try {
      const bytes = new Uint8Array(await file.arrayBuffer());

      const signature = new TextDecoder().decode(bytes.subarray(0, 5));

      if (!file.name.toLowerCase().endsWith(".pdf") ||
          signature !== "%PDF-") {
        addMessage("invalidFileType", { name: file.name });
        continue;
      }

      let pdfDocument;

      try {
        pdfDocument = await PDFLib.PDFDocument.load(bytes);
      } catch {
        addMessage("damagedPdf", { name: file.name });
        continue;
      }

      let digest;

      try {
        digest = await crypto.subtle.digest("SHA-256", bytes);
      } catch {
        addMessage("duplicateHashError", { name: file.name });
        continue;
      }

      const hash = Array.from(new Uint8Array(digest))
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");

      state.files.push({
        id: `file-${state.nextFileId++}`,
        name: file.name,
        pageCount: pdfDocument.getPageCount(),
        hash,
        bytes
      });

      addMessage("pdfAdded", { name: file.name }, "success");
    } catch {
      addMessage("uploadFailed", { name: file.name });
    }
  }

  state.uploading = false;
  render();
}

function removeFile(fileId) {
  const file = getFileById(fileId);

  if (!file) {
    return;
  }

  state.files = state.files.filter((item) => item.id !== fileId);

  for (const [requirementId, matchedFileId]
    of Object.entries(state.matches)) {
    if (matchedFileId === fileId) {
      delete state.matches[requirementId];
      delete state.expiryDates[requirementId];
    }
  }

  clearMessages();
  addMessage("fileRemoved", { name: file.name }, "success");
  render();
}

function setMatch(requirementId, fileId) {
  const requirement = state.requirements.find((item) =>
    item.id === requirementId
  );

  if (!requirement) {
    return;
  }

  if (!fileId) {
    delete state.matches[requirementId];
    delete state.expiryDates[requirementId];
    render();
    return;
  }

  const file = getFileById(fileId);

  if (!file || !isFileAvailable(file, requirementId)) {
    render();
    return;
  }

  const previousFileId = state.matches[requirementId];

  state.matches[requirementId] = fileId;

  if (previousFileId !== fileId) {
    delete state.expiryDates[requirementId];
  }

  render();
}

function setExpiryDate(requirementId, value) {
  const requirement = state.requirements.find((item) =>
    item.id === requirementId
  );

  if (!requirement ||
      !requirement.has_expiry ||
      !getMatchedFile(requirementId)) {
    return;
  }

  if (value && !isValidDateString(value)) {
    return;
  }

  if (value) {
    state.expiryDates[requirementId] = value;
  } else {
    delete state.expiryDates[requirementId];
  }

  render();
}

// PDF generation helpers.

function asciiSafe(value) {
  return String(value ?? "")
    .replace(/[^\x20-\x7E]/g, "?");
}

function wrapText(text, font, fontSize, maxWidth) {
  const words = asciiSafe(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let line = "";

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;

    if (font.widthOfTextAtSize(candidate, fontSize) <= maxWidth) {
      line = candidate;
      continue;
    }

    if (line) {
      lines.push(line);
    }

    if (font.widthOfTextAtSize(word, fontSize) <= maxWidth) {
      line = word;
      continue;
    }

    let part = "";

    for (const character of word) {
      const nextPart = part + character;

      if (font.widthOfTextAtSize(nextPart, fontSize) > maxWidth && part) {
        lines.push(part);
        part = character;
      } else {
        part = nextPart;
      }
    }

    line = part;
  }

  if (line) {
    lines.push(line);
  }

  return lines.length ? lines : [""];
}

function drawWrappedLine(page, text, options) {
  const {
    font,
    fontSize,
    x,
    y,
    maxWidth,
    lineHeight,
    color
  } = options;

  const lines = wrapText(text, font, fontSize, maxWidth);

  lines.forEach((line, index) => {
    page.drawText(line, {
      x,
      y: y - index * lineHeight,
      size: fontSize,
      font,
      color
    });
  });

  return y - lines.length * lineHeight;
}

function drawCoverPage(pdf, font, boldFont, includedRequirements) {
  const pageWidth = A4_WIDTH;
  const pageHeight = A4_HEIGHT + FOOTER_HEIGHT;
  const page = pdf.addPage([pageWidth, pageHeight]);

  const margin = 42;
  const contentWidth = pageWidth - margin * 2;
  const black = PDFLib.rgb(0.12, 0.16, 0.23);
  const muted = PDFLib.rgb(0.35, 0.40, 0.48);
  const accent = PDFLib.rgb(0.14, 0.34, 0.76);

  let y = pageHeight - 48;

  page.drawText("TENDER DOCUMENT PACKAGE", {
    x: margin,
    y,
    size: 17,
    font: boldFont,
    color: accent
  });

  y -= 35;

  const tenderFields = [
    ["Tender ID", state.tender.tender_id],
    ["Title", state.tender.title],
    ["Procuring Entity", state.tender.procuring_entity],
    ["Bidder", state.tender.bidder],
    ["Submission Deadline", state.tender.submission_deadline],
    ["Package Created", formatDate()]
  ];

  for (const [label, value] of tenderFields) {
    const safeValue = asciiSafe(value);
    const line = `${label}: ${safeValue}`;

    y = drawWrappedLine(page, line, {
      font,
      fontSize: 10,
      x: margin,
      y,
      maxWidth: contentWidth,
      lineHeight: 13,
      color: black
    });

    y -= 3;
  }

  y -= 7;

  page.drawText("Included Documents", {
    x: margin,
    y,
    size: 12,
    font: boldFont,
    color: black
  });

  y -= 22;

  if (!includedRequirements.length) {
    page.drawText("No documents included.", {
      x: margin,
      y,
      size: 9,
      font,
      color: muted
    });
  } else {
    const availableHeight = Math.max(100, y - (FOOTER_HEIGHT + 24));
    const estimatedLines = includedRequirements.reduce((total, requirement, index) => {
      const title = `${index + 1}. ${requirement.title_en}`;
      return total + wrapText(title, font, 8.5, contentWidth - 10).length;
    }, 0);

    const estimatedHeight = estimatedLines * 11;
    const lineHeight = estimatedHeight > availableHeight
      ? Math.max(6, availableHeight / Math.max(1, estimatedLines))
      : 11;
    const fontSize = Math.min(8.5, lineHeight * 0.78);

    includedRequirements.forEach((requirement, index) => {
      const title = `${index + 1}. ${requirement.title_en}`;

      y = drawWrappedLine(page, title, {
        font,
        fontSize,
        x: margin + 5,
        y,
        maxWidth: contentWidth - 10,
        lineHeight,
        color: black
      });
    });
  }

  return page;
}

async function appendMatchedDocuments(pdf) {
  const includedRequirements = getIncludedRequirements();

  for (const requirement of includedRequirements) {
    const file = getMatchedFile(requirement.id);

    if (!file) {
      continue;
    }

    const sourcePages = await pdf.embedPdf(file.bytes);

    for (const sourcePage of sourcePages) {
      const width = sourcePage.width;
      const height = sourcePage.height;

      const page = pdf.addPage([width, height + FOOTER_HEIGHT]);

      page.drawPage(sourcePage, {
        x: 0,
        y: FOOTER_HEIGHT,
        width,
        height
      });
    }
  }
}

function addFooters(pdf) {
  const pages = pdf.getPages();
  const totalPages = pages.length;

  const tenderId = asciiSafe(state.tender.tender_id);
  const font = PDFLib.StandardFonts.Helvetica;

  // Reuse the already embedded standard font through the caller.
  return { pages, totalPages, tenderId, font };
}

async function generatePackage() {
  if (!state.requirementsLoaded ||
      state.generating ||
      state.uploading ||
      getBlockingRequirements().length > 0) {
    return;
  }

  if (typeof PDFLib === "undefined") {
    clearMessages();
    addMessage("pdfLibraryMissing");
    render();
    return;
  }

  state.generating = true;
  clearMessages();
  render();

  try {
    const pdf = await PDFLib.PDFDocument.create();

    pdf.setTitle(asciiSafe(state.tender.title));
    pdf.setSubject("Tender Document Package");
    pdf.setAuthor(asciiSafe(state.tender.bidder));

    const font = await pdf.embedFont(PDFLib.StandardFonts.Helvetica);
    const boldFont = await pdf.embedFont(PDFLib.StandardFonts.HelveticaBold);

    const includedRequirements = getIncludedRequirements();

    drawCoverPage(pdf, font, boldFont, includedRequirements);

    await appendMatchedDocuments(pdf);

    const footerInfo = addFooters(pdf);

    for (let index = 0; index < footerInfo.pages.length; index++) {
      const page = footerInfo.pages[index];
      const label = `${footerInfo.tenderId} | Page ${index + 1} of ${footerInfo.totalPages}`;
      const fontSize = 10;
      const textWidth = font.widthOfTextAtSize(label, fontSize);

      page.drawText(label, {
        x: Math.max(10, (page.getWidth() - textWidth) / 2),
        y: 12,
        size: fontSize,
        font,
        color: PDFLib.rgb(0.30, 0.30, 0.30)
      });
    }

    const pdfBytes = await pdf.save();

    const blob = new Blob([pdfBytes], {
      type: "application/pdf"
    });

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    const safeId = state.tender.tender_id
      .replace(/[\\/:*?"<>|]/g, "_");

    anchor.href = url;
    anchor.download = t("packageFileName", { id: safeId });

    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    setTimeout(() => URL.revokeObjectURL(url), 1000);

    addMessage("packageDownloaded", {}, "success");
  } catch (error) {
    console.error("PDF package generation failed:", error);
    addMessage("generationFailed");
  } finally {
    state.generating = false;
    render();
  }
}

// Event delegation keeps the UI logic in one place.

app.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");

  if (!button) {
    return;
  }

  const action = button.dataset.action;

  if (action === "language") {
    const language = button.dataset.language;

    if (language === "en" || language === "bn") {
      state.language = language;

      try {
        localStorage.setItem("tender-builder-language", language);
      } catch {
        // Language remains available for the current session.
      }

      render();
    }
  }

  if (action === "remove-file") {
    removeFile(button.dataset.fileId);
  }

  if (action === "generate") {
    generatePackage();
  }
});

app.addEventListener("change", async (event) => {
  const target = event.target;

  if (target.id === "requirements-input") {
    const file = target.files?.[0];
    await loadRequirements(file);
    return;
  }

  if (target.id === "pdf-input") {
    const files = Array.from(target.files || []);
    await uploadPdfFiles(files);
    return;
  }

  if (target.dataset.action === "match") {
    setMatch(
      target.dataset.requirementId,
      target.value
    );
    return;
  }

  if (target.dataset.action === "expiry") {
    setExpiryDate(
      target.dataset.requirementId,
      target.value
    );
  }
});

app.addEventListener("dragover", (event) => {
  if (!event.target.closest("#upload-zone")) {
    return;
  }

  event.preventDefault();
  document.getElementById("upload-zone")?.classList.add("drag-over");
});

app.addEventListener("dragleave", (event) => {
  const zone = document.getElementById("upload-zone");

  if (!zone || zone.contains(event.relatedTarget)) {
    return;
  }

  zone.classList.remove("drag-over");
});

app.addEventListener("drop", async (event) => {
  if (!event.target.closest("#upload-zone")) {
    return;
  }

  event.preventDefault();

  document.getElementById("upload-zone")?.classList.remove("drag-over");

  const files = Array.from(event.dataTransfer?.files || []);

  await uploadPdfFiles(files);
});

render();