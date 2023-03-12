import React from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';

import styles from './index.module.scss';

const Footer = () => {
  const router = useRouter();

  return (
    <>
      {router.pathname !== '/lyrics' && (
        <footer className={styles.footer}>
          <Link href='/lyrics'>
            <a className={styles.footer_lyrics}>
              <span></span>Lyrics<span></span>
            </a>
          </Link>
        </footer>
      )}
    </>
  );
};

export default Footer;
