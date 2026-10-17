const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}
const privacyLink = document.getElementById('privacy-link');
const privacyDialog = document.getElementById('privacy-dialog');
const closeDialog = document.querySelector('.dialog-close');
if (privacyLink && privacyDialog) {
  privacyLink.addEventListener('click', (e) => {
    e.preventDefault();
    privacyDialog.showModal();
  });
}
if (closeDialog && privacyDialog) closeDialog.addEventListener('click', () => privacyDialog.close());

// EBS certification updates
const certStyles = document.createElement('link');
certStyles.rel = 'stylesheet';
certStyles.href = 'certifications.css';
document.head.appendChild(certStyles);

const trustItems = document.querySelectorAll('.trust-row span');
if (trustItems[0]) trustItems[0].textContent = 'QuickBooks Online Level 1 & 2 Certified';
if (trustItems[1]) trustItems[1].textContent = 'QuickBooks Workforce Certified';
if (trustItems[2]) trustItems[2].textContent = 'Small Business Focused';

const aboutParagraphs = document.querySelectorAll('.about-copy p');
if (aboutParagraphs[2]) {
  aboutParagraphs[2].textContent = 'Her background includes prior tax preparation work with H&R Block and experience serving as an Assistant Manager at a tax business, along with Intuit ProAdvisor certifications in QuickBooks Online Level 1, QuickBooks Online Level 2, and QuickBooks Workforce.';
}

const credentialItems = document.querySelectorAll('.credential-row div');
if (credentialItems[0]) credentialItems[0].innerHTML = '<strong>Accounting Degree</strong><span>Associate of Applied Science (AAS)</span>';
if (credentialItems[1]) credentialItems[1].innerHTML = '<strong>QuickBooks Online</strong><span>Level 1 & Level 2 Certified</span>';
if (credentialItems[2]) credentialItems[2].innerHTML = '<strong>QuickBooks Workforce</strong><span>Certified</span>';

const aboutSection = document.getElementById('about');
if (aboutSection) {
  const certificationSection = document.createElement('section');
  certificationSection.className = 'certifications-section';
  certificationSection.id = 'certifications';
  certificationSection.innerHTML = `
    <div class="container">
      <div class="certifications-heading">
        <span class="eyebrow">QUICKBOOKS CERTIFICATIONS</span>
        <h2>Certified expertise to support your books and payroll.</h2>
        <p>Adrienne Enriquez has earned three Intuit ProAdvisor certifications covering foundational and advanced QuickBooks Online workflows as well as QuickBooks Workforce payroll.</p>
      </div>
      <div class="certification-grid">
        <article class="certification-card">
          <img src="assets/qbo-level-1-badge.svg" alt="Intuit ProAdvisor QuickBooks Level 1 Certified badge" loading="lazy" />
          <h3>QuickBooks Online Level 1</h3>
          <p>Certified in core QuickBooks Online bookkeeping workflows and day-to-day financial management.</p>
        </article>
        <article class="certification-card">
          <img src="assets/qbo-level-2-badge.svg" alt="Intuit ProAdvisor QuickBooks Level 2 Certified badge" loading="lazy" />
          <h3>QuickBooks Online Level 2</h3>
          <p>Certified in advanced QuickBooks Online workflows, reporting, and financial management.</p>
        </article>
        <article class="certification-card">
          <img src="assets/workforce-badge.svg" alt="Intuit ProAdvisor QuickBooks Workforce Certified badge" loading="lazy" />
          <h3>QuickBooks Workforce</h3>
          <p>Certified in QuickBooks Workforce payroll setup, processing, taxes, employee workflows, and payroll reporting.</p>
        </article>
      </div>
      <p class="certification-note">Intuit and QuickBooks are trademarks of Intuit Inc. Certification badges are displayed to identify earned ProAdvisor credentials.</p>
    </div>`;
  aboutSection.insertAdjacentElement('afterend', certificationSection);
}

if (nav) {
  const processLink = nav.querySelector('a[href="#process"]');
  if (processLink && !nav.querySelector('a[href="#certifications"]')) {
    const certLink = document.createElement('a');
    certLink.href = '#certifications';
    certLink.textContent = 'Certifications';
    processLink.insertAdjacentElement('beforebegin', certLink);
    certLink.addEventListener('click', () => nav.classList.remove('open'));
  }
}
