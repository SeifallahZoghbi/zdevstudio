export function SiteFooter() {
  return (
    <footer style={{
      background: '#212529',
      color: '#6C757D',
      padding: '40px',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#FFFFFF',
          marginBottom: '12px'
        }}>
          ZDevStudio
        </div>
        <div style={{
          fontSize: '14px',
          marginBottom: '8px'
        }}>
          ZDevStudio LLC · Delaware, USA
        </div>
        <div style={{
          fontSize: '14px'
        }}>
          © {new Date().getFullYear()} ZDevStudio LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
