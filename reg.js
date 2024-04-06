document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // document.getElementById('successMessage').style.display = 'block';

    var selectedSubjects = document.querySelectorAll('input[name="subjects"]:checked').length;
    var examLevel = document.querySelector('input[name="examLevel"]:checked').value;


    if (selectedSubjects === 0 && examLevel === 'IGCSE') {
        alert("Please select at least one subject to submit.");
    } else if ((examLevel === 'AS' && selectedSubjects !== 3) || (examLevel === 'A' && selectedSubjects !== 4)) {
        alert("Please select the required number of subjects to submit.");
    } else {
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('payNow').style.display = 'block';
    }
});

// Function to populate subject options based on selected exam level
function populateSubjects() {
    var examLevel = document.querySelector('input[name="examLevel"]:checked').value;
    var subjectOptions = document.getElementById('subjectOptions');
    var subjects = '';
    var maxSubjects;
    var errorMessage;    
    if (examLevel === 'IGCSE') {
        subjects = `
            <label class="m">Choose Subjects (Select multiple)</label><br>
            <label><input type="checkbox" name="subjects" value="Accounting - 0452"> Accounting - 0452</label><br>
            <label><input type="checkbox" name="subjects" value="Accounting (9-1) - 0985"> Accounting (9-1) - 0985</label><br>
            <label><input type="checkbox" name="subjects" value="Afrikaans - Second Language - 0548"> Afrikaans - Second Language - 0548</label><br>
            <label><input type="checkbox" name="subjects" value="Agriculture - 0600"> Agriculture - 0600</label><br>
            <label><input type="checkbox" name="subjects" value="Arabic - First Language - 0508"> Arabic - First Language - 0508</label><br>
            <label><input type="checkbox" name="subjects" value="Arabic - First Language (9-1) - 7184"> Arabic - First Language (9-1) - 7184</label><br>
            <label><input type="checkbox" name="subjects" value="Arabic - Foreign Language - 0544"> Arabic - Foreign Language - 0544</label><br>
            <label><input type="checkbox" name="subjects" value="Art & Design - 0400"> Art & Design - 0400</label><br>
            <label><input type="checkbox" name="subjects" value="Art & Design (9-1) 0989"> Art & Design (9-1) 0989</label><br>
            <label><input type="checkbox" name="subjects" value="Bahasa Indonesia - 0538"> Bahasa Indonesia - 0538</label><br>
            <label><input type="checkbox" name="subjects" value="Biology - 0610"> Biology - 0610</label><br>
            <label><input type="checkbox" name="subjects" value="Biology (9-1) - 0970"> Biology (9-1) - 0970</label><br>
            <label><input type="checkbox" name="subjects" value="Business Studies - 0450"> Business Studies - 0450</label><br>
            <label><input type="checkbox" name="subjects" value="Business Studies (9-1) - 0986"> Business Studies (9-1) - 0986</label><br>
            <label><input type="checkbox" name="subjects" value="Chemistry - 0620"> Chemistry - 0620</label><br>
            <label><input type="checkbox" name="subjects" value="Chemistry (9-1) - 0971"> Chemistry (9-1) - 0971</label><br>
            <label><input type="checkbox" name="subjects" value="Chinese - First Language - 0509"> Chinese - First Language - 0509</label><br>
            <label><input type="checkbox" name="subjects" value="Chinese - Second Language - 0523"> Chinese - Second Language - 0523</label><br>
            <label><input type="checkbox" name="subjects" value="Arabic - Chinese (Mandarin) - Foreign Language (0547)"> Chinese (Mandarin) - Foreign Language (0547)</label><br>
            <label><input type="checkbox" name="subjects" value="Computer Science - 0478"> Computer Science - 0478</label><br>
            <label><input type="checkbox" name="subjects" value="Computer Science (9-1) - 0984"> Computer Science (9-1) - 0984</label><br>
            <label><input type="checkbox" name="subjects" value="Design & Technology - 0445"> Design & Technology - 0445</label><br>
            <label><input type="checkbox" name="subjects" value="Design & Technology (9-1) - 0979"> Design & Technology (9-1) - 0979</label><br>
            <label><input type="checkbox" name="subjects" value="Drama - 0411"> Drama - 0411</label><br>
            <label><input type="checkbox" name="subjects" value="Drama (9-1) - 0994"> Drama (9-1) - 0994</label><br>
            <label><input type="checkbox" name="subjects" value="Economics - 0455"> Economics - 0455</label><br>
            <label><input type="checkbox" name="subjects" value="Economics (9-1) - 0987"> Economics (9-1) - 0987</label><br>
            <label><input type="checkbox" name="subjects" value="English - First Language - 0500"> English - First Language - 0500</label><br>
            <label><input type="checkbox" name="subjects" value="English - First Language (9-1) - 0990"> English - First Language (9-1) - 0990</label><br>
            <label><input type="checkbox" name="subjects" value="English - First Language (US) - 0524"> English - First Language (US) - 0524</label><br>
            <label><input type="checkbox" name="subjects" value="English - Literature (US) - 0427"> English - Literature (US) - 0427</label><br>
            <label><input type="checkbox" name="subjects" value="English - Literature in English - 0475"> English - Literature in English - 0475</label><br>
            <label><input type="checkbox" name="subjects" value="English - Literature in English (9-1) - 0992"> English - Literature in English (9-1) - 0992</label><br>
            <label><input type="checkbox" name="subjects" value="English (as an Additional Language) - 0472"> English (as an Additional Language) - 0472</label><br>
            <label><input type="checkbox" name="subjects" value="English (as an Additional Language) (9-1) - 0772"> English (as an Additional Language) (9-1) - 0772</label><br>
            <label><input type="checkbox" name="subjects" value="English (Core) as a Second Language (Egypt) - 0465"> English (Core) as a Second Language (Egypt) - 0465</label><br>
            <label><input type="checkbox" name="subjects" value="English as a Second Language (Count-in speaking) (0511)"> English as a Second Language (Count-in speaking) (0511)</label><br>
            <label><input type="checkbox" name="subjects" value="English as a Second Language (Count-in Speaking) (9-1) (0991)"> English as a Second Language (Count-in Speaking) (9-1) (0991)</label><br>
            <label><input type="checkbox" name="subjects" value="English as a Second Language (Speaking endorsement) - 0510"> English as a Second Language (Speaking endorsement) - 0510</label><br>
            <label><input type="checkbox" name="subjects" value="English as a Second Language (Speaking Endorsement) (9-1) - 0993"> English as a Second Language (Speaking Endorsement) (9-1) - 0993</label><br>
            <label><input type="checkbox" name="subjects" value="Enterprise - 0454"> Enterprise - 0454</label><br>
            <label><input type="checkbox" name="subjects" value="Environmental Management - 0680"> Environmental Management - 0680</label><br>
            <label><input type="checkbox" name="subjects" value="Food & Nutrition - 0648"> Food & Nutrition - 0648</label><br>
            <label><input type="checkbox" name="subjects" value="French - First Language - 0501"> French - First Language - 0501</label><br>
            <label><input type="checkbox" name="subjects" value="French - Foreign Language - 0520"> French - Foreign Language - 0520</label><br>
            <label><input type="checkbox" name="subjects" value="French (9-1) - 7156"> French (9-1) - 7156</label><br>
            <label><input type="checkbox" name="subjects" value="Geography - 0460"> Geography - 0460</label><br>
            <label><input type="checkbox" name="subjects" value="Geography (9-1) - 0976"> Geography (9-1) - 0976</label><br>
            <label><input type="checkbox" name="subjects" value="German - First Language - 0505"> German - First Language - 0505</label><br>
            <label><input type="checkbox" name="subjects" value="German - Foreign Language - 0525"> German - Foreign Language - 0525</label><br>
            <label><input type="checkbox" name="subjects" value="German (9-1) - 7159"> German (9-1) - 7159</label><br>
            <label><input type="checkbox" name="subjects" value="Global Perspectives - 0457"> Global Perspectives - 0457</label><br>
            <label><input type="checkbox" name="subjects" value="Hindi as a Second Language - 0549"> Hindi as a Second Language - 0549</label><br>
            <label><input type="checkbox" name="subjects" value="History - 0470"> History - 0470</label><br>
            <label><input type="checkbox" name="subjects" value="History - American (US) - 0409"> History - American (US) - 0409</label><br>
            <label><input type="checkbox" name="subjects" value="History (9-1) - 0977"> History (9-1) - 0977</label><br>
            <label><input type="checkbox" name="subjects" value="Information and Communication Technology - 0417"> Information and Communication Technology - 0417</label><br>
            <label><input type="checkbox" name="subjects" value="Information and Communication Technology (9-1) - 0983"> Information and Communication Technology (9-1) - 0983</label><br>
            <label><input type="checkbox" name="subjects" value="IsiZulu as a Second Language - 0531"> IsiZulu as a Second Language - 0531</label><br>
            <label><input type="checkbox" name="subjects" value="Islamiyat - 0493"> Islamiyat - 0493</label><br>
            <label><input type="checkbox" name="subjects" value="Italian - Foreign Language - 0535"> Italian - Foreign Language - 0535</label><br>
            <label><input type="checkbox" name="subjects" value="Italian (9-1) - 7164"> Italian (9-1) - 7164</label><br>
            <label><input type="checkbox" name="subjects" value="Malay - First Language - 0696"> Malay - First Language - 0696</label><br>
            <label><input type="checkbox" name="subjects" value="Malay - Foreign Language - 0546"> Malay - Foreign Language - 0546</label><br>
            <label><input type="checkbox" name="subjects" value="Marine Science - 0697"> Marine Science - 0697</label><br>
            <label><input type="checkbox" name="subjects" value="Mathematics - 0580"> Mathematics - 0580</label><br>
            <label><input type="checkbox" name="subjects" value="Mathematics - Additional - 0606"> Mathematics - Additional - 0606</label><br>
            <label><input type="checkbox" name="subjects" value="Mathematics - International - 0607"> Mathematics - International - 0607</label><br>
            <label><input type="checkbox" name="subjects" value="Mathematics (9-1) - 0980"> Mathematics (9-1) - 0980</label><br>
            <label><input type="checkbox" name="subjects" value="Mathematics (US) - 0444"> Mathematics (US) - 0444</label><br>
            <label><input type="checkbox" name="subjects" value="Music - 0410"> Music - 0410</label><br>
            <label><input type="checkbox" name="subjects" value="Music (9-1) - 0978"> Music (9-1) - 0978</label><br>
            <label><input type="checkbox" name="subjects" value="Pakistan Studies - 0448"> Pakistan Studies - 0448</label><br>
            <label><input type="checkbox" name="subjects" value="Physical Education - 0413"> Physical Education - 0413</label><br>
            <label><input type="checkbox" name="subjects" value="Physical Education (9-1) - 0995"> Physical Education (9-1) - 0995</label><br>
            <label><input type="checkbox" name="subjects" value="Physical Science - 0652"> Physical Science - 0652</label><br>
            <label><input type="checkbox" name="subjects" value="Physics - 0625"> Physics - 0625</label><br>
            <label><input type="checkbox" name="subjects" value="Physics (9-1) - 0972"> Physics (9-1) - 0972</label><br>
            <label><input type="checkbox" name="subjects" value="Portuguese - First Language - 0504"> Portuguese - First Language - 0504</label><br>
            <label><input type="checkbox" name="subjects" value="Religious Studies - 0490"> Religious Studies - 0490</label><br>
            <label><input type="checkbox" name="subjects" value="Sanskrit - 0499"> Sanskrit - 0499</label><br>
            <label><input type="checkbox" name="subjects" value="Science - Combined - 0653"> Science - Combined - 0653</label><br>
            <label><input type="checkbox" name="subjects" value="Sciences - Co-ordinated (9-1) - 0973"> Sciences - Co-ordinated (9-1) - 0973</label><br>
            <label><input type="checkbox" name="subjects" value="Sciences - Co-ordinated (Double) - 0654"> Sciences - Co-ordinated (Double) - 0654</label><br>
            <label><input type="checkbox" name="subjects" value="Setswana - First Language - 0698"> Setswana - First Language - 0698</label><br>
            <label><input type="checkbox" name="subjects" value="Sociology - 0495"> Sociology - 0495</label><br>
            <label><input type="checkbox" name="subjects" value="Spanish - First Language - 0502"> Spanish - First Language - 0502</label><br>
            <label><input type="checkbox" name="subjects" value="Spanish - Foreign Language - 0530"> Spanish - Foreign Language - 0530</label><br>
            <label><input type="checkbox" name="subjects" value="Spanish - Literature - 0488"> Spanish - Literature - 0488</label><br>
            <label><input type="checkbox" name="subjects" value="Spanish - Literature in Spanish - 0474"> Spanish - Literature in Spanish - 0474</label><br>
            <label><input type="checkbox" name="subjects" value="Spanish (9-1) - 7160"> Spanish (9-1) - 7160</label><br>
            <label><input type="checkbox" name="subjects" value="Swahili - 0262"> Swahili - 0262</label><br>
            <label><input type="checkbox" name="subjects" value="Thai - First Language - 0518"> Thai - First Language - 0518</label><br>
            <label><input type="checkbox" name="subjects" value="Travel & Tourism - 0471"> Travel & Tourism - 0471</label><br>
            <label><input type="checkbox" name="subjects" value="Turkish - First Language - 0513"> Turkish - First Language - 0513</label><br>
            <label><input type="checkbox" name="subjects" value="Urdu as a Second Language - 0539"> Urdu as a Second Language - 0539</label><br>
            <label><input type="checkbox" name="subjects" value="Vietnamese - First Language - 0695"> Vietnamese - First Language - 0695</label><br>
            <label><input type="checkbox" name="subjects" value="World Literature - 0408"> World Literature - 0408</label><br>
        `;
        maxSubjects = Infinity; // No restriction on the number of subjects
        errorMessage = ''; // No error message for IGCSE
    } else if (examLevel === 'AS') {
        subjects = `
            <label class="m">Choose Subjects (Select up to 4)</label><br>
            <label><input type="checkbox" name="subjects" value="Accounting - 9706"> Accounting - 9706</label><br>
            <label><input type="checkbox" name="subjects" value="Afrikaans - Language - 8679"> Afrikaans - Language - 8679</label><br>
            <label><input type="checkbox" name="subjects" value="Arabic - 9680"> Arabic - 9680</label><br>
            <label><input type="checkbox" name="subjects" value="Arabic - Language - 8680"> Arabic - Language - 8680</label><br>
            <label><input type="checkbox" name="subjects" value="Art & Design - 9479"> Art & Design - 9479</label><br>
            <label><input type="checkbox" name="subjects" value="Biblical Studies - 9484"> Biblical Studies - 9484</label><br>
            <label><input type="checkbox" name="subjects" value="Biology - 9700"> Biology - 9700</label><br>
            <label><input type="checkbox" name="subjects" value="Business - 9609"> Business - 9609</label><br>
            <label><input type="checkbox" name="subjects" value="Chemistry - 9701"> Chemistry - 9701</label><br>
            <label><input type="checkbox" name="subjects" value="Chinese - Language - 8681"> Chinese - Language - 8681</label><br>
            <label><input type="checkbox" name="subjects" value="Chinese Language - 8238"> Chinese Language - 8238</label><br>
            <label><input type="checkbox" name="subjects" value="Classical Studies - 9274"> Classical Studies - 9274</label><br>
            <label><input type="checkbox" name="subjects" value="Computer Science - 9618"> Computer Science - 9618</label><br>
            <label><input type="checkbox" name="subjects" value="Design & Technology - 9705"> Design & Technology - 9705</label><br>
            <label><input type="checkbox" name="subjects" value="Design & Textiles - 9631"> Design & Textiles - 9631</label><br>
            <label><input type="checkbox" name="subjects" value="Digital Media & Design - 9481"> Digital Media & Design - 9481</label><br>
            <label><input type="checkbox" name="subjects" value="Drama - 9482"> Drama - 9482</label><br>
            <label><input type="checkbox" name="subjects" value="Economics - 9708"> Economics - 9708</label><br>
            <label><input type="checkbox" name="subjects" value="English - Language and Literature - 8695"> English - Language and Literature - 8695</label><br>
            <label><input type="checkbox" name="subjects" value="English - Literature - 9695"> English - Literature - 9695</label><br>
            <label><input type="checkbox" name="subjects" value="English General Paper - 8021"> English General Paper - 8021</label><br>
            <label><input type="checkbox" name="subjects" value="English Language - 9093"> English Language - 9093</label><br>
            <label><input type="checkbox" name="subjects" value="Environmental Management - 8291"> Environmental Management - 8291</label><br>
            <label><input type="checkbox" name="subjects" value="French - Language - 8682"> French - Language - 8682</label><br>
            <label><input type="checkbox" name="subjects" value="French Language & Literature - 9898"> French Language & Literature - 9898</label><br>
            <label><input type="checkbox" name="subjects" value="French Language - 8028"> French Language - 8028</label><br>
            <label><input type="checkbox" name="subjects" value="Geography - 9696"> Geography - 9696</label><br>
            <label><input type="checkbox" name="subjects" value="German - Language - 8027"> German - Language - 8027</label><br>
            <label><input type="checkbox" name="subjects" value="German - Language - 8683"> German - Language - 8683</label><br>
            <label><input type="checkbox" name="subjects" value="Global Perspectives & Research - 9239"> Global Perspectives & Research - 9239</label><br>
            <label><input type="checkbox" name="subjects" value="Hindi - Language - 8687"> Hindi - Language - 8687</label><br>
            <label><input type="checkbox" name="subjects" value="Hindi - Literature - 8675"> Hindi - Literature - 8675</label><br>
            <label><input type="checkbox" name="subjects" value="Hinduism - 9487"> Hinduism - 9487</label><br>
            <label><input type="checkbox" name="subjects" value="History - 9489"> History - 9489</label><br>
            <label><input type="checkbox" name="subjects" value="Information Technology - 9626"> Information Technology - 9626</label><br>
            <label><input type="checkbox" name="subjects" value="Islamic Studies - 9488"> Islamic Studies - 9488</label><br>
            <label><input type="checkbox" name="subjects" value="Japanese Language - 8281"> Japanese Language - 8281</label><br>
            <label><input type="checkbox" name="subjects" value="Law - 9084"> Law - 9084</label><br>
            <label><input type="checkbox" name="subjects" value="Marine Science - 9693"> Marine Science - 9693</label><br>
            <label><input type="checkbox" name="subjects" value="Mathematics - 9709"> Mathematics - 9709</label><br>
            <label><input type="checkbox" name="subjects" value="Mathematics - Further - 9231"> Mathematics - Further - 9231</label><br>
            <label><input type="checkbox" name="subjects" value="Media Studies - 9607"> Media Studies - 9607</label><br>
            <label><input type="checkbox" name="subjects" value="Music - 9483"> Music - 9483</label><br>
            <label><input type="checkbox" name="subjects" value="Physical Education - 9396"> Physical Education - 9396</label><br>
            <label><input type="checkbox" name="subjects" value="Physics - 9702"> Physics - 9702</label><br>
            <label><input type="checkbox" name="subjects" value="Portuguese - Language - 8684"> Portuguese - Language - 8684</label><br>
            <label><input type="checkbox" name="subjects" value="Psychology - 9990"> Psychology - 9990</label><br>
            <label><input type="checkbox" name="subjects" value="Sociology - 9699"> Sociology - 9699</label><br>
            <label><input type="checkbox" name="subjects" value="Spanish - First Language - 8665"> Spanish - First Language - 8665</label><br>
            <label><input type="checkbox" name="subjects" value="Spanish - Language - 8685"> Spanish - Language - 8685</label><br>
            <label><input type="checkbox" name="subjects" value="Spanish - Literature - 8673"> Spanish - Literature - 8673</label><br>
            <label><input type="checkbox" name="subjects" value="Spanish Language - 8022"> Spanish Language - 8022</label><br>
            <label><input type="checkbox" name="subjects" value="Sport & Physical Education - 8386"> Sport & Physical Education - 8386</label><br>
            <label><input type="checkbox" name="subjects" value="Tamil - Language - 8689"> Tamil - Language - 8689</label><br>
            <label><input type="checkbox" name="subjects" value="Thinking Skills - 9694"> Thinking Skills - 9694</label><br>
            <label><input type="checkbox" name="subjects" value="Travel & Tourism - 9395"> Travel & Tourism - 9395</label><br>
            <label><input type="checkbox" name="subjects" value="Urdu - Language - 8686"> Urdu - Language - 8686</label><br>
        `;
        maxSubjects = 4; // Maximum of 4 subjects allowed
        errorMessage = 'You can only select up to 4 subjects for AS level.';
    } else if (examLevel === 'A') {
        subjects = `
            <label class="m">Choose Subjects (Select up to 3)</label><br>
            <label><input type="checkbox" name="subjects" value="Accounting - 9706"> Accounting - 9706</label><br>
            <label><input type="checkbox" name="subjects" value="Arabic - 9680"> Arabic - 9680</label><br>
            <label><input type="checkbox" name="subjects" value="Art & Design - 9479"> Art & Design - 9479</label><br>
            <label><input type="checkbox" name="subjects" value="Biblical Studies - 9484"> Biblical Studies - 9484</label><br>
            <label><input type="checkbox" name="subjects" value="Biology - 9700"> Biology - 9700</label><br>
            <label><input type="checkbox" name="subjects" value="Business - 9609"> Business - 9609</label><br>
            <label><input type="checkbox" name="subjects" value="Chemistry - 9701"> Chemistry - 9701</label><br>
            <label><input type="checkbox" name="subjects" value="Chinese - Language & Literature - 9868"> Chinese - Language & Literature - 9868</label><br>
            <label><input type="checkbox" name="subjects" value="Chinese - 9715"> Chinese - 9715</label><br>
            <label><input type="checkbox" name="subjects" value="Classical Studies - 9274"> Classical Studies - 9274</label><br>
            <label><input type="checkbox" name="subjects" value="Computer Science - 9618"> Computer Science - 9618</label><br>
            <label><input type="checkbox" name="subjects" value="Design & Technology - 9705"> Design & Technology - 9705</label><br>
            <label><input type="checkbox" name="subjects" value="Design & Textiles - 9631"> Design & Textiles - 9631</label><br>
            <label><input type="checkbox" name="subjects" value="Digital Media & Design - 9481"> Digital Media & Design - 9481</label><br>
            <label><input type="checkbox" name="subjects" value="Drama - 9482"> Drama - 9482</label><br>
            <label><input type="checkbox" name="subjects" value="Economics - 9708"> Economics - 9708</label><br>
            <label><input type="checkbox" name="subjects" value="English - Literature - 9695"> English - Literature - 9695</label><br>
            <label><input type="checkbox" name="subjects" value="English Language - 9093"> English Language - 9093</label><br>
            <label><input type="checkbox" name="subjects" value="French - 9716"> French - 9716</label><br>
            <label><input type="checkbox" name="subjects" value="French Language & Literature - 9898"> French Language & Literature - 9898</label><br>
            <label><input type="checkbox" name="subjects" value="Geography - 9696"> Geography - 9696</label><br>
            <label><input type="checkbox" name="subjects" value="German - 9717"> German - 9717</label><br>
            <label><input type="checkbox" name="subjects" value="German Language & Literature - 9897"> German Language & Literature - 9897</label><br>
            <label><input type="checkbox" name="subjects" value="Global Perspectives & Research - 9239"> Global Perspectives & Research - 9239</label><br>
            <label><input type="checkbox" name="subjects" value="Hindi - 9687"> Hindi - 9687</label><br>
            <label><input type="checkbox" name="subjects" value="Hinduism - 9487"> Hinduism - 9487</label><br>
            <label><input type="checkbox" name="subjects" value="History - 9489"> History - 9489</label><br>
            <label><input type="checkbox" name="subjects" value="Information Technology - 9626"> Information Technology - 9626</label><br>
            <label><input type="checkbox" name="subjects" value="Islamic Studies - 9488"> Islamic Studies - 9488</label><br>
            <label><input type="checkbox" name="subjects" value="Law - 9084"> Law - 9084</label><br>
            <label><input type="checkbox" name="subjects" value="Marine Science - 9693"> Marine Science - 9693</label><br>
            <label><input type="checkbox" name="subjects" value="Mathematics - 9709"> Mathematics - 9709</label><br>
            <label><input type="checkbox" name="subjects" value="Mathematics - Further - 9231"> Mathematics - Further - 9231</label><br>
            <label><input type="checkbox" name="subjects" value="Media Studies - 9607"> Media Studies - 9607</label><br>
            <label><input type="checkbox" name="subjects" value="Music - 9483"> Music - 9483</label><br>
            <label><input type="checkbox" name="subjects" value="Physical Education - 9396"> Physical Education - 9396</label><br>
            <label><input type="checkbox" name="subjects" value="Physics - 9702"> Physics - 9702</label><br>
            <label><input type="checkbox" name="subjects" value="Portuguese - 9718"> Portuguese - 9718</label><br>
            <label><input type="checkbox" name="subjects" value="Psychology - 9990"> Psychology - 9990</label><br>
            <label><input type="checkbox" name="subjects" value="Sociology - 9699"> Sociology - 9699</label><br>
            <label><input type="checkbox" name="subjects" value="Spanish - Language & Literature - 9844"> Spanish - Language & Literature - 9844</label><br>
            <label><input type="checkbox" name="subjects" value="Spanish - 9719"> Spanish - 9719</label><br>
            <label><input type="checkbox" name="subjects" value="Tamil - 9689"> Tamil - 9689</label><br>
            <label><input type="checkbox" name="subjects" value="Thinking Skills - 9694"> Thinking Skills - 9694</label><br>
            <label><input type="checkbox" name="subjects" value="Travel & Tourism - 9395"> Travel & Tourism - 9395</label><br>
            <label><input type="checkbox" name="subjects" value="Urdu - Pakistan only - 9686"> Urdu - Pakistan only - 9686</label><br>
            <label><input type="checkbox" name="subjects" value="Urdu - 9676"> Urdu - 9676</label><br>
        `;
        maxSubjects = 3; // Maximum of 3 subjects allowed
        errorMessage = 'You can only select up to 3 subjects for A level.';
    }
    subjectOptions.innerHTML = subjects;

    var checkboxes = document.querySelectorAll('input[name="subjects"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            var checkedCount = document.querySelectorAll('input[name="subjects"]:checked').length;
            if (checkedCount > maxSubjects) {
                alert(errorMessage); // Show error message
                this.checked = false; // Uncheck the checkbox
            }
        });
    });
}

// Event listener to trigger populateSubjects function on radio button change
var radioButtons = document.querySelectorAll('input[name="examLevel"]');
radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('change', populateSubjects);
});

