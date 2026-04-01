import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const styles = {
    page: {
      minHeight: 'calc(100vh - 80px)',
      backgroundColor: '#f4f7fb',
      padding: '40px 20px'
    },
    container: {
      maxWidth: '1000px',
      margin: '0 auto'
    },
    headerCard: {
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      padding: '32px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
      marginBottom: '24px'
    },
    title: {
      fontSize: '34px',
      fontWeight: '700',
      color: '#1f2937',
      marginBottom: '10px'
    },
    subtitle: {
      fontSize: '18px',
      color: '#6b7280',
      margin: 0
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '20px',
      alignItems: 'stretch'
    },
    cardLink: {
      textDecoration: 'none',
      display: 'block',
      height: '100%'
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.07)',
      minHeight: '260px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    cardBody: {
      flex: 1
    },
    cardTitle: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#111827',
      marginBottom: '10px'
    },
    cardText: {
      fontSize: '15px',
      color: '#6b7280',
      lineHeight: '1.5',
      margin: 0
    },
    buttonWrap: {
      marginTop: '20px'
    },
    button: {
      display: 'inline-block',
      backgroundColor: '#2563eb',
      color: '#ffffff',
      padding: '10px 16px',
      borderRadius: '10px',
      fontWeight: '600',
      fontSize: '14px'
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.headerCard}>
          <h1 style={styles.title}>Book Dashboard</h1>
          <p style={styles.subtitle}>
            Welcome to your main dashboard. Choose an action below to manage your books.
          </p>
        </div>

        <div style={styles.grid}>
          <Link to="/add-book" style={styles.cardLink}>
            <div style={styles.card}>
              <div style={styles.cardBody}>
                <div style={styles.cardTitle}>Add Book</div>
                <p style={styles.cardText}>
                  Create a new book record and save it to your collection.
                </p>
              </div>
              <div style={styles.buttonWrap}>
                <span style={styles.button}>Open</span>
              </div>
            </div>
          </Link>

          <Link to="/edit-book" style={styles.cardLink}>
            <div style={styles.card}>
              <div style={styles.cardBody}>
                <div style={styles.cardTitle}>Edit Book</div>
                <p style={styles.cardText}>
                  Update the details of an existing book using its title.
                </p>
              </div>
              <div style={styles.buttonWrap}>
                <span style={styles.button}>Open</span>
              </div>
            </div>
          </Link>

          <Link to="/delete-book" style={styles.cardLink}>
            <div style={styles.card}>
              <div style={styles.cardBody}>
                <div style={styles.cardTitle}>Delete Book</div>
                <p style={styles.cardText}>
                  Remove a book from the database when it is no longer needed.
                </p>
              </div>
              <div style={styles.buttonWrap}>
                <span style={styles.button}>Open</span>
              </div>
            </div>
          </Link>

          <Link to="/books" style={styles.cardLink}>
            <div style={styles.card}>
              <div style={styles.cardBody}>
                <div style={styles.cardTitle}>View All Books</div>
                <p style={styles.cardText}>
                  Browse the full list of books and view their saved information.
                </p>
              </div>
              <div style={styles.buttonWrap}>
                <span style={styles.button}>Open</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;