
// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-JQTRQ9RG9Q');

// CV Download Tracking
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href$=".pdf"], a[href*="drive.google.com"]');
  links.forEach(link => {
    link.addEventListener('click', () => {
      gtag('event', 'download', {
        event_category: 'CV',
        event_label: link.href,
        value: 1
      });
    });
  });
});

// Cookie Consent Banner
document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('cookieAccepted')) {
    const banner = document.createElement('div');
    banner.innerHTML = `
      <div style="position:fixed; bottom:0; left:0; width:100%; background:#111; color:#fff; padding:1rem; z-index:9999; text-align:center; font-size:14px;">
        We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
        <button id="acceptCookies" style="margin-left:1rem; padding:0.3rem 1rem; background:#4caf50; color:white; border:none; border-radius:4px;">Accept</button>
      </div>
    `;
    document.body.appendChild(banner);
    document.getElementById('acceptCookies').addEventListener('click', () => {
      localStorage.setItem('cookieAccepted', true);
      banner.remove();
    });
  }
});

// Floating AI Badge
document.addEventListener('DOMContentLoaded', () => {
  const badge = document.createElement('div');
  badge.textContent = '🤖 AI-Enhanced';
  Object.assign(badge.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    background: '#222',
    color: '#0ff',
    padding: '8px 12px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: 'bold',
    zIndex: '10000',
    boxShadow: '0 0 10px #0ff',
    animation: 'pulse 2s infinite'
  });

  const style = document.createElement('style');
  style.textContent = `
    @keyframes pulse {
      0% { box-shadow: 0 0 10px #0ff; }
      50% { box-shadow: 0 0 20px #0ff; }
      100% { box-shadow: 0 0 10px #0ff; }
    }
  `;
  document.head.appendChild(style);
  document.body.appendChild(badge);
});
