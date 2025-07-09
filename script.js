let isNewStudent = false;

const translations = {
      en: {
          regFormTitle: "📝 Registration Form",
          headerSubtitle: "Please fill in your information accurately",
          studentInfo: "Student Information",
          khmerName: "Khmer Name",
          englishName: "English Name",
          gender: "Gender",
          selectGender: "Select your gender",
          male: "Male",
          female: "Female",
          dob: "Date of Birth",
          studentPhone: "Student Phone",
          previousSchool: "Previous School",
          parentInfo: "Parent Information",
          addressInfo: "Address Information",
          fatherName: "Father's Name",
          fatherPhone: "Father's Phone",
          fatherJob: "Father's Job",
          motherName: "Mother's Name",
          motherPhone: "Mother's Phone",
          motherJob: "Mother's Job",
          province: "Province",
          district: "District",
          commune: "Commune",
          village: "Village",
          email: "Email",
          submit: "Submit Registration",
          alreadyRegistered: "Have you already registered with us before?",
          yes: "Yes",
          no: "No",
          linkInvalid: "🔒 Link is invalid or expired.",
          submitSuccess: "✅ Registration submitted successfully!",
          submitFail: "❌ Registration submission failed.",
          submitError: "⚠️ Error: ",
          timeRemaining: "Time Remaining:",
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
          studentInfo: "ព័ត៌មានសិស្ស",
          khmerName: "ឈ្មោះភាសាខ្មែរ",
          englishName: "ឈ្មោះ​ភាសាអង់គ្លេស",
          gender: "ភេទ",
          selectGender: "ជ្រើសរើសភេទ",
          male: "ប្រុស",
          female: "ស្រី",
          dob: "ថ្ងៃ​ខែ​ឆ្នាំ​កំណើត",
          studentPhone: "លេខទូរស័ព្ទសិស្ស",
          previousSchool: "សាលាចាស់",
          parentInfo: "ព័ត៌មានអាណាព្យាបាល",
          addressInfo: "ព័ត៌មានអាសយដ្ឋាន",
          fatherName: "ឈ្មោះឪពុក",
          fatherPhone: "លេខទូរស័ព្ទឪពុក",
          fatherJob: "មុខរបរឪពុក",
          motherName: "ឈ្មោះម្ដាយ",
          motherPhone: "លេខទូរស័ព្ទម្ដាយ",
          motherJob: "មុខរបរម្ដាយ",
          province: "ខេត្ត",
          district: "ស្រុក/ខណ្ឌ",
          commune: "ឃុំ/សង្កាត់",
          village: "ភូមិ",
          email: "អ៊ីមែល",
          submit: "បញ្ជូនការចុះឈ្មោះ",
          alreadyRegistered: "តើអ្នកធ្លាប់បានចុះឈ្មោះជាមួយយើងពីមុនទេ?",
          yes: "បាទ/ចាស",
          no: "ទេ",
          linkInvalid: "🔒 តំណភ្ជាប់មិនត្រឹមត្រូវ ឬផុតកំណត់។",
          submitSuccess: "✅ បានបញ្ជូនការចុះឈ្មោះដោយជោគជ័យ!",
          submitFail: "❌ ការបញ្ជូនការចុះឈ្មោះបានបរាជ័យ។",
          submitError: "⚠️ កំហុស៖ ",
          timeRemaining: "ពេលវេលាដែលនៅសល់៖",
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
const setLanguage = (lang) => {
    currentLang = lang;
    document.querySelectorAll("[data-lang-key]").forEach(elem => {
        const key = elem.getAttribute("data-lang-key");
        if (translations[lang]?.[key]) {
            if (elem.tagName === 'BUTTON' && elem.querySelector('i')) {
                elem.innerHTML = `${elem.querySelector('i').outerHTML} ${translations[lang][key]}`;
            } else {
                elem.textContent = translations[lang][key];
            }
        }
    });
    document.documentElement.lang = lang;
    document.getElementById("lang-en").classList.toggle("active", lang === "en");
    document.getElementById("lang-km").classList.toggle("active", lang === "km");
};

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

// --- Validation Logic ---
const khmerRegex = /^(?=.* )[\u1780-\u17FF\s]+$/;
const englishRegex = /^(?=.* )[a-zA-Z\s]+$/;

const validateKName = () => khmerRegex.test(kNameInput.value);
const validateEName = () => englishRegex.test(eNameInput.value);
const validateRequired = (input) => input.value.trim() !== '';

function runFinalValidation() {
    let isValid = true;
    let firstErrorElement = null;

    const checks = [
        // Student Info
        { input: kNameInput, validator: validateKName, msg: "kNameInvalid" },
        { input: eNameInput, validator: validateEName, msg: "eNameInvalid" },
        { input: genderSelect, validator: validateRequired, msg: "requiredField" },
        { input: dobInput, validator: validateRequired, msg: "requiredField" },
    ];

    if (isNewStudent) {
        // Address Info for New Students
        checks.push(
            { input: provinceInput, validator: validateRequired, msg: "requiredField" },
            { input: districtInput, validator: validateRequired, msg: "requiredField" },
            { input: communeInput, validator: validateRequired, msg: "requiredField" }
        );
    }
    
    // Clear all previous errors
    [...checks.map(c => c.input), parentErrorDiv].forEach(clearError);


    // Run individual field checks
    for (const check of checks) {
        if (!check.validator(check.input)) {
            isValid = false;
            showError(check.input, check.msg);
            if (!firstErrorElement) firstErrorElement = check.input;
        } else {
            clearError(check.input);
        }
    }

    // Complex rule: At least one parent for new students
    if (isNewStudent) {
        const isFatherInfoProvided = fatherNameInput.value.trim() !== '' && fatherPhoneInput.value.trim() !== '';
        const isMotherInfoProvided = motherNameInput.value.trim() !== '' && motherPhoneInput.value.trim() !== '';
        if (!isFatherInfoProvided && !isMotherInfoProvided) {
            isValid = false;
            parentErrorDiv.textContent = translations[currentLang].parentInfoMissing;
            parentErrorDiv.classList.add("visible");
            // Add error borders to all parent fields to draw attention
            [fatherNameInput, fatherPhoneInput, motherNameInput, motherPhoneInput].forEach(el => el.classList.add('input-error'));
            if (!firstErrorElement) firstErrorElement = fatherNameInput;
        } else {
            parentErrorDiv.classList.remove("visible");
            [fatherNameInput, fatherPhoneInput, motherNameInput, motherPhoneInput].forEach(el => el.classList.remove('input-error'));
        }
    }

    if (!isValid && firstErrorElement) {
        firstErrorElement.focus();
    }

    return isValid;
}


// --- Event Listeners & Main Logic ---
document.addEventListener("DOMContentLoaded", () => {
    // Initial Setup
    const countdownElement = document.getElementById("countdown");
    const timerContainer = document.querySelector(".timer-container");
    const registrationPrompt = document.querySelector(".registration-prompt");
    const fatherInfoSection = document.getElementById("fatherInfo");
    const motherInfoSection = document.getElementById("motherInfo");
    const addressInfoSection = document.getElementById("addressInfo");
    const key = new URLSearchParams(window.location.search).get("key");
    const expiry = parseInt(new URLSearchParams(window.location.search).get("expiry"));
    
    setLanguage("en");

    // Language Switcher
    document.getElementById("lang-en").addEventListener("click", () => setLanguage("en"));
    document.getElementById("lang-km").addEventListener("click", () => setLanguage("km"));

    // Yes/No Buttons
    document.getElementById("btnYes").addEventListener("click", () => {
        isNewStudent = false; 
        registrationPrompt.style.display = "none";
        regForm.style.display = "block";
        fatherInfoSection.style.display = "none";
        motherInfoSection.style.display = "none";
        addressInfoSection.style.display = "none";
    });

    document.getElementById("btnNo").addEventListener("click", () => {
        isNewStudent = true; 
        registrationPrompt.style.display = "none";
        regForm.style.display = "block";
        fatherInfoSection.style.display = "block";
        motherInfoSection.style.display = "block";
        addressInfoSection.style.display = "block";
    });

    // Real-time validation listeners
    kNameInput.addEventListener('input', () => validateKName() ? clearError(kNameInput) : showError(kNameInput, "kNameInvalid"));
    eNameInput.addEventListener('input', () => validateEName() ? clearError(eNameInput) : showError(eNameInput, "eNameInvalid"));
    [genderSelect, dobInput, provinceInput, districtInput, communeInput].forEach(input => {
        input.addEventListener('input', () => validateRequired(input) ? clearError(input) : showError(input, "requiredField"));
    });

    // Form Submission
    regForm.addEventListener("submit", async function (e) {
        e.preventDefault();
        
        if (!runFinalValidation()) {
            return;
        }

        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
        submitBtn.disabled = true;

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        data.timestamp = new Date().toISOString();

        try {
            const firebaseBaseUrl = "https://pamais-server-default-rtdb.asia-southeast1.firebasedatabase.app/";
            const response = await fetch(`${firebaseBaseUrl}${key}.json`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Success!';
                // ... success logic from before ...
                setTimeout(() => { window.location.href = "https://facebook.com/pamainternationalschool"; }, 2000);
            } else {
                throw new Error('Submission failed');
            }
        } catch (err) {
            alert(translations[currentLang].submitError + err.message);
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });

});