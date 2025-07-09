let isNewStudent = false;

const translations = {
      en: {
          regFormTitle: "📝 Registration Form",
          headerSubtitle: "Please fill in your information accurately",
          agreeToTerms: 'I agree to the <a href="https://telegra.ph/Policy-07-09-6" target="_blank">School Policy</a> and <a href="https://telegra.ph/Policy-07-09-6" target="_blank">Conditions</a>',
          // Placeholders
          kNamePlaceholder: "Enter your Khmer name",
          eNamePlaceholder: "Enter your English name",
          phonePlaceholder: "Enter phone number",
          schoolPlaceholder: "Enter school name",
          namePlaceholder: "Enter full name",
          jobPlaceholder: "Enter job title",
          provincePlaceholder: "Enter province",
          districtPlaceholder: "Enter district",
          communePlaceholder: "Enter commune",
          villagePlaceholder: "Enter village",
          emailPlaceholder: "Enter email address",
          // Validation Messages
          kNameInvalid: "Must be Khmer letters with at least one space.",
          eNameInvalid: "Must be English letters with at least one space.",
          requiredField: "This field is required.",
          parentInfoMissing: "Please provide complete info (Name and Phone) for at least one parent.",
          addressInfoMissing: "Please enter Province, District, and Commune.",
      },
      km: {
          regFormTitle: "📝 ទម្រង់ចុះឈ្មោះ",
          headerSubtitle: "សូមបំពេញព័ត៌មានរបស់អ្នកឱ្យបានត្រឹមត្រូវ",
          agreeToTerms: 'ខ្ញុំយល់ព្រមតាម <a href="https://telegra.ph/Policy-07-09-6" target="_blank">គោលការណ៍របស់សាលា</a> និង <a href="https://telegra.ph/Policy-07-09-6" target="_blank">លក្ខខណ្ឌដែលបានចែង</a>',
          // Placeholders
          kNamePlaceholder: "បញ្ចូលឈ្មោះភាសាខ្មែររបស់អ្នក។",
          eNamePlaceholder: "បញ្ចូលឈ្មោះភាសាអង់គ្លេសរបស់អ្នក។",
          phonePlaceholder: "បញ្ចូលលេខទូរស័ព្ទ",
          schoolPlaceholder: "បញ្ចូលឈ្មោះសាលា",
          namePlaceholder: "បញ្ចូលឈ្មោះពេញ",
          jobPlaceholder: "បញ្ចូលមុខរបរ",
          provincePlaceholder: "បញ្ចូលខេត្ត",
          districtPlaceholder: "បញ្ចូលស្រុក/ខណ្ឌ",
          communePlaceholder: "បញ្ចូលឃុំ/សង្កាត់",
          villagePlaceholder: "បញ្ចូលភូមិ",
          emailPlaceholder: "បញ្ចូលអាសយដ្ឋានអ៊ីមែល",
          // Validation Messages
          kNameInvalid: "ត្រូវតែជាអក្សរខ្មែរ ហើយមានដកឃ្លាយ៉ាងតិចមួយ។",
          eNameInvalid: "ត្រូវតែជាអក្សរអង់គ្លេស ហើយមានដកឃ្លាយ៉ាងតិចមួយ។",
          requiredField: "សូមបំពេញប្រអប់នេះ។",
          parentInfoMissing: "សូមផ្ដល់ព័ត៌មានពេញលេញ (ឈ្មោះ និងទូរស័ព្ទ) សម្រាប់ឪពុក ឬម្តាយយ៉ាងតិចម្នាក់។",
          addressInfoMissing: "សូមបញ្ចូល ខេត្ត/ក្រុង, ស្រុក/ខណ្ឌ, និង ឃុំ/សង្កាត់។",
      },
};

let currentLang = "en";

// --- Helper Functions ---
// MODIFIED: setLanguage can now render HTML for specific elements
const setLanguage = (lang) => {
    currentLang = lang;
    document.querySelectorAll("[data-lang-key]").forEach(elem => {
        const key = elem.getAttribute("data-lang-key");
        const type = elem.getAttribute("data-type"); // Check for the new data-type attribute

        if (translations[lang]?.[key]) {
            if (type === 'html') {
                // If the type is html, use innerHTML to render the links
                elem.innerHTML = translations[lang][key];
            } else if (elem.tagName === 'BUTTON' && elem.querySelector('i')) {
                elem.innerHTML = `${elem.querySelector('i').outerHTML} ${translations[lang][key]}`;
            } else {
                // Otherwise, use textContent as before
                elem.textContent = translations[lang][key];
            }
        }
    });
    document.querySelectorAll("[data-placeholder]").forEach(elem => {
        const key = elem.getAttribute("data-placeholder");
        if (translations[lang]?.[key]) {
            elem.placeholder = translations[lang][key];
        }
    });
    document.documentElement.lang = lang;
    document.getElementById("lang-en").classList.toggle("active", lang === "en");
    document.getElementById("lang-km").classList.toggle("active", lang === "km");
};

// ... ALL OTHER FUNCTIONS (showError, clearError, updateProgress, validation, etc.) remain exactly the same as before ...
const showError = (input, messageKey) => {
    const formControl = input.parentElement;
    const errorDisplay = formControl.querySelector(".error-message");
    errorDisplay.textContent = translations[currentLang][messageKey] || messageKey;
    errorDisplay.classList.add("visible");
    input.classList.add("input-error");
};

const clearError = (input) => {
    const formControl = input.parentElement;
    const errorDisplay = formControl.querySelector(".error-message");
    errorDisplay.classList.remove("visible");
    input.classList.remove("input-error");
};

// --- DOM Elements ---
const regForm = document.getElementById("regForm");
const kNameInput = document.getElementById("txt_kName");
const eNameInput = document.getElementById("txt_eName");
const genderSelect = document.getElementById("sfComboBox_gender");
const dobInput = document.getElementById("sfDateValue_dob");
const fatherNameInput = document.getElementById("txt_father_name");
const fatherPhoneInput = document.getElementById("txt_father_phone");
const motherNameInput = document.getElementById("txt_mother_name");
const motherPhoneInput = document.getElementById("txt_mother_phone");
const provinceInput = document.getElementById("sfComboBox_parent_province");
const districtInput = document.getElementById("sfComboBox_parent_district");
const communeInput = document.getElementById("sfComboBox_parent_commune");
const parentErrorDiv = document.getElementById("parent-error-message");
const termsCheckbox = document.getElementById("terms-agree");
const submitBtn = document.getElementById("submit-btn");

const updateProgress = () => {
    const progressFill = document.getElementById("progressFill");
    const progressText = document.getElementById("progressText");
    const baseRequiredFields = [kNameInput, eNameInput, genderSelect, dobInput];
    let totalRequiredCount = baseRequiredFields.length;
    let filledCount = baseRequiredFields.filter(input => input.value.trim() !== '').length;
    if (isNewStudent) {
        const addressRequiredFields = [provinceInput, districtInput, communeInput];
        totalRequiredCount += addressRequiredFields.length;
        filledCount += addressRequiredFields.filter(input => input.value.trim() !== '').length;
        totalRequiredCount += 1; 
        const isFatherInfoProvided = fatherNameInput.value.trim() !== '' && fatherPhoneInput.value.trim() !== '';
        const isMotherInfoProvided = motherNameInput.value.trim() !== '' && motherPhoneInput.value.trim() !== '';
        if (isFatherInfoProvided || isMotherInfoProvided) {
            filledCount++;
        }
    }
    const progress = totalRequiredCount > 0 ? (filledCount / totalRequiredCount) * 100 : 0;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${Math.round(progress)}% Complete`;
};

const khmerRegex = /^(?=.* )[\u1780-\u17FF\s]+$/;
const englishRegex = /^(?=.* )[a-zA-Z\s]+$/;
const validateKName = () => khmerRegex.test(kNameInput.value);
const validateEName = () => englishRegex.test(eNameInput.value);
const validateRequired = (input) => input.value.trim() !== '';

const validateParentFields = () => {
    if (!isNewStudent) return;
    const fatherName = fatherNameInput.value.trim();
    const fatherPhone = fatherPhoneInput.value.trim();
    const motherName = motherNameInput.value.trim();
    const motherPhone = motherPhoneInput.value.trim();
    if (fatherName || fatherPhone) {
        validateRequired(fatherNameInput) ? clearError(fatherNameInput) : showError(fatherNameInput, "requiredField");
        validateRequired(fatherPhoneInput) ? clearError(fatherPhoneInput) : showError(fatherPhoneInput, "requiredField");
    } else {
        clearError(fatherNameInput);
        clearError(fatherPhoneInput);
    }
    if (motherName || motherPhone) {
        validateRequired(motherNameInput) ? clearError(motherNameInput) : showError(motherNameInput, "requiredField");
        validateRequired(motherPhoneInput) ? clearError(motherPhoneInput) : showError(motherPhoneInput, "requiredField");
    } else {
        clearError(motherNameInput);
        clearError(motherPhoneInput);
    }
    if ((fatherName && fatherPhone) || (motherName && motherPhone)) {
        parentErrorDiv.classList.remove("visible");
    }
};

function runFinalValidation() {
    let isValid = true;
    let firstErrorElement = null;
    const validationChecks = [
        { input: kNameInput, validator: validateKName, msg: "kNameInvalid" },
        { input: eNameInput, validator: validateEName, msg: "eNameInvalid" },
        { input: genderSelect, validator: validateRequired, msg: "requiredField" },
        { input: dobInput, validator: validateRequired, msg: "requiredField" },
    ];
    if (isNewStudent) {
        validationChecks.push(
            { input: provinceInput, validator: validateRequired, msg: "requiredField" },
            { input: districtInput, validator: validateRequired, msg: "requiredField" },
            { input: communeInput, validator: validateRequired, msg: "requiredField" }
        );
    }
    [...validationChecks.map(c => c.input), fatherNameInput, motherNameInput, fatherPhoneInput, motherPhoneInput].forEach(clearError);
    parentErrorDiv.classList.remove("visible");
    for (const check of validationChecks) {
        if (!check.validator(check.input)) {
            isValid = false;
            showError(check.input, check.msg);
            if (!firstErrorElement) firstErrorElement = check.input;
        } else {
            clearError(check.input);
        }
    }
    if (isNewStudent) {
        const isFatherInfoProvided = fatherNameInput.value.trim() !== '' && fatherPhoneInput.value.trim() !== '';
        const isMotherInfoProvided = motherNameInput.value.trim() !== '' && motherPhoneInput.value.trim() !== '';
        if (!isFatherInfoProvided && !isMotherInfoProvided) {
            isValid = false;
            parentErrorDiv.textContent = translations[currentLang].parentInfoMissing;
            parentErrorDiv.classList.add("visible");
            if (!firstErrorElement) firstErrorElement = fatherNameInput;
        }
    }
    if (!isValid && firstErrorElement) {
        firstErrorElement.focus();
    }
    return isValid;
}

document.addEventListener("DOMContentLoaded", () => {
    const registrationPrompt = document.querySelector(".registration-prompt");
    const fatherInfoSection = document.getElementById("fatherInfo");
    const motherInfoSection = document.getElementById("motherInfo");
    const addressInfoSection = document.getElementById("addressInfo");
    setLanguage("en");
    document.getElementById("lang-en").addEventListener("click", () => setLanguage("en"));
    document.getElementById("lang-km").addEventListener("click", () => setLanguage("km"));
    document.getElementById("btnYes").addEventListener("click", () => {
        isNewStudent = false; 
        registrationPrompt.style.display = "none";
        regForm.style.display = "block";
        fatherInfoSection.style.display = "none";
        motherInfoSection.style.display = "none";
        addressInfoSection.style.display = "none";
        updateProgress();
    });
    document.getElementById("btnNo").addEventListener("click", () => {
        isNewStudent = true; 
        registrationPrompt.style.display = "none";
        regForm.style.display = "block";
        fatherInfoSection.style.display = "block";
        motherInfoSection.style.display = "block";
        addressInfoSection.style.display = "block";
        updateProgress();
    });
    kNameInput.addEventListener('input', () => validateKName() ? clearError(kNameInput) : showError(kNameInput, "kNameInvalid"));
    eNameInput.addEventListener('input', () => validateEName() ? clearError(eNameInput) : showError(eNameInput, "eNameInvalid"));
    [genderSelect, dobInput].forEach(input => {
        input.addEventListener('input', () => validateRequired(input) ? clearError(input) : showError(input, "requiredField"));
    });
    [provinceInput, districtInput, communeInput].forEach(input => {
        input.addEventListener('input', () => {
            if (isNewStudent) {
                validateRequired(input) ? clearError(input) : showError(input, "requiredField");
            }
        });
    });
    [fatherNameInput, fatherPhoneInput, motherNameInput, motherPhoneInput].forEach(input => {
        input.addEventListener('input', validateParentFields);
    });
    regForm.addEventListener('input', updateProgress);
    termsCheckbox.addEventListener('change', () => {
        submitBtn.disabled = !termsCheckbox.checked;
    });
    regForm.addEventListener("submit", async function (e) {
        e.preventDefault();
        if (!runFinalValidation()) {
            return;
        }
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...';
        submitBtn.disabled = true;
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        data.timestamp = new Date().toISOString();
        delete data['terms-agree'];
        const key = new URLSearchParams(window.location.search).get("key");
        const firebaseBaseUrl = "https://pamais-server-default-rtdb.asia-southeast1.firebasedatabase.app/";
        try {
            const response = await fetch(`${firebaseBaseUrl}${key}.json`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                 window.location.href = "https://facebook.com/pamainternationalschool";
            } else {
                throw new Error('Submission failed');
            }
        } catch (err) {
            alert(translations[currentLang].submitError + err.message);
            submitBtn.innerHTML = translations[currentLang].submit;
            submitBtn.disabled = false;
        }
    });
});