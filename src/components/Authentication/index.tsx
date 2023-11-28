import styles from './style.module.css';
import AuthForm from './AuthForm';
import React from 'react';

function Authentication() {
  return (
    <div className={styles.Authentication}>
      <div className={styles.logo}>
        <img src="./tinkoffLogo.svg" alt="TINKOFFLOGO" />
      </div>
      <div className={styles.fullcard}>
        <AuthForm />
        <div className={styles.linkToRegister}>
          <a href="" className={styles.link}>
            <p>Я еще не зарегистрирован в системе</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
