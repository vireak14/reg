let isNewStudent = false;
let currentLang = "en";

const translations = {
          en: {
              // Titles and Headers
              regFormTitle: "QUICK REGISTRATION",
              headerSubtitle: "Please enter student and parent details.",
          // Controls and Prompts
          welcome: "🎓 Welcome to Our School!", // Added this line
              
              // Controls and Prompts
              timeRemaining: "Time Remaining:",
              alreadyRegistered: "Have you already registered with us before?",
              yes: "Yes",
              no: "No",
    
              // Section Titles
              studentInfo: "Student Information",
              fatherInfo: "Father Information",
              motherInfo: "Mother Information",
              addressInfo: "Address Information",
    
              // Student Info Labels
              khmerName: "Khmer Name",
              englishName: "English Name",
              gender: "Gender",
              selectGender: "Select your gender",
              male: "Male",
              female: "Female",
              dob: "Date of Birth",
              studentPhone: "Student Phone",
              previousSchool: "Previous School",
    
              // Parent Info Labels
              fatherName: "Father's Name",
              fatherPhone: "Father's Phone",
              fatherJob: "Father's Job",
              motherName: "Mother's Name",
              motherPhone: "Mother's Phone",
              motherJob: "Mother's Job",
    
              // Address Info Labels
              province: "Province",
              district: "District",
              commune: "Commune",
              village: "Village",
              email: "Email",
    
              // Agreement and Submission
              agreeToTerms: 'I agree to the <a href="https://telegra.ph/Policy-07-09-6" target="_blank">School Policy</a> and <a href="https://telegra.ph/Policy-07-09-6" target="_blank">Conditions</a>',
              submit: "Submit Registration",
    
              // Expired Page
              linkInvalidHeading: "Link Expired",
              linkInvalidText: "This registration link has already been used or is invalid. Please contact us if you believe this is an error.",
              
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
              submitSuccess: "Registration submitted successfully!",
          },
          km: {
              // Titles and Headers
              regFormTitle: "សំណុំបែបបទចុះឈ្មោះរហ័ស",
              headerSubtitle: "សូមបញ្ចូលព័ត៌មានសិស្ស និងប៉ាម៉ាក់/អាពាព្យាបាល។",
          // Controls and Prompts
          welcome: "🎓 សូមស្វាគមន៍មកកាន់សាលារបស់យើង!", // Added this line
              // Controls and Prompts
              timeRemaining: "រយៈពេលនៅសល់៖",
              alreadyRegistered: "តើអ្នកធ្លាប់បានចុះឈ្មោះជាមួយយើងពីមុនទេ?",
              yes: "បាទ/ចាស",
              no: "ទេ",
    
              // Section Titles
              studentInfo: "ព័ត៌មានសិស្ស",
              fatherInfo: "ព័ត៌មានឪពុក",
              motherInfo: "ព័ត៌មានម្ដាយ",
              addressInfo: "ព័ត៌មានអាសយដ្ឋាន",
    
              // Student Info Labels
              khmerName: "ឈ្មោះភាសាខ្មែរ",
              englishName: "ឈ្មោះ​ភាសាអង់គ្លេស",
              gender: "ភេទ",
              selectGender: "ជ្រើសរើសភេទ",
              male: "ប្រុស",
              female: "ស្រី",
              dob: "ថ្ងៃ​ខែ​ឆ្នាំ​កំណើត",
              studentPhone: "លេខទូរស័ព្ទសិស្ស",
              previousSchool: "សាលាចាស់",
    
              // Parent Info Labels
              fatherName: "ឈ្មោះឪពុក",
              fatherPhone: "លេខទូរស័ព្ទឪពុក",
              fatherJob: "មុខរបរឪពុក",
              motherName: "ឈ្មោះម្ដាយ",
              motherPhone: "លេខទូរស័ព្ទម្ដាយ",
              motherJob: "មុខរបរម្ដាយ",
    
              // Address Info Labels
              province: "ខេត្ត",
              district: "ស្រុក/ខណ្ឌ",
              commune: "ឃុំ/សង្កាត់",
              village: "ភូមិ",
              email: "អ៊ីមែល",
    
              // Agreement and Submission
              agreeToTerms: 'ខ្ញុំយល់ព្រមតាម <a href="https://telegra.ph/Policy-07-09-6" target="_blank">គោលការណ៍របស់សាលា</a> និង <a href="https://telegra.ph/Policy-07-09-6" target="_blank">លក្ខខណ្ឌដែលបានចែង</a>',
              submit: "បញ្ជូនការចុះឈ្មោះ",
    
              // Expired Page
              linkInvalidHeading: "តំណភ្ជាប់បានផុតកំណត់",
              linkInvalidText: "តំណភ្ជាប់ចុះឈ្មោះនេះត្រូវបានប្រើប្រាស់រួចហើយ ឬមិនត្រឹមត្រូវ។ សូមទាក់ទងមកយើងខ្ញុំ ប្រសិនបើលោកអ្នកជឿថានេះជាកំហុស។",
              
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
              submitSuccess: "✅ បានបញ្ជូនការចុះឈ្មោះដោយជោគជ័យ!",
          },
    };

// --- Helper Functions ---
const setLanguage = (lang) => {
    currentLang = lang;
    document.querySelectorAll("[data-lang-key]").forEach(elem => {
        const key = elem.getAttribute("data-lang-key");
        const type = elem.getAttribute("data-type");
        if (translations[lang]?.[key]) {
            if (type === 'html') elem.innerHTML = translations[lang][key];
            else if (elem.tagName === 'BUTTON' && elem.querySelector('i')) elem.innerHTML = `${elem.querySelector('i').outerHTML} ${translations[lang][key]}`;
            else elem.textContent = translations[lang][key];
        }
    });
    document.querySelectorAll("[data-placeholder]").forEach(elem => {
        const key = elem.getAttribute("data-placeholder");
        if (translations[lang]?.[key]) elem.placeholder = translations[lang][key];
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


// --- Main Logic ---
document.addEventListener("DOMContentLoaded", async () => {
    
    // --- Get all DOM elements first ---
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
    const mainContainer = document.querySelector(".container");
    const expiredOverlay = document.getElementById("expired-link-overlay");

    const showExpiredPage = (reason) => {
        console.error("Link validation FAILED. Reason:", reason);
        mainContainer.style.display = 'none';
        expiredOverlay.style.display = 'flex';
        setLanguage(currentLang);
    };

    // --- Page Load Validation ---
    const key = new URLSearchParams(window.location.search).get("key");
    const expiryInSeconds = parseInt(new URLSearchParams(window.location.search).get("expiry"));
    const nowInSeconds = Math.floor(Date.now() / 1000);
    const firebaseBaseUrl = "https://pamais-server-default-rtdb.asia-southeast1.firebasedatabase.app/";

    // Check for missing key or expiry, or if time has passed
    if (!key || !expiryInSeconds || nowInSeconds > expiryInSeconds) {
        showExpiredPage("Time has expired or parameters are missing.");
        return;
    }
    
    // NOTE: The check to see if the link was already used has been removed as requested.

    // --- Setup Page if Link is Valid ---
    const countdownElement = document.getElementById("countdown");
    const registrationPrompt = document.querySelector(".registration-prompt");
    const fatherInfoSection = document.getElementById("fatherInfo");
    const motherInfoSection = document.getElementById("motherInfo");
    const addressInfoSection = document.getElementById("addressInfo");

    const timerInterval = setInterval(() => {
        const distanceInSeconds = expiryInSeconds - Math.floor(Date.now() / 1000);
        if (distanceInSeconds <= 0) {
            clearInterval(timerInterval);
            showExpiredPage("Timer ran out.");
            return;
        }
        const hours = Math.floor(distanceInSeconds / 3600);
        const minutes = Math.floor((distanceInSeconds % 3600) / 60);
        const seconds = Math.floor(distanceInSeconds % 60);
        countdownElement.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }, 1000);

    // --- Validation Logic ---
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

    // --- Set up event listeners ---
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
        if (!runFinalValidation()) return;
        
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...';
        submitBtn.disabled = true;
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        data.timestamp = new Date().toISOString();
        delete data['terms-agree'];
        
        try {
            const response = await fetch(`${firebaseBaseUrl}${key}.json`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const successDiv = document.createElement('div');
                successDiv.innerHTML = `
                    <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 40px; border-radius: 6px; box-shadow: 0 20px 40px rgba(0,0,0,0.2); text-align: center; z-index: 1000; max-width: 400px; width: 90%;">
                        <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #059669 0%, #047857 100%); border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 2rem; color: white;">✓</div>
                        <h3 style="color: #059669; margin-bottom: 16px; font-size: 1.5rem;">Success!</h3>
                        <p style="color: #64748b; margin-bottom: 24px;">${translations[currentLang].submitSuccess}</p>
                        <p style="color: #94a3b8; font-size: 0.9rem;">Redirecting to our Facebook page...</p>
                    </div>
                    <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 999;"></div>
                `;
                document.body.appendChild(successDiv);
                setTimeout(() => {
                    window.location.href = "https://facebook.com/pamainternationalschool";
                }, 2000);
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
