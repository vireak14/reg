// Language translations
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
          },
    };
    
    let currentLang = "en";
    
    function setLanguage(lang) {
        currentLang = lang;
        document.querySelectorAll("[data-lang-key]").forEach((elem) => {
            const key = elem.getAttribute("data-lang-key");
            if (translations[lang] && translations[lang][key]) {
                // For buttons with icons, preserve the icon
                if (elem.tagName === 'BUTTON' && elem.querySelector('i')) {
                    const icon = elem.querySelector('i').outerHTML;
                    elem.innerHTML = icon + ' ' + translations[lang][key];
                } else {
                    elem.textContent = translations[lang][key];
                }
            }
        });
        document.documentElement.lang = lang;
        document.getElementById("lang-en").classList.toggle("active", lang === "en");
        document.getElementById("lang-km").classList.toggle("active", lang === "km");
    }
    
    function getQueryParam(name) {
        const params = new URLSearchParams(window.location.search);
        return params.get(name);
    }
    
    const key = getQueryParam("key");
    const expiry = parseInt(getQueryParam("expiry"));
    const firebaseBaseUrl = "https://pamais-server-default-rtdb.asia-southeast1.firebasedatabase.app/";
    
    const countdownElement = document.getElementById("countdown");
    const timerContainer = document.querySelector(".timer-container");
    const regForm = document.getElementById("regForm");
    const registrationPrompt = document.querySelector(".registration-prompt");
    const progressFill = document.getElementById("progressFill");
    const progressText = document.getElementById("progressText");
    
    // Get sections to toggle visibility
    const fatherInfoSection = document.getElementById("fatherInfo");
    const motherInfoSection = document.getElementById("motherInfo");
    const addressInfoSection = document.getElementById("addressInfo");
    
    
    function updateCountdown() {
        const now = Date.now();
        const distance = expiry - now;
    
        if (distance <= 0) {
            clearInterval(timerInterval);
            countdownElement.textContent = translations[currentLang].linkInvalid;
            timerContainer.style.background = "#fee2e2";
            timerContainer.style.borderColor = "#fca5a5";
            countdownElement.style.color = "#dc2626";
    
            regForm.querySelectorAll("input, select, button").forEach((el) => (el.disabled = true));
            registrationPrompt.style.display = "none";
            regForm.style.opacity = "0.6";
            regForm.style.pointerEvents = "none";
            return;
        }
    
        const hours = Math.floor(distance / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        countdownElement.textContent = `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    
        // Change color based on remaining time
        if (distance < 300000) { // Less than 5 minutes
            countdownElement.style.color = "#dc2626";
            timerContainer.style.background = "#fee2e2";
        } else if (distance < 900000) { // Less than 15 minutes
            countdownElement.style.color = "#d97706";
            timerContainer.style.background = "#fef3c7";
        }
    }
    
    function updateProgress() {
        const formInputs = regForm.querySelectorAll('input[required], select[required]');
        const filledInputs = Array.from(formInputs).filter(input => {
            // Only count visible inputs
            return input.offsetParent !== null && input.value.trim() !== '';
        });
        const totalRequired = Array.from(formInputs).filter(input => input.offsetParent !== null);
        
        const progress = totalRequired.length > 0 ? (filledInputs.length / totalRequired.length) * 100 : 0;
        
        progressFill.style.width = progress + '%';
        progressText.textContent = Math.round(progress) + '% Complete';
    }
    
    let timerInterval;
    if (expiry && !isNaN(expiry)) {
        timerInterval = setInterval(updateCountdown, 1000);
        updateCountdown();
    } else {
        timerContainer.style.display = 'none';
    }
    
    document.addEventListener("DOMContentLoaded", () => {
        setLanguage("en");
    
        // Language switcher
        document.getElementById("lang-en").addEventListener("click", () => setLanguage("en"));
        document.getElementById("lang-km").addEventListener("click", () => setLanguage("km"));
    
        // Registration prompt buttons
        const btnYes = document.getElementById("btnYes");
        const btnNo = document.getElementById("btnNo");
    
        // YES CLICK - RETURNING STUDENT
        btnYes.addEventListener("click", () => {
            registrationPrompt.style.display = "none";
            regForm.style.display = "block";
            
            // Hide parent and address info
            fatherInfoSection.style.display = "none";
            motherInfoSection.style.display = "none";
            addressInfoSection.style.display = "none";
            
            updateProgress();
        });
    
        // NO CLICK - NEW STUDENT
        btnNo.addEventListener("click", () => {
            registrationPrompt.style.display = "none";
            regForm.style.display = "block";
            
            // Show all sections
            fatherInfoSection.style.display = "block";
            motherInfoSection.style.display = "block";
            addressInfoSection.style.display = "block";
            
            updateProgress();
        });
    
        // Add input event listeners for progress tracking
        regForm.addEventListener('input', updateProgress);
        regForm.addEventListener('change', updateProgress);
    
        // Add focus animations to form inputs
        const formInputs = regForm.querySelectorAll('input, select');
        formInputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.style.transform = 'translateY(-2px)';
                input.parentElement.style.transition = 'transform 0.2s ease';
            });
            
            input.addEventListener('blur', () => {
                input.parentElement.style.transform = 'translateY(0)';
            });
        });
    });
    
    // Form submission
    document.getElementById("regForm").addEventListener("submit", async function (e) {
        e.preventDefault();
        
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
        submitBtn.disabled = true;
        submitBtn.style.background = '#6b7280';
        
        if (!key || Date.now() > expiry) {
            alert(translations[currentLang].linkInvalid);
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
            return;
        }
    
        const formData = new FormData(e.target);
        const data = {
            kName: formData.get("txt_kName"),
            eName: formData.get("txt_eName"),
            gender: formData.get("sfComboBox_gender"),
            dob: formData.get("sfDateValue_dob"),
            studentPhone: formData.get("txt_student_phone"),
            previousSchool: formData.get("txt_previous_school"),
            fatherName: formData.get("txt_father_name"),
            fatherPhone: formData.get("txt_father_phone"),
            fatherJob: formData.get("txt_father_job"),
            motherName: formData.get("txt_mother_name"),
            motherPhone: formData.get("txt_mother_phone"),
            motherJob: formData.get("txt_mother_job"),
            province: formData.get("sfComboBox_parent_province"),
            district: formData.get("sfComboBox_parent_district"),
            commune: formData.get("sfComboBox_parent_commune"),
            village: formData.get("sfComboBox_parent_village"),
            email: formData.get("f_email"),
            timestamp: new Date().toISOString(),
        };
    
        try {
            const response = await fetch(`${firebaseBaseUrl}${key}.json`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
    
            if (response.ok) {
                // Success animation
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Success!';
                submitBtn.style.background = 'linear-gradient(135deg, #059669 0%, #047857 100%)';
                
                // Show success message
                const successDiv = document.createElement('div');
                successDiv.innerHTML = `
                    <div style="
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background: white;
                        padding: 40px;
                        border-radius: 6px;
                        box-shadow: 0 20px 40px rgba(0,0,0,0.2);
                        text-align: center;
                        z-index: 1000;
                        max-width: 400px;
                        width: 90%;
                    ">
                        <div style="
                            width: 80px;
                            height: 80px;
                            background: linear-gradient(135deg, #059669 0%, #047857 100%);
                            border-radius: 50%;
                            margin: 0 auto 20px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 2rem;
                            color: white;
                            animation: checkmark 0.5s ease-out;
                        ">
                            ✓
                        </div>
                        <h3 style="color: #059669; margin-bottom: 16px; font-size: 1.5rem;">Success!</h3>
                        <p style="color: #64748b; margin-bottom: 24px;">${translations[currentLang].submitSuccess}</p>
                        <p style="color: #94a3b8; font-size: 0.9rem;">Redirecting to our Facebook page...</p>
                    </div>
                    <div style="
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0,0,0,0.5);
                        z-index: 999;
                    "></div>
                `;
                document.body.appendChild(successDiv);
                
                setTimeout(() => {
                    window.location.href = "https://facebook.com/pamainternationalschool";
                }, 2000);
            } else {
                throw new Error('Submission failed');
            }
        } catch (err) {
            // Error state
            submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Try Again';
            submitBtn.style.background = 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)';
            alert(translations[currentLang].submitError + err.message);
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 3000);
        }
    });
    
    // Add some CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes checkmark {
            0% { transform: scale(0); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
        }
        
        .form-control:focus-within label {
            color: #4f46e5 !important;
            transform: translateY(-2px);
        }
        
        .btn:active {
            transform: translateY(1px);
        }
    `;
    document.head.appendChild(style);