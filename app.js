// 1. Auto-focus MPIN Inputs
const pinBoxes = document.querySelectorAll('.pin-box');
pinBoxes.forEach((box, index) => {
  box.addEventListener('input', () => {
    // If a number is typed, move to the next box
    if (box.value.length === 1 && index < pinBoxes.length - 1) {
      pinBoxes[index + 1].focus();
    }
  });
});

// 2. Switch Screens on Sign In
const signInBtn = document.getElementById('sign-in-btn');
const loginScreen = document.getElementById('login-screen');
const dashboardScreen = document.getElementById('dashboard-screen');

signInBtn.addEventListener('click', () => {
  loginScreen.classList.remove('active');
  dashboardScreen.classList.add('active');
});

// 3. Toggle Balances Logic
function setupToggle(toggleIconId, balanceSpanId, realBalance) {
  const toggleIcon = document.getElementById(toggleIconId);
  const balanceSpan = document.getElementById(balanceSpanId);
  let isVisible = false;

  toggleIcon.addEventListener('click', () => {
    isVisible = !isVisible;
    if (isVisible) {
      balanceSpan.innerText = realBalance;
      toggleIcon.classList.remove('fa-eye-slash');
      toggleIcon.classList.add('fa-eye');
    } else {
      balanceSpan.innerText = '*******';
      toggleIcon.classList.remove('fa-eye');
      toggleIcon.classList.add('fa-eye-slash');
    }
  });
}

// Initialize the toggles with the correct values from your screenshots
setupToggle('toggle-operative', 'operative-balance', 'INR 0.10');
setupToggle('toggle-loan', 'loan-balance', 'INR -2,11,148.00');